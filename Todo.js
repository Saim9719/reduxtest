import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos)
    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value); 
    const handleClick = () => dispatch({
        type: 'ADD_TODO',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100),
        }
    })
    const deleteHandleClick = id => dispatch({
        type: 'DELETE_TODO',
        payload: id
    })
    const handleUpdateTodo = () => dispatch({
        type: 'UPDATE_TODO',
    })

console.log(todos)
    return (
        <>
        <input value = {newTodo} onChange = {handleChange} type = "text" />
        <button onClick = {handleClick}>ADD TODO</button>
        <ul>
        {todos.map((todo, index) => 
        <li key={index}>
        <input value={todo.label} onChange = {(event) => handleUpdateTodo ({label: event.target.value}, index)}/>
        <button onClick = { () => deleteHandleClick(todo.id)}>DELETE</button>
        </li>)}
        </ul>
        </>
    )
};

function Todo() {
    return (
        <div>
        <Todos />
        </div>
    )
}

export default Todo;