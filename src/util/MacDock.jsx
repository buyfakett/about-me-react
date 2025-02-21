import React from 'react';

import { Dock, DockIcon } from '@/view/magicui/DockUtil';
import { FaGithub } from 'react-icons/fa';

export function MacDock() {
    return (
        <div className="relative">
            <Dock direction="middle">
                <DockIcon>
                    <FaGithub />
                </DockIcon>
                <DockIcon>
                    <FaGithub />
                </DockIcon>
                <DockIcon>
                    <FaGithub />
                </DockIcon>
                <DockIcon>
                    <FaGithub />
                </DockIcon>
            </Dock>
        </div>
    );
}
