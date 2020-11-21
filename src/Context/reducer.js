import {ADD_TASK, EDIT_TASK, DELETE_TASK} from "./action.types"

export default (state,action) => {
    switch(action.type){
        case ADD_TASK:
            console.log(state)
            return [...state, action.payload];
        case EDIT_TASK:
            return alert("Do it later");
        case DELETE_TASK:
            return alert("Do it later");
        default:
            return state;
            
    }
}