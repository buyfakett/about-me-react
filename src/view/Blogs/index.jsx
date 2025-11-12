import React from 'react';
import { motion } from 'motion/react';
import { skipUrl } from '@/config';
import SecondaryInterface from '@/util/SecondaryInterface';
import useBlogsStore from '@/stores/blogs';
import { CiLink } from 'react-icons/ci';

const Blogs = () => {
    const blogs = useBlogsStore((state) => state.blogsData);
    return (
        <SecondaryInterface width="w-[70%]">
            <motion.div
                className="dark:bg-gray-900 dark:text-gray-300 mt-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                    More Blogs
                </h1>
                <div className="mt-10 px-4">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {blogs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ scale: 1.02 }}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {item.time}
                                    </p>
                                </a>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 6 * 0.2 }}
                            className="mt-5 col-span-full flex justify-center">
                            <button
                                onClick={() => {
                                    window.open(`${skipUrl.blog}`, '_blank');
                                    window.scrollTo(0, 0);
                                }}
                                className="flex items-center cursor-pointer gap-2 text-white ml-auto mr-10">
                                <CiLink className="w-5 h-5" />
                                <span className="text-sm">Go To Blog</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </SecondaryInterface>
    );
};

export default Blogs;
