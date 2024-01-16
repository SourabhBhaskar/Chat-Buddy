
export function favoriteConnectionReducer(state, action){
    const { connectionEmail, isFavorite} = action.payload;

    state.all[connectionEmail].isFavorite = isFavorite;
    if(isFavorite)
        state.favorites.push(connectionEmail);
    else
        state.favorites.splice(state.favorites.findIndex(e => e === connectionEmail), 1);
}