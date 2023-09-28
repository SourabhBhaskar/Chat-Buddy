// import { useState } from "react";


// // Dropdown menu
// export default function DropdownMenu({ ContentList }){
//     const [expend, setExpend] = useState(false);
    
//     return (
//       <div className='w-full h-auto relative flex justify-center items-center text-[#abb4d2]'>
//         <p>Available</p>
//         <span onClick={()=>setExpend(!expend)} className={`material-symbols-outlined text-[20px] pt-[1px] transition-all ${expend ? 'rotate-180' : 'rotate-0'}`}>expand_more</span>
//         {
//           expend &&
//           <ul className='w-[150px] py-2 absolute top-[25px] bg-[#262e35] border-[1px] border-gray-700 rounded-md dropdown-menu'>
//             {ContentList.map((value)=><li className='text-center py-2 hover:bg-[#abb4d211]'>{value}</li>)}
//           </ul>
//         }
//       </div>
//     );
//   }