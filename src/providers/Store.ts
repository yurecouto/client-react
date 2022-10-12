import { configureStore } from "@reduxjs/toolkit";
import jwtReducer from "./slices/token.slice";
import userReducer from "./slices/user.slice"
// import profileReducer from "./slices/profileSlice"

export default configureStore({
  reducer: {
    jwt: jwtReducer,
    user: userReducer,
    // profile: profileReducer,
  }
});
