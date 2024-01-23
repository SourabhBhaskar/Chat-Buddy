import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './pages/Landing';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import GlobalPopUpWindow from './components/GlobalComponents/GlobalPopUpWindow';
import GlobalLoader from './components/GlobalComponents/GlobalLoader';


function App() {
  const { isAuthenticated } = useSelector(state => state.GlobalSlice);

  return (
    <div className='w-full h-full min-w-screen min-h-screen font-publicSans bg-primary-light dark:bg-primary-dark'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={isAuthenticated ? <Home /> : <Navigate to="/login" />}/>
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <GlobalPopUpWindow />
      <GlobalLoader />
    </div>
  );
}


export default App;







