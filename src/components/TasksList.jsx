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
            <header className='fixed top-0 left-0 w-full mt-8 flex items-center justify-center'>
                <div className='flex flex-col items-center md:flex-row md:justify-evenly w-full'>
                    <h1 className='m-3 font-bold text-4xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-200 via-purple-400 to-purple-700 text-transparent bg-clip-text'>Tasks App</h1>
                    <p className='m-3 font-bold text-2xl md:text-xl lg:text-2xl'>
                        Cantidad de tareas: {tasks.length}
                    </p>
                    <Link to="/createtask">
                        <button className='mt-3 font-bold text-lg md:text-2xl lg:text-2xl p-3 btn rounded-lg bg-gradient-to-r from-purple-400 to-purple-800 '>
                            Agregar una tarea
                        </button>
                    </Link>
                </div>
            </header>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-5" >

                {tasks.map(task => (
                    <div key={task.id} className="rounded-xl backdrop-blur-sm bg-white/10 p-5 border border-violet-500">
                        <h3 className='text-xl font-bold'>{task.title}</h3>
                        <p className='text-md font-semibold p-5'>{task.description}</p>
                        <div className='flex gap-3 justify-center p-2'>

                            <button onClick={() => handleDelete(task.id)} className="btn rounded bg-red-300 p-2">Delete</button>
                            <Link to={`/edit-task/${task.id}`}>
                                <button className="btn rounded bg-violet-500 p-2">Edit Task</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TasksList