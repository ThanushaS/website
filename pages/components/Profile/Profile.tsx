import { profile } from 'console';
import React,{useState} from 'react'

const Profile = () => {


  return (
   <div>
      <div className='profile_details'>
      {
        
      }
      </div>
     <div className='profile_details'>
          <img src="/user.jpg"alt="user"  className="avatar"/>
         <div className="name-job" style={{marginLeft:'50px',marginTop:'-39px',alignItems:'center'}}>
         <div className="profile_name">John</div>
         <div className="mail">cod@gmail.com</div>
  </div>
  </div>
  </div>
  )
}

export default Profile