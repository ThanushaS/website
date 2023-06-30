"use client"
import { ButtonType, InputType } from '../../../types';
import Button from '../../Button';
import Checkbox from '../../Checkbox';
import Input from '../../Input';
import Link from 'next/link';
import React, { useState } from 'react';


interface iErrors{
    email:string | null;
    password: string | null;
}

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] =  useState<iErrors | null>(null);

    const validation = () => {
        const _errors:iErrors = {email:'', password:''};
        const emailRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email) _errors.email = "Please enter an email address";
        else if(!emailRegex.test(email)) _errors.email="Invalid email address";
        if(!password) _errors.password = "Please enter a password";
        setErrors(_errors);
        return _errors;
    }
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasError:iErrors = validation();
        if(hasError.email || hasError.password) return false;
        alert("Validated");
    }
    return(
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className='mb-2'>
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
                <div className='mb-4'>
                    <Input 
                        name="password"
                        type={InputType.Password}
                        label='Password' 
                        placeholder="Enter password" 
                        value={password}
                        error={errors?.password ?? ''}
                        onChange={
                            (event:React.ChangeEvent<HTMLInputElement>)=>setPassword(event.target.value)
                        }/>
                </div>
                <div className='mb-4'>
                    <div className=''style={{alignItems:''}}>
                    <label>
                      <input type="checkbox"  name="remember"/> Remember me
                    </label>

                        <Link href={'/components/Sign/forgot-password/ForgotPassword'} className='check'>Forgot Password?</Link>
                    </div>
                </div>
                <Button type={ButtonType.Submit}>Sign In</Button>
            </form>
        </div>
    )
}
export default LoginForm;