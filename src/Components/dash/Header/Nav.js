import { Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Logo from './logo.png'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { green, orange,grey,yellow } from '@material-ui/core/colors';
import { makeStyles,  fade,
    ThemeProvider,
    withStyles,
    createMuiTheme, } from '@material-ui/core/styles';
const StyledNav=styled.div`
position: fixed;
height: 69px;
background-color: #FFFFFF;
width: 100%;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
top: 0;
z-index: 100;
display: flex;
flex-direction: row;
img{
    width: 100px;
    height: 60px;
}
`;
const theme = createMuiTheme({
    palette: {
      primary: orange,
    
    },
  });
export default function Nav() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <ThemeProvider theme={theme}>
       <StyledNav>
        <img src={Logo} alt='logo'></img>
        <div style={{
            display:'flex',
            flexDirection:'column',
           padding:'10px',
            borderRight:'1px solid gray'
        }}>
        <Typography style={{
               color:'black'
             }} variant="button" align='center' gutterBottom>NOBLE INTELLECT</Typography>
               <Typography style={{
               color:'black'
             }} variant="button" align='center' gutterBottom>ACADEMY</Typography>
        </div>
        <TextField
        color='#FFC305'
        style={{marginLeft:'auto',width:'20%',marginRight:'10px',marginTop:'10px'}}
        id="input-with-icon-adornment"
        type='search'
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
      />
        <Avatar
    onClick={handleClick}
     aria-controls="simple-menu" aria-haspopup="true"  style={{
    marginTop:'20px',
    marginLeft:'20px',
    cursor:'pointer'
}}>H</Avatar>
<Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
<Badge style={{
    marginRight:'100px',
    marginTop:'20px',
    marginLeft:'20px'
}} badgeContent={4} color="secondary">
  <Notifications></Notifications>
</Badge>
        
       </StyledNav>
       </ThemeProvider>
    )
}
