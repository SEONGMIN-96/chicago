import React from 'react'
import { TodosMenu as Menu } from '../common'
import './table.style.css'

const Todos = ({Children}) => (<>
    <h1>Todos</h1>
    <Menu/>
    {Children}
</>)

export default Todos