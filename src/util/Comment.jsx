import React from 'react';
import Giscus from '@giscus/react';
import { useLocation } from 'react-router';

const Comment = () => {
    const location = useLocation(); // 获取当前路径
    const currentPath = location.pathname;
    let commentWidth;

    switch (currentPath) {
        case '/pictures':
        case '/coffee':
            commentWidth = 'w-[80%]';
            break;
        case '/projects':
            commentWidth = 'w-[70%]';
            break;
        default:
            commentWidth = 'w-[60%]';
            break;
    }

    return (
        <div className={`${commentWidth} mx-auto mt-10`}>
            <Giscus
                id="comments"
                repo="buyfakett/blog-comments"
                repoId="R_kgDONjzEIQ"
                category="Q&A"
                categoryId="DIC_kwDONjzEIc4Clmn0"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="noborder_dark"
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    );
};

export default Comment;
