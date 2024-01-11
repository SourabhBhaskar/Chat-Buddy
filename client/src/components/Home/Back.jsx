import React from "react";
import { useDispatch } from "react-redux";
import { setChatRoom } from "../../context/GlobalContext/global.slice";
import IconButton from "./IconButton";
import { icons } from "../../utils/icons.util";


function Back() {
  const dispatch = useDispatch();
  return (
    <IconButton
      icon={icons.back}
      onClick={() => dispatch(setChatRoom(false))}
    />
  );
}


export default Back;
