import {
    takeLatest,
    all,
    call,
    put
} from 'redux-saga/effects'
import {userTypes} from "../user/userTypes"
import {clearCart} from './cartActions'

export function* clearCartGenerator(){
    yield put(clearCart())
}
export function* onSigoutSuccess(){
    yield takeLatest(userTypes.SIGNOUT_SUCCESS,clearCartGenerator)
}
export function* cartSagas(){
    yield all([call(onSigoutSuccess)])
}