import { cn } from '@/lib/utils';
import React from 'react';

export interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
    initialRotation?: number;
}

export function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 0,
    radius = 50,
    path = true,
    initialRotation = 0,
}: OrbitingCirclesProps) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    style={{
                        transform: `rotate(${initialRotation}deg)`,
                    }}
                    className="pointer-events-none absolute inset-0 size-full">
                    <circle
                        className="stroke-black/10 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            <div
                style={
                    {
                        '--duration': duration,
                        '--radius': radius,
                        '--delay': delay,
                        '--initial-rotation': initialRotation,
                        transform: `rotate(${initialRotation}deg)`,
                    } as React.CSSProperties
                }
                className={cn(
                    'absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-none bg-transparent [animation-delay:calc(var(--delay)*1s)]',
                    { '[animation-direction:reverse]': reverse },
                    className,
                )}>
                {children}
            </div>
        </>
    );
}
