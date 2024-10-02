import React, { useState } from "react";
// import { MdDelete, MdEditDocument } from "react-icons/md";
import { MdEditDocument,MdDelete } from "react-icons/md";
import "./Todo.css";
function Todo() {
  const [inputValue, setInputValue] = useState("");
  var [task, setTask] = useState([]);

  var typedValued;
  function takeInput(event) {
    setInputValue(event.target.value);
  }
  function addTask(event) {
    event.preventDefault();
    if(task.includes(inputValue)){
       return(
        alert('Already Exist')
       )
    }
    if (inputValue.trim() !== "") {
      // Ensure input is not empty
      console.log(task);
      setTask([...task, inputValue]); // Add the new task to the task array
      console.log([...task, inputValue]);
      console.log(task);
      setInputValue(""); // Clear input field after adding the task
    }
  
  }
  return (
    <section className="todo-container">
      <header>
        <h2>Todo List Application</h2>
      </header>
      <section className="form">
        <form action="">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Task"
              value={inputValue}
              onChange={(e) => takeInput(e)}
            />
            <button onClick={(e) => addTask(e)}>Add Task</button>
          </div>
        </form>
        <ul>
          {task.map((t, index) => (
           <div className="div-li" key={index}>
             <li >{t}</li>
            <div className="btn">
            <button><MdDelete /></button>
            <button><MdEditDocument /></button>
            </div>
           </div>
            // Use index as key for the list items
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Todo;

// import React from "react";

// function Todo() {
//   const fruits = ["apple", "banana"];
//   console.log([...fruits, "orange"])  // Add 'orange'
// //   console.log(fruits); // ['apple', 'banana', 'orange']

//   return <div>Todo</div>;
// }

// export default Todo;
