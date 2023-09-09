"use client";
import React, { useState } from 'react';
import { ModeToggle } from '@/components/ModeToggle';
import { AlignRight, Code2, FolderGit, Github, Home, Minimize2, UserCircle2 } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className='w-full items-center flex flex-row justify-between sm:px-32 pt-4 '>
        <h1 className='items-center flex flex-row gap-3 text-xl'> narinderkmaurya. </h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {/* Mobile Menu Toggle */}
          <button
            className='text-gray-600 hover:text-gray-900 sm:hidden'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
             <Minimize2/>
            ) : (
              <AlignRight/>
            )}
          </button>
        </div>
      </div>
      <div className='w-full items-center flex text-md flex-row justify-between sm:px-32 py-6 '>
        {/* Responsive Menu for Mobile and Tablets */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col gap-4'>
            <li className='flex font-semibold items-center gap-2'>
              <Home size={18} color='grey' />
              <Link href='/'>Home</Link>
            </li>
            <li className='flex font-semibold items-center gap-2'>
              <FolderGit size={18} color='grey' />
              <Link href='#projects'>Projects</Link>
            </li>
            <li className='flex font-semibold items-center gap-2'>
              <UserCircle2 size={18} color='grey' />
              <Link href='#contact'>Contact</Link>
            </li>
            <li className='flex font-semibold items-center gap-2'>
              <Code2 size={18} color='grey' />
              <Link href='#skills'>Skills</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex sm:flex-row gap-8'>
          <li className='flex font-semibold items-center gap-2'>
            <Home size={18} color='grey' />
            <Link href='/'>Home</Link>
          </li>
          <li className='flex font-semibold items-center gap-2'>
            <FolderGit size={18} color='grey' />
            <Link href='#projects'>Projects</Link>
          </li>
          <li className='flex font-semibold items-center gap-2'>
            <UserCircle2 size={18} color='grey' />
            <Link href='#contact'>Contact</Link>
          </li>
          <li className='flex font-semibold items-center gap-2'>
            <Code2 size={18} color='grey' />
            <Link href='#skills'>Skills</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
