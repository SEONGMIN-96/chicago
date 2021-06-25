import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from 'store'

const Todolist = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))

    return (<>
    {todos.length === 0 && (<p className='alert alert-info'>등록된 할일이 없습니다</p>)}
    {todos.length !== 0 
    && todos.map( todo => (<div key = {todo.id} className = 'row mb-1'>
        <div className = 'col-sn-2'>
            <input type="checkbox" checked={todo.complete} onChange={toggleTodo.bind(null, todo.id)} />
            {todo.complete ? <span style = {{textDecoration: "line=though"}}>{todo.name}</span>
            : <span>{todo.name}</span>
            }
            <button onClick={deleteTodo.bind(null, todo.id)}> X </button>
        </div>
    </div>)) }
    </>)
}

export default Todolist