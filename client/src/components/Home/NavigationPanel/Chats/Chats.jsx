import React, { useState, useEffect } from 'react';
import Heading from '../Common/Headings';
import Search from '../Common/Search';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import { useSelector } from 'react-redux';


// Search
function searchItem(itemToSearch, favorites, recents, all){
  const filteredItemInFavorites = favorites.filter((e) => all[e].username.toUpperCase() === itemToSearch.toUpperCase());
  const filteredItemInRecents = recents.filter((e) => all[e].username.toUpperCase() === itemToSearch.toUpperCase());
  return { filteredItemInFavorites, filteredItemInRecents };
}

// Search not found
function NotFound(){
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <p className='text-l-primary-txt-color dark:text-d-secondary-txt-color'>Chat not found </p>
    </div>
  )
}


// Chats
function Chats() {
  const { all, favorites, recents } = useSelector(state => state.ConnectionsSlice);
  const [favoriteListToDisplay, setFavoriteListToDisplay] = useState([])
  const [recentListToDisplay, setRecentListToDisplay] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');
  
  useEffect(()=>{
    const foundInFavorites = favoriteListToDisplay.filter(chat => chat.username.toLowerCase() === itemToSearch);
    const foundInRecents = recentListToDisplay.filter(chat => chat.username.toLowerCase() === itemToSearch)
    if(itemToSearch){
      setFavoriteListToDisplay(foundInFavorites);
      setRecentListToDisplay(foundInRecents);
    }else{
      setFavoriteListToDisplay(favorites.map(e => all[e]));
      setRecentListToDisplay(recents.map(e => all[e]));
    }
  }, [itemToSearch])

  useEffect(()=>{
    setFavoriteListToDisplay(favorites.map(e => all[e]));
    setRecentListToDisplay(recents.map(e => all[e]));
  }, [all])

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Heading headingText={"Chats"} headingType="simple-heading" />
      <Search placeholder="Search for a chat" setItemToSearch={setItemToSearch} />
      <FavoriteChats List={favoriteListToDisplay}>
        <NotFound />
      </FavoriteChats>
      <RecentChats List={recentListToDisplay}>
        <NotFound />
      </RecentChats>
    </div>
  )
}

export default React.memo(Chats);

