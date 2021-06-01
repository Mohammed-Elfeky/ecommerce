import {
    takeLatest,
    put,
    call,
    all
} from 'redux-saga/effects'
import ShopActionTypes from './shopTypes'
import {
    fetchCollectionsSuccess,
    fetchCollectionsFail
} from './shopActions'

import {
    firestore,
    convertCollectionsSnapshotToMap
} from '../../FirebaseConfig/FirebaseConfig'

// getting the "collections" collection from the database and set it to collections state //
export function* fetchCollectionsStartAsync() {
    try {
        //creating ref for the "collections" collection
        const collectiosRef = firestore.collection('collections')
        //getting the "collections" collection
        const snapshot = yield collectiosRef.get()
        //converting the collections array into an object
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        //setting that object to the collections state in the shop reducer
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        //if there is an error set that error message to the errorMessage state in the shop reducer 
        yield put(fetchCollectionsFail(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}