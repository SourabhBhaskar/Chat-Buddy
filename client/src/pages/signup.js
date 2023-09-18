import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { socketConnection, newConnection } from '../services/socketIO';
import { setMyProfile } from '../context/myProfile';
import { ContactListContext } from '../context/contactList';



function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { contactList, setContactList }= useContext(ContactListContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); 

    try{
      const url = process.env.REACT_APP_SERVER_SIGNUP;
      const method = "POST";
      const headers = { "Content-Type": "application/json" };
      const body = JSON.stringify({ email: email, password: password });
      const options = { method, headers, body };

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)

      if(result.message === 'Username is already taken'){
        alert('Username is already taken, Please login');
      }
      else if(result.message === 'Signup successful'){
        // Set My Profile
        setMyProfile(email);
        socketConnection(true);
        newConnection(email);
        navigate('/home');
        console.log('Signup successful');
      }else { 
        console.error("Request failed:", response.status, response.statusText);
      }
    }catch (error) {
      console.error("Error:", error);
    }
  }
  
  return (
    <div className="w-[350px] flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 p-2 w-full rounded" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="border border-gray-300 p-2 w-full rounded" value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">Sign up</button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Already a user ?</span>
          <a className="text-blue-500 hover:underline ml-1" onClick={ () => navigate('/login')}>Login</a>
        </div>
      </div>
    </div>
   )
 }

export default SignUp;

