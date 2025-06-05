import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h3 className="text-center mb-2 text-sm font-ovo uppercase tracking-widest text-indigo-600">
        My Portfolio
      </h3>
      <h2 className="text-center text-5xl font-ovo font-semibold mb-12 text-gray-900 dark:text-gray-100">
        My Latest Work
      </h2>

      <p className="text-justify max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      {/* ✅ 4-column centered grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {workData.map((project, index) => (
          <div
            key={index}
            className="w-64 h-64 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
              flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="text-base font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div>
                <Image className=" border rounded-full border-black w-9
                aspect-square flex items-center justify-center shadow-2xl
                group-hover:bg-lime-300 transition" src={assets.send_icon} alt="send icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
        <a href="" className='w-max flex items-center justify-center gap-2 
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
        my-20 hover:bg-blue-100 duration-500'> Show more <Image src={assets.right_arrow_bold} alt='Right arrow'
        className='w-4' /></a>
    </div>
  );
};

export default Work;
