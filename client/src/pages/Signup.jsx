import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formSubmitter } from "../utils/formSubmitter.util";
import { useInitialSetup } from "../Hooks/useInitialSetup.hook";
import { icons } from "../utils/icons.util";
import Header from "../components/Auth/Header";
import FormContainer from "../components/Auth/FormContainer";
import LabeledInput from "../components/Auth/LabeledInput";
import Submit from "../components/Auth/Submit";
import RememberMe from "../components/Auth/RememberMe";
import Footer from "../components/Auth/Footer";
import Loader from "../components/Common/Loader";



function Signup() {
  const navigate = useNavigate();
  const { initialSetup } = useInitialSetup();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  

  // Handle Form Submit
  async function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();

    // Validation
    if (!username) setUsernameErr("Enter your username");
    if (!email) setEmailErr("Enter your email");
    if (!password) setPasswordErr("Enter your password");
    if (!username || !email || !password) return ;

    const { result, error} = await formSubmitter({
      url: process.env.REACT_APP_SERVER_SIGNUP,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { username, email, password },
      credentials: rememberMe,
      loaderCallback: (isLoading) => setIsLoading(isLoading)
    });
    
    if(!error){
      const { data, error } = result;
      if(!error){
        initialSetup(data);
        navigate('/home');
      }else{
        (typeof error === 'string') && error.toLocaleLowerCase().indexOf('username') !== -1 && setUsernameErr(error);
        (typeof error === 'string') && error.toLocaleLowerCase().indexOf('email') !== -1 && setEmailErr(error);
        (typeof error === 'string') && error.toLocaleLowerCase().indexOf('password') !== -1 && setPasswordErr(error);
        console.log(error);
      }
    }else{
      console.log(error);
      alert("Unable to signup");
    }
  }

  return (
    <main className="w-full h-full min-w-screen min-h-screen flex flex-col items-center justify-center bg-secondary-light dark:bg-secondary-dark">
      { isLoading && <Loader />}
      <Header page="Signup" description="Welcome to Chat-Buddy" />
      <FormContainer handleSubmit={handleSubmit}>
        <LabeledInput
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameErr}
          setError={setUsernameErr}
          icon={icons.username}
        />
        <LabeledInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailErr}
          setError={setEmailErr}
          icon={icons.email}
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
        <RememberMe rememberMe={rememberMe} setRememberMe={setRememberMe} />
        <Submit value="Submit" />
      </FormContainer>
      <Footer goto="Login" description="Already a user ?" handleNavigate={() => navigate('/login')} /> 
    </main>
  );
}

export default Signup;



