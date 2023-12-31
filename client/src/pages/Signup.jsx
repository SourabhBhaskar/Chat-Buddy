import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formSubmitter } from "../utils/formSubmitter.util";
import { setIsLoading } from "../context/Boolean/booleanSlice";
import { useInitialSetup } from "../Hooks/useInitialSetup.hook";
import Header from "../components/Auth/Header";
import FormContainer from "../components/Auth/FormContainer";
import LabeledInput from "../components/Auth/LabeledInput";
import Submit from "../components/Auth/Submit";
import RememberMe from "../components/Auth/RememberMe";
import Footer from "../components/Auth/Footer";
import Loader from "../components/Common/Loader";



function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { initialSetup } = useInitialSetup();
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailchange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  // Handle navigate
  const handleNavigate = () => navigate('/login');

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
      credential: true,
      loaderCallback: (isLoading) => setIsLoading(isLoading)
    });
    
    if(!error){
      const { data, message, error } = result;
      if(!error){
        initialSetup(data);
        console.log(message);
      }else{
        (typeof error === 'string') && error.toLocaleLowerCase().indexOf('email') !== -1 && setEmailErr(error);
        (typeof error === 'string') && error.toLocaleLowerCase().indexOf('password') !== -1 && setPasswordErr(error);
        console.log("Server Error:", error);
      }
    }else{
      console.log("Client Error:", error)
      alert("Unable to signup");
    }
  }

  return (
    <main className="w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center bg-l-secondary-bg-color  dark:bg-d-secondary-bg-color">
        { isLoading && <Loader/> }
        <Header page="Signup" description="Welcome to Chat-Buddy" />
        <FormContainer handleSubmit={handleSubmit}>
          <LabeledInput
            label="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            handleValueChange={handleUsernameChange}
            error={usernameErr}
            setError={setUsernameErr}
          />
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
          <RememberMe />
          <Submit value="Submit" />
        </FormContainer>
        <Footer goto="Login" description="Already a user ?" handleNavigate={handleNavigate} />
    </main>
  );
}

export default Signup;



