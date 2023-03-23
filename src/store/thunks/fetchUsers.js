import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const  URL_FETCH_USERS_LIST = 'http://localhost:3005/users';

const fetchUsers = createAsyncThunk('users/fetch', async ()=>{
    return (await axios.get(URL_FETCH_USERS_LIST)).data;

})

export {fetchUsers};