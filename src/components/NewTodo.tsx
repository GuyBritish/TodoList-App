import React, { useRef, useContext } from "react";

import { TodoContext } from "../store/todoContext";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
	const todoCtx = useContext(TodoContext);

	const todoTextInpRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const todoText = todoTextInpRef.current!.value;

		if (todoText.trim().length === 0) {
			// throw error
			return;
		}

		todoCtx.addTodo(todoText);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text"> Todo text </label>
			<input type="text" id="text" ref={todoTextInpRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
