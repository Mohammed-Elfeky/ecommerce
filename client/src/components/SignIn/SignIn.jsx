import { useEffect, useState } from "react";
import FormInput from "../MyFromInput/MyFromInput";
import MyButton from "../MyButton/MyButton";
import "./SignIn.scss";
import { connect } from "react-redux";
import {
  signInWithEmailStart,
  signInWithGoogleStart,
} from "../../Redux/user/userActions";
import { signInErrorSelector } from "../../Redux/user/userSelectors";
import { createStructuredSelector } from "reselect";
function SignIn({ signInWithGoogleStart, signInWithEmailStart, signInError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailStart({ email, password });
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
        <MyButton makeInline type="submit" content="sign in" />
        <MyButton
          makeInline
          type="button"
          onClick={signInWithGoogleStart}
          content="sign in with google"
        />
      </form>
      <div style={{ textAlign: "center", color: "red" }}>{signInError}</div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  signInError: signInErrorSelector,
});
export default connect(mapStateToProps, {
  signInWithGoogleStart,
  signInWithEmailStart,
})(SignIn);
