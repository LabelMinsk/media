import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../thunks/fetchUsers";
import {addUser} from "../thunks/addUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersDataList: [], //Array of objects users
        isLoading: false, //status of loading(fetch)
        error: null, //error from fetch usersList
    },
    extraReducers(builder) {
        //FETCH users list
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.usersDataList = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //ADD USER
        builder.addCase(addUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.usersDataList.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export const usersReducer = usersSlice.reducer;