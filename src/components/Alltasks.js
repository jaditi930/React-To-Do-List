export default function AllTasks({tasks,setTasks}){
    var i=0;
    function delete_task(id){
        for(i=0;i<tasks.length;i++){
            if(tasks[i].id === id)
            break;
        }

        setTasks([...tasks.slice(0, i),
        ...tasks.slice(i + 1)]);
    }

    function Task({desc,id}){
        return (
            <>
            <div style={{width:"60vw",backgroundColor:"rgb(47, 125, 199)",color:"white",padding:"10px",margin:"auto"}}>
            <span>{desc}</span>
            <button style={{float:"right"}} onClick={()=>{
                console.log(id)
                delete_task(id)
            }}>x</button>
        </div>
            </>
        )
    }

    const all_tasks=tasks.map((task)=>{
        return <Task desc={task.desc} id={task.id} key={task.id}/>

    })
    return (
        <div style={{width:"100vw"}}>
        {all_tasks}
        </div>
    )
}