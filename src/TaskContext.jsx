import  { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskLists] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Function to add a new task list
  const addTaskList = (newTaskList) => {
    setTaskLists([...taskList, newTaskList]);
    console.log(taskList)
  };

  const addTasks = (newTask) =>{
        setTasks([...tasks,newTask])
        console.log(tasks)
  }
  

  // Other functions to manage the state

  const contextValue = {
    taskList,
    tasks,
    addTasks,
    addTaskList,
    // Include other functions in the context value
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
