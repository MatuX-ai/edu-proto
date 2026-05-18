'use client';

import { motion } from 'framer-motion';
import { Accessibility, Eye, Keyboard, MousePointer } from 'lucide-react';

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "视觉辅助",
      description: "我们提供高对比度模式、字体大小调整和屏幕阅读器支持，确保视障用户能够顺畅使用平台。"
    },
    {
      icon: Keyboard,
      title: "键盘导航",
      description: "所有功能都可以通过键盘访问，包括 Tab 键导航、快捷键支持和焦点指示器。"
    },
    {
      icon: MousePointer,
      title: "鼠标友好",
      description: "界面元素具有足够的点击区域，悬停状态清晰可见，操作反馈及时明确。"
    },
    {
      icon: Accessibility,
      title: "认知友好",
      description: "使用简洁明了的语言，一致的导航结构，以及可预测的交互模式。"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Accessibility className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">无障碍声明</h1>
        </div>
        <p className="text-gray-500">最后更新日期：2026年5月18日</p>
      </motion.div>

      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">我们的承诺</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MatuX STEM 教育平台致力于确保数字内容对所有用户都可访问，包括残障人士。我们遵循 Web 内容无障碍指南（WCAG）2.1 AA 级标准，并持续改进我们的无障碍功能。
          </p>
          <p className="text-gray-600 leading-relaxed">
            我们相信教育是基本权利，每个人都应该能够平等地获取优质的 STEM 教育资源。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">无障碍功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border shadow-sm"
              >
                <feature.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">技术标准</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们努力符合以下标准：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Web 内容无障碍指南（WCAG）2.1 AA 级</li>
            <li>Section 508 of the Rehabilitation Act</li>
            <li>EN 301 549（欧洲无障碍标准）</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">浏览器和辅助技术兼容性</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们的平台与以下浏览器和辅助技术兼容：
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border my-6">
            <h3 className="text-lg font-semibold text-primary mb-3">支持的浏览器</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Chrome（最新版本及前两个版本）</li>
              <li>Firefox（最新版本及前两个版本）</li>
              <li>Safari（最新版本及前一个版本）</li>
              <li>Edge（最新版本及前两个版本）</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-primary mb-3 mt-6">支持的辅助技术</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>NVDA（Windows）</li>
              <li>JAWS（Windows）</li>
              <li>VoiceOver（macOS/iOS）</li>
              <li>TalkBack（Android）</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">已知问题和限制</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            尽管我们努力使所有内容都可访问，但可能存在一些限制：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>某些交互式代码编辑器可能需要额外的键盘导航练习</li>
            <li>复杂的可视化图表可能不适合所有屏幕阅读器</li>
            <li>第三方嵌入内容可能不符合我们的无障碍标准</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            我们正在积极解决这些问题，并欢迎用户提供反馈。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">反馈与联系</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            如果您在使用我们的平台时遇到任何无障碍问题，或者有任何改进建议，请告诉我们：
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border">
            <p className="text-gray-600"><strong>邮箱：</strong>accessibility@matux.edu</p>
            <p className="text-gray-600 mt-2"><strong>电话：</strong>+86 10 8888 9999（无障碍服务专线）</p>
            <p className="text-gray-600 mt-2"><strong>响应时间：</strong>我们将在 2 个工作日内回复您的咨询</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">持续改进</h2>
          <p className="text-gray-600 leading-relaxed">
            我们定期审查和更新我们的无障碍实践。本声明最后更新于 2026年5月18日。我们会根据技术发展、用户反馈和法规变化持续改进平台的无障碍性。
          </p>
        </section>
      </div>
    </div>
  );
}
