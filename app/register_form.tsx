'use-client'
import Image from 'next/image'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

export default function RegisterForm() {
    return (
        <>
            <div className="h-screen p-8">
                Register Form
                <div className="h-full rounded-md border border-red-400 flex flex-row">
                    <div className="w-1/2 bg-red-200 flex flex-col justify-center">
                        <Image src='/images/register.png' alt='programming' width={500} height={500} />
                    </div>
                    <div className="w-1/2 bg-blue-200">
                        <h1>Create an account</h1>
                        <form action="">
                            <label htmlFor="" >Fullname</label>
                            <input type="text" className='w-full' />
                            <br />
                            <label htmlFor="">Email</label>
                            <input type="text" className='w-full' />
                            <br />
                            <label htmlFor="">Password</label>
                            <input type="text" className='w-full' />
                            <br />
                            <label htmlFor="">CofnirmPassword</label>
                            <input type="text" className='w-full' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}