import { Divider,Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import MainProfile from '../../Profile/MainProfile.js';
import AppContext from '../../../Context/app/appContext'



const StyledProfile=styled.div`
margin-left: 21%;
margin-top: 10px;
background-color:transparent;
width: 85%;
min-height: 100vh;
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
    // const appProps=useContext(AppContext)
    // useEffect(() => {
    //     appProps.setUser({user:JSON.parse(localStorage.getItem('user')).user,role:JSON.parse(localStorage.getItem('user')).role})
    // }, [])
    return (
        <StyledProfile>
        <Typography  variant="h4" display="block" gutterBottom>
        Profile
      </Typography>
      <Divider style={{width:'100%'}}></Divider>
     <MainProfile></MainProfile>
      

      
        </StyledProfile>
    )
}
