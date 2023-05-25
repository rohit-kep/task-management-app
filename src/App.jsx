import TaskListForm from './TaskListForm'
import TaskListManager from './TaskListManager'
import './styles/App.css'
import { TaskProvider } from './TaskContext'
import ExcelExportButton from './ExcelExportButton'
function App() {


  return (
    <div id='app'>
      <TaskProvider>
      <TaskListManager></TaskListManager>
      <TaskListForm></TaskListForm>
      <ExcelExportButton></ExcelExportButton>
      </TaskProvider>
  
    </div>
  )
}

export default App
