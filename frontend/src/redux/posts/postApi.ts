import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"
import type { Post } from "../../interfaces/post"

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Post"],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => "/post",
    }),
    addPost: builder.mutation({
      query: ({ name, description }) => ({
        url: "/post",
        method: "POST",
        body: { name, description },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { name, description },
        { dispatch, queryFulfilled },
      ) {
        const { data, meta } = await queryFulfilled
        if (meta?.response?.ok) {
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, draft => {
              draft?.push(data)
            }),
          )
        }
      },
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { meta } = await queryFulfilled
        if (meta?.response?.ok) {
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, draft => {
              return draft?.filter((post: Post) => post.id !== id)
            }),
          )
        }
      },
    }),
  }),
})

export const { useGetPostsQuery, useAddPostMutation } = postApi
