export function currentConnectionReducer(state, action){
    const connectionId = action.payload || '';
    state.currentConnection = connectionId;
}
