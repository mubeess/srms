import React,{useEffect,useContext,useState} from 'react'
import Nav from './Header/Nav'
import styled from 'styled-components'
import Aside from './Main/Aside'
import MainApp from './Main/MainApp'
import Student from './Student/Student'
import FeesVarification from './Student/FeeVarification'
import Staff from './Staff/Staff'
import Result from './Staff/Result'
import Subject from './Subject/Index'
import AppContext from '../../Context/app/appContext'
import App from '../../App'
import Roles from './Staff/Roles'
import Classes from './Staff/Classes'
import { Drawer, Button, Radio, Space } from 'antd';




const StyledMain=styled.div`
display: flex;
flex: 1;
background-color:#ffffff;
width: 100%;
min-height: 100vh;
margin-top: 69px;
flex-direction: row;

`;
 function Main() {
    return (
        <div style={{
        background:'red',
        width:'75%',
        height:'95%',
        marginTop:'10px',
        marginLeft:'auto',
        marginRight:'auto'}}>
            <h1>Main</h1>
        </div>
    )
}


function Index(props) {
    const appProps=useContext(AppContext)
    const [visible,setVisible]=useState(false)

   function close() {
       setVisible(false)
   }

   function open() {
    setVisible(true)
}
 
    useEffect(() => {
        console.log(appProps)
        
    }, [])
    const Dynamic=()=>{
        switch (props.match.url) {
            case '/dash/main':
                 return <MainApp></MainApp>
           case '/dash/student':
                    return <Student></Student>
            case '/dash/fees':
                        return <FeesVarification></FeesVarification>
            case '/dash/staff':
                        return <Staff></Staff>
            case '/dash/result':
                        return <Result></Result>
            case '/dash/subject':
                            return <Subject></Subject>
            case '/dash/roles':
                            return <Roles></Roles>
        
            default:
                return <Main></Main>
                
        }
    }
      
  
  return (
    <div style={{
        position: 'relative',
        display:'flex',
        overflow:'hidden'
    }}>
       {
           appProps.isLogged&&(
            <>
            <Nav></Nav>
            <StyledMain>
                <Aside open={open}></Aside>
                <Dynamic></Dynamic>
                <Drawer
          title="Manage Classes"
          placement='top'
          closable={false}
          onClose={close}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
            </StyledMain>
            </>
           )
       }

{
           !appProps.isLogged&&(
            <>
            <h1>You Are Not Logged In.........</h1>
            </>
           )
       }
    </div>
  );
}

export default Index;












// const filtered=data.filter(dat=>dat.state.toLowerCase().includes(searchVal.toLowerCase())||dat.lga.toLowerCase().includes(searchVal.toLowerCase())||dat.category.toLowerCase().includes(searchVal.toLowerCase()))