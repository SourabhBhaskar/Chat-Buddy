export async function uploadOnCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDNARY_PRESET);
  formData.append("public_id", "H" + Date.now());

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNARY_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Upload successful on Cloudinary:", data);
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error uploading file on Cloudinary:", error);
    return null;
  }
}
