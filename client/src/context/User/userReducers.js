import { useReducer } from "react";


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


// Update User
export function updateUserReducer(state, action){
    const { name, value } = action.payload || {};

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