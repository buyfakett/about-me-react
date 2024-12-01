import React from 'react';
import CustomCardList from './CustomCardList';

const ToolsCategorySection = ({title, data}) => {
    return (
        <div className="w-full">
            <h2 className="mb-6 text-xl font-bold mt-10">{title}</h2>
            <div className="mb-6">
                <CustomCardList data={data}/>
            </div>
        </div>
    );
};

export default ToolsCategorySection;