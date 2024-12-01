import React from "react";
import {motion} from "framer-motion";
import {Button} from "@douyinfe/semi-ui";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {frindsList, pageVariants} from "../../config";
import ToolsCategorySection from "./UrlsCategorySection";

const Index = () => {
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

            <ToolsCategorySection title="Friends" data={frindsList} />

        </motion.div>
    );
};

export default Index;
