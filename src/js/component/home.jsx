import React from "react";
import TodoContainer from "./TodoContainer.jsx";



//create your first component
const Home = () => {
	return (
		<div className="wrapper">
			
				<h1>Todos</h1>
				<TodoContainer />

			
		</div>
	);
};

export default Home;
