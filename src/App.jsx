import TaskListForm from './TaskListForm'
import TaskListManager from './TaskListManager'
import './styles/App.css'
import { TaskProvider } from './TaskContext'
function App() {


  return (
    <div id='app'>
      <TaskProvider>
      <TaskListManager></TaskListManager>
      <TaskListForm></TaskListForm>
      </TaskProvider>
      
  
    </div>
  )
}

export default App
