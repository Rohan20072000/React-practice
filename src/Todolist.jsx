import React, { useState } from 'react'

const Todolist = () => {
 const [input,setInput]=useState("");
 const [todolist,setTodolist]= useState([]);
 const addTodoItem=()=>{

  if (input.trim() === "") return;
    const item={
id: todolist.length+1,
text: input.trim(),
completed:false,

    }
    setTodolist(prev=>[...prev,item]);

    setInput("");
 }
 const togglecompleted=(id)=>{
  setTodolist(
  todolist.map(
    t=>{
    if(t.id===id){
    return {
      ...t,
      completed:!t.completed
    }

    }else{

      return t;
    }

    }
  )

  )


 }
 const deleteTodo=(id)=>{
  setTodolist(
todolist.filter((t)=>(t.id!==id))

  )


 }

  return (
    <div>

<input type="text"
        placeholder='Enter to do'
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={()=>addTodoItem()}>Add</button>
        <ul>
       {todolist.map(t=>
        <li key={t.id}>
         <input type='checkbox' checked={t.completed} onChange={()=>togglecompleted(t.id)}/>
         <span className={t.completed ?'strikeThrough' : ""}>{t.text}</span>
         <button onClick={()=>deleteTodo(t.id)}>Delete </button>

        </li>
       )}

        </ul>

    </div>
  )
}

export default Todolist