import { configureStore } from "@reduxjs/toolkit";
import tokensReducer from "./slices/token.slice";
import userReducer from "./slices/user.slice";
import themeReducer from "./slices/theme.slice";
// import profileReducer from "./slices/profileSlice"

export default configureStore({
  reducer: {
    tokens: tokensReducer,
    user: userReducer,
    theme: themeReducer,
    // profile: profileReducer,
  }
});
