import React from 'react'
import { Link } from 'react-router-dom'

export const MemberMenu = () => (<nav>
        <ol>
            <li><Link to='/member-delete'>delete</Link></li>
            <li><Link to='/member-detail'>detail</Link></li>
            <li><Link to='/member-list'>list</Link></li>
            <li><Link to='/member-modify'>modify</Link></li>
            <li><Link to='/member-register'>register</Link></li>
            <li><Link to='/member-retrieve'>retrieve</Link></li>
        </ol>
</nav>

)
export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to='/item-delete'>delete</Link></li>
        <li><Link to='/item-detail'>detail</Link></li>
        <li><Link to='/item-list'>list</Link></li>
        <li><Link to='/item-modify'>modify</Link></li>
        <li><Link to='/item-register'>register</Link></li>
        <li><Link to='/item-retrieve'>retrieve</Link></li>
    </ol>
</nav>

)
export const BoardMenu = () => (<nav>
    <ol>
        <li><Link to='/board-delete'>delete</Link></li>
        <li><Link to='/board-detail'>detail</Link></li>
        <li><Link to='/board-list'>list</Link></li>
        <li><Link to='/board-modify'>modify</Link></li>
        <li><Link to='/board-register'>register</Link></li>
        <li><Link to='/board-retrieve'>retrieve</Link></li>
    </ol>
</nav>

)

export const StockMenu = () => (<nav>
    <ol>
        <li><Link to='/stock-delete'>delete</Link></li>
        <li><Link to='/stock-detail'>detail</Link></li>
        <li><Link to='/stock-list'>list</Link></li>
        <li><Link to='/stock-modify'>modify</Link></li>
        <li><Link to='/stock-register'>register</Link></li>
        <li><Link to='/stock-retrieve'>retrieve</Link></li>
    </ol>
</nav>

)