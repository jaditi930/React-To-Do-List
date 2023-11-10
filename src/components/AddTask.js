import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTasks({tasks,setTasks}){
    const [desc,setdesc]=useState();
    return (
        <>
        <div class="flex items-center justify-center p-5">
    <div class="flex">
      <input type="text" class="min-w-[460px] bg-gray-100 pl-2 text-base font-semibold outline-0" placeholder="" id=""
      value={desc}
      onChange={
        (e)=>setdesc(e.target.value)
        }
      />
      <input type="button" value="Add task" class="min-w-[60px] bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
      onClick={(e)=>{
        e.preventDefault();
        setdesc("")
        const newtask={
          id:uuidv4(),
          desc:desc
        }
        let localst=JSON.stringify([...tasks,newtask])
        localStorage.setItem("tasks",localst)
        setTasks([...tasks,newtask]);
        console.log(newtask)
      }}/>
    </div>
  </div>
        </>
    )
}