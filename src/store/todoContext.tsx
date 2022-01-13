import React, { useState } from "react";

import Todo from "../models/todo";

type todoContextDef = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

const TodoContext = React.createContext<todoContextDef>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
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

	const ctxValue: todoContextDef = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return <TodoContext.Provider value={ctxValue}>{props.children}</TodoContext.Provider>;
};

export { TodoContext };

export default TodoContextProvider;
