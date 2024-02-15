import { Button, Input, Tooltip, Typography } from '@material-tailwind/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import '../styles/login.css';
import GoogleIcon from '../components/icons/google';
import GithubIcon from '../components/icons/github';
import ErrorMessage from '../components/errorMessage';

interface FormInput {
    email: string;
    password: string;
}

export default function Login() {
    const navigate = useNavigate();
    const { register, formState: { isValid, errors } } = useForm<FormInput>({
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    });
    const registerEmail = register('email', { required: 'Email Id is mandatory.' });
    const registerPassword = register('password', {
        required: 'Password Id is mandatory.',
        minLength: {
            value: 8,
            message: 'Password should have minimum 8 characters.',
        }
    });

    const loginHandler = () => {
        navigate('/');
    };

    return (
        <div className='login-app'>
            <div className='login-container'>
                <Typography variant='h4' className='text-center'>
                    Portfolio Insights
                </Typography>
                <form className='my-4 w-96 max-w-screen-lg'>
                    <div className='flex flex-col gap-6'>
                        <ErrorMessage messageList={Object.values(errors).map(({ message }) => message || '')} />
                        <div>
                            <Typography variant='h6'>Email</Typography>
                            <Input
                                crossOrigin=''
                                size='lg'
                                color='white'
                                className={errors.email ? '!border-red-500' : '!border-white'}
                                {...registerEmail}
                                labelProps={{
                                    className: 'hidden',
                                }}
                            />
                        </div>
                        <div>
                            <div className='flex gap-1'>
                                <Typography variant='h6'>Password</Typography>
                                <Tooltip content='Password should have 8 characters' placement='bottom'>
                                    <InformationCircleIcon className='h-4' />
                                </Tooltip>
                            </div>
                            <Input
                                crossOrigin=''
                                type='password'
                                size='lg'
                                color='white'
                                className={errors.password ? '!border-red-500' : '!border-white'}
                                {...registerPassword}
                                labelProps={{
                                    className: 'hidden',
                                }}
                            />
                        </div>
                    </div>

                    <div className='mt-6 flex gap-4'>
                        <Button
                            className='w-full primary-btn'
                            disabled={!isValid}
                            onClick={loginHandler}
                        >
                            Login
                        </Button>
                        <Button className='w-full outlined-btn' variant='outlined'>
                            Register
                        </Button>
                    </div>

                    <div className='mt-6 flex gap-4'>
                        <Button className='w-full text-btn' variant='text'>
                            <div className='flex gap-2 justify-center items-center'>
                                <GithubIcon className='text-btn-icon h-5' />
                                <span>Github</span>
                            </div>
                        </Button>
                        <Button className='w-full text-btn' variant='text'>
                            <div className='flex gap-2 justify-center items-center'>
                                <GoogleIcon className='text-btn-icon h-5' />
                                Google
                            </div>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}