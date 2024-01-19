// Imports
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import TextArea from './TextArea';
import LabeledInput from '../../../Auth/LabeledInput';
import Submit from '../../../Auth/Submit';
import { useAddConnection } from '../../../../Hooks/userConnections/useAddConnection.hook';
import GlobalLoader from "../../../GlobalComponents/GlobalLoader";


// Add Connection
function AddConnection({ isAddingConnection, setIsAddingConnection }) {
  const containerRef = useRef(null);
  const addConnectionBoxRef = useRef(null);
  const addConnection = useAddConnection();

  // Handle Cancel 
  const handleCancel = () => {
    setIsAddingConnection(!isAddingConnection);
  }

    // Handle Submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(isAddingConnection){
            addConnection.submit(handleCancel);
        }
    }

  useEffect(() => {
    const containerElement = containerRef.current;
    const addConnectionBoxElement = addConnectionBoxRef.current;
    if(containerElement && addConnectionBoxElement){
        if(isAddingConnection){
            gsap.to(containerElement, { display: 'flex'});
            gsap.to(addConnectionBoxElement, { y: 0, opacity: 1, display: 'flex'});
        }else{
            gsap.to(addConnectionBoxElement, { y: 100, opacity: 0, display: 'none' });
            gsap.to(containerElement, { display: 'none'});
        }
    }
  }, [isAddingConnection]);

  return (
    <div ref={containerRef} className='w-screen h-screen fixed z-20 left-0 top-0 hidden justify-center items-center bg-[#fff8] dark:bg-[#0004]'>
        { addConnection.state.isLoading && <GlobalLoader />}
        <form onSubmit={handleSubmit} ref={addConnectionBoxRef} className='w-[95%] max-w-[500px] h-auto absolute flex-col gap-4 p-4 rounded-md shadow-md bg-primary-light dark:bg-primary-dark border-[1px] border-primary-light dark:border-primary-dark'>
            <div className='flex justify-between pb-4 border-b-[1px] border-primary-light dark:border-primary-dark'>
                <h1 className='text-xl font-semibold text-primary-light dark:text-primary-dark'>Add Connection</h1>
                <button onClick={() => setIsAddingConnection(false)} className='transition-all text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark'>
                    <Icon icon={icons.cancel} />
                </button>
            </div>
            <LabeledInput icon={icons.email} type={"email"} placeholder={'Enter your email'} label={'Email'} value={addConnection.state.connectionEmail} error={addConnection.state.connectionEmailError} setError={(err) => addConnection.dispatcher({ type: "EMAIL_ERROR", payload: err })} onChange={(value) => addConnection.dispatcher({ type: "EMAIL", payload: value })} />
            <TextArea label={"Type a message"} value={addConnection.state.connectionMessage} onChange={(e) => addConnection.dispatcher({ type: "MESSAGE", payload: e.target.value })} />
            <Submit/>
        </form>
    </div>
    )
}


// Export
export default AddConnection;

