import { INCREMENT, DECREMENT, RESET } from "../Services/util";

const initialState = {
    count: 0,
    todos :[]
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count > 0 ? state.count -1 : 0
            }

        case RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }

}

export default counterReducer;