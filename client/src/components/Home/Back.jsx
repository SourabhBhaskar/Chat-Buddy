import React from "react";
import IconButton from "./IconButton";
import { icons } from "../../utils/icons.util";


function Back({ onClick }) {
  return (
    <IconButton
      icon={icons.back}
      onClick={onClick}
    />
  );
}


export default Back;
