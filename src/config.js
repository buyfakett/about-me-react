export const myName = "buyfakett";

export const skipUrl = {
    aboutMe: "www.tteam.icu",
    note: "https://note.tteam.icu",
    blog: "https://blog.tteam.icu",
    github: "https://github.com/buyfakett",
    bili: "https://space.bilibili.com/11479221",
    muen: {
        cn: "https://website.tmofamily.com",
        en: "https://www.es.tmofamily.com",
    },
    zhenshan: "https://www.gisquest.com",
    email: "mailto:work@tteam.icu",
    x: "https://x.com/buyfakettOvO",
};

export const imgUrl = {
    pay: {
        wechat: "https://img.tteam.icu/i/2025/01/24/qngxzy-3.webp",
        ali: "https://img.tteam.icu/i/2025/01/24/qt78qk-3.webp",
    },
    headPortrait: "https://img.tteam.icu/i/2024/10/22/xhykcg-3.webp",
    muen: "https://img.tteam.icu/i/2024/11/23/sc6avk-3.webp",
    zhenshan: "https://img.tteam.icu/i/2024/11/23/sfh8fk-3.webp",
};

export const umamiScript = "https://umami.tteam.icu/script.js";

const apiBaseUrl = "https://blog-api.tteam.icu";

export const umamiId = "12d3e9e9-3982-43a1-a285-e2f611073a71";

export const apiList = {
    wakaTime: `${apiBaseUrl}/waka_time`,
    blog: `${apiBaseUrl}/blog`,
    projectData: `${apiBaseUrl}/project_list`,
    urlList: `${apiBaseUrl}/url_list`,
    softwareTools: `${apiBaseUrl}/software_tools`,
    device: `${apiBaseUrl}/devices`,
    pictures: 'https://picture-list.tteam.icu/pictures',
}

export const pageVariants = {
    initial: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 100},
};

export const languageSkillData = [
    {
        title: "Frontend",
        items: ["React", "Vue2", "Uniapp"],
    },
    {
        title: "Backend",
        items: ["Golang", "Python", "PHP", "Java"],
    },
    {
        title: "Others",
        items: ["Shell", "VRL"],
    },
];

export const muenProjects = [
    {
        title: '配置文件中心开发(go+react)',
        content: `项目背景：旧配置系统nacos繁重不符合日益增长的项目
        项目思路：重新设计一套自研系统，并且兼容nacos的接口
        项目成果：所有项目的配置文件迁移到新系统，运行稳定
        备注：该项目完全为本人下班时间编写，所以未来会开源`,
    },
    {
        title: '日志系统重构',
        content: `项目背景：旧日志系统ELK占用资源多查询慢
        项目思路：修改为rsyslog、filebeat等收集日志到kafka，再由vector入Clickhouse
        项目成果：几十TB级日志查询能在秒级查询成功，且占用系统资源相对低`,
    },
    {
        title: '数据库备份方案重构',
        content: `项目背景：旧备份方案备份从未检查/测试，不同备份分散
        项目思路：修改为不同环境整合，修改备份方案
        项目成果：判断备份文件大小等算法自动生成报表和录入Prometheus系统，极大的降低人工巡检的成本`,
    },
    {
        title: '监控/报警系统重构',
        content: `项目背景：旧监控系统分散、不全，项目监控几乎没有
        项目思路：修改为Zabbix+Prometheus+Grafana整合监控系统
        项目成果：Zabbix主要监控服务器宿主机、虚拟机性能，Prometheus监控各种项目返回时间/占用率等指标、各种云平台余额/套餐剩余等`,
    },
    {
        title: '运维系统编写',
        content: `项目背景：上百个服务器、服务、域名信息没地方登记，测试、运营等同事经常私聊问
        项目思路：服务上线时自动上报版本信息，新增服务器就登记
        项目成果：用FastAPI+Vue完成编写，全公司权限分离自行查询上千个服务器、数据库，降低运维重复的工作`,
    },
];

export const zhenshanProjects = [
    {
        title: '杭州各区县数据清洗',
        content: `项目背景：各区县的库很多脏数据，如幢户数据不匹配
        项目思路：对比图形等数据进行手动/自动清洗
        项目成果：在合库前把脏数据清理完毕`,
    },
    {
        title: '杭州各区县合库',
        content: `项目背景：各区县的库在不同区县，查询不方便
        项目思路：各区县的图形和数据库合并
        项目成果：各区县查询同一个库`,
    },
];

