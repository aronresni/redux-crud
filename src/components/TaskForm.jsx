import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from "uuid"
const TaskForm = () => {

    const dispatch = useDispatch()

    const [task, setTask] = useState({
        id: "",
        title: "",
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
            [e.target.name]: e.target.value

        })
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Title"
                value={task.title}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
            ></textarea>
            <button type='submit'>Save</button>
        </form>
    )
}

export default TaskForm
