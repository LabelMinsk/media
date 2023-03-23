import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slice/usersSlice";

export const store = configureStore({
    reducer:{
        users: usersReducer,
    }
})

export * from './thunks/fetchUsers'; //routing for export from this for better communicate