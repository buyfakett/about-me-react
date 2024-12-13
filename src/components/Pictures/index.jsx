import React from "react";
import {motion} from "framer-motion";
import {pageVariants, pictureList} from "../../config";
import {Button, Image} from '@douyinfe/semi-ui';
import {IoIosArrowBack} from "react-icons/io";

const Pictures = () => {
    return (
        <motion.div
            className="w-[80%] mx-auto min-h-screen dark:bg-gray-900 text-white flex flex-col items-center p-4 mt-3"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.5}}
        >
            <div className="w-full flex justify-start text-white">
                <Button
                    theme='outline'
                    type='tertiary'
                    onClick={() => navigate('/')}
                >
                    <IoIosArrowBack/>
                    返回首页
                </Button>
            </div>
            <div
                className="w-full flex flex-wrap gap-4 mt-8"
                style={{justifyContent: "center", rowGap: "16px"}}
            >
                {pictureList.map((photo, index) => (
                    <motion.div
                        key={index}
                        className="rounded-lg shadow-md"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: index * 0.2, duration: 0.5}}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        style={{flex: "0 0 calc(33.333% - 16px)", boxSizing: "border-box"}}
                    >
                        <Image src={photo} alt={`Photo ${index + 1}`} style={{width: "100%", borderRadius: "8px"}}/>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    );
};

export default Pictures;
