// Update Send Message Status
export function messageStatusReducer(state, action){
    const { id, to, status } = action.payload;
    const allConnections = state.all;
    const connection = allConnections[to];

    if(connection){
        const messages = connection.messages;
        for(let i=messages.length-1; i>=0; i-- ){
            if(messages[i].id === id){
                messages[i].status = status;
                switch(status){
                    case 'sent':
                        messages[i].time.sent = Date.now();
                        break;
                    case 'delivered':
                        messages[i].time.delivered = Date.now();
                        break;
                    case 'seen': 
                        messages[i].time.seen = Date.now();
                        break;
                    default: 
                        break;
                }
                break;
            }
        }
    }
}
