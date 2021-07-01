import React,{useState} from 'react'
import './BoardDetail.css'
import { Button } from '@material-ui/core';
import { articlePost } from 'api';
import { useHistory } from 'react-router';


const BoardDetail = () => {
    const history = useHistory(

    )
 
    const [articleInfo, setArticleInfo] = useState({
        title: '',
        content: '',
    })

    const {title, content} = articleInfo

    const handleSubmit = e => {
        e.preventDefault()
        let handleErrors = response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
    
        alert(`전송 클릭: ${JSON.stringify({...articleInfo})}`)
        articlePost({...articleInfo})
        .then(res => {
            alert(`포스트 완료 : ${res.data.result}`)
        })
        .catch(err => {
            alert(`포스트 전송 실패 : ${err} `)
        })
    }

    const handleClick = e => {
        e.preventDefault()
        alert('취소 클릭')
    }

    const handleChange = e => {
        const { name, value } = e.target
        setArticleInfo({
            ...articleInfo,
            [name]: value
        })
    }
    
    return (<>
    <div className="Signup">
    <form onSubmit={handleSubmit} method="get" style={{border:"1px solid #ccc"}}>
      <div className="container">
        <h1>게시글 쓰기</h1>
        <p>Please fill in this form to write.</p>
        <hr/>

        <label for="title"><b>title</b></label>
        <input type="text" placeholder="title" onChange={handleChange}   name="title" value={title}/>

        <label for="content"><b>content</b></label>
        <input type="text" placeholder="content" onChange={handleChange}  name="content" value={content}/>

        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

        <div class="clearfix">
          <button type="submit" className="signupbtn">Sign Up</button>
          <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
          
        </div>
      </div>
  </form>
</div>
</>)
}

export default BoardDetail