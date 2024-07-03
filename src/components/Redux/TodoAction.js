import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../Services/util";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      text,
      completed: false,
    }
  });
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
  });
  
  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
  });