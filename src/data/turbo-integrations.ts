export const integrationCategories = [
  "账号注册服务",
  "网络工具服务",
  "流量推广服务",
  "软件开发服务",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations = {
  chatGPT: {
    name: "chatGPT",
    href: "",
    url: "",
    description:
      "ChatGPT是由OpenAI开发的一个基于GPT（Generative Pre-trained Transformer）技术的对话式生成模型。",
    imgLight: "/integrations/chatGPT.svg",
    imgDark: "/integrations/chatGPT.svg",
    category: "账号注册服务",
  },
    api: {
    name: "软件API接口定制",
    href: "",
    url: "",
    description:
      "根据业务需求定制开发软件接口。",
    imgLight: "/integrations/api.png",
    imgDark: "/integrations/api.png",
    category: "软件开发服务",
  },

  shopify: {
    name: "跨境电商站点开发",
    href: "",
    url: "",
    description:
      "shopify、wordpress独立站开发",
    imgLight: "/integrations/shopify.png",
    imgDark: "/integrations/shopify.png",
    category: "软件开发服务",
  },
   facebook: {
    name: "facebook",
    href: "",
    url: "",
    description:
      "通过Facebook广告可以使您的站点获得更多的流量。",
    imgLight: "/integrations/fb.png",
    imgDark: "/integrations/fb.png",
    category: "流量推广服务",
  },
  apple: {
    name: "AppleID",
    href: "",
    url: "",
    description: "Apple ID（Apple标识）是由苹果公司提供的一种帐户体系，它允许用户在苹果生态系统中使用各种服务和设备。",
    imgLight: "/integrations/apple.svg",
    imgDark: "/integrations/apple.svg",
    category: "账号注册服务",
  },
  telegram: {
    name: "Telegram",
    href: "",
    url: "",
    description: "Telegram是一款由Pavel Durov和Nikolai Durov于2013年创建的即时通讯应用程序。",
    imgLight: "/integrations/telegram.png",
    imgDark: "/integrations/telegram.png",
    category: "账号注册服务",
  },
  google: {
    name: "google",
    href: "",
    url: "https://google.com",
    description: "Google账号",
    imgLight: "/integrations/google.png",
    imgDark: "/integrations/google.png",
    category: "账号注册服务",
  },
  clashX: {
    name: "clashX",
    href: "",
    url: "",
    description:
      "ClashX 是一款全平台的网络代理工具，通常用于科学上网或绕过网络限制的软件服务APP。",
    imgLight: "/integrations/clashX.png",
    imgDark: "/integrations/clashX.png",
    category: "网络工具服务",
  },
  shadowrocket: {
    name: "shadowrocket",
    href: "",
    url: "",
    description:
      "Shadowrocket 是一款基于iOS平台的网络代理工具，通常用于科学上网或绕过网络限制的软件服务APP。",
    imgLight: "/integrations/huojian.jpg",
    imgDark: "/integrations/huojian.jpg",
    category: "网络工具服务",
  },
} as const
