import React, {useState} from 'react';
import Image from 'next/image';
import { icons } from 'react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LogoutIcon from '../../assets/icons/icon-logout.svg';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import Login from '../Settings/Login';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
const navlogin=[
  { 
    name:'Login',
    label:'Login',
    icon: faRightToBracket,
    url:'/components/Sign/Login/Login'
 },
   
]
   
const [settingsMenuActive, setSettingsMenuActive] = useState(false);
   const handlenavMenus = (nav:{name: string}) => {
      if(nav.name === 'settings'){
          setSettingsMenuActive(true)
      }
  }

  const [loginsMenuActive, setLoginMenuActive] = useState(false);
   const handlenavlogin = (nav:{name: string}) => {
      if(nav.name === 'login'){
          setLoginMenuActive(true)
      }
  }


  return (
<div className= 'sticky-top' >
  {/* <div className=" item d-flex align-items-center">
      <i className=" bi bi-list  primary-text fs-4 me-3"  ></i>
   </div>*/}

   <nav className='navbar navbar-expand-lg'>
            <div className="search-controller">
            <button className="search-btn">
                <i className="bi bi-search"></i>
            </button>
                  <input type="text" placeholder="Search..." />
            <div className='text'></div>
</div>
      <div className='sm'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className='navbar-nav me-auto mb-2 mb-lg-0' >
     
         {
         navMenus.map(navM=>{
            return(
            <li className='nav-item' key={navM.name} onClick={() => handlenavMenus(navM)}>
                <a href={navM.url}>
                  <span className='item'style={{marginLeft:'110px'}}><i className={navM.icon}style={{color:'rgba(97, 103, 114, 1)',marginLeft:'-55px'}} />
                    <span className="  top-0  start-100 translate-middle p-1 bg-danger   rounded-circle" />
                  </span>
                </a>
              </li>
           
                  )
               })
         }

          
         <Settings/>
         {
                navlogin.map(navl=>{
                  return(
                    <li className='nav-item' key={navl.name} onClick={()=> handlenavlogin(navl)}>
                      <a href={navl.url}>
                        <span className='item'>
                          <i className={navl.icon}style={{color:'rgba(97, 103, 114, 1)',marginLeft:'-25px'}} >
                        <FontAwesomeIcon icon={navl.icon}style={{color:'rgba(97, 103, 114, 1)',marginLeft:'-20px'}}/></i> 
                        </span>
                      </a>
                    </li>
                  )
                })
               }
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
                           </div>
      </div>
   </nav>     
</div>
  )
}

export default Navbar
