import React from "react";
import {motion} from "framer-motion";
import clsx from "clsx";
import {NumberTicker} from "../magicui/NumberTicker";
import {TypingAnimation} from "../magicui/TypingAnimation";

const AboutMe = ({start_time, languages}) => {
    return (
        <>
            {/* 文字介绍 */}
            <div className="text-center mb-8">
                <TypingAnimation
                    text={[
                        "Hi ! I'm a full stack engineer, mainly responsible for operations and maintenance.",
                        `The following are language usage statistics starting from ${start_time}`
                    ].join('\n')}
                    duration={20}
                    className="text-lg"
                />
            </div>

            {/* 语言使用时间排行榜 */}
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
                                    "h-9 flex items-center px-0.1 text-sm font-medium",
                                    lang.color
                                )}
                                style={{width: `${lang.percentage}%`}}
                            >
                                &nbsp;&nbsp;
                                {lang.name}
                                &nbsp;&nbsp;
                                <NumberTicker
                                    value={lang.percentage}
                                    decimalPlaces={2}
                                />%
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AboutMe;
