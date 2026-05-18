'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Info } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Cookie className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">Cookie 政策</h1>
        </div>
        <p className="text-gray-500">最后更新日期：2026年5月18日</p>
      </motion.div>

      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">什么是 Cookie？</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookie 是当您访问网站时，存储在您的设备（计算机、手机或平板电脑）上的小文本文件。它们被广泛用于使网站更有效率地工作，以及提供报告信息。
          </p>
          <p className="text-gray-600 leading-relaxed">
            Cookie 可以是由我们设置的"第一方 Cookie"，也可以是由第三方设置的"第三方 Cookie"。第三方 Cookie 使网站上的第三方功能得以实现，例如广告、互动内容和统计分析。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">我们为什么使用 Cookie？</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们使用第一方和第三方 Cookie 出于以下几个原因。一些 Cookie 是严格必要的，以便我们的网站能够正常运行（我们称之为"基本"或"必要"Cookie）。其他 Cookie 使我们能够跟踪和定位用户的兴趣，以增强我们在网站上的体验（我们称之为"性能"或"分析"Cookie）。第三方通过我们的网站提供广告、消息传递和分析服务（我们称之为"广告"或"目标"Cookie）。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">我们使用的 Cookie 类型</h2>
          
          <div className="space-y-6 my-8">
            <div className="border rounded-lg p-6 bg-slate-50">
              <div className="flex items-start gap-3 mb-3">
                <Settings className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">1. 必要 Cookie</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    这些 Cookie 对于网站的正常运行至关重要，无法在我们的系统中关闭。它们通常仅在响应您做出的相当于服务请求的操作时设置，例如设置您的隐私偏好、登录或填写表单。
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>示例：</strong>会话管理、安全验证、负载均衡
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    持续时间：会话期间 | 可否禁用：否
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-3 mb-3">
                <Info className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2. 功能 Cookie</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    这些 Cookie 使网站能够提供增强的功能和个性化。它们可能由我们或我们已将其服务添加到我们页面的第三方提供商设置。如果您不允许这些 Cookie，则某些或所有这些服务可能无法正常运行。
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>示例：</strong>语言偏好、主题设置、字体大小
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    持续时间：1 年 | 可否禁用：是
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-slate-50">
              <div className="flex items-start gap-3 mb-3">
                <Settings className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">3. 分析 Cookie</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    这些 Cookie 允许我们统计访问次数和流量来源，以便我们可以衡量和改进我们网站的性能。它们帮助我们了解哪些页面最受欢迎和最不受欢迎，并查看访客如何浏览网站。
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>示例：</strong>Google Analytics、页面浏览量、用户行为追踪
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    持续时间：2 年 | 可否禁用：是
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-3 mb-3">
                <Cookie className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">4. 营销 Cookie</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    这些 Cookie 可能在我们的网站上由我们的广告合作伙伴设置。这些公司可能使用它们来建立您的兴趣档案，并在其他网站上向您展示相关广告。它们通过唯一标识您的浏览器和设备来实现。如果您不允许这些 Cookie，您将体验到较少针对性的广告。
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>示例：</strong>Facebook Pixel、Google Ads、重定向广告
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    持续时间：90 天 | 可否禁用：是
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">如何管理 Cookie 偏好</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            您有权决定是否接受 Cookie。您可以通过修改浏览器设置来行使您的 Cookie 偏好。大多数网络浏览器自动接受 Cookie，但您可以选择修改浏览器设置以拒绝 Cookie。
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg border my-6">
            <h3 className="text-lg font-semibold text-primary mb-4">常见浏览器的 Cookie 管理</h3>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Chrome：</strong>设置 → 隐私和安全 → Cookie 和其他网站数据</li>
              <li><strong>Firefox：</strong>选项 → 隐私与安全 → Cookie 和网站数据</li>
              <li><strong>Safari：</strong>偏好设置 → 隐私 → Cookie 和网站数据</li>
              <li><strong>Edge：</strong>设置 → Cookie 和网站权限 → 管理和删除 Cookie</li>
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed">
            请注意，禁用某些 Cookie 可能会影响网站的功能和用户体验。特别是，如果禁用必要 Cookie，网站的某些部分可能无法正常工作。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">第三方 Cookie</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            除了我们自己设置的 Cookie 外，我们还使用各种第三方 Cookie 来报告网站的使用统计数据、在网站上和跨网站交付广告等。
          </p>
          <p className="text-gray-600 leading-relaxed">
            这些第三方可能收集关于您在不同网站上的在线活动的信息，包括您使用我们的网站和其他网站的情况。我们建议您查看这些第三方的隐私政策，以了解他们如何使用您的信息。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Cookie 政策更新</h2>
          <p className="text-gray-600 leading-relaxed">
            我们可能会不时更新本 Cookie 政策，以反映技术、法律要求或我们运营的变化。我们鼓励您定期查看本政策，以了解我们如何使用 Cookie 的最新信息。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">联系我们</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            如果您对我们的 Cookie 使用有任何疑问或疑虑，请通过以下方式联系我们：
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border">
            <p className="text-gray-600"><strong>邮箱：</strong>privacy@matux.edu</p>
            <p className="text-gray-600 mt-2"><strong>主题：</strong>Cookies 政策咨询</p>
          </div>
        </section>
      </div>
    </div>
  );
}
