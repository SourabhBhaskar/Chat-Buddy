import React from 'react'
import { useNavigate } from 'react-router-dom';
import Menu from '../pages/Menu';


function ContactsNav() {
    const navigate = useNavigate();

return (
    <nav className='w-full h-[10%] flex justify-between items-center px-1 text-white text-2xl font-bold'>
        <div className='flex'>
            <h1>CHAT-APP</h1>
        </div>
        <i className="fa-solid fa-bars-progress" onClick={ ()=>navigate('/menu') }></i>
    </nav>
    );
}

export default ContactsNav