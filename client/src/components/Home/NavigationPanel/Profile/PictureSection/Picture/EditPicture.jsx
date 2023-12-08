// Imports
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../../../../context/User/userExtraReducers";
import ViewPicture from "./ViewPicture";
import UploadedPictureButton from "./UploadedPictureButton";
import TakePicture from "./TakePicture";
import defaultPic from "../../../../../../assets/profile.jpg";
import { base64StringToFile } from "../../../../../../utils/base64StringToFile.util";


// Edit Picture
function EditPicture() {
  const dispatch = useDispatch();
  const EditOption = [
    "View photo",
    "Take photo",
    "Upload photo",
    "Remove photo",
  ];
  const { profile_picture } = useSelector((state) => state.UserSlice);
  const [pictureBase64, setPictureBase64] = useState(profile_picture);
  const [pictureFile, setPictureFile] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [take, setTake] = useState(false);

  // Handle Editing
  const handleIsEditing = (e) => {
    e.stopPropagation();
    setIsEditing(!isEditing);
  };

  // Handle Picture Change
  const handlePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setPictureBase64(base64Image);
        setPictureFile(file);
        setView2(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save base64 picture
  const handleSaveBase64Picture = (picture) => {
    const pictureFile = base64StringToFile(picture, 'profile-picture');
    dispatch(updateUser({ name: "Profile Picture", value: pictureFile }));
  }

  // Handle Editing Choice
  const handleEditedingChoice = (option) => {
    setIsEditing(false);
    switch (option) {
      case "View photo":
        setView1(true);
        break;
      case "Take photo":
        setTake(true);
        break;
      case "Upload photo":
        const imgInp = document.getElementById("imgInput");
        imgInp.click();
        break;
      case "Remove photo":
        handleSaveBase64Picture(defaultPic);
        break;
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
      <div className="absolute right-0 bottom-0 rounded-full transition-all z-20 flex justify-center items-center bg-l-primary-bg-color hover:bg-l-primary-hoverBg-color dark:bg-d-primary-bg-color dark:hover:text-l-primary-txt-color text-l-primary-txt-color dark:text-d-primary-txt-color">
        <button
          onClick={handleIsEditing}
          className="text-[15px] p-2 transition-all duration-300 rounded-full">
          <Icon icon="clarity:edit-solid" />
        </button>
        {isEditing && (
          <div className="w-auto absolute left-[-90px] top-[50px] rounded-md overflow-scroll shadow-lg border-[1px] p-4 hide-scrollbar dark:bg-d-primary-bg-color bg-l-primary-bg-color border-l-primary-border dark:border-d-primary-border ">
            {EditOption.map((value) => (
              <p
                onClick={() => handleEditedingChoice(value)}
                className="w-full h-auto truncate p-2 text-center rounded-md transition-all cursor-pointer overflow-hidden hover:bg-l-primary-hoverBg-color text-l-secondary-txt-color hover:text-l-primary-txt-color dark:hover:bg-d-primary-hoverBg-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color"
                key={value}>
                {value}
              </p>
            ))}
          </div>
        )}
      </div>

      {view1 && (
        <ViewPicture
          picture={pictureBase64 || defaultPic}
          exit={() => setView1(false)}
        />
      )}

      {view2 && (
        <ViewPicture
          picture={pictureBase64 || defaultPic}
          exit={() => setView2(false)}>
          <UploadedPictureButton
            save={() =>
              dispatch(
                updateUser({ name: "Profile Picture", value: pictureFile })
              )
            }
            exit={() => setView2(false)}
          />
        </ViewPicture>
      )}

      {take && (
        <TakePicture
          savePicture={(picture) => handleSaveBase64Picture(picture) }
          exit={() => setTake(false)}
        />
      )}
    </>
  );
}

// Export
export default EditPicture;
