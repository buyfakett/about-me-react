import React from 'react';
import Markdown from 'react-markdown';
import changelog from '@/../CHANGELOG.md';
import { pageVariants } from '@/config';
import { Button } from '@douyinfe/semi-ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
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
            <div className="mt-10 text-xl leading-loose">
                <Markdown>{changelog}</Markdown>
            </div>
        </motion.div>
    );
};

export default ChangeLog;
