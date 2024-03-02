import React, { useState } from 'react'

function ToDoList(props) {
    const item = props.value;
    const id = props.id;
    const [line,setline] = useState("")
    function TaskComplete() {
        // console.log(id)
        
    }
   return <li onClick={TaskComplete} >{item}</li>
}
export default ToDoList;