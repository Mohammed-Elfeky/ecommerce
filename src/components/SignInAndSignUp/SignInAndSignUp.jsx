import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import './SignInAndSignUp.scss'
function SignInAndSignUp() {
    return (
        <div className="SignInAndSignUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUp
