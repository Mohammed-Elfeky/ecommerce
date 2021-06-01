import {userTypes} from './userTypes'
const initialState = {
    currentUser: null,
    error:null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.SIGNIN_SUCCESS:
        return{
            ...state,
            currentUser:action.payload,
            error:null
        }
        case userTypes.SIGNOUT_SUCCESS:
        return{
            ...state,
            currentUser:null,
            error:null
        }
        case userTypes.SIGNIN_FAIL:
        case userTypes.SIGNOUT_FAIL:
        return{
            ...state,
            error:action.payload
        }
        default:
        return state;
    }
}

export default userReducer;