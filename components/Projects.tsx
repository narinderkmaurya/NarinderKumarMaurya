import { Github, Instagram, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div>
            <div id='projects' className='px-4 md:px-32 grid grid-cols-1 md:grid-cols-4 py-4 md:py-20 gap-4'>
                <div className='col-span-1 md:col-span-1 hidden lg:block'>
                    <h1 className='text-2xl md:text-3xl dark:text-sky-500 font-semibold pt-4'>Let&apos;s Connect</h1>
                    <div className='pt-4 dark:text-muted-foreground gap-2 flex flex-col'>
                        <div className=' flex flex-row gap-2 items-center text-lg  text-gray-700 dark:text-gray-300 '><Github /><Link className='hover:text-sky-600' href="https://github.com/narinderkmaurya">@narinderkmaurya</Link></div>
                        <div className=' flex flex-row gap-2 items-center text-lg  text-gray-700 dark:text-gray-300 '><Send /><Link className='hover:text-sky-600' href="https://t.me/narinderkmaurya">@narinderkmaurya</Link></div>
                        <div className=' flex flex-row gap-2 items-center text-lg  text-gray-700 dark:text-gray-300 '><Linkedin /><Link className='hover:text-sky-600' href="https://linkedin.com/in/narinderkmaurya">@narinderkmaurya</Link></div>
                        <div className=' flex flex-row gap-2 items-center text-lg  text-gray-700 dark:text-gray-300 '><Mail /><Link className='hover:text-sky-600' href="mailto:narinder06@pm.me">narinder06@pm.me</Link></div>
                        <div className=' flex flex-row gap-2 items-center text-lg  text-gray-700 dark:text-gray-300 '><Twitter /><Link className='hover:text-sky-600' href="https://twitter.com/narinderkmaurya">@narinderkmaurya</Link></div>
                        <div className=' flex flex-row gap-2 items-center text-lg  text-gray-700 dark:text-gray-300 '><Instagram /><Link className='hover:text-sky-600' href="https://instagram.com/narinderkmaurya">@narinderkmaurya</Link></div>
                    </div>
                </div>
                <div data-aos="slide-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000" className='col-span-1 md:col-span-3 rounded-md bg-gray-400/20 dark:bg-gray-300/10  p-4'>
                    <h1 className='text-2xl md:text-3xl font-semibold dark:text-sky-500 pb-4'>Projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>

                        <div data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="2000" className='col-span-1  rounded-md bg-gray-400/20 dark:bg-gray-300/10 px-4 py-4'>
                            <h1 className=' font-semibold text-2xl flex flex-row justify-between'>ImageForge  <Button variant="outline"><Link href="https://github.com/narinderkmaurya/ImageFORGE" >View</Link></Button></h1>
                            <p className='pt-2 dark:text-muted-foreground pb-4'>Image Forge is a MERN (MongoDB, Express.js, React.js, Node.js) stack application powered by AI to generate unique and engaging images. By simply inputting prompts, users can create captivating AI a… </p>

                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="2000" className='col-span-1  rounded-md bg-gray-400/20 dark:bg-gray-300/10 px-4 py-4'>
                            <h1 className=' font-semibold text-2xl flex flex-row justify-between'> IEEE-23-Conference  <Button variant="outline"><Link href="https://github.com/narinderkmaurya/IEEE-23-Conference" >View</Link></Button></h1>
                            <p className='pt-2 dark:text-muted-foreground pb-4'> IEEE WCONF&apos;23, IEEE World Conference on Communication & Computing , created this website for NITJ.</p>

                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="2000" className='col-span-1  rounded-md bg-gray-400/20 dark:bg-gray-300/10 px-4 py-4'>
                            <h1 className=' font-semibold text-2xl flex flex-row justify-between'> Dit Inaugurator  <Button variant="outline"><Link href="https://github.com/narinderkmaurya/Dit_Inaugurator" >View</Link></Button></h1>
                            <p className='pt-2 dark:text-muted-foreground pb-4'>A simple text to morse code converter. This website converts basic english language text into morse code and can also decrypt the code back into a readable text form. There is also a custom feature involved with encrypts the text into emojis and vice versa.</p>

                        </div>

                    </div>
                    <div>
                        <h1 className='pt-4 text-md '>P.S. - To view all the repositories, view my GitHub Profile <Link className='text-sky-600' href="https://github.com/narinderkmaurya?tab=repositories">here</Link>.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects