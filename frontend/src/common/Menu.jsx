import React from 'react'
import { Link } from 'react-router-dom'

export const UserMenu = () => (<nav>
    <ol>
        <li><Link to='/signup'>회원가입</Link></li>
        <li><Link to='/login'>로그인</Link></li>
        <li><Link to='/userdetail'>회원정보상세</Link></li>
        <li><Link to='/useredit'>회워정보수정</Link></li>
        <li><Link to='/user-remove'>회원정보삭제</Link></li>
    </ol>
</nav>
)

export const StockMenu = () => (<nav>
    <ol>
       <li><Link to='/stock-list'>주식 목록</Link></li>
       <li><Link to='/stock-register'>주식 등록</Link></li>
       <li><Link to='/stock-detail'>주식 상세</Link></li>
       <li><Link to='/stock-remove'>주식 삭제</Link></li>
   </ol>
</nav>
)

export const ArticleMenu = () => (<nav>
    <ol>
       <li><Link to='/article-list'>게시글 목록</Link></li>
       <li><Link to='/article-write'>게시글 작성</Link></li>
       <li><Link to='/article-read'>게시글 읽기</Link></li>
       <li><Link to='/article-remove'>회원정보삭제</Link></li>
   </ol>
</nav>
)