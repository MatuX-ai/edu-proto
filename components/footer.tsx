'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-xl text-primary mb-4">MatuX</h3>
            <p className="text-sm text-gray-500 mb-4">
              致力于通过前沿技术消除教育资源的不平等，让每个孩子都能享受优质的 STEM 教育。
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">开源资源</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="text-gray-600 hover:text-accent transition-colors">开源社区</Link></li>
              <li><Link href="/course-library" className="text-gray-600 hover:text-accent transition-colors">开源课件库</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-accent transition-colors">核心功能</Link></li>
              <li><Link href="/tech" className="text-gray-600 hover:text-accent transition-colors">技术亮点</Link></li>
            </ul>
          </div>

          {/* About & Legal Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">关于与法务</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-accent transition-colors">关于我们</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-accent transition-colors">服务条款</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-accent transition-colors">隐私政策</Link></li>
              <li><Link href="/cookies" className="text-gray-600 hover:text-accent transition-colors">Cookie 政策</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-semibold text-primary mb-4">帮助与支持</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-gray-600 hover:text-accent transition-colors">帮助中心</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-accent transition-colors">联系我们</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-accent transition-colors">常见问题</Link></li>
              <li><Link href="/feedback" className="text-gray-600 hover:text-accent transition-colors">意见反馈</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 MatuX STEM Education. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <Link href="/sitemap" className="hover:text-accent transition-colors">站点地图</Link>
            <span>|</span>
            <Link href="/accessibility" className="hover:text-accent transition-colors">无障碍声明</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
