import React from 'react';
import ForgotPasswordForm from './form';
import GoBack from '../../GoBack';


const ForgotPassword = () => {
    return (
    <div className="container h-full w-full">
        <div className='px-6  flex items-center h-full'>
            <div className='w-full px-6'>
                <GoBack label='Login' url='/components/Sign/Login/Login'/>
                <h2 className='font-bold text-2xl'>Forgot Password</h2>
                <div className='text-sm pt-2 mb-6'>Enter your email address below to receive a verification link.</div>
                <ForgotPasswordForm/>
            </div>
        </div>
        
    </div>
    );
}
export default ForgotPassword;