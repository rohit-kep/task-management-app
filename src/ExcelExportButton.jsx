import React, { Component } from 'react';
import { TaskContext } from './TaskContext';

class ExcelExportButton extends Component {
    static contextType = TaskContext
    
    handleClick = ()=>{
       const {tasks,taskList} = this.context
       console.log(tasks,taskList)
    }

    render() {
        return (
           <button onClick={this.handleClick}>Export As Excel</button>
        );
    }
}

export default ExcelExportButton;
