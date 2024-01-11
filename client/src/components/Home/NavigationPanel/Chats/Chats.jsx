import React, { useState, useEffect } from 'react';
import Heading from '../Headings';
import Search from '../Search';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import { useSelector } from 'react-redux';


// Chats
function Chats() {
  const { all, favorites, recents } = useSelector(state => state.ConnectionsSlice);
  const [favoriteListToDisplay, setFavoriteListToDisplay] = useState([])
  const [recentListToDisplay, setRecentListToDisplay] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');
  
  useEffect(()=>{
    const updatedItemToSearch = itemToSearch.trim().toLocaleLowerCase();
    if(updatedItemToSearch){
      const foundInFavorites = favoriteListToDisplay.filter(chat => chat.username.toLowerCase() === updatedItemToSearch);
      const foundInRecents = recentListToDisplay.filter(chat => chat.username.toLowerCase() === updatedItemToSearch);
      setFavoriteListToDisplay(foundInFavorites);
      setRecentListToDisplay(foundInRecents);
    }else{
      setFavoriteListToDisplay(favorites.map(e => all[e]));
      setRecentListToDisplay(recents.map(e => all[e]));
    }
  }, [itemToSearch, all])


  return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <Heading headingText={"Chats"} headingType="simple-heading" />
      <Search placeholder="Search for a chat" setItemToSearch={setItemToSearch} />
      <FavoriteChats List={favoriteListToDisplay} />
      <RecentChats List={recentListToDisplay} />
    </div>
  )
}

export default React.memo(Chats);

