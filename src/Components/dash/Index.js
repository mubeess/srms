import React,{useEffect} from 'react'
import Nav from './Header/Nav'
import styled from 'styled-components'
import Aside from './Main/Aside'
import MainApp from './Main/MainApp'
import Student from './Student/Student'
import FeesVarification from './Student/FeeVarification'


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
    useEffect(() => {
        console.log(props.match.url)
        
    }, [])
    const Dynamic=()=>{
        switch (props.match.url) {
            case '/dash/main':
                 return <MainApp></MainApp>
           case '/dash/student':
                    return <Student></Student>
            case '/dash/fees':
                        return <FeesVarification></FeesVarification>
        
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
        <Nav></Nav>
       <StyledMain>
           <Aside></Aside>
           <Dynamic></Dynamic>
       </StyledMain>
    </div>
  );
}

export default Index;
