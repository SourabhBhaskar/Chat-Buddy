

export const loaderReducer = (state, action) => {
    const isLoading = action.payload;
    const updatedState = {
        ...state,
        isLoading: isLoading
    }

    return updatedState;
}