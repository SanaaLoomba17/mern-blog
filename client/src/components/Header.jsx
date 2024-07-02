import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 p-4'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sahand's
        </span>
        Blog
      </Link>
      <form className='relative hidden lg:block lg:flex-grow mx-auto max-w-sm'>
        <TextInput
          type='text'
          placeholder="Search..."
          className='pr-10 w-full'
        />
        <AiOutlineSearch className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </form>
      <div className='flex items-center gap-2'>
        <Link to='/'>
          <button className={`px-4 py-2 ${path === '/' ? 'font-semibold text-blue-500' : ''}`}>
            Home
          </button>
        </Link>
        <Link to='/about'>
          <button className={`px-4 py-2 ${path === '/about' ? 'font-semibold text-blue-500' : ''}`}>
            About
          </button>
        </Link>
        <Link to='/projects'>
          <button className={`px-4 py-2 ${path === '/projects' ? 'font-semibold text-blue-500' : ''}`}>
            Projects
          </button>
        </Link>
        <Button color='gray' className='hidden sm:flex items-center justify-center'>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button color='purple' className='ml-2'>
            Sign In
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
