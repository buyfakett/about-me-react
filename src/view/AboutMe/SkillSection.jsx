import React from 'react';
import { motion } from 'motion/react';

const SkillSection = ({ sections }) => {
    return (
        <section className="flex flex-col gap-y-5">
            <div className="font-bold">
                The following levels are from the perspective of OPS
            </div>
            {sections.map((section, index) => (
                <motion.div
                    className="flex flex-col gap-y-3"
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}>
                    {/* 左侧标题 */}
                    <h3 className="font-medium text-lg">{section.title}</h3>
                    {/* 右侧按钮组 */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {section.items.map((item, idx) => (
                            <button
                                key={idx}
                                className="inline-flex items-center gap-x-1 bg-primary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input cursor-default rounded-xl">
                                <p>{item}</p>
                            </button>
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default SkillSection;
