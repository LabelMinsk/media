import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {faker} from "@faker-js/faker";

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
                query: (userId) => {
                    return{
                        url:'/albums',
                        method:'POST',
                        body:{
                            userId: userId,
                            title: faker.commerce.productName()
                        }
                    }

                }
            }),
            fetchAlbums: builder.query({
                query: (userId) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: userId
                        },
                        method: 'GET'
                    }
                }
            }),

        }
    }
})

export const {useFetchAlbumsQuery, useAddAlbumMutation} = albumsApi;
export {albumsApi};