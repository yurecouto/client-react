import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import themeReducer from "./slices/theme.slice";
// import profileReducer from "./slices/profileSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    // profile: profileReducer,
  }
});
