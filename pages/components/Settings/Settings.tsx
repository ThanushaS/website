import React,{useState} from 'react'
import Link from 'next/link';
const Settings = () => {
   const otherNavs = [
      {
         name:'settings',
         label:'Settings',
         icon: "bi bi-gear-fill",
         url:'/components/Settings/View',
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
      <ul className='othernav' style={{marginLeft:"-31px",marginBottom:'-20px', alignItems:''}}>
         {
         otherNavs.map(onav=>{
            return (
            <li key={onav.label} className='item' onClick={()=>handleOtherNav(onav)}>
               <Link href={onav.url}>
                  <span className='item '>
                     <i className={onav.icon} />
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