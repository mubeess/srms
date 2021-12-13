import { Divider,Typography, Input,Button,TextField, Backdrop, CircularProgress} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import React,{useEffect,useState} from 'react'
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
import {EditRounded,DeleteForeverRounded,ViewArrayRounded} from '@material-ui/icons'
import gray from '@material-ui/core/colors/grey'
import Pagination from '@material-ui/lab/Pagination';
import { CSVLink } from 'react-csv'
import Fab from '@material-ui/core/Fab';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';

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


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
}
}))

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
// }
// });
export default function RegisterdSubject(){
  const classes = useStyles();
  const [allSubjects,setAllSubjects]=useState([])
  const [open, setOpen] = React.useState(false);
  const [isLoading,setIsLoading]=useState(true)
  const [allData,setAllData]=useState([])


  useEffect(()=>{
    fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-subject')
    .then(res=>{
      res.json()
      .then(data=>{
        setAllSubjects(data.message)
    
    
      })
    })
  },[])
    return (
      <StyledView>
          <div className='header'>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}} variant="contained" color="primary">
  PDF
</Button>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}}  variant="contained" color="primary">
<CSVLink data={allSubjects} filename='allsubject'>Excell</CSVLink>
</Button>
<TextField
        color='#FFC305'
        style={{marginLeft:'30px',width:'40%',marginRight:'10px',marginTop:'5px'}}
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

