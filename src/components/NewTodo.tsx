import React, { useRef } from "react";

const NewTodo: React.FC = () => {
	const todoTextInpRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const todoText = todoTextInpRef.current!.value;

		if (todoText.trim().length === 0) {
			return;
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text"> Todo text </label>
			<input type="text" id="text" ref={todoTextInpRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
