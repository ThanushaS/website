import React, { ReactNode } from 'react';
import PropTypes from "prop-types";
import { ButtonType } from '../../types';

interface iProps{
    children?:ReactNode;
    type?: ButtonType;
    onClick?:()=>void;
    className?: string;
    variant?: string;
    size?:string;
}

const Button = ({children, type=ButtonType.Button,className='',size="default", variant="default", onClick}:iProps) => {
  

    const btnVariant:any = {
        primary:'bg-blue hover:bg-blue-alt',
        default:'bg-purple hover:opacity-75',
        success:'bg-green hover:bg-green-alt',
        danger:'bg-red hover:bg-red-alt'
    }

    const btnSize:any = {
        small:  `py-1 px-4 text-xs`,
        default: `py-2 px-6 text-sm`
    }

    const btnClass=`text-white  font-medium block cursor-pointer rounded-sm ${className } ${btnSize[size]} ${btnVariant[variant]}`

    return (
        <button 
            type={type} 
            className={btnClass}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes={
    children: PropTypes.node,
    type:PropTypes.oneOf(['button', 'submit']),
    onclick:PropTypes.func,
    className:PropTypes.string
}
export default Button;