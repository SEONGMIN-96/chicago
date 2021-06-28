import React from 'react'
import { Route, Redirect, Link } from "react-router-dom"
import { Home, User, Todos, Stock } from './templates'
import { TodoInput, Todolist } from './todos/components'
import { Nav } from './common'
import { Login, Signup, UserDetail, UserEdit, UserList } from './User'
import { todoReducer } from './store'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
const rootReducer = combineReducers({todoReducer,})


const App = () => {
  return (<div>
    <Router>
        <Nav/>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/user' component={User}/>
        <Route exact path='/stock' component={Stock}/>
        <Route exact path='/todos' component={Todos}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/user-detail' component={UserDetail}/>
        <Route exact path='/user-edit' component={UserEdit}/>
        <Route exact path='/todolist' component={TodoInput}/>
        <Route exact path='/todoinput' component={Todolist}/>
    </Router>
  </div>)
}


export default App