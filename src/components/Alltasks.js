export default function AllTasks({tasks,setTasks}){
    var i=0;
    function delete_task(id){
        for(i=0;i<tasks.length;i++){
            if(tasks[i].id === id)
            break;
        }

        setTasks([...tasks.slice(0, i),
        ...tasks.slice(i + 1)]);

        let localst=JSON.parse(localStorage.getItem("tasks"))
        localst.splice(i,1)
        localStorage.setItem("tasks",JSON.stringify(localst))
    }

    function Task({desc,id}){
        return (
            <div>
            <div style={{width:"30vw",backgroundColor:"rgb(47, 125, 199)",color:"white",padding:"10px",margin:"auto",marginBottom:"20px"}}>
            <input type="checkbox" style={{float:"left",width:"40px",height:"30px"}} onClick={(e)=>{
                if(e.target.checked == true){
                    e.target.disabled=true

                }
            }}></input>
            <span >{desc}</span>
            <button style={{float:"right"}} onClick={()=>{
                console.log(id)
                delete_task(id)
            }}>x</button>
        </div>
            </div>
        )
    }

    const all_tasks=tasks.map((task)=>{
        return <Task desc={task.desc} id={task.id} key={task.id}/>

    })
    console.log(all_tasks)
    return (
        <div style={{fontSize:"1.5rem",textAlign:"center"}}>
            <div style={{padding:"20px"}}> Tasks</div>
        <div style={{fontSize:"1.3rem"}}>
         {tasks.length === 0 ? (
          <div>You have no to-dos.</div>
          ) :(
        all_tasks
          )}
        </div>
        </div>

    )
}