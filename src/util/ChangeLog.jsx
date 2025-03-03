import React from 'react';
import Markdown from 'react-markdown';
import changelog from '@/../CHANGELOG.md';
import SecondaryInterface from '@/util/SecondaryInterface';

const ChangeLog = () => {
    return (
        <SecondaryInterface width="w-[60%]">
            <h1 className="mb-10 text-3xl font-bold mt-10">ChangeLog</h1>
            <div className="text-xl leading-loose">
                <Markdown>{changelog}</Markdown>
            </div>
        </SecondaryInterface>
    );
};

export default ChangeLog;
