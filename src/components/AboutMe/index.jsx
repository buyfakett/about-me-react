import React from 'react';
import { motion } from 'framer-motion';
import HeadPortrait from './HeadPortrait';
import LanguageSection from './LanguageSection';
import WorkExperience from './WorkExperience';
import { pageVariants } from '../../config';
import OpenSourceProjects from './OpenSourceProjects';
import Links from './Links';

const AboutMe = ({ wakatimeData }) => {
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

            <LanguageSection
                start_time={wakatimeData.start_time}
                languages={wakatimeData.languages}
                update_time={wakatimeData.update_time}
            />

            <WorkExperience />

            <OpenSourceProjects />
        </motion.div>
    );
};

export default AboutMe;
