// Imports
import { dummyContactsData } from "../DummyData";





// Set Current Connection
export function currentConnectionReducer(state, action){
    const connectionId = action.payload.email;
    const connection = state.all[connectionId];
    connection.isSeen = true;
    connection.unSeenMsgCnt = 0;
    state.currentConnection = { ...state.currentConnection, ...connection  };
}


// Add Connection
export function addNewConnectionReducer(state, action){
    const newConnection = action.payload;
    console.log(newConnection)

    // All
    state.all[newConnection.email] = newConnection;

    // Sorted All
    const updated_groupedAll = {};
    Object.values({ ...state.all })
        .sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()))
        .forEach((connection) => {
            const key = connection.username.slice(0, 1).toUpperCase();
            (updated_groupedAll[key])
            ? updated_groupedAll[key].push(connection.email)
            : updated_groupedAll[key] = [connection.email];
        })
    state.groupedAll = updated_groupedAll;
}











// Update Connection
export function updateConnectionReducer(state, action){
    const { name, value } = action.payload || {};
    const connection = state.currentConnection;

    switch(name){
        case "Notifications":
            connection.notifications = !value;
            state.all[connection.email].notifications = !value;
            break;
        case "Block":
            connection.block = !value;
            state.all[connection.email].block = !value;
    }
}