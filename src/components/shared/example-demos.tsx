"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, MotionProps } from "framer-motion"
import ReactMarkdown from "react-markdown"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { fadeUpVariant } from "@/lib/utils/motion"
import { buttonVariants } from "@/components/ui/button"
import { PageSectionGrid } from "@/components/layout/page-section"
import { IsDarkTheme } from "@/components/shared/is-dark-theme"
import { IsLightTheme } from "@/components/shared/is-light-theme"

const demos = [
  {
    title: "Telegram", // turboIntegrations.disco.name,
    description:
      "Telegram是一款即时通讯应用程序，提供多平台支持，包括iOS、Android、Windows、macOS等。",
    href: siteConfig.links.telegram,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Disco logo"
          className="rounded-full"
          height={100}
          src="/integrations/telegram.png"
          width={100}
        />
      </div>
    ),
  },
  {
    title: "ChatGPT",
    description:
      "ChatGPT是由OpenAI开发的一个基于GPT（Generative Pre-trained Transformer）技术的对话式生成模型。",
    href: siteConfig.links.telegram,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <IsLightTheme>
          <Image
            alt="OpenAI logo"
            height={100}
            src={"/integrations/openai-dark.svg"}
            width={100}
          />
        </IsLightTheme>
        <IsDarkTheme>
          <Image
            alt="OpenAI logo"
            height={100}
            src={"/integrations/openai-light.svg"}
            width={100}
          />
        </IsDarkTheme>
      </div>
    ),
  },
  {
    title: "shadowrocket",
    description:
      "Shadowrocket 是一款基于iOS平台的网络代理工具，通常用于科学上网或绕过网络限制的软件服务APP。",
    href: siteConfig.links.telegram,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Rainbow logo"
          height={100}
          src="/integrations/huojian.jpg"
          width={100}
        />
      </div>
    ),
  },
  {
    title: "ClashX",
    description:
      "ClashX 是一款全平台的网络代理工具，通常用于科学上网或绕过网络限制的软件服务APP。",
    href: siteConfig.links.telegram,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Rainbow logo"
          height={100}
          src="/integrations/clashX.png"
          width={100}
        />
      </div>
    ),
  },
  {
    title: "Twitter",
    description:
      "Twitter是一个社交媒体平台，允许用户发送短消息，称为“推文”（tweets）。",
    href: siteConfig.links.telegram,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Twitter"
          height={200}
          src="/integrations/twitter.png"
          width={100}
        />
      </div>
    ),
  },
  {
    title: "AppleID",
    description:
      "Apple ID（Apple标识）是由苹果公司提供的一种帐户体系，它允许用户在苹果生态系统中使用各种服务和设备。",
    href: siteConfig.links.telegram,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Twitter"
          height={200}
          src="/integrations/apple.svg"
          width={100}
        />
      </div>
    ),
  },
]

interface ExampleDemosProps extends MotionProps {
  className?: string
}

export function ExampleDemos({ className, ...props }: ExampleDemosProps) {
  return (
    <PageSectionGrid className={className} {...props}>
      {demos.map(({ title, description, href, demo }) => (
        <DemoCard
          key={title}
          title={title}
          description={description}
          href={href}
          demo={demo}
        />
      ))}
    </PageSectionGrid>
  )
}

interface DemoCardProps extends MotionProps {
  demo: React.ReactNode
  title: string
  description: string
  large?: boolean
  href?: string
}

function DemoCard({ title, description, href, demo, large }: DemoCardProps) {
  return (
    <motion.div
      variants={fadeUpVariant()}
      className={`relative col-span-1 overflow-hidden rounded-xl border bg-card px-4 shadow-sm transition-shadow hover:shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-3 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent dark:from-stone-100 dark:to-yellow-300 md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm md:prose -mt-2 leading-normal text-muted-foreground">
          <ReactMarkdown
            components={{
              a: ({ ...props }) => (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  {...props}
                  className="font-medium text-foreground underline transition-colors dark:text-blue-200"
                />
              ),

              code: ({ ...props }) => (
                <code
                  {...props}
                  className="rounded-sm px-1 py-0.5 font-mono font-medium text-foreground"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
        {!href ? null : (
          <Link href={href} className={cn(buttonVariants(), "my-4")}>
            购买
          </Link>
        )}
      </div>
    </motion.div>
  )
}
