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