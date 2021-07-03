import { Button } from '@material-ui/core'
import React,{useContext,useState,useRef} from 'react'
import Passport from './101.jpeg'
import './profile.css'
import AppContext from '../../Context/app/appContext'
import {useReactToPrint} from 'react-to-print'
import Avatar from '@material-ui/core/Avatar';
import { Upload, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { notification } from 'antd';

export default function MainProfile() {
    const componentRef=useRef()
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        copyStyles:true
    
    })
    const appProps=useContext(AppContext)
    const myImage = appProps.user.user.image.split('/')
    const myRealImage=myImage.splice(1,2).join('/')
    const appImage=`https://polar-brook-59807.herokuapp.com/${myRealImage}`;
    console.log(myRealImage)
    
    return (
             <div ref={componentRef} id="container-fluid">
        {/* <img className="profile-pic" src='https://polar-brook-59807.herokuapp.com/public/images/musty-avatar.jpg' /> */}
       <div className='profile-pic'>
       <Avatar style={{width:'100%',height:'100%'}} alt={appProps.user.user.firstName} src={appImage} />   
        </div>     
        <div className="cover-page-section">
            <div className="btn-container">
            <Upload 

            beforeUpload={(file)=>{
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');}
            }}
    action={`https://polar-brook-59807.herokuapp.com/admin/set-profile-pic/?id=${appProps.user.user._id}`}
    name='profile_pic'
    method='PUT'
   

    onChange={(info)=>{
      if (info.file.status !== 'uploading') {
        console.log('rrr');
      }
      if (info.file.status === 'done') {
        const idd=info.file.response.message.insertedId
        message.success(`${info.file.name} file uploaded successfully`);
        // setId(idd)
        
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }}
   
    >
    <Button icon={<UploadOutlined />}>Upload A Profile picture</Button>
  </Upload>
            <Button onClick={handlePrint} style={{marginLeft:'20px'}} variant='contained'>Print Profile</Button>
            </div>
        </div>
        <div  className="profile-pic-section">
          
         <table className="profile-detail">
             <tr>
                 <td>STAFF ID:</td>
                 <td>{appProps.user.user.username ||'None Set'}</td>
             </tr>
             <tr>
                <td>FULL NAME:</td>
                <td>{`${appProps.user.user.firstName+' '+appProps.user.user.lastName ||'None Set'}`}</td>
            </tr>
            <tr>
                <td>EMAIL</td>
                <td>{appProps.user.user.email || 'None set'}</td>
            </tr>
            <tr>
                <td>ROLE</td>
                <td>{appProps.user.role.map(rl=>(`${rl+'**'}`))}</td>
            </tr>
         </table>
       
        </div>
        <div className="other-editable-info">
            <input className='profileInp' type="text" value={appProps.user.user.username ||'None Set'} disabled/>
            <input className='profileInp' type="text" value={`${appProps.user.user.firstName+' '+appProps.user.user.lastName  ||'None Set'}`} disabled/>
            <input className='profileInp' type="text" value={appProps.user.role.map(rl=>(`${rl+'**'}`))} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.email || 'None set'}/>
            <input className='profileInp' type="text" value={appProps.user.role.includes('Teacher')?'Academics':'Non Academics'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.department || 'None Set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.phone || 'None Set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.address || 'None Set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.country.toUpperCase() || 'None set'} disabled/>
            <input className='profileInp' type="text" value={appProps.user.user.state||'State Not Set'} disabled/>
            
        </div>
        <div  className="change-password-section">
            <div className="change-pwd">
               
                <input className='profileInp' type="submit" value="Change Password"/>
            </div>
            <div className="password-setting-section">
                <span>If You dont want to change your password click on the change
                    password button to terminate
                </span>
             
                <input className='profileInp' type="password" placeholder="please enter old password here"/>
         
           <input className='profileInp' type="password" placeholder="enter new password here"/>
           
           
            <input className='profileInp' type="password" placeholder="confirm new password "/>
            </div>
           
        </div>
       
       

        </div>
    )
}
