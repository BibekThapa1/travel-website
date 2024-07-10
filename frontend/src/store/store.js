import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./placeSlice.js"

export const store = configureStore({
     reducer:{
        place:placeReducer
     }
})