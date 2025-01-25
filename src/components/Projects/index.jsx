import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, projectData } from '../../config';
import { Button } from '@douyinfe/semi-ui';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../AboutMe/ProjectCard';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="w-[80%] mx-auto min-h-screen dark:bg-gray-900 text-white flex flex-col items-center p-4 mt-3"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}>
            <div className="w-full flex justify-start text-white mb-10">
                <Button
                    theme="outline"
                    type="tertiary"
                    onClick={() => navigate('/')}>
                    <IoIosArrowBack />
                    返回首页
                </Button>
            </div>
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
        </motion.div>
    );
};

export default Projects;
