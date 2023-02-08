import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../models/IPost'
import { IComment } from '../models/IComment'

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ['Post', 'Comments'],
    endpoints: (build) => ({
        getAllPosts: build.query<IPost[], string>({
            query: () => ({
                url: '/articles'
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation({
            query: (post) => ({
                url: '/articles',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        getPost: build.query<IPost, string>({
            query: (id) => ({
                url: `/articles/${id}`
            })
        }),
        getComments: build.query<IComment[], string>({
            query: (id) => ({
                url: `/comments?article=${id}`
            }),
            providesTags: result => ['Comments']
        }),
        createComment: build.mutation({
            query:(comment) => ({
                url:'/comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comments']
        })
    })
})