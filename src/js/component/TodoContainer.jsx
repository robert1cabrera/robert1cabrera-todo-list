import React, { useContext, useState } from "react";
import { Context } from "./context.jsx"

export default function TodoContainer() {
	const [userInput, setUserInput] = useState("");

    const { todos, setTodos } = useContext(Context);

    return (
        <div className="todo-body">
            <ul className="todo-list">
                {/* <div className="todo-list"> */}
                {/* <TodoContainer todoList={todos} /> */}
                <li>
                    <input type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                setTodos(todos.concat([userInput]));
                                setUserInput("");
                            }
                        }}
                        placeholder="what do you need to do?"></input>
                </li>
                {todos.map((item, index) => (
                    <li className="todo-list-item">
                        {/* <span class="todo-item-text"> */}
                        {item}{" "}

                        {/* <span className="todo-item-icon"> */}
                        <i
                            class="fas fa-trash-alt"
                            onClick={() =>
                                setTodos(
                                    todos.filter(
                                        (t, currentIndex) =>
                                            index != currentIndex
                                    )
                                )
                            }></i>

                    </li>

                ))}
                
            </ul>
        </div>)
}