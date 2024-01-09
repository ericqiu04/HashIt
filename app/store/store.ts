import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slice/authSlice"

export const store = configureStore( {
    reducers: {
        auth: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store