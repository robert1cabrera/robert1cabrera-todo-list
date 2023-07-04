import React, { useState, useContext } from "react";
import ContextProvider, { Context } from "./context.jsx";
import TodoContainer from "./TodoContainer.jsx";




const Home = () => {
	// const [userInput, setUserInput] = useState("");
	// const [todos, setTodos] = useState([]);

	const { todos, setTodos } = useContext(Context);

	return (
		<div className="wrapper">
			<h1>Todos</h1>
			<TodoContainer />
			<div>{todos.length} items left</div>


		</div>
	);
};

export default Home;
