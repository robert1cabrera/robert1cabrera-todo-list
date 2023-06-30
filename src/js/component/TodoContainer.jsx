import React, { useState } from "react";
import Todo from "./Todo.jsx";

export default function TodoContainer() {

const [userInput, setUserInput] = useState(""); 
const [todolist, setTodoList] = useState([]);

const onChangeHandler = (event) => setUserInput(event.target.value);

const addTodoHandler = (event) => {
    if (event.key === 'Enter') {
        setTodoList([...todolist, userInput]);
        setUserInput("");
    }
}

return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                value={userInput}
                onChange={onChangeHandler}
                onKeyUp={addTodoHandler}

            />
        </form>

        <ul>

        {todolist.map((todo, index) => <Todo key={index} todo={todo} />)}
        </ul>
        <div>{todo.length} tasks</div>
    </div>
)}