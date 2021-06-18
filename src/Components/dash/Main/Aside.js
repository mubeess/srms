import React from 'react'
import styled from 'styled-components'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Dashboard,VerifiedUserRounded,BarChart,Folder,Receipt,FileCopy,Group,GroupAdd,Work} from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withRouter,Link} from 'react-router-dom'

import Divider from '@material-ui/core/Divider';

const StyledAside=styled.div`
width: 20%;
height: 95%;
background-color:#1E7F95;
margin-top: 10px;
display: flex;
flex-direction: column;
position: fixed;
z-index: 100;
`;
 function Aside(props) {
    return (
        <StyledAside>
        <Link to="/dash/main">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Dashboard style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Dashboard"/>
        </ListItem>
        </Link>

        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <VerifiedUserRounded style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Profile" />
        </ListItem>

        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <BarChart style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Classes" />
        </ListItem>

        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Folder style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Subjects" />
        </ListItem>

        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <FileCopy style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Results" />
        </ListItem>
        
        <Link to="/dash/staff">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Group style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Staff" />
        </ListItem>
        </Link>
        <Link to="/dash/student">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <GroupAdd style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Students" />
        </ListItem>
       </Link>

       <Link to="/dash/fees">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Receipt style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Fees Verification" />
        </ListItem>
        </Link>

      
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Work style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Roles" />
        </ListItem>
        

        </StyledAside>
    )
}
export default withRouter(Aside)