import { Github, Instagram, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            
            
            
            <footer className="py-4 items-center text-center justify-center"> <h1>Wanna work together?</h1>
             <h2>Ping on these to connect 🚀</h2>
            <div className="container items-center text-center justify-center flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                {/* Connect? */}
           
                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a rel="noopener noreferrer" href="https://github.com/narinderkmaurya" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                            <Github />
                        </a>
                        <a rel="noopener noreferrer" href="https://t.me/narinderkmaurya" title="Telegram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                            <Send />
                        </a>
                        <a rel="noopener noreferrer" href="https://linkedin.com/in/narinderkmaurya" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                            <Linkedin />
                        </a>
                        <a rel="noopener noreferrer" href="mailto:narinder06@pm.me" title="Mail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                            <Mail />
                        </a>
                        <a rel="noopener noreferrer" href="https://twitter.com/narinderkmaurya" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                            <Twitter />
                        </a>
                        <a rel="noopener noreferrer" href="https://instagram.com/narinderkmaurya" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    
        </div>
    )
}

export default Footer