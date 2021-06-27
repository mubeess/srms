import { Divider,Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';



const StyledProfile=styled.div`
margin-left: 21%;
margin-top: 10px;
background-color:transparent;
width: 75%;
height: 500px;
display: flex;
flex-direction: column;
.warning{
    min-width: 80%;
    min-height: 100px;
    border: 1px solid red;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: row;
    .warn{
        width: 30%;
        height: 100%;
        
    }
    .txt{
        width: 70%;
        margin-left: 10px;
        height: 100%;
    }
}

.instruction{
    min-width: 80%;
    min-height: 200px;
    border: 1px solid green;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    display: flex;
    flex-direction:column;
    margin-top: 30px;
    .warn{
        width: 100%;
      
        
    }
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        .write{
            width: 70%;
        }
    }
}

`;

export default function Proceed() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    return (
        <StyledProfile>
       <div className='warning'>
      <div className='warn'>
      <Typography style={{fontWeight:'bold',color:'red',marginTop:'20px',marginLeft:'10px'}}  variant='h4'  gutterBottom>
        WARNING!!!
      </Typography>
      </div>

      <div className='txt'>
      <Typography style={{fontWeight:'lighter',color:'red',marginTop:'20px'}}  variant='body1'  gutterBottom>
      this page contains vital information that when altered it can't be retrieved back.
      Read the instructions below carefully before performing any operation.
      </Typography>
      </div>
       </div>


       <div className='instruction'>
       <div className='warn'>
      <Typography style={{fontWeight:'bold',color:'black',marginTop:'20px',marginLeft:'10px'}}  variant='h5'  gutterBottom>
        Instructions:
      </Typography>

      <Typography style={{fontWeight:'bold',color:'black',marginTop:'20px',marginLeft:'10px'}}  variant='h5'  gutterBottom>
      Before clicking the  Next term button make sure all records including Fees and Results have been recorded successfuly.
      </Typography>
      </div>


      <div className='buttons'>
      
      <Checkbox
       checked={checked}
       onChange={handleChange}
       inputProps={{ 'aria-label': 'primary checkbox' }}
     />

     <div className='write'>
     <Typography style={{fontWeight:'lighter',marginTop:'10px'}}  variant='body1'  gutterBottom>
      this page contains vital information that when altered it can't be retrieved back.
      Read the instructions below carefully before performing any operation.
      </Typography>
     </div>
   
      </div>
      
      
       </div>

     
    

    
        </StyledProfile>
    )
}
