import defaultPic from '../assets/profile.jpg';


export async function loadPicture(link, setPicture) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const blob = await response.blob()
            return URL.createObjectURL(blob);
        }
    } catch (error) {
        console.error('Error fetching picture:', error);
        return defaultPic;
    }
}
