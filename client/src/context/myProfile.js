export let myPrivateProfile = {
    email: ''
};
export let myPublicProfile = {
    email: ''
};

export function setMyProfile(profiles){
    myPrivateProfile = profiles.private;
    myPublicProfile = profiles.public;
    console.log(myPublicProfile, myPrivateProfile);
}