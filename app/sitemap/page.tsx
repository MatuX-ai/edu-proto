'use client';

import { motion } from 'framer-motion';
import { Map, FileText } from 'lucide-react';

const sitemapSections = [
  {
    title: "主要页面",
    links: [
      { name: "首页", path: "/" },
      { name: "核心功能", path: "/features" },
      { name: "技术亮点", path: "/tech" },
      { name: "用户流程", path: "/journey" },
      { name: "教师端控制台", path: "/teacher-dashboard" },
      { name: "机构端控制台", path: "/institution-dashboard" },
      { name: "学生端仪表板", path: "/student-dashboard" }
    ]
  },
  {
    title: "关于与法务",
    links: [
      { name: "关于我们", path: "/about" },
      { name: "服务条款", path: "/terms" },
      { name: "隐私政策", path: "/privacy" },
      { name: "Cookie 政策", path: "/cookies" }
    ]
  },
  {
    title: "帮助与支持",
    links: [
      { name: "帮助中心", path: "/help" },
      { name: "常见问题", path: "/faq" },
      { name: "联系我们", path: "/contact" },
      { name: "意见反馈", path: "/feedback" }
    ]
  },
  {
    title: "其他页面",
    links: [
      { name: "站点地图", path: "/sitemap" },
      { name: "无障碍声明", path: "/accessibility" }
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Map className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">站点地图</h1>
        </div>
        <p className="text-gray-500">快速查找网站的所有页面</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sitemapSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg border shadow-sm"
          >
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-slate-50 p-6 rounded-lg border text-center"
      >
        <p className="text-gray-600">
          找不到您要找的页面？请{' '}
          <a href="/contact" className="text-accent hover:underline">
            联系我们
          </a>
          {' '}获取帮助。
        </p>
      </motion.div>
    </div>
  );
}
