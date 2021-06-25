import { Divider,Typography, Input,Button,TextField} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import React,{useContext,useEffect,useState} from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit'
import gray from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import AppContext from '../../../Context/app/appContext'


const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const StyledView=styled.div`
width: 100%;
min-height: 60vh;
background-color:transparent;
margin-left:50px;

.header{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    
}
.inp{
    input{
        width: 60%;
        border-radius:0px;
        border:1px solid gray;
        height: 20px;
    }
}
table{
    border-spacing:0px;
}
table th{
    padding: 0px;
    text-align: center;
    margin: 0px;
    
}
table td{
    padding: 10px;
    text-align:center;
    margin: 30px;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
}
table tr{
    text-align:center;
    margin:0px;
}
`;

const rows = [
{id:'001',name:'Mubarak Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'002',name:'Musa Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'003',name:'Nibrass Koltal',section:'Play Class',classs:'NURSERY',statuss:'Active'},
{id:'004',name:'Mutafa dotzee',section:'Drop Out',classs:'DROP OUT',statuss:'NOT Active'}
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export default function FinalResult(props) {
  const classes = useStyles();
  const appProps=useContext(AppContext)
  const [ca1,setCa1]=useState('black')
  const [ca2,setCa2]=useState('black')
  const [ca3,setCa3]=useState('black')
  const [ca4,setCa4]=useState('black')
  const [exam,setExam]=useState('black')
  useEffect(()=>{
 console.log(props.students)
  },[])
    return (
      <StyledView>
          <Alert severity="warning">You Can't Edit These Result Aftre Final Submission!!!</Alert>
        <Button style={{margin:'30px'}} color='default' variant='contained'>Attendance Sheet</Button>
        <Button color='default' variant='contained'>Result Script</Button>
        
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
       {props.students.details.subject || 'none'} || {props.students.details.class||'none'}
      </Typography>
          <Divider></Divider>
          <TableContainer  style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell style={{width:'30%'}}  align="center">STUDENT ID</StyledTableCell>
            <StyledTableCell style={{width:'30%'}}  align="center">NAME</StyledTableCell>
            <StyledTableCell align="center">1ST CA</StyledTableCell>
            <StyledTableCell align="center">2ND CA</StyledTableCell>
            <StyledTableCell align="center">3RD CA</StyledTableCell>
            <StyledTableCell align="center">4TH CA</StyledTableCell>
            <StyledTableCell align="center">EXAMS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          props.students.students.length>=1&&(
          
            props.students.students.map((row,ind) => (
              <StyledTableRow  key={ind}>
                <StyledTableCell component="th" scope="row">
                  {ind+1}
                </StyledTableCell>
                <StyledTableCell style={{width:'20%'}} align="center">{row.username}</StyledTableCell>
                <StyledTableCell align="center">{row.firstName+" "+row.lastName}</StyledTableCell>
                <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${ca1}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          key:'ca1',
                          id:row.studentId,
                          value:parseInt(e.target.value)
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                        method:'POST',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setCa1('green')
                         console.log(data)
                        })
                       
                      })
                      }
                    }
                     name='ca1' placeholder={row.ca1}  type='text'></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                     onBlur={
                      (e)=>{
                const myObj={
                  key:'ca2',
                  id:row.studentId,
                  value:parseInt(e.target.value)

                }
                fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                method:'POST',
                headers:{
                  "Content-Type":'application/json'
                },
                body:JSON.stringify(myObj)   
              }).then(res=>{
                res.json()
                .then(data=>{
                  // appProps.setUser({})
                 console.log(data)
                })
               
              })
                      }
                    }
                    name='ca2' placeholder={row.ca2} type='text'></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                     onBlur={
                      (e)=>{
                        console.log(e.target.value)
                      }
                    }
                    name='ca3' placeholder={row.ca3} type='text'></input>
                </div>
                </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input 
                     onBlur={
                      (e)=>{
                        console.log(e.target.value)
                      }
                    }
                    name='ca4' placeholder={row.ca4} type='text'></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input 
                     onBlur={
                      (e)=>{
                        console.log(e.target.value)
                      }
                    }
                    name='exam' placeholder={row.exam} type='text'></input>
                </div>
                 </StyledTableCell>
              </StyledTableRow>
            ))


          )
          }
        </TableBody>
      </Table>
    </TableContainer>
  

      </StyledView>
    )
}
