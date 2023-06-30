import React, {useRef, useState} from 'react';
import Link from 'next/link';
import { menuItems } from './Sidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';


export type menuItems={
   href:string;
   name:string;
   subMenus:string;
   menuItem:string;
   exact:true;
   url?:string;
};

const MenuItem = (props) => {
    const {name, subMenus, iconClassName,icon, iconClosedClassName, onClick, to,href, exact, linkName, menuItem, subMenuBlank,url}= props;

    const[expand, setExpand,]= useState(false);

    return (
        <li  onClick={props.onClick}>
            <a href={"/"}  onClick={()=>{
               setExpand((e) => !e); 
            }} className={`menu-item`}>{menuItem}
                <div className='icon'>
                <i className=''> <FontAwesomeIcon icon={icon}/></i>  
                <span className={'link-name'}>{linkName}</span>
                <ul className='sub-menu blank'>{subMenuBlank}</ul>
                </div>
            </a>
            {subMenus && subMenus.length > 0 ? (
                <ul className={'sub-menu'}>
                    {subMenus.map((menu, index) => (
                        <li key = {index}>
                           <div className={menu.subMenuBlank}>{subMenuBlank}</div>
                            <Link href={menu.url} >{menu.name}</Link>
                        </li>
                    ))}
                </ul>
                
            ): null}

        </li>
    );
};

export default MenuItem;