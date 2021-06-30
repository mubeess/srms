import React,{useRef,useContext,useEffect} from 'react'
import styled from 'styled-components'
import Logo from './logo1.png'
import Signature from './signature.jpg'
import {useReactToPrint} from 'react-to-print'
import './dosier.css'
import { Button } from '@material-ui/core';
import AppContext from '../../Context/app/appContext'

const StyledAttendance=styled.div`
margin-left: 21%;
margin-top: 20px;

`;

export default function Dosier() {
   const appProps=useContext(AppContext)
    const componentRef=useRef()
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })

    return (
        <StyledAttendance>
    <Button style={{margin:'10px'}} variant='contained' onClick={handlePrint} color='primary'>Print</Button>
            <div id="container">
        <center> <div className="header">
             <img src={Logo} style={{textAlign:'center'}}/><br></br>
             <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
            <span>No. 24 kofare zone 3,, Jimeta Yola North, Adamawa State</span><br></br>
            <span>Motto: Learning For Better Future.</span>
            <h4>STUDENT ASSESSMENT SHEET</h4>
        </div> </center>
        <div className="information-container">
            <div>
                <span className="content-title">NAME:</span> <span  className="content-title-post">MUHAMMAD SULAIMAN</span><br></br>
                <span className="content-title">STUDENT ID:</span><span className="content-title-post">NIA/09/001</span><br></br>
                <span className="content-title">CLASS:</span><span className="content-title-post">JSS1</span><br></br>
                <span className="content-title">CLASS SIZE:</span><span className="content-title-post">20</span><br></br>
            </div>
            <div>
                <span className="content-title">FINAL POSITION:</span> <span className="content-title-post">1ST</span><br></br>
                <span className="content-title">AGGREGATE:</span><span className="content-title-post">1208</span><br></br>
                <span className="content-title">AVERAGE:</span><span className="content-title-post">97.8</span><br></br>
                <span className="content-title">NO OF SUBJECT:</span><span className="content-title-post">13</span><br></br>
            </div>
            <div>
                <span className="content-title">SESSION:</span> <span className="content-title-post">2020/2021</span><br></br>
                <span className="content-title">TERM:</span><span className="content-title-post">FIRST TERM</span><br></br>
                <span className="content-title">DAYS PRESENT:</span><span className="content-title-post">114 OF 130</span><br></br>
                <span className="content-title">HOUSE:</span><span className="content-title-post">YELLOW HOUSE</span><br></br>
            </div>

        </div>
        <div>
            <table className="table1">
                <thead>
                    <th>SUBJECT</th>
                    <th>1ST CA <br></br>(10)</th>
                    <th>2ND CA <br></br>(10)</th>
                    <th>3RD CA <br></br>(10)</th>
                    <th>4TH CA <br></br>(10)</th>
                    <th>EXAM<br></br>(60)</th>
                    <th>TOTAL</th>
                    <th>GRADE</th>
                    <th>POSITION</th>
                    <th>REMARKS</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="subject">English Language</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>60</td>
                        <td>100</td>
                        <td>A</td>
                        <td>1ST</td>
                        <td>EXCELLENT</td>
                    </tr>
                    <tr>
                        <td className="subject">Mathematics</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>60</td>
                        <td>100</td>
                        <td>A</td>
                        <td>1ST</td>
                        <td>EXCELLENT</td>
                    </tr>
                    
                 
                     
                </tbody>
            </table>
           
        </div>
        <div className="grade-cognitive-section">
            <div className="table2-container">
               <span>Grading Scale</span>
                <table className="table2">
                    <thead>
                        <th>Score</th>
                        <th>Grade</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>70-100</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>60-69</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>50-59</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>40-49</td>
                            <td>D</td>
                        </tr>
                        <tr>
                            <td>0-39</td>
                            <td>F</td>
                        </tr>
                    </tbody>
                    
                </table>
               
            </div>
            <div className="table3-container">
             <span>Cognitive Domain</span>
                <table className="table3">
                    <thead>
                        <th>Subject</th>
                        <th>Ranking</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Punctuality</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Neatness</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>Self Expression</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>Attitude</td>
                            <td>D</td>
                        </tr>
                        <tr>
                            <td>Morals</td>
                            <td>F</td>
                        </tr>
                    </tbody>
                    
                </table>
               
            </div>
        </div>
        <div>
            <span>PROMOTION STATUS</span>
            <span className="promotion-status">PROMOTED</span>
        </div>
        <div>
            <table className="table1">
                <tr>
                    <td>PRINCIPAL REMARK</td>
                    <td>AN EXCELLENT RESULTS KEEP IT UP</td>
                </tr>
            </table>
        </div>
        <div>
            <table className="table1">
                <tr>
                    <td>PRINCIPAL REMARK</td>
                    <td>AN EXCELLENT RESULTS KEEP IT UP</td>
                </tr>
            </table>
           
        </div>
        <center><img src={Signature}/></center>
    </div>
        </StyledAttendance>
    )
}
