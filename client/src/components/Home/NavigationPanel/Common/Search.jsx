import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';


function Search({ placeholder, setItemToSearch }) {
  const [inpVal, setInpVal] = useState('');
  const handleChange = (e) => setInpVal(e.target.value);

  const handleSearch = () => {
    const trimmedInp = inpVal.trim().toLowerCase();
    trimmedInp !== '' && setItemToSearch(trimmedInp);
  }

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
      !inpVal && setItemToSearch('');
  }, [inpVal]);


  return (
    <div className={`h-[44px] flex-shrink-0 rounded-md overflow-hidden flex items-center gap-4 relative bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color`}>
      <Icon icon='ri:search-line' className={`w-12 h-full p-3 absolute ${inpVal ? 'text-l-primary-txt-color dark:text-d-primary-txt-color' : ' text-l-secondary-txt-color dark:text-d-secondary-txt-color'}`} />
      <input
        onChange={handleChange}
        onKeyDown={handleEnterKeyPress}  
        value={inpVal}
        placeholder={placeholder}
        className='peer w-full h-full bg-transparent text-[15px] pl-12 pr-4 placeholder:text-l-secondary-txt-color dark:placeholder:text-d-secondary-txt-color text-l-primary-txt-color dark:text-d-primary-txt-color'
      />
      { !inpVal && <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 left-1/2 bg-l-secondary-txt-color dark:bg-d-secondary-txt-color transition-all'></span>}
      { !inpVal && <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 right-1/2 bg-l-secondary-txt-color dark:bg-d-secondary-txt-color transition-all'></span>}
      { inpVal && <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 left-1/2 bg-[#7269ef] transition-all'></span>}
      { inpVal && <span className='w-0 h-[2px] peer-focus:w-[50%] absolute bottom-0 right-1/2 bg-[#7269ef] transition-all'></span>}
    </div>
  );
}


export default Search;
