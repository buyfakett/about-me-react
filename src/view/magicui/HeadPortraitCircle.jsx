import React from 'react';
import { OrbitingCircles } from './OrbitingCircles';
import { FaCentos, FaGithub, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { DiGo, DiPython } from 'react-icons/di';
import { SiProxmox } from 'react-icons/si';

export function HeadPortraitCircle({ children }) {
    return (
        <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                {children}
            </span>

            {/* 内圈图标 */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                radius={100}
                initialRotation={0}
                path={true}>
                <FaGithub
                    size={25}
                    className="text-gray-600 dark:text-gray-300"
                />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                radius={100}
                initialRotation={90}
                path={true}>
                <SiProxmox
                    size={25}
                    className="text-gray-600 dark:text-gray-300"
                />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                radius={100}
                initialRotation={180}
                path={false}>
                <DiPython
                    size={35}
                    className="text-gray-600 dark:text-gray-300"
                />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                radius={100}
                initialRotation={270}
                path={false}>
                <FaCentos
                    size={25}
                    className="text-gray-600 dark:text-gray-300"
                />
            </OrbitingCircles>

            {/* 外圈图标 */}
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={200}
                duration={20}
                initialRotation={0}
                path={true}
                reverse>
                <DiGo size={35} className="text-gray-600 dark:text-gray-300" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={200}
                duration={20}
                initialRotation={90}
                path={false}
                reverse>
                <FaReact
                    size={30}
                    className="text-gray-600 dark:text-gray-300"
                />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={200}
                duration={20}
                initialRotation={180}
                path={false}
                reverse>
                <FaVuejs
                    size={30}
                    className="text-gray-600 dark:text-gray-300"
                />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                radius={200}
                duration={20}
                initialRotation={250}
                path={false}
                reverse>
                <FaPhp size={30} className="text-gray-600 dark:text-gray-300" />
            </OrbitingCircles>
        </div>
    );
}
