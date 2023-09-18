import React from "react";
import { useState } from "react";
import { useNavigate }  from "react-router-dom";


function Profile(){
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-white">
      <img className="w-[100px] h-[100px] rounded-full" src="#" alt=""/>
      <h1>Sourabh Bhaskar</h1>
      <p className="text-sm">7000849686</p>
    </div>
  );
}

function Menu() {
  const [back, setBack] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-2 left-2 z-50 text-white" onClick={ () => navigate(-1)}>Back</div>
      <div className='w-full h-full bg-blue-600  text-black'>
        <div className='w-full h-[30%]'>
          <Profile />
        </div>
        <div className='h-[70%] bg-white rounded-t-3xl overflow-scroll'>
          <ul className='w-full h-full p-2 text-xl'>
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li>   
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li>  
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
            <li className='py-3 text-center hover:bg-[#0001] rounded-xl'>Sourabh Bhaskar</li> 
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu