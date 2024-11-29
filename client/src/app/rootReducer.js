import { authApi } from "@/features/auth/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";


const rootReducer = combineReducers({
    [authApi.reducerPath] : authApi.reducer,
    auth:authReducer
});

export default rootReducer;