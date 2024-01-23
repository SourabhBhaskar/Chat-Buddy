import { socket } from "../../../socket/socket-client";


export function receiveMessageReducer(state, action){
    const message = action.payload;
    const currentConnectionEmail = state.currentConnection;
    const allConnections = state.all;
    const recentConnections = state.recents;

    // Upadte All
    if(allConnections[message.from]){
        allConnections[message.from].messages.messageList.push(message);
        if(currentConnectionEmail !== message.from){
            allConnections[message.from].messages.unSeenMsgCnt += 1;
        }
    }

    // Update Recent
    const recentIndex = recentConnections.findIndex((c) => c === message.from);
    if(recentIndex !== -1){
        const recentIndexValue = recentConnections[recentIndex];
        recentConnections.splice(recentIndex, 1);
        recentConnections.splice(0, 0, recentIndexValue);
    }else{
        const connection = message.from;
        const isExit = state.all[connection];
        if(isExit){
            recentConnections.splice(0, 0, connection);
        }else{
            
        }
    } 
    
    // Responce
    if(currentConnectionEmail === message.from){
        const responceMessage = { 
            id: message.id, 
            status: 'seen', 
            time: {
                ...message.time,
                seen: Date.now()
            }, 
            to: message.from
        }
        socket.emit('connection-status', { name: "message", value: { ...responceMessage }});
    }
}