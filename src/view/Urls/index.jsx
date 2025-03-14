import React, { useEffect } from 'react';
import { urlList } from '@/config';
import UrlsCategorySection from './UrlsCategorySection';
import SecondaryInterface from '@/util/SecondaryInterface';

const Index = () => {
    useEffect(() => {
        // 处理初始hash跳转
        const handleInitialHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // 设置Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        window.history.replaceState(null, null, `#${id}`);
                    }
                });
            },
            { threshold: 0.5 },
        );

        // 观察所有h2元素
        const headings = document.querySelectorAll('h2[id]');
        headings.forEach((heading) => observer.observe(heading));

        handleInitialHash();

        // 清理函数
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <SecondaryInterface width="w-[60%]">
            {Object.keys(urlList).map((categoryKey) => {
                const category = urlList[categoryKey];
                return (
                    <UrlsCategorySection
                        key={categoryKey}
                        title={category.title}
                        describe={category.describe}
                        data={category.data}
                    />
                );
            })}
        </SecondaryInterface>
    );
};

export default Index;
