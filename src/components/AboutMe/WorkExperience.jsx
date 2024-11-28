import React from "react";
import {NeonGradientCard} from "../magicui/NeonGradientCard";
import {motion} from "framer-motion";
import {Image} from '@douyinfe/semi-ui';


const WorkExperience = ({imgUrl, skipUrl}) => {
    return (
        <div
            className="dark:bg-gray-900 dark:text-gray-300"
        >
            <motion.div
                className="w-96 h-48 flex items-center justify-center mx-auto mt-10"
                initial={{opacity: 0, y: 50}} // 从下方开始 (y 设为正值)
                animate={{opacity: 1, y: 0}} // 最终回到原始位置
                transition={{duration: 1}} // 动画持续 1 秒
            >
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Work Experience
                </h1>
            </motion.div>
            <motion.div
                className="mt-5"
                initial={{opacity: 0, y: 50}} // 从下方开始 (y 设为正值)
                animate={{opacity: 1, y: 0}} // 最终回到原始位置
                transition={{duration: 1}} // 动画持续 1 秒
            >

                {/*第一个卡片*/}
                <div className="flex items-center gap-4 w-[900px] h-[200px]">
                    <div className="flex-shrink-0">
                        <Image
                            src={imgUrl.muen}
                            alt="沐恩网络"
                            className="w-12 h-12 rounded mr-5"
                        />
                    </div>
                    <NeonGradientCard
                        className="w-[900px] h-[220px] items-center justify-center cursor-pointer"
                        onClick={() => window.open(skipUrl.muen, '_blank')}
                    >
                        <h1 className="text-3xl">沐恩网络</h1>
                        <h2 className="mt-0.5">运维工程师</h2>
                        <h3>2022.6 - 至今</h3>
                        <ul>
                            <li>内部系统前后端优化</li>
                            <li>自动化系统、监控系统、备份系统优化</li>
                            <li>服务器、监控、数据库等迁移集群</li>
                            <li>线上问题分析, 提出优化方案</li>
                        </ul>
                    </NeonGradientCard>
                </div>

                {/*第二个卡片*/}
                <div className="flex items-center gap-4 w-[900px] h-[200px] mt-10">
                    <div className="flex-shrink-0">
                        <Image
                            src={imgUrl.zhenshan}
                            alt="臻善科技"
                            className="w-12 h-12 rounded mr-5"
                        />
                    </div>
                    <NeonGradientCard
                        className="w-[900px] h-[200px] items-center justify-center cursor-pointer"
                        onClick={() => window.open(skipUrl.zhenshan, '_blank')}
                    >
                        <h1 className="text-3xl">臻善科技</h1>
                        <h2 className="mt-0.5">数据师(实习)</h2>
                        <h3>2021.7 - 2022.4</h3>
                        <ul>
                            <li>各区县数据清洗</li>
                            <li>图形数据入库</li>
                            <li>各区县数据迁移合库</li>
                        </ul>
                    </NeonGradientCard>
                </div>
            </motion.div>
        </div>
    );
};

export default WorkExperience;
