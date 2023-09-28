import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socketConnection, newConnection } from '../services/socketIO';
import { setMyProfile } from '../context/MyProfile';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import { toggleLoader } from '../context/Loader';



function SignUp() {
  // Hooks and state initialization
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');


  // Submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    dispatch(toggleLoader(true));

    if (email === '' || password === '') {
      if (email === '') setUsernameErr('Please enter your username');
      else setUsernameErr('');

      if (password === '') setPasswordErr('Please enter your password');
      else setPasswordErr('');

      dispatch(toggleLoader(false));
      return;
    }

    const url = process.env.REACT_APP_SERVER_SIGNUP;
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ email: email, password: password });
    const options = { method, headers, body };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)

      if (result.profiles) {
        // Set My Profile
        dispatch(setMyProfile(result.profiles.private));

        // Socket connection
        socketConnection(true);
        newConnection(email);

        // Home route
        dispatch(toggleLoader(false));
        navigate('/home');
        console.log('Sign up successful');
      } else if (result.message === 'Username is already taken') {
        setEmail('');
        setUsernameErr('Username is already taken');
      } else {
        alert('Some technical error');
        console.log('Some technical error', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    dispatch(toggleLoader(false));
  }

  // Email focus
  const handleEmailFocus = () => setUsernameErr('Please enter your username');
  
  // Password focus
  const handlePasswordFocus = () => setPasswordErr('Please enter your password');

  // Email change
  function handleEmailChange(e) {
    e.stopPropagation();
    setEmail(e.target.value);
  }

  // Password change
  function handlePasswordChange(e) {
    e.stopPropagation();
    setPassword(e.target.value);
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center bg-[#303841] text-white">
      <Loader />
      <div className="w-full h-auto flex flex-col items-center justify-center mb-4">
        <h1 className="text-4xl font-extrabold text-[#7269ef] py-10">Chat-Buddy</h1>
        <h2 className="text-2xl font-semibold">Sign up</h2>
        <p className="text-[#abb4d2] text-center">Welcome back to Chat-Buddy</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-[90%] max-w-[500px] h-[360px] flex flex-col gap-3 bg-[#262e35] text-white p-10 mx-auto rounded-md">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <div className="flex border-[1px] border-gray-700 rounded-md">
              <i className="fa-solid fa-user w-[50px] flex justify-center items-center text-gray-400 border-r-[1px] border-gray-500 text-sm flex-shrink-0"></i>
              <input
                onFocus={handleEmailFocus}
                onChange={handleEmailChange}
                value={email}
                type="email"
                className="w-full h-[40px] bg-transparent text-[14px] font-[500] px-4"
                placeholder="Enter your username"
              />
              <span className={`material-symbols-outlined text-red-600 text-lg w-[50px] h-full justify-center items-center flex-shrink-0 ${email === '' && submit ? 'flex' : 'hidden'}`}>warning</span>
            </div>
            <p className={`text-red-600 flex ${email === '' && submit ? 'flex' : 'hidden'}`}>{usernameErr}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Password</label>
            <div className="flex border-[1px] border-gray-700 rounded-md">
              <i className="fa-solid fa-lock w-[50px] flex justify-center items-center border-r-[1px] text-gray-400 border-gray-500 text-sm flex-shrink-0"></i>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                className="w-full h-[40px] bg-transparent text-[14px] font-[500] px-4"
                placeholder="Enter your password"
              />
              <span className={`material-symbols-outlined text-red-600 text-lg w-[50px] h-full flex justify-center items-center flex-shrink-0 ${password === '' && submit ? 'flex' : 'hidden'}`}>warning</span>
            </div>
            <p className={`text-red-600 flex ${password === '' && submit ? 'flex' : 'hidden'}`}>{passwordErr}</p>
          </div>
          <div className="w-full h-[40px] flex items-center gap-2">
            <input type="checkbox" id="rememberMe" className="custom-checkbox" />
            <label htmlFor="rememberMe" className="custom-label">Remember me</label>
          </div>
          <div>
            <button className="w-full h-[40px] bg-[#7269ef] font-bold rounded-md hover:bg-[#7269efcc]">Sign up</button>
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
  )
}

export default SignUp;

