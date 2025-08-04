import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('jaya05399@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <div>
            <div className="text-center">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo_dark} alt="Logo" className="w-36 mx-auto mb-2" />

                <div
                    className="w-max flex items-center gap-2 mx-auto cursor-pointer hover:text-blue-500 transition-all duration-300"
                    onClick={copyEmailToClipboard}
                    title="Click to copy email"
                >
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Mail Icon" className="w-6" />
                    <span className="font-Ovo  transition-colors duration-300 hover:text-green-500 hover:underline">
                        jaya05399@gmail.com
                    </span>
                </div>

                <div className="text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6">
                    <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-black hover:underline dark:hover:rounded-md dark:hover:px-2 dark:hover:bg-white">
                            <a
                                target="_blank"
                                href="https://github.com/jayaprakash-15"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900"
                            >
                                GitHub
                            </a>
                        </li>

                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-blue-600 hover:underline dark:hover:rounded-md dark:hover:px-2 dark:hover:bg-white">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/jayaprakash-saravanan-448245259"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                LinkedIn
                            </a>
                        </li>

                        <li className="font-Ovo cursor-pointer transition-colors duration-300 hover:text-orange-500 hover:underline dark:hover:rounded-md dark:hover:px-2 dark:hover:bg-white">
                            <a
                                target="_blank"
                                href="https://leetcode.com/u/2kPxMa7WzL/"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500"
                            >
                                LeetCode
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
