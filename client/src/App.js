import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
// import LandingPage from './pages/landingPage';
import Home from './pages/Home';
// import Menu from './pages/Menu';


function App() {

  return (
    <div className='container h-screen flex justify-center items-center mx-auto p-2'>
      <Routes>
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/menu' element={<Menu />} /> */}
      </Routes>
    </div>
  );
}

export default App;







