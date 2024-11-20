import React from "react";
import {motion} from "framer-motion";
import HeadPortrait from "./HeadPortrait/HeadPortrait";
import LanguageSection from "./LanguageSection/LanguageSection";

const AboutMe = ({wakatimeData, headPortrait}) => {
    return (
        <div className="min-h-screen dark:bg-gray-900 text-white flex flex-col items-center justify-center p-4">

            <HeadPortrait headPortrait={headPortrait}/>

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
                    Hello! I'm a full stack engineer, mainly responsible for operations and maintenance
                    <br/>
                    The following are language usage statistics starting from {wakatimeData.start_time}
                </motion.p>
            </header>

            <LanguageSection languages={wakatimeData.languages}/>

        </div>
    );
};

export default AboutMe;
