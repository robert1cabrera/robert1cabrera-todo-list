import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function ContextProvider(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("in the context useEffect");
        fetchTodos();
    }, []);
    
     

    const addTodos = async () => {
        const yourTodos = [];
        const response = await fetch('https://1e2f-147-70-17-49.ngrok-free.app/todos/user/Robert1cabrera', {
            method: 'post',
            body: JSON.stringify({ todos: yourTodos }),
            headers: { "content-Type": "application/json" }
        }).then((res) => res.json())

        const newTodos = response.todos;

    }

    const fetchTodos = async () => {

        const response = await fetch("https://1e2f-147-70-17-49.ngrok-free.app/todos/user/Robert1cabrera").then((res) => res.json());

        const { todos = [] } = response;

        setTodos(todos);
    }

    return (
        <Context.Provider value={{ todos, setTodos }}>
            {props.children}
        </Context.Provider>
    )
}