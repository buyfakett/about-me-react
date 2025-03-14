import React, { useEffect, useRef } from 'react';
import ToolSection from './ToolSection';

// 生成有效的锚点ID
const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^\w-]+/g, '');

const ToolsCategorySection = ({ title, categories }) => {
    const observerRef = useRef(null);

    useEffect(() => {
        const headings = Array.from(document.querySelectorAll('h3[id]'));

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        history.replaceState(null, null, `#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: '0px 0px -50% 0px',
                threshold: 1,
            },
        );

        headings.forEach((heading) => observerRef.current.observe(heading));

        // 处理初始hash
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            target?.scrollIntoView();
        }

        return () => {
            headings.forEach((heading) =>
                observerRef.current.unobserve(heading),
            );
            observerRef.current.disconnect();
        };
    }, [categories]);

    return (
        <div>
            <h2 className="mb-6 text-xl font-bold">{title}</h2>
            {categories.map((category, index) => (
                <div className="mb-8" key={index}>
                    <h3
                        id={slugify(category.title)}
                        className="mb-4 text-lg font-semibold scroll-mt-24">
                        {category.title}
                    </h3>
                    {Object.values(category.sections).map(
                        (section, sectionIndex) => (
                            <div className="mb-6" key={sectionIndex}>
                                <ToolSection
                                    title={section.title}
                                    tools={section.tools}
                                />
                            </div>
                        ),
                    )}
                </div>
            ))}
        </div>
    );
};

export default ToolsCategorySection;
