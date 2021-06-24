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
            <Button style={{width:'40%',margin:'20px'}} color='primary' variant='contained'>Add New Subject</Button>
        </StyledAdd>
    )
}
