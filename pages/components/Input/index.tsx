import React, { ChangeEvent } from 'react';
import PropTypes from "prop-types";
import { InputType } from '../../types';


interface iInput{
    label?: string;
    labelClass?:string;
    inputClass?: string;
    type?: InputType;
    value?: string;
    name?:string;
    placeholder?:string;
    disabled?:boolean;
    error?:string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>)=> void;
}


const Input = ({label='', labelClass='', inputClass='',name='input',value='',placeholder='',disabled=false, error='', type=InputType.Text, onChange}:iInput) => {
    const labelClassName=`block text-sm mb-[4px] text-gray-600 ${labelClass}`;
    const inputClassName= `min-h-[45px] border  rounded-sm w-full outline-none px-4 ${inputClass} ${error?'border-orange':'border-gray-300'}`

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(typeof onChange === 'function') onChange(event)
    }
    return(
    <div>
        {label && <label className={labelClassName}>{label}</label>}
        <input 
            type={type} 
            name={name}
            value={value}
            className={inputClassName} 
            placeholder={placeholder} 
            disabled={disabled} 
            onChange={handleChange}/>
        {error && <p className='text-orange text-sm'>{error}</p>}
    </div>
)}

Input.propTypes = {
    label:PropTypes.string,
    labelClass: PropTypes.string,
    inputClass: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    value: PropTypes.string,
    placeholder: PropTypes.string,
    disabled:PropTypes.bool,
    onChange: PropTypes.func,
    error: PropTypes.string
};
  

export default Input;