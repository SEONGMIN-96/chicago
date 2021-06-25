import React from 'react'
import { StockMenu as Menu } from '../common'
import './table.style.css'

const Stock = ({Children}) => (<>
    <h1>Stock</h1>
    <Menu/>
    {Children}
</>)

export default Stock