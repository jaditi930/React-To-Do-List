import logo from '../logo.svg';
import '../App.css';
import AddTasks from './AddTask';
import AllTasks from './Alltasks';
import { useState } from 'react';


function App() {
  const [tasks,setTasks]=useState([]);
  return (
   <>
   <AddTasks tasks={tasks} setTasks={setTasks}/>
   <AllTasks tasks={tasks} setTasks={setTasks}/>
   </>
  );
}

export default App;
