import FormInput from "../MyFromInput/MyFromInput";
import MyButton from "../MyButton/MyButton";
import { useState } from "react";
import {
  auth,
  createUserProfileDocument,
} from "../../FirebaseConfig/FirebaseConfig";
import "./SignUp.scss";
import { signupStart } from "../../Redux/user/userActions";
import { connect } from "react-redux";

function SignUp({ signupStart }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    //check if the password is  confirmed
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signupStart({ email, password, displayName });

    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
    </div>
  );
}

export default connect(null, { signupStart })(SignUp);
