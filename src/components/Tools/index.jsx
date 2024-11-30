import React from "react";
import {motion} from "framer-motion";
import {Button} from '@douyinfe/semi-ui';
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import ToolsCategorySection from "./ToolsCategorySection";
import {devices, pageVariants, softwareTools} from "../../config";

const Tools = () => {
    const navigate = useNavigate()
    return (
        <motion.div
            className="w-[60%] mx-auto min-h-screen dark:bg-gray-900 text-white flex flex-col items-center p-4 mt-3"
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
            <div className="mt-5 flex w-full flex-col gap-y-10">
                <div>
                    <h1 className="mb-1 text-2xl font-bold">Tools & Devices</h1>
                    <p>Tools, software, and devices I use daily</p>
                </div>

                <ToolsCategorySection title="Software Tools" categories={Object.values(softwareTools)}/>
                <ToolsCategorySection title="Hardware Devices" categories={Object.values(devices)}/>
            </div>
        </motion.div>
    );
};

export default Tools;
