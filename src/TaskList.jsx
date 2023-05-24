import  { Component } from 'react';
import TaskCard from './TaskCard';

class TaskList extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            <TaskCard></TaskCard>         
            </div>
        );
    }
}

export default TaskList;
