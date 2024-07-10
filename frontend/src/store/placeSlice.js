import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchData:[]
};

const placeSlice = createSlice({
    name:"place",
    initialState,
    reducers:{
        addSearchList:(state,action)=>{
            state.searchData = action.payload
        }
    }
})

export const {addSearchList} = placeSlice.actions;

export default placeSlice.reducer