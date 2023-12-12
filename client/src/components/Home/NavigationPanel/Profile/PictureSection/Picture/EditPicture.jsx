// Imports
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { base64StringToFile } from "../../../../../../utils/base64StringToFile.util";
import ViewPicture from "./ViewPicture";
import UploadedPictureButton from "./UploadedPictureButton";
import TakePicture from "./TakePicture";
import defaultPic from "../../../../../../assets/profile.jpg";
import EditOption from "./EditOption";
import { icons } from "../../../../../../utils/icons.util";


// Edit Picture
function EditPicture({ handleSubmit }) {
  const dispatch = useDispatch();
  const { profile_picture } = useSelector((state) => state.UserSlice);
  const [pictureBase64, setPictureBase64] = useState("");
  const [pictureFile, setPictureFile] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isTaking, setIsTaking] = useState(false);

  // Handle Exit
  const handleExit = () => {
    setIsViewing(false);
    setIsTaking(false);
    setIsUploading(false);
    setPictureFile("");
    setPictureBase64("");
  }

  // Handle Update Picture
  const handleUpdatePicture = ({ picture, pictureType=""}) => {
    const pictureFile = pictureType === "file" ? picture : base64StringToFile(picture, 'profile-picture');
    handleSubmit({ name: "Profile Picture", value: pictureFile });
    handleExit();
  }

  // Handle Editing Choice
  const handleEditOption = (option) => {
    setIsEditing(false);
    switch (option) {
      case "View photo":
        setIsViewing(true);
        break;
      case "Take photo":
        setIsTaking(true);
        break;
      case "Upload photo":
        setIsUploading(true);
        const imgInp = document.getElementById("imgInput");
        imgInp.click();
        break;
      case "Remove photo":
        handleUpdatePicture({ picture: defaultPic });
        break;
    }
  };

  // Handle Picture Change
  const handlePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setPictureFile(file);
        setPictureBase64(base64Image);
        setIsViewing(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        onChange={handlePictureChange}
        id="imgInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div className="absolute right-0 bottom-0 rounded-full transition-all z-20 flex justify-center items-center bg-l-primary-bg-color dark:bg-d-primary-bg-color hover:bg-opacity-80 ">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-[15px] p-2 transition-all duration-300 rounded-full text-l-primary-txt-color dark:text-d-primary-txt-color">
          <Icon icon={ !isEditing ? icons.editPicture : icons.cancel} />
        </button>
        <EditOption isEditing={isEditing} setEditOption={handleEditOption} />
      </div>

      <ViewPicture
        isViewing={isViewing}
        exit={handleExit}
        picture={pictureBase64 || profile_picture || defaultPic}
      >
        { isUploading && <UploadedPictureButton
          save={() => handleUpdatePicture({ picture: pictureFile, pictureType: "file"})}
          exit={handleExit}
        />}
      </ViewPicture>


      {isTaking && (
        <TakePicture
          savePicture={(picture) => handleUpdatePicture({ picture })}
          exit={handleExit}
        />
      )}
    </>
  );
}


// Export
export default React.memo(EditPicture);