export const projectData = [
    {
        title: "easyimage-go",
        description: "个人用图床",
        src: "https://github.com/buyfakett/easyimage-go",
        full_description: "使用golang编写，支持转换图片到webp"
    },
    {
        title: "confkeeper(暂未开源)",
        description: "你的配置文件中心",
        src: "https://confkeeper.tteam.icu",
        full_description: "使用golang+react编写，在生产环境中已在上千个项目验证"
    },
    {
        title: "rspress-plugin-code",
        description: "rspress插件",
        src: "https://github.com/buyfakett/rspress-plugin-code",
        full_description: "rspress插件，用于在文章中插入文件路径，渲染成代码块"
    },
    {
        title: "ding_bot",
        description: "钉钉机器人",
        src: "https://github.com/buyfakett/ding_bot",
        full_description: "@机器人可以配合jenkins自动上线服务和分发nginx配置"
    },
    {
        title: "rsspush",
        description: "检测rss状态",
        src: "https://github.com/buyfakett/rsspush",
        full_description: "推送到微信测试号和钉钉机器人的工具"
    },
    {
        title: "jenkins-build",
        description: "devops",
        src: "https://github.com/ttdockerfile/jenkins-build2/tree/2.474-debian",
        full_description: "把jenkins、node、python、golang、java等编译工具打进docker中"
    },
    {
        title: "centos7_initialization",
        description: "初始化centos7脚本",
        src: "https://github.com/buyfakett/centos7_initialization",
        full_description: "初始化centos7脚本"
    },
    {
        title: "qiniu_upload",
        description: "七牛云oss上传",
        src: "https://github.com/buyfakett/qiniu_upload",
        full_description: "七牛云oss上传封装到docker"
    },
    {
        title: "easy_send_mail",
        description: "发送邮件",
        src: "https://github.com/buyfakett/easy_send_mail",
        full_description: "用shell实现发送邮件"
    },
]

