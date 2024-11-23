import React from "react";
import {HeadPortraitCircle} from "./HeadPortraitCircle";
import {motion} from "framer-motion";


const HeadPortrait = ({headPortrait}) => {
    return (
        <motion.div
            className="dark:bg-gray-900 dark:text-gray-300"
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3, delay: 0.5}}
        >
            <HeadPortraitCircle>
                <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={headPortrait}
                    alt=""/>
            </HeadPortraitCircle>
        </motion.div>

    );
};

export default HeadPortrait;
