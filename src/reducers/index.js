import counterReducer from './counter';
import todoReducer from './todoReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})

export default allReducers;