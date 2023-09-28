import { createSlice } from "@reduxjs/toolkit";


const Loader = createSlice({
    name: 'Loader',
    initialState: false,
    reducers: {
        toggleLoader: (state, action) => {
            return !state;
        }
    }
})


export const { toggleLoader } = Loader.actions;
export default Loader.reducer;