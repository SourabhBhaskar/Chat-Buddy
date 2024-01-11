export const formSubmitter = async (value) => {
  const {
    url,
    method = "GET",
    headers = {},
    credentials = null,
    data = null,
    file = null,
    files = null,
    loaderCallback = null,
  } = value && typeof value === "object" ? value : {};

  if (loaderCallback) {
    loaderCallback(true);
  }

  const options = {
    method,
    headers,
    credentials: "include" 
  };

  try {
    if (file) {
      const formData = new FormData();
      formData.append(file.name, file.value);
      options.body = formData;
    } else if (files) {
      const formData = new FormData();
      files.forEach((file) => formData.append(file.name, file.value));
      options.body = formData;
    } else if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();
    return { response, result, error: null };
  } catch (error) {
    return {
      response: null,
      result: null,
      error: error.message || "Failed to fetch",
    };
  } finally {
    if (loaderCallback) {
      loaderCallback(false);
    }
  }
};
