import React,{useState,useEffect,useContext} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function StyledTable(props) {
    const classes = useStyles();
    const [ca1,setCa1]=useState('black')
    const [ca2,setCa2]=useState('black')
    const [ca3,setCa3]=useState('black')
    const [ca4,setCa4]=useState('black')
    const [exam,setExam]=useState('black')
    const appProps=useContext(AppContext)
 


    return (
        <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {props.ind+1}
                </StyledTableCell>
              
                <StyledTableCell style={{width:'20%'}} align="center">{props.row.username}</StyledTableCell>
                <StyledTableCell align="center">{props.row.firstName+" "+props.row.lastName}</StyledTableCell>
                <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    type='number'
                    min='0'
                    max='10'
                    onChange={(e)=>{
                      const minimum=0
                      const maximum=10
                      console.log(typeof(e.target.value))
                      if (e.target.value<minimum||e.target.value==isNaN) {
                       e.target.value=minimum
                      }else if (e.target.value>maximum) {
                        e.target.value=maximum
                       
                      }
                    }}
                     disabled={JSON.parse(localStorage.getItem('user')).role.includes('Admin')?false:!JSON.parse(localStorage.getItem('user')).user.ca1Button}
                    style={{border:`2px solid ${ca1}`}}
                    onBlur={
                      (e)=>{

                         if (e.target.value='') {
                          return
                        }
                        
                       
                        const myObj={
                          key:'ca1',
                          id:props.row._id,
                          value:parseInt(e.target.value),
                          currentClass:props.row.class,
                          username:props.row.username,
                          category:props.row.category,
                          subject:props.row.subject
        
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
                          // JSON.parse(localStorage.getItem('user'))ser({})
                          setCa1('green')
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='ca1' placeholder={props.row.ca1}></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                    type='number'
                    min='0'
                    max='10'
                    onChange={(e)=>{
                      const minimum=0
                      const maximum=10
                      if (e.target.value<minimum) {
                       e.target.value=minimum
                      }else if (e.target.value>maximum) {
                        e.target.value=maximum
                        console.log(typeof(e.target.value))
                      }
                    }}
                         disabled={JSON.parse(localStorage.getItem('user')).role.includes('Admin')?false:!JSON.parse(localStorage.getItem('user')).user.ca2Button}
                        style={{border:`2px solid ${ca2}`}}
                     onBlur={
                      (e)=>{

                         if (e.target.value='') {
                          return
                        }
                const myObj={
                  key:'ca2',
                  id:props.row._id,
                  value:parseInt(e.target.value),
                  currentClass:props.row.class,
                  username:props.row.username,
                  category:props.row.category,
                  subject:props.row.subject

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
                  console.log(data)
                  // JSON.parse(localStorage.getItem('user'))ser({})
                 setCa2('green')
                })
               
              })
                      }
                    }
                    name='ca2' placeholder={props.row.ca2}></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                    type='number'
                    min='0'
                    max='10'
                    onChange={(e)=>{
                      const minimum=0
                      const maximum=10
                      if (e.target.value<minimum) {
                       e.target.value=minimum
                      }else if (e.target.value>maximum) {
                        e.target.value=maximum
                        console.log(typeof(e.target.value))
                      }
                    }}

                     disabled={JSON.parse(localStorage.getItem('user')).role.includes('Admin')?false:!JSON.parse(localStorage.getItem('user')).user.ca3Button}
                     style={{border:`2px solid ${ca3}`}}
                     onBlur={
                      (e)=>{

                         if (e.target.value='') {
                          return
                        }
                const myObj={
                  key:'ca3',
                  id:props.row._id,
                  value:parseInt(e.target.value),
                  currentClass:props.row.class,
                  username:props.row.username,
                  category:props.row.category,
                  subject:props.row.subject

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
                  // JSON.parse(localStorage.getItem('user'))ser({})
                 setCa3('green')
                })
               
              })
                      }
                    }
                    name='ca3' placeholder={props.row.ca3}></input>
                </div>
                </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input 
                    type='number'
                    min='0'
                    max='10'
                    onChange={(e)=>{
                      const minimum=0
                      const maximum=10
                      if (e.target.value<minimum) {
                       e.target.value=minimum
                      }else if (e.target.value>maximum) {
                        e.target.value=maximum
                        console.log(typeof(e.target.value))
                      }
                    }}
                      disabled={JSON.parse(localStorage.getItem('user')).role.includes('Admin')?false:!JSON.parse(localStorage.getItem('user')).user.ca4Button}
                     style={{border:`2px solid ${ca4}`}}
                     onBlur={
                      (e)=>{

                         if (e.target.value='') {
                          return
                        }
                const myObj={
                  key:'ca4',
                  id:props.row._id,
                  value:parseInt(e.target.value),
                  currentClass:props.row.class,
                  username:props.row.username,
                  category:props.row.category,
                  subject:props.row.subject

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
                  // JSON.parse(localStorage.getItem('user'))ser({})
                 setCa4('green')
                })
               
              })
                      }
                    }
                    name='ca4' placeholder={props.row.ca4}></input>
                </div>
                 </StyledTableCell>
                 <StyledTableCell align="center">
                 <div className='inp'>
                    <input
                     type='number'
                     min='0'
                     max='60'
                     onChange={(e)=>{
                       const minimum=0
                       const maximum=60
                       if (e.target.value<minimum) {
                        e.target.value=minimum
                       }else if (e.target.value>maximum) {
                         e.target.value=maximum
                         console.log(typeof(e.target.value))
                       }
                     }}
                      disabled={JSON.parse(localStorage.getItem('user')).role.includes('Admin')?false:!JSON.parse(localStorage.getItem('user')).user.examButton} 
                      style={{border:`2px solid ${exam}`}}
                      onBlur={
                       (e)=>{

                         if (e.target.value='') {
                          return
                        }
                 const myObj={
                   key:'exam',
                   id:props.row._id,
                   value:parseInt(e.target.value),
                   currentClass:props.row.class,
                   username:props.row.username,
                   category:props.row.category,
                   subject:props.row.subject
 
                 }
                 console.log(myObj)
                 fetch('https://polar-brook-59807.herokuapp.com/teacher/insert-one-result',{
                 method:'POST',
                 headers:{
                   "Content-Type":'application/json'
                 },
                 body:JSON.stringify(myObj)   
               }).then(res=>{
                 res.json()
                 .then(data=>{
                   // JSON.parse(localStorage.getItem('user'))ser({})
                  setExam('green')
                 })
                
               })
                       }
                     }
                    name='exam' placeholder={props.row.exam}></input>
                </div>
                 </StyledTableCell>
              </StyledTableRow>
    )
}
