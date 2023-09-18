import React, { useContext, useState } from 'react'
import { myProfile } from '../context/myProfile';
import { ContactListContext } from '../context/contactList';



function AddContact() {
  const [box, setBox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { contactList, setContactList } = useContext(ContactListContext);


  // Submit handler
  async function handleSubmit(e) {
    e.preventDefault(); 

    const url = process.env.REACT_APP_SERVER_ADD_CONTACT;
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ userEmail:myProfile.email, contactName:name, contactEmail:email })
    const options = { method, headers, body }

    try{
      const response = await fetch(url, options);
      const result = await response.json();
      setName('');
      setEmail('');
      setBox(!box);
      
      if(result.message === 'Contact added successfully'){
        setContactList([result.data, ...contactList])
        console.log(result.data);
      }
      else if(result.message === 'Contact with this email already exists')
        alert(result.message);
      else  
        alert(result.message);

    }catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <button className='w-[60px] h-[60px] rounded-full text-3xl absolute bottom-[30px] right-[30px] bg-blue-600 border-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-[3px]' onClick={ () => setBox(!box) }>+</button>
      { 
        box && 
        <div className='w-[350px] h-auto flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-blue-600 text-white py-5'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
              <input type="text" name="contactName" className="border border-gray-300 p-2 w-full rounded text-black" value={name} onChange={ (e) => setName(e.target.value) } required/>
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="contactEmail" className="border border-gray-300 p-2 w-full rounded text-black" value={email} onChange={ (e) => setEmail(e.target.value) } required/>
            </div>
            <button type="submit" className="bg-white hover:bg-[#fffe] text-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">Add</button>
          </form>
        </div>
      }
    </>
  )
}

export default AddContact;