import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from "uuid"
const TaskForm = () => {

    const dispatch = useDispatch()

    const [task, setTask] = useState({
        id: "",
        tittle: "",
        description: "",
    });
    const hanldeSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id: uuid(),
        }))
    }
    const handleChange = e => {
        setTask({
            ...task,

        })
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <input name='tittle' type="text" placeholder="tittle" onChange={handleChange} />

            <textarea name='description' placeholder='description' onChange={handleChange}></textarea>

            <button type='submit'>Save</button>
        </form>
    )
}

export default TaskForm
