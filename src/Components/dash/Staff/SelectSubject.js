import { Divider,Typography, Input,Button,TextField} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import React,{useState,useEffect,useContext} from 'react'
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
import AppContext from '../../../Context/app/appContext'
import { withRouter } from 'react-router-dom';




const StyledResult=styled.div`
   background:transparent;
        width:75%;
        height:95%;
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 20%;

`;


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
function SelectSubject(props) {
  const [subjects,setSubjects]=useState([])
  const classes = useStyles();
  const appProps=useContext(AppContext)

  useEffect(()=>{
   
    fetch(`https://polar-brook-59807.herokuapp.com/teacher/teacher-subjects/?id=60d611651cf936001540a2a0`)
    .then(res=>{
      res.json()
      .then(data=>{
      console.log(data)
      setSubjects(data.subjects)
      console.log(appProps)
      // appProps.setStudentsResults()
      })
      

    })

  },[])


    return (
    <StyledResult>
      <StyledView>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
       Select Subject and Class
      </Typography>
          <Divider></Divider>
          <div className='header'>
          
<TextField
        color='#FFC305'
        style={{marginLeft:'auto',width:'40%',marginRight:'10px',marginTop:'5px'}}
        id="input-with-icon-adornment"
        type='search'
        label="Search By Id or Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
      />
          </div>
          <TableContainer style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell align="right">SUBJECT</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">CLASS</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          subjects.length>=1&&(
            subjects.map((row,ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {ind+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.subject[ind]}</StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right">{row.class}</StyledTableCell>
                <StyledTableCell align="right">
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>{
                      props.handleNext()
                  }}
                  className={classes.button}
                >
                 Enter Results
                </Button> */}
                {/* <Edit onClick={()=>{
                      props.handleNext()
                  }}></Edit> */}
          <IconButton style={{backgroundColor:gray[500]}} onClick={()=>{

              const myObj={
                class:row.class,
                subject:row.subject[ind],
                category:row.category.toLowerCase()
              }
              console.log(myObj)
               fetch('https://polar-brook-59807.herokuapp.com/teacher/fetch-students-result',{
                method:'POST',
                headers:{
                  "Content-Type":'application/json'
                },
                body:JSON.stringify(myObj)
              }).then(res=>{
                res.json()
                .then(data=>{
                console.log(data)
                appProps.setStudentsResults([data.students,{class:row.class,subject:row.subject[ind]}])
                props.history.push('enterresult')
                
                })
               
              })
                      // props.handleNext()
                  }} color="primary" aria-label="upload picture" component="span">
           <Edit></Edit>
          </IconButton>
                 </StyledTableCell>
              </StyledTableRow>
            ))
            
          )
         }
        </TableBody>
      </Table>
    </TableContainer>
  

      </StyledView>
      </StyledResult>
    )
}
export default  withRouter(SelectSubject)