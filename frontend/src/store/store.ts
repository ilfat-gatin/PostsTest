import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { postApi } from '../services/PostService'
import { postsReducer } from './post.slice'

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    posts: postsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
