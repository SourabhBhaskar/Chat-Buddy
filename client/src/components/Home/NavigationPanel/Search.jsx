import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons.util';


function Search({ placeholder, setItemToSearch }) {
  const [inpVal, setInpVal] = useState('');

  useEffect(() => {
    !inpVal && setItemToSearch('');
  }, [inpVal]);

  return (
    <div className='w-full h-[44px] relative rounded-md flex items-center gap-3 px-3 overflow-hidden bg-primary-light-hover dark:bg-primary-dark-hover'>
      <Icon icon={icons.search} fontSize={22} className={`${inpVal ? 'text-primary-light dark:text-primary-dark' : 'text-secondary-light dark:text-secondary-dark'} transition-all`} />
      <input 
        className='flex-grow h-full bg-transparent text-primary-light dark:text-primary-dark placeholder:text-secondary-light dark:placeholder:text-secondary-dark peer'
        onChange={(e) => setInpVal(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && setItemToSearch(inpVal)}
        value={inpVal}
        placeholder={placeholder}
      />
      <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 left-1/2 bg-main-color transition-all duration-200'></span>
      <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 right-1/2 bg-main-color transition-all duration-200'></span>
    </div>
  );
}


export default React.memo(Search);
