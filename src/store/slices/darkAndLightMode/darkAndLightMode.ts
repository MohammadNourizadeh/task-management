import { createSlice } from "@reduxjs/toolkit";

type InitialStateAmount = {
  mode: string;
};

const initialState: InitialStateAmount = {
  mode: "dark",
};

const darkAndLightModeSlice = createSlice({
  name: "darkAndLightMode",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = darkAndLightModeSlice.actions;
export default darkAndLightModeSlice.reducer;
