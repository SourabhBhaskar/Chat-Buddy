import defaultPic from '../assets/profile.jpg';


export async function loadPicture(link, setPicture) {
    // try {
    //     const response = await fetch(link);
    //     if (response.ok) {
    //         const blob = await response.blob();
    //         console.log(blob)
    //         setPicture(URL.createObjectURL(blob));
    //     } else {
    //         setPicture(defaultPic);
    //     }
    // } catch (error) {
    //     console.error('Error fetching picture:', error);
    //     setPicture(defaultPic);
    // }
}
