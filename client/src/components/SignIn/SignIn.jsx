import { useState } from "react";
import FormInput from "../MyFromInput/MyFromInput";
import MyButton from "../MyButton/MyButton";
import "./SignIn.scss";
import { connect } from "react-redux";
import {
  signInWithEmailStart,
  signInWithGoogleStart,
} from "../../Redux/user/userActions";
function SignIn({ signInWithGoogleStart, signInWithEmailStart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailStart({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="SignIn">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <MyButton type="submit" content="sign in" />
        <MyButton
          type="button"
          onClick={signInWithGoogleStart}
          content="sign in with google"
        />
      </form>
    </div>
  );
}

export default connect(null, { signInWithGoogleStart, signInWithEmailStart })(
  SignIn
);
