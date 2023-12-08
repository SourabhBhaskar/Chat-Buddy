// Imports
import React, { useState } from 'react';
import { icons } from '../../../../utils/icons.util';
import Label from '../Common/Label';
import IconInput from '../Common/IconInput';
import TextArea from '../Common/TextArea';
import { Icon } from '@iconify/react';
import { formSubmitter } from '../../../../utils/formSubmitter.util';
import { useDispatch } from 'react-redux';
import  { setIsLoading } from "../../../../context/Boolean/booleanSlice"
import { setAddNewConnection } from '../../../../context/ConnectionsContext/ConnectionsContext.slice';


// Add Connection
function AddConnection({ exit }) {
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
        credential: true,
        loaderCallback: (isLoading) => dispatch(setIsLoading(isLoading)),
    });

    if(!error) {
        const { data, message, error } = result;
        if (!error) {
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

  return (
    <div className='w-screen h-screen fixed left-0 top-0 flex justify-center items-center p-4 z-20 bg-[#00000022] dark:bg-[#00000044]'>
        <form onSubmit={handleSubmit} className='w-full max-w-[500px] h-auto border-[1px] flex flex-col gap-4 p-8 rounded-md border-l-primary-border dark:border-d-primary-border bg-l-primary-bg-color dark:bg-d-primary-bg-color shadow-lg '>
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
                { emailErr && <p className='text-red-600 text-sm'>{emailErr}</p> }
            </div>
            <div className='h-[100px] flex flex-col'>
                <Label htmlFor="message" value="Message for connection" />
                <TextArea onChange={handleMessageChange} />
            </div>
            <button className='w-full'>
                <input className="w-full h-[40px] bg-[#7269ef] font-bold rounded-sm hover:bg-[#7269efcc] flex-shrink-0 text-white" type="submit" value="Add" />
            </button>
        </form>
    </div>)
}


// Export
export default AddConnection;