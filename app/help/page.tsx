'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Users } from 'lucide-react';

export default function HelpPage() {
  const helpCategories = [
    {
      title: "快速入门",
      icon: BookOpen,
      description: "开始使用 MatuX 平台的基础指南",
      articles: [
        "如何注册账户",
        "首次登录设置",
        "浏览课程目录",
        "开始第一个课程"
      ]
    },
    {
      title: "学习指南",
      icon: Lightbulb,
      description: "最大化您的学习效果",
      articles: [
        "制定学习计划",
        "使用虚拟实验室",
        "跟踪学习进度",
        "获取数字证书"
      ]
    },
    {
      title: "社区与支持",
      icon: Users,
      description: "与其他学习者交流和获得帮助",
      articles: [
        "加入学习小组",
        "参与讨论区",
        "提交技术支持",
        "反馈意见与建议"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">帮助中心</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          查找教程、指南和常见问题解答，帮助您更好地使用 MatuX 平台
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {helpCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="h-8 w-8 text-accent" />
              <h2 className="text-xl font-semibold text-primary">{category.title}</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">{category.description}</p>
            <ul className="space-y-2">
              {category.articles.map((article, idx) => (
                <li key={idx}>
                  <a href="#" className="text-accent hover:underline text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Popular Articles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-50 p-8 rounded-lg border"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">热门文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "如何重置密码",
            "理解学习路径系统",
            "导出学习证书",
            "管理账户设置",
            "使用 AI 学习助手",
            "家长监控功能说明"
          ].map((article, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 p-4 bg-white rounded border hover:border-accent transition-colors"
            >
              <BookOpen className="h-5 w-5 text-accent" />
              <span className="text-gray-700">{article}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Still Need Help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold text-primary mb-4">还需要帮助？</h3>
        <p className="text-gray-600 mb-6">我们的支持团队随时准备为您提供帮助</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            联系我们
          </a>
          <a
            href="/faq"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
          >
            查看常见问题
          </a>
        </div>
      </motion.div>
    </div>
  );
}
