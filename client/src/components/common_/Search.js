import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


// Search Chat
export default function Search({ placeholder, ListName, List, Search}){
  const [inpVal, setInpVal] = useState('');
  const { search, setSearch } = Search;
  const { list, setList } = List;
  const all = useSelector((state) => state.ContactStatesSlice).all;
  const recent = useSelector((state) => state.ContactStatesSlice).recent;

  // handle input change
  function handleChange(e){
    e.stopPropagation();
    setInpVal(e.target.value);
    if(e.target.value === ''){
      setSearch(false);
      setList([]);
    }
  }

  // handle search 
  function handleSearch(){
    const trimmedInpVal = inpVal.trim();
    if(trimmedInpVal === '')
      return ;

    const isExistInAll = all.findIndex((c) => c.username === trimmedInpVal);
    const isExistInRecent = recent.findIndex((c) => c.username === trimmedInpVal);
    if(ListName === 'all' && isExistInAll !== -1){
      setList([all[isExistInAll]]);
    }else if(ListName === 'recent' && isExistInRecent !== -1){
      setList([recent[isExistInRecent]]);
    }
    setSearch(true);
  }

  // handle keydown
  useEffect(()=>{
    function handleKeyDown(e){
      if(e.key === 'Enter')
        handleSearch();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  })

  return (
    <div className={`h-[44px] flex-shrink-0 px-4 my-4 rounded-sm flex items-center gap-4 bg-[#a6b0cf11]`}>
      <button onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass opacity-70"></i>
      </button>
      <input 
        onChange={handleChange}
        value={inpVal}
        placeholder={placeholder}
        className={`flex-grow h-full bg-transparent`}
      />
    </div>
  );
}