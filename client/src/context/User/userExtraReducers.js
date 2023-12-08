import { createAsyncThunk } from "@reduxjs/toolkit";
import { formSubmitter } from "../../utils/formSubmitter.util";


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
    const { name, value } = data;

    // Form Submission
    const options = {
        url: findUrl(name),
        method: "PUT",
        credential: true,
    }

    console.log(value)
    if(name === 'Profile Picture'){
        options['file'] = { name: 'picture', value };
    }else{
        options['data'] = { name, value };
        options['headers'] = { "Content-Type": "application/json" };
    }

    const { result, error } = await formSubmitter({ ...options });
    
    if (!error) {
        const { data, message, error } = result;
        if (!error) {
            console.log(message)
            return data;
        } else {
            console.log("Server Error:", error);
            alert(error)
        }
    } else {
        console.log("Client Error:", error);
        alert(`Unable to update ${name}`);
    }
  });
  

