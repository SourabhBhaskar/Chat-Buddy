import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { socket } from "../../socket/socket-client";
import { setSendMessage } from "../../context/ConnectionsContext/connections.slice";


export function useSendMessage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserSlice);
  const currConnectionEmail = useSelector((state) => state.ConnectionsSlice).currentConnection;

  const sendMessage = useCallback(async (message) => {
      const messageType = () =>  typeof message !== "string" ? message.type.split("/")[0] : "text";
      const updatedMessage = { 
        id: uuidv4(),
        message: messageType() === "text" ? message : URL.createObjectURL(message),
        type: messageType(),
        from: user.email,
        to: currConnectionEmail,
        status: "sending",
        time: {
          sent: "",
          delivered: "",
          seen: "",
        },
      };

      dispatch(setSendMessage(updatedMessage));
      socket.emit("message", updatedMessage);
    },
    [currConnectionEmail]
  );

  return { sendMessage };
}
