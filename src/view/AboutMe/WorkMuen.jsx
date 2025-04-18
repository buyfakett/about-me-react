import React, { useState } from 'react';
import { NeonGradientCard } from '@/view/magicui/NeonGradientCard';
import { Image } from '@douyinfe/semi-ui';
import { imgUrl, muenProjects, skipUrl } from '@/config';
import { Button } from '@douyinfe/semi-ui';
import { motion, AnimatePresence } from 'framer-motion';
import useLanguageStore from "@/stores/language";

const WorkMuen = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-(--breakpoint-lg) mx-auto relative">
                <div className="shrink-0">
                    <Image
                        src={imgUrl.muen}
                        alt="浙江沐恩网络科技有限公司"
                        className="w-16 h-16 md:w-12 md:h-12 md:mt-20 rounded-sm"
                    />
                </div>
                <div
                    className="relative w-full md:w-[900px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <NeonGradientCard
                        className="w-full neon-card cursor-pointer"
                        borderSize={4} // 调整边框为桌面端宽度
                        borderRadius={16} // 更加圆润
                        neonColors={{
                            firstColor: '#ff00aa',
                            secondColor: '#00FFF1',
                        }}>
                        <h1 className="text-xl md:text-3xl">浙江沐恩网络科技有限公司</h1>
                        <h2 className="mt-0.5 text-sm md:text-lg">
                            运维工程师
                        </h2>
                        <h3 className="text-sm md:text-base">2022.6 - 至今</h3>
                        <ul className="text-xs md:text-sm list-disc pl-4 mt-2 space-y-1">
                            <li>内部系统前后端优化</li>
                            <li>自动化系统、监控系统、备份系统优化</li>
                            <li>服务器、监控、数据库等迁移和部署集群</li>
                            <li>公司分布式服务架构设计</li>
                            <li>日志系统设计与规划</li>
                            <li>线上问题分析, 提出优化方案</li>
                        </ul>
                    </NeonGradientCard>
                    <div
                        className={`rounded-lg absolute top-0 left-0 h-full w-full bg-white dark:bg-neutral-900 transition-all duration-500 ease-in-out ${
                            isHovered
                                ? 'opacity-100'
                                : 'opacity-0 pointer-events-none'
                        }`}
                        style={{ zIndex: 10 }}>
                        <WorkProjectMuen />
                    </div>
                </div>
            </div>
        </>
    );
};

const WorkProjectMuen = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const isChinese = useLanguageStore((state) => state.isChinese);

    return (
        <div className="w-full h-full p-6 flex flex-col md:flex-row">
            <div className="w-full md:w-[20%] flex items-center justify-center mb-4 md:mb-0">
                <Button
                    theme="outline"
                    type="tertiary"
                    size="large"
                    onClick={() => window.open(isChinese? skipUrl.muen.cn : skipUrl.muen.en, '_blank')}>
                    跳转官网
                </Button>
            </div>
            <div className="border-r-0 md:border-r border-white mx-0 md:mx-3 h-px md:h-full w-full md:w-px my-4 md:my-0" />
            <div className="w-full md:w-[80%] flex flex-col gap-4">
                <AnimatePresence>
                    {selectedProject ? (
                        <div
                            key="detail"
                            className="w-full h-full">
                            <button
                                className="cursor-pointer absolute top-5 left-10 text-sm"
                                onClick={() => setSelectedProject(null)}>
                                ← 返回项目列表
                            </button>
                            <div className="p-6">
                                <h2 className="text-2xl mb-4">
                                    {selectedProject.title}
                                </h2>
                                <div className="whitespace-pre-line">
                                    {selectedProject.content}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            key="list"
                            className="w-full h-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                {muenProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-4 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }>
                                        <div className="text-center text-sm sm:text-base">
                                            {project.title}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WorkMuen;
