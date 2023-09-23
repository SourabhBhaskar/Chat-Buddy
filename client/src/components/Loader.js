import React, { useContext, useState } from 'react'
import { LoaderContext } from '../context/Loader'

function Loader() {
  const { loader, setLoader } = useContext(LoaderContext);
  return (
    <>  
        {   loader &&
            <div className='w-screen h-screen absolute flex justify-center items-center border-2 bg-[#7269ef11] '>
                <div className='w-[50px] h-[50px] border-4 border-t-[#7269ef] rounded-full loader'></div>
            </div>
        }
    </>
  )
}

export default Loader