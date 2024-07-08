import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/index";

const reducers = combineReducers({
    auth:authSlice
})

export const store = configureStore({
    reducer:reducers


})