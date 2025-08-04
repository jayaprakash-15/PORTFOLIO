import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const About = ({ isDarkMode }) => {
    const [showMore, setShowMore] = useState(false);
    const toggleText = () => setShowMore(!showMore);

    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-4'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image
                        src={assets.user_image}
                        alt='user'
                        className='w-full rounded-3xl hover:-translate-y-1 duration-500 hover:shadow-black_circle dark:hover:shadow-orange_circle'
                    />
                </div>

                <div className='flex-1'>
                    <p className='max-w-2xl font-Ovo'>
                        👉 I’m <strong>JAYAPRAKASH SARAVANAN</strong>, a passionate full-stack developer and MSc Software Systems student at Kongu Engineering College (2021–2026) with a CGPA of 7.31.
                        <br />
                        👉 With solid foundations in JavaScript, Python, React.js, Node.js, and MongoDB, I build dynamic, scalable, and real-world applications.
                        <br />
                        👉 I’m driven by problem-solving. I actively participate in coding contests, tech symposiums, and collaborative research.
                    </p>

                    <p className={`transition-all duration-500 ease-in-out font-Ovo ${showMore ? 'max-h-full' : 'max-h-0 overflow-hidden'}`}>
                        <br />
                        👉  <strong>Education:</strong><br />
                        • 10th – SSM Lakshmi Ammal MHSS (2019): 83%<br />
                        • 12th – SSM Lakshmi Ammal MHSS (2021): 83.25%<br />
                        • MSc Software Systems – Kongu Engineering College (2021–26): CGPA 7.31
                        <br /><br />
                        👉  <strong>Projects:</strong><br />
                        • <strong>AI-Based Heart Disease Prediction</strong>: Hybrid CNN-GRU-Transformer using SHAP and Bayesian optimization (Python, TensorFlow, Optuna)<br />
                        • <strong>Men’s Clothing E-Commerce</strong>: MERN app with cart, auth, admin dashboard (MongoDB, Express, React, Node, Tailwind CSS, JWT, Firebase)<br />
                        • <strong>Doctor Appointment Booking System</strong>: Role-based secure appointment platform with auth and admin panel (MERN, JWT, React Router)<br />
                        • <strong>PHP-Based E-Commerce Website</strong>: Shopping cart + admin panel (HTML, CSS, JS, PHP, MySQL)
                        <br /><br />
                        👉  <strong>Strengths:</strong><br />
                        Problem Solving, Collaboration, Adaptability, Critical Thinking, Communication
                        <br /><br />
                        👉  <strong>Achievements:</strong><br />
                        • 2nd Place in National-Level Paper Presentation on Cloud Gaming (PSG College)<br />
                        • Participated in National-Level Coding Contest (PSG College)
                        <br /><br />
                        👉  <strong>Links:</strong><br />
                        • GitHub: <a className='text-blue-600 underline' href='https://github.com/jayaprakash-15' target='_blank'>jayaprakash-15</a><br />
                        • LinkedIn: <a className='text-blue-600 underline' href='https://www.linkedin.com/in/jayaprakash-saravanan-448245259' target='_blank'>jayaprakash-saravanan</a><br />
                        • LeetCode: <a className='text-blue-600 underline' href='https://leetcode.com/u/2kPxMa7WzL/' target='_blank'>leetcode.com/u/2kPxMa7WzL</a>
                    </p>

                    <button
                        onClick={toggleText}
                        className="text-blue-700 mb-10 font-bold hover:underline focus:outline-none"
                    >
                        {showMore ? "Show Less" : "See More"}
                    </button>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-green dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
