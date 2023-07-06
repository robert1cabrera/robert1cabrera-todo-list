import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function ContextProvider(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("in the context useEffect");
        fetchTodosOrInitializaTodos();
    }, []);

    const API_URL = "https://assets.breatheco.de/apis/fake/todos/user/Robert1cabrera";


    const updateTodos = async (newTodos) => {

        try {

            setTodos(newTodos)
            const response = await fetch(API_URL, {
                method: 'put',
                body: JSON.stringify(newTodos),
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())
        }
        catch (e) {
            console.error(e);
        }
    }

    const fetchTodosOrInitializaTodos = async () => {
        try {

            const getResponse = await fetch(API_URL);
            console.log(`getResponse: `, getResponse);

            if (getResponse.status === 404) {

                const createResponse = await fetch(API_URL, {
                    method: 'post',
                    body: JSON.stringify([]),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => res.json());
            }
            else {
                const data = await getResponse.json();
                setTodos(data);
            }
            console.log(`create response: `, createResponse)
        }
        catch (error) {

        }
    }
    
    const deleteTodos = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                
                setTodos([]);
            } else {
                console.error('Failed to delete todos');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Context.Provider value={{ todos, setTodos, updateTodos, deleteTodos }}>
            {props.children}
        </Context.Provider>
    )
}