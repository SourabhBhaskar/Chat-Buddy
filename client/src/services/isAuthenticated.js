import { useHomeSetup } from "../services/homeSetup";
import useSubmitForm from "./submitForms";


export function useCheckAuthentication() {
  const homeSetup = useHomeSetup();
  const submitForm = useSubmitForm('IS_AUTHENTICATED', true, {});

  const isAuthenticated = async() => {
    const response = await submitForm();
    const status = response && response.status;

    if (status) {
      const result = await response.json();
      const { message, data } = result;

      if(status === 200) 
        homeSetup(data);
      else
        console.log(message)
    }
  };

  return { isAuthenticated };
}