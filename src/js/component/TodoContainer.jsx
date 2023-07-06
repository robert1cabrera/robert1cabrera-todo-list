import React, { useContext, useState } from "react";
import { Context } from "./context.jsx"

export default function TodoContainer() {
    const [userInput, setUserInput] = useState("");

    const { todos, setTodos, updateTodos, deleteTodos } = useContext(Context);

    return (
        <div className="todo-body">
            <ul className="todo-list">

                <li>
                    <input type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                updateTodos(todos.concat([{ label: userInput, done: false }]));
                                // setTodos(todos.concat([userInput]));
                                setUserInput("");
                            }
                        }}
                        placeholder="what do you need to do?"></input>
                </li>
                {todos.map((item, index) => (
                    <li className="todo-list-item">

                        {item.label}{" "}
                        <i
                            className="fas fa-trash-alt"
                            onClick={() => {
                                updateTodos((todos.filter((t, currentIndex) => index !== currentIndex)));
                            }}
                        ></i>
                    </li>

                ))}

            </ul>
        </div >)
}