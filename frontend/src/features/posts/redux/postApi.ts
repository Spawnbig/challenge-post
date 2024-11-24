import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"
import type { Post } from "../interfaces/post"
import { toast } from "react-toastify"

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Post"],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => "/post",
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          toast("Error al obtener los posts", { type: "error" })
        }
      },
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
        try {
          const { data } = await queryFulfilled
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, draft => {
              draft?.push(data)
            }),
          )
          toast("Post creado correctamente", { type: "success" })
        } catch (error) {
          toast("Error al crear el post", { type: "error" })
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
        try {
          await queryFulfilled
          dispatch(
            postApi.util.updateQueryData("getPosts", undefined, draft => {
              return draft?.filter((post: Post) => post.id !== id)
            }),
          )
          toast("Post eliminado correctamente", { type: "success" })
        } catch (error) {
          toast("Error al eliminar el post", { type: "error" })
        }
      },
    }),
  }),
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } =
  postApi
