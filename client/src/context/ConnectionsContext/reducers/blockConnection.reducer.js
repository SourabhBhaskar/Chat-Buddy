

export function blockConnectionReducer(state, action){
    const { connectionEmail, isBlocked }= action.payload;
    state.all[connectionEmail].settings.isBlocked = isBlocked;
}