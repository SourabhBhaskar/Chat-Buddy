

// Form Submitter
export const formSubmitter = async (value) => {
  const { 
    url,
    method="GET", 
    data=null, 
    headers=null, 
    loaderCallback=null 
  } = (value && typeof value === "object") ? value : {};
  
  try {
    if(loaderCallback) 
      loaderCallback(true);

    const options = {
      method,
      credentials: "include",
    };

    if(data) 
      options.body = JSON.stringify(data);

    if(headers)
      options.headers = headers;

    const response = await fetch(url, options);
    const result = await response.json();

    return { response, result, error: null };
  } catch (error) {
    console.error("Error:", error);
    return { response: null, result: null, error: "An unexpected error occurred." };
  } finally {
    if (loaderCallback) {
      loaderCallback(false);
    }
  }
};


