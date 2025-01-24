import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../config';
import { Button, Image } from '@douyinfe/semi-ui';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Giscus from '@giscus/react';

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
                    <Image
                        src="https://img.tteam.icu/i/2025/01/24/qngxzy-3.webp"
                        className="w-64 h-auto"
                    />
                    <Image
                        src="https://img.tteam.icu/i/2025/01/24/qt78qk-3.webp"
                        className="w-64 h-auto"
                    />
                </div>
                <div className="text-lg mb-10">
                    <h2 className="mb-2 text-xl font-semibold">
                        Communicate with me
                    </h2>
                </div>
                <Giscus
                    id="comments"
                    repo="buyfakett/blog-comments"
                    repoId="R_kgDONjzEIQ"
                    category="Q&A"
                    categoryId="DIC_kwDONjzEIc4Clmn0"
                    mapping="pathname"
                    term="Welcome to @giscus/react component!"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme="noborder_dark"
                    lang="zh-CN"
                    loading="lazy"
                />
            </div>
        </motion.div>
    );
};

export default Coffee;
