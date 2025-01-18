import React, { useState } from 'react';
import { NeonGradientCard } from '../magicui/NeonGradientCard';
import { Image } from '@douyinfe/semi-ui';
import { imgUrl, skipUrl } from '../../config';
import { Button } from '@douyinfe/semi-ui';
import { motion, AnimatePresence } from 'framer-motion';

const WorkMuen = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-screen-lg mx-auto relative">
                <div className="flex-shrink-0">
                    <Image
                        src={imgUrl.muen}
                        alt="沐恩网络"
                        className="w-16 h-16 md:w-12 md:h-12 md:mt-20 rounded"
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
                        <h1 className="text-xl md:text-3xl">沐恩网络</h1>
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

    const projects = [
        {
            title: '日志系统重构',
            content: `项目思路：旧日志系统ELK占用资源多查询慢；修改为rsyslog、filebeat等收集日志到kafka，再由vector入clickhouse
项目成果：几十TB级日志查询能在秒级查询成功，且占用系统资源相对低`,
        },
        {
            title: '数据库备份方案重构',
            content: `项目思路：旧备份方案备份从未检查/测试，不同备份分散；修改为不同环境整合
    项目成果：判断备份文件大小等算法自动生成报表和录入Prometheus系统，极大的降低人工巡检的成本`,
        },
        {
            title: '监控/报警系统重构',
            content: `项目思路：旧监控系统分散、不全，项目监控几乎没有；修改为zabbix+Prometheus+grafana整合监控系统
    项目成果：zabbix主要监控服务器宿主机、虚拟机性能，Prometheus监控各种项目返回时间/占用率等指标、各种云平台余额/套餐剩余等`,
        },
        {
            title: '运维系统编写',
            content: `项目思路：上百个服务器、服务、域名信息没地方登记，测试、运营等同事经常私聊问；服务上线时自动上报版本信息，新增服务器就登记
    项目成果：用fastapi+vue完成编写，全公司权限分离自行查询上千个服务器、数据库，降低运维重复的工作`,
        },
    ];

    return (
        <div className="w-full h-full p-6 flex">
            <div className="w-[20%] flex items-center justify-center">
                <Button
                    theme="outline"
                    type="tertiary"
                    size="large"
                    onClick={() => window.open(skipUrl.muen, '_blank')}>
                    跳转官网
                </Button>
            </div>
            <div className="border-r border-white mx-3 h-full" />
            <div className="w-[80%] flex flex-col gap-4">
                <AnimatePresence>
                    {selectedProject ? (
                        <motion.div
                            key="detail"
                            className="w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}>
                            <button
                                className="absolute top-5 left-10 text-sm"
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
                        </motion.div>
                    ) : (
                        <motion.div
                            key="list"
                            className="w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}>
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-4 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }>
                                        <div className="text-center">
                                            {project.title}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WorkMuen;
