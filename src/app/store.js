import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
import { countriesApi } from '../services/countriesapi'
import { postsApi } from '../services/postsapi'

export const store = configureStore({
  reducer: {
    counterRed:counterReducer,
    todoRed:todoReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,postsApi.middleware),
})