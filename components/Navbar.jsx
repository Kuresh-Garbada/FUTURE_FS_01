import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const sideMenuRef = useRef()

  // Scroll listener for shadow and active section
  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50)

      const sections = ['top', 'about', 'services', 'work', 'contact']
      let current = 'top'
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On mount, check if user prefers dark mode or saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  // Function to conditionally add active styles
  const getLinkClass = (section) =>
    `font-ovo font-medium ${
      activeSection === section ? 'text-blue-600 underline' : ''
    }`

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
       flex items-center justify-between z-50 ${
         isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ' : ' '
       }`}
      >
        <p className='custom-text'>KURESH</p>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${isScroll ? '' : ' bg-white shadow-sm bg-opacity-50'}`}
        >
          <li>
            <a className={getLinkClass('top')} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className={getLinkClass('about')} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className={getLinkClass('services')} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className={getLinkClass('work')} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className={getLinkClass('contact')} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} aria-label='Toggle Dark Mode'>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt='Toggle Dark Mode'
              className='w-6'
            />
          </button>

          <a
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo font-medium'
            href='#contact'
          >
            Contact <Image src={assets.arrow_icon} className='w-3' alt='' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* ------------- mobile menu ------------- */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
          top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li>
            <a className={getLinkClass('top')} onClick={closeMenu} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className={getLinkClass('about')} onClick={closeMenu} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className={getLinkClass('services')} onClick={closeMenu} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className={getLinkClass('work')} onClick={closeMenu} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className={getLinkClass('contact')} onClick={closeMenu} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
