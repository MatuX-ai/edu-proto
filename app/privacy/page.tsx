'use client';

import { motion } from 'framer-motion';
import { Lock, Eye, ShieldCheck, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Lock className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">隐私政策</h1>
        </div>
        <p className="text-gray-500">最后更新日期：2026年5月18日</p>
      </motion.div>

      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">引言</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MatuX STEM 教育平台（以下简称"我们"）高度重视您的隐私保护。本隐私政策说明我们如何收集、使用、存储和保护您的个人信息。
          </p>
          <p className="text-gray-600 leading-relaxed">
            通过使用我们的服务，您同意按照本隐私政策的规定处理您的个人信息。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. 我们收集的信息</h2>
          
          <h3 className="text-xl font-medium text-primary mb-3 mt-6">1.1 您直接提供的信息</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
            <li>账户注册信息（姓名、邮箱、密码）</li>
            <li>个人资料（年龄、学校、学习偏好）</li>
            <li>支付信息（仅用于付费服务）</li>
            <li>用户生成内容（代码作品、项目、评论）</li>
          </ul>

          <h3 className="text-xl font-medium text-primary mb-3 mt-6">1.2 自动收集的信息</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
            <li>设备信息（浏览器类型、操作系统、IP 地址）</li>
            <li>使用数据（访问页面、停留时间、点击行为）</li>
            <li>学习进度和成就数据</li>
            <li>Cookie 和类似技术收集的信息</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. 我们如何使用您的信息</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>提供、维护和改进我们的教育服务</li>
            <li>个性化学习体验和内容推荐</li>
            <li>处理交易和发送相关通知</li>
            <li>响应您的请求和支持需求</li>
            <li>分析使用趋势以优化平台性能</li>
            <li>防止欺诈和保障平台安全</li>
            <li>遵守法律义务和执行我们的条款</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. 信息共享与披露</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们不会出售您的个人信息。我们可能在以下情况下共享您的信息：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li><strong>服务提供商：</strong>与我们合作的第三方服务商（如云存储、支付处理），他们必须遵守严格的保密义务</li>
            <li><strong>法律要求：</strong>应法院命令、传票或其他法律程序的要求</li>
            <li><strong>保护权利：</strong>为保护我们、用户或公众的权利、财产或安全</li>
            <li><strong>业务转让：</strong>在合并、收购或资产出售的情况下（会提前通知）</li>
            <li><strong>经您同意：</strong>在您明确同意的其他情况下</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. 数据安全措施</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们采用行业领先的安全措施保护您的个人信息：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-slate-50 rounded-lg border">
              <ShieldCheck className="h-6 w-6 text-accent mb-2" />
              <h4 className="font-semibold text-primary mb-2">加密传输</h4>
              <p className="text-sm text-gray-600">所有数据传输均采用 SSL/TLS 加密</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border">
              <Database className="h-6 w-6 text-accent mb-2" />
              <h4 className="font-semibold text-primary mb-2">安全存储</h4>
              <p className="text-sm text-gray-600">敏感数据加密存储，定期安全审计</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>数据加密（传输中和静态）</li>
            <li>访问控制和身份验证</li>
            <li>定期安全评估和渗透测试</li>
            <li>员工隐私培训和安全意识教育</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. 您的权利</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            根据适用的数据保护法，您可能拥有以下权利：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li><strong>访问权：</strong>请求获取我们持有的您的个人信息副本</li>
            <li><strong>更正权：</strong>要求更正不准确或不完整的个人信息</li>
            <li><strong>删除权：</strong>在特定情况下要求删除您的个人信息</li>
            <li><strong>限制处理权：</strong>要求限制我们对您信息的使用</li>
            <li><strong>数据携带权：</strong>以结构化格式获取您的数据</li>
            <li><strong>反对权：</strong>反对基于合法利益的某些数据处理</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            要行使这些权利，请通过 privacy@matux.edu 联系我们。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookie 政策</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们使用 Cookie 和类似技术来增强用户体验。您可以控制 Cookie 的设置：
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li><strong>必要 Cookie：</strong>网站正常运行所必需</li>
            <li><strong>功能 Cookie：</strong>记住您的偏好设置</li>
            <li><strong>分析 Cookie：</strong>帮助我们了解使用情况</li>
            <li><strong>营销 Cookie：</strong>提供个性化广告（可禁用）</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            您可以通过浏览器设置管理 Cookie 偏好。禁用某些 Cookie 可能影响网站功能。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">7. 儿童隐私</h2>
          <p className="text-gray-600 leading-relaxed">
            我们特别重视儿童隐私保护。对于 13 岁以下（或适用司法管辖区规定的年龄）的儿童，我们需要获得家长或监护人的可验证同意才能收集个人信息。如果您是家长或监护人，发现您的孩子向我们提供了信息，请联系我们。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">8. 国际数据传输</h2>
          <p className="text-gray-600 leading-relaxed">
            您的信息可能在我们运营的任何国家/地区进行处理。我们会采取适当措施确保您的信息得到充分保护，符合本隐私政策和适用法律的要求。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">9. 政策更新</h2>
          <p className="text-gray-600 leading-relaxed">
            我们可能会不时更新本隐私政策。重大变更时，我们会通过电子邮件或网站公告通知您。建议您定期查看本政策以了解最新信息。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">10. 联系我们</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            如果您对本隐私政策有任何疑问或担忧，请联系我们的数据保护官：
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border">
            <p className="text-gray-600"><strong>邮箱：</strong>privacy@matux.edu</p>
            <p className="text-gray-600 mt-2"><strong>地址：</strong>北京市朝阳区科技园区创新大厦 10 层 数据保护部</p>
            <p className="text-gray-600 mt-2"><strong>电话：</strong>+86 10 8888 9999</p>
          </div>
        </section>
      </div>
    </div>
  );
}
