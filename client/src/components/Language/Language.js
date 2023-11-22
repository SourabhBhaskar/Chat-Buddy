import React, { useState } from 'react';
import { Icon } from '@iconify/react';


function Language() {
    const [isEditing, setIsEditing] = useState(false);
  
    return (
        <div className='relative'>
            <button onClick={() => setIsEditing(!isEditing)} className={`p-3 xl:p-4 rounded-xl hover-bg-[#a6b0cf11]`}>
                <Icon icon="ri:global-line" />
            </button>
            {/* { isEditing && 
            <div className={`border-[1px] p-4 absolute left-full bottom-full rounded-md text-[1rem] shadow-lg ${themeMode.dark ? dropdownMenuParent.dark : dropdownMenuParent.light }`}>
                <button className={`w-full flex items-center gap-4 py-1 px-4 rounded-md ${ themeMode.dark ? dropdownMenuChild.dark : dropdownMenuChild.light }`}><Icon icon="flagpack:in" className='text-sm' />Hindi</button>
                <button className={`w-full flex items-center gap-4 py-1 px-4 rounded-md ${ themeMode.dark ? dropdownMenuChild.dark : dropdownMenuChild.light }`}><Icon icon="flagpack:au" className='text-sm' />English</button>
                <button className={`w-full flex items-center gap-4 py-1 px-4 rounded-md ${ themeMode.dark ? dropdownMenuChild.dark : dropdownMenuChild.light }`}><Icon icon="flag:es-4x3" className='text-sm' />Spanish</button>
                <button className={`w-full flex items-center gap-4 py-1 px-4 rounded-md ${ themeMode.dark ? dropdownMenuChild.dark : dropdownMenuChild.light }`}><Icon icon="flagpack:de" className='text-sm' />German</button>
                <button className={`w-full flex items-center gap-4 py-1 px-4 rounded-md ${ themeMode.dark ? dropdownMenuChild.dark : dropdownMenuChild.light }`}><Icon icon="flagpack:it" className='text-sm' />Italian</button>
            </div>} */}
        </div>
    )
}

export default Language;