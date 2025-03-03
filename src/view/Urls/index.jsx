import React from 'react';
import { urlList } from '@/config';
import ToolsCategorySection from './UrlsCategorySection';
import SecondaryInterface from '@/util/SecondaryInterface';

const Index = () => {
    return (
        <SecondaryInterface width="w-[60%]">
            {Object.keys(urlList).map((categoryKey) => {
                const category = urlList[categoryKey];
                return (
                    <ToolsCategorySection
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
