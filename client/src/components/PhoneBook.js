import { useContext, useState } from 'react';
import { DarkModeContext } from '../context/Modes';
import Heading from './Heading';
import SearchChat from './Search';



// Add Contact 
function AddContact(){
  const [add, setAdd] = useState(false);

  return (
    <>
      <button className='text-[#a6b0cf]' onClick={()=>setAdd(!add)}>
        <i class="fa-solid fa-user-plus"></i>
      </button>
      { add &&
        <div className='w-full h-screen absolute top-0 left-0 border-2'></div>
      }
    </>
  );
}


// Menu
function Menu(){
  return (
    <div className='text-[#a6b0cf]'>
      <i className="fa-solid fa-ellipsis-vertical text-xs rounded-lg"></i>
    </div>
  );
}

// Contact
function Contact({ Index, List }){
  const name = List[Index];
  let newAlpabet = false;

  if(Index === 0)
    newAlpabet = List[0].slice(0,1).toUpperCase();
  else if(Index){
    const currAlphabet = List[Index].slice(0,1).toUpperCase();
    const prevAlphabet = List[Index-1].slice(0,1).toUpperCase();
    newAlpabet = currAlphabet !== prevAlphabet ? currAlphabet : false;
  }

  return (
    <>
      { newAlpabet && <h1 className='flex items-end text-[#7269ef] font-medium w-full h-[54px] my-4 px-2'>{newAlpabet}</h1> }
      <div className='w-full h-[44px] flex justify-between items-center text-[15px] font-[500] hover:bg-[#a6b0cf11] px-4'>
        <p>{name}</p>
        <Menu />
      </div>
    </>
  );
}



// Contact List
function ContactList() {
  const contactList = ["Sourabh", "Farjana", "RajNandani", "Vishakha", "Shreya", "Sangita", "Sourabh", "Farjana", "RajNandani", "Vishakha", "Shreya", "Sangita", "Sourabh", "Farjana", "RajNandani", "Vishakha", "Shreya", "Sangita"];
  contactList.sort();

  return (
    <div className='w-full h-full flex flex-col absolute p-6 bg-[#303841]'>
      <div className='w-full flex justify-between items-center pr-4'>
        <h1 className='text-xl font-[600]'>Contacts</h1>
        <AddContact />
      </div>
      <SearchChat placeholder={"Search for a contact..."} />
      <div className='w-full h-full flex-grow overflow-scroll'>
        {contactList.map((value, index)=><Contact key={index} Index={index} List={contactList}  />)}
      </div>
    </div>
  )
}

export default ContactList;