import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { socketConnection, newConnection } from '../services/socketIO';
import { setMyProfile } from '../context/myProfile';
import { AllContactListContext } from '../context/contactList';



function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { allContactList, setAllContactList }= useContext(AllContactListContext);

    // Submit handler
    async function handleSubmit(e) {
      e.preventDefault(); 

      const url = process.env.REACT_APP_SERVER_LOGIN;
      const method = "POsT";
      const headers = { "Content-Type": "application/json" };
      const body = JSON.stringify({ email: email, password: password })
      const options = { method, headers, body }

      try{
        const response = await fetch(url, options);
        const result = await response.json();

        if(result.message === 'Incorrect email'){
          alert("Incorrect email");
        }else if(result.message === "Incorrect password"){
          alert("Incorrect password");
        }else if(result.data){
            
          // Set My Profile
          setMyProfile(email);

          // Import all contacts
          result.data.contactList.forEach((contact) => {
            setAllContactList((prevList) => [contact, ...prevList]);
          });
          
          socketConnection(true);
          newConnection(email);
          navigate('/contacts');
          console.log('Login successful');
        }else{
          console.log("Some technical error", result);
        }
      }catch (error) {
        console.error("Error:", error);
      }
    }
  
    return (
      <div className="w-[350px] flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
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
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">Login</button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-600">Don't have an account?</span>
            <a className="text-blue-500 hover:underline ml-1" onClick={ () => navigate('/signup')}>Sign Up</a>
          </div>
        </div>
      </div>
  )
}

export default LogIn;
