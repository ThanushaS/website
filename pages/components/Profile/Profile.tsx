import { profile } from 'console';
import React from 'react'

const Profile = () => {


  return (
   <div>
    
     <div className='profile_details'>
          <img src="/user.jpg"alt="user"  className="avatar"style={{marginTop:''}}/>
         <div className="name-job" style={{marginLeft:'50px',marginTop:'-30px',alignItems:'center'}}>
         <div className="profile_name" style={{marginTop:'',width:'62px',height:'14px',top:'21px'}}>John</div>
         <div className="mail" style={{marginTop:''}}>cod@gmail.com</div>
  </div>
  </div>
  </div>
  )
}

export default Profile