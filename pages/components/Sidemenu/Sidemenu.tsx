import React,{useEffect,useState} from 'react';
import MenuItem from './MenuItem';
import Logo from '../Logo'; 
import{BsFillEmojiSunglassesFill,BsFillMegaphoneFill,BsFillBriefcaseFill} from 'react-icons/bs'
import{MdDashboard} from 'react-icons/md'
import{FaUsers,FaShoppingCart} from 'react-icons/fa'
import{GiChampions} from 'react-icons/gi'
import {HiUsers} from 'react-icons/hi'
import {SiConan} from 'react-icons/si'

export const menuItems=[
  {
   name:"",
    url:'/',
    iconClassName:MdDashboard,
    subMenuBlank:"",
  },
 {
  name:"Teams",
  url:'/Teams',
  iconClassName:FaUsers,
  subMenuBlank:"Teams",

  subMenus: [
    { name: "Pro Teams", url: "/components/Sidemenu/dashboard/teams/ProTeams" },
  ],
 },
 {
  name: "SponsorPerks",
  url: `/sponsorPerks`,
  iconClassName:BsFillMegaphoneFill,

   subMenuBlank:"sponsor Perks",

  subMenus: [
    { name: "Brand Sponsor", url: "/components/Sidemenu/dashboard/sponsorPerks/BrandSponsor" }, 
  ],
},
{
   name:"Teams",
   url:'/Teams',
   iconClassName:HiUsers,

   subMenuBlank:"Teams",
 
   subMenus: [
     { name: "Pro Teams", url: "/components/Sidemenu/dashboard/teams/ProTeams" },
   ],
  },
  {
   name:"Teams",
   url:'/Teams',
   iconClassName:GiChampions,

   subMenuBlank:"Teams",
 
   subMenus: [
     { name: "Pro Teams", url: "/components/Sidemenu/dashboard/teams/ProTeams" },
   ],
  },
  {
   name:"Teams",
   url:'/Teams',
   iconClassName:FaShoppingCart,

   subMenuBlank:"Teams",
 
   subMenus: [
     { name: "Pro Teams", url: "/components/Sidemenu/dashboard/teams/ProTeams" },
   ],
  },
  {
   name:"Teams",
   url:'/Teams',
   iconClassName:BsFillBriefcaseFill,

   subMenuBlank:"Teams",
 
   subMenus: [
     { name: "Pro Teams", url: "/components/Sidemenu/dashboard/teams/ProTeams" },
   ],
  },
  {
   name:"Teams",
   url:'/Teams',
   iconClassName:SiConan,

   subMenuBlank:"Teams",
 
   subMenus: [
     { name: "Pro Teams", url: "/components/Sidemenu/dashboard/teams/ProTeams" },
   ],
  },
];

const Sidebar = ({children}) => {
    const[inactive, setInactive]=useState(false);

    useEffect(() => {
      if (inactive) {
        removeActiveClassFromSubMenu();
      }
      //props.onCollapse(inactive);
    }, [inactive]);
  
    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menus").forEach((el) => {
        el.classList.remove("active");
      });
    };
    useEffect(() => {
      let menuItems = document.querySelectorAll(".link-name");
      menuItems.forEach((el) => {
        el.addEventListener("click", (e) => {
          const next = el.nextElementSibling;
          removeActiveClassFromSubMenu();
          menuItems.forEach((el) => el.classList.remove("active"));
          el.classList.toggle("active");
          console.log(next);
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, [inactive]);
    
    return (
    <div className=' wrapper-fluid position-relative d-flex p-0'>
      <div className={`sidebar ${inactive ? "inactive" : ""}`}id="menu-toggle" >
    
        <div className="logo-details">
          <div className=''style={{alignItems:'center',marginLeft:'40px'}}><Logo/></div>
          </div>
         
          <ul className="nav " style={{marginTop:''}}>
            {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              //exact={menuItem.exact}
              url={menuItem.url}
               //linkName={menuItem.linkName}
              subMenuBlank={menuItem.subMenuBlank}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
            {/*<li className='list-group list-group-flush my-3'>
                    <a href="/overview">
                      <i className="bi bi-grid fs-5 me-2"></i>
                    <span className="link-name fs-5">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a class="link-name" href="">Dashboard</a></li>
                    </ul>
                </li>
                <li>
                  <div className="icon">
                    <a href="#">
                      <i className='bx bx-collection'></i>
                      <span className="link-name">Category</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu">
                    <li><a className="link-name" href="#">Category</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Card Design</a></li>
                    <li><a href="#">Login Form</a></li>
                  </ul>
                </li>*/}

   
      <li>
        <div className="p-del">
          <div className="profile-content">
            <img src='/user.jpg' alt="user"/>
          </div>
        
        <div className="name-job">
          <div className="profile_name">John</div>
          <div className="job">Web Desginer</div>
        </div>
        <i onClick={()=>{setInactive(!inactive);}} className='bi bi-box-arrow-left'></i>
      </div>
      </li>
      
    </ul>
     </div>
    <main className='ml-20 w-full'>{children}</main>
     </div>
     
                
    
    );
};


export default Sidebar