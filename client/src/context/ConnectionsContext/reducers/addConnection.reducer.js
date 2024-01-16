// Add Connection
export function addConnectionReducer(state, action){
    const newConnection = action.payload;

    // All
    state.all[newConnection.email] = newConnection;

    // Sorted All
    const keyToFind = newConnection.username.slice(0, 1).toUpperCase();
    const listIndex = state.sortedAll.findIndex(([key, list]) => key === keyToFind);
    if(listIndex !== -1){
        state.sortedAll[listIndex][1].push(newConnection);
    }else{
        state.sortedAll.push([keyToFind, [newConnection]]);
        state.sortedAll.sort();
    }
}
