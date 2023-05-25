import  { Component } from 'react';
import { TaskContext } from './TaskContext';
class TaskForm extends Component {

    static contextType = TaskContext
    
    constructor(props){
        super(props)
        this.state = {
            title:'',
            description:'',
            listName:''
        }
    }
    handleChange = (e)=>{
        if(e.target.id == 'title'){
            this.setState({title:e.target.value})
        }else if(e.target.id == 'description'){
            this.setState({description:e.target.value})
        }else{
            this.setState({listName:e.target.value})
        }
    }
    handleSubmit = ()=>{
        const {addTasks} = this.context
        const data = this.state
        addTasks(data)
        this.setState({title:'',description:'',listName:''})
    }
    render() {
        return (
            <div>
                <label htmlFor="title">Enter Title</label>         
                <input type="text" id='title' value={this.state.title} onChange={this.handleChange}/>
                <label htmlFor="description">Enter description</label>
                <textarea name="description" id="description" cols="30" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
                <label htmlFor="listName">Enter the taskList</label>
                <input type="text" id='listName' value={this.state.listName} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>press</button>
            </div>
        );
    }
}

export default TaskForm;
