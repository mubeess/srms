import { Divider,Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';



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
        flex-direction:column;
    }
  
    }
    .avatar{
        display: grid;
        align-items:right;
        
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
        <Typography style={{fontWeight:'lighter',fontSize:'20px'}}  variant='caption'  gutterBottom>
        <span style={{fontWeight:'bolder'}}>Name:</span>Mubarak Ibrahim
      </Typography> 
      <Divider></Divider>
      <Typography style={{fontWeight:'lighter',fontSize:'20px'}}  variant='caption'  gutterBottom>
        <span style={{fontWeight:'bolder'}}>Id:</span>NIA/OO1
      </Typography>
      <Divider></Divider>
      <Typography style={{fontWeight:'lighter',fontSize:'20px'}}  variant='caption'  gutterBottom>
        <span style={{fontWeight:'bolder'}}>Role:</span>Teacher
      </Typography>
      <Divider></Divider>
      <Typography style={{fontWeight:'lighter',fontSize:'20px'}}  variant='caption'  gutterBottom>
        <span style={{fontWeight:'bolder'}}>Email:</span>mubis@gmail.com
      </Typography>
          </div>
       
      </div>

      <div className='avatar'>
      <Avatar style={{width:'200px',height:'200px',marginLeft:'100%'}} alt="Travis Howard" src="https://www.iseepassword.com/blog/wp-content/uploads/2017/11/people19.png" />

      </div>

      </div>
        </StyledProfile>
    )
}
