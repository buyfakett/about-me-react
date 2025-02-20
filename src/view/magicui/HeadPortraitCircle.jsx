import React from 'react';
import { OrbitingCircles } from './OrbitingCircles';
import { FaGithub } from 'react-icons/fa';
import { DiGo, DiPython, DiReact } from 'react-icons/di';

export function HeadPortraitCircle({ children }) {
    return (
        <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                {children}
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}>
                <FaGithub size={50} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}>
                <DiPython size={50} />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse>
                <DiGo size={60} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={20}
                reverse>
                <DiReact size={60} />
            </OrbitingCircles>
        </div>
    );
}
