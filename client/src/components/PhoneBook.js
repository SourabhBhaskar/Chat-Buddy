import { useContext } from 'react';
import { DarkModeContext } from '../context/Modes';
import Heading from './Heading';
import SearchChat from './Search';



// Menu
function Menu(){
  return (
    <div className=''>
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
      { newAlpabet && <h1 className='flex items-end text-[#7269ef] font-medium w-full h-[54px] my-4'>{newAlpabet}</h1> }
      <div className='w-full h-[44px] flex justify-between items-center text-[15px] font-[500] p-2'>
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
    <div className='w-full h-full flex flex-col absolute p-6'>
      <Heading text={"Contacts"}/>
      <SearchChat placeholder={"Search for a contact..."} />
      <div className='w-full h-full flex-grow overflow-scroll p-4'>
        {contactList.map((value, index)=><Contact key={index} Index={index} List={contactList}  />)}
      </div>
    </div>
  )
}

export default ContactList;