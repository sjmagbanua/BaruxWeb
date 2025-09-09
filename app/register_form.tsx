"use client";
import Image from 'next/image';
import Link from 'next/link';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { useState } from 'react';

export default function RegisterForm() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <div className="h-screen p-8">
                Register Form
                <div className="h-full rounded-md flex flex-row">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image src='/images/register.png' alt='programming' width={500} height={500} />
                    </div>
                    <div className="w-1/2 p-24 bgregform">
                        <h1 className='pb-16'>Create an account</h1>
                        <form action="" className='flex flex-col justify-center'>
                            <label htmlFor="" >Fullname</label>
                            <input type="text" className='w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-0' />
                            <br />
                            <label htmlFor="">Email</label>
                            <input type="text" className='w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-0' />
                            <br />
                            <label htmlFor="">Password</label>
                            <input type="text" className='w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-0' />
                            <br />
                            <label htmlFor="">CofnirmPassword</label>
                            <input type="text" className='w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-0' />
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
                            <button className='btnreg w-24 rounded-md py-2 px-4'>Register</button>
                        </form>
                        <div className='flex space-x-2 pt-32'>
                            <p>Already have an account?</p>
                            <Link href="/dashboard" className='terms'>Login here</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}