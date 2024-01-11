// Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Heading from "../Headings";
import Search from "../Search";
import GroupedConnections from "./GroupedConnections";
import Connection from "./Connection";
import Menu from "./Menu";
// import AddConnection from "./AddConnection";



// Connections
function Connections() {
  const { all, groupedAll } = useSelector((state) => state.ConnectionsSlice);
  const [listToDisplay, setListToDisplay] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');
  
  useEffect(()=>{
    const updatedItemToSearch = itemToSearch.trim().toLocaleLowerCase();
    if(updatedItemToSearch){
      const keyToSearch = updatedItemToSearch.slice(0, 1).toLocaleUpperCase();
      const list = groupedAll[keyToSearch];
      const newListToDisplay = {};
      newListToDisplay[keyToSearch] = list.filter((connection) => all[connection].username.toLocaleLowerCase() === updatedItemToSearch);
      setListToDisplay(Object.entries(newListToDisplay));

    }else{
      // for(let i in groupedAll){
      //   groupedAll[i].forEach(connection => {
      //     console.log(connection)
      //   });
      // }
      setListToDisplay(Object.entries(groupedAll).sort());
    }
  }, [itemToSearch, groupedAll])

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Heading
        headingText="Contacts"
        headingType="heading-with-right-btn"
        btnIcon="addContact"
        // handleBtnClick={handleAddConnection}
      />
      <Search
        placeholder={"Search for a contact"}
        setItemToSearch={setItemToSearch}
      />
      <section className='flex-grow relative'>
        <div className="w-full h-full absolute overflow-y-scroll hide-scrollbar">
          {listToDisplay.map(([key, value]) => {
            return (
              <GroupedConnections key={key} group={key}>
                {value.map((email) => {
                  return (
                    <Connection key={email} value={all[email]}>
                      <Menu />
                    </Connection>
                  );
                })}
              </GroupedConnections>
            );
          })}
        </div>
      </section>
      {/* <AddConnection isAdding={isAddingConnection} exit={() => setIsAddingConnection(false)} /> */}
    </div>
  );
}

// Export
export default React.memo(Connections);
