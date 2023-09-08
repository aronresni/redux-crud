import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'


//este es mi estado completo que tiene a las tareas (en este caso)
//el estado inicial esta en taskSlice.js
export const store = configureStore({
    reducer: {

        tasks: tasksReducer
    },
})