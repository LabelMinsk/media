import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slice/usersSlice";

export const store = configureStore({
    reducer:{
        users: usersReducer,
    }
})

//routing for export from this for better communicate
export * from './thunks/fetchUsers';
export * from './thunks/addUser';