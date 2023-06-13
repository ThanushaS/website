import React, {useState} from 'react';
import Image from 'next/image';
import { icons } from 'react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LogoutIcon from '../../assets/icons/icon-logout.svg';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';

export interface Header{
   Url?:string,
   href:string,
   
}
const Navbar = () => {
   const navMenus=[
      {
         name:'messages',
         label:'Messages',
         icon: 'bi-envelope-fill',
         url:'/components/Header/Messages',

     },
     {
         name:'notification',
         label:'Notification',
         icon: 'bi-bell-fill',
         url:'/components/Header/Notification'

     },
    
    

   ]

   
const [settingsMenuActive, setSettingsMenuActive] = useState(false);
   const handlenavMenus = (nav:{name: string}) => {
      if(nav.name === 'settings'){
          setSettingsMenuActive(true)
      }
  }


  return (
<div className= 'navbar navbar navbar-expand-lg   py-4 px-1 sticky-top' >
   <div className=" item d-flex align-items-center">
      <i className=" bi bi-list  primary-text fs-4 me-3"  ></i>
   </div>
   <div className="search-controller">
            <button className="search-btn">
                <i className="bi bi-search"></i>
            </button>
                  <input type="text" placeholder="Search..." />
  </div>
   <nav>
    { /*   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>*/}
 
      <ul className='navbar-nav mb-lg-0' style={{marginLeft:'68px'}}>
 
         {
         navMenus.map(navM=>{
            return(
            <li className='item' key={navM.name}onClick={()=>handlenavMenus(navM)}>
               <a href={navM.url}>
               <span className='item'><i className={navM.icon}/>
               <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger   rounded-circle" />
               </span>
               </a>
            </li>
                  )
               })
         }
         <Settings/>
         <Profile/>
      </ul>
   
           {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0ms-auto mb-2 mb-lg-0">
              <div className='items'>
                <div className="item">
                  <i className="bi bi-envelope-fill"></i>
                  <div className='counter'></div>         
                </div>
                <div className="item">
                  <i className="bi bi-bell-fill"></i>
                  <div className='counter'></div>        
                </div> 
                   <div className="item">               
                      <i className="bi bi-gear-fill"></i>                  
                  </div>
                  <div className="item">
                  <img src="/user.jpg"alt="user"  className="avatar"/>
                     <div className="name-job">
                      <div className="profile_name">John</div>
                      <div className="mail">cod@gmail.com</div>
                    </div>
                  </div>
                  </div>
                           </ul>*/}
   </nav>     
</div>
  )
}

export default Navbar
