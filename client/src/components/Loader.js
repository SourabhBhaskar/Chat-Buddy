import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';


function Loader() {
  const loader = useSelector((state) => state.LoaderSlice);
  return (
    <>  
        {   loader &&
            <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center bg-[#0002]'>
                <div className='w-[50px] h-[50px] border-4 border-t-[#7269ef] rounded-full loader'></div>
            </div>
        }
    </>
  )
}

export default Loader ;