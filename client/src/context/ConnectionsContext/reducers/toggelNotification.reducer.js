

export const toggleNotificationReducer = (state, action) => {
    const { connectionEmail, isNotificationOn }= action.payload;
    state.all[connectionEmail].settings.isNotificationOn = isNotificationOn;
}