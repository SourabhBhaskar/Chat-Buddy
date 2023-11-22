import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { secondaryTxtColor } from '../../Common/Theme';



function SearchSection({ List, setList, setIsSearching }) {
  const { themeMode } = useSelector((state) => state.NavigateModesSlice);
  const [inpVal, setInpVal] = useState('');
  
  // Handle change 
  const handleChange = (e) => {
    setInpVal(e.target.value)
    if(e.target.value === ''){
      setIsSearching(false);
    }
  }

  // Search Contact
  const searchContact = (toSearch) => {
    const searchKey = toSearch.trim().slice(0, 1).toUpperCase();
    const keyValueArr = List[searchKey] || [];
    const searchedContact = keyValueArr.find((contact) => contact.username.toUpperCase() === toSearch.toUpperCase());
    if (searchedContact) {
      const newList = { [searchKey]: [searchedContact] };
      setList(newList);
    } else {
      setList({});
      alert(`${toSearch} is not found`)
    }
    setIsSearching(true);
  };
  

  // Tracking enter key
  useEffect(() => {
    const handleSearch = (e) => {
      if (e.key === 'Enter') {
        const searchValue = e.target.value.trim();
        if (searchValue !== '') {
          searchContact(searchValue);
        }
      }
    }

    window.addEventListener('keydown', handleSearch);
    return () => window.removeEventListener('keydown', handleSearch);
  }, []);



  return (
    <div className={`h-[44px] flex-shrink-0 px-4 mb-4 rounded-md flex items-center gap-4 bg-[#a6b0cf11]`}>
      <button onClick={searchContact}>
        <Icon icon='ri:search-line' className={`text-lg ${ themeMode.dark ? secondaryTxtColor.dark : secondaryTxtColor.light}`} />
      </button>
      <input 
        onChange={handleChange}
        value={inpVal}
        placeholder="Search a contact"
        className={`flex-grow h-full bg-transparent text-[15px]`}
      />
    </div>
  )
}

export default SearchSection;