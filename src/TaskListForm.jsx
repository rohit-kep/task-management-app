import  { Component } from 'react'
import { TaskContext } from './TaskContext'
export default class TaskListForm extends Component {
  
  static contextType = TaskContext
  
  constructor(props){
    super(props)
    this.state = {
      name:''
    }
  }

  handleChange = (e)=>{
        this.setState({name:e.target.value})
        
 }  
 handleEnter = (e)=>{
    if(e.key === 'Enter'){
      const {addTaskList} = this.context
    const data = this.state

    addTaskList(data)
    this.setState({name:''})
    }
 }
  render() {
    
    return (
      <div>
       
        
        <input type="text" id='name' value={this.state.name} placeholder='Enter list title' onChange={this.handleChange} onKeyDown={this.handleEnter}/>

      </div>
    )
  }
}
