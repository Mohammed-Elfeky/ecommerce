import {
    takeLatest,
    all,
    call,
    put
} from 'redux-saga/effects'
import {
    userTypes
} from './userTypes'
import {
    provider,
    auth,
    createUserProfileDocument,
    getCurrentUser
} from '../../FirebaseConfig/FirebaseConfig'

import {
    signInSuccess,
    signInFail,
    signOutSuccess,
    signoutFail
} from './userActions'

export function* getSnapshotFromUserAuth(user,additionalData) {
    //if the user has a doc in the database we return the user ref 
    //if not we create a doc to this user and also return the user ref 
    const userRef = yield call(createUserProfileDocument, user,additionalData)

    //get the user doc from "users" collection
    const userSnapshot = yield userRef.get()

    //set the currentUser state  in the user reducer to the user 
    yield put(signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
    }))
}

export function* googleSignin() {

    try {
        //sigin in with google popup this return a user object 
        const {
            user
        } = yield auth.signInWithPopup(provider)

        yield getSnapshotFromUserAuth(user)

    } catch (error) {
        //set the error state in the user reducer to the error 
        yield put(signInFail(error))
    }

}

export function* emailSignin({
    payload: {
        email,
        password
    }
}) {
    try {
        //sigin in with email this return a user object 
        const {
            user
        } = yield auth.signInWithEmailAndPassword(email, password)

        yield getSnapshotFromUserAuth(user)

    } catch (error) {
        //set the error state in the user reducer to the error 
        yield put(signInFail(error))
    }
}

export function* isUserAuthenticated() {
    try {
        //if there is logged in user this returns a user object if not it returns null
        const userAuth = yield getCurrentUser();
        //if there is no logged in user dont do any thing
        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth)

    } catch (error) {
        //set the error state in the user reducer to the error 
        yield put(signInFail(error));
    }
}

export function* siginOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signoutFail(error.message))
    }
}

export function* signup({payload: {email,password,displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user,{displayName})
    } catch (error) {
        yield put(signInFail(error.message))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGNIN_START, googleSignin)
}
export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGININ_START, emailSignin)
}
export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}
export function* onSignOutStart() {
    yield takeLatest(userTypes.SIGNOUT_START, siginOut)
}
export function* onSignupStart() {
    yield takeLatest(userTypes.SIGNUP_START, signup)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignupStart)
    ])
}