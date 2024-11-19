import React from "react";
import {motion} from "framer-motion";
import clsx from "clsx";
import HeadPortrait from "./AboutMe/HeadPortrait/HeadPortrait";

const AboutMe = ({languages, headPortrait}) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <HeadPortrait headPortrait={headPortrait} />
            {/* Header Section */}
            <header className="text-center mb-8">
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    About Me
                </motion.h1>
                <motion.p
                    className="text-lg"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.5}}
                >
                    Hello! I'm a developer passionate about creating efficient and scalable software solutions.
                </motion.p>
            </header>

            {/* Language Section */}
            <section className="w-full max-w-xl">
                <h2 className="text-2xl font-semibold mb-4">Languages I Use</h2>
                <div className="space-y-4">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            className="w-full bg-gray-800 rounded-lg overflow-hidden"
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            <div
                                className={clsx(
                                    "h-8 flex items-center px-2 text-sm font-medium",
                                    lang.color
                                )}
                                style={{width: `${lang.percentage}%`}}
                            >
                                {lang.name} ({lang.percentage}%)
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
