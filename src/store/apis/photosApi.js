import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(build) {
        return {
            fetchPhotos: build.query({
                providesTags:(result,error,album)=>{
                  const tag = result.map(photo=>{
                      return {type:'removePhoto', id: photo.id}
                  })
                    tag.push({type:'AlbumPhoto', id: album.id});
                  return tag;
                },
                query:(album)=>{
                    return{
                        url: '/photos',
                        params:{
                            albumId: album.id,
                        },
                        method:'GET',
                    }
                }
            }),
            addPhoto: build.mutation({
                invalidatesTags:(result, error, album)=>{
                    return [{type:'AlbumPhoto', id: album.id}]
                },
                query:(album)=>{
                    return{
                        method:'POST',
                        url:'/photos',
                        body:{
                            albumId: album.id,
                            url: faker.image.abstract(150,150,true)
                        }

                    }
                }
            }),
            removePhoto: build.mutation({
                invalidatesTags:(result, error, photo)=>{
                    return [{type:'removePhoto', id: photo.id}]
                },
                query:(photo)=>{
                    return{
                        url:`/photos/${photo.id}`,
                        method:'DELETE'
                    }
                }
            }),
        }
    }
})

export const{
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photosApi;

export {photosApi};