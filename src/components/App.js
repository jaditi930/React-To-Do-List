import logo from '../logo.svg';
import '../App.css';
import AddTasks from './AddTask';
import AllTasks from './Alltasks';
import { useEffect, useState } from 'react';
import Header from './Header';


function App() {
  const [tasks,setTasks]=useState([]);
  useEffect(()=>{
    let old_tasks=JSON.parse(localStorage.getItem("tasks"))
    if(old_tasks != null)
    setTasks(old_tasks)
  },[])
  return (
   <>
   <Header/>
   <AddTasks tasks={tasks} setTasks={setTasks}/>
   <AllTasks tasks={tasks} setTasks={setTasks}/>
   </>
  );
}

export default App;
