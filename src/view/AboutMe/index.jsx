import React from 'react';
import { motion } from 'framer-motion';
import HeadPortrait from './HeadPortrait';
import LanguageSection from './LanguageSection';
import WorkExperience from './WorkExperience';
import { pageVariants } from '@/config';
import OpenSourceProjects from './OpenSourceProjects';
import Links from './Links';

const AboutMe = () => {
    return (
        <motion.div
            className="min-h-screen dark:bg-gray-900 text-white flex flex-col items-center justify-center p-4"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}>
            <HeadPortrait />

            <Links />

            <LanguageSection />

            <WorkExperience />

            <OpenSourceProjects />
        </motion.div>
    );
};

export default AboutMe;
