import React from "react";

import TodoContextProvider from "./store/todoContext";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
	return (
		<TodoContextProvider>
			<NewTodo />
			<Todos />
		</TodoContextProvider>
	);
}

export default App;
