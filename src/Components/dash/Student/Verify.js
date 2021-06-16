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
import Success from './success2.gif'


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
height:443px;
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
min-height: 400px;
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

export default function Verify() {
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
        <InputLabel htmlFor="outlined-age-native-simple">PLEASE SELECT CLASS</InputLabel>
        <Select
          native
          value='PLEASE SELECT CLASS'
          label="PLEASE SELECT CLASS"
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
        <InputLabel htmlFor="outlined-age-native-simple">SELECT STUDET ID</InputLabel>
        <Select
          native
          value='SELECT STUDET ID'
          label="SELECT STUDET ID"
          inputProps={{
            name:'studentid',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>

       <TextField style={{width:'40%'}} id="outlined-basic" label="PLEASE ENTER TELLER NUMBER" variant="outlined" />
            </div>





            <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT STUDENT NAME</InputLabel>
        <Select
          native
          value='SELECT STUDENT NAME'
          label="SELECT STUDENT NAME"
          inputProps={{
            name:'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT PURPOSE OF PAYMENT</InputLabel>
        <Select
          native
          value='SELECT PURPOSE OF PAYMENT'
          label="SELECT PURPOSE OF PAYMENT"
          inputProps={{
            name:'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>
            </div>
       <Button onClick={()=>{
         handleOpen()
       }} style={{marginLeft:'70%',marginTop:'20px',marginRight:'20px'}} variant="contained" color='primary'>Verify Fees</Button>




       <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
         <StyledMod>
           <Divider></Divider>
           <Typography variant="button" display="block" gutterBottom>
            FEES VERIFICATION
           </Typography>
           <Divider></Divider>
         <img src={Success} alt='success'></img>
         <h3 className='successwrite'>
           SUCCESS
         </h3>
       <Typography variant="overline" display="block" gutterBottom>
         Payment Verified Successfully 
      </Typography>
      <Button style={{background:'green'}} variant="contained" color="primary">
       Print Reciept
   </Button>
         </StyledMod> 
        </Fade>
      </Modal>
        </StyledFees>
    )
}
