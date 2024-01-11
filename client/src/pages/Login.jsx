import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formSubmitter } from "../utils/formSubmitter.util";
import { useInitialSetup } from "../Hooks/useInitialSetup.hook";
import Header from "../components/Auth/Header";
import FormContainer from "../components/Auth/FormContainer";
import LabeledInput from "../components/Auth/LabeledInput";
import RememberMe from "../components/Auth/RememberMe";
import Submit from "../components/Auth/Submit";
import Footer from "../components/Auth/Footer";
import Loader from "../components/Common/Loader";
import { icons } from "../utils/icons.util";


// Login Component
function Login() {
  const navigate = useNavigate();
  const { initialSetup } = useInitialSetup();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] = useState(false);
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
      const { data, error } = result;
      if (!error) {
        initialSetup(data);
        navigate('/home');
      } else {
        typeof error === "string" && error.toLowerCase().indexOf("email") !== -1 && setEmailErr(error);
        typeof error === "string" && error.toLowerCase().indexOf("password") !== -1 && setPasswordErr(error);
        console.log(error);
      }
    } else {
      console.log(error);
      alert("Unable to login");
    }
  }

  return (
    <main className="w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center bg-secondary-light dark:bg-secondary-dark">
      { isLoading && < Loader />}
      <Header page="Login" description="Welcom back to Chat-Buddy" />
      <FormContainer handleSubmit={handleSubmit}>
        <LabeledInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailErr}
          setError={setEmailErr}
          icon={icons.username}
        />
        <LabeledInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordErr}
          setError={setPasswordErr}
          icon={icons.password}
        />
        <RememberMe credential={credential} setCredential={setCredential}/>
        <Submit value="Login" />
      </FormContainer>
      <Footer
        goto="Signup"
        description="New to Chat-Buddy?"
        handleNavigate={() => navigate("/signup")}
      />
    </main>
  );
}

export default Login;
