import React from 'react';
import { Avatar, Card } from '@douyinfe/semi-ui';
import { imgUrl } from '../../config';

const ProjectCard = ({ data }) => {
    const { Meta } = Card;

    return (
        <Card
            style={{ width: '100%' }}
            className="cursor-pointer"
            title={
                <Meta
                    title={data.title}
                    description={data.description ? data.description : ''}
                    avatar={
                        <Avatar
                            alt={data.title}
                            size="default"
                            src={
                                data.avatar ? data.avatar : imgUrl.headPortrait
                            }
                        />
                    }
                />
            }
            // cover={
            //     data.cover ? (
            //         <img
            //             alt={data.title}
            //             src={data.cover}
            //             className="object-cover w-full h-48" // 固定高度，适配不同大小的图片
            //         />
            //     ) : (
            //         <div className="bg-gray-700 w-full h-48 flex items-center justify-center">
            //             {/* 默认封面 */}
            //             <p className="text-white text-lg font-semibold text-center">暂无图片</p>
            //         </div>
            //     )
            // }
            onClick={
                data.src ? () => window.open(data.src, '_blank') : undefined
            }>
            {data.full_description ? data.full_description : ''}
        </Card>
    );
};

export default ProjectCard;
