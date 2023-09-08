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
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4'>
                <h1>Tasks App</h1>
                <p>Cantidad de tareas: {tasks.length}</p>
                <Link to="/createtask"><button className='btn rounded-md bg-violet-500'>Agregar una task</button></Link>
            </header>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

                {tasks.map(task => (
                    <div key={task.id} className="rounded-md border">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <div className='flex gap-3 justify-center'>

                            <button onClick={() => handleDelete(task.id)} className="btn rounded bg-red-300">Delete</button>
                            <Link to={`/edit-task/${task.id}`}>
                                <button className="btn rounded bg-violet-500">Edit Task</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TasksList