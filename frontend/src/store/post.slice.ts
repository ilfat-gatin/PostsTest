import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../models/IPost"

interface PostsState {
    all: IPost[]
}

const initialState: PostsState = {
    all: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setAllPosts(state, action: PayloadAction<IPost[]>) {
            if (action.payload?.length) {
                state.all = action.payload
            }
        },
        removePost(state, action: PayloadAction<string>) {
            state.all = state.all.filter(el => el.id !== action.payload)
        }
    }
})

export const postsActions = postsSlice.actions
export const postsReducer = postsSlice.reducer