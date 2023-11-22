import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListSection from './ListSection/ListSection';
import { Heading_Btn } from '../Common/Heading';
import Search from '../Common/Search';
import AddItem from './HeadingSection/AddItem';
import NotFound from './ListSection/NotFound';
import AddContact from './ListSection/AddContact';
import { setIsAddingContact } from '../../context/Boolean/booleanSlice';


// Search Contact
function searchItem(itemToSearch, all){
  const newItemList = { };
  for(let name in all){
    const username = all[name].username.toUpperCase();
    const usernameToSearch = itemToSearch.toUpperCase();
    if(username === usernameToSearch){
      const key = usernameToSearch.slice(0, 1);
      if(newItemList[key])
        newItemList[key].push(name);
      else
        newItemList[key] = [name];
    }
  }
  return newItemList;
}


// Contacts
function Connections() {
  const dispatch = useDispatch();
  const { isAddingContact } = useSelector(state => state.BooleanSlice);
  const { all, sortedAllByName } = useSelector(state => state.ContactsSlice);
  const [listToDisplay, setListToDisplay] = useState(sortedAllByName);
  const [itemToSearch, setItemToSearch] = useState('');

  useEffect(()=>{
    setListToDisplay(sortedAllByName);
  }, [sortedAllByName])

  useEffect(()=>{
    if(itemToSearch) setListToDisplay(searchItem(itemToSearch, all));
    else setListToDisplay(sortedAllByName);
  }, [itemToSearch, all, sortedAllByName])

  const handleAddItemClick = () => dispatch(setIsAddingContact(true));
  const handleExit = () => dispatch(setIsAddingContact(false));

  return (
    <>
      <Heading_Btn text={"Contacts"} handleAddItemClick={handleAddItemClick} />
      <Search placeholder={"Search for a contact"} setItemToSearch={setItemToSearch} />
      { (Object.keys(listToDisplay).length ) 
        ? <ListSection All={all} List={listToDisplay} /> 
        : itemToSearch && <NotFound /> }
      { (!Object.keys(all).length && !itemToSearch) && <AddContact />}
      { isAddingContact && <AddItem handleExit={handleExit}/> }
    </>
  );
}

export default React.memo(Connections);
