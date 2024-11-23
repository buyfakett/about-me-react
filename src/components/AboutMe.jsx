import React from "react";
import {motion} from "framer-motion";
import HeadPortrait from "./AboutMe/HeadPortrait";
import LanguageSection from "./AboutMe/LanguageSection";
import {TypingAnimation} from "./magicui/TypingAnimation";
import WorkExperience from "./AboutMe/WorkExperience";

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

                    <TypingAnimation
                        text={[
                            "Hi ! I'm a full stack engineer, mainly responsible for operations and maintenance.",
                            `The following are language usage statistics starting from ${wakatimeData.start_time}`
                        ].join('\n')}
                        duration={20}
                        className="text-lg"
                    />
            </header>

            <LanguageSection
                languages={wakatimeData.languages}
            />

            {/*<WorkExperience />*/}

        </div>
    );
};

export default AboutMe;
