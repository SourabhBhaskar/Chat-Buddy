// Add Connection
export function addConnectionReducer(state, action){
    const newConnection = action.payload;

    // All
    state.all[newConnection.bio.email] = newConnection;

    // Sorted All
    const keyToFind = newConnection.bio.username.slice(0, 1).toUpperCase();
    state.sortedAll[keyToFind] = (state.sortedAll[keyToFind] || []).concat(newConnection.bio.email);
}
