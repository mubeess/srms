import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {FormatListNumbered,ConfirmationNumber} from '@material-ui/icons'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Logo from '../Header/logo.png'
import Backdrop from '@material-ui/core/Backdrop';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import {Alert} from 'antd'

const StyledRole=styled.div`
       background:#f9f9f9;
        min-width:90%;
        min-height:95%;
        margin-top:10px;
        margin-left:auto;
        margin-right:auto;
        margin-left: 20%;
        .form{
          height:300px;
          width: 80%;
          border:none;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
          .personal{
            width: 90%;
            display: flex;
            flex-direction: row;
            margin-left: auto;
            margin-right: auto;

          }
          
        }
        
.mainDetail{
  display: flex;
  flex-direction: row;
  height: 47px;
  width: 80%;
  border:none;
  margin-left:20px;
  margin-top: 10px;
  align-items: center;
  box-shadow: 0px 0px 0.8px rgba(0,0,0,0.5);

  img{
    width: 80px;
    height: 45px;
  }
}

`;
// const useStyles = makeStyles({
//     root: {
//       width:'90%',
//       margin: 20,
//       height: 400
//     },
//     media: {
//       height: 140,
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   });


const useStyles = makeStyles((theme) => ({

  root: {
          width:'90%',
          margin: 20,
          height: 400
        },
        media: {
          height: 140,
        },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
export default function Cognitive() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [staff,setStaff]=useState('')
  const [isAdmin,setIsAdmin]=useState(true)
  const [staffId,setStaffId]=useState('')
  const [allStaff,setAllStaff]=useState([])
  const [section,setSection]=useState('None')
  const [classs,setClasss]=useState('JSS1')
  const [category,setCategory]=useState('none')
  const [subject,setSubject]=useState('Mathematics')
  const [allClass,setAllClass]=useState([])
  const [isEmpty,setIsEmpty]=useState(false)
  const [cognitiveValue,setCognitive]=useState([])
  const [allStudents,setAllStudents]=useState([])
  useEffect(()=>{


    fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-staff`)
    .then(res=>{
      res.json()
      .then(data=>{
        if (data.message.length==0) {
          setIsEmpty(true)
        }
        setAllStaff(data.message)
      })
      

    })
  },[])
    const classes = useStyles();
    return (
        <StyledRole>
    
       {
           isAdmin&&(
            <div style={{height:section=='SSS'?'330px':'200px',transition:'0.5s'}} className='form'>
            <Typography style={{
                     color:'black'
                   }} variant='button' align='left' gutterBottom>Select Class</Typography>
            <Divider></Divider>
          <div className='personal'>
      
            <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Section</InputLabel>
              <Select
               onChange={(e)=>{
                setSection(e.target.value)
               
                fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-classes/?section=${e.target.value}`)
                .then(res=>{
                  res.json()
                  .then(data=>{
                   console.log(data)
                   setAllClass(data.message)
                  
                  })
                })
                
               }}
                native
                value={section}
                label="Select Section"
                inputProps={{
                  name:'section',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value='Kindergartens'>Kindergartens</option>
                <option value='Playclass'>Playclass</option>
                <option value='Grade'>Grade</option>
                <option value='JSS'>JSS</option>
                <option value='SSS'>SSS</option>
              </Select>
            </FormControl>
      
      
            <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Class</InputLabel>
              <Select
              onChange={(e)=>{
                setClasss(e.target.value)
              }}
                native
                value={classs}
                label="Select Class"
                inputProps={{
                  name:'class',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value='None'>None</option>
                {
                    allClass.length>=1&&(
                        allClass.map((cls,ind)=>(
                          <option key={ind} value={cls.className}>{cls.className}</option>
                        ))
                    )
                }
              </Select>
            </FormControl>
      
      
          </div>
         
          <div hidden={section!=='SSS'} className='personal'>
      
            <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Category</InputLabel>
              <Select
               disabled={section!=='SSS'}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                native
                value={category}
                label="Select Category"
                inputProps={{
                  name:'category',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value='None'>None</option>
                <option value='Science'>Science</option>
                <option value='Arts'>Arts</option>
                <option value='Commercial'>Commercial</option>
              </Select>
            </FormControl>
      
      
          </div>
          
          <div className='personal'>
          <Button onClick={()=>{
            fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-student-according-to-class-category/?currentClass=${classs}&&category=${category}`)
                .then(res=>{
                  res.json()
                  .then(data=>{
                    setAllStudents(data.students)
                   console.log(data)
                   fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-cognitive-item/`)
                   .then(res=>{
                     res.json()
                     .then(data=>{
                      setCognitive(data.result)
                       
                     })
                   })
                  })
                })
     
          }} style={{marginLeft:'70%',marginTop:'10px'}}  variant="contained" color='primary'>View Students</Button>
          </div>
          
            </div>
           )
       }
   


 <Divider style={{width:'80%',marginTop:'20px',marginLeft:'20px'}}></Divider>

<Typography style={{
      color:'black',
      width: '80%'
    }} variant='h6' align='center' gutterBottom>Student's List</Typography>
<Divider style={{width:'80%',marginLeft:'20px'}}></Divider>




   


<Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
 </Backdrop>

  
        </StyledRole>
    )
}
