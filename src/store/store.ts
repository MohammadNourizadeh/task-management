import { configureStore } from "@reduxjs/toolkit";
import tasksInfoReducer from "./slices/tasksInfo/tasksInfo";
import userInfoReducer from "./slices/userInfo/userInfo";

export const store = configureStore({
  reducer: {
    tasksInfo: tasksInfoReducer,
    userInfo: userInfoReducer,
  },
});
