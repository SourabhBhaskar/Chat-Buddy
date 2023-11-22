import React, { useState, useEffect } from 'react';
import { Heading } from '../Common/Heading';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import Search from '../Common/Search';
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
    console.log("Searching...");
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

  return (
    <>
      <Heading text={'Chats'} />
      <Search placeholder="Search for a chat" setItemToSearch={setItemToSearch} />
      <FavoriteChats List={favoriteListToDisplay}>
        <NotFound />
      </FavoriteChats>
      <RecentChats List={recentListToDisplay}>
        <NotFound />
      </RecentChats>
    </>
  )
}

export default React.memo(Chats);

