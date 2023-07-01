import React, { useState } from "react";




const Home = () => {
	const [userInput, setUserInput] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="wrapper">
			<h1>Todos</h1>
			<div className="todo-body">
				<ul className="todo-list">
					{/* <div className="todo-list"> */}
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
							{/* </span> */}
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
							{/* </span> */}
						</li>

					))}
					{/* </div> */}
				</ul>
			</div>
			<div>{todos.length} items left</div>


		</div>
	);
};

export default Home;
