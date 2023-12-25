// Receive Messages
export function receiveMessageReducer(state, action){
    const message = action.payload;
    const currentConnection = state.currentConnection;
    const allConnections = state.all;
    const recentConnections = state.recents;

    // Upadte All
    if(allConnections[message.from]){
        allConnections[message.from].messages.push(message);
        if(currentConnection.email !== message.from){
            allConnections[message.from].isSeen = false;
            allConnections[message.from].unSeenMsgCnt += 1;
        }
    }

    // Update Recent
    const recentIndex = recentConnections.findIndex((c) => c === message.from);
    if(recentIndex !== -1){
        const recentIndexValue = recentConnections[recentIndex];
        recentConnections.splice(recentIndex, 1);
        recentConnections.splice(0, 0, recentIndexValue);
    }else{
        
    }     
}