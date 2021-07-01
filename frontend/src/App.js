import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import { Home, Member, Item, Stock, Board } from 'templates'
import { Nav } from 'common/index'
import { BoardDelete, BoardDetail, BoardList, BoardModify, BoardRegister, BoardRetrieve } from 'board/index'
import { MemberDelete, MemberDetail, MemberList, MemberModify, MemberRegister, MemberRetrieve } from 'member/index'
import { ItemDelete, ItemDetail, ItemList, ItemModify, ItemRegister, ItemRetrieve } from 'item/index'

const App = () => {
  return (<div>
    <Router>
        <Redirect exact from={'/'} to={'/home'}/>

        <Nav/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/board' component={Board}/>
        <Route exact path='/member' component={Member}/>
        <Route exact path='/item' component={Item}/>
        <Route exact path='/stock' component={Stock}/>

        <Route exact path='/board-delete' component={BoardDelete}/>
        <Route exact path='/board-detail' component={BoardDetail}/>
        <Route exact path='/board-list' component={BoardList}/>
        <Route exact path='/board-modify' component={BoardModify}/>
        <Route exact path='/board-register' component={BoardRegister}/>
        <Route exact path='/board-retrieve' component={BoardRetrieve}/>

        <Route exact path='/member-delete' component={MemberDelete}/>
        <Route exact path='/member-detail' component={MemberDetail}/>
        <Route exact path='/member-list' component={MemberList}/>
        <Route exact path='/member-modify' component={MemberModify}/>
        <Route exact path='/member-register' component={MemberRegister}/>
        <Route exact path='/member-retrieve' component={MemberRetrieve}/>

        <Route exact path='/itme-delete' component={ItemDelete}/>
        <Route exact path='/itme-detail' component={ItemDetail}/>
        <Route exact path='/itme-list' component={ItemList}/>
        <Route exact path='/itme-modify' component={ItemModify}/>
        <Route exact path='/itme-register' component={ItemRegister}/>
        <Route exact path='/itme-retrieve' component={ItemRetrieve}/>
    </Router>
  </div>)
}

export default App