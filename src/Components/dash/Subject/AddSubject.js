import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Selects from '@material-ui/core/Select';
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
import { Select, Tag } from 'antd';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
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





 function AddSubject(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [options,setOptions]=React.useState([{ value: 'Mathematics' }])
    const [selectedOptions,setSelected]=React.useState([''])





    function tagRender(props) {
      const { label, value, closable, onClose } = props;
      const onPreventMouseDown = event => {
        event.preventDefault();
        event.stopPropagation();
      };
      return (
        <Tag
          color='green'
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          style={{ marginRight: 3,}}
        >
          {label}
        </Tag>
      );
    }




    React.useEffect(()=>{
      let newSub=[]
     fetch('https://polar-brook-59807.herokuapp.com/admin/get-all-subject')
     .then(res=>{
       res.json()
       .then(data=>{
        // setSubjects(data.message)
       console.log('rrr')
     
        data.message.map(data=>{
          newSub.push({value:data.subject})
        })
       }).then(dat=>{
        setOptions(newSub)
        
       })
     })
    },[])

    const [subject, setSubject] = React.useState({
      session:'',
      category:'',
      class:''
    });

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (value) => {
      // setSubjects(event.target.value);
      setSelected(value)
    //  console.log(value)
    };

    const handleChange2 = (e) => {
      const name=e.target.name
      const value=e.target.value
    //  let prevSubject=subject

  const newSubject = subject;
  newSubject[`${name}`] = value;
  setSubject(newSubject)
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
        <Selects
         onChange={handleChange2}
          native
          value='SELECT TERM SESSION'
          label="SELECT TERM SESSION"
          inputProps={{
            name:'session',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='First Term'> First Term</option>
          <option value='Female'>Female</option>
        </Selects>
      </FormControl>


      <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CATEGORY</InputLabel>
        <Selects
         onChange={handleChange2}
          native
          value='SELECT CATEGORY'
          label="SELECT CATEGORY"
          inputProps={{
            name:'category',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Primary One'> Primary One</option>
          <option value='Female'>Female</option>
        </Selects>
      </FormControl>
            </div>




            <div className='selection'>
        <FormControl style={{width:'40%'}} variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">SELECT CLASS</InputLabel>
        <Selects
         onChange={handleChange2}
          native
          value='SELECT CLASS'
          label="SELECT CLASS"
          inputProps={{
            name:'class',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value='Male'> Male</option>
          <option value='Female'>Female</option>
        </Selects>
      </FormControl>


<FormControl style={{width:'40%'}} className={classes.formControl}>
  <div style={{display:'flex',flexDirection:'column'}}>
 <h4 id="demo-mutiple-chip-label">Select Subjects</h4>
<Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['Chemistry', 'Physics']}
    style={{ width: '100%' }}
    options={options}
    onChange={handleChange}
  />
  </div>
  </FormControl>

            </div>

       <Button onClick={()=>{
         console.log(subject,selectedOptions)
        setOpen(true)
       }} style={{marginLeft:'70%',marginTop:'20px',marginRight:'20px'}} variant="contained" color='primary'>Add Subject</Button>




        </StyledFees>
    )
}
export default withRouter(AddSubject)