

// Initial User Setup
export function initialUserSetupReducer(state, action){
    const user = action.payload;
    const updatedState = {
        username: user.username,
        mobile_number: user.mobile_number,
        email: user.email,
        password: user.password,
        location: user.location,
        profile_picture: user.profile_picture,
        status: user.status,
        phone: user.phone,
        description: user.description,
        last_seen: user.last_seen
    } 

    return updatedState;
}
