import React from 'react'
import { useSelector } from 'react-redux'
const TasksList = () => {
    const tasks = useSelector(state => state.tasks)

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.tittle}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TasksList