import React from 'react';
import { useSelector } from 'react-redux';
import ExpendableDiv from './ExpendableDiv';


// Personal info
function PersonalInfo({ myProfile }) {
    // const myProfile = useSelector((state) => state.MyProfileSlice);
    // const username = myProfile.username || "Unknown";
    // const number = myProfile.mobile_number || "_";
    // const email = myProfile.email || "_";
    // const password = myProfile.password || "_";
    // const location = myProfile.location || "_";
  
    return(
        <ExpendableDiv p={"Personal info"} key={'personal-info'}></ExpendableDiv>
    );
}

export default PersonalInfo;


