import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { _setProfile } from "../context/Profile";


export function useHomeSetup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homeSetup = (data) => {

    // Set my profile
    dispatch(_setProfile(data));

    // Go to home
    navigate("/home");
  };

  return homeSetup;
}