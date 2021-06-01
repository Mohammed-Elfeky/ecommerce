import {
    userTypes
} from './userTypes'

export const signInWithGoogleStart = () => {
    return {
        type: userTypes.GOOGLE_SIGNIN_START
    }
}

export const signInWithEmailStart = (emailAndPasswordObject) => {
    return {
        type: userTypes.EMAIL_SIGININ_START,
        payload: emailAndPasswordObject
    }
}

export const signInSuccess = (userSnapshot) => {
    return {
        type: userTypes.SIGNIN_SUCCESS,
        payload: userSnapshot
    }
}

export const signInFail = (error) => {
    return {
        type: userTypes.SIGNIN_FAIL,
        payload: error.message
    }
}

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: userTypes.SIGNOUT_START
});

export const signOutSuccess = () => ({
    type: userTypes.SIGNOUT_SUCCESS
});

export const signoutFail = (error) => ({
    type: userTypes.SIGNOUT_FAIL,
    payload: error
});

export const signupStart = (signupDataObject) => {
    return {
        type: userTypes.SIGNUP_START,
        payload: signupDataObject
    }
}