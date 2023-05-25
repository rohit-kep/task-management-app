import  { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskLists] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Function to add a new task list
  const addTaskList = (newTaskList) => {
    setTaskLists([...taskList, newTaskList]);
  
  };

  const addTasks = (newTask) =>{
        setTasks([...tasks,newTask])
  
  }
  
  const changeList = (index,value)=>{
    tasks[index].listName = value
    
  }

  // Other functions to manage the state

  const contextValue = {
    taskList,
    tasks,
    addTasks,
    addTaskList,
    changeList
    // Include other functions in the context value
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
