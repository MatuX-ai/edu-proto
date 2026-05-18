'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Scale className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">服务条款</h1>
        </div>
        <p className="text-gray-500">最后更新日期：2026年5月18日</p>
      </motion.div>

      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. 接受条款</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            欢迎使用 MatuX STEM 教育平台（以下简称"本平台"）。通过使用本平台，您同意遵守本服务条款。如果您不同意这些条款，请不要使用本平台。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. 服务描述</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MatuX 提供在线 STEM 教育服务，包括但不限于：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>交互式编程学习课程</li>
            <li>虚拟实验室环境</li>
            <li>AI 辅助学习系统</li>
            <li>学生进度跟踪与分析</li>
            <li>区块链认证系统</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. 用户账户</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            为了使用本平台的某些功能，您需要注册一个账户。您有责任：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>提供准确、完整的注册信息</li>
            <li>保护您的账户密码安全</li>
            <li>对在您账户下发生的所有活动负责</li>
            <li>立即通知我们任何未经授权的账户使用</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. 知识产权</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            本平台上的所有内容，包括但不限于课程材料、代码示例、图形设计、商标和软件，均受知识产权法保护，归 MatuX 或其许可方所有。
          </p>
          <p className="text-gray-600 leading-relaxed">
            您不得复制、修改、分发、出售或租赁本平台的任何部分，除非获得我们的明确书面许可。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. 用户行为准则</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            使用本平台时，您同意不：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>从事任何非法或未经授权的活动</li>
            <li>干扰或破坏本平台的正常运行</li>
            <li>尝试未经授权访问其他用户的账户或数据</li>
            <li>上传恶意软件或病毒</li>
            <li>骚扰、威胁或侮辱其他用户</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. 付费服务</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            本平台提供免费和付费服务。付费服务的条款将在购买时明确说明。所有费用均不可退还，除非另有明确规定。
          </p>
          <p className="text-gray-600 leading-relaxed">
            我们保留随时修改价格的权利，但会对现有订阅用户提前通知。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">7. 免责声明</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            本平台按"现状"提供，不提供任何形式的明示或暗示保证。我们不保证：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>服务将不间断或无错误</li>
            <li>服务结果将准确或可靠</li>
            <li>服务质量将满足您的期望</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">8. 责任限制</h2>
          <p className="text-gray-600 leading-relaxed">
            在法律允许的最大范围内，MatuX 不对因使用或无法使用本平台而产生的任何间接、附带、特殊或后果性损害承担责任。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">9. 条款修改</h2>
          <p className="text-gray-600 leading-relaxed">
            我们保留随时修改本服务条款的权利。修改后的条款将在平台上公布后生效。继续使用本平台即表示您接受修改后的条款。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">10. 联系我们</h2>
          <p className="text-gray-600 leading-relaxed">
            如果您对本服务条款有任何疑问，请通过以下方式联系我们：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
            <li>邮箱：legal@matux.edu</li>
            <li>地址：北京市朝阳区科技园区创新大厦 10 层</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
