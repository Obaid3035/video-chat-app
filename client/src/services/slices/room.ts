import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isHost: false
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        toggleIsHost: (state, { payload }) => {
            state.isHost = payload;
        }
    }
})

export const { toggleIsHost } = roomSlice.actions;

export default roomSlice.reducer;
