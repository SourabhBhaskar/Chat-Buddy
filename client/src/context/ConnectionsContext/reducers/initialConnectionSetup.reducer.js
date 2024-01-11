
// Initial Setup
export function initialConnectionsSetupReducer(state, action){
    const { all, favorites, recents } = action.payload.connections;

    // Sorted All
    const groupedAll = {};
    for(let i in all){
        const email = all[i].email;
        const key = all[i].username.slice(0, 1).toUpperCase();
        (groupedAll[key])
        ? groupedAll[key].push(email)
        : groupedAll[key] = [email];
    }

    // Updated state
    const updatedState = {
        ...state,
        all: all,
        favorites: favorites,
        recents: recents,
        groupedAll: groupedAll,
    }
    
    return updatedState;
}