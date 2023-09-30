import { createSlice } from "@reduxjs/toolkit";


const Loader = createSlice({
    name: 'Loader',
    initialState: false,
    reducers: {
        toggleLoader: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})


export const { toggleLoader } = Loader.actions;
export default Loader.reducer;