import React from "react";
import {motion} from "framer-motion";
import HeadPortrait from "./HeadPortrait";
import LanguageSection from "./LanguageSection";
import WorkExperience from "./WorkExperience";
import {imgUrl, pageVariants, skipUrl} from "../../config";
import Projects from "./Projects";

const AboutMe = ({wakatimeData}) => {
    return (
        <motion.div
            className="min-h-screen dark:bg-gray-900 text-white flex flex-col items-center justify-center p-4"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.5}}
        >

            <HeadPortrait headPortrait={imgUrl.headPortrait}/>

            <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{opacity: 0, y: 50}} // 从下方开始 (y 设为正值)
                animate={{opacity: 1, y: 0}} // 最终回到原始位置
                transition={{duration: 1}} // 动画持续 1 秒
            >
                About Me
            </motion.h1>

            <LanguageSection
                start_time={wakatimeData.start_time}
                languages={wakatimeData.languages}
                update_time={wakatimeData.update_time}
            />

            <WorkExperience
                skipUrl={skipUrl}
                imgUrl={imgUrl}
            />

            <Projects/>

        </motion.div>
    );
};

export default AboutMe;
