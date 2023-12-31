import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../context/Boolean/booleanSlice";
import { formSubmitter } from "../utils/formSubmitter.util";
import { useInitialSetup } from "../Hooks/useInitialSetup.hook";
import Header from "../components/Auth/Header";
import FormContainer from "../components/Auth/FormContainer";
import LabeledInput from "../components/Auth/LabeledInput";
import RememberMe from "../components/Auth/RememberMe";
import Submit from "../components/Auth/Submit";
import Footer from "../components/Auth/Footer";
import Loader from "../components/Common/Loader";


// Login Component
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { initialSetup } = useInitialSetup();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] = useState(false);
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const handleEmailchange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);


  // Handle Navigate
  const handleNavigate = () => navigate("/signup");

  // Handle Form Submit
  async function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();

    // Validation
    if(!email) setEmailErr('Enter your email');
    if(!password) setPasswordErr('Enter your password');
    if(!email || !password) return ;

    // Form Submission
    const { result, error } = await formSubmitter({
      url: process.env.REACT_APP_SERVER_LOGIN,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { email, password },
      credential: true,
      loaderCallback: (isLoading) => setIsLoading(isLoading),
    });

    if (!error) {
      const { data, message, error } = result;
      if (!error) {
        initialSetup(data);
        console.log(message);
      } else {
        typeof error === "string" && error.toLowerCase().indexOf("email") !== -1 && setEmailErr(error);
        typeof error === "string" && error.toLowerCase().indexOf("password") !== -1 && setPasswordErr(error);
        console.log("Server Error:", error);
      }
    } else {
      console.log("Client Error:", error);
      alert("Unable to login");
    }
  }

  return (
    <main className="w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center bg-l-secondary-bg-color dark:bg-d-secondary-bg-color">
      { isLoading && <Loader/> }
      <Header page="Login" description="Welcom back to Chat-Buddy" />
      <FormContainer handleSubmit={handleSubmit}>
        <LabeledInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          handleValueChange={handleEmailchange}
          error={emailErr}
          setError={setEmailErr}
        />
        <LabeledInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          handleValueChange={handlePasswordChange}
          error={passwordErr}
          setError={setPasswordErr}
        />
        <RememberMe credential={credential} setCredential={setCredential}/>
        <Submit value="Login" />
      </FormContainer>
      <Footer
        goto="Signup"
        description="New to Chat-Buddy?"
        handleNavigate={handleNavigate}
      />
    </main>
  );
}

export default Login;
