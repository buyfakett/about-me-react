import React from "react";

const HeadPortrait = ({headPortrait}) => {
    return (
        <div className="bg-gray-900 text-gray-300">
            <img
                className="w-32 h-32 rounded-full object-cover"
                src={headPortrait}
                alt=""/>
        </div>

    );
};

export default HeadPortrait;
