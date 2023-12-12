// Form Submitter
export const formSubmitter = async (value) => {
  const { 
    url,
    method = "GET", 
    data = null, 
    file = null, 
    files = null, 
    headers = null, 
    loaderCallback = null 
  } = (value && typeof value === "object") ? value : {};

  if (loaderCallback){
    loaderCallback(true);
  }

  const options = {
    method,
    credentials: "include",
  };

  if(file) {
    const formData = new FormData();
    formData.append(file.name, file.value); 
    options.body = formData;
  }else if(files){

  }else if (data) {
    options.body = JSON.stringify(data);
  }

  if (headers)
    options.headers = { ...options.headers, ...headers };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return { response, result, error: null };
  } catch (error) {
    console.log("Error:", error);
    return { response: null, result: null, error: "An unexpected error occurred." };
  } finally {
    if (loaderCallback) {
      loaderCallback(false);
    }
  }
};
