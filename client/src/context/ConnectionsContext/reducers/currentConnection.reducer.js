import { socket } from "../../../socket/socket-client";

export function currentConnectionReducer(state, action){
    const { connectionId } = action.payload;
    state.currentConnection = connectionId;
    state.all[connectionId].messages.unSeenMsgCnt = 0;
    socket.emit('connection-status', { name: "seen", value: { receiverId: connectionId }});
}
