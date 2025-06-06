import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-16 scroll-mt-20">
      <h3 className="text-center mb-2 text-1xl font-ovo uppercase tracking-widest text-indigo-600">
        What I Offer
      </h3>
      <h2 className="text-center text-5xl sm:text-6xl font-ovo font-semibold mb-10 text-gray-900 dark:text-gray-100">
        My Services
      </h2>

      <p className="text-justify max-w-2xl mx-auto mt-4 mb-12 font-ovo text-gray-700 dark:text-gray-300 leading-relaxed">
        I offer web development services focused on building responsive and user-friendly applications using the MERN stack. My work includes developing personal portfolio websites, creating admin dashboards, and redesigning or recreating modern websites.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl px-8 py-12 bg-white dark:bg-gray-900
    hover:shadow-lg hover:shadow-pink-100 dark:hover:bg-pink-900/20 hover:bg-pink-100
    transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
>
            <Image src={icon} alt={title} className="w-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-5">
              {description}
            </p>

            {/* Optional Link: Uncomment if needed */}
            {/* <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-indigo-600 hover:underline"
            >
              Read more <Image alt="" src={assets.right_arrow} className="w-4" />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
