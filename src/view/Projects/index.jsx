import React from 'react';
import { motion } from 'framer-motion';
import { projectData } from '@/config';
import ProjectCard from '@/view/AboutMe/ProjectCard';
import SecondaryInterface from '@/util/SecondaryInterface';

const Projects = () => {
    return (
        <SecondaryInterface width="w-[70%]">
            <h1 className="mb-4 text-3xl font-bold mt-10">More Projects</h1>
            {/* 动态调整 grid 布局 */}
            <div
                className={`grid gap-4 ${
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
        </SecondaryInterface>
    );
};

export default Projects;
