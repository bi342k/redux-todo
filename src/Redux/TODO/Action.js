import * as type from './ActionType';
import { v4 as uuid } from 'uuid';

export const addTodo = (todoItem)=>{
    const unique_id = uuid();
    return {
        type: type.ADD_TODO,
        payload: {
            id: unique_id,
            data: todoItem,
            status: false
        }
    }
}

export const delTodo = (id)=>{
    console.log("List ID is :" + id);
    return {
        type: type.DEL_TODO,
        payload: {
            id: id
        }
    }
}

export const removeTodo =(id)=>{
    return {
        type: type.DEL_ALL_TODO,
        payload : {
            id: id
        }
    }
}

export const editTodo =(id, data, status)=>{
    return {
        type: type.EDIT_TODO,
        payload: {
            id: id,
            data: data,
            status: status
        }
    }
}

export const updateStatus =()=>{
    return {
        type: type.UPDATE_STATUS
    }
}

export const filterStatus =()=>{
    return {
        type: type.FILTER_STATUS
    }
}

export const toggleStatus = (elements)=>{
    return {
        type: type.TOGGLE_STATUS,
        payload: elements
    }
}