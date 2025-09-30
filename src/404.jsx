import React from 'react';
import { pageVariants } from '@/config.js';
import { Button } from '@douyinfe/semi-ui-19';
import { IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const originalTitle = document.title;
        document.title = '404 - 你走错了呢';
        return () => {
            document.title = originalTitle;
        };
    }, []);

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
            <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold">你走错了呢</h1>
            </div>
        </motion.div>
    );
};

export default NotFound;
