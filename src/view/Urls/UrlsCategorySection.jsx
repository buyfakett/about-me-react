import React from 'react';
import CustomCardList from './CustomCardList';

const UrlsCategorySection = ({ title, data, describe }) => {
    return (
        <div className="w-full">
            <h2
                id={title.toLowerCase().replace(/\s+/g, '-')}
                className="mb-6 text-xl font-bold mt-10">
                {title}
            </h2>
            <h3 className="mb-6 text-ml font-bold">{describe}</h3>
            <div className="mb-6">
                <CustomCardList data={data} />
            </div>
        </div>
    );
};

export default UrlsCategorySection;
