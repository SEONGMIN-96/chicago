import React, {useState} from 'react'
import './SignUp.css'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
  })

  const {username, password, name, email} = userInfo

  const handleChange = e => {
    const { name, value } = e.target
    alert('키: ${name}, 밸류: ${value}')
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

    return (<>
    <div className='Signup'>
    <form action="/action_page.php" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" >Sign Up</button>
    </div>
  </div>
</form>
</div>
</>)
}

export default SignUp