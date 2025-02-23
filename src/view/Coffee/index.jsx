import React from 'react';
import { motion } from 'framer-motion';
import { imgUrl, pageVariants } from '@/config';
import { Button, Image } from '@douyinfe/semi-ui';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

const Coffee = () => {
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
            <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold">Buy me a coffee</h1>
                <p className="mb-8 text-lg text-gray-400">
                    If you like my project, you can treat me to a cup of coffee
                    ☕ Thank you for your support.
                </p>
                <div className="flex gap-8 justify-center mb-10">
                    <Image src={imgUrl.pay.wechat} className="w-64 h-auto" />
                    <Image src={imgUrl.pay.ali} className="w-64 h-auto" />
                </div>
                <div className="text-lg mb-10">
                    <h2 className="mb-2 text-xl font-semibold">
                        Communicate with me
                    </h2>
                </div>
            </div>
        </motion.div>
    );
};

export default Coffee;
