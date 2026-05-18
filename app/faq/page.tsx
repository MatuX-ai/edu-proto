'use client';

import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, MessageCircle, Search } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    title: "账户与注册",
    icon: BookOpen,
    questions: [
      {
        q: "如何注册 MatuX 账户？",
        a: "点击网站右上角的'开始体验'按钮，填写您的邮箱地址、设置密码并验证邮箱即可完成注册。整个过程只需几分钟。"
      },
      {
        q: "忘记密码怎么办？",
        a: "在登录页面点击'忘记密码'，输入您注册时使用的邮箱地址，我们会发送重置密码的链接到您的邮箱。"
      },
      {
        q: "可以更改注册邮箱吗？",
        a: "是的，登录后进入'账户设置'页面，在'个人信息'部分可以修改您的邮箱地址。修改后需要验证新邮箱。"
      }
    ]
  },
  {
    title: "课程学习",
    icon: HelpCircle,
    questions: [
      {
        q: "课程难度如何选择？",
        a: "我们提供初学者、中级和高级三个难度级别。首次使用时，系统会通过简短的测评为您推荐合适的起点。您也可以随时调整难度。"
      },
      {
        q: "学习进度会保存吗？",
        a: "是的，您的所有学习进度都会自动保存到云端。您可以在任何设备上继续学习，进度完全同步。"
      },
      {
        q: "完成课程后有证书吗？",
        a: "完成每个课程模块后，您将获得区块链认证的数字证书，可以在您的个人资料中查看和分享。"
      }
    ]
  },
  {
    title: "技术支持",
    icon: MessageCircle,
    questions: [
      {
        q: "支持哪些浏览器？",
        a: "我们支持最新版本的 Chrome、Firefox、Safari 和 Edge 浏览器。为了获得最佳体验，建议使用最新版本。"
      },
      {
        q: "虚拟实验室需要什么配置？",
        a: "虚拟实验室基于 Web 技术，不需要特殊配置。只要有稳定的网络连接和现代浏览器即可使用。"
      },
      {
        q: "遇到技术问题怎么办？",
        a: "您可以通过'联系我们'页面提交技术支持请求，或通过在线客服获得即时帮助。我们通常在工作日的 24 小时内回复。"
      }
    ]
  },
  {
    title: "付费与订阅",
    icon: BookOpen,
    questions: [
      {
        q: "有哪些付费计划？",
        a: "我们提供免费基础版和专业版。专业版包含高级课程、个性化学习路径和优先技术支持。详细价格请查看定价页面。"
      },
      {
        q: "如何取消订阅？",
        a: "登录后进入'账户设置' > '订阅管理'，您可以随时取消订阅。取消后，您将继续享有当前计费周期的服务。"
      },
      {
        q: "支持哪些支付方式？",
        a: "我们支持支付宝、微信支付、银联卡和国际信用卡（Visa、MasterCard）。"
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item => 
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <HelpCircle className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">常见问题</h1>
        </div>
        <p className="text-gray-500 mb-8">找到您想知道的答案，或联系我们的支持团队</p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索问题..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </motion.div>

      <div className="space-y-8">
        {filteredFAQs.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="border rounded-lg overflow-hidden"
          >
            <div className="bg-slate-50 p-6 border-b">
              <div className="flex items-center gap-3">
                <category.icon className="h-6 w-6 text-accent" />
                <h2 className="text-xl font-semibold text-primary">{category.title}</h2>
              </div>
            </div>
            
            <div className="divide-y">
              {category.questions.map((item, qIndex) => {
                const globalIndex = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === globalIndex;
                
                return (
                  <div key={qIndex} className="border-b last:border-b-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium text-primary pr-4">{item.q}</span>
                      <svg
                        className={`h-5 w-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">没有找到相关问题，请尝试其他关键词</p>
        </div>
      )}

      {/* Contact Support CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">还有其他问题？</h3>
        <p className="mb-6 opacity-90">我们的支持团队随时准备帮助您</p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-slate-100 h-11 px-8"
        >
          联系我们
        </a>
      </motion.div>
    </div>
  );
}