<Fab onClick={()=>{
  setOpen(true)
  if (allData.length==0) {
    fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-curriculum')
  .then(res=>{
    res.json()
    .then(data=>{
      setAllData(data.message)
      setIsLoading(false)
    })
  })
  }
}} style={{backgroundColor:'#1E7F95'}} aria-label="add">
        <RemoveRedEye style={{color:'white'}}></RemoveRedEye>
 </Fab>
          </div>
          <TableContainer style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          
           allSubjects.length>=1&&(
            allSubjects.map((row,ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {ind+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.subject}</StyledTableCell>
                <StyledTableCell align="right">
                 <ViewArrayRounded style={{color:'#F39C77',marginRight:'10px',cursor:'pointer'}}></ViewArrayRounded>
                 <EditRounded style={{color:'green',marginRight:'10px',cursor:'pointer'}}></EditRounded>
                 <DeleteForeverRounded onClick={()=>{
                   const isConfirmed=window.confirm('Are you sure?')
                   if(isConfirmed==true){
                     setIsLoading(true)
                    const myObj={
                      id:row._id,
                      subject:row.subject
                    }


                    fetch(`https://polar-brook-59807.herokuapp.com/admin/delete-single-subject`,{
                      method:'DELETE',
                      headers:{
                        "Content-Type":'application/json'
                      },
                      body:JSON.stringify(myObj)
                    })
                     .then(res=>{
                       setIsLoading(false)
                       res.json()
                       .then(data=>{
                         console.log(data)
                        fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-subject')
                        .then(res=>{
                          res.json()
                          .then(data=>{
                            setAllSubjects(data.message)
                            console.log(data)
                          })
                        })
                       })
                       
                 
                     })

                   }
                  
                  
                 }} style={{color:'red',marginRight:'10px',cursor:'pointer'}}></DeleteForeverRounded>
                </StyledTableCell>
              </StyledTableRow>
            ))


           )
        
          }
        </TableBody>
      </Table>
    </TableContainer>
    <Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
   
        {
          isLoading&&(
            <CircularProgress color="inherit"/>
          )
        }
        {
          !isLoading&&(
            <div style={{
              position:'absolute',
              top:0,
              left:0,
              bottom:0,
              right:0,
              backgroundColor:'rgba(255,255,255,0.5)',
              

            }}>
                 
             <div style={{
               minWidth:'70%',
               backgroundColor:'#f9f9f9',
               minHeight:'90vh',
               maxWidth:'80%',
               margin:'auto',
               marginTop:'30px',
               maxHeight:'80vh',
               overflowY:'scroll',
               borderRadius:'10px'
             }}>
        <span onClick={()=>{
          setOpen(false)
        }} style={{
                   color:'white',
                   backgroundColor:'black',
                   height:'100px',
                   width:'100px',
                   borderRadius:'50%',
                   marginLeft:'95%',
                   marginTop:'20px',
                   cursor:'pointer'
                 }}>X</span>
               {
                 allData.length>0&&(
                   allData.map((dat,ind)=>(
                    <div key={ind} style={{
                      display:'flex',
                      flexDirection:'row',
                      minWidth:'100%',
                      minHeight:'100%',
                      marginBottom:'40px'
                    }}>
             
      
      
      
      
                <div style={{
                     width:'30%',
                     backgroundColor:'transparent',
                     minHeight:'100px',
                     borderBottom:'1px solid gray',
                     borderRight:'1px solid gray',
                   

                   }}>
                     <h2 style={{textAlign:'center',marginTop:'10px'}}>{dat.name} {dat.category=='none'?null:dat.category}</h2>
                   </div>
      
                  <div style={{
                     width:'70%',
                     backgroundColor:'transparent',
                     minHeight:'100px',
                     display:'grid',
                     gridTemplateColumns:'1fr 1fr 1fr 1fr',
                     
                     
                   }}>
                    {dat.subject.map((sbj,ind)=>(
                      <h4 style={{
                        color:'white',
                        backgroundColor:'#4b5d67',
                        borderRadius:'10px',
                        margin:'20px',
                        textAlign:'center'
                      }} key={ind}>{sbj} <span onClick={()=>{
                       const isConfirmed=window.confirm('Are you sure?')
                       if(isConfirmed==true){
                        const myObj={
                          section:dat.section,
                          subject:sbj,
                          className:dat.name,
                          category:dat.category
                        }
                        setIsLoading(true)
                        fetch(`https://polar-brook-59807.herokuapp.com/admin/delete-subject`,{
                          method:'DELETE',
                          headers:{
                            "Content-Type":'application/json'
                          },
                          body:JSON.stringify(myObj)
                        })
                         .then(res=>{
                           res.json()
                            
                           .then(data=>{
                             setIsLoading(false)
                             fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-curriculum')
                             .then(res=>{
                               res.json()
                               .then(data=>{
                                 setAllData(data.message)
                                 setIsLoading(false)
                               })
                             })
                           })
                           
                     
                         })

                       }
                        
                        
                        

                      }} style={{
                        marginLeft:'20px',
                        color:'white',
                        backgroundColor:'black',
                        height:'20px',
                        width:'20px',
                        borderRadius:'50px',
                        cursor:'pointer'
                      }}>X</span></h4>

                     ))}
                   </div>
      
      
      
                      



                   <DeleteForeverRounded onClick={()=>{
                   const isConfirmed=window.confirm('Are you sure?')
                   if(isConfirmed==true){
                     setIsLoading(true)
                    const myObj={
                      name:dat.name,
                      section:dat.section,
                      category:dat.category
                    }
              

                    fetch(`https://polar-brook-59807.herokuapp.com/admin/delete-single-curriculum`,{
                      method:'DELETE',
                      headers:{
                        "Content-Type":'application/json'
                      },
                      body:JSON.stringify(myObj)
                    })
                     .then(res=>{
                       setIsLoading(false)
                       res.json()
                       .then(data=>{
                         console.log(data)
                         fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-curriculum')
                             .then(res=>{
                               res.json()
                               .then(data=>{
                                 setAllData(data.message)
                                 setIsLoading(false)
                               })
                             })
                       })
                       
                 
                     })

                   }
                  
                  
                 }} style={{color:'red',marginRight:'10px',cursor:'pointer',marginTop:'20px'}}></DeleteForeverRounded>




      
                    </div>
                   ))
                 )
               }
              




              
             </div>
            </div>
          )
        }
        
      </Backdrop>
      </StyledView>
    )
}
