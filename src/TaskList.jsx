import  { Component } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from './TaskContext';

class TaskList extends Component {
    static contextType = TaskContext

    constructor(props){
        super(props)
        this.state = {
            changed:false
        }
    }
    
 changeState = ()=>{
    this.setState({changed:!this.state.changed})
    this.props.changeState()
 }
 
    render() {
  
        const name = this.props.name
        const {tasks} = this.context
        
          return (
            <div className='taskList'>
                
                <h3>{name}</h3>
                {
                    tasks.map((item,index)=>{
                        if(item.listName.trim() === name.trim()){
                            
                            return <TaskCard key={item.title+index} data ={item} changeState = {this.changeState}></TaskCard>
                        }
                    })
                }
            </div>
        );
    }
}

export default TaskList;
