import React from "react";

const SkillSection = ({sections}) => {
    return (
        <section className="flex flex-col gap-y-5">
            {sections.map((section, index) => (
                <div className="flex flex-col gap-y-3" key={index}>
                    {/* 左侧标题 */}
                    <h3 className="font-medium text-lg">{section.title}</h3>
                    {/* 右侧按钮组 */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {section.items.map((item, idx) => (
                            <button
                                key={idx}
                                className="inline-flex items-center gap-x-1 bg-primary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input cursor-default rounded-xl"
                            >
                                <p>{item}</p>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SkillSection;
