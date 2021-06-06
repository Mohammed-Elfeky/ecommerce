import FormInput from "../MyFromInput/MyFromInput";
import MyButton from "../MyButton/MyButton";
import { useState } from "react";
import "./SignUp.scss";
import { signupStart, signUpFail } from "../../Redux/user/userActions";
import { connect } from "react-redux";
import { signUpErrorSelector } from "../../Redux/user/userSelectors";
import { createStructuredSelector } from "reselect";

function SignUp({ signupStart, signUpError, signUpFail }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    //check if the password is  confirmed
    if (password !== confirmPassword) {
      signUpFail("passwords don't match");
      return;
    }

    signupStart({ email, password, displayName });
  };
  return (
    <div className="SignUp">
      <h2>Sign up with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          change={setDisplayName}
          type="text"
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          change={setEmail}
          type="email"
          value={email}
          label="email"
          required
        />
        <FormInput
          type="password"
          change={setPassword}
          value={password}
          label="password"
          required
        />
        <FormInput
          type="password"
          change={setConfirmPassword}
          value={confirmPassword}
          label="Confirm Password"
          required
        />
        <MyButton type="submit" content="sign up" />
      </form>
      <div style={{ textAlign: "center", color: "red" }}>{signUpError}</div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  signUpError: signUpErrorSelector,
});
export default connect(mapStateToProps, { signupStart, signUpFail })(SignUp);
