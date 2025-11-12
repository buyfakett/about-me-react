import React from 'react';
import { useNavigate } from 'react-router';
import ProjectCard from './ProjectCard';
import { motion } from 'motion/react';
import { projectData } from '@/config';
import { CiLink } from 'react-icons/ci';

const OpenSourceProjects = () => {
    const navigate = useNavigate();
    return (
        <div className="dark:bg-gray-900 dark:text-gray-300">
            <motion.div
                className="w-full max-w-(--breakpoint-lg) mx-auto flex flex-col items-center mt-20 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                    My Open Source Projects
                </h1>
            </motion.div>

            {/* 动态调整 grid 布局 */}
            <div
                className={`mt-10 grid gap-4 ${
                    projectData.length === 1
                        ? 'grid-cols-1 place-items-center'
                        : projectData.length === 2
                          ? 'grid-cols-2 justify-center'
                          : // : projectData.length === 3
                            //     ? "grid-cols-3 justify-center"
                            'sm:grid-cols-1 md:grid-cols-3'
                }`}>
                {projectData.slice(0, 6).map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        key={index}
                        className="mt-5">
                        <ProjectCard data={item} />
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 6 * 0.2 }}
                    className="mt-5 col-span-full flex justify-center">
                    <button
                        onClick={() => {
                            navigate('/projects');
                            window.scrollTo(0, 0);
                        }}
                        className="flex items-center cursor-pointer gap-2 text-white ml-auto mr-10">
                        <CiLink className="w-5 h-5" />
                        <span className="text-sm">More Projects</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default OpenSourceProjects;
