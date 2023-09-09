import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2"
const TaskForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const [task, setTask] = useState({
        id: "",
        title: "",
        description: "",
    });
    const hanldeSubmit = (e) => {
        e.preventDefault();
        if (task.title.trim() === '' || task.description.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El tittle o la description no puede estar vacio',
            })
            return;
        }
        if (params.id) {
            dispatch(editTask({ ...task, id: params.id }));
        } else {
            dispatch(
                addTask({
                    ...task,
                    id: uuid(),
                })
            );
        }

        navigate("/");
    };

    //USAMOS EL USE PARAMS PARA SABER SI HAY UN ID, ESTO SIGNIFICARIA QUE ESTAMOS EDITANDO LA TAREA, YA QUE USAMOS EL MISMO COMPONENTE PERO DISTINTO PATH
    useEffect(() => {
        if (params.id) {
            setTask(tasks.find((task) => task.id === params.id));
        }
    }, [params, tasks]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <form onSubmit={hanldeSubmit}>
            <div>
                <div>
                    <input className="rounded-xl backdrop-blur-sm bg-white/10 p-2 border border-violet-500 "
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </div>
                <div className='m-3'>

                    <textarea className=' rounded-xl backdrop-blur-sm bg-white/10 p-5 border border-violet-500'
                        name="description"
                        placeholder="Description"
                        value={task.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type='submit' className='btn rounded bg-violet-500 p-2 px-8'>Save</button>
            </div>
        </form>
    )
}

export default TaskForm
