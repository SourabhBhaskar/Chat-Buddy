// Add Connection
export function removeConnectionReducer(state, action) {
    const { connectionEmail } = action.payload;
  
    // Sorted All
    const connectionToRemove = state.all[connectionEmail];
    const keyToFind = connectionToRemove.username.slice(0, 1).toUpperCase();
    const listIndex = state.sortedAll.findIndex(([key, list]) => key === keyToFind);
  
    if (listIndex !== -1) {
      const list = state.sortedAll[listIndex][1];
      const connectionIndex = list.findIndex(({ email }) => email === connectionEmail);
  
      if (connectionIndex !== -1) {
        list.splice(connectionIndex, 1);
  
        if (list.length === 0) {
          state.sortedAll.splice(listIndex, 1);
        }
      }
    }

    // All
    delete state.all[connectionEmail];
  }
  