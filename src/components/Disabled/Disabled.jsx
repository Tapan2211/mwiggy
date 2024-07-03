import React from "react";
import styles from './Disabled.module.css';
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Redux/actions";

import AddTodo from './AddTodo';
import TodoList from "./TodoList";

function Disabled() {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar />
            <div className={styles.app}>
                <h1>Redux Counter App</h1>

                <div className={styles.counter}>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <span>Count : {count}</span>
                    <button onClick={() => dispatch(increment())}>+</button>
                </div>

                <button onClick={() => dispatch(reset())}>Reset</button>

                <hr />
                <h1>Todo App</h1>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    )
}

export default Disabled;