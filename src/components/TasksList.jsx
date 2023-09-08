import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';
const TasksList = () => {

    const dispatch = useDispatch();


    const tasks = useSelector(state => state.tasks)
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <header>
                <h1>Tasks App</h1>
                <p>Cantidad de tareas: {tasks.length}</p>
                <Link to="/createtask"><button>Agregar una task</button></Link>
            </header>
            {tasks.map(task => (
                <div key={task.id} className="rounded border">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)} className="btn rounded bg-red-300">Delete</button>
                    <Link to={`/edit-task/${task.id}`}>
                        <button className="btn rounded bg-violet-500">Edit Task</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default TasksList