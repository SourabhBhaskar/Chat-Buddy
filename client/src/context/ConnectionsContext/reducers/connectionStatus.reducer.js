
export const connectionStatusReducer = (state, action) => {
    const { name, value } = action.payload;
    const connectionId = value.receiverId || value.to;
    const connectionData = state.all[connectionId];

    if(!connectionData)
        return state;

    switch(name){
        case 'seen': 
            const seen_messages = state.all[connectionId].messages.messageList;
            for(let i = seen_messages.length-1; i >=0 && (seen_messages[i].status === 'sending' || seen_messages[i].status === 'sent' || seen_messages[i].status === 'delivered') ; i--){
                seen_messages[i].status = 'seen';
                seen_messages[i].time.seen = Date.now();
            }
            break;
        case 'last_seen':
            const { last_seen } = value;
            state.all[connectionId].bio.last_seen = last_seen;
            break;
        case 'online':
            if(state.all[connectionId].bio.last_seen === "Typing...")
                state.all[connectionId].bio.last_seen = "Online"
            break;
        case 'typing...':
            if(state.all[connectionId].bio.last_seen === "Online")
                state.all[connectionId].bio.last_seen = "Typing...";
            break;
        case 'message':
            const messages = state.all[connectionId].messages.messageList;
            const { id, status, time } = value;
            for(let i=messages.length-1; i>=0; i--){
                if(messages[i].id === id){
                    messages[i].status = status;
                    messages[i].time = time;
                    break;
                }
            }
            break;
    }
}