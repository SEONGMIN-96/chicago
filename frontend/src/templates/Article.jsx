import React from 'react'
import { ArticleMenu as Menu } from '../common'
import './table.style.css'

const Article = ({Chiledren}) => (<>
    <h1>Article</h1>
    <Menu/>
    {Chiledren}
</>)

export default Article