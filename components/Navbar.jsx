import React from 'react'
import Image from 'next/image'
import { assets } from  '@/assets/assets'
s
const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
    flex items -center justify-between z-50'>
        <p class="custom-text">KURESH</p>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-13 py-3'>
            <li> <a href="#top">Home</a></li>
            <li> <a href="#about">About me</a></li>
            <li> <a href="#services">Services</a></li>
            <li> <a href="#work">My Work</a></li>
             <li> <a href="#contact">Contact me</a></li>
           </ul>

              <div>
                     <a href="#contact">Contact <Image src={assets.arrow_icon}  className ='w-3' alt="" /> </a>
             </div>
             
     
    </nav>
   
    </>
  )
}

export default Navbar

 