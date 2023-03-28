import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (userId) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: userId
                        },
                        method:'GET'
                    }
                }
            })

        }
    }
})

export const {useFetchAlbumsQuery} = albumsApi;
export {albumsApi};