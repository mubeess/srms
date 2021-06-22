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


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
}));
export default function Roles() {
  const [staff,setStaff]=useState('')
  const [staffId,setStaffId]=useState('')
  const [allStaff,setAllStaff]=useState([])
  const [role,setRole]=useState('Burser')
  const [classs,setClasss]=useState('JSS1')
  const [category,setCategory]=useState('None')
  const [subject,setSubject]=useState('Mathematics')
  useEffect(()=>{
    fetch(`https://polar-brook-59807.herokuapp.com/admin/get-all-staff`)
    .then(res=>{
      res.json()
      .then(data=>{
        console.log(data.message)
        setAllStaff(data.message)
      })
      

    })
  },[])
    const classes = useStyles();
    return (
        <StyledRole>
      <div style={{height:role=='Teacher'?'330px':'200px',transition:'0.5s'}} className='form'>
      <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>Assign Roles</Typography>
      <Divider></Divider>
    <div className='personal'>
    <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Please Select Staff</InputLabel>
        <Select
        onChange={(e)=>{
        setStaff(e.target.value)
        }}
          native
          value={staff}
          label="Please Select Staff"
          inputProps={{
            name:'staff',
            id: 'outlined-age-native-simple',
          }}
        >
           <option value='None'>None</option>
          {
            allStaff.length>=1&&(
              allStaff.map((dat,ind)=>(
                <option key={ind} value={dat.username}>{dat.username}</option>
              ))
            )
          }
          
         
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Role</InputLabel>
        <Select
         onChange={(e)=>{
          setRole(e.target.value)
         }}
          native
          value={role}
          label="Select Role"
          inputProps={{
            name:'role',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Bursar'>Bursar</option>
          <option value='Teacher'>Teacher</option>
        </Select>
      </FormControl>


    </div>
    <div hidden={role!=='Teacher'} style={{opacity:role=='Teacher'?'1':'0',transition:'0.2s'}} className='personal'>
    <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Class</InputLabel>
        <Select
        disabled={role!=='Teacher'}
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
          <option value='JSS1'>JSS1</option>
          <option value='JSS2'>JSS2</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Category</InputLabel>
        <Select
         disabled={role!=='Teacher'}
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
        </Select>
      </FormControl>


    </div>
    <div  hidden={role!=='Teacher'} style={{opacity:role=='Teacher'?'1':'0',transition:'0.2s'}} className='personal'>
    <FormControl style={{width:'40%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Subject</InputLabel>
        <Select
         disabled={role!=='Teacher'}
        onChange={(e)=>{
          setSubject(e.target.value)
        }}
          native
          value={subject}
          label="Select Subject"
          inputProps={{
            name:'subject',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Mathematics'>Mathematics</option>
          <option value='English'>English</option>
        </Select>
      </FormControl>

    </div>
    <div className='personal'>
    <Button onClick={()=>{
      const myObj=role!=='Teacher'?{
        role
}:{
  role,
  teach:[{class:classs,subject,category}]
}
fetch(`https://polar-brook-59807.herokuapp.com/admin/set-role/?id=${staff}`,{
  method:'PUT',
  headers:{
    "Content-Type":'application/json'
  },
  body:JSON.stringify(myObj)
}).then(res=>{
  res.json()
  .then(data=>{
    console.log(data)
  })
})
      console.log(myObj)
    }} style={{marginLeft:'70%',marginTop:'10px'}}  variant="contained" color='primary'>Add Role</Button>
    </div>
    
      </div>





    <div className='mainDetail'>
    <img src={Logo} alt='logo'></img>
    <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>Mubarak Ibrahim</Typography>
             
    <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='button' align='center' gutterBottom>NAI/001</Typography>
     <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='overline' align='center' gutterBottom>Teacher</Typography>
      <Button style={{marginLeft:'50px',backgroundColor:'#F39C77',color:'white'}} variant="contained">Deactivate</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="contained">Edit</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'red',color:'white'}} variant="contained">Drop</Button>
    </div>




   




  
        </StyledRole>
    )
}
