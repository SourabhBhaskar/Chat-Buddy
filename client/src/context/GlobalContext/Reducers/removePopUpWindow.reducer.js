export function removePopUpWindowReducer(state, action) {
  const index = action.payload;

  if (index !== undefined && index >= 0 && index < state.popUpWindows.length) {
    const updatedState = {
      ...state,
      popUpWindows: [
        ...state.popUpWindows.slice(0, index),
        ...state.popUpWindows.slice(index + 1),
      ],
    };

    return updatedState;
  }
  return state;
}
