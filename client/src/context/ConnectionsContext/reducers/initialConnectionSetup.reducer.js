import { connections as dummyConnections } from "../../../context/DummyData";


// Initial Setup
export function initialConnectionsSetupReducer(state, action) {
  const connections = [ ...action.payload, ...dummyConnections ];
  const updatedAll = {};
  const updatedSortedAll = {};
  const updatedFavorites = [];
  const updatedRecents = [ ...dummyConnections.map((c) => c.bio.email)];

  connections.forEach(connection => {
    const { email, username } = connection.bio;

    // All
    updatedAll[email] = connection;

    // Sorted All
    const key = username.slice(0, 1).toUpperCase();
    if(updatedSortedAll[key]) updatedSortedAll[key].push(email);
    else updatedSortedAll[key] = [email];

    // Favorites
    const isFavorite = connection.settings.isFavorite;
    if(isFavorite) updatedFavorites.push(email);
    
  });

  // Updated state
  const updatedState = {
    currentConnection: "",
    all: updatedAll,
    sortedAll: updatedSortedAll,
    favorites: updatedFavorites,
    recents: updatedRecents
  };

  return updatedState;
}
