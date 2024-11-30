export const skipUrl = {
    aboutMe: "www.tteam.icu",
    note: "https://note.tteam.icu",
    blog: "https://blog.tteam.icu",
    github: "https://github.com/buyfakett",
    bili: "https://space.bilibili.com/11479221",
    muen: "https://www.tmofamily.com",
    zhenshan: "https://www.gisquest.com",
};

export const imgUrl = {
    headPortrait: "https://tc.tteam.icu/i/2024/10/22/xhykcg-3.webp",
    muen: "https://img.tteam.icu/i/2024/11/23/sc6avk-3.webp",
    zhenshan: "https://img.tteam.icu/i/2024/11/23/sfh8fk-3.webp",
};

export const umamiScript = "https://umami.tteam.icu/script.js";

const apiBaseUrl = "https://api.blog.tteam.icu";

export const umamiId = "12d3e9e9-3982-43a1-a285-e2f611073a71";

export const apiList = {
    wakaTime: `${apiBaseUrl}/waka_time.json`,
}

export const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

export const softwareTools = {
    development: {
        title: 'Development',
        sections: {
            ide: {
                title: 'IDE & Editors',
                tools: [
                    {
                        name: 'Sublime Text',
                        description: 'Text Editing, Done Right',
                        href: 'https://www.sublimetext.com/'
                    },
                    {
                        name: 'VS Code',
                        description: 'Code Editor',
                        href: 'https://code.visualstudio.com/'
                    },
                    {
                        name: 'JetBrains Suite',
                        description: 'Professional IDEs',
                        href: 'https://www.jetbrains.com/'
                    }
                ]
            }
        }
    },
    productivity: {
        title: 'Productivity',
        sections: {
            browser: {
                title: 'Browsers',
                tools: [
                    {
                        name: 'Google Chrome',
                        description: 'Web Browser',
                        href: 'https://www.google.com/chrome/'
                    }
                ]
            },
            notes: {
                title: 'Note Taking',
                tools: [
                    {
                        name: 'Obsidian',
                        description: 'Note Taking',
                        href: 'https://obsidian.md/'
                    },
                    {
                        name: 'Typora',
                        description: 'Markdown',
                        href: 'https://typoraio.cn/'
                    }
                ]
            },
            tools: {
                title: 'Productivity Tools',
                tools: [
                    {
                        name: 'draw.io',
                        description: 'Drawing tools',
                        href: 'https://draw.io/'
                    },
                    {
                        name: 'PicGo',
                        description: 'A tool for quickly uploading images and obtaining image URL links',
                        href: 'https://github.com/Molunerfinn/PicGo'
                    },
                    {
                        name: 'Fluent Reader',
                        description: 'RSS Reader',
                        href: 'https://github.com/yang991178/fluent-reader'
                    }
                ]
            }
        }
    }
}


export const devices = {
    computing: {
        title: 'Computing Devices',
        sections: {
            devices: {
                title: 'Devices',
                tools: [
                    {
                        name: 'MacBook Air M1',
                        description: '主力机&移动办公 (16GB, 512GB)',
                    },
                    {
                        name: '暗影精灵',
                        description: 'win (i5 10th, 16GB, 512GB+1T)',
                    },
                    {
                        name: 'Nas',
                        description: 'debian (N100, 12T*4, raid5)',
                    },
                    {
                        name: 'Home Server',
                        description: 'PVE (N305, 1T SSD+1T HDD)',
                    }
                ]
            }
        }
    },
    mobile: {
        title: 'Mobile Devices',
        sections: {
            phone: {
                title: 'Phone',
                tools: [
                    {
                        name: 'XiaoMi 13 Pro',
                        description: '手机 (512GB)'
                    },
                    {
                        name: 'iPhone 10',
                        description: '手机 (128GB)'
                    }
                ]
            },
            tablet: {
                title: 'Tablet',
                tools: [
                    {
                        name: 'XiaoMi Pad 6 Pro',
                        description: '平板 (256GB)'
                    }
                ]
            }
        }
    },
    wearables: {
        title: 'Smart Wearables',
        sections: {
            watch: {
                title: 'Smart Watch',
                tools: [
                    {
                        name: 'XiaoMi Bond 8 NFC',
                        description: '手环'
                    }
                ]
            },
            audio: {
                title: 'Audio Devices',
                tools: [
                    {
                        name: 'XiaoMi Buds 5',
                        description: '无线耳机'
                    },
                    {
                        name: 'Sony WH-XM3',
                        description: '头戴式耳机'
                    }
                ]
            }
        }
    },
    imaging: {
        title: 'Imaging Equipment',
        sections: {
            cameras: {
                title: 'Camera System',
                tools: [
                    {
                        name: 'Nikon ZFC',
                        description: '相机'
                    },
                    {
                        name: 'Nikon 16-50mm',
                        description: '变焦镜头'
                    }
                ]
            }
        }
    }
}