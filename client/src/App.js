import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';


function App() {

  return (
    <div className='w-full h-full min-w-screen min-h-screen font-publicSans bg-primary-light dark:bg-primary-dark'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;







