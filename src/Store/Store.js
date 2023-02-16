import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Feature/userSlice";

export const store = configureStore({
    reducer: {
       [userApi.reducerPath]:userApi.reducer
    },

    //adding moddle ware
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
devTools: true
})