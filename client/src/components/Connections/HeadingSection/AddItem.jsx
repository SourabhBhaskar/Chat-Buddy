import { useState, } from 'react';
import { useDispatch} from 'react-redux';
import { Icon } from '@iconify/react';
import { useTheme } from '../../Common/Theme';
import { formSubmitter } from "../../../utils/formSubmitter.util";
import { setIsAddingContact, setIsLoading } from '../../../context/Boolean/booleanSlice';
import LabeledInput from "../../Common/LabeledInput";
import FormContainer from '../../Common/FormContainer';



// Add Contact 
export default function AddItem({ handleExit }){
  // State variables
  const dispatch = useDispatch();
  const { primaryBg, primaryTxt, secondaryTxt, secondaryTxtWithHover, border } = useTheme();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailErr, setEmailErr] = useState(""); 
  const [messageErr, setMessageErr] = useState("");

  // Handle Form Submit
  async function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();

    // Validation
    if (!email) setEmailErr("Enter connection's email");
    if (!message) setMessageErr("Enter a message for new connection");
    if (!email || !message) return ;

    // Form
    const { response, result, error } = await formSubmitter({
      url: process.env.REACT_APP_SERVER_CONTACTS_ADD,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { email, message },
      credential: true,
      loaderCallback: (isLoading) => dispatch(setIsLoading(isLoading))
    });

    if(!error){
      const { data, message, error } = result;
      if(!error){
        handleExit();
        console.log(message);
      }else{
        response.status === 404 && setEmailErr("Contact not found");
        response.status === 409 && setEmailErr("Contact already exist in your contact list");
        console.log("Server Error:", error);
      }
    }else{
      handleExit();
      console.log("Client Error:", error);
    }
  }

  // Handle cancel add contact
  const handleCancleAddContact = () => handleExit();

  // Handle onChange events for Email & Message
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Handle focus event for Message
  const handleMessageFocus = (e) => setMessageErr("");

  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[#0008] z-50'>
      <FormContainer>
        <div className="w-full flex justify-between items-center py-2 border-b-[1px] border-[#a6b0cf22]">
          <h1 className="text-xl font-semibold ">Add Contacts</h1>
          <button onClick={handleCancleAddContact} className={`${secondaryTxtWithHover}`}><Icon icon="gridicons:cross" /></button>
        </div>

        <LabeledInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          handleValueChange={handleEmailChange}
          error={emailErr}
          setError={setEmailErr}
        />

        <div className={`w-full h-auto flex flex-col my-4`}>
          <label className='font-medium'>Connection Message</label>
          <textarea onChange={handleMessageChange} onFocus={handleMessageFocus} className={`border-[1px] p-2 my-1 w-full h-24 bg-transparent focus:outline-none hide-scrollbar ${border}`}></textarea>
          {messageErr && <p className="text-red-600 text-sm truncate">{messageErr}</p>}
        </div>
        
        <div className=" w-full flex justify-between pt-4 border-t-[1px] border-[#a6b0cf22]">
          <button className={`${secondaryTxtWithHover}`} onClick={handleCancleAddContact}>Close</button>
          <button >
            <input className="h-[40px] font-medium rounded-sm px-4 text-white bg-[#7269ef] hover:bg-[#7269efcc]" type='submit' value='Add Contact' />
          </button>
        </div>
      </FormContainer>
    </div>
  );
}

