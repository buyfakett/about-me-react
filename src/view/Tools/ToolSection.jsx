import React from 'react';
import { cn } from '@/lib/utils';

const ToolSection = ({ className, title, tools, ...props }) => {
    return (
        <div
            className={cn(
                className,
                'flex flex-col rounded-xl border border-border py-5 px-3 gap-y-4 sm:gap-y-6',
            )}
            {...props}>
            <h2 className="px-2 text-lg font-medium">{title}</h2>
            <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
                {tools.map((tool, index) => (
                    <a
                        key={index}
                        className="group relative hover:bg-transparent cursor-pointer"
                        href={tool.href}
                        id={tool.name}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="relative flex flex-row items-center gap-x-4 px-2 py-0.5 transition-all">
                            <div className="absolute -inset-0 z-10 rounded-lg border border-border bg-muted opacity-0 transition-all group-hover:opacity-50" />
                            <div className="z-20 flex flex-col">
                                <h3 className="font-medium">{tool.name}</h3>
                                <p className="text-muted-foreground">
                                    {tool.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ToolSection;
