'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, Star, GitBranch, Code, Heart, Zap, Globe } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">开源社区</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          加入 MatuX 开源社区，与全球开发者共同推动 STEM 教育的创新发展
        </p>
      </motion.div>

      {/* Community Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 md:grid-cols-4 mb-12"
      >
        {[
          { icon: Users, label: '社区成员', value: '2,580+', color: 'blue' },
          { icon: GitBranch, label: '贡献者', value: '156', color: 'green' },
          { icon: Star, label: 'GitHub Stars', value: '3.2K', color: 'yellow' },
          { icon: Code, label: '开源项目', value: '28', color: 'purple' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <stat.icon className={`h-8 w-8 mx-auto mb-3 text-${stat.color}-500`} />
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Community Features */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {[
          {
            icon: Globe,
            title: 'GitHub 仓库',
            description: '访问我们的开源代码库，查看源码、提交 Issue 和 Pull Request',
            link: 'https://github.com/MatuX-ai/edu-proto',
            color: 'gray'
          },
          {
            icon: MessageSquare,
            title: '讨论论坛',
            description: '参与技术讨论，分享经验，获取帮助和建议',
            link: '#',
            color: 'blue'
          },
          {
            icon: Heart,
            title: '贡献指南',
            description: '了解如何为项目做贡献，包括代码、文档和设计',
            link: '#',
            color: 'red'
          },
          {
            icon: Zap,
            title: '开发者资源',
            description: 'API 文档、开发工具和最佳实践指南',
            link: '#',
            color: 'yellow'
          },
          {
            icon: Users,
            title: '社区活动',
            description: '参加线上/线下 Meetup、黑客松和技术分享会',
            link: '#',
            color: 'purple'
          },
          {
            icon: Star,
            title: '优秀案例',
            description: '展示社区成员使用 MatuX 打造的精彩项目',
            link: '#',
            color: 'orange'
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all hover:border-accent"
          >
            <feature.icon className={`h-10 w-10 mb-4 text-${feature.color}-500`} />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a href={feature.link} className="text-accent hover:underline font-medium">
              了解更多 →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-accent to-purple-600 rounded-lg p-8 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">加入我们的开源社区</h2>
        <p className="text-lg mb-6 opacity-90">
          无论您是开发者、教育者还是设计者，都欢迎为 MatuX 贡献力量
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/MatuX-ai/edu-proto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md font-medium bg-white text-accent hover:bg-gray-100 h-12 px-6"
          >
            <Globe className="h-5 w-5 mr-2" />
            访问 GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md font-medium border-2 border-white text-white hover:bg-white/10 h-12 px-6"
          >
            加入社区讨论
          </a>
        </div>
      </motion.div>
    </div>
  );
}
