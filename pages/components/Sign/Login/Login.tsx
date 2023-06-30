import LoginForm from './form';


const Login = () => {

    return (
  
        <div className='container items-center'>
            <div className='w-full px-6'>
                <h2 className='font-bold text-2xl'>Sign in</h2>
                <div className='text-sm pt-2 mb-6'>Enter your credentials to proceed</div>
                <LoginForm/>
            </div>
        </div>
        
  
    );
}
export default Login;