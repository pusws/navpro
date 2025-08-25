/* ====================================
   WebNav Hub 链接数据
   ==================================== */

// 主要导航数据
const navigationData = {
    metadata: {
        title: "WebNav Hub",
        description: "现代化的网址导航站，融合Neumorphism设计风格",
        version: "2.0.0",
        lastUpdated: "2025-08-26",
        totalLinks: 200,
        totalCategories: 6
    },

    categories: [
        {
            id: "ai-search",
            title: "AI搜索",
            icon: "fas fa-robot",
            description: "AI工具和搜索引擎",
            links: [
                {
                    id: "google",
                    title: "Google",
                    url: "https://www.google.com",
                    icon: "fa-brands fa-google",
                    description: "全球最大的搜索引擎",
                    tags: ["搜索", "引擎"]
                },
                {
                    id: "unlimited-ai",
                    title: "无限制AI",
                    url: "https://unlimitedai.chat/",
                    icon: "fa-solid fa-pepper-hot",
                    description: "无限制AI聊天工具",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "openrouter",
                    title: "OpenRouter",
                    url: "https://openrouter.ai/",
                    icon: "fa-brands fa-openid",
                    description: "AI模型路由平台",
                    tags: ["AI", "API"]
                },
                {
                    id: "websim",
                    title: "WebSim",
                    url: "https://websim.ai/",
                    icon: "fa-solid fa-magnifying-glass",
                    description: "AI网站生成工具",
                    tags: ["AI", "网站生成"]
                },
                {
                    id: "chatgpt",
                    title: "ChatGPT",
                    url: "https://chatgpt.com/",
                    icon: "fa-brands fa-google",
                    description: "OpenAI的对话AI",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "doubao",
                    title: "傻豆包",
                    url: "https://www.doubao.com/chat/",
                    icon: "fa-solid fa-paw",
                    description: "字节跳动的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "coze",
                    title: "扣子空间",
                    url: "https://space.coze.cn/",
                    icon: "fa-solid fa-shuttle-space",
                    description: "AI应用开发平台",
                    tags: ["AI", "开发"]
                },
                {
                    id: "qwen",
                    title: "通义千问",
                    url: "https://chat.qwen.ai/",
                    icon: "fa-brands fa-rocketchat",
                    description: "阿里巴巴的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "kimi",
                    title: "Kimi",
                    url: "https://kimi.moonshot.cn/",
                    icon: "fa-regular fa-moon",
                    description: "Moonshot AI的对话助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "yiyan",
                    title: "文心一言",
                    url: "https://yiyan.baidu.com/",
                    icon: "fa-solid fa-dumpster-fire",
                    description: "百度的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "yuanbao",
                    title: "腾讯元宝",
                    url: "https://yuanbao.tencent.com/",
                    icon: "fa-solid fa-robot",
                    description: "腾讯的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "minimax",
                    title: "MiniMax",
                    url: "https://www.minimax.io/",
                    icon: "fa-solid fa-minimize",
                    description: "MiniMax AI平台",
                    tags: ["AI", "平台"]
                },
                {
                    id: "z-ai",
                    title: "Z.AI",
                    url: "https://chat.z.ai/",
                    icon: "fa-solid fa-z",
                    description: "Z.AI聊天平台",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "google-aistudio",
                    title: "Google AI Studio",
                    url: "https://aistudio.google.com/",
                    icon: "fa-solid fa-robot",
                    description: "Google AI开发工具",
                    tags: ["AI", "开发"]
                },
                {
                    id: "gemini",
                    title: "Gemini",
                    url: "https://gemini.google.com/",
                    icon: "fa-brands fa-google-plus",
                    description: "Google的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "labs-google",
                    title: "Labs.Google",
                    url: "https://labs.google/fx/zh",
                    icon: "fa-brands fa-google-plus",
                    description: "Google实验室",
                    tags: ["AI", "实验"]
                },
                {
                    id: "jules-google",
                    title: "Jules.Google",
                    url: "https://jules.google.com/",
                    icon: "fa-brands fa-google-plus",
                    description: "Google Jules",
                    tags: ["AI", "工具"]
                },
                {
                    id: "copilot",
                    title: "Copilot",
                    url: "https://copilot.microsoft.com/",
                    icon: "fa-brands fa-windows",
                    description: "微软的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "nvidia",
                    title: "NVIDIA",
                    url: "https://build.nvidia.com/",
                    icon: "fa-solid fa-microchip",
                    description: "NVIDIA AI开发平台",
                    tags: ["AI", "开发"]
                },
                {
                    id: "claude",
                    title: "Claude",
                    url: "https://claude.ai/",
                    icon: "fa-solid fa-robot",
                    description: "Anthropic的AI助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "chutes-ai",
                    title: "Chutes AI",
                    url: "https://chat.chutes.ai/",
                    icon: "fa-solid fa-robot",
                    description: "Chutes AI聊天平台",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "mistral",
                    title: "Mistral",
                    url: "https://mistral.ai/",
                    icon: "fa-solid fa-brain",
                    description: "Mistral AI平台",
                    tags: ["AI", "平台"]
                },
                {
                    id: "groq",
                    title: "Groq",
                    url: "https://groq.com/",
                    icon: "fa-solid fa-group-arrows-rotate",
                    description: "Groq AI推理平台",
                    tags: ["AI", "推理"]
                },
                {
                    id: "medscape",
                    title: "Medscape",
                    url: "https://www.medscape.com/",
                    icon: "fa-solid fa-stethoscope",
                    description: "医学资讯和教育平台",
                    tags: ["医学", "教育"]
                },
                {
                    id: "heck-ai",
                    title: "Heck.AI",
                    url: "https://heck.ai/",
                    icon: "fa-brands fa-rocketchat",
                    description: "AI聊天和工具平台",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "wenxiaobai",
                    title: "问小白",
                    url: "https://www.wenxiaobai.com/",
                    icon: "fa-solid fa-mask",
                    description: "AI问答助手",
                    tags: ["AI", "问答"]
                },
                {
                    id: "chutes-ai-main",
                    title: "Chutes.AI",
                    url: "https://chutes.ai/",
                    icon: "fa-solid fa-chalkboard",
                    description: "AI教育和演示平台",
                    tags: ["AI", "教育"]
                },
                {
                    id: "huggingface",
                    title: "HuggingFace",
                    url: "https://huggingface.co/",
                    icon: "fa-solid fa-face-rolling-eyes",
                    description: "AI模型和数据集平台",
                    tags: ["AI", "模型"]
                },
                {
                    id: "lmarena",
                    title: "LMArena",
                    url: "https://lmarena.ai/",
                    icon: "fa-solid fa-robot",
                    description: "大语言模型竞技场",
                    tags: ["AI", "评测"]
                },
                {
                    id: "anyrouter",
                    title: "AnyRouter",
                    url: "https://anyrouter.top/",
                    icon: "fa-solid fa-robot",
                    description: "AI模型路由服务",
                    tags: ["AI", "路由"]
                },
                {
                    id: "x-ai",
                    title: "X.AI",
                    url: "https://x.ai/",
                    icon: "fa-brands fa-x-twitter",
                    description: "xAI平台",
                    tags: ["AI", "平台"]
                },
                {
                    id: "pce-calculator",
                    title: "PCE计算",
                    url: "https://ascvdpce.186404.xyz/",
                    icon: "fa-solid fa-heart-pulse",
                    description: "心血管风险计算器",
                    tags: ["医学", "计算器"]
                },
                {
                    id: "t3-chat",
                    title: "T3.Chat",
                    url: "https://t3.chat/",
                    icon: "fa-brands fa-rocketchat",
                    description: "AI聊天平台",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "v0",
                    title: "V0",
                    url: "https://v0.dev/",
                    icon: "fa-solid fa-v",
                    description: "Vercel的AI界面生成工具",
                    tags: ["AI", "界面生成"]
                },
                {
                    id: "deepseek",
                    title: "DeepSeek",
                    url: "https://www.deepseek.com/",
                    icon: "fa-brands fa-rocketchat",
                    description: "DeepSeek AI平台",
                    tags: ["AI", "平台"]
                },
                {
                    id: "dangbei-ai",
                    title: "当贝AI",
                    url: "https://ai.dangbei.com/",
                    icon: "fa-brands fa-rocketchat",
                    description: "当贝AI智能助手",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "genspark-ai",
                    title: "GenSpark.AI",
                    url: "https://www.genspark.ai/",
                    icon: "fa-brands fa-rocketchat",
                    description: "AI搜索和生成平台",
                    tags: ["AI", "搜索"]
                },
                {
                    id: "firebase-google",
                    title: "Firebase.Google",
                    url: "https://firebase.google.com/",
                    icon: "fa-solid fa-code-branch",
                    description: "Google应用开发平台",
                    tags: ["开发", "云服务"]
                },
                {
                    id: "kiro-dev",
                    title: "Kiro.dev",
                    url: "https://kiro.dev/",
                    icon: "fa-brands fa-rocketchat",
                    description: "开发者工具平台",
                    tags: ["开发", "工具"]
                },
                {
                    id: "sigmachat",
                    title: "SigmaChat",
                    url: "https://sigmabrowser.com/chat",
                    icon: "fa-brands fa-rocketchat",
                    description: "Sigma浏览器AI聊天",
                    tags: ["AI", "聊天"]
                },
                {
                    id: "siliconflow",
                    title: "硅基流动",
                    url: "https://siliconflow.cn/",
                    icon: "fa-brands fa-confluence",
                    description: "AI云计算平台",
                    tags: ["AI", "云计算"]
                },
                {
                    id: "modelscope",
                    title: "魔塔社区",
                    url: "https://www.modelscope.cn/",
                    icon: "fa-solid fa-code-branch",
                    description: "AI模型开源社区",
                    tags: ["AI", "开源"]
                },
                {
                    id: "readdy-ai",
                    title: "Readdy",
                    url: "https://readdy.ai/",
                    icon: "fa-solid fa-bolt",
                    description: "AI阅读助手",
                    tags: ["AI", "阅读"]
                },
                {
                    id: "bolt-new",
                    title: "Bolt.new",
                    url: "https://bolt.new/",
                    icon: "fa-solid fa-bolt",
                    description: "AI代码生成工具",
                    tags: ["AI", "代码生成"]
                }
            ]
        },

        {
            id: "social",
            title: "社交媒体",
            icon: "fas fa-users",
            description: "社交平台和开发工具",
            links: [
                {
                    id: "facebook",
                    title: "Facebook",
                    url: "https://www.facebook.com",
                    icon: "fa-brands fa-facebook",
                    description: "全球最大的社交网络",
                    tags: ["社交", "网络"]
                },
                {
                    id: "twitter",
                    title: "Twitter",
                    url: "https://x.com/",
                    icon: "fa-brands fa-twitter",
                    description: "微博社交平台",
                    tags: ["社交", "微博"]
                },
                {
                    id: "twitter-video-download",
                    title: "推特视频下载",
                    url: "https://twitterxz.com/",
                    icon: "fa-brands fa-x-twitter",
                    description: "推特视频下载工具",
                    tags: ["下载", "视频"]
                },
                {
                    id: "instagram",
                    title: "Instagram",
                    url: "https://www.instagram.com",
                    icon: "fa-brands fa-instagram",
                    description: "图片分享社交平台",
                    tags: ["社交", "图片"]
                },
                {
                    id: "reddit",
                    title: "Reddit",
                    url: "https://www.reddit.com",
                    icon: "fa-brands fa-reddit",
                    description: "新闻聚合和讨论网站",
                    tags: ["社交", "讨论"]
                },
                {
                    id: "github",
                    title: "GitHub",
                    url: "https://github.com/",
                    icon: "fa-brands fa-github",
                    description: "代码托管和协作平台",
                    tags: ["开发", "代码"]
                },
                {
                    id: "youtube-subtitle-download",
                    title: "油管字幕下载",
                    url: "https://www.downloadyoutubesubtitles.com/",
                    icon: "fa-brands fa-youtube",
                    description: "YouTube字幕下载工具",
                    tags: ["下载", "字幕"]
                },
                {
                    id: "youtube-video-download",
                    title: "油管视频下载",
                    url: "https://www.y2mate.com/",
                    icon: "fa-solid fa-download",
                    description: "YouTube视频下载工具",
                    tags: ["下载", "视频"]
                },
                {
                    id: "video-download-iiilab",
                    title: "视频下载",
                    url: "https://youtube.iiilab.com/",
                    icon: "fa-solid fa-download",
                    description: "在线视频下载工具",
                    tags: ["下载", "视频"]
                },
                {
                    id: "suno",
                    title: "Suno",
                    url: "https://suno.com/",
                    icon: "fa-solid fa-music",
                    description: "AI音乐生成平台",
                    tags: ["AI", "音乐"]
                },
                {
                    id: "movie-nav",
                    title: "电影导航",
                    url: "https://mv.186404.xyz/",
                    icon: "fa-solid fa-tv",
                    description: "电影和电视剧导航",
                    tags: ["电影", "娱乐"]
                },
                {
                    id: "vercel",
                    title: "Vercel",
                    url: "https://vercel.com/",
                    icon: "fa-solid fa-v",
                    description: "前端部署平台",
                    tags: ["部署", "前端"]
                },
                {
                    id: "netlify",
                    title: "Netlify",
                    url: "https://www.netlify.com/",
                    icon: "fa-brands fa-n",
                    description: "静态网站部署平台",
                    tags: ["部署", "静态网站"]
                },
                {
                    id: "railway",
                    title: "Railway",
                    url: "https://railway.com/",
                    icon: "fa-solid fa-archway",
                    description: "应用部署平台",
                    tags: ["部署", "应用"]
                },
                {
                    id: "render",
                    title: "Render",
                    url: "https://render.com/",
                    icon: "fa-solid fa-draw-polygon",
                    description: "云服务和部署平台",
                    tags: ["部署", "云服务"]
                },
                {
                    id: "deno-deploy",
                    title: "Deno Deploy",
                    url: "https://deno.com/deploy",
                    icon: "fa-solid fa-d",
                    description: "Deno应用部署平台",
                    tags: ["部署", "Deno"]
                },
                {
                    id: "savefrom",
                    title: "SaveFrom",
                    url: "https://zh.savefrom.net/",
                    icon: "fa-solid fa-share-from-square",
                    description: "在线视频下载工具",
                    tags: ["下载", "视频"]
                },
                {
                    id: "popcorn-video",
                    title: "爆米花视频",
                    url: "https://goingbus.com/",
                    icon: "fa-brands fa-n",
                    description: "视频播放平台",
                    tags: ["视频", "播放"]
                },
            ]
        },

        {
            id: "tools",
            title: "实用工具",
            icon: "fas fa-tools",
            description: "各种在线工具和服务",
            links: [
                {
                    id: "google-translate",
                    title: "Google翻译",
                    url: "https://translate.google.com",
                    icon: "fa-solid fa-language",
                    description: "在线翻译工具",
                    tags: ["翻译", "语言"]
                },
                {
                    id: "short-link",
                    title: "短链",
                    url: "https://d.186404.xyz/",
                    icon: "fa-solid fa-link",
                    description: "URL短链接生成工具",
                    tags: ["工具", "链接"]
                },
                {
                    id: "dynv6",
                    title: "Dynv6",
                    url: "https://dynv6.com/",
                    icon: "fa-solid fa-network-wired",
                    description: "动态DNS服务",
                    tags: ["DNS", "网络"]
                },
                {
                    id: "fast-com",
                    title: "网速测试",
                    url: "https://fast.com/",
                    icon: "fa-solid fa-gauge-high",
                    description: "网络速度测试",
                    tags: ["网速", "测试"]
                },
                {
                    id: "cloudflare",
                    title: "Cloudflare",
                    url: "https://www.cloudflare.com/zh-cn/",
                    icon: "fa-solid fa-shield-halved",
                    description: "CDN和网络安全服务",
                    tags: ["CDN", "安全"]
                },
                {
                    id: "cloudns",
                    title: "CloudNS",
                    url: "https://www.cloudns.net/",
                    icon: "fa-solid fa-cloud",
                    description: "DNS托管服务",
                    tags: ["DNS", "托管"]
                },
                {
                    id: "yigepenyou",
                    title: "一个朋友",
                    url: "https://ygpy.net/",
                    icon: "fa-solid fa-user-group",
                    description: "社交和交友平台",
                    tags: ["社交", "交友"]
                },
                {
                    id: "google-notebook",
                    title: "谷歌笔记",
                    url: "https://notebooklm.google/",
                    icon: "fa-solid fa-book",
                    description: "Google笔记和文档工具",
                    tags: ["笔记", "文档"]
                },
                {
                    id: "temp-email",
                    title: "临时邮箱",
                    url: "https://email.ml/",
                    icon: "fa-solid fa-envelope",
                    description: "临时邮箱服务",
                    tags: ["邮箱", "临时"]
                },
                {
                    id: "ajie-blog",
                    title: "A姐",
                    url: "https://www.ahhhhfs.com/",
                    icon: "fa-solid fa-blog",
                    description: "A姐科技博客",
                    tags: ["博客", "科技"]
                },
                {
                    id: "cursor",
                    title: "Cursor",
                    url: "https://www.cursor.com/",
                    icon: "fa-solid fa-i-cursor",
                    description: "AI代码编辑器",
                    tags: ["编辑器", "AI"]
                },
                {
                    id: "fontawesome",
                    title: "FontAwesome图标",
                    url: "https://fontawesome.com/",
                    icon: "fa-solid fa-icons",
                    description: "图标字体库",
                    tags: ["图标", "字体"]
                },
                {
                    id: "ip-clean-check",
                    title: "IP清洁度查询",
                    url: "https://scamalytics.com/",
                    icon: "fa-solid fa-icons",
                    description: "IP地址清洁度检测",
                    tags: ["IP", "检测"]
                },
                {
                    id: "test-ipv6",
                    title: "Test-IPv6",
                    url: "https://test-ipv6.com/",
                    icon: "fa-solid fa-ethernet",
                    description: "IPv6连接测试",
                    tags: ["IPv6", "测试"]
                },
                {
                    id: "zone-ip",
                    title: "Zone/IP",
                    url: "https://html.zone/ip",
                    icon: "fa-brands fa-sourcetree",
                    description: "IP地址查询工具",
                    tags: ["IP", "查询"]
                },
                {
                    id: "lumiproxy",
                    title: "免费网络代理",
                    url: "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/",
                    icon: "fa-solid fa-unlock",
                    description: "免费在线代理服务",
                    tags: ["代理", "免费"]
                },
                {
                    id: "ipcheck-ing",
                    title: "IPCheck",
                    url: "https://ipcheck.ing/",
                    icon: "fa-solid fa-location-dot",
                    description: "IP地址检查工具",
                    tags: ["IP", "检查"]
                },
                {
                    id: "cron-job",
                    title: "定时任务Cron-Job",
                    url: "https://console.cron-job.org/",
                    icon: "fa-solid fa-ethernet",
                    description: "在线定时任务服务",
                    tags: ["定时任务", "自动化"]
                },
                {
                    id: "uptimerobot",
                    title: "UptimeRobot",
                    url: "https://uptimerobot.com/",
                    icon: "fa-solid fa-location-dot",
                    description: "网站监控和告警服务",
                    tags: ["监控", "告警"]
                },
                {
                    id: "remove-bg",
                    title: "Remove.bg",
                    url: "https://www.remove.bg/",
                    icon: "fa-solid fa-image-portrait",
                    description: "AI背景移除工具",
                    tags: ["图片", "背景移除"]
                },
                {
                    id: "tinywow",
                    title: "TinyWow",
                    url: "https://tinywow.com/",
                    icon: "fa-brands fa-free-code-camp",
                    description: "免费在线工具集合",
                    tags: ["工具", "免费"]
                },
                {
                    id: "pdf24",
                    title: "PDF在线工具",
                    url: "https://tools.pdf24.org/",
                    icon: "fa-solid fa-file-pdf",
                    description: "PDF处理工具",
                    tags: ["PDF", "文档"]
                },
                {
                    id: "ip-sb",
                    title: "IP查询",
                    url: "https://ip.sb/",
                    icon: "fa-solid fa-location-dot",
                    description: "IP地址查询工具",
                    tags: ["IP", "查询"]
                },
                {
                    id: "dns-he",
                    title: "DNS.HE域名托管",
                    url: "https://dns.he.net/",
                    icon: "fa-solid fa-network-wired",
                    description: "DNS域名托管服务",
                    tags: ["DNS", "域名"]
                },
                {
                    id: "site-ac",
                    title: "Site域名转发",
                    url: "https://www.site.ac/",
                    icon: "fa-solid fa-right-left",
                    description: "域名转发服务",
                    tags: ["域名", "转发"]
                },
                {
                    id: "z-library",
                    title: "Z-Library",
                    url: "https://zh.go-to-library.sk/",
                    icon: "fa-solid fa-book-reader",
                    description: "电子书库",
                    tags: ["书库", "电子书"]
                },
                {
                    id: "us-kg-domain",
                    title: "US.KG域名",
                    url: "https://domain.digitalplat.org/",
                    icon: "fa-solid fa-globe",
                    description: "免费US.KG域名申请",
                    tags: ["域名", "免费"]
                },
                {
                    id: "spaceship-domain",
                    title: "Spaceship廉价域名",
                    url: "https://www.spaceship.com/zh/",
                    icon: "fa-solid fa-rocket",
                    description: "廉价域名注册服务",
                    tags: ["域名", "注册"]
                },
                {
                    id: "ip-sb",
                    title: "IP查询",
                    url: "https://ip.sb/",
                    icon: "fa-solid fa-location-dot",
                    description: "IP地址查询工具",
                    tags: ["IP", "查询"]
                },
                {
                    id: "picgo",
                    title: "PicGo",
                    url: "https://github.com/Molunerfinn/PicGo",
                    icon: "fa-solid fa-cloud-arrow-up",
                    description: "图片上传工具",
                    tags: ["图片", "上传"]
                },
                {
                    id: "cobalt",
                    title: "Cobalt",
                    url: "https://cobalt.tools/",
                    icon: "fa-brands fa-youtube",
                    description: "视频下载工具",
                    tags: ["视频", "下载"]
                },
                {
                    id: "codeium",
                    title: "Windsurf",
                    url: "https://codeium.com/",
                    icon: "fa-solid fa-code",
                    description: "AI代码助手",
                    tags: ["AI", "代码"]
                },
                {
                    id: "forwardemail",
                    title: "ForwardEmail",
                    url: "https://forwardemail.net/",
                    icon: "fa-solid fa-envelopes-bulk",
                    description: "邮箱转发服务",
                    tags: ["邮箱", "转发"]
                },
                {
                    id: "improvmx",
                    title: "ImprovMX",
                    url: "https://improvmx.com/",
                    icon: "fa-solid fa-envelopes-bulk",
                    description: "邮箱转发服务",
                    tags: ["邮箱", "转发"]
                },
                {
                    id: "github-accelerate",
                    title: "GitHub文件加速",
                    url: "https://gb.w404.nyc.mn/",
                    icon: "fa-brands fa-github",
                    description: "GitHub文件下载加速",
                    tags: ["GitHub", "加速"]
                },
                {
                    id: "hostry-dns",
                    title: "HostryDNS域名托管",
                    url: "https://hostry.com/",
                    icon: "fa-solid fa-clock-rotate-left",
                    description: "DNS域名托管服务",
                    tags: ["DNS", "域名"]
                },
                {
                    id: "sitelutions-domain",
                    title: "免费域名 Sitelutions",
                    url: "https://www.sitelutions.com/",
                    icon: "fa-solid fa-sitemap",
                    description: "免费域名注册服务",
                    tags: ["域名", "免费"]
                },
                {
                    id: "changeip-domain",
                    title: "免费域名 ChangeIP",
                    url: "https://www.changeip.com/",
                    icon: "fa-solid fa-satellite-dish",
                    description: "免费域名注册服务",
                    tags: ["域名", "免费"]
                },
                {
                    id: "dnsexit-domain",
                    title: "免费域名 DNSExit",
                    url: "https://dnsexit.com/",
                    icon: "fa-solid fa-users",
                    description: "免费域名注册服务",
                    tags: ["域名", "免费"]
                },
                {
                    id: "gname-domain",
                    title: "免费域名 GName",
                    url: "https://www.gname.vip/",
                    icon: "fa-solid fa-users",
                    description: "免费域名注册服务",
                    tags: ["域名", "免费"]
                },
                {
                    id: "nslookup-io",
                    title: "DNS查找 NSLookup",
                    url: "https://www.nslookup.io/",
                    icon: "fa-solid fa-arrows-rotate",
                    description: "DNS查询和分析工具",
                    tags: ["DNS", "查询"]
                },
                {
                    id: "ping0",
                    title: "Ping0",
                    url: "https://ping0.cc/",
                    icon: "fa-solid fa-fingerprint",
                    description: "网络连接测试工具",
                    tags: ["网络", "测试"]
                },
                {
                    id: "l53-domain",
                    title: "L53免费域名",
                    url: "https://customer.l53.net/",
                    icon: "fa-solid fa-fingerprint",
                    description: "L53免费域名注册",
                    tags: ["域名", "免费"]
                },
                {
                    id: "free-proxy-cz",
                    title: "Free-Proxy",
                    url: "http://free-proxy.cz/en/",
                    icon: "fa-brands fa-internet-explorer",
                    description: "免费代理服务列表",
                    tags: ["代理", "免费"]
                },
                {
                    id: "croxyproxy",
                    title: "在线代理 CroxyProxy",
                    url: "https://www.croxyproxy.rocks/_zh/",
                    icon: "fa-solid fa-unlock",
                    description: "在线网页代理服务",
                    tags: ["代理", "在线"]
                },
                {
                    id: "markdown-editor",
                    title: "微信Markdown编辑器",
                    url: "https://doocs.github.io/md/",
                    icon: "fa-regular fa-edit",
                    description: "微信公众号Markdown编辑器",
                    tags: ["Markdown", "编辑器"]
                },
                {
                    id: "proxysite",
                    title: "ProxySite",
                    url: "https://www.proxysite.com/",
                    icon: "fa-solid fa-unlock",
                    description: "在线网页代理服务",
                    tags: ["代理", "在线"]
                },
                {
                    id: "serv00",
                    title: "Serv00",
                    url: "https://www.serv00.com/",
                    icon: "fa-solid fa-server",
                    description: "免费主机托管服务",
                    tags: ["主机", "免费"]
                },
                {
                    id: "hostuno",
                    title: "Hostuno",
                    url: "https://www.hostuno.com/",
                    icon: "fa-solid fa-server",
                    description: "免费主机托管服务",
                    tags: ["主机", "免费"]
                },
                {
                    id: "picgo",
                    title: "PicGo",
                    url: "https://github.com/Molunerfinn/PicGo",
                    icon: "fa-solid fa-cloud-arrow-up",
                    description: "图片上传工具",
                    tags: ["图片", "上传"]
                },
                {
                    id: "smms",
                    title: "SM.MS",
                    url: "https://smms.app/",
                    icon: "fa-solid fa-image",
                    description: "图片托管服务",
                    tags: ["图片", "托管"]
                },
                {
                    id: "freeimagehost",
                    title: "FreeImageHost",
                    url: "https://freeimage.host/",
                    icon: "fa-solid fa-photo-film",
                    description: "免费图片托管服务",
                    tags: ["图片", "免费"]
                },
                {
                    id: "cobalt",
                    title: "Cobalt",
                    url: "https://cobalt.tools/",
                    icon: "fa-brands fa-youtube",
                    description: "视频下载工具",
                    tags: ["视频", "下载"]
                },
                {
                    id: "paywallbuster",
                    title: "付费墙",
                    url: "https://paywallbuster.com/",
                    icon: "fa-solid fa-key",
                    description: "付费墙破解工具",
                    tags: ["工具", "破解"]
                },
                {
                    id: "paywallhub",
                    title: "PaywallHub",
                    url: "https://g.186404.xyz/wallHub/",
                    icon: "fa-solid fa-unlock",
                    description: "付费墙破解工具集合",
                    tags: ["工具", "破解"]
                },
                {
                    id: "fmhy",
                    title: "FMHY",
                    url: "https://fmhy.net/",
                    icon: "fa-regular fa-folder-open",
                    description: "免费资源大全",
                    tags: ["资源", "免费"]
                },
                {
                    id: "remove-bg",
                    title: "Remove.bg",
                    url: "https://www.remove.bg/",
                    icon: "fa-solid fa-image-portrait",
                    description: "AI背景移除工具",
                    tags: ["图片", "背景移除"]
                },
                {
                    id: "picwish",
                    title: "PicWish",
                    url: "https://picwish.com/",
                    icon: "fa-regular fa-image",
                    description: "图片处理工具",
                    tags: ["图片", "处理"]
                },
                {
                    id: "tencent-zhiying",
                    title: "腾讯智影",
                    url: "https://zenvideo.qq.com/",
                    icon: "fa-solid fa-video",
                    description: "腾讯视频制作工具",
                    tags: ["视频", "制作"]
                },
                {
                    id: "hidns-domain",
                    title: "免费域名 HiDNS",
                    url: "https://www.hidoha.net/",
                    icon: "fa-solid fa-fingerprint",
                    description: "HiDNS免费域名服务",
                    tags: ["域名", "免费"]
                },
                {
                    id: "pixabay",
                    title: "Pixabay",
                    url: "https://pixabay.com/",
                    icon: "fa-brands fa-pix",
                    description: "免费图片和视频素材",
                    tags: ["图片", "免费"]
                },
                {
                    id: "infinityfree",
                    title: "InfinityFree",
                    url: "https://www.infinityfree.com/",
                    icon: "fa-solid fa-infinity",
                    description: "免费网站托管服务",
                    tags: ["托管", "免费"]
                },
                {
                    id: "anyvoice",
                    title: "AnyVoice",
                    url: "https://anyvoice.net/",
                    icon: "fa-solid fa-microphone",
                    description: "AI语音合成工具",
                    tags: ["AI", "语音"]
                },
                {
                    id: "fish-audio",
                    title: "Fish.Audio",
                    url: "https://fish.audio/",
                    icon: "fa-solid fa-fish",
                    description: "AI语音克隆工具",
                    tags: ["AI", "语音"]
                },
                {
                    id: "noiz-ai",
                    title: "Noiz.AI",
                    url: "https://noiz.ai/",
                    icon: "fa-solid fa-circle-notch",
                    description: "AI音频处理工具",
                    tags: ["AI", "音频"]
                },
                {
                    id: "hailuo-ai",
                    title: "海螺AI",
                    url: "https://hailuoai.video/",
                    icon: "fa-solid fa-file-audio",
                    description: "AI视频和音频生成",
                    tags: ["AI", "视频"]
                },
                {
                    id: "desec-domain",
                    title: "deSEC免费域名",
                    url: "https://desec.io/",
                    icon: "fa-solid fa-anchor",
                    description: "deSEC免费DNS服务",
                    tags: ["域名", "DNS"]
                },
                {
                    id: "lovable-dev",
                    title: "Lovable网站生成",
                    url: "https://lovable.dev/",
                    icon: "fa-solid fa-shield-heart",
                    description: "AI网站生成工具",
                    tags: ["AI", "网站生成"]
                },
                {
                    id: "netlib-domain",
                    title: "Netlib免费域名",
                    url: "https://www.netlib.re/",
                    icon: "fa-solid fa-globe",
                    description: "Netlib免费域名注册",
                    tags: ["域名", "免费"]
                },
                {
                    id: "zone-id-domain",
                    title: "Zone免费域名",
                    url: "https://zone.id/",
                    icon: "fa-solid fa-id-card-clip",
                    description: "Zone.ID免费域名注册",
                    tags: ["域名", "免费"]
                },
                {
                    id: "x10hosting",
                    title: "x10hosting免费托管",
                    url: "https://x10hosting.com/",
                    icon: "fa-solid fa-ghost",
                    description: "免费网站托管服务",
                    tags: ["托管", "免费"]
                },
                {
                    id: "nodeloc",
                    title: "NodeLoc社区",
                    url: "https://www.nodeloc.com/",
                    icon: "fa-brands fa-hashnode",
                    description: "主机和服务器社区",
                    tags: ["社区", "主机"]
                },
                {
                    id: "same-new",
                    title: "Same复制网站",
                    url: "https://same.new/",
                    icon: "fa-solid fa-copy",
                    description: "网站复制和克隆工具",
                    tags: ["克隆", "网站"]
                },
                {
                    id: "claw-cloud",
                    title: "Claw容器",
                    url: "https://claw.cloud/",
                    icon: "fa-solid fa-cloud",
                    description: "容器化部署平台",
                    tags: ["容器", "部署"]
                },
                {
                    id: "subeasy",
                    title: "SubEasy字幕",
                    url: "https://www.subeasy.ai/zh-CN",
                    icon: "fa-solid fa-closed-captioning",
                    description: "AI视频字幕生成",
                    tags: ["AI", "字幕"]
                },
                {
                    id: "cardify",
                    title: "知识卡片",
                    url: "https://cardify.godsbee.com/",
                    icon: "fa-solid fa-credit-card",
                    description: "知识卡片制作工具",
                    tags: ["知识", "卡片"]
                },
                {
                    id: "webhostmost",
                    title: "WebHostMost网站托管",
                    url: "https://www.webhostmost.com/",
                    icon: "fa-solid fa-web-awesome",
                    description: "网站托管服务",
                    tags: ["托管", "网站"]
                },
                {
                    id: "edgeone",
                    title: "腾讯EdgeOne",
                    url: "https://edgeone.ai/",
                    icon: "fa-solid fa-dice-one",
                    description: "腾讯边缘计算平台",
                    tags: ["云计算", "边缘"]
                },
                {
                    id: "stormkit",
                    title: "Stormkit",
                    url: "https://www.stormkit.io/",
                    icon: "fa-solid fa-cloud",
                    description: "前端部署和托管平台",
                    tags: ["部署", "前端"]
                },
            ]
        },

        {
            id: "tech-news",
            title: "科技资讯",
            icon: "fas fa-newspaper",
            description: "科技新闻和资讯网站",
            links: [
                {
                    id: "techcrunch",
                    title: "TechCrunch",
                    url: "https://www.techcrunch.com",
                    icon: "fa-solid fa-newspaper",
                    description: "科技创业资讯",
                    tags: ["科技", "创业"]
                },
                {
                    id: "wired",
                    title: "Wired",
                    url: "https://www.wired.com",
                    icon: "fa-solid fa-bolt",
                    description: "科技文化杂志",
                    tags: ["科技", "文化"]
                },
                {
                    id: "the-verge",
                    title: "The Verge",
                    url: "https://www.theverge.com",
                    icon: "fa-solid fa-laptop",
                    description: "科技新闻网站",
                    tags: ["科技", "新闻"]
                },
                {
                    id: "ars-technica",
                    title: "Ars Technica",
                    url: "https://arstechnica.com",
                    icon: "fa-solid fa-rocket",
                    description: "技术新闻和分析",
                    tags: ["技术", "分析"]
                },
                {
                    id: "engadget",
                    title: "Engadget",
                    url: "https://www.engadget.com",
                    icon: "fa-solid fa-mobile-screen",
                    description: "消费电子资讯",
                    tags: ["电子", "消费"]
                },
                {
                    id: "scitechdaily",
                    title: "科技日报",
                    url: "https://scitechdaily.com/",
                    icon: "fa-solid fa-microscope",
                    description: "科学技术新闻",
                    tags: ["科学", "技术"]
                },
                {
                    id: "techradar",
                    title: "TechRadar",
                    url: "https://techradar.com",
                    icon: "fa-solid fa-satellite",
                    description: "科技产品评测",
                    tags: ["科技", "评测"]
                },
                {
                    id: "cnbeta",
                    title: "CNBeta",
                    url: "https://www.cnbeta.com.tw/",
                    icon: "fa-solid fa-circle-info",
                    description: "中文科技资讯",
                    tags: ["科技", "中文"]
                }
            ]
        },

        {
            id: "cloud-storage",
            title: "云存储",
            icon: "fas fa-cloud",
            description: "云存储和文件分享服务",
            links: [
                {
                    id: "google-drive",
                    title: "Google Drive",
                    url: "https://drive.google.com",
                    icon: "fa-brands fa-google-drive",
                    description: "Google云存储服务",
                    tags: ["云存储", "Google"]
                },
                {
                    id: "onedrive",
                    title: "OneDrive",
                    url: "https://onedrive.live.com",
                    icon: "fa-brands fa-microsoft",
                    description: "微软云存储服务",
                    tags: ["云存储", "微软"]
                },
                {
                    id: "dropbox",
                    title: "Dropbox",
                    url: "https://www.dropbox.com",
                    icon: "fa-brands fa-dropbox",
                    description: "文件同步和分享",
                    tags: ["云存储", "同步"]
                },
                {
                    id: "box",
                    title: "Box",
                    url: "https://www.box.com",
                    icon: "fa-solid fa-box",
                    description: "企业云存储",
                    tags: ["云存储", "企业"]
                },
                {
                    id: "mediafire",
                    title: "MediaFire",
                    url: "https://www.mediafire.com",
                    icon: "fa-solid fa-file",
                    description: "文件托管服务",
                    tags: ["文件", "托管"]
                },
                {
                    id: "mega",
                    title: "MEGA",
                    url: "https://mega.nz",
                    icon: "fa-solid fa-cloud-arrow-up",
                    description: "加密云存储",
                    tags: ["云存储", "加密"]
                },
                {
                    id: "pikpak",
                    title: "PikPak",
                    url: "https://mypikpak.com/",
                    icon: "fa-solid fa-cloud",
                    description: "云存储和下载",
                    tags: ["云存储", "下载"]
                }
            ]
        },

        {
            id: "email",
            title: "电子邮箱",
            icon: "fas fa-envelope",
            description: "电子邮件服务",
            links: [
                {
                    id: "gmail",
                    title: "Gmail",
                    url: "https://mail.google.com",
                    icon: "fa-solid fa-envelope",
                    description: "Google邮箱服务",
                    tags: ["邮箱", "Google"]
                },
                {
                    id: "outlook",
                    title: "Outlook",
                    url: "https://outlook.live.com",
                    icon: "fa-brands fa-microsoft",
                    description: "微软邮箱服务",
                    tags: ["邮箱", "微软"]
                },
                {
                    id: "protonmail",
                    title: "ProtonMail",
                    url: "https://www.protonmail.com",
                    icon: "fa-solid fa-shield-halved",
                    description: "加密邮箱服务",
                    tags: ["邮箱", "加密"]
                },
                {
                    id: "qq-mail",
                    title: "QQ邮箱",
                    url: "https://mail.qq.com",
                    icon: "fa-brands fa-qq",
                    description: "腾讯邮箱服务",
                    tags: ["邮箱", "腾讯"]
                },
                {
                    id: "cock-li",
                    title: "Cock邮箱",
                    url: "https://cock.li/",
                    icon: "fa-solid fa-envelope-open",
                    description: "匿名邮箱服务",
                    tags: ["邮箱", "匿名"]
                },
                {
                    id: "disroot",
                    title: "Disroot邮箱",
                    url: "https://disroot.org/",
                    icon: "fa-solid fa-envelope-circle-check",
                    description: "隐私友好邮箱",
                    tags: ["邮箱", "隐私"]
                },
                {
                    id: "librem",
                    title: "Librem邮箱",
                    url: "https://librem.one/",
                    icon: "fa-solid fa-at",
                    description: "自由软件邮箱",
                    tags: ["邮箱", "自由软件"]
                },
                {
                    id: "edumail",
                    title: "临时教育邮箱",
                    url: "https://edumail.su/",
                    icon: "fa-solid fa-envelopes-bulk",
                    description: "临时教育邮箱服务",
                    tags: ["邮箱", "临时", "教育"]
                }
            ]
        }
    ]
};

// 统计信息
navigationData.metadata.totalLinks = navigationData.categories.reduce((total, category) => {
    return total + category.links.length;
}, 0);

// 获取所有标签
function getAllTags() {
    const tags = new Set();
    navigationData.categories.forEach(category => {
        category.links.forEach(link => {
            link.tags.forEach(tag => tags.add(tag));
        });
    });
    return Array.from(tags).sort();
}

// 获取热门链接（可以根据点击次数等指标）
function getPopularLinks(limit = 10) {
    const allLinks = [];
    navigationData.categories.forEach(category => {
        category.links.forEach(link => {
            allLinks.push({
                ...link,
                categoryId: category.id,
                categoryTitle: category.title
            });
        });
    });

    // 这里可以根据实际的点击统计数据排序
    // 目前返回前N个链接
    return allLinks.slice(0, limit);
}

// 导出到全局作用域
if (typeof window !== 'undefined') {
    window.navigationData = navigationData;
    window.getAllTags = getAllTags;
    window.getPopularLinks = getPopularLinks;
}

// Node.js 环境导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigationData,
        getAllTags,
        getPopularLinks
    };
}