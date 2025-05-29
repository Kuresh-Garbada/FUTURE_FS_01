import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <p className="custom-text">KURESH</p>

      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-13 py-3'>
        <li><a className='font-ovo font-medium' href="#top">Home</a></li>
        <li><a className='font-ovo font-medium' href="#about">About me</a></li>
        <li><a className='font-ovo font-medium' href="#services">Services</a></li>
        <li><a a className='font-ovo font-medium' href="#work">My Work</a></li>
        <li><a a className='font-ovo font-medium' href="#contact">Contact me</a></li>
      </ul>

      <div>
        <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo font-medium' href="#contact">
          Contact <Image src={assets.arrow_icon} className='w-3' alt="" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
