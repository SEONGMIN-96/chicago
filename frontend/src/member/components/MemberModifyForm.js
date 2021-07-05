import React,{useEffect, useState} from 'react'
import 'member/styles/MemberDetail.css'
import { memberModify } from 'api'
const MemberModifyForm = () => {
    const [ChangedPassword, setChangedPassword] = useState('')

    const handleSubmit = e => {
      e.preventDefault()
      const member = JSON.parse(localStorage.getItem("loginedMember"))
      alert(ChangedPassword)
      member.password = ChangedPassword
      alert(JSON.stringify(member))

      memberModify({member})
      .then(res => {
        alert(`비밀번호 수정 성공 : ${res.data.result} `)
        // history.push('login')
        
      })
      .catch(err => {
        alert(`비밀정보 수정 실패 : ${err} `)
  
      })
    }

    return (<>
    <form method="post" onSubmit={handleSubmit} >
         
          <h2 style={{"text-align": "center"}}>비밀번호 수정</h2>
        <div className="container">
          <label labelFor="psw"><b>변경할 비밀번호</b></label>
          <input type="password" placeholder="Enter Password" onChange={e => {setChangedPassword(e.target.value)}} name="password" required/>
              
          <button type="submit">확 인</button>
         
        </div>

      </form>

      </>)
}

export default MemberModifyForm