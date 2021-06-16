import React from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'
import BarCharts from './BarCharts'
import { Fade,Slide } from "react-awesome-reveal";
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import {Dashboard,VerifiedUserRounded,BarChart,Folder,Receipt,FileCopy,Group,GroupAdd} from '@material-ui/icons';
import PieCharts from './PieCharts';

const StyledMain=styled.div`
       background:transparent;
        width:75%;
        height:95%;
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 20%;
        .icons{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-auto-rows: minmax(50px,auto);
            grid-gap: 20px;
            

        }
        .charts{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

`;
export default function MainApp() {
    return (
        <StyledMain>
         <div className='icons'>
         <Fade triggerOnce cascade>
         <Tabs title='Active Students' value='400' Icon={<Group style={{width:'70px',height:'70px'}}></Group>}></Tabs>
         <Tabs title='Staff' value='300' Icon={<GroupAdd style={{width:'70px',height:'70px'}}></GroupAdd>}></Tabs>
         <Tabs title='Subjects' value='200' Icon={<Folder style={{width:'70px',height:'70px'}}></Folder>}></Tabs>
         <Tabs title='Classes' value='30' Icon={<FileCopy style={{width:'70px',height:'70px'}}></FileCopy>}></Tabs>
         <Tabs title='Active Students' value='400' Icon={<Group style={{width:'70px',height:'70px'}}></Group>}></Tabs>
         <Tabs title='Staff' value='300' Icon={<GroupAdd style={{width:'70px',height:'70px'}}></GroupAdd>}></Tabs>
         <Tabs title='Subjects' value='200' Icon={<Folder style={{width:'70px',height:'70px'}}></Folder>}></Tabs>
         <Tabs title='Classes' value='30' Icon={<FileCopy style={{width:'70px',height:'70px'}}></FileCopy>}></Tabs>
         </Fade>
         </div>
         <div className='charts'>
        <div style={{width:'100%',height:'60vh'}}>
        <BarCharts></BarCharts>
        </div>
        <div style={{width:'100%',height:'60vh'}}>
        <PieCharts></PieCharts>
        </div>
         </div>
        </StyledMain>
    )
}
