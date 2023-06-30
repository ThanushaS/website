"use client"
import { ButtonType } from '../../../types';
import Button from '../../Button';
import Input from '../../Input';

import React, { useState } from 'react';

interface iErrors{
    email:string | null;
}

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] =  useState<iErrors | null>(null);

    const validation = () => {
        const _errors:iErrors = {email:''};
        const emailRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email) _errors.email = "Please enter an email address";
        else if(!emailRegex.test(email)) _errors.email="Invalid email address";
        setErrors(_errors);
        return _errors;
    }
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasError:iErrors = validation();
        if(hasError.email) return false;
        alert("Validated");
    }
    return(
        <div className='container w-full'>
            <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                    <Input 
                        name="email"
                        label='Email Address' 
                        value={email}
                        placeholder="Enter email address" 
                        error={errors?.email ?? ''}
                        onChange={
                            (event:React.ChangeEvent<HTMLInputElement>)=>setEmail(event.target.value)
                        }/>
                </div>
                <Button type={ButtonType.Submit}>Submit</Button>
                
            </form>
        </div>
    )
}
export default ForgotPasswordForm;