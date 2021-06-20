import React,{useState} from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import NativeSelect from '@material-ui/core/NativeSelect';
const StyledAdd= styled.div`
width: 100%;
min-height: 60vh;
background-color:transparent;
box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
.personal{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
}
`;
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function AddStudent() {
    const classes = useStyles();
    const [isSStudent,setIsStudet]=useState(false)

    return (
       <StyledAdd>
     <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Add Student
      </Typography>
      <Divider></Divider>
        <div className='personal'>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Other Name" variant="outlined" />
        </div>
        <div className='personal'>
          
          <TextField id="date"
          style={{width:'22%',marginLeft:'10px'}}
        label="DOB"
        type="date"
        defaultValue="2017-05-24"
         variant="outlined" />
    
        <TextField style={{width:'22%',}} id="outlined-basic" label="ID Number" variant="outlined" />
        <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
        <Select
          native
          value='Gender'
          label="Gender"
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
        <TextField style={{width:'83%',marginLeft:'85px',marginTop:'20px'}} id="outlined-basic" label="Address" variant="outlined" />
        <div className='personal'>
        <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
        <Select
         disabled
          native
          value='Nigeria'
          label="Country"
          inputProps={{
            name: 'Country',
            id: 'outlined-age-native-simple',
          }}
        >

          <option value='Nigeria'>Nigeria</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
        <Select
          native
          value='Adamawa'
          label="State"
          inputProps={{
            name: 'state',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Adamawa'>Adamawa</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">LGA</InputLabel>
        <Select
          native
          value='Maiha'
          label="LGA"
          inputProps={{
            name: 'lga',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Maiha'>Maiha</option>
        </Select>
      </FormControl>
        </div>


        <div className='personal'>
        <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Enrollment Session</InputLabel>
        <Select
          native
          value='First Term'
          label="Enrollment Session"
          inputProps={{
            name: 'enrol',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='First Term'>First Term</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Section</InputLabel>
        <Select
         onChange={()=>{
           setIsStudet(true)
         }}
          native
          value='Jss1'
          label="Section"
          inputProps={{
            name: 'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Jss1'>Jss1</option>
          <option value='Jss2'>Jss2</option>
        </Select>
      </FormControl>



      <FormControl style={{width:'22%',transition:'1s',opacity:isSStudent?'1':'0'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
        <Select
          native
          value='Jss1'
          label="Category"
          inputProps={{
            name: 'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Jss1'>Jss1</option>
        </Select>
      </FormControl>
        </div>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Parent/Guardian
      </Typography>
      <Divider></Divider>
      <div className='personal'>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>
        <TextField style={{width:'83%',marginLeft:'90px',marginTop:'20px'}} id="outlined-basic" label="Address" variant="outlined" />
        <Button style={{marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color='primary'>Add Student</Button>
       </StyledAdd>
    )
}
