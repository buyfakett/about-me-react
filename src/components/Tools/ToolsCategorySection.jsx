import React from 'react';
import ToolSection from './ToolSection';

const ToolsCategorySection = ({title, categories}) => {
    return (
        <div>
            <h2 className="mb-6 text-xl font-bold">{title}</h2>
            {categories.map((category, index) => (
                <div className="mb-8" key={index}>
                    <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
                    {Object.values(category.sections).map((section, sectionIndex) => (
                        <div className="mb-6" key={sectionIndex}>
                            <ToolSection title={section.title} tools={section.tools}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ToolsCategorySection;
