import React from 'react';
import { motion } from 'framer-motion';
import WorkMuen from './WorkMuen';
import WorkZhenShan from './WorkZhenShan';

const WorkExperience = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-300">
            <motion.div
                className="w-full max-w-screen-lg mx-auto flex flex-col items-center mt-10 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                    Work Experience
                </h1>
            </motion.div>

            <motion.div
                className="mt-5 flex flex-col gap-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                {/* 工作-沐恩 */}
                <WorkMuen />

                {/* 工作-臻善 */}
                <WorkZhenShan />
            </motion.div>
        </div>
    );
};

export default WorkExperience;
