import Image from "next/image"

import { siteConfig } from "@/config/site"
import {
  PageHeader,
  PageHeaderDescription,
} from "@/components/layout/page-header"
import { ExampleDemos } from "@/components/shared/example-demos"

export default function HomePage() {
  return (
    <div className="container relative mt-20 flex flex-col items-center justify-center px-0">
      <PageHeader className="pb-8">
        <Image
          src="/logo-gradient.png"
          alt="TurboETH Logo"
          width={80}
          height={80}
          className="h-20 w-20 rounded-2xl"
        />

        <p className="p-4 text-2xl font-bold lg:text-5xl">
          🚀 海内外软件服务轻松注册
        </p>
        <p className="p-4 text-2xl font-bold lg:text-5xl">
          🌍 连接全球，畅游无阻
        </p>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
      </PageHeader>
      <ExampleDemos />
    </div>
  )
}
