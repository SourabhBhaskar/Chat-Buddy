import { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { setAddContact } from '../../context/NavigateModes';
import { setProfileAddContact } from '../../context/Profile';
import useSubmitForm from '../../services/submitForms';


// Add Contact 
export default function AddContact(){
  // State variables
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.ProfileSlice);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [emailErr, setEmailErr] = useState(""); 

  // Custom hooks
  const submitForm = useSubmitForm('ADD_CONTACT', false, { userEmail: profile.email, contactName: username, contactEmail: email });

  // Handle Form Submit
  async function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();

    // Validation
    if (!username) setUsernameErr("Enter username");
    if (!email) setEmailErr("Enter email");
    if (!username || !email) return ;

    const response = await submitForm();
    const status = response && response.status;

    if (status) {
      const result = await response.json();
      const { message, data } = result;

      console.log(message)
      if(status === 200){
        dispatch(setProfileAddContact(data));
        dispatch(setAddContact(false));
      }
      else
        console.log(message)
    }
  }
  // Handle cancel add contact
  const handleCancleAddContact = () => dispatch(setAddContact(false));

  // Handle onFocus events for Email & Password
  const handleEmailFocus = () => setUsernameErr("");
  const handlePasswordFocus = () => setEmailErr("");

  // Handle onChange events for Email & Password
  const handleEmailChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setEmail(e.target.value);

  return (
    <div className='w-screen h-screen fixed top-0 left-0 xl:left-[-75px] flex justify-center items-center bg-[#0008] z-50'>
      <div className="w-[90%] max-w-[500px] h-[360px] flex flex-col gap-3 mx-auto rounded-md relative add-contact p-4 px-6 text-[#a6b0cf] bg-[#303841] ">
        <div className="w-full flex justify-between items-center py-2 border-b-[1px] border-[#a6b0cf22]">
          <h1 className="text-xl font-semibold text-white">Add Contacts</h1>
          <Icon icon="gridicons:cross" className="fas fa-times text-[#a6b0cf] hover:text-white" onClick={handleCancleAddContact} />
        </div>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-[#a6b0cf] ">Username</label>
              <div className="flex border-[1px] border-[#a6b0cf22] rounded-[4px]">
                <span className='w-[45px] flex-shrink-0 flex justify-center items-center text-[#a6b0cf] border-r-[1px] border-[#a6b0cf22]'>
                  <Icon icon="ri:user-2-line" />
                </span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  className="w-full h-[40px] bg-transparent text-[14px] font-[500] px-4"
                  placeholder="Enter username"
                />
                { usernameErr && <Icon icon="clarity:warning-line" className="w-auto h-full text-red-600 p-[6px]" /> }
              </div>
              {usernameErr && <p className="text-red-600">{usernameErr}</p>}
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-[#a6b0cf]">Email</label>
              <div className="flex border-[1px] border-[#a6b0cf22] rounded-[4px]">
                <span className='w-[45px] flex-shrink-0 flex justify-center items-center text-[#a6b0cf] border-r-[1px] border-gray-700'>
                  <Icon icon="ic:outline-email" />
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handlePasswordChange}
                  onFocus={handlePasswordFocus}
                  className="w-full h-[40px] bg-transparent text-[14px] font-[500] px-4"
                  placeholder="Enter email"
                />
                { emailErr && <Icon icon="clarity:warning-line" className="w-auto h-full text-red-600 p-[6px]" /> }
              </div>
              {emailErr && <p className="text-red-600">{emailErr}</p>}
            </div>
            <div className=" w-full flex justify-between py-4 border-t-[1px] border-[#a6b0cf22]">
              <button className="hover:text-white" onClick={handleCancleAddContact}>Close</button>
              <button >
                <input className="h-[40px] font-medium rounded-sm px-4 text-white bg-[#7269ef] hover:bg-[#7269efcc]" type='submit' value='Invite Contact' />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

