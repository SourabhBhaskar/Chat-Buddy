// Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Heading from "../Headings";
import Search from "../Search";
import GroupedConnections from "./GroupedConnections";
import Connection from "./Connection";
import Menu from "./Menu";
import AddConnection from "./AddConnection";



// Connections
function Connections() {
  const { all, sortedAll } = useSelector((state) => state.ConnectionsSlice);
  const [listToDisplay, setListToDisplay] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');
  const [isAddingConnection, setIsAddingConnection] = useState(false);

  useEffect(()=>{
    const updatedItemToSearch = itemToSearch.trim().toLowerCase();
    if(updatedItemToSearch){
      const key = updatedItemToSearch.slice(0, 1).toUpperCase();
      const connectionList = sortedAll.filter(connectionList => connectionList[0] === key);
      setListToDisplay(connectionList.length ? [[ key, connectionList[0][1].filter(c => c.username.toLowerCase() === itemToSearch.toLowerCase())]] : []);
    }else{
      setListToDisplay(sortedAll)
    }
  }, [itemToSearch, sortedAll, all])

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Heading
        headingText="Contacts"
        headingType="heading-with-right-btn"
        btnIcon="addContact"
        handleBtnClick={() => setIsAddingConnection(true)}
      />
      <Search
        placeholder={"Search for a contact"}
        setItemToSearch={setItemToSearch}
      />
      <section className='flex-grow relative mb-1 mt-2'>
        <div className="w-full h-full absolute overflow-y-scroll hide-scrollbar">
          {listToDisplay.map(([key, value]) => {
            return (
              <GroupedConnections key={key} group={key}>
                 {value.map(({ username, email }) => {
                  const connectionValue = all[email];
                  return (
                    <Connection key={email} value={connectionValue}>
                      <Menu value={connectionValue} />
                    </Connection>
                  );
                 })}
              </GroupedConnections>
            );
          })}
        </div>
      </section>
      <AddConnection isAddingConnection={isAddingConnection} setIsAddingConnection={setIsAddingConnection} />
    </div>
  );
}

// Export
export default React.memo(Connections);
