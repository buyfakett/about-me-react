import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaCoffee, FaGithub } from 'react-icons/fa';
import { skipUrl } from '@/config';
import { FaBilibili, FaTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Links = () => {
    return (
        <motion.div
            className="dark:bg-gray-900 dark:text-gray-300 text-center mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="flex items-center justify-center">
                <Link
                    to={`${skipUrl.blog}/rss.xml`}
                    target="_blank"
                    className="text-sm font-bold text-white dark:hover:text-blue-400 transition-colors duration-200">
                    Follow Me
                </Link>
                <span className="mx-2">|</span>
                <Link
                    to="/changelog"
                    className="text-sm font-bold text-white dark:hover:text-blue-400 transition-colors duration-200">
                    Change Logs
                </Link>
                <span className="mx-2">|</span>
                <Link
                    to="/coffee"
                    className="text-sm font-bold text-white dark:hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <FaCoffee className="mr-1" />
                    Buy Some Coffee
                </Link>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-2">
                {/* Twitter */}
                <a
                    href={skipUrl.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                    aria-label="Twitter">
                    <FaTwitter className="text-xl" />
                </a>

                {/* Bilibili */}
                <a
                    href={skipUrl.bili}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                    aria-label="Bilibili">
                    <FaBilibili className="text-xl" />
                </a>

                {/* GitHub */}
                <a
                    href={skipUrl.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                    aria-label="GitHub">
                    <FaGithub className="text-xl" />
                </a>

                {/* Email */}
                <a
                    href={skipUrl.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300 transition-colors duration-200"
                    aria-label="Email">
                    <MdEmail className="text-xl" />
                </a>
            </div>
        </motion.div>
    );
};

export default Links;
