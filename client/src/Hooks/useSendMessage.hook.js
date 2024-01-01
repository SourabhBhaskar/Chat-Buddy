import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setSendMessage } from "../context/Connections/Connections.slice";
import { setMessageStatus } from "../context/Connections/Connections.slice";
import { socket } from "../socket/socket-client";
import { uploadOnCloudinary } from "../utils/cloudinary.util";

export function useSendMessage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserSlice);
  const currConnection = useSelector(
    (state) => state.ConnectionsSlice
  ).currentConnection;

  const sendMessage = useCallback(
    async (message) => {
      const messageType = () =>
        typeof message !== "string" ? message.type.split("/")[0] : "text";
      const updatedMessage = {
        id: uuidv4(),
        message:
          messageType() === "text" ? message : URL.createObjectURL(message),
        type: messageType(),
        from: user.email,
        to: currConnection.email,
        status: "sending",
        time: {
          sent: "",
          delivered: "",
          seen: "",
        },
      };
      dispatch(setSendMessage({ ...updatedMessage }));

      if (messageType() !== "text") {
        const result = await uploadOnCloudinary(message);
        if (result) {
          updatedMessage.message = result.url;
          dispatch(
            setMessageStatus({
              id: updatedMessage.id,
              to: updatedMessage.to,
              status: "error",
            })
          );
        } else {
          updatedMessage.status = "error";
          dispatch(
            setMessageStatus({
              id: updatedMessage.id,
              to: updatedMessage.to,
              status: "error",
            })
          );
          return;
        }
      }
      socket.emit("message", updatedMessage);
    },
    [currConnection]
  );

  return { sendMessage };
}
