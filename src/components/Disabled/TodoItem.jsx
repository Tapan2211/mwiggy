import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../Redux/TodoAction';
import styles from './Todoitems.module.css';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <div className="todo-item">
            <li>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
                <button onClick={handleRemove}>Remove</button>
            </li>
        </div >
    );

};

export default TodoItem;
