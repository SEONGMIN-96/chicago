import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { useState } from 'react';
import { memberList } from 'api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});
const usePageStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
}

const MemberList = () => {

  const [members, setMembers] = useState([])

  const classes = useStyles();
  const pageClasses = usePageStyles();

  useEffect(() => {
    memberList()
    .then(res => {
        console.log(res.data)
        setMembers(res.data)
    })
    .catch(err => {
        console.log(err.data)
    })
  }, [])

  return (<>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>회원 ID </TableCell>
            <TableCell align="right">비밀번호</TableCell>
            <TableCell align="right">회원 이름</TableCell>
            <TableCell align="right">이메일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {members.length !=0
            ? members.map((member) => (
                <TableRow key={member.username}>
                <TableCell align="right">{member.username}</TableCell>
                <TableCell align="right">{member.password}</TableCell>
                <TableCell align="right">{member.name}</TableCell>
                <TableCell align="right">{member.email}</TableCell>
                </TableRow>)
                )
            : <TableRow>
            <TableCell component="th" scope="row" colSpan='4'>
                <h1>등록된 데이터가 없습니다.</h1>  
            </TableCell>
          
        </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
    <div className={pageClasses.root}>
        <Pagination count={10} />
        
    </div>
    </>);
}

export default MemberList

/*
<TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
*/ 

/* 
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
        */