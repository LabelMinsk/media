import {createAsyncThunk,nanoid} from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker'

const URL_ADD_USER = 'http://localhost:3005/users';

export const addUser = createAsyncThunk('users/add',async ()=>{
    const response = await axios.post(URL_ADD_USER,{
        id: nanoid(),
        name: faker.name.fullName()
    })

    return response.data;
})