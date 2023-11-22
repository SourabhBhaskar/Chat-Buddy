import { useDispatch } from "react-redux";
import { _editYourProfile } from "../../../../context/SenderProfile";


// Save or Cancel Picture
function SaveUserPicture({ oldPic, newPic, setCurrentPicture, setIsEdited }) {
    const dispatch = useDispatch();
    const handleSavePicture = (haveToSave) => {
        if (haveToSave)
            dispatch(_editYourProfile({ field: "Picture", data: newPic }));
        else setCurrentPicture(oldPic);
        setIsEdited(false);
    };
    return (
        <div className="w-[150px] flex justify-between text-sm mx-auto py-1">
            <button
                onClick={() => handleSavePicture(true)}
                className="w-[60px] px-2 py-1 mx-2 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">
                Save
            </button>
            <button
                onClick={() => handleSavePicture(false)}
                className="w-[60px] px-2 py-1 mx-2 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">
                Cancel
            </button>
        </div>
    );
}


export default SaveUserPicture;