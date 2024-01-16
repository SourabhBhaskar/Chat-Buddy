
// Initial Setup
export function initialConnectionsSetupReducer(state, action) {
  const { all, favorites, recents } = action.payload.connections;

  // Favorites & Sorted All
  const sortedAll = {};
  for (let i in all) {
    const { email, username, isFavorite } = all[i];

    if(isFavorite){
      favorites.push(email);
      console.log("Hi................")
    }

    const key = username.slice(0, 1).toUpperCase();
    const value = { email, username };
    sortedAll[key]
    ? sortedAll[key].push(value)
    : sortedAll[key] = [value]
  }

  // Updated state
  const updatedState = {
    ...state,
    all: all,
    favorites: favorites,
    recents: recents,
    sortedAll: Object.entries(sortedAll).sort()
  };

  return updatedState;
}
