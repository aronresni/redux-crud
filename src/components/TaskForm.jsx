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
            <div className='flex-col'>
                <div className='m-3'>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </div>
                <div className='m-3'>

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={task.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

export default TaskForm
