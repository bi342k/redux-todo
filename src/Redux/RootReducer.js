import todoReducer from '../Redux/TODO/todoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;