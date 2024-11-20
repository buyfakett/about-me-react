import React from "react";
import {HeadPortraitCircle} from "./HeadPortraitCircle";


const HeadPortrait = ({headPortrait}) => {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-300">
            <HeadPortraitCircle>
                <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={headPortrait}
                    alt=""/>
            </HeadPortraitCircle>

        </div>

    );
};

export default HeadPortrait;
