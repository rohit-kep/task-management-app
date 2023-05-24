import  { Component } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { TaskContext } from './TaskContext'

export default class TaskListManager extends Component {
  
  static contextType = TaskContext
  
  render() {
      const {taskList} = this.context
      
    return (
      <div id='taskListManager'>
          {
            taskList.map((element)=>{
                <TaskList key={element.id} name={element.name}></TaskList>
            })
          }  
        <TaskForm></TaskForm>
      </div>
    )
  }
}
