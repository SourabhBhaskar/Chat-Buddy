import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../../Common/Theme";

function InputEditButton({ isDisabled = false, activeInputField, name }) {
  const { secondaryTxtWithHover } = useTheme();
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => setIsEditing(!isEditing);

  useEffect(() => {
    if (activeInputField !== name) 
        setIsEditing(false);
  }, [activeInputField]);

  return (
    !isDisabled && (
      <button
        onClick={handleButtonClick}
        type="submit"
        className={`absolute right-0 bottom-[6px] ${secondaryTxtWithHover}`}>
        <Icon icon={`${isEditing ? "lucide:check-square" : "uil:edit"}`} />
      </button>
    )
  );
}

export default InputEditButton;
