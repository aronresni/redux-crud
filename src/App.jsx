import './App.css'
import { useSelector } from "react-redux"
import TasksList from './components/TasksList'
import TaskForm from './components/TaskForm'
function App() {
  //useSelectro tiene acceso a todo el estado de la aplicacion,
  //entonces traemos el state entramos a las tareas
  //es como llamar el estado en blanco ya que el initial state es []
  useSelector(state => state.tasks)

  return (
    <>
      <TaskForm />
      <TasksList />
    </>
  )
}

export default App
