import { authApi } from "@/features/auth/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { courseApi } from "@/features/course/courseApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  auth: authReducer,
});

export default rootReducer;
