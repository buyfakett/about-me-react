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
                className="w-full max-w-screen-lg mx-auto flex flex-col items-center mt-10 px-4"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                    Work Experience
                </h1>
            </motion.div>

            <motion.div
                className="mt-5 flex flex-col gap-10"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                {/* 第一个卡片 */}
                <div
                    className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-screen-lg mx-auto">
                    <div className="flex-shrink-0">
                        <Image
                            src={imgUrl.muen}
                            alt="沐恩网络"
                            className="w-16 h-16 md:w-12 md:h-12 md:mt-20 rounded"
                        />
                    </div>
                    <NeonGradientCard
                        className="w-full md:w-[900px] neon-card cursor-pointer"
                        borderSize={4} // 调整边框为桌面端宽度
                        borderRadius={16} // 更加圆润
                        neonColors={{
                            firstColor: "#ff00aa",
                            secondColor: "#00FFF1",
                        }}
                        onClick={() => window.open(skipUrl.muen, '_blank')}
                    >
                        <h1 className="text-xl md:text-3xl">沐恩网络</h1>
                        <h2 className="mt-0.5 text-sm md:text-lg">运维工程师</h2>
                        <h3 className="text-sm md:text-base">2022.6 - 至今</h3>
                        <ul className="text-xs md:text-sm list-disc pl-4 mt-2 space-y-1">
                            <li>内部系统前后端优化</li>
                            <li>自动化系统、监控系统、备份系统优化</li>
                            <li>服务器、监控、数据库等迁移集群</li>
                            <li>线上问题分析, 提出优化方案</li>
                        </ul>
                    </NeonGradientCard>

                </div>

                {/* 第二个卡片 */}
                <div
                    className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-screen-lg mx-auto">
                    <div className="flex-shrink-0">
                        <Image
                            src={imgUrl.zhenshan}
                            alt="臻善科技"
                            className="w-16 h-16 md:w-12 md:h-12 md:mt-20 rounded"
                        />
                    </div>
                    <NeonGradientCard
                        className="w-full md:w-[900px] neon-card cursor-pointer"
                        borderSize={4} // 调整边框为桌面端宽度
                        borderRadius={16} // 更加圆润
                        neonColors={{
                            firstColor: "#ff00aa",
                            secondColor: "#00FFF1",
                        }}
                        onClick={() => window.open(skipUrl.zhenshan, '_blank')}
                    >
                        <h1 className="text-xl md:text-3xl">臻善科技</h1>
                        <h2 className="mt-0.5 text-sm md:text-lg">数据师(实习)</h2>
                        <h3 className="text-sm md:text-base">2021.7 - 2022.4</h3>
                        <ul className="text-xs md:text-sm list-disc pl-4 mt-2 space-y-1">
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