export const urlList = {
    friends: {
        title: 'Friends',
        describe: 'friends and guys',
        data: [
            {
                title: '声控烤箱',
                src: 'https://blog.kazoottt.top/',
                describe: '毛怪俱乐部前端',
                img_src: 'https://img.tteam.icu/i/2024/11/30/114ctsb-3.webp'
            },
            {
                title: '行走在云端',
                src: 'https://hexo.tomsawyer2.xyz/',
                describe: '毛怪俱乐部前端',
                img_src: 'https://img.tteam.icu/i/2024/11/30/116en4y-3.webp'
            },
            {
                title: 'Poivre',
                src: 'https://blog.poivrehxx.site/',
                describe: '毛怪俱乐部前端',
                img_src: 'https://img.tteam.icu/i/2024/12/01/xu5aoq-3.webp'
            },
            {
                title: 'Roi\'s Blog',
                src: 'https://roi.moe/',
                describe: '毛怪俱乐部运维',
                img_src: 'https://img.tteam.icu/i/2024/12/01/r8p265-3.webp'
            },
            {
                title: '思无道siudao',
                src: 'https://siwudao.github.io/',
                describe: '毛怪俱乐部切片',
                img_src: 'https://img.tteam.icu/i/2024/11/30/12e1ezb-3.webp'
            },
        ]
    },
    favorite_blogs: {
        title: 'Favorite Blogs',
        describe: 'I usually read for RSS',
        data: [
            {
                title: '星露谷值班站长',
                src: 'https://www.aityp.com/',
                img_src: 'https://img.tteam.icu/i/2024/12/03/ikaufc-3.webp'
            },
            {
                title: '我不是咕咕鸽',
                src: 'https://blog.laoda.de/',
                img_src: 'https://img.tteam.icu/i/2024/12/02/1142pyt-3.webp'
            },
        ]
    },
    tools: {
        title: 'Tools',
        describe: 'Tools commonly used in development',
        data: [
            {
                title: 'Quick Reference',
                src: 'https://quickref.cn/',
                describe: '开发人员速查表',
                img_src: 'https://img.tteam.icu/i/2024/12/04/mgpzfi-3.svg'
            },
            {
                title: 'Grep App',
                src: 'https://grep.app/',
                describe: '快速查询代码',
            },
            {
                title: 'Image compression',
                src: 'https://tinypng.com/',
                describe: '图片无损压缩',
                img_src: 'https://img.tteam.icu/i/2024/12/04/n9qbcc-3.webp'
            },
            {
                title: 'freeconvert',
                src: 'https://www.freeconvert.com/zh/heic-to-webp',
                describe: 'heic转webp',
                img_src: 'https://img.tteam.icu/i/2024/12/04/n9qbcc-3.webp'
            },
            {
                title: 'Ico download',
                src: 'https://icon-sets.iconify.design/',
                describe: '图标下载',
                img_src: 'https://img.tteam.icu/i/2024/12/09/j5s4hk-3.svg'
            },
        ]
    },
    cloud_servers: {
        title: 'Cloud Servers',
        describe: 'Cloud servers I use',
        data: [
            {
                title: '阿里云',
                src: 'https://www.aliyun.com/',
                img_src: 'https://img.tteam.icu/i/2024/12/04/ulrew2-3.webp'
            },
            {
                title: '腾讯云',
                src: 'https://curl.qcloud.com/893Idsq2',
                img_src: 'https://img.tteam.icu/i/2024/12/04/umduu0-3.webp'
            },
            {
                title: '搬瓦工',
                src: 'https://bandwagonhost.com/aff.php?aff=54032',
                describe: '国内最出名的vps',
                img_src: 'https://img.tteam.icu/i/2025/03/11/ij5jfq-3.webp'
            },
            {
                title: 'hetzner',
                src: 'https://hetzner.com/',
                describe: '欧洲阿里云',
                img_src: 'https://img.tteam.icu/i/2025/09/24/m9lj6n-3.webp'
            },
            {
                title: 'cloudcone',
                src: 'https://app.cloudcone.com/?ref=12869',
                describe: '性价比高的vps',
                img_src: 'https://img.tteam.icu/i/2025/07/29/m3mytr-3.webp'
            },
            {
                title: '狐帝云',
                src: 'https://www.szhdy.com/aff/WVTPJNVJ',
                img_src: 'https://img.tteam.icu/i/2024/12/09/itpkib-3.webp'
            },
            {
                title: 'servarica',
                src: 'https://clients.servarica.com/aff.php?aff=917',
                describe: '大盘鸡',
                img_src: 'https://img.tteam.icu/i/2024/12/09/iv06il-3.webp'
            },
            {
                title: 'VKVM',
                src: 'https://www.vkvm.info/aff/DSJLPDTA',
                describe: '可能要跑路了',
                img_src: 'https://img.tteam.icu/i/2024/12/09/iucx4h-3.webp'
            },
            {
                title: 'claw爪云',
                src: 'https://claw.cloud/',
                describe: '“阿里云母公司”',
                img_src: 'https://img.tteam.icu/i/2025/01/09/ua8hki-3.webp '
            },
        ]
    }
}

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
                        name: 'Follow',
                        description: 'RSS Reader',
                        href: 'https://follow.is'
                    },
                    {
                        name: 'Fluent Reader',
                        description: 'RSS Reader',
                        href: 'https://github.com/yang991178/fluent-reader'
                    },
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
    computer_device: {
        title: 'Computer Input Device',
        sections: {
            devices: {
                title: 'Devices',
                tools: [
                    {
                        name: '达尔优 A87 Pro',
                        description: '家用',
                    },
                    {
                        name: '达尔优 A87',
                        description: '公司用',
                    },
                    {
                        name: '罗技 G304',
                        description: '家用&公司用',
                    },
                    {
                        name: '小米挂灯 1S',
                        description: '家用护眼',
                    },
                    {
                        name: 'KOORUI MB27S7U',
                        description: '家用副屏',
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
                        name: 'iPhone 16 pro',
                        description: '手机 (256GB)'
                    },
                    {
                        name: 'XiaoMi 13 Pro',
                        description: '手机 (512GB)'
                    },
                    {
                        name: 'XiaoMi 10',
                        description: '手机 (256GB)'
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
                        name: 'XiaoMi Bond 9 pro',
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
                        name: 'XiaoMi 骨传导耳机',
                        description: '骨传导耳机'
                    },
                    {
                        name: 'Sony WH-XM3',
                        description: '头戴式耳机'
                    },
                    {
                        name: '小爱音响 Pro',
                        description: '智能音响'
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
                        name: 'DJI Osmo Pocket 3',
                        description: 'VLOG 相机'
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
