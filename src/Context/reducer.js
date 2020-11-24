import {ADD_TASK, DELETE_TASK, TOGGLE_SUBTASK, APPLY_FILTER,REMOVE_FILTER,UPDATE_TASK} from "./action.types"

const localTasks = JSON.parse(localStorage.getItem("tasks") || "[]")

export const initialState = localTasks;

export const TaskReducer = (state=initialState,action) => {
    const newState = [...state];
    const index = newState.findIndex(task => task.id === action.payload.id)
    switch(action.type){
        case ADD_TASK:
            return [...state,action.payload];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload)
        case UPDATE_TASK:
            newState.splice(index, 1, action.payload);
            return newState;
        case TOGGLE_SUBTASK:
            let task = newState.filter(task => task.id === action.payload.id);
            let subtask = ((task[0].subtasks).filter(s => s.subId === action.payload.subId));
            subtask.status = !subtask.status;
            task = {...task,subtask};
            newState.splice(index,1,task);
            return newState;
        default:
            return state;
            
    }
}

export const FilterReducer = (state,action) => {
    switch(action.type){
        case APPLY_FILTER:
            return action.payload;
        case REMOVE_FILTER:
            return action.payload;
        default:
            return state;
    }

}
