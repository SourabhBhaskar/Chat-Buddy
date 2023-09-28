// import React, { useState, useRef, useEffect, useContext } from 'react';
// import { MyProfileContext } from '../context/myProfile';


// // Request to the server
// async function handleSubmit(dataField, data, myProfile) {
//   const email = myProfile.private.email;
//   const url = process.env.REACT_APP_SERVER_EDIT;
//   const method = "POST";
//   const headers = { "Content-Type": "application/json" };
//   const body = JSON.stringify({ email: email, dataField: dataField, data: data })
//   const options = { method, headers, body };

//   try{
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);

//   }catch (error) {
//       console.error("Error:", error);
//   }
// }


// // Make Editable Field
// export default function EditableField({ FieldName, data}){
//   const [state, setState] = useState(data)
//   const [mode, setMode] = useState(true);
//   const inputRef = useRef(null);
//   const { myProfile, setMyProfile } = useContext(MyProfileContext);

//   // On input change
//   function handleChange(e) {
//     e.stopPropagation();
//     setState(e.target.value);
//   }

//   // On button click
//   function handleBtnClick(e) {
//     e.stopPropagation();
//     if(!mode){
//         const dataField = FieldName;
//         const data = state;
//         handleSubmit(dataField, data, myProfile);
//     }
//     setMode(!mode);
//   }

//   // Auto focue for input
//   useEffect(() => {
//     if (mode === false) {
//       inputRef.current.focus();
//     }
//   }, [mode]);

//   return (
//     <div className='py-2'>
//       <h1 className='text-[0.95rem] font-medium text-[#abb4d2]'>{FieldName}</h1>
//       <div className='flex justify-between items-center text-white'>
//         <input
//           className='w-full bg-transparent text-[0.95rem] font-medium'
//           onChange={handleChange}
//           value={state}
//           disabled={mode}
//           ref={inputRef} 
//         />
//         <button className='w-[25px] h-[20px] flex justify-center items-center text-xs text-white bg-[#eff2f711] hover:bg-[#eff2f722] rounded-md text-[0.5rem]' onClick={handleBtnClick}>
//           {mode && <i className="fa-solid fa-pen"></i>}
//           {!mode && <i className="fa-solid fa-cloud-arrow-down"></i>}
//         </button>
//       </div>
//     </div>
//   );
// }