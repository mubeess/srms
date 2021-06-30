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
min-height: 100vh;
.printCont{
    display:flex;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    flex-direction: column;
}

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
    <div ref={componentRef} className='printCont'>
   {
       appProps.dosier.length>=1&&(
           appProps.dosier.map((dos,ind)=>(
            <div key={ind} id="container">
            <center> <div className="header">
                 <img src={Logo} style={{textAlign:'center'}}/><br></br>
                 <span className="school-name">NOBLE INTELLECT ACADEMY</span><br></br>
                <span>No. 24 kofare zone 3,, Jimeta Yola North, Adamawa State</span><br></br>
                <span>Motto: Learning For Better Future.</span>
                <h4>STUDENT REPORT SHEET</h4>
            </div> </center>
            <div className="information-container">
                <div>
                    <span className="content-title">NAME:</span> <span  className="content-title-post">{`${dos[2][0].firstName+' '+dos[2][0].lastName}`}</span><br></br>
                    <span className="content-title">STUDENT ID:</span><span className="content-title-post">{dos[0].username}</span><br></br>
                    <span className="content-title">CLASS:</span><span className="content-title-post">{dos[0].class}</span><br></br>
                    <span className="content-title">CLASS SIZE:</span><span className="content-title-post">{appProps.dosier.length+1}</span><br></br>
                </div>
                <div>
                    <span className="content-title">FINAL POSITION:</span> <span className="content-title-post">{dos[0].position}</span><br></br>
                    <span className="content-title">AGGREGATE:</span><span className="content-title-post">{dos[0].total}</span><br></br>
                    <span className="content-title">AVERAGE:</span><span className="content-title-post">{dos[0].average}</span><br></br>
                    <span className="content-title">NO OF SUBJECT:</span><span className="content-title-post">{dos[0].noOfCourse}</span><br></br>
                </div>
                <div>
                    <span className="content-title">SESSION:</span> <span className="content-title-post">{dos[0].session}</span><br></br>
                    <span className="content-title">TERM:</span><span className="content-title-post">{dos[0].term}</span><br></br>
                </div>
    
            </div>
            <div>
                <table className="table11">
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
                       
                        {
                            dos[1].length>=1&&(
                                dos[1].map((curDos,indd)=>(
                                    <tr key={indd}>
                                    <td className="subject">{curDos.subject}</td>
                                    <td>{curDos.ca1 ||0}</td>
                                    <td>{curDos.ca2 ||0}</td>
                                    <td>{curDos.ca3 ||0}</td>
                                    <td>{curDos.ca4 ||0}</td>
                                    <td>{curDos.exam ||0}</td>
                                    <td>{curDos.total ||0}</td>
                                    <td>{curDos.grade ||'F'}</td>
                                    <td>{curDos.subjectPosition}</td>
                                    <td>{curDos.grade ||'F'}</td>
                                </tr>
                                ))
                            )
                        }
                        
                     
                         
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
                        {
                            dos[2].length>=1&&(
                                <tbody>
                            <tr>
                                <td>Punctuality</td>
                                <td>{dos[2][0].punctuality}</td>
                            </tr>
                            <tr>
                                <td>Neatness</td>
                                <td>{dos[2][0].neatness}</td>
                            </tr>
                            <tr>
                                <td>Hard Working</td>
                                <td>{dos[2][0].hardWorking}</td>
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
                            )
                        }
                        
                        
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
                        <td>{dos[2][0].remarks}</td>
                    </tr>
                </table>
            </div>
            
            <center><img src={Signature}/></center>
        </div>
           ))
       )
   }
    
    </div>
        </StyledAttendance>
    )
}
