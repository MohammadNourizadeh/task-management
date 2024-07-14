import { createSlice } from "@reduxjs/toolkit";

type InitialStateAmount = {
  username: string;
};

const initialState: InitialStateAmount = {
  username: "user",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    changeUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { changeUserName } = userInfoSlice.actions;
export default userInfoSlice.reducer;
