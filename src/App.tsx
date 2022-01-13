import React, { useState } from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import Todo from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prev) => {
			return prev.concat(newTodo);
		});
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prev) => {
			return prev.filter((todo) => {
				return todo.id !== id;
			});
		});
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} onRemove={removeTodoHandler} />
		</div>
	);
}

export default App;
