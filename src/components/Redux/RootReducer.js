import { combineReducers } from "redux";
import counterReducer from "./reducers";
import todoReducer from "./TodoReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    todos: todoReducer,
})

export default rootReducer;