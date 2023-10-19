import './App.css';
import { Routes, Route } from 'react-router-dom';
import Debug from './debug';
import Landing from './pages/Landing';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';
import Home from './pages/Home';




function App() {
  return (
    <div className='w-screen h-screen'>
      {/* <Debug /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;







