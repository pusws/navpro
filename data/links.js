/* ====================================
   WebNav Hub 链接数据
   ==================================== */

// 主要导航数据
const navigationData = {
    metadata: {
        title: "WebNav Hub",
        description: "现代化的网址导航站，融合Neumorphism设计风格",
        version: "2.2.0",
        lastUpdated: "2026-11-25",
        totalLinks: 196,
        totalCategories: 6
    },

    categories: [
        {
            id: "ai-search",
            title: "Ai搜索",
            icon: "fas fa-robot",
            description: "AI 工具与智能搜索",
            links: [
                {
                    id: "chatglm-cn",
                    title: "智谱清言",
                    url: "https://chatglm.cn/",
                    icon: "fa-solid fa-comment-dots"
                },
                {
                    id: "mimo-xiaomi-com",
                    title: "mimo小米AI",
                    url: "https://mimo.xiaomi.com/",
                    icon: "fa-solid fa-mobile-retro"
                },
                {
                    id: "openrouter-ai",
                    title: "openrouter",
                    url: "https://openrouter.ai/",
                    icon: "fa-brands fa-openid"
                },
                {
                    id: "qianwen-com",
                    title: "千问国内版",
                    url: "https://www.qianwen.com/",
                    icon: "fa-solid fa-magnifying-glass"
                },
                {
                    id: "chatgpt-com",
                    title: "chatgpt",
                    url: "https://chatgpt.com/",
                    icon: "fa-brands fa-google"
                },
                {
                    id: "doubao-com",
                    title: "豆包",
                    url: "https://www.doubao.com/chat/",
                    icon: "fa-solid fa-paw"
                },
                {
                    id: "space-coze-cn",
                    title: "扣子空间",
                    url: "https://space.coze.cn/",
                    icon: "fa-solid fa-shuttle-space"
                },
                {
                    id: "chat-qwen-ai",
                    title: "通义千问",
                    url: "https://chat.qwen.ai/",
                    icon: "fa-brands fa-rocketchat"
                },
                {
                    id: "kimi-moonshot-cn",
                    title: "kimi",
                    url: "https://kimi.moonshot.cn/",
                    icon: "fa-regular fa-moon"
                },
                {
                    id: "yiyan-baidu-com",
                    title: "文心一言",
                    url: "https://yiyan.baidu.com/",
                    icon: "fa-solid fa-dumpster-fire"
                },
                {
                    id: "hunyuan-tencent-com",
                    title: "腾讯混元",
                    url: "https://hunyuan.tencent.com/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "minimax-io",
                    title: "minimax",
                    url: "https://www.minimax.io/",
                    icon: "fa-solid fa-minimize"
                },
                {
                    id: "chat-z-ai",
                    title: "z.ai",
                    url: "https://chat.z.ai/",
                    icon: "fa-solid fa-z"
                },
                {
                    id: "aistudio-google-com",
                    title: "google AIstudio",
                    url: "https://aistudio.google.com/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "gemini-google-com",
                    title: "gemini",
                    url: "https://gemini.google.com/",
                    icon: "fa-brands fa-google-plus"
                },
                {
                    id: "labs-google",
                    title: "labs.google",
                    url: "https://labs.google/",
                    icon: "fa-brands fa-google-plus"
                },
                {
                    id: "jules-google-com",
                    title: "jules.google",
                    url: "https://jules.google.com/",
                    icon: "fa-brands fa-google-plus"
                },
                {
                    id: "stitch-withgoogle-com",
                    title: "stitch.withgoogle",
                    url: "https://stitch.withgoogle.com/",
                    icon: "fa-brands fa-square-google-plus"
                },
                {
                    id: "copilot-microsoft-com",
                    title: "copilot",
                    url: "https://copilot.microsoft.com/",
                    icon: "fa-brands fa-windows"
                },
                {
                    id: "build-nvidia-com",
                    title: "nvidia",
                    url: "https://build.nvidia.com/",
                    icon: "fa-solid fa-microchip"
                },
                {
                    id: "yuanbao-tencent-com",
                    title: "腾讯元宝",
                    url: "https://yuanbao.tencent.com/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "firecrawl-dev",
                    title: "firecrawl",
                    url: "https://www.firecrawl.dev/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "mistral-ai",
                    title: "mistral",
                    url: "https://mistral.ai/",
                    icon: "fa-solid fa-brain"
                },
                {
                    id: "groq-com",
                    title: "groq",
                    url: "https://groq.com/",
                    icon: "fa-solid fa-group-arrows-rotate"
                },
                {
                    id: "skills-sh",
                    title: "skills",
                    url: "https://www.skills.sh/",
                    icon: "fa-solid fa-key"
                },
                {
                    id: "ollama-com",
                    title: "ollama",
                    url: "https://ollama.com/",
                    icon: "fa-brands fa-rocketchat"
                },
                {
                    id: "zenmux-ai",
                    title: "zenmux",
                    url: "https://zenmux.ai/",
                    icon: "fa-solid fa-mask"
                },
                {
                    id: "chutes-ai",
                    title: "chutes.ai",
                    url: "https://chutes.ai/",
                    icon: "fa-solid fa-chalkboard"
                },
                {
                    id: "huggingface-co",
                    title: "huggingface",
                    url: "https://huggingface.co/",
                    icon: "fa-solid fa-face-rolling-eyes"
                },
                {
                    id: "lmarena-ai",
                    title: "lmarena",
                    url: "https://lmarena.ai/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "is-agentic-com",
                    title: "is-agentic",
                    url: "https://is-agentic.com/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "freeinference-org",
                    title: "freeinference",
                    url: "https://freeinference.org/",
                    icon: "fa-brands fa-codepen"
                },
                {
                    id: "grok-com",
                    title: "grok",
                    url: "https://grok.com/",
                    icon: "fa-brands fa-x-twitter"
                },
                {
                    id: "instabox-sh",
                    title: "instabox",
                    url: "https://instabox.sh/",
                    icon: "fa-solid fa-box"
                },
                {
                    id: "agnes-ai-com",
                    title: "agnes-ai",
                    url: "https://agnes-ai.com/",
                    icon: "fa-solid fa-code"
                },
                {
                    id: "v0-dev",
                    title: "v0",
                    url: "https://v0.dev/",
                    icon: "fa-solid fa-v"
                },
                {
                    id: "duck-ai",
                    title: "Duck.ai",
                    url: "https://duck.ai/",
                    icon: "fa-solid fa-dove"
                },
                {
                    id: "deepseek-com",
                    title: "deepseek",
                    url: "https://www.deepseek.com/",
                    icon: "fa-brands fa-rocketchat"
                },
                {
                    id: "ying-baichuan-ai-com",
                    title: "百小应医疗大模型",
                    url: "https://ying.baichuan-ai.com/",
                    icon: "fa-brands fa-rocketchat"
                },
                {
                    id: "genspark-ai",
                    title: "genspark.ai",
                    url: "https://www.genspark.ai/",
                    icon: "fa-brands fa-rocketchat"
                },
                {
                    id: "firebase-google-com",
                    title: "firebase.google",
                    url: "https://firebase.google.com/",
                    icon: "fa-solid fa-code-branch"
                },
                {
                    id: "flow-google-com",
                    title: "Google Flow",
                    url: "https://flow.google.com/",
                    icon: "fa-brands fa-google-plus"
                },
                {
                    id: "404s-design",
                    title: "404s.design",
                    url: "https://www.404s.design/",
                    icon: "fa-solid fa-code"
                },
                {
                    id: "streamlake-ai",
                    title: "streamlake.ai",
                    url: "https://www.streamlake.ai/",
                    icon: "fa-solid fa-code"
                },
                {
                    id: "freebuff-com",
                    title: "freebuff",
                    url: "https://freebuff.com/",
                    icon: "fa-solid fa-robot"
                },
                {
                    id: "ampcode-com",
                    title: "ampcode",
                    url: "https://ampcode.com/",
                    icon: "fa-solid fa-code"
                },
                {
                    id: "deepai-org",
                    title: "DeepAI",
                    url: "https://deepai.org/",
                    icon: "fa-solid fa-brain"
                },
                {
                    id: "siliconflow-cn",
                    title: "硅基流动",
                    url: "https://siliconflow.cn/",
                    icon: "fa-brands fa-confluence"
                },
                {
                    id: "modelscope-cn",
                    title: "魔塔社区",
                    url: "https://www.modelscope.cn/",
                    icon: "fa-solid fa-code-branch"
                },
                {
                    id: "maas-xfyun-cn",
                    title: "讯飞星辰MaaS",
                    url: "https://maas.xfyun.cn/",
                    icon: "fa-solid fa-bolt"
                },
                {
                    id: "youmind-com",
                    title: "youmind",
                    url: "https://youmind.com/",
                    icon: "fa-solid fa-camera"
                },
                {
                    id: "lovart-ai",
                    title: "lovart",
                    url: "https://www.lovart.ai/zh/home",
                    icon: "fa-solid fa-file-image"
                },
                {
                    id: "bolt-new",
                    title: "bolt.new",
                    url: "https://bolt.new/",
                    icon: "fa-solid fa-bolt"
                },
                {
                    id: "artificialanalysis-ai",
                    title: "Artificial Analysis",
                    url: "https://artificialanalysis.ai/",
                    icon: "fa-solid fa-chart-line"
                },
                {
                    id: "perchai-app",
                    title: "perchai.app",
                    url: "https://www.perchai.app/",
                    icon: "fa-solid fa-crow"
                }
            ]
        },
        {
            id: "social",
            title: "托管社交",
            icon: "fas fa-users",
            description: "托管部署与社交平台",
            links: [
                {
                    id: "wasmer-io",
                    title: "wasmer边缘计算",
                    url: "https://wasmer.io/",
                    icon: "fa-regular fa-cloud"
                },
                {
                    id: "f-droid-org",
                    title: "F-Droid",
                    url: "https://f-droid.org/",
                    icon: "fa-brands fa-android"
                },
                {
                    id: "twitterxz-com",
                    title: "推特视频下载",
                    url: "https://twitterxz.com/",
                    icon: "fa-brands fa-x-twitter"
                },
                {
                    id: "instagram-com",
                    title: "Instagram",
                    url: "https://www.instagram.com",
                    icon: "fa-brands fa-instagram"
                },
                {
                    id: "render-com",
                    title: "render",
                    url: "https://render.com/",
                    icon: "fa-solid fa-draw-polygon"
                },
                {
                    id: "deno-com",
                    title: "deno",
                    url: "https://deno.com/deploy",
                    icon: "fa-solid fa-d"
                },
                {
                    id: "surge-sh",
                    title: "surge",
                    url: "https://surge.sh/",
                    icon: "fa-brands fa-css"
                },
                {
                    id: "vercel-com",
                    title: "vercel",
                    url: "https://vercel.com/",
                    icon: "fa-solid fa-v"
                },
                {
                    id: "netlify-com",
                    title: "netlify",
                    url: "https://www.netlify.com/",
                    icon: "fa-brands fa-n"
                },
                {
                    id: "cloudzyro-com",
                    title: "cloudzyro",
                    url: "https://cloudzyro.com/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "zh-savefrom-net",
                    title: "savefrom",
                    url: "https://zh.savefrom.net/",
                    icon: "fa-solid fa-share-from-square"
                },
                {
                    id: "apkmirror-com",
                    title: "apkmirror",
                    url: "https://www.apkmirror.com/",
                    icon: "fa-brands fa-android"
                },
                {
                    id: "reddit-com",
                    title: "Reddit",
                    url: "https://www.reddit.com",
                    icon: "fa-brands fa-reddit"
                },
                {
                    id: "downloadyoutubesubtitles-com",
                    title: "油管字幕下载",
                    url: "https://www.downloadyoutubesubtitles.com/",
                    icon: "fa-brands fa-youtube"
                },
                {
                    id: "github-com",
                    title: "GitHub",
                    url: "https://github.com/",
                    icon: "fa-brands fa-github"
                },
                {
                    id: "y2mate-com",
                    title: "油管视频下载",
                    url: "https://www.y2mate.com/",
                    icon: "fa-solid fa-download"
                },
                {
                    id: "youtube-iiilab-com",
                    title: "视频下载",
                    url: "https://youtube.iiilab.com/",
                    icon: "fa-solid fa-download"
                },
                {
                    id: "suno-com",
                    title: "suno",
                    url: "https://suno.com/",
                    icon: "fa-solid fa-music"
                },
                {
                    id: "appwrite-io",
                    title: "Appwrite",
                    url: "https://appwrite.io/",
                    icon: "fa-solid fa-server"
                },
                {
                    id: "neon-tech",
                    title: "Neon",
                    url: "https://neon.tech/",
                    icon: "fa-solid fa-database"
                },
                {
                    id: "turso-tech",
                    title: "Turso",
                    url: "https://turso.tech/",
                    icon: "fa-solid fa-database"
                },
                {
                    id: "movn-ndjp-net",
                    title: "电影导航",
                    url: "https://movn.ndjp.net/",
                    icon: "fa-solid fa-tv"
                },
                {
                    id: "zhuiju-ndjp-net",
                    title: "追剧导航",
                    url: "https://zhuiju.ndjp.net/",
                    icon: "fa-solid fa-film"
                }
            ]
        },
        {
            id: "tools",
            title: "实用工具",
            icon: "fas fa-tools",
            description: "在线工具、域名与运维服务",
            links: [
                {
                    id: "mockaddress-com",
                    title: "MockAddress地址生成器",
                    url: "https://mockaddress.com/",
                    icon: "fa-solid fa-location-dot"
                },
                {
                    id: "privatebin-net",
                    title: "privatebin在线粘贴板",
                    url: "https://privatebin.net/",
                    icon: "fa-solid fa-link"
                },
                {
                    id: "dynv6-com",
                    title: "dynv6",
                    url: "https://dynv6.com/",
                    icon: "fa-solid fa-network-wired"
                },
                {
                    id: "fast-com",
                    title: "网速测试",
                    url: "https://fast.com/",
                    icon: "fa-solid fa-gauge-high"
                },
                {
                    id: "cloudns-net",
                    title: "Cloudns",
                    url: "https://www.cloudns.net/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "cloudflare-com",
                    title: "Cloudflare",
                    url: "https://www.cloudflare.com/zh-cn/",
                    icon: "fa-solid fa-shield-halved"
                },
                {
                    id: "ygpy-net",
                    title: "一个朋友",
                    url: "https://ygpy.net/",
                    icon: "fa-solid fa-user-group"
                },
                {
                    id: "notebooklm-google",
                    title: "谷歌笔记",
                    url: "https://notebooklm.google/",
                    icon: "fa-solid fa-book"
                },
                {
                    id: "unify-light-ai-top",
                    title: "SenseNova Studio信息图",
                    url: "https://unify.light-ai.top/",
                    icon: "fa-solid fa-envelope"
                },
                {
                    id: "vercel-com-2",
                    title: "vercel-drop",
                    url: "https://vercel.com/drop",
                    icon: "fa-solid fa-droplet"
                },
                {
                    id: "ip-sb",
                    title: "IP查询",
                    url: "https://ip.sb/",
                    icon: "fa-solid fa-location-dot"
                },
                {
                    id: "dns-he-net",
                    title: "dns.he域名托管",
                    url: "https://dns.he.net/",
                    icon: "fa-solid fa-network-wired"
                },
                {
                    id: "site-ac",
                    title: "Site域名转发",
                    url: "https://www.site.ac/",
                    icon: "fa-solid fa-right-left"
                },
                {
                    id: "zh-go-to-library-sk",
                    title: "Z-Library",
                    url: "https://zh.go-to-library.sk/",
                    icon: "fa-solid fa-book-reader"
                },
                {
                    id: "domain-digitalplat-org",
                    title: "us.kg域名",
                    url: "https://domain.digitalplat.org/",
                    icon: "fa-solid fa-globe"
                },
                {
                    id: "spaceship-com",
                    title: "Spaceship廉价域名",
                    url: "https://www.spaceship.com/zh/",
                    icon: "fa-solid fa-rocket"
                },
                {
                    id: "namecheap-com",
                    title: "namecheap廉价域名",
                    url: "https://www.namecheap.com/",
                    icon: "fa-solid fa-rocket"
                },
                {
                    id: "racknerd-com",
                    title: "racknerd",
                    url: "https://www.racknerd.com/",
                    icon: "fa-solid fa-server"
                },
                {
                    id: "fontawesome-com",
                    title: "FontAwesome图标",
                    url: "https://fontawesome.com/",
                    icon: "fa-solid fa-icons"
                },
                {
                    id: "worldvectorlogo-com",
                    title: "logosvg",
                    url: "https://worldvectorlogo.com/",
                    icon: "fa-regular fa-font-awesome"
                },
                {
                    id: "scamalytics-com",
                    title: "ip清洁度查询",
                    url: "https://scamalytics.com/",
                    icon: "fa-solid fa-icons"
                },
                {
                    id: "test-ipv6-com",
                    title: "test-ipv6",
                    url: "https://test-ipv6.com/",
                    icon: "fa-solid fa-ethernet"
                },
                {
                    id: "html-zone",
                    title: "zone/ip",
                    url: "https://html.zone/ip",
                    icon: "fa-brands fa-sourcetree"
                },
                {
                    id: "lumiproxy-com",
                    title: "免费网络代理",
                    url: "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/",
                    icon: "fa-solid fa-unlock"
                },
                {
                    id: "ipcheck-ing",
                    title: "ipcheck",
                    url: "https://ipcheck.ing/",
                    icon: "fa-solid fa-location-dot"
                },
                {
                    id: "console-cron-job-org",
                    title: "定时任务cron-job",
                    url: "https://console.cron-job.org/",
                    icon: "fa-solid fa-ethernet"
                },
                {
                    id: "uptimerobot-com",
                    title: "uptimerobot",
                    url: "https://uptimerobot.com/",
                    icon: "fa-solid fa-location-dot"
                },
                {
                    id: "forwardemail-net",
                    title: "forwardemail",
                    url: "https://forwardemail.net/",
                    icon: "fa-solid fa-envelopes-bulk"
                },
                {
                    id: "improvmx-com",
                    title: "improvmx",
                    url: "https://improvmx.com/",
                    icon: "fa-solid fa-envelopes-bulk"
                },
                {
                    id: "objectremover-com",
                    title: "objectremover去水印",
                    url: "https://www.objectremover.com/",
                    icon: "fa-solid fa-object-group"
                },
                {
                    id: "hostry-com",
                    title: "hostryDNS域名托管",
                    url: "https://hostry.com/",
                    icon: "fa-solid fa-clock-rotate-left"
                },
                {
                    id: "sitelutions-com",
                    title: "免费域名sitelutions",
                    url: "https://www.sitelutions.com/",
                    icon: "fa-solid fa-sitemap"
                },
                {
                    id: "changeip-com",
                    title: "免费域名changeip",
                    url: "https://www.changeip.com/",
                    icon: "fa-solid fa-satellite-dish"
                },
                {
                    id: "dnsexit-com",
                    title: "免费域名dnsexit",
                    url: "https://dnsexit.com/",
                    icon: "fa-solid fa-users"
                },
                {
                    id: "gname-com",
                    title: "免费域名gname",
                    url: "https://www.gname.com/",
                    icon: "fa-solid fa-users"
                },
                {
                    id: "nslookup-io",
                    title: "DNS查找nslookup",
                    url: "https://www.nslookup.io/",
                    icon: "fa-solid fa-arrows-rotate"
                },
                {
                    id: "ping0-cc",
                    title: "ping0",
                    url: "https://ping0.cc/",
                    icon: "fa-solid fa-fingerprint"
                },
                {
                    id: "customer-l53-net",
                    title: "L53免费域名",
                    url: "https://customer.l53.net/",
                    icon: "fa-solid fa-fingerprint"
                },
                {
                    id: "tools-pdf24-org",
                    title: "PDF在线工具",
                    url: "https://tools.pdf24.org/",
                    icon: "fa-solid fa-file-pdf"
                },
                {
                    id: "supabase-com",
                    title: "supabase免费数据库",
                    url: "https://supabase.com/",
                    icon: "fa-brands fa-internet-explorer"
                },
                {
                    id: "croxyproxy-rocks",
                    title: "在线代理croxyproxy",
                    url: "https://www.croxyproxy.rocks/_zh/",
                    icon: "fa-solid fa-unlock"
                },
                {
                    id: "doocs-github-io",
                    title: "微信Markdown编辑器",
                    url: "https://doocs.github.io/md/",
                    icon: "fa-regular fa-edit"
                },
                {
                    id: "proxysite-com",
                    title: "proxysite",
                    url: "https://www.proxysite.com/",
                    icon: "fa-solid fa-unlock"
                },
                {
                    id: "serv00-com",
                    title: "serv00",
                    url: "https://www.serv00.com/",
                    icon: "fa-solid fa-server"
                },
                {
                    id: "colocrossing-com",
                    title: "colocrossing云服务vps",
                    url: "https://www.colocrossing.com/",
                    icon: "fa-solid fa-server"
                },
                {
                    id: "github-com-2",
                    title: "PicGo",
                    url: "https://github.com/Molunerfinn/PicGo",
                    icon: "fa-solid fa-cloud-arrow-up"
                },
                {
                    id: "smms-app",
                    title: "SM.MS",
                    url: "https://smms.app/",
                    icon: "fa-solid fa-image"
                },
                {
                    id: "freeimage-host",
                    title: "FreeImageHost",
                    url: "https://freeimage.host/",
                    icon: "fa-solid fa-photo-film"
                },
                {
                    id: "cobalt-tools",
                    title: "cobalt",
                    url: "https://cobalt.tools/",
                    icon: "fa-brands fa-youtube"
                },
                {
                    id: "isthisai-com",
                    title: "AI鉴定isthisai",
                    url: "https://isthisai.com/",
                    icon: "fa-solid fa-code"
                },
                {
                    id: "tinywow-com",
                    title: "tinywow",
                    url: "https://tinywow.com/",
                    icon: "fa-brands fa-free-code-camp"
                },
                {
                    id: "paywallbuster-com",
                    title: "付费墙",
                    url: "https://paywallbuster.com/",
                    icon: "fa-solid fa-key"
                },
                {
                    id: "paywallhub-ndjp-net",
                    title: "PaywallHub",
                    url: "https://paywallhub.ndjp.net/",
                    icon: "fa-solid fa-unlock"
                },
                {
                    id: "fmhy-net",
                    title: "fmhy",
                    url: "https://fmhy.net/",
                    icon: "fa-regular fa-folder-open"
                },
                {
                    id: "remove-bg",
                    title: "remove",
                    url: "https://www.remove.bg/",
                    icon: "fa-solid fa-image-portrait"
                },
                {
                    id: "picwish-com",
                    title: "picwish",
                    url: "https://picwish.com/",
                    icon: "fa-regular fa-image"
                },
                {
                    id: "domain-stackryze-com",
                    title: "免费域名Stackryze",
                    url: "https://domain.stackryze.com/",
                    icon: "fa-solid fa-landmark-dome"
                },
                {
                    id: "hidoha-net",
                    title: "免费域名HiDNS",
                    url: "https://www.hidoha.net/",
                    icon: "fa-solid fa-fingerprint"
                },
                {
                    id: "pixabay-com",
                    title: "pixabay",
                    url: "https://pixabay.com/",
                    icon: "fa-brands fa-pix"
                },
                {
                    id: "infinityfree-com",
                    title: "InfinityFree",
                    url: "https://www.infinityfree.com/",
                    icon: "fa-solid fa-infinity"
                },
                {
                    id: "anyvoice-net",
                    title: "anyvoice",
                    url: "https://anyvoice.net/",
                    icon: "fa-solid fa-microphone"
                },
                {
                    id: "fish-audio",
                    title: "fish.audio",
                    url: "https://fish.audio/",
                    icon: "fa-solid fa-fish"
                },
                {
                    id: "noiz-ai",
                    title: "noizai",
                    url: "https://noiz.ai/",
                    icon: "fa-solid fa-circle-notch"
                },
                {
                    id: "design-ndjp-net",
                    title: "Design Radar设计灵感导航",
                    url: "https://design.ndjp.net/",
                    icon: "fa-solid fa-file-audio"
                },
                {
                    id: "desec-io",
                    title: "desec免费域名",
                    url: "https://desec.io/",
                    icon: "fa-solid fa-anchor"
                },
                {
                    id: "lovable-dev",
                    title: "lovable网站生成",
                    url: "https://lovable.dev/",
                    icon: "fa-solid fa-shield-heart"
                },
                {
                    id: "ndjp-net",
                    title: "ndjp免费域名",
                    url: "https://ndjp.net/",
                    icon: "fa-solid fa-globe"
                },
                {
                    id: "dynu-com",
                    title: "dynu免费域名",
                    url: "https://www.dynu.com/",
                    icon: "fa-solid fa-globe"
                },
                {
                    id: "zone-id",
                    title: "zone免费域名",
                    url: "https://zone.id/",
                    icon: "fa-solid fa-id-card-clip"
                },
                {
                    id: "my-dnshe-com",
                    title: "dnshe免费域名",
                    url: "https://my.dnshe.com/",
                    icon: "fa-solid fa-id-card-clip"
                },
                {
                    id: "x10hosting-com",
                    title: "x10hosting免费托管",
                    url: "https://x10hosting.com/",
                    icon: "fa-solid fa-ghost"
                },
                {
                    id: "nodeloc-com",
                    title: "nodeloc社区",
                    url: "https://www.nodeloc.com/",
                    icon: "fa-brands fa-hashnode"
                },
                {
                    id: "same-new",
                    title: "same复制网站",
                    url: "https://same.new/",
                    icon: "fa-solid fa-copy"
                },
                {
                    id: "katabump-com",
                    title: "KataBump免费域名",
                    url: "https://katabump.com/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "zoneabc-net",
                    title: "免费域名zoneabc",
                    url: "https://zoneabc.net/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "nic-gv-uy",
                    title: "免费域名gv.uy",
                    url: "https://nic.gv.uy/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "isroot-in",
                    title: "免费域名isroot",
                    url: "https://isroot.in/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "subeasy-ai",
                    title: "subeasy字幕",
                    url: "https://www.subeasy.ai/zh-CN",
                    icon: "fa-solid fa-closed-captioning"
                },
                {
                    id: "cardify-godsbee-com",
                    title: "知识卡片",
                    url: "https://cardify.godsbee.com/",
                    icon: "fa-solid fa-credit-card"
                },
                {
                    id: "webhostmost-com",
                    title: "webhostmost网站托管",
                    url: "https://www.webhostmost.com/",
                    icon: "fa-solid fa-web-awesome"
                },
                {
                    id: "edgeone-ai",
                    title: "edgeone",
                    url: "https://edgeone.ai/",
                    icon: "fa-brands fa-edge"
                },
                {
                    id: "cyberpanel-net",
                    title: "cyberpanel免费VPN",
                    url: "https://cyberpanel.net/",
                    icon: "fa-solid fa-graduation-cap"
                },
                {
                    id: "stormkit-io",
                    title: "Stormkit",
                    url: "https://www.stormkit.io/",
                    icon: "fa-solid fa-cloud"
                },
                {
                    id: "1984-hosting",
                    title: "1984免费DNS托管",
                    url: "https://1984.hosting/",
                    icon: "fa-solid fa-network-wired"
                },
                {
                    id: "dash-int-yt",
                    title: "int.yt免费域名",
                    url: "https://dash.int.yt/",
                    icon: "fa-solid fa-globe"
                },
                {
                    id: "nssnap-com",
                    title: "nssnap免费域名",
                    url: "https://nssnap.com/",
                    icon: "fa-solid fa-globe"
                },
                {
                    id: "devs-surf",
                    title: "devs.surf 免费域名",
                    url: "https://devs.surf/",
                    icon: "fa-solid fa-water"
                },
                {
                    id: "devs-li",
                    title: "devs.li 免费域名",
                    url: "https://devs.li/",
                    icon: "fa-solid fa-code"
                },
                {
                    id: "ipv64-net",
                    title: "ipv64",
                    url: "https://ipv64.net/",
                    icon: "fa-solid fa-server"
                },
                {
                    id: "nic-fj-kg",
                    title: "Zerexa Domains 免费域名",
                    url: "https://nic.fj.kg/",
                    icon: "fa-solid fa-globe"
                },
                {
                    id: "pinme-eth-limo",
                    title: "PinMe",
                    url: "https://pinme.eth.limo/",
                    icon: "fa-solid fa-thumbtack"
                },
                {
                    id: "sms24-me",
                    title: "sms24免费接码",
                    url: "https://sms24.me/",
                    icon: "fa-solid fa-comment-sms"
                },
                {
                    id: "openverse-org",
                    title: "Openverse",
                    url: "https://openverse.org/",
                    icon: "fa-brands fa-creative-commons"
                },
                {
                    id: "hackerbooks-qiaomu-ai",
                    title: "黑客书架",
                    url: "https://hackerbooks.qiaomu.ai/",
                    icon: "fa-solid fa-book-bookmark"
                }
            ]
        },
        {
            id: "tech-news",
            title: "科技资讯",
            icon: "fas fa-newspaper",
            description: "科技新闻与技术资讯",
            links: [
                {
                    id: "techcrunch-com",
                    title: "TechCrunch",
                    url: "https://www.techcrunch.com",
                    icon: "fa-solid fa-newspaper"
                },
                {
                    id: "wired-com",
                    title: "Wired",
                    url: "https://www.wired.com",
                    icon: "fa-solid fa-bolt"
                },
                {
                    id: "theverge-com",
                    title: "The Verge",
                    url: "https://www.theverge.com",
                    icon: "fa-solid fa-laptop"
                },
                {
                    id: "arstechnica-com",
                    title: "Ars Technica",
                    url: "https://arstechnica.com",
                    icon: "fa-solid fa-rocket"
                },
                {
                    id: "engadget-com",
                    title: "Engadget",
                    url: "https://www.engadget.com",
                    icon: "fa-solid fa-mobile-screen"
                },
                {
                    id: "scitechdaily-com",
                    title: "科技日报",
                    url: "https://scitechdaily.com/",
                    icon: "fa-solid fa-microscope"
                },
                {
                    id: "techradar-com",
                    title: "TechRadar",
                    url: "https://techradar.com",
                    icon: "fa-solid fa-satellite"
                },
                {
                    id: "opensourceprojects-dev",
                    title: "精彩的开源项目",
                    url: "https://www.opensourceprojects.dev/",
                    icon: "fa-regular fa-folder-open"
                },
                {
                    id: "cnbeta-com-tw",
                    title: "cnbeta",
                    url: "https://www.cnbeta.com.tw/",
                    icon: "fa-solid fa-circle-info"
                }
            ]
        },
        {
            id: "cloud-storage",
            title: "云存储",
            icon: "fas fa-cloud",
            description: "云存储与文件分享",
            links: [
                {
                    id: "dropbox-com",
                    title: "Dropbox",
                    url: "https://www.dropbox.com",
                    icon: "fa-brands fa-dropbox"
                },
                {
                    id: "drive-google-com",
                    title: "Google Drive",
                    url: "https://drive.google.com",
                    icon: "fa-brands fa-google-drive"
                },
                {
                    id: "onedrive-live-com",
                    title: "OneDrive",
                    url: "https://onedrive.live.com",
                    icon: "fa-brands fa-microsoft"
                },
                {
                    id: "box-com",
                    title: "Box",
                    url: "https://www.box.com",
                    icon: "fa-solid fa-box"
                },
                {
                    id: "mediafire-com",
                    title: "MediaFire",
                    url: "https://www.mediafire.com",
                    icon: "fa-solid fa-file"
                },
                {
                    id: "mega-nz",
                    title: "MEGA",
                    url: "https://mega.nz",
                    icon: "fa-solid fa-cloud-arrow-up"
                },
                {
                    id: "mypikpak-com",
                    title: "PikPak",
                    url: "https://mypikpak.com/",
                    icon: "fa-solid fa-cloud"
                }
            ]
        },
        {
            id: "email",
            title: "电子邮箱",
            icon: "fas fa-envelope",
            description: "邮箱服务与隐私邮箱",
            links: [
                {
                    id: "zoho-com",
                    title: "Zoho Mail企业邮箱",
                    url: "https://www.zoho.com/mail/",
                    icon: "fa-solid fa-envelope"
                },
                {
                    id: "outlook-live-com",
                    title: "Outlook",
                    url: "https://outlook.live.com",
                    icon: "fa-brands fa-microsoft"
                },
                {
                    id: "cock-li",
                    title: "cock邮箱",
                    url: "https://cock.li/",
                    icon: "fa-solid fa-envelope-open"
                },
                {
                    id: "disroot-org",
                    title: "disroot邮箱",
                    url: "https://disroot.org/",
                    icon: "fa-solid fa-envelope-circle-check"
                },
                {
                    id: "protonmail-com",
                    title: "ProtonMail",
                    url: "https://www.protonmail.com",
                    icon: "fa-solid fa-shield-halved"
                },
                {
                    id: "tinkmail-me",
                    title: "tinkmail企业邮箱",
                    url: "https://tinkmail.me/",
                    icon: "fa-brands fa-qq"
                },
                {
                    id: "em-bjedu-tech",
                    title: "Cloudflare临时邮件",
                    url: "https://em.bjedu.tech/",
                    icon: "fa-solid fa-at"
                },
                {
                    id: "edumail-su",
                    title: "临时教育邮箱",
                    url: "https://edumail.su/",
                    icon: "fa-solid fa-envelopes-bulk"
                }
            ]
        }
    ]
};

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
    window.getPopularLinks = getPopularLinks;
}

// Node.js 环境导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigationData,
        getPopularLinks
    };
}
