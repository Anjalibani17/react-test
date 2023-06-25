import React from 'react';
import TodoItem from './ToDoItem';
import { useSelector } from 'react-redux';


const TodoListView = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ol >
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ol>
	);
};

export default TodoListView;