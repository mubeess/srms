import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import {withRouter,Link} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const StyledMod=styled.div`
@keyframes appear{
  0%{
    opacity: 0;
    transform: translateX(-200px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
display:flex;
flex-direction: column;
height:143px;
min-width: 30%;
background-color: white;
margin-top: 50px;
align-items: center;
.successwrite{
  color: green;
  opacity: 0;
  transform: translateX(-200px);
  animation: appear 0.2s linear 1s 1 forwards;
}
img{
  width: 200px;
  height: 200px;
}
`;


const StyledFees=styled.div`
display: flex;
min-height: 300px;
width: 70%;
background-color:#E5E5E5;
border: 1px thin #1E7F95;
flex-direction: column;
.selection{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
}

`;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop:'20px'
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

 function AddSubject(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <StyledFees>
             <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
        <AlertTitle>Success</AlertTitle>
          Succesfully Added Subject!!!
        </Alert>
      </Collapse>
        <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT TERM SESSION</InputLabel>
        <Select
          native
          value='SELECT TERM SESSION'
          label="SELECT TERM SESSION"
          inputProps={{
            name:'term',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='First Term'> First Term</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CATEGORY</InputLabel>
        <Select
          native
          value='SELECT CATEGORY'
          label="SELECT CATEGORY"
          inputProps={{
            name:'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Primary One'> Primary One</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>
            </div>




            <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CLASS</InputLabel>
        <Select
          native
          value='SELECT CLASS'
          label="SELECT CLASS"
          inputProps={{
            name:'studentid',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>

       <TextField style={{width:'40%'}} id="outlined-basic" label="ENTER SUBJECT NAME" variant="outlined" />
            </div>

       <Button onClick={()=>{
        setOpen(true)
       }} style={{marginLeft:'70%',marginTop:'20px',marginRight:'20px'}} variant="contained" color='primary'>Add Subject</Button>




        </StyledFees>
    )
}
export default withRouter(AddSubject)