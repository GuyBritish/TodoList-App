import React, { useContext } from "react";

import { TodoContext } from "../store/todoContext";

import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
	const todoCtx = useContext(TodoContext);

	return (
		<ul className={classes.todos}>
			{todoCtx.items.map((item) => {
				return (
					<TodoItem
						key={item.id}
						text={item.text}
						onRemove={todoCtx.removeTodo.bind(null, item.id)}
					/>
				);
			})}
		</ul>
	);
};

export default Todos;
