import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Contet-Type': 'application/json'}

export const userLogin = body => axios.post(`${SERVER}member/login-form`, {headers, body})
export const articlePost = body => axios.post(`${SERVER}board/post`, {headers, body})
/*Member*/
export const memberDelete = () => axios.get(`${SERVER}api/member/delete`)
export const memberDetail = () => axios.get(`${SERVER}api/member/detail`)
export const memberList = () => axios.get(`${SERVER}adm/member/list`)
export const memberModify = () => axios.get(`${SERVER}api/member/modify`)
export const memberRegister = body => axios.post(`${SERVER}api/member/register`, {headers, body})
export const memberRetrieve = () => axios.get(`${SERVER}api/member/retrieve`)