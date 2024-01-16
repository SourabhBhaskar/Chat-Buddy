import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { icons } from "../utils/icons.util";
import Header from "../components/Auth/Header";
import FormContainer from "../components/Auth/FormContainer";
import LabeledInput from "../components/Auth/LabeledInput";
import RememberMe from "../components/Auth/RememberMe";
import Submit from "../components/Auth/Submit";
import Footer from "../components/Auth/Footer";
import GlobalLoader from "../components/GlobalComponents/GlobalLoader";
import { useLogin } from "../Hooks/useLogin.hook";


// Login Component
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useLogin();

  // Handle Form Submit
  async function handleSubmit(e) {
    e.preventDefault();
    login.submit();
  }

  return (
    <main className="w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center bg-secondary-light dark:bg-secondary-dark">
      { login.state.isLoading && <GlobalLoader /> }
      <Header page="Login" description="Welcom back to Chat-Buddy" />
      <FormContainer handleSubmit={handleSubmit}>
      <LabeledInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={login.state.email}
          onChange={(e) => login.dispatcher({ type: "EMAIL", payload: e.target.value })}
          error={login.state.emailError}
          setError={(err) => login.dispatcher({ type: "EMAIL_ERROR", payload: err })}
          icon={icons.email}
        />
        <LabeledInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={login.state.password}
          onChange={(e) => login.dispatcher({ type: "PASSWORD", payload: e.target.value })}
          error={login.state.passwordError}
          setError={(err) => login.dispatcher({ type: "PASSWORD_ERROR", payload: err })}
          icon={icons.password}
        />
        <RememberMe rememberMe={login.state.rememberMe} setRememberMe={(r) => login.dispatcher({ type: "REMEMBER_ME", payload: r })} />
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
