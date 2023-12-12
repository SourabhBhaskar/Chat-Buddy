// Imports
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../Common/Headings";
import Search from "../Common/Search";
import ConnectionsList from "./ConnectionsList";
import GroupedConnections from "./GroupedConnections";
import Connection from "./Connection";
import Menu from "./Menu";
import Empty from "../Common/Empty";
import AddConnection from "./AddConnection";
import Loader from "../../../Common/Loader";

// Connections
function Connections() {
  const { all, sortedAll } = useSelector((state) => state.ConnectionsSlice);
  const [listToDisplay, setListToDisplay] = useState([]);
  const [itemToSearch, setItemToSearch] = useState("");
  const [isAddingConnection, setIsAddingConnection] = useState(false);

  const handleAddConnection = () => setIsAddingConnection(true);

  useEffect(() => {
    if (itemToSearch) {
      const letter = itemToSearch.slice(0, 1).toUpperCase();
      const values = sortedAll[letter];
      const foundConnections = {};
      if (values) {
        values.forEach((key) => {
          const connection_data = all[key];
          const username = connection_data.username.toLowerCase();
          const usernameToSearch = itemToSearch.toLowerCase();
          if (username === usernameToSearch) {
            foundConnections[letter]
              ? foundConnections[letter].push(connection_data.email)
              : (foundConnections[letter] = [connection_data.email]);
          }
        });
      }
      setListToDisplay(Object.entries(foundConnections));
    } else {
      setListToDisplay(Object.entries(sortedAll));
    }
  }, [itemToSearch]);

  
  // Update Connection List
  useEffect(() => {
    setListToDisplay(Object.entries(sortedAll))
  }, [all]);

  return (
    <>
      <Loader />
      <div className="w-full h-full flex flex-col overflow-hidden">
        <Heading
          headingText="Contacts"
          headingType="heading-with-right-btn"
          btnIcon="addContact"
          handleBtnClick={handleAddConnection}
        />
        <Search
          placeholder={"Search for a contact"}
          setItemToSearch={setItemToSearch}
        />
        <ConnectionsList>
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
          {listToDisplay.length === 0 && (
            <Empty message="Connection not found" />
          )}
        </ConnectionsList>
        <AddConnection isAdding={isAddingConnection} exit={() => setIsAddingConnection(false)} />
      </div>
    </>
  );
}

// Export
export default React.memo(Connections);
