import React from 'react';
import { NeonGradientCard } from '../magicui/NeonGradientCard';
import { Image } from '@douyinfe/semi-ui';
import { imgUrl, skipUrl } from '../../config';

const WorkZhenShan = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full max-w-screen-lg mx-auto">
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
                        firstColor: '#ff00aa',
                        secondColor: '#00FFF1',
                    }}
                    onClick={() => window.open(skipUrl.zhenshan, '_blank')}>
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
        </>
    );
};

export default WorkZhenShan;
