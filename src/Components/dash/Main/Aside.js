import React,{useState,useContext,useEffect} from 'react'
import styled from 'styled-components'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Dashboard,VerifiedUserRounded,HouseRounded,Folder,Receipt,FileCopy,Group,GroupAdd,Work,ArrowForward,ViewAgenda,Schedule,School,Assessment,Assignment} from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withRouter,Link} from 'react-router-dom'
import AppContext from '../../../Context/app/appContext'

import Divider from '@material-ui/core/Divider';

const StyledAside=styled.div`
width: 20%;
height: 90%;
background-color:#1E7F95;
margin-top: 10px;
display: flex; 
flex-direction: column;
position: fixed;
z-index: 100;
overflow-y: scroll;
margin-bottom: 10px;
`;
 function Aside(props) {
   const appProps=useContext(AppContext)
   useEffect(()=>{
  console.log(appProps)
   },[])
   const arr=[]
   const isTeacher=appProps.user.role.includes('Teacher')
   const isBursar=appProps.user.role.includes('Bursar')
   const isPrincipal=appProps.user.role.includes('Principal')
   const isFormMaster=appProps.user.role.includes('formMaster')
   const isAd=appProps.user.role.includes('Admin')
   
    return (
        <StyledAside>
       {
         isAd?(
          <Link onClick={()=>{
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }} to="/dash/main">
          <ListItem style={{borderBottom:'1px solid white'}} button>
            <ListItemIcon>
              <Dashboard style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText style={{color:'white'}} primary="Dashboard"/>
          </ListItem>
          </Link>
         ):null
       }
       
      {
        
      }
        <Link to="/dash/profile">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <VerifiedUserRounded style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Profile" />
        </ListItem>
        </Link>

       {
         isAd||isPrincipal?(
          <Link to="/dash/subject">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Folder style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Subjects" />
        </ListItem>
        </Link>
         ):null
       }
        

       {
       isAd?(
          <Link to="/dash/staff">
          <ListItem style={{borderBottom:'1px solid white'}} button>
            <ListItemIcon>
              <Group style={{color:'white'}} />
            </ListItemIcon>
            <ListItemText style={{color:'white'}} primary="Staff" />
          </ListItem>
          </Link>
         ):null
       }
       
       {
        isAd || isBursar||isPrincipal?(
          <Link to="/dash/student">
          <ListItem style={{borderBottom:'1px solid white'}} button>
            <ListItemIcon>
              <GroupAdd style={{color:'white'}} />
            </ListItemIcon>
            <ListItemText style={{color:'white'}} primary="Students" />
          </ListItem>
         </Link>
  
         ):null
       }
       {
       isAd ||isTeacher||isFormMaster||isPrincipal?(
          <Link to="/dash/result">
          <ListItem style={{borderBottom:'1px solid white'}} button>
            <ListItemIcon>
              <FileCopy style={{color:'white'}} />
            </ListItemIcon>
            <ListItemText style={{color:'white'}} primary="Enter Results" />
          </ListItem>
          </Link>
         ):null
       }
       

        {
         isAd|isPrincipal?(
            <Link to="/dash/veiwresult">
            <ListItem style={{borderBottom:'1px solid white'}} button>
            <ListItemIcon>
              <ViewAgenda style={{color:'white'}} />
            </ListItemIcon>
            <ListItemText style={{color:'white'}} primary="View Results" />
          </ListItem>
          </Link>
          ):null
        }

         {
           isAd ||isBursar?(
            <Link to="/dash/fees">
        <ListItem style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Receipt style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Fees Verification" />
        </ListItem>
        </Link>
           ):null
         }



{
          isAd?(
            <Link to="/dash/roles">
            <ListItem style={{borderBottom:'1px solid white'}} button>
              <ListItemIcon>
                <Work style={{color:'white'}} />
              </ListItemIcon>
              <ListItemText style={{color:'white'}} primary="Roles" />
            </ListItem>
           </Link>
           ):null
         }



{
           isAd?(
            <ListItem onClick={()=>{
              props.open()
            }} style={{borderBottom:'1px solid white'}} button>
              <ListItemIcon>
                <HouseRounded style={{color:'white'}} />
              </ListItemIcon>
              <ListItemText style={{color:'white'}} primary="Class" />
            </ListItem>
           ):null
         }

        {
          isAd||isFormMaster?(
  
        <Link to="/dash/cognitive">
        <ListItem  style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Schedule style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Cognitive Domain" />
        </ListItem>
        </Link>
      
          ):null
        }
    
      
    {
      isAd||isTeacher||isFormMaster?(
        <Link to="/dash/assignment">
        <ListItem  style={{borderBottom:'1px solid white'}} button>
          <ListItemIcon>
            <Assignment style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText style={{color:'white'}} primary="Post Assignment"/>
        </ListItem>
        </Link>
      ):null
    }

       

        {
       isAd?(
          <Link to="/dash/proceed">
          <ListItem style={{borderBottom:'1px solid white'}} button>
            <ListItemIcon>
              <ArrowForward style={{color:'white'}} />
            </ListItemIcon>
            <ListItemText style={{color:'white'}} primary="Academic Session Control" />
          </ListItem>
          </Link>
        ):null
      }
        


        </StyledAside>
    )
}
export default withRouter(Aside)


// !isTeacher && !isBursar && !isFormMaster && !isNull
// !isTeacher && !isBursar && !isNull?
// !isTeacher && !isBursar && !isFormMaster && !isNull?
// !isTeacher && !isBursar && !isFormMaster && !isNull
// !isBursar && !isNull
// !isTeacher && !isBursar && !isNull
// !isTeacher && !isBursar && !isNull