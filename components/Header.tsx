import Image from 'next/image';
import React from 'react';
import profile from "@/public/profile.jpg";
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='sm:px-32 py-6 sm:py-20 '>

            <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
                {/* PROFILE */}
                <div className='sm:col-span-1'>
                    <Image alt='profile' src={profile} className='md:w-80 md:h-80 w-24 h-24 rounded-full mx-auto object-center object-cover' />
                    <h1 className='pt-2 text-lg font-semibold text-center md:text-center text-sky-600'>Narinder Maurya (he/him)</h1>
                    {/* Center the text in mobile menu */}
                    <h2 className='pt-2 text-center sfont-semibold flex flex-row gap-1 md:justify-center sm:pt-0'>
                        <span className="mx-auto text-center flex flex-row md:mx-0">Punjab, India <MapPin /></span>
                    </h2>
                </div>
                {/* BIO */}
                <div className='rounded-md bg-gray-400/20 dark:bg-gray-300/10 sm:col-span-2 px-6 py-4 flex  '>
                    <div className=''>
                        <div className='dark:text-gray-300 flex flex-row pb-2 text-sm font-mono'>
                            <h1>narinderkmaurya / AboutMe.md</h1>
                        </div>
                        <div className='tracking-wider text-lg sm:text-2xl font-semibold flex flex-col '>
                            <h1 className=" ">Welcome to my portfolio👋, I am Narinder Kumar Maurya</h1>
                            <h2 className=" ">I design websites, write code and publish projects on the internet 🚀 </h2>
                            <p className='text-md sm:text-[20px] dark:text-gray-300 font-normal pt-12'>
                                I am a Web Developer by passion and currently pursuing my prefinal year at NITJ, Punjab, India. I am interested in OpenSource contribution and freelance work.⚡
                            </p>
                        </div>
                        <div className='pt-10'>
                            <Button><Link href="https://rebrand.ly/narinderkmaurya">Resume</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
