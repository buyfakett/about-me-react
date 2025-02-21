import React from 'react';
import Giscus from '@giscus/react';

const Comment = () => {
    return (
        <div className="w-[60%] mx-auto mt-10">
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
