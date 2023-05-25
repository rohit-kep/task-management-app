import  { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  //--------data to export-------------------
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
    const arr = tasks
    arr[index].listName = value
    setTasks(arr)
  }

  const deleteTask = (title)=>{
    const arr = tasks.filter(item=> item.title !== title)
    setTasks(arr)
    
  }
  const updateTask = (index,title,description)=>{
    const arr = tasks

      arr[index].title = title
      arr[index].description = description
    
  setTasks(arr)    
  }

  // Other functions to manage the state

  const contextValue = {
    taskList,
    tasks,
    addTasks,
    addTaskList,
    changeList,
    deleteTask,
    updateTask,

    // Include other functions in the context value
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
