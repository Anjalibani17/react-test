import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, deleteTodo } from './todoSlider';

const ToDoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };
    return (
        <li >
            <div>

                <span style={{ textDecoration: completed && 'line-through' }}>
                    {title} </span>
                <input
                    type='checkbox'

                    onClick={handleCheckboxClick}
                    checked={completed}
                ></input>{" "}
                {" "}
                <button onClick={handleDeleteClick} > -X-</button>
            </div>
        </li>
    );
};

export default ToDoItem;