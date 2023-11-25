import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './pages/Landing';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';


function App() {
  const { isAuthenticated } = useSelector((state) => state.BooleanSlice);

  return (
    <div className='w-full h-full min-w-screen min-h-screen font-publicSans bg-l-primary-bg-color dark:bg-d-primary-bg-color'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={ isAuthenticated ? <Home /> : <Navigate to='/' />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;







