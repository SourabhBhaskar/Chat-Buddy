
export const connectionStatusReducer = (state, action) => {
    const status = action.payload;
    const connectionId = status.receiverId;
    const connectionData = state.all[connectionId];
    console.log(status)

    if(!connectionData)
        return state;

    if(status.last_seen){
        const time = status.last_seen;
        state.all[connectionId].bio.last_seen = time;
    }else if(status.message){
        switch(status.message){
            case 'sent': 
                const sent_messages = state.all[connectionId].messages.messageList;
                for(let i = sent_messages.length-1; i >=0 && (sent_messages[i].status === 'sending'); i--){
                    sent_messages[i].status = 'sent';
                    sent_messages[i].time.sent = Date.now();
                }
            break;
            case 'delivered':
                const delivered_messages = state.all[connectionId].messages.messageList;
                for(let i = delivered_messages.length-1; i >=0 && (seen_messages[i].status === 'sending' || seen_messages[i].status === 'sent'); i--){
                    delivered_messages[i].status = 'delivered';
                    delivered_messages[i].time.delivered = Date.now();
                }
                break;
            case 'seen':
                const seen_messages = state.all[connectionId].messages.messageList;
                for(let i = seen_messages.length-1; i >=0 && (seen_messages[i].status === 'sending' || seen_messages[i].status === 'sent' || seen_messages[i].status === 'delivered') ; i--){
                    seen_messages[i].status = 'seen';
                    seen_messages[i].time.seen = Date.now();
                }
                break;
            case 'online':
                if(state.all[connectionId].bio.last_seen === "Typing..." )
                    state.all[connectionId].bio.last_seen = "Online"
                break;
            case 'typing...':
                if(state.all[connectionId].bio.last_seen === "Online")
                    state.all[connectionId].bio.last_seen = "Typing...";
                break;
        }
    }else{
        return state;
    }
}