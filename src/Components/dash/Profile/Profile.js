import { Divider,Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'


const StyledProfile=styled.div`
margin-left: 21%;
margin-top: 10px;
background-color:transparent;
width: 75%;
height: 500px;
display: flex;
flex-direction: column;
.header{
    height: 400px;
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: row;
    .mainDetails{
    width: 50%;
    height: 100%;
    background-color: transparent;
    .individual{
        display: flex;
        flex-direction: row;
    }
    }
}

`;

export default function Profile() {
    return (
        <StyledProfile>
        <Typography  variant="h4" display="block" gutterBottom>
        Profile
      </Typography>
      <Divider style={{width:'100%'}}></Divider>

      <div className='header'>
      <div className='mainDetails'>
          <div className='individual'>
        <Typography style={{fontWeight:'lighter'}}  variant='h4'  gutterBottom>
        <span style={{fontWeight:'bolder'}}>Name:</span>Mubarak Ibrahim
      </Typography> 
     
          </div>
       
      </div>

      </div>
        </StyledProfile>
    )
}
