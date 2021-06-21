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
    const [term,setTerm]=useState('First Term')
    const [gender,setGender]=useState('Male')
    const [state,setState]=useState('Adamawa')
    const [lga,setLga]=useState('Maiha')
    const [section,setSection]=useState('Nursery')
    const [classs,setClass]=useState('Nursery 1')
    const [category,setCtegory]=useState('Science')
    const [staff,setStaff]=useState({
      firstName:'',
      lastName:'',
      otherName:'',
      studentId:'',
      address:'',
      kinName:'',
      kinNumber:'',
      kinRelation:'',
      kinAddress:'',
      dob:''
    })


    const changeValues=(e)=>{
      const name=e.target.name
      const value=e.target.value
      const newStaff = staff;
      newStaff[`${name}`] = value;
      setStaff(newStaff)
    }

    return (
       <StyledAdd>
     <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Add Student
      </Typography>
      <Divider></Divider>
        <div className='personal'>
        <TextField onChange={changeValues} name='firstName' id="outlined-basic" label="First Name" variant="outlined" />
        <TextField onChange={changeValues} name='lastName' id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField onChange={changeValues} name='otherName' id="outlined-basic" label="Other Name" variant="outlined" />
        </div>
        <div className='personal'>
          
          <TextField id="date"
          name='dob'
          onChange={changeValues}
          style={{width:'22%',marginLeft:'10px'}}
        label="DOB"
        type="date"
        defaultValue="2017-05-24"
         variant="outlined" />
    
        <TextField name='studentId' onChange={changeValues} style={{width:'22%',}} id="outlined-basic" label="ID Number" variant="outlined" />
        <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
        <Select
          onChange={(e)=>{
            setGender(e.target.value)
          }}
          native
          value={gender}
          label="Gender"
          inputProps={{
            name:'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Select>
      </FormControl>
        </div>
        <TextField name='address' onChange={changeValues} style={{width:'83%',marginLeft:'85px',marginTop:'20px'}} id="outlined-basic" label="Address" variant="outlined" />
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
          onChange={(e)=>{
            setState(e.target.value)
          }}
          native
          value={state}
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
         onChange={(e)=>{
          setLga(e.target.value)
        }}
          native
          value={lga}
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
         onChange={(e)=>{
         setTerm(e.target.value)
         }}
          native
          value={term}
          label="Enrollment Session"
          inputProps={{
            name: 'term',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='First Term'>First Term</option>
          <option value='Second Term'>Second Term</option>
          <option value='Third Term'>Third Term</option>
        </Select>
      </FormControl>


      <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Section</InputLabel>
        <Select
        value={section}
         onChange={(e)=>{
           setSection(e.target.value)
           if (e.target.value=='SSS') {
            setIsStudet(true)
           }else{
             setIsStudet(false)
           }
          
         }}
          native
          label="Section"
          inputProps={{
            name: 'section',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='JSS'>JSS</option>
          <option value='SSS'>SSS</option>
          <option value='Primary'>Primary</option>
          <option value='NURSERY'>Nursery</option>

        </Select>
      </FormControl>

      <FormControl style={{width:'22%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Section</InputLabel>
        <Select
          onChange={(e)=>{
            setClass(e.target.value)
          }}
          native
          value={classs}
          label="Class"
          inputProps={{
            name: 'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Jss1'>Jss1</option>
          <option value='Jss2'>Jss2</option>
        </Select>
      </FormControl>



      
        </div>
        <div className='personal'>
        <FormControl style={{width:'22%',transition:'1s',opacity:isSStudent?'1':'0'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
        <Select
         onChange={(e)=>{
           setCtegory(e.target.value)
         }}
          native
          value={category}
          label="Category"
          inputProps={{
            name: 'category',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Science'>Science</option>
          <option value='Arts'>Arts</option>
        </Select>
      </FormControl>
        </div>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Parent/Guardian
      </Typography>
      <Divider></Divider>
      <div className='personal'>
        <TextField name='kinName' onChange={changeValues} id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField name='kinNumber' onChange={changeValues} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField name='kinRelation' onChange={changeValues} id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>
        <TextField name='kinAddress' onChange={changeValues} style={{width:'83%',marginLeft:'90px',marginTop:'20px'}} id="outlined-basic" label="Address" variant="outlined" />
        <Button onClick={()=>{
          const selector={
            state,
            lga,
            gender,
            section,
            classs,
            term,
            category
          }
          console.log(selector)
        }} style={{marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color='primary'>Add Student</Button>
       </StyledAdd>
    )
}
