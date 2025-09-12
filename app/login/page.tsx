"use client";
import Image from 'next/image';
import Link from 'next/link';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';


export default function LoginForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleConfirmPass, setIsVisibleConfirmPass] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const confirmPasstoggleVisibility = () => {
        setIsVisibleConfirmPass(!isVisibleConfirmPass);
    }
    return (
        <>
            <div className="h-screen p-8">
                Register Form
                <div className="h-full rounded-md flex flex-row">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image src='/images/register.png' alt='programming' width={500} height={500} />
                    </div>
                    <div className="w-1/2 p-24 bgregform">
                        <h1 className='pb-16'>Login an account</h1>
                        <form action="" className='flex flex-col justify-center input-form'>
                            <label htmlFor="">Email</label>
                            <div className='relative w-full'>
                                <input type="text" className='w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-0' placeholder='Email' />
                                <EmailOutlinedIcon className="input-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                            <br />
                            <label htmlFor="">Password</label>
                            <div className='relative w-full'>
                                <input type={isVisible ? "text" : "password"} className='w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-0' placeholder='Password' />
                                <button type="button" onClick={toggleVisibility} >
                                    {isVisible ? <RemoveRedEyeOutlinedIcon className="input-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" /> :
                                        <VisibilityOffOutlinedIcon className="input-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />}
                                </button>
                            </div>
                            <div className='flex items-center space-x-2 pt-8 pb-8'>
                                <input
                                    type="checkbox"
                                    id="myCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <p className=''>I accept the</p>
                                <Link href="/dashboard" className='terms'>Terms and Conditions</Link>
                            </div>
                            <button className='btnreg w-24 rounded-md py-2 px-4'>Signin</button>
                        </form>
                        <div className='flex space-x-2 pt-32'>
                            <p>Already have an account?</p>
                            <Link href="/register" className='terms'>Register here</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}