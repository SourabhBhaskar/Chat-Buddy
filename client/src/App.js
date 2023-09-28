import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Home from './pages/Home';




function App() {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;







