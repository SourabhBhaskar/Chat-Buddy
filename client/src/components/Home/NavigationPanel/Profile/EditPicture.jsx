// Imports
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { useSelector, useDispatch } from "react-redux";
import { base64StringToFile } from "../../../../utils/base64StringToFile.util";
import ViewPicture from "./ViewPicture";
import UploadedPictureButton from "./UploadedPictureButton";
import TakePicture from "./TakePicture";



// Edit Picture
function EditPicture({ handleSubmit }) {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const element = menuRef.current;
    if(element){
      if(isEditing)
        gsap.to(element, { top: "110%", opacity: 1, display: 'block'});
      else
        gsap.to(element, { top: "150%", opacity: 0, display: 'none'});
    }
  }, [isEditing])

  return (
    <>
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute bottom-0 translate-x-[30px] p-2 transition-all duration-300 hover:ring-2 ring-main-color rounded-full text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
        <Icon icon={ !isEditing ? icons.editPicture : icons.cancel} />
      </button>
      <ul ref={menuRef} className="w-auto h-auto hidden absolute left-1/2 z-20 -translate-x-1/2 top-[110%] p-4 rounded-md shadow-md bg-primary-light dark:bg-primary-dark">
        <li className="transition-all text-center text-primary-light hover:bg-primary-light-hover dark:text-secondary-dark dark:hover:text-primary-dark hover:dark:bg-primary-dark-hover p-2 rounded-md">View Photo</li>
        <li className="transition-all text-center text-primary-light hover:bg-primary-light-hover dark:text-secondary-dark dark:hover:text-primary-dark hover:dark:bg-primary-dark-hover p-2 rounded-md">Take Photo</li>
        <li className="transition-all text-center text-primary-light hover:bg-primary-light-hover dark:text-secondary-dark dark:hover:text-primary-dark hover:dark:bg-primary-dark-hover p-2 rounded-md">Upload Photo</li>
        <li className="transition-all text-center text-primary-light hover:bg-primary-light-hover dark:text-secondary-dark dark:hover:text-primary-dark hover:dark:bg-primary-dark-hover p-2 rounded-md">Remove Photo</li>
      </ul>
    </>
  );
}


// Export
export default EditPicture;
