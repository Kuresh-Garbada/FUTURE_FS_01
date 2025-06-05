import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

        <h3 className='text-center mb-3 text-sm font-ovo uppercase tracking-widest text-indigo-600'>
         What I offer
      </h3>
      <h2 className='text-center text-6xl font-ovo font-semibold mb-10 text-gray-900 dark:text-gray-100'>
        My Services
      </h2>

      <p className='text-justify max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
  I offer web development services focused on building responsive and user-friendly applications using the MERN stack. My work includes developing personal portfolio websites, creating admin dashboards, and redesigning or recreating modern websites.
</p>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">


        {serviceData.map(({icon,title,description,link},index)=>(
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12
            hover: shadow-black cursor-pointer hover:bg-pink-50 hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image  alt='' src={assets.right_arrow} className='w-4'/>
                </a>
             </div>

        ))}

    </div>
        
      
    </div>
  )
}

export default Services
