

export function base64StringToFile(base64String, fileName) {

  const base64StringInfo = base64String.split(/:|;|,/);
  const mimeType = base64StringInfo[1];
  const base64 = base64StringInfo[3];
  const updateFileName = fileName + '.' + base64StringInfo[1].split('/')[1];

  // Decode the base64 string into a binary string
  const binaryString = atob(base64);

  // Convert the binary string to a Uint8Array
  const byteArray = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    byteArray[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([byteArray], { type: mimeType });

  // Convert Blob into file
  const file = new File([blob], updateFileName, { type: mimeType });

  return file;
}


