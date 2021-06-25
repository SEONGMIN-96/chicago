import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { Home, User, Article, Stock } from './templates'
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
      <Provider store = {createStore(rootReducer)}>
        
        <Nav/>
        <Route exact path='/' component={ Home } />
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/article' component={ Article }/>
        <Route exact path='/user' component={ User }/>
        <Route exact path='/stock' component={ Stock }/>
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/userlist' component={ UserList } />
        <Route exact path='/userdetail' component={ UserDetail } />
        <Route exact path='/useredit' component={ UserEdit } />
      </Provider>
    </Router>
  </div>)
}

export default App