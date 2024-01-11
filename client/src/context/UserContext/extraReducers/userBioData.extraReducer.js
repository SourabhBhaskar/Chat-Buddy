import { createAsyncThunk } from "@reduxjs/toolkit";


// Thunk
export const setUserBioDataThunk = createAsyncThunk(
  "user/update/bioData",
  async ({ name, value, url }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify({ name, value }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


// Pending
const userBioDataPendingReducer = (state, action) => {
  console.log("Pending.......");
};


// Rejected
const userBioDataRejectedReducer = (state, action) => {
  console.log("Rejected :", action.error.message);
};


// Fullfilled
const userBioDataFullfilledReducer = (state, action) => {
  const { name, value } = action.payload;
  const updatedState = {
    ...state,
    [name.toLowerCase().replace(/ /g, '_')]: value
  }
  console.log("Fullfilled");
  return updatedState;
};


// Builder
export const userBioDataBuilder = (builder) => {
  builder
    .addCase(setUserBioDataThunk.pending, userBioDataPendingReducer)
    .addCase(setUserBioDataThunk.rejected, userBioDataRejectedReducer)
    .addCase(setUserBioDataThunk.fulfilled, userBioDataFullfilledReducer);
};
