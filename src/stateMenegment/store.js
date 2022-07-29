import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import displayReducer from "./slices/displaySlice";


export const Store = configureStore({
    reducer: {
        counter : counterReducer,
        display: displayReducer
    }
})