import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 msx-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-28 sm:pt-0'>
        <div >
            <Image src={assets.profile_img} alt='' className='rounded-full w-32 
            hover:-translate-y-1 duration-500 hover:shadow-green_circle ' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm JAYAPRAKASH SARAVANAN
            <Image src={assets.hand_icon} alt=''
            className='w-6' />
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
           Full-Stack Web Developer
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
        I’m a passionate full-stack developer from India, dedicated to building efficient and impactful web applications. I thrive on solving real-world problems, continuously expanding my knowledge, and bringing ideas to life through clean and scalable code. With over 300 coding challenges under my belt, I embrace every opportunity to grow and innovate.    
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4
        '>
            <a href="#contact"
            className='px-10 py-3 border rounded-full bg-black
            text-white flex items-center gap-2
            shadow-md hover:shadow-blue_circle dark:bg-transparent '
            >contact me <Image src={assets.right_arrow_white} alt=''
            className='w-4'/>
            </a>

            <a href="/21ISR018_JAYAPRAKASH.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
            shadow-md   hover:shadow-red_circle bg-white dark:text-black'
            >my resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>

        </div>
    </div>
  )
}

export default Header