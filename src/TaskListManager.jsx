import  { Component } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { TaskContext } from './TaskContext'

export default class TaskListManager extends Component {
  
  static contextType = TaskContext

  constructor(props){
    super(props)
    this.state = {
        changed:false
    }
}

changeState = ()=>{
this.setState({changed:!this.state.changed})
}
  
  render() {
    
      const {taskList} = this.context
    return (
      <div id='taskListManager'>
          {
            taskList.map((item,index)=>{
              
              return <TaskList key={item.name+index} name={item.name} changeState = {this.changeState}></TaskList>
            }
              
            
            )
          }  
        <TaskForm></TaskForm>
      </div>
    )
  }
}
