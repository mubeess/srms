import React,{useEffect,useContext,useState} from 'react'
import Nav from './Header/Nav'
import styled from 'styled-components'
import Aside from './Main/Aside'
import MainApp from './Main/MainApp'
import Student from './Student/Student'
import FeesVarification from './Student/FeeVarification'
import Staff from './Staff/Staff'
import Result from './Staff/Result'
import Subject from './Subject/Index'
import AppContext from '../../Context/app/appContext'
import App from '../../App'
import Roles from './Staff/Roles'
import Classes from './Staff/Classes'
import { Drawer, Radio, Space } from 'antd';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const StyledDraw=styled.div`
display: flex;
width: 100%;
flex-direction: column;
height: 400px;
background-color:transparent;
overflow-y: scroll;

.addForm{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.mainDetail{
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 80%;
  border:none;
  margin-left:20px;
  margin-top: 10px;
  align-items: center;
  box-shadow: 0px 0px 0.8px rgba(0,0,0,0.5);
}

`;

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

const StyledMain=styled.div`
display: flex;
flex: 1;
background-color:#ffffff;
width: 100%;
min-height: 100vh;
margin-top: 69px;
flex-direction: row;

`;
 function Main() {
    return (
        <div style={{
        background:'red',
        width:'75%',
        height:'95%',
        marginTop:'10px',
        marginLeft:'auto',
        marginRight:'auto'}}>
            <h1>Main</h1>
        </div>
    )
}


function Index(props) {
    const appProps=useContext(AppContext)
    const [visible,setVisible]=useState(false)
    const [section,setSection]=useState('Playclass')
    const [category,setCategory]=useState('None')
    const [classs,setClass]=useState('')
    const classes = useStyles();

   function close() {
       setVisible(false)
   }

   function open() {
    setVisible(true)
}
 
    useEffect(() => {
        console.log(appProps)
        
    }, [])
    const Dynamic=()=>{
        switch (props.match.url) {
            case '/dash/main':
                 return <MainApp></MainApp>
           case '/dash/student':
                    return <Student></Student>
            case '/dash/fees':
                        return <FeesVarification></FeesVarification>
            case '/dash/staff':
                        return <Staff></Staff>
            case '/dash/result':
                        return <Result></Result>
            case '/dash/subject':
                            return <Subject></Subject>
            case '/dash/roles':
                            return <Roles></Roles>
        
            default:
                return <Main></Main>
                
        }
    }
      
  
  return (
    <div style={{
        position: 'relative',
        display:'flex',
        overflow:'hidden'
    }}>
       
            <>
            <Nav></Nav>
            <StyledMain>
                <Aside open={open}></Aside>
                <Dynamic></Dynamic>
                <Drawer
          title="Manage Classes"
          placement='top'
          closable={false}
          onClose={close}
          visible={visible}
          height='500px'
        >
     <StyledDraw>
         <div className='addForm'>
         <FormControl style={{width:'20%'}}  variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Section</InputLabel>
        <Select
         onChange={(e)=>{
            if (section!=='SSS') {
                setCategory('None')
            }
         setSection(e.target.value)
         }}
          native
          value={section}
          label="Select Section"
          inputProps={{
            name:'section',
            id: 'outlined-age-native-simple',
          }}
        >  
           <option value='Playclass'>Playclass</option>
           <option value='Kindergartens'>Kindergartens</option>
           <option value='Grade'>Grade</option>
          <option value='JSS'>JSS</option>
          <option value='SSS'>SSS</option>
        </Select>
      </FormControl>



      <FormControl hidden={section!=='SSS'} style={{width:'20%',opacity:section=='SSS'?'1':'0',transition:'0.4s'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CATEGORY</InputLabel>
        <Select
        disabled={section!=='SSS'}
         onChange={(e)=>{
        if (section=='SSS') {
            setCategory(e.target.value)
        }else{
            setCategory('None')
        }
          
         
         }}
          native
          value={category}
          label="SELECT CATEGORY"
          inputProps={{
            name:'category',
            id: 'outlined-age-native-simple',
          }}
        >
        <option value='none'>None</option>
          <option value='Science'> Science</option>
          <option value='Arts'>Arts</option>
          <option value='Commercial'>Commercial</option>
        </Select>
      </FormControl>

      <TextField style={{width:'20%',marginTop:'9px'}} onChange={(e)=>{
          setClass(e.target.value)
      }} name='className' id="outlined-basic" label="Class Name" variant="outlined" />

      <Button onClick={()=>{
          const myObj={
              section,
              category,
              classs
          }
          console.log(myObj)
      }} style={{width:'15%',height:'40px',marginTop:'20px',marginLeft:'20px'}} variant="contained" color='primary'>Add Class</Button>
         </div>

         <Divider style={{width:'100%'}}></Divider>

         <Typography style={{
               color:'black'
             }} variant='h6' align='center' gutterBottom>Registered Classes</Typography>
      <Divider style={{width:'100%'}}></Divider>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
<div className='mainDetail'>
    <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>1</Typography>
             
    <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='button' align='center' gutterBottom>SS3</Typography>
     <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='overline' align='center' gutterBottom>Science</Typography>
      <Button style={{marginLeft:'50px',backgroundColor:'#F39C77',color:'white'}} variant="contained">View</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="contained">Edit</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'red',color:'white'}} variant="contained">Drop</Button>
    </div>



    <div className='mainDetail'>
    <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>1</Typography>
             
    <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='button' align='center' gutterBottom>SS3</Typography>
     <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='overline' align='center' gutterBottom>Science</Typography>
      <Button style={{marginLeft:'50px',backgroundColor:'#F39C77',color:'white'}} variant="contained">View</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="contained">Edit</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'red',color:'white'}} variant="contained">Drop</Button>
    </div>




    <div className='mainDetail'>
    <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>1</Typography>
             
    <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='button' align='center' gutterBottom>SS3</Typography>
     <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='overline' align='center' gutterBottom>Science</Typography>
      <Button style={{marginLeft:'50px',backgroundColor:'#F39C77',color:'white'}} variant="contained">View</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="contained">Edit</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'red',color:'white'}} variant="contained">Drop</Button>
    </div>



    <div className='mainDetail'>
    <Typography style={{
               color:'black'
             }} variant='button' align='left' gutterBottom>1</Typography>
             
    <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='button' align='center' gutterBottom>SS3</Typography>
     <Typography style={{
               color:'black',
               marginLeft:'50px'
             }} variant='overline' align='center' gutterBottom>Science</Typography>
      <Button style={{marginLeft:'50px',backgroundColor:'#F39C77',color:'white'}} variant="contained">View</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="contained">Edit</Button>
      <Button style={{marginLeft:'30px',backgroundColor:'red',color:'white'}} variant="contained">Drop</Button>
    </div>
</div>
        
     </StyledDraw>
        </Drawer>
       
            </StyledMain>
            </>
        

    </div>
  );
}

export default Index;












// const filtered=data.filter(dat=>dat.state.toLowerCase().includes(searchVal.toLowerCase())||dat.lga.toLowerCase().includes(searchVal.toLowerCase())||dat.category.toLowerCase().includes(searchVal.toLowerCase()))