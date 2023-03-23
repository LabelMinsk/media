import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL_FETCH_USERS_LIST = 'http://localhost:3005/users';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    await pause(90000);//DEV ONLY!!!
    return (await axios.get(URL_FETCH_USERS_LIST)).data;
})

//DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}
//------------------


export {fetchUsers};