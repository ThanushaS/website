import React from 'react';
import PropTypes from "prop-types";
import Image from 'next/image';
import CheckIcon from '../../assets/icons/icon-check-white.svg';
import { InputType } from '../../types';

interface iInput{
    label?: string;
    labelClass?:string;
    inputClass?: string;
    type?: InputType;
    name?: string;
    checkboxId?:string;
    checked?:boolean;
    disabled?:boolean;
    onChange:()=> void;
}


const Checkbox = ({label='', labelClass='', inputClass='',checked=false, checkboxId='chkbox-1', disabled=false, name='checkbox', type=InputType.Checkbox, onChange}:iInput) => {
    const labelClassName=`block text-sm text-gray-600 cursor-pointer flex items-center ${labelClass}`;
    
    let checkboxClass =`cursor-pointer p-[10px] border block  relative rounded-sm mr-2 ${checked?' bg-blue border-blue ':' bg-white  border-gray-300 '} ${inputClass}`;
    if(type === InputType.Radio){
        checkboxClass +=' rounded-full';
    }   
    return(
    <div>
        <label className={labelClassName} htmlFor={checkboxId ?? name} aria-disabled={disabled}>
            <input type={type} name={name} id={checkboxId ?? name} className='h-0 w-0 opacity-0 absolute top-0 left-0' disabled={disabled} onChange={onChange}/>
            <span className={checkboxClass}>
                <span className='absolute inset-0 p-[4px]'>
                    <Image
                    src={CheckIcon} 
                    alt="check" 
                    height="24" 
                    width="24" 
                    className="object-contain object-center w-full h-full"/>
                </span>
            </span>
            {label}
        </label>
    </div>
)}

Checkbox.propTypes = {
    label:PropTypes.string,
    labelClass: PropTypes.string,
    inputClass: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio']),
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string,
    checkboxId: PropTypes.string,
    disabled:PropTypes.bool,
    onChange: PropTypes.func.isRequired
};
  

export default Checkbox;