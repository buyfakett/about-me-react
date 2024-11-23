import React from "react";
import {NeonGradientCard} from "../magicui/NeonGradientCard";
import {motion} from "framer-motion";


const WorkExperience = () => {

    return (
        <div
            className="dark:bg-gray-900 dark:text-gray-300"
        >
            <motion.div
                className="w-96 h-48 flex items-center justify-center h-screen/2 mt-10"
                initial={{ opacity: 0, y: 50 }} // 从下方开始 (y 设为正值)
                animate={{ opacity: 1, y: 0 }} // 最终回到原始位置
                transition={{ duration: 1 }} // 动画持续 1 秒
            >
                <h1
                    className="text-4xl font-bold mb-4"
                >
                    Work Experience
                </h1>
            </motion.div>
            <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 50 }} // 从下方开始 (y 设为正值)
                animate={{ opacity: 1, y: 0 }} // 最终回到原始位置
                transition={{ duration: 1 }} // 动画持续 1 秒
            >
                <NeonGradientCard
                    className="w-[900px] h-[300px] items-center justify-center text-center"
                >
              <span
                  className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
123
              </span>
                </NeonGradientCard>
                <NeonGradientCard className="w-[900px] h-[300px] items-center justify-center text-center mt-40">
              <span
                  className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
321
              </span>
                </NeonGradientCard>
            </motion.div>
        </div>
    );
};

export default WorkExperience;
