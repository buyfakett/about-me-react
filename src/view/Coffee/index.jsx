import React from 'react';
import { imgUrl } from '@/config';
import { Image } from '@douyinfe/semi-ui';
import SecondaryInterface from '@/util/SecondaryInterface';

const Coffee = () => {
    return (
        <SecondaryInterface width="w-[80%]">
            <div className="text-center mt-10">
                <h1 className="mb-4 text-3xl font-bold">Buy me a coffee</h1>
                <p className="mb-8 text-lg text-gray-400">
                    If you like my project, you can treat me to a cup of coffee
                    ☕ Thank you for your support.
                </p>
                <div className="flex gap-8 justify-center mb-10">
                    <Image src={imgUrl.pay.wechat} className="w-64 h-auto" />
                    <Image src={imgUrl.pay.ali} className="w-64 h-auto" />
                </div>
                <div className="text-lg mb-10">
                    <h2 className="mb-2 text-xl font-semibold">
                        Communicate with me
                    </h2>
                </div>
            </div>
        </SecondaryInterface>
    );
};

export default Coffee;
