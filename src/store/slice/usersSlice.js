import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        usersData:[]
    },
    reducers:{

    }
})

export const usersReducer = usersSlice.reducer;