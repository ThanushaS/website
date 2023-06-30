import React,{useState} from 'react'
import Link from 'next/link';
import Login from '../../login/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
const Settings = () => {
   const otherNavs = [
      {
         name:'settings',
         label:'Settings',
         icon: "bi bi-gear-fill",
         url:'/components/Settings/Settings',
         subMenu:[
      
         { 
            name:'View',
            label:'View',
            icon: 'bi-envelope-fill',
            url:'/Settings/View'
         },
         { 
            name:'View',
            label:'View',
            icon: 'bi-envelope-fill',
            url:'/Settings/View'
         }
         ]
     },
   ]
   
const [settingsMenuActive, setSettingsMenuActive] = useState(false);
   const handleOtherNav = (nav:{name: string}) => {
      if(nav.name === 'settings'){
          setSettingsMenuActive(true)
      }
   }
  return (
   <div>
      <ul className='othernav' style={{marginLeft:"-50px",marginRight:'10px',marginBottom:'0px', alignItems:''}}>
         {
         otherNavs.map(onav=>{
            return (
            <li key={onav.label} className='setting-item mb-2'style={{marginTop:'5px', marginLeft:'-1px'}} onClick={()=>handleOtherNav(onav)}>
               <Link href={onav.url}>
                  <span className='item '>
                     <i className={onav.icon}style={{color:'rgba(97, 103, 114, 1)',marginLeft:'-25px',marginTop:'5px'}} />
                  </span>
               </Link>
            </li>
            )
         })
         }
      </ul>
   </div>
  )
}

export default Settings