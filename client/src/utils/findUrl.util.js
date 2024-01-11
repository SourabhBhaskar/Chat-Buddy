export const findUrl = (urlName) => {
    switch (urlName) {
      case "Username":
        return process.env.REACT_APP_SERVER_UPDATE_USERNAME;
      case "Mobile Number":
        return process.env.REACT_APP_SERVER_UPDATE_MOBILE_NUMBER;
      case "Email":
        return process.env.REACT_APP_SERVER_UPDATE_EMAIL;
      case "Password":
        return process.env.REACT_APP_SERVER_UPDATE_PASSWORD;
      case "Status":
        return process.env.REACT_APP_SERVER_UPDATE_STATUS;
      case "Location":
        return process.env.REACT_APP_SERVER_UPDATE_LOCATION;
      case "Profile Picture":
        return process.env.REACT_APP_SERVER_UPDATE_PICTURE;
      default:
        return process.env.REACT_APP_SERVER;
    }
  };