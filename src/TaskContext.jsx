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
    const arr = tasks
    arr[index].listName = value
    setTasks(arr)
  }

  const deleteTask = (title)=>{
    const arr = tasks.filter(item=> item.title !== title)
    setTasks(arr)
    
  }
  const updateTask = (index,...data)=>{
    const arr = tasks

    data.forEach(Element =>{
      const propertyToUpdate = Object.keys(Element).pop()
      const newValue = Object.values(Element).pop()

      if(arr[index] && arr[index].hasOwnProperty(propertyToUpdate)){
        arr[index][propertyToUpdate] = newValue
      }
    })
    
    

  }
  // Other functions to manage the state

  const contextValue = {
    taskList,
    tasks,
    addTasks,
    addTaskList,
    changeList,
    deleteTask,
    updateTask
    // Include other functions in the context value
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
