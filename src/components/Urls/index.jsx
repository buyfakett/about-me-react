import React from "react";
import {Button} from "@douyinfe/semi-ui";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate()
    return (
        <div
            className="w-[60%] mx-auto min-h-screen dark:bg-gray-900 text-white flex flex-col items-center p-4 mt-3"
        >
            <div className="w-full flex justify-start text-white">
                <Button
                    theme='outline'
                    type='tertiary'
                    onClick={() => navigate('/')}
                >
                    <IoIosArrowBack/>
                    返回首页
                </Button>
            </div>
        </div>
    );
};

export default Index;
