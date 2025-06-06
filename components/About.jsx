import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-6 py-10 scroll-mt-20'>
      <h3 className='text-center mb-3 text-1xl font-ovo uppercase tracking-widest text-indigo-600'>
        Introduction
      </h3>
      <h2 className='text-center text-6xl font-ovo font-semibold mb-10 text-gray-900 dark:text-gray-100'>
        About Me
      </h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-16'>
        {/* Image container */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image
              src={assets.user_image}
              alt='user'
              className='w-full rounded-3xl'
              style={{ border: '3px solid black', boxShadow: 'none' }}
            />
          </div>
        </div>

        {/* Content area */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className='max-w-2xl lg:-ml-10'>
            <p className='mb-10 font-ovo text-justify text-gray-800 dark:text-gray-300'>
              I am a passionate and dedicated final-year B.Tech student in Computer Engineering at Charusat University. With a solid academic foundation and hands-on project experience, I have developed a strong interest in software development, algorithms, and building real-world applications. Currently, I am interning at Future Interns, where I am applying and expanding my technical knowledge while collaborating in a professional environment. I strive to learn continuously and contribute meaningfully to every team I work with.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                  hover:bg-violet-100 hover:dark:bg-violet-900/40 hover:-translate-y-1 duration-500 hover:shadow-lg"
                >
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-200'>{title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>{description}</p>
                </li>
              ))}
            </ul>

            <h4 className='my-6 text-gray-700 dark:text-gray-200 font-ovo text-lg'>
              Tools I use
            </h4>

            <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                  hover:-translate-y-1 hover:shadow-md duration-300 bg-white dark:bg-gray-800'
                >
                  <Image src={tool} alt='Tools' className='w-5 sm:w-7' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
