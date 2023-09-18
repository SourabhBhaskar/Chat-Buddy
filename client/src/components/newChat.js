// import React, { useState } from 'react'

// function NewChat() {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');

//   function handleSubmit(){

//   }

//   return (
//     < >
//       <div>
//         <span className="material-symbols-outlined">sms</span>
//       </div>
//       <div className="w-[350px] flex items-center justify-center h-screen absolute">
//         <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//           <h1 className="text-2xl font-semibold mb-4 text-black">Add new contact</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//               <input type="email" id="email" name="email" className="border border-gray-300 p-2 w-full rounded" value={name} onChange={ (e) => setName(e.target.value) }/>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//               <input type="password" id="password" name="password" className="border border-gray-300 p-2 w-full rounded" value={contact} onChange={ (e) => setContact(e.target.value) }/>
//             </div>
//             <div className="mb-6">
//               <label className="flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
//             </div>
//             <button type="submit" className="bg-[#25D366] hover:bg-[#25D366dd] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">Login</button>
//           </form>
//         </div> 
//       </div>
//     </>
//   )
// }

// export default NewChat;