

export const userBioReducer = (state, action) => {
    const { username, mobile_number, email, location, status, description } = action.payload;

    if(username) state.username = username;
    else if(email) state.email = email;
    else if(mobile_number) state.mobile_number = mobile_number;
    else if(location) state.location = location;
    else if(status) state.status = status;
    else if(description) state.description = description;
    else return state;
}