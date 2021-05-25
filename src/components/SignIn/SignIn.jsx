import { useState } from "react";
import FormInput from "../MyFromInput/MyFromInput";
import MyButton from "../MyButton/MyButton";
import "./SignIn.scss";
import { signInWithGoogle } from "../../FirebaseConfig/FirebaseConfig";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      //sign in 
      await auth.signInWithEmailAndPassword(email, password);

      //empty the inputs
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error)
    }
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
        <MyButton onClick={signInWithGoogle} content="sign in with google" />
      </form>
    </div>
  );
}

export default SignIn;
