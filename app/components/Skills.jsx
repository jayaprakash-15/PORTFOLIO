import React from 'react';
import {
  frontendSkillData,
  backendSkillData,
  toolsSkillData,
  languagesSkillData,
} from '@/assets/assets';
import Image from 'next/image';

const Skills = ({ isDarkMode }) => {
  return (
    <div id='skills' className='w-full px-[4%] sm:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Skills</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I specialize in crafting modern web applications using technologies like React.js, Next.js, and Tailwind CSS.
        With a strong foundation in full-stack development, I build seamless, responsive, and scalable solutions.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {/* Frontend Skills */}
        <div className='bg-gray-100 p-6 rounded-lg shadow-md hover:bg-orange-50 hover:-translate-y-1 duration-500 hover:shadow-red_circle dark:bg-black dark:border dark:hover:bg-darkHover'>
          <h3 className='text-xl font-semibold mb-4 text-center font-Ovo'>Frontend Skills</h3>
          <ul className='grid grid-cols-3 gap-4 justify-items-center'>
            {frontendSkillData.map(({ icon, title }, index) => (
              <li key={index} className='group flex flex-col items-center cursor-pointer relative mb-6'>
                <Image
                  src={icon}
                  alt={title}
                  width={80}
                  height={80}
                  className='object-contain rounded border-2 bg-white border-gray-300 p-2 transition-transform duration-300 group-hover:scale-110 hover:shadow-blue_circle'
                />
                <span className='absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className='bg-gray-100 p-6 rounded-lg shadow-md hover:bg-blue-50 hover:-translate-y-1 duration-500 hover:shadow-blue_circle dark:bg-black dark:border dark:hover:bg-darkHover'>
          <h3 className='text-xl font-semibold mb-4 text-center font-Ovo'>Backend Skills</h3>
          <ul className='grid grid-cols-3 gap-4 justify-items-center'>
            {backendSkillData.map(({ icon, title }, index) => (
              <li key={index} className='group flex flex-col items-center cursor-pointer relative mb-6'>
                <Image
                  src={icon}
                  alt={title}
                  width={80}
                  height={80}
                  className='object-contain rounded border-2 bg-white border-gray-300 p-2 transition-transform duration-300 group-hover:scale-110 hover:shadow-purple_circle'
                />
                <span className='absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Programming Languages */}
        <div className='bg-gray-100 p-6 rounded-lg shadow-md hover:bg-yellow-50 hover:-translate-y-1 duration-500 hover:shadow-orange_circle dark:bg-black dark:border dark:hover:bg-darkHover'>
          <h3 className='text-xl font-semibold mb-4 text-center font-Ovo'>Programming Languages</h3>
          <ul className='grid grid-cols-3 gap-4 justify-items-center'>
            {languagesSkillData.map(({ icon, title }, index) => (
              <li key={index} className='group flex flex-col items-center cursor-pointer relative mb-6'>
                <Image
                  src={icon}
                  alt={title}
                  width={80}
                  height={80}
                  className='object-contain rounded border-2 bg-white border-gray-300 p-2 transition-transform duration-300 group-hover:scale-110 hover:shadow-yellow_circle'
                />
                <span className='absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className='bg-gray-100 p-6 rounded-lg shadow-md hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-purple_circle dark:bg-black dark:border dark:hover:bg-darkHover'>
          <h3 className='text-xl font-semibold mb-4 text-center font-Ovo'>Tools I Use</h3>
          <ul className='grid grid-cols-3 gap-4 justify-items-center'>
            {toolsSkillData.map(({ icon, title }, index) => (
              <li key={index} className='group flex flex-col items-center cursor-pointer relative mb-6'>
                <Image
                  src={icon}
                  alt={title}
                  width={80}
                  height={80}
                  className='object-contain rounded border-2 bg-white border-gray-300 p-2 transition-transform duration-300 group-hover:scale-110 hover:shadow-red_circle'
                />
                <span className='absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
