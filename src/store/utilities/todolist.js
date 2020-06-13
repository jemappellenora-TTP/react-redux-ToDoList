// ACTION TYPES
const ADD_TODO = 'ADD_TODO';
const RESET_LIST = 'RESET_LIST';

// ACTION CREATORS 
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function removeTodo(){
    return{
        type:RESET_LIST,
    }
}

// don't need a thunk atm

const initialState = {
    todolist: [
        {
            text: 'Consider using Redux',
            completed: true,
        },
        {
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
}
// REDUCER FUNCTION

export default (state = [], action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            // Create a new copy of the state which merges your new post into the state
            // assign, second parameter would over write first if duplicated in first list
            return [
                ...state,
                {
                    text: action.text,
                    completed: action.complete
                }

            ]
        case 'RESET_LIST':
            return []
        default:
            return state;
    }
}