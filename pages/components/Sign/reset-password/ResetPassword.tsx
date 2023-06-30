import React from 'react';
import ResetPasswordForm from './form';
import GoBack from '../../GoBack';

const ResetPassword = () => {
    return (
    <div className="h-full">
        <div className='px-6  flex items-center h-full'>
            <div className='w-full px-6'>
                <GoBack label='Login' url='/auth/login'/>
                <h2 className='font-bold text-2xl'>Reset Password</h2>
                <div className='text-sm pt-2 mb-6'>Enter your new password.</div>
                <ResetPasswordForm/>
            </div>
        </div>
        
    </div>
    );
}
export default ResetPassword;