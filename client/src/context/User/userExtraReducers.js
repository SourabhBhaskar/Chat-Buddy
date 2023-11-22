import { createAsyncThunk } from "@reduxjs/toolkit";


const findUrl = (urlName) => {
    switch(urlName){
        case 'Username':
            return process.env.REACT_APP_SERVER_UPDATE_USERNAME;
        case 'Mobile Number':
            return process.env.REACT_APP_SERVER_UPDATE_MOBILE_NUMBER;
        case 'Email':
            return process.env.REACT_APP_SERVER_UPDATE_EMAIL;
        case 'Password':
            return process.env.REACT_APP_SERVER_UPDATE_PASSWORD;
        case 'Status':
            return process.env.REACT_APP_SERVER_UPDATE_STATUS;
        case 'Location':
            return process.env.REACT_APP_SERVER_UPDATE_LOCATION;
        case 'Profile Picture':
            return process.env.REACT_APP_SERVER_UPDATE_PICTURE;
        default: 
            return process.env.REACT_APP_SERVER;
    }
}


// Update user on server
export const updateUser = createAsyncThunk('user/update', async (data) => {
    const { name } = data;
    const url = findUrl(name);
    const method = 'PUT';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    const options = { method, headers, body, credentials: "include"}
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    if(response.ok) return data;
    else return result;
  });
  

