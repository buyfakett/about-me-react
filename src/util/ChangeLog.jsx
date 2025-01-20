import React from 'react';
import Markdown from 'react-markdown';
import md from '!!raw-loader!../CHANGELOG.md';
import { pageVariants } from '../config.js';
import { Button } from '@douyinfe/semi-ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const ChangeLog = () => {
    const navigate = useNavigate();
    return (
        <motion.div
            className="w-[60%] mx-auto min-h-screen dark:bg-gray-900 text-white flex flex-col items-center p-4 mt-3"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}>
            <div className="w-full flex justify-start text-white">
                <Button
                    theme="outline"
                    type="tertiary"
                    onClick={() => navigate('/')}>
                    <IoIosArrowBack />
                    返回首页
                </Button>
            </div>
            <Markdown className="mt-10 text-2xl leading-loose">{md}</Markdown>
        </motion.div>
    );
};

export default ChangeLog;
