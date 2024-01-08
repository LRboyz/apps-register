// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    // docs: string
    // discord: string
    // twitter: string
    // github: string
    telegram: string
  }
}

export const SITE_CANONICAL = "https://turboeth.xyz"

export const siteConfig: SiteConfig = {
  name: "全球软件服务",
  title: "海内外APP轻松注册,连接全球，畅游无阻.",
  emoji: "⚡",
  description:
    "🌈 无需复杂步骤，一切由我们来完成！注册海外应用，开启属于你的全球冒险，感受数字世界的无限精彩.",
  localeDefault: "en",
  links: {
    telegram:"https://t.me/circleli"
  }
  // links: {
  //   docs: "https://docs.turboeth.xyz/overview",
  //   discord: "https://discord.gg/U4jy7Xfh76",
  //   twitter: "https://twitter.com/district_labs",
  //   github: "https://github.com/turbo-eth/template-web3-app",
  // },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fintegrations%2F.env.example"
