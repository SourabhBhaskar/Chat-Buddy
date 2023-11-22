

// Initial User Setup
export function initialUserSetupReducer(state, action){
    const user = action.payload;
    const updatedState = {
        ...state,
        ...user
    }
    console.log("User : ", user);
    return updatedState;
}


// Update User
export function updateUserReducer(state, action){
    const { name, value } = action.payload || {};
    console.log(name, value, action.payload)
    switch(name){
        case 'Username':
            return { ...state, username: value };
        case 'Mobile Number':
            return { ...state, mobile_number: value };
        case 'Email':
            return { ...state, email: value };
        case 'Password':
            return { ...state, password: value };
        case 'Status':
            return { ...state, status: value };
        case 'Location':
            return { ...state, location: value };
        case 'Profile Picture':
            return { ...state, profile_picture: value };
        default: 
            return { ...state };
    }
}