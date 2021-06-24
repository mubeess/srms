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
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:5px;
    width:90%;
    margin-left: auto;
    margin-right: auto;
    /* flex-direction: row; */
    /* justify-content: space-evenly; */
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
    const [section,setSection]=useState('Grade')
    const [classs,setClass]=useState('Grade3')
    const [category,setCtegory]=useState('none')
    const [students,setStudets]=useState({
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
      const newStudents = students;
      newStudents[`${name}`] = value;
      setStudets(newStudents)
    }

    return (
       <StyledAdd>
     <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Add Student
      </Typography>
      <Divider></Divider>
        <div className='personal'>
        <TextField style={{width:'99%'}} onChange={changeValues} name='firstName' id="outlined-basic" label="First Name" variant="outlined" />
        <TextField style={{width:'99%'}} onChange={changeValues} name='lastName' id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField style={{width:'99%'}} onChange={changeValues} name='otherName' id="outlined-basic" label="Other Name" variant="outlined" />
        </div>
        <div className='personal'>
          
          <TextField id="date"
          name='dob'
          onChange={changeValues}
          style={{width:'99%'}}
        label="DOB"
        type="date"
        defaultValue="2017-05-24"
         variant="outlined" />
    
        <TextField name='studentId' onChange={changeValues} style={{width:'99%'}} id="outlined-basic" label="ID Number" variant="outlined" />
        <FormControl style={{width:'99%'}} variant="outlined">
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
        <div className='personal'>
        <TextField  name='address' onChange={changeValues} style={{gridColumn:'1/4'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>
        <div className='personal'>
        <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
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


      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
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


      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
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
        <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
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


      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
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
          <option value='Grade'>Grade</option>

        </Select>
      </FormControl>

      <FormControl style={{width:'99%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Class</InputLabel>
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
          <option value='Grade3'>Grade3</option>
          <option value='JSS2'>Jss2</option>

        </Select>
      </FormControl>



      
        </div>
        <div className='personal'>
        <FormControl hidden={!isSStudent} style={{width:'99%',transition:'1s',opacity:isSStudent?'1':'0'}} variant="outlined" className={classes.formControl}>
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
           <option value='none'>none</option>
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
        <TextField style={{width:'99%'}} name='kinName' onChange={changeValues} id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField style={{width:'99%'}} name='kinNumber' onChange={changeValues} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField style={{width:'99%'}} name='kinRelation' onChange={changeValues} id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>
        <div className='personal'>
        <TextField name='kinAddress' onChange={changeValues} style={{gridColumn:'1/4'}} id="outlined-basic" label="Address" variant="outlined" />
        </div>
        <Button onClick={()=>{
          const selectedStudent={
            state,
            lga,
            gender,
            section,
            currentClass:classs,
            term,
            category,
            firstName:students.firstName,
            username:students.studentId,
            lastName:students.lastName,
            dob:students.dob,
            otherName:students.otherName,
            address:students.address,
            kinName:students.kinName,
            kinAddress:students.kinAddress,
            kinRelation:students.kinRelation,
            kinNumber:students.kinNumber
          }
          console.log(selectedStudent)
          fetch('https://polar-brook-59807.herokuapp.com/admin/register-student',{
            method:'POST',
            headers:{
              "Content-Type":'application/json'
            },
            body:JSON.stringify(selectedStudent)
          }).then(res=>{
            res.json()
            .then(data=>{
              console.log(data)
            })
          })
        }} style={{marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}} variant="contained" color='primary'>Add Student</Button>
       </StyledAdd>
    )
}
