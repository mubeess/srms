import { Divider,Typography,TextField,Button} from '@material-ui/core';
import React,{useState} from 'react'
import styled from 'styled-components'


const StyledAdd=styled.div`
display: flex;
min-height: 200px;
width: 70%;
background-color:#E5E5E5;
border: 1px thin #1E7F95;
flex-direction: column;

`;

export default function AddNew() {
    const [subject,setSubject]=useState('')
    return (
        <StyledAdd>
            <Divider></Divider>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Add New Subject
      </Typography>
            <Divider></Divider>
            <TextField style={{width:'70%',margin:'20px'}} onChange={(e)=>{
                setSubject(e.target.value)
                
            }} name='name' id="outlined-basic" label="Subject Name" variant="outlined" />
            <Button onClick={()=>{

const myObj={
    subject
}
fetch('https://polar-brook-59807.herokuapp.com/admin/create-subject',{
method:'POST',
headers:{
"Content-Type":'application/json'
},
body:JSON.stringify(myObj)
}).then(res=>{
res.json()
.then(data=>{
console.log(data)
}).catch(err=>{
alert('An Error Occured')
})
}).catch(err=>{
alert('An Error Occured')
})


            }} style={{width:'40%',margin:'20px',backgroundColor:'#1E7F95'}} color='primary' variant='contained'>Add New Subject</Button>
        </StyledAdd>
    )
}
