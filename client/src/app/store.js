import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/auth/authApi";

const store = configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});

export default store;

const initializeApp = async () => {
    await store.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();