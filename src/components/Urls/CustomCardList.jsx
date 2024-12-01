import React from 'react';
import {Card, Avatar, Popover} from '@douyinfe/semi-ui';
import {IconInfoCircle} from '@douyinfe/semi-icons';
import {cn} from "../../lib/utils";

const CustomCardList = ({data, className}) => {
    return (
        <div
            className={cn(
                className,
                'flex flex-col rounded-xl border border-gray-200 p-5 gap-y-6 sm:gap-y-8'
            )}
        >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        shadows="hover"
                        bodyStyle={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={item.src ? () => window.open(item.src, '_blank') : undefined}
                        className="group relative border border-gray-200 rounded-lg hover:shadow-lg transition-all"
                    >
                        <Card.Meta
                            title={item.title}
                            avatar={
                                <Avatar
                                    alt={item.title}
                                    size="default"
                                    src={
                                        item.img_src ? item.img_src
                                            : 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                                    }
                                />
                            }
                        />
                        {item.describe && (
                            <Popover
                                position="top"
                                showArrow
                                content={
                                    <article className="p-2 text-sm text-gray-200 bg-gray-800 rounded shadow-lg">
                                        {item.describe}
                                    </article>
                                }
                            >
                                <IconInfoCircle
                                    className="text-gray-400 group-hover:text-primary cursor-pointer"
                                />
                            </Popover>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CustomCardList;
