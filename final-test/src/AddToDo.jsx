import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "./Todos/todoSlider";

const AddToDo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			setValue("")
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} >
			<h2>Todo List</h2>
			<input
				type='text'
				
				placeholder='Add a todo name here'
				value={value}
				onChange={(event) => setValue(event.target.value)}>

			</input>

			<button type='submit' >
				Add task
			</button>
		</form>
	);
};

export default AddToDo;
