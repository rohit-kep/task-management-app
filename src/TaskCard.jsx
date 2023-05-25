import  { Component } from 'react';
import { TaskContext } from './TaskContext';

class TaskCard extends Component {
    static contextType = TaskContext
    constructor(props){
        super(props)
        const { data:{title,description,listName} } = this.props
        this.state = {
            listName: listName,
            title:title,
            description:description,
            updateTitle:'',
            updateDescription:''
        }
    }
    
    handleChange = (e)=>{
        const {tasks,changeList} = this.context
        tasks.forEach((element,index )=> {
            if(element.title === this.state.title){
                changeList(index,e.target.value)
                this.props.changeState();
                return
            }
        });
        this.setState({listName:e.target.value})
    }
    handleClick = ()=>{
        const {deleteTask} = this.context
        deleteTask(this.state.title)
    }

    //updation related code
    handleInput = (e)=>{
        if(e.target.className == 'title'){
            this.setState({updateTitle:e.target.textContent})
        }
        else if(e.target.className == 'description'){
            this.setState({updateDescription:e.target.textContent})
        }
    }

    handleBlur = ()=>{
        const {tasks,updateTask} = this.context
        const data = []
        
        if(this.state.title !== this.state.updateTitle){
            data.push( this.state.updateTitle)
        }else{
            data.push(this.state.title)
        }
        if(this.state.description !== this.state.updateDescription){
            data.push(this.state.updateDescription)
        }
        
        //findin the index
        const index = tasks.findIndex(item => item.title === this.state.title)
        updateTask(index,data[0],data[1])
        
        this.setState({title:this.state.updateTitle,description:this.state.updateDescription})
    }

    render() {
            
        const {taskList} = this.context
        return (
            <div className='taskCard'>
                <h3 className='title' contentEditable='true' onInput={this.handleInput} onBlur={this.handleBlur}>{this.state.title}</h3>
                <p className='description' contentEditable='true'  onInput={this.handleInput} onBlur={this.handleBlur}>{this.state.description}</p>
                <select name="listName" id="listName" onChange={this.handleChange} value={this.state.listName}>
                    {taskList.map((item,index)=>{
                     return   <option key={item.name+index} value={item.name}>{item.name}</option>
                    })}
                </select>
                <button onClick={this.handleClick} >Delete</button>
            </div>
        );
    }
}

export default TaskCard;
