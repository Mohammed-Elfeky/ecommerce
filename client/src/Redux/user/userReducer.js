import {userTypes} from './userTypes'
const initialState = {
    currentUser: null,
    error:null,
    signUpError:null,
    signInError:null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case userTypes.SIGNIN_SUCCESS:
        return{
            ...state,
            currentUser:action.payload,
            error:null,
            signUpError:null,
            signInError:null
        }

        case userTypes.SIGNOUT_SUCCESS:
        return{
            ...state,
            currentUser:null,
            error:null
        }

        case userTypes.SIGNIN_FAIL:
        return{
            ...state,
            error:null,
            signUpError:null,
            currentUser:null,
            signInError:action.payload
        }
        
        case userTypes.SIGNOUT_FAIL:
        return{
            ...state,
            error:action.payload
        }

        case userTypes.SIGNUP_FAIL:
        return{
            ...state,
            error:null,
            signInError:null,
            currentUser:null,
            signUpError:action.payload
        }
        default:
        return state;
    }
}

export default userReducer;