// Add Connection
export function removeConnectionReducer(state, action) {
  const { connectionEmail } = action.payload;

  const connectionToRemove = state.all[connectionEmail];
  const keyToFind = connectionToRemove.bio.username.slice(0, 1).toUpperCase();
  const list = state.sortedAll[keyToFind];
  const connectionIndex = list.findIndex((e) => e === connectionEmail);
  if (connectionIndex !== -1) {
    list.splice(connectionIndex, 1);
    if (list.length === 0) {
      delete state.sortedAll[keyToFind]
    }
  }

  // All
  delete state.all[connectionEmail];
}
