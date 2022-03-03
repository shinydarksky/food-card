import { configureStore } from "@reduxjs/toolkit";
import authReducers from './authSlice'
import LayoutReducers from './layoutSlice'
// import  '../styles/globals.scss'
const rootReducers = {
    auth:authReducers,
    layout:LayoutReducers
}

const store = configureStore({
    reducer:rootReducers
})

export default store