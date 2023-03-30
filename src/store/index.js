import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {usersReducer} from "./slice/usersSlice";
import {albumsApi} from "./apis/albumsApi";

export const store = configureStore({
    reducer:{
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
    }
})


setupListeners(store.dispatch)
//routing for export from this for better communicate
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {useFetchAlbumsQuery, useAddAlbumMutation , useRemoveAlbumMutation} from './apis/albumsApi';