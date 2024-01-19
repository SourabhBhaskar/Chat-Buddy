import React from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../utils/icons.util";
import Header from "../components/Auth/Header";
import FormContainer from "../components/Auth/FormContainer";
import LabeledInput from "../components/Auth/LabeledInput";
import Submit from "../components/Auth/Submit";
import RememberMe from "../components/Auth/RememberMe";
import Footer from "../components/Auth/Footer";
import GlobalLoader from "../components/GlobalComponents/GlobalLoader";
import { useSignup } from "../Hooks/auth/useSignup.hook";


function Signup() {
  const navigate = useNavigate();
  const signup = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup.submit();
  }

  return (
    <main className="w-full h-full min-w-screen min-h-screen flex flex-col items-center justify-center bg-secondary-light dark:bg-secondary-dark">
      { signup.state.isLoading && <GlobalLoader /> }
      <Header page="Signup" description="Welcome to ChatBuddy" />
      <FormContainer handleSubmit={handleSubmit}>
        <LabeledInput
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={signup.state.username}
          onChange={(value) => signup.dispatcher({ type: "USERNAME", payload: value })}
          error={signup.state.usernameError}
          setError={(err) => signup.dispatcher({ type: "USERNAME_ERROR", payload: err})}
          icon={icons.username}
        />
        <LabeledInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={signup.state.email}
          onChange={(value) => signup.dispatcher({ type: "EMAIL", payload: value })}
          error={signup.state.emailError}
          setError={(err) => signup.dispatcher({ type: "EMAIL_ERROR", payload: err })}
          icon={icons.email}
        />
        <LabeledInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={signup.state.password}
          onChange={(value) => signup.dispatcher({ type: "PASSWORD", payload: value })}
          error={signup.state.passwordError}
          setError={(err) => signup.dispatcher({ type: "PASSWORD_ERROR", payload: err })}
          icon={icons.password}
        />
        <RememberMe rememberMe={signup.state.rememberMe} setRememberMe={(r) => signup.dispatcher({ type: "REMEMBER_ME", payload: r })} />
        <Submit value="Submit" />
      </FormContainer>
      <Footer goto="Login" description="Already a user ?" handleNavigate={() => navigate('/login')} /> 
    </main>
  );
}

export default Signup;



