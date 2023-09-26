import { useContext, useState } from 'react';
import Loader from './Loader';
import { LoaderContext } from '../context/Loader';
import { MyProfileContext } from '../context/myProfile';
import { useSelector } from 'react-redux';


// Add Contact 
export default function AddContact(){
  const AllContact = useSelector((state) => state.AllContactsSlice);
  const [add, setAdd] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { loader, setLoader } = useContext(LoaderContext);
  const { myProfile, setMyProfile } = useContext(MyProfileContext);

  // Submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);

    if(myProfile === undefined){
      alert('Signup or Login first');
      setLoader(false);
      return ;
    }

    const url = process.env.REACT_APP_SERVER_ADD_CONTACT;
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ userEmail:myProfile.email, contactName: name.charAt(0).toUpperCase() + name.slice(1), contactEmail:email })
    const options = { method, headers, body }

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if(result.message === 'Contact added successfully'){
        console.log(result.profiles.public)
        AllContact.setAllContact([...AllContact.allContact, result.profiles.public].sort((a, b) => a.username.charAt(0).toLowerCase().localeCompare(b.username.charAt(0).toLowerCase())));
      }
      setLoader(false);
    } catch (error) {
      console.error('Error:', error);
      setLoader(false);
    }
    setLoader(false);
    setAdd(!add);
    setName('');
    setEmail('');
  }

  // Email change
  function handleEmailChange(e) {
    e.stopPropagation();
    setEmail(e.target.value);
  }

  // Password change
  function handleNameChange(e) {
    e.stopPropagation();
    setName(e.target.value);
  }

  return (
    <>
      <button className='text-[#a6b0cf]' onClick={()=>setAdd(!add)}>
        <i className="fa-solid fa-user-plus"></i>
      </button>
      { add &&
        <div className='w-screen h-screen absolute z-50 top-0 left-0 xl:left-[-75px] flex justify-center items-center bg-[#0008]'>
          <div className="w-[90%] max-w-[500px] h-[360px] flex flex-col gap-3 bg-[#303841] text-white mx-auto rounded-md relative add-contact p-4 px-6">
            <Loader />
            <div className="w-full flex justify-between items-center py-2 border-b-[1px] border-[#a6b0cf22]">
              <h1 className="text-xl font-semibold">Add Contacts</h1>
              <i className="fas fa-times text-[#a6b0cf]" onClick={()=>setAdd(false)}></i>
            </div>
            <form onSubmit={handleSubmit} className="w-full h-full">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex flex-col">
                  <label className="mb-1">Name</label>
                  <div className="flex border-[1px] border-gray-700 rounded-md">
                    <i className="fas fa-user w-[50px] flex justify-center items-center text-gray-400 border-r-[1px] border-gray-700 text-[14px] flex-shrink-0"></i>
                    <input
                      onChange={handleNameChange}
                      value={name}
                      type="text"
                      className="w-full h-[44px] bg-transparent text-[14px] font-normal px-4"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1">Email</label>
                  <div className="flex border-[1px] border-gray-700 rounded-md">
                    <i className="fas fa-envelope w-[50px] flex justify-center items-center border-r-[1px] text-gray-400 border-gray-700 text-[14px] flex-shrink-0"></i>
                    <input
                      onChange={handleEmailChange}
                      value={email}
                      type="email"
                      className="w-full h-[44px] bg-transparent text-[14px] font-normal px-4"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between py-4 border-t-[1px] border-[#a6b0cf22]">
                  <button className="text-[#a6b0cf] hover:text-[#7269ef]" onClick={()=>setAdd(false)}>Close</button>
                  <button type='submit' className="h-[40px] bg-[#7269ef] font-medium rounded-sm hover:bg-[#7269efcc] px-4">
                    Invite Contact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
}

