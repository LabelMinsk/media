import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_remove_USER = (id) => `http://localhost:3005/users/${id}`;

const removeUser = createAsyncThunk('user/remove', async (user) => {
    const response = await axios.delete(URL_remove_USER(user.id))

    return user;
})

export {removeUser};