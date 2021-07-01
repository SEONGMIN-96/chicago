import { CenterFocusStrong } from '@material-ui/icons'
import { userLogin } from 'api'
import React, { useState } from 'react'
import './MemberRegister.css'


const MemberRetrieve = () => {
  
  const [loginInfo, setloginInfo] = useState({
    name: '',
    password: '',
  })

  const {name, password} = loginInfo

  const handleSubmit = e => {
    e.preventDefault()
    let handleErrors = response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

    alert(`전송 클릭: ${JSON.stringify({...loginInfo})}`)
        userLogin({...loginInfo})
        .then(res => {
            alert(`로그인 완료 : ${res.data.result}`)
        })
        .catch(err => {
            alert(`로그인 실패 : ${err} `)
        })
  }

  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setloginInfo({
        ...loginInfo,
        [name]: value
    })
  }

  return (<>
  <div>
  <h2>Login Form</h2>
  <form action="/action_page.php" onSubmit={handleSubmit} method="post">
    <div className="imgcontainer">
      <img src="https://www.w3schools.com/howto/img_avatar2.png" style={{width: "500px"}} alt="Avatar" className="avatar"/>
    </div>

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter name" onChange={handleChange} name="name" value={name}/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" value={password}/>
          
      <button className='signupbtn' type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
    </div>

    <div className="container" style={{backgroundColor: "#f1f1f1"}}>
      <button type="button" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
  </div>
   
    </>)
}

export default MemberRetrieve