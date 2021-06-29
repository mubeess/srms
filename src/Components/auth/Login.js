import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import AppContext from '../../Context/app/appContext'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { notification } from 'antd';
import { makeStyles,  fade,
  ThemeProvider,
  withStyles,
  createMuiTheme, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, orange,grey,yellow } from '@material-ui/core/colors';
const StyledLogin=styled.div`
height: 100vh;
width: 100%;
background-color:#ffffff;
display: flex;
justify-content: center;
align-items: center;
.login-container{
    width: 50%;
    height: 350px;
    background: transparent;
    filter: drop-shadow(4px 4px 10px rgba(0,0,0,0.5));
    box-shadow: 0px 0px 8px  rgba(0,0,0,0.4),
    0px 0px 6px  rgba(0,0,0,0.3),
    0px 0px 4px  rgba(0,0,0,0.2),
    0px 0px 2px  rgba(0,0,0,0.1)
    ;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 1fr 1fr 1fr; */
    .login-header{
        /* grid-column: 1/4; */
        background-color:transparent;
        height: 40px;
        width: 100%;
    }
    .login-details{
        /* grid-column: 2/4; */
        background-color: transparent;
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: row;
        .logo{
            width: 40%;
            background-color: transparent;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid gray;
            img{
                width: 250px;
                height: 250px;
            }
        }
        .input{
           flex: 1;
            background-color: transparent;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }
}
`;
const useStyles = makeStyles((theme)=>(
  {
    butt: {
      boxShadow: '0 0px 0px 2px #FFC305',
      border: '0.2px solid #FFC305',
      color:'#FFC305'
    },
    root:{
      '&:hover': {
        boxShadow: '0 3px 5px 2px #FFC305',
      },
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
  }
} 
))
const theme = createMuiTheme({
  palette: {
    primary: orange,
  
  },
});

export default function Login(props) {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [isSuccess,setIsSuccess]=useState(false)
  const appProps=useContext(AppContext)
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };



  const handleChangeName=(e)=>{
    const value=e.target.value
    setUsername(value)
  }

  const handleChangePassword=(e)=>{
    const value=e.target.value
    setPassword(value)
  }
    return (
      <ThemeProvider theme={theme}>
        <StyledLogin>
            <div className='login-container'>
             <div className='login-header'>
             <Typography style={{
               color:'gray'
             }} variant="h6" align='center' gutterBottom>Admin Login</Typography>
             </div>
             <div className='login-details'>
                 <div className='logo'>
                     <img src='logo.png' alt='logo'></img>
                 </div>
                 <div className='input'>
                 <Typography style={{marginLeft:'30px',color:'gray'}} variant="overline" display="block"  gutterBottom>User Id:</Typography>
                 {/* <TextField style={{marginLeft:'30px'}} id="outlined-basic" label="Outlined" variant="outlined" /> */}

                 <TextField
                 onChange={handleChangeName}
        style={{marginLeft:'30px',width:'80%'}}
        id="input-with-icon-adornment"
        label="Input Your Id Here"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle style={{color:'grey'}} />
            </InputAdornment>
          ),
        }}
      />
 <Typography style={{marginLeft:'30px',color:'gray',marginTop:'30px'}} variant="overline" display="block"  gutterBottom>Password:</Typography>
<TextField
      onChange={handleChangePassword}
        style={{marginLeft:'30px',width:'80%'}}
        id="input-with-icon-adornment"
        type='password'
        label="Enter Your Password Here"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <LockRoundedIcon style={{color:'grey'}}></LockRoundedIcon>
            </InputAdornment>
          ),
        }}
      />


<Button onClick={()=>{
  console.log(username,password)
  // appProps.setIslogged()

      // props.history.push('dash/main')
  handleToggle()
  // appProps.setIslogged()
  // props.history.push('dash/main')
  const user={
    username,
    password
  }
  fetch('https://polar-brook-59807.herokuapp.com/admin/login',{
    method:'POST',
    headers:{
      "Content-Type":'application/json'
    },
    body:JSON.stringify(user)
  }).then(res=>{
    res.json()
    .then(data=>{
      console.log(data)
      // setIsSuccess(true)
      if (data.success==false) { 
      handleClose()

      notification.open({
        message: 'An Error Occured',
        description:data.message.toUpperCase(),
        onClick: () => {
          notification.close()
        },
        type:'error'
      });
     const role=['Bursar']
      appProps.setIslogged()
      // appProps.setUser({role:['Bursar'],name:'Mubarak Ibrahim'})
      const isAdmin=true
      const urlToPush=isAdmin?'dash/main':'dash/profile'
      props.history.push(urlToPush)
     }
     




      // setTimeout(() => {
      //   handleClose()
      //   setIsSuccess(false)
      // }, 6000);
      // appProps.setUser()
      
    })
  })
}}  className={classes.butt}  style={{marginLeft:'auto',marginTop:'30px',marginRight:'40px'}} variant='outlined' color="secondary">
        Login
      </Button>
                 </div>
             </div>
            </div>
          

         <Backdrop style={{display:'flex',flexDirection:'column'}} className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
        <Typography style={{
               color:'white',
               marginTop:'10px',
               opacity:isSuccess?'1':'0',
               transition:'0.6s'
             }} variant="button" align='center' gutterBottom>Please Wait While Your Dashboard Is Beign Set Up!!!</Typography>
      </Backdrop>


        </StyledLogin>
        </ThemeProvider>
    )
}
