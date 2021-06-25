import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (<>
    <nav style={{width: '500px', margin: '0 auto'}}>
        <ol>
            <li><Link to='/home'>HOME</Link></li>
            <li><Link to='/article'>Article</Link></li>
            <li><Link to='/stock'>Stock</Link></li>
            <li><Link to='/user'>USER</Link></li>
        </ol>
    </nav>
</>)
    
export default Nav