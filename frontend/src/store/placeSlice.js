import { createSlice } from "@reduxjs/toolkit";
import { places } from "../data/data";

const initialState = [...places];

const placeSlice = createSlice({
    name:places,
    initialState,
    
})