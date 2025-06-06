import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-24">
      
      {/* Profile Image */}
      <div className="mb-4 rounded-full w-38 h-45 overflow-hidden border-4 border-black shadow-lg">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="mb-4">
        <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo text-gray-800">
          Hi! I'm Kuresh Garbada
          <Image src={assets.hand_icon} alt="Wave" className="w-6 h-6" />
        </h3>

        <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo mb-4">
          MERN STACK Web Developer
        </h2>

        <p className="max-w-2xl mx-auto font-outfit text-base sm:text-lg text-gray-700 mb-6">
          I am a Mern Stack developer from India undergoing graduation of B.Tech C.E. at Charusat University.
          I am also doing an internship at FutureInterns.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-outfit">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
          >
            My Resume
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
