import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
// import LandingPage from './pages/landingPage';
import Contacts from './pages/Contacts';
import ChatRoom from './pages/ChatRoom';
// import Menu from './pages/Menu';


function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center mx-auto'>
      <Routes>
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/chatroom' element={<ChatRoom />} />
        {/* <Route path='/menu' element={<Menu />} /> */}
      </Routes>
    </div>
  );
}

export default App;







