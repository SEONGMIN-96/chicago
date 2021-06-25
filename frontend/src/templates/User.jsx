import React from 'react'
import { UserMenu as Menu } from '../common'
import './table.style.css'

const User = ({Children}) => (<>
    <h1>User</h1>
    <Menu/>
    {Children}
</>)

export default User
