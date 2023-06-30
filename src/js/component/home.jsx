import React, { useState } from "react";




const Home = () => {
const [userInput, setUserInput] = useState(""); 
const [todos, setTodos] = useState([]);
	
return (
	<div className="wrapper">
		<h1>Todos</h1>
		<ul>
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
				<li>
					{item}{" "}
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
		<div>{todos.length} tasks</div>	

			
		</div>
	);
};

export default Home;
