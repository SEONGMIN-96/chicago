import React from 'react'
import { TodoInput, Todolist } from '../components/index'
import { Provider } from 'react-redux'
import { store } from ''

const Schedule = () => {
    return (<>
    <Provider store={store}>
        <TodoInput/>    
        <Todolist/>
    </Provider>
    </>)
}

export default Schedule