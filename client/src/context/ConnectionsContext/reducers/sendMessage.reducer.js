
export function sendMessageReducer(state, action){
    const message = action.payload;
    const allConnections = state.all;
    const recentConnections = state.recents;

    // Update Connection Message
    if(allConnections[message.to])
        allConnections[message.to].messages.messageList.push(message);

    // Update Recent
    const recentIndex = recentConnections.findIndex((c) => c === message.to);
    if(recentIndex !== -1){
        const recentIndexValue = recentConnections[recentIndex];
        recentConnections.splice(recentIndex, 1);
        recentConnections.splice(0, 0, recentIndexValue);
    }else if(allConnections[message.to]){
        state.recents = [message.to, ...state.recents ];
    }
}

