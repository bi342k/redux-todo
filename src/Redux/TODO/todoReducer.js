// import {ADD_TODO, DEL_TODO, DEL_ALL_TODO} from './ActionType';
import * as type from './ActionType';
const initialState = {
    todoData : []
}

const todoReducer = (state=initialState, action)=>{
    switch (action.type){
        case type.ADD_TODO: 
        return {
            ...state,
            todoData: [
                ...state.todoData,
                {
                    id: action.payload.id,
                    data: action.payload.data,
                    status: action.payload.status
                }
            ]
        }
        case type.DEL_TODO: 
        return {
            ...state,
            todoData: state.todoData.filter(elm=> elm.id != action.payload.id)
        }

        case type.DEL_ALL_TODO: 
        return {
            todoData: []
        }

        case type.TOGGLE_STATUS: 
        const toggle = state.todoData.map((std)=> 
            std.id === action.payload.id 
            ? {...action.payload, status: !action.payload.status} 
            : std);
        return {
            ...state,
            todoData: toggle
            
        }

        case type.EDIT_TODO: 
        const edit = state.todoData.map((std)=> 
            std.id === action.payload.id 
            ? {...action.payload, data: action.payload.data} 
            : std);
        return {
            ...state,
            todoData: edit
            
        }
        
        default: return state;
    }
}

export default todoReducer;