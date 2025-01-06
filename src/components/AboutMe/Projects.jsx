import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { projectData } from '../../config';

const Projects = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-300">
            <motion.div
                className="w-full max-w-screen-lg mx-auto flex flex-col items-center mt-20 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                    Projects
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
                {projectData.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        key={index}
                        className="mt-5">
                        <ProjectCard data={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
