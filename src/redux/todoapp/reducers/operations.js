import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX } from "../actions";

const initialState=[
    {id: 1, todo: 'Complete redux training', completed: false},
    {id: 2, todo: 'Watch bleach', completed: false},
    {id: 3, todo: 'Watch house of the dragon', completed: true},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=> todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;
        default: return state;
    }
}