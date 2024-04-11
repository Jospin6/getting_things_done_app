import {configureStore} from '@reduxjs/toolkit'
import { todosSlice } from './todoSlice'


export const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
    }
})

export default store