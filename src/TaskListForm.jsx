import  { Component } from 'react'
import { TaskContext } from './TaskContext'
export default class TaskListForm extends Component {
  
  static contextType = TaskContext
  
  constructor(props){
    super(props)
    this.state = {
      id:'',
      name:''
    }
  }

  handleChange = (e)=>{
      if(e.target.id == 'id'){
        this.setState({id:e.target.value})
      }
      else if(e.target.id == 'name'){
        this.setState({name:e.target.value})
      }
 }  
  handleClick = ()=>{
    const {addTaskList} = this.context
    const x   = this.state.id, y  =this.state.name

    addTaskList({x,y})
    this.setState({id:'',name:''})
  }
  render() {
    
    return (
      <div>
        <label htmlFor="id">Enter Id</label>
        <input type="text" id='id' value={this.state.id} onChange={this.handleChange}/>
        <label htmlFor="name">Enter name</label>
        <input type="text" id='name' value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
