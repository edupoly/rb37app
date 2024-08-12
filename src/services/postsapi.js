// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/posts' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `/`,
    }),
    addNewPost:builder.mutation({
      query:(newpost)=>{
        return {
          url:"/",
          method:"POST",
          body:newpost
        }
      }
    }),
    deletePost:builder.mutation({
      query:(id)=>{
        return {
          url:`/${id}`,
          method:"DELETE",
        }
      }
    }),
    updatePost:builder.mutation({
      query:(uPost)=>{
        return {
          url:`/${uPost.id}`,
          method:"PUT",
          body:uPost
        }
      }
    })
  }),
})

export const {  useGetAllPostsQuery,
                useAddNewPostMutation,
                useLazyGetAllPostsQuery,
                useDeletePostMutation,
                useUpdatePostMutation
               } = postsApi;

//