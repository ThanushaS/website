"use client"
import { ButtonType, InputType } from '../../../types';
import Button from '../../Button';
import Input from '../../Input';
import React, { useState } from 'react';

interface iErrors{
    password:string | null;
    confirmPassword:string | null;
}

const ResetPasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] =  useState<iErrors | null>(null);

    const validation = () => {
        const _errors:iErrors = {password:'', confirmPassword:''};
        if(!password) _errors.password = "Please enter a password";
        if(!confirmPassword) _errors.confirmPassword = "Required";
        else if(password !== confirmPassword) _errors.confirmPassword = "Password & Confirm Password doesnot match";
        setErrors(_errors);
        return _errors;
    }
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasError:iErrors = validation();
        if(hasError.password || hasError.confirmPassword) return false;
        alert("Validated");
    }
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className='mb-2'>
                    <Input 
                        name="password"
                        label='New Password'
                        type={InputType.Password} 
                        value={password}
                        placeholder="Enter Password" 
                        error={errors?.password ?? ''}
                        onChange={
                            (event:React.ChangeEvent<HTMLInputElement>)=>setPassword(event.target.value)
                        }/>
                </div>
                <div className='mb-4'>
                    <Input 
                        name="confirmPassword"
                        label='Confirm New Password' 
                        type={InputType.Password} 
                        value={confirmPassword}
                        placeholder="Enter Password" 
                        error={errors?.confirmPassword ?? ''}
                        onChange={
                            (event:React.ChangeEvent<HTMLInputElement>)=>setConfirmPassword(event.target.value)
                        }/>
                </div>
                <Button type={ButtonType.Submit}>Submit</Button>
                
            </form>
        </div>
    )
}
export default ResetPasswordForm;