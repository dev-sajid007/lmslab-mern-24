import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "./authSlice";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const BASE_URL = `${BACKEND_URL}/api/v1/user`;


export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        credentials:'include'
    }),
    endpoints:(builder) => ({
        registerUser : builder.mutation({
            query:(inputData) => ({
                url:"/register",
                method:"POST",
                body:inputData
            })
        }),
        loginUser : builder.mutation({
            query:(inputData) => ({
                url:"/login",
                method:"POST",
                body:inputData
            }),
            async onQueryStarted(_,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({user:result.data.user}));

                } catch (error) {
                    console.log(error);
                }
            }
        }),
        loadUser:builder.query({
            query:() => ({
                url:"/profile",
                method:"GET"
            })
        })
    })

});

export const {useRegisterUserMutation,useLoginUserMutation,useLoadUserQuery} = authApi;

