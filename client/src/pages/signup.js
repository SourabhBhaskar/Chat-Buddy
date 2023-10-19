import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import useSubmitForm from "../services/submitForms";
import { useHomeSetup } from "../services/homeSetup";
import Loader from "../components/Common/Loader";

function Signup() {
  // State variables for the signup form
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // Custom hooks
  const submitForm = useSubmitForm('SIGNUP', true, { email: email, password: password });
  const homeSetup = useHomeSetup();

  // Handle Form Submit
  async function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();

    // Validation
    if (!email) setEmailErr("Enter your email");
    if (!password) setPasswordErr("Enter your password");
    if (!email || !password) return ;

    const response = await submitForm();
    const status = response && response.status;

    if (status) {
      const result = await response.json();
      const { message, data } = result;

      if(status === 200) 
        homeSetup(data);
      else if(status === 400){
        setEmailErr("Email already exists");
      }else{
        console.log(message)
      }
    }
  }

  // Handle onFocus events for Email & Password
  const handleEmailFocus = () => setEmailErr("");
  const handlePasswordFocus = () => setPasswordErr("");

  // Handle onChange events for Email & Password
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <>
      <Loader />
      <main className="w-full min-h-screen relative flex flex-col justify-center bg-[#303841] text-white">
        <div className="w-full h-auto flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl font-extrabold text-[#7269ef] py-10">Chat-Buddy</h1>
          <h2 className="text-2xl font-semibold">Sign Up</h2>
          <p className="text-[#abb4d2] text-center">Welcome to Chat-Buddy</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-[90%] max-w-[500px] h-[360px] flex flex-col gap-3 bg-[#262e35] text-white p-10 mx-auto rounded-md">
            <div className="flex flex-col">
              <label className="font-medium mb-1">Email</label>
              <div className="flex border-[1px] border-gray-700 rounded-[4px] text-[#a6b0cf]">
                <span className='w-[45px] flex-shrink-0 flex justify-center items-center font-bold border-r-[1px] border-gray-700'>
                    <Icon icon="ri:user-2-line" />
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  className="w-full h-[40px] bg-transparent text-[14px] font-[500] px-4"
                  placeholder="Enter your username"
                />
                { emailErr && <Icon icon="clarity:warning-line" className="w-auto h-full text-red-600 p-[6px]" /> }
              </div>
              {emailErr && <p className="text-red-600">{emailErr}</p>}
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1">Password</label>
              <div className="flex border-[1px] border-gray-700 rounded-[4px] text-[#a6b0cf]">
                <span className='w-[45px] flex-shrink-0 flex justify-center items-center font-bold border-r-[1px] border-gray-700'>
                  <Icon icon="ri:lock-2-line"/>
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={handlePasswordFocus}
                  className="w-full h-[40px] bg-transparent text-[14px] font-semibold px-4"
                  placeholder="Enter your password"
                />
                { passwordErr && <Icon icon="clarity:warning-line" className="w-auto h-full text-red-600 p-[6px]" /> }
              </div>
              {passwordErr && <p className="text-red-600">{passwordErr}</p>}
            </div>
            <div className="w-full h-[40px] flex items-center gap-2">
              <input type="checkbox" id="rememberMe" className="custom-checkbox" />
              <label htmlFor="rememberMe" className="custom-label">Remember me</label>
            </div>
            <div>
              <input className="w-full h-[40px] bg-[#7269ef] font-bold rounded-md hover:bg-[#7269efcc]" type="submit" value={"Login"} />
            </div>
          </div>
        </form>
        <div className="w-full py-10">
          <div className="flex justify-center gap-2">
            <p className="text-gray-400">Already a user ?</p>
            <a className="text-[#7269EF] font-semibold hover:underline" onClick={() => navigate('/login')}>Login</a>
          </div>
          <p className="text-center text-gray-400 mt-2">
            &copy; 2023 Chat-Buddy. Crafted with ❤️ by Bhaskar
          </p>
        </div>
        </main>
    </>
  );
}

export default Signup;



