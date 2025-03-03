import React from 'react';
import ToolsCategorySection from './ToolsCategorySection';
import { devices, softwareTools } from '@/config';
import SecondaryInterface from "@/util/SecondaryInterface";

const Tools = () => {
    return (
        <SecondaryInterface width="w-[60%]">
            <div className="mt-5 flex w-full flex-col gap-y-10">
                <div>
                    <h1 className="mb-1 text-2xl font-bold">Tools & Devices</h1>
                    <p>Tools, software, and devices I use daily</p>
                </div>

                <ToolsCategorySection
                    title="Software Tools"
                    categories={Object.values(softwareTools)}
                />
                <ToolsCategorySection
                    title="Hardware Devices"
                    categories={Object.values(devices)}
                />
            </div>
        </SecondaryInterface>
    );
};

export default Tools;
