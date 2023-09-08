import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux"
import TasksList from './components/TasksList'
import TaskForm from './components/TaskForm'



function App() {
  //useSelector tiene acceso a todo el estado de la aplicacion,
  //entonces traemos el state entramos a las tareas
  //es como llamar el estado en blanco ya que el initial state es []
  useSelector(state => state.tasks)

  return (
    <div>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/createtask" element={<TaskForm />} />
      </Routes>
    </div>

  )
}

export default App
