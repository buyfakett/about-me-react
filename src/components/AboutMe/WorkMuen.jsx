import React from 'react';
import { NeonGradientCard } from '../magicui/NeonGradientCard';
import { Image } from '@douyinfe/semi-ui';
import { imgUrl, skipUrl } from '../../config';

const WorkMuen = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-screen-lg mx-auto">
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
                        firstColor: '#ff00aa',
                        secondColor: '#00FFF1',
                    }}
                    onClick={() => window.open(skipUrl.muen, '_blank')}>
                    <h1 className="text-xl md:text-3xl">沐恩网络</h1>
                    <h2 className="mt-0.5 text-sm md:text-lg">运维工程师</h2>
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
            </div>
        </>
    );
};

export default WorkMuen;
