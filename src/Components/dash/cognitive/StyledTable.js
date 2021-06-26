import React,{useState,useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
    const [neatenes,setNeateness]=useState('black')
    const [puntuality,setPuntuality]=useState('black')
    const [hardWorkin,setHard]=useState('black')
    const [remarks,setRemarks]=useState('black')
    const [exam,setExam]=useState('black')



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
                    style={{border:`2px solid ${neatenes}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          cognitive:{
                           "neatenes":e.target.value,
                       
                          },
                          id:props.row._id,
                       
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/update-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setNeateness('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='neatness'  type='text'></input>
                </div>
                 </StyledTableCell>





                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${puntuality}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          cognitive:{
                         
                           "Puntuality":e.target.value,
                         
                          },
                          id:props.row._id,
                       
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/update-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setPuntuality('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='puntuality'  type='text'></input>
                </div>
                 </StyledTableCell>




                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${hardWorkin}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          cognitive:{
                           "Hard working":e.target.value
                          },
                          id:props.row._id,
                        
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/update-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setHard('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='hardwork'  type='text'></input>
                </div>
                 </StyledTableCell>





                 <StyledTableCell align="center">
                <div className='inp'>
                    <input
                    style={{border:`2px solid ${remarks}`}}
                    onBlur={
                      (e)=>{
                        const myObj={
                          id:props.row._id,
                          Remaks:`${e.target.value}`
        
                        }
                        fetch('https://polar-brook-59807.herokuapp.com/admin/update-student-cognitive',{
                        method:'PUT',
                        headers:{
                          "Content-Type":'application/json'
                        },
                        body:JSON.stringify(myObj)   
                      }).then(res=>{
                        res.json()
                        .then(data=>{
                          // appProps.setUser({})
                          setRemarks('green')
                          console.log(data)
                       
                        })
                       
                      })
                      console.log(myObj)
                      }
                      
                    }
                     name='remarks'  type='text'></input>
                </div>
                 </StyledTableCell>
                 
              </StyledTableRow>
    )
}
