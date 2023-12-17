// Imports
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap/gsap-core';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import Label from '../Common/Label';
import IconInput from '../Common/IconInput';
import TextArea from '../Common/TextArea';
import { formSubmitter } from '../../../../utils/formSubmitter.util';
import  { setIsLoading } from "../../../../context/Boolean/booleanSlice"
import { setAddNewConnection } from '../../../../context/Connections/Connections.slice';


// Add Connection
function AddConnection({ isAdding, exit }) {
  const addContaction = useRef(null);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [message, setMessage] = useState('');

  // Handle Email Change & Focus
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleEmailFocus = () => setEmailErr('');

  // Handle Message Change
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Handle Submit
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!email) setEmailErr("Enter connection's email first");
    if(!email) return ;

    // Form Submission
    const { result, error } = await formSubmitter({
        url: process.env.REACT_APP_SERVER_CONNECTIONS_ADD,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { email, message },
        credentials: true,
        loaderCallback: (isLoading) => dispatch(setIsLoading(isLoading)),
    });

    if(!error) {
        const { data, message, error } = result;
        if (!error) {
          console.log(message, data)
          dispatch(setAddNewConnection(data));
          exit();
        } else {
          typeof error === "string" && setEmailErr(error);
          console.log("Server Error:", error);
        }
    } else {
        console.log("Client Error:", error);
        alert("Unable to add connection");
    }
  }

  useEffect(() => {
    const connection = addContaction.current;
    gsap.fromTo(
        connection,
        { y: isAdding ? "80" : "0" },
        {
            y: isAdding ? "0" : "40",
            duration: 0.5,
            ease: "ease",
            opacity: isAdding ? 1 : 0,
            display: isAdding ? "flex" : "none",
        }
    );

  }, [isAdding]);

  return (
    <div ref={addContaction} className={`w-screen h-screen fixed left-0 top-0 z-50 justify-center items-center hidden bg-[#0002] dark:bg-[#fff2]`}>
        <div className='w-full max-w-[500px] p-6 mx-auto font-medium text-md sm:text-sm text-l-primary-txt-color dark:text-d-primary-txt-color'>
            <form id='authForm' onSubmit={handleSubmit} className='w-full flex flex-col gap-4 p-6 rounded-md shadow-xl border-[1px] border-l-primary-bg-color dark:border-d-primary-border bg-l-primary-bg-color dark:bg-d-primary-bg-color'>
                <div className='flex justify-between border-b-[1px] border-l-primary-border dark:border-d-primary-border pb-4'>
                    <h1 className='text-xl font-medium text-l-primary-txt-color dark:text-d-primary-txt-color'>Add Connection</h1>
                    <button onClick={exit} className='text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color dark:hover:text-d-primary-txt-color'>
                        <Icon icon={icons.cancel} />
                    </button>
                </div>
                <div>
                    <Label htmlFor="email" value="Email" />
                    <IconInput
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        icon={icons.email}
                        placeholder="Enter connection's email"
                        onChange={handleEmailChange}
                        onFocus={handleEmailFocus}
                    />
                    { isAdding && emailErr && <p className='text-red-600 text-sm absolute'>{emailErr}</p> }

                </div>
                <div className='h-[100px] flex flex-col'>
                    <Label htmlFor="message" value="Message for connection" />
                    <TextArea onChange={handleMessageChange} />
                </div>
                <button className='w-full'>
                    <input className="w-full h-[40px] bg-[#7269ef] font-bold rounded-sm hover:bg-[#7269efcc] flex-shrink-0 text-white" type="submit" value="Add" />
                </button>
            </form>
        </div>
    </div>
    )
}


// Export
export default AddConnection;

