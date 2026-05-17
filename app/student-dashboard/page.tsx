'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, MessageSquare, Box, User, Zap, Battery, Wifi, Play, Code, Camera, Globe, Award, X, Send, Bot } from 'lucide-react';
import { useState } from 'react';

export default function StudentMobileDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [deviceMode, setDeviceMode] = useState<'phone' | 'tablet'>('phone');
  const [tabletPage, setTabletPage] = useState<'home' | 'courses' | 'ar-lab' | 'projects' | 'achievements'>('home');
  const [phoneSubPage, setPhoneSubPage] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    {
      role: 'ai',
      content: '你好！我是你的 AI 老师 👋\n\n我看到你正在学习：\n• Python 基础语法（75%）\n• Arduino LED 实验（已完成✅）\n• 机器学习基础（30%）\n\n有什么我可以帮助你的吗？'
    },
    {
      role: 'user',
      content: 'Python 变量命名有什么规则？'
    },
    {
      role: 'ai',
      content: '很好的问题！Python 变量命名规则：\n\n✅ 允许的字符：\n• 字母（a-z, A-Z）\n• 数字（0-9，但不能开头）\n• 下划线 _\n\n❌ 不允许：\n• 空格和特殊字符\n• 以数字开头\n• Python 关键字（如 if, for）\n\n💡 最佳实践：\n• 使用小写字母和下划线\n• 要有意义，如 student_name\n• 避免单个字母（除了 i, j, k）\n\n例如：\n✓ user_age = 15\n✓ total_score = 95.5\n✗ 2name = "错误"\n✗ my-name = "错误"'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }]);

    // Simulate AI response based on context
    setTimeout(() => {
      let aiResponse = '';

      if (inputMessage.includes('Python') || inputMessage.includes('变量')) {
        aiResponse = '关于 Python 变量，记住这几个要点：\n\n1️⃣ 变量名要有意义\n   例如：student_name 比 sn 更好\n\n2️⃣ 使用小写字母和下划线\n   例如：total_score = 95\n\n3️⃣ 赋值用 = 符号\n   例如：age = 15\n\n📝 练习：\n试着定义一个变量存储你的姓名：\nmy_name = "你的名字"\n\n你想看更多例子吗？';
      } else if (inputMessage.includes('Arduino') || inputMessage.includes('LED') || inputMessage.includes('引脚')) {
        aiResponse = 'LED 控制实验的关键步骤：\n\n📌 硬件连接：\n• LED 正极 → 数字引脚 13\n• LED 负极 → GND\n• 建议加 220Ω 电阻\n\n📌 代码要点：\n```cpp\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}\n```\n\n💡 提示：HIGH=亮，LOW=灭\n\n需要我帮你检查代码吗？';
      } else if (inputMessage.includes('进度') || inputMessage.includes('任务') || inputMessage.includes('学习')) {
        aiResponse = '我看到你今天完成了 1/3 的任务，很棒！💪\n\n📊 当前进度：\n✅ Arduino LED 实验 - 100%\n🔄 Python 视频课程 - 75%\n⏳ 机器学习测验 - 30%\n\n💡 建议：\n1. 先完成 Python 课程的剩余 25%\n2. 然后做机器学习的小测验\n3. 最后可以尝试综合项目\n\n🎯 今日目标：完成所有任务\n加油！你可以的！';
      } else if (inputMessage.includes('循环') || inputMessage.includes('for') || inputMessage.includes('while')) {
        aiResponse = 'Python 循环结构详解：\n\n🔁 for 循环（已知次数）：\n```python\nfor i in range(5):\n    print(i)\n# 输出: 0, 1, 2, 3, 4\n```\n\n🔁 while 循环（条件控制）：\n```python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```\n\n💡 使用场景：\n• for：遍历列表、固定次数\n• while：不确定次数、条件判断\n\n想看看实际例子吗？';
      } else if (inputMessage.includes('函数') || inputMessage.includes('def')) {
        aiResponse = 'Python 函数定义：\n\n📦 基本语法：\n```python\ndef greet(name):\n    return f"你好, {name}!"\n\n# 调用函数\nmessage = greet("李明")\nprint(message)  # 你好, 李明!\n```\n\n✨ 优点：\n• 代码复用\n• 模块化\n• 易于维护\n\n💡 练习：\n写一个计算面积的函数：\n```python\ndef calc_area(width, height):\n    return width * height\n```\n\n需要更多示例吗？';
      } else if (inputMessage.includes('传感器') || inputMessage.includes('sensor')) {
        aiResponse = '常用传感器介绍：\n\n🌡️ 温度传感器：\n• 型号：DHT11/DHT22\n• 用途：测量环境温度\n\n💡 光敏电阻：\n• 用途：检测光线强度\n• 应用：自动夜灯\n\n📏 超声波传感器：\n• 型号：HC-SR04\n• 用途：测距\n• 精度：±3mm\n\n🎯 推荐项目：\n制作一个智能温湿度监测站！\n\n想了解哪个传感器的详细用法？';
      } else {
        aiResponse = `我理解你的问题："${inputMessage}"\n\n让我为你解答...\n\n💡 根据你当前的学习进度，我建议：\n\n1️⃣ 查看相关课程资料\n   • Python 基础教程\n   • Arduino 实验指南\n\n2️⃣ 实践操作巩固知识\n   • 动手写代码\n   • 搭建电路\n\n3️⃣ 有问题随时问我\n   • 代码调试\n   • 概念解释\n   • 项目指导\n\n还有其他疑问吗？😊`;
      }

      setChatMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 800 + Math.random() * 700);

    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">MatuX 移动端体验</h1>
        <p className="text-gray-500 mt-2">随时随地探索 STEM 世界</p>

        {/* Device Switcher */}
        <div className="mt-6 inline-flex bg-white rounded-full p-1 shadow-md border">
          <button
            onClick={() => setDeviceMode('phone')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              deviceMode === 'phone'
                ? 'bg-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            📱 手机模式
          </button>
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              deviceMode === 'tablet'
                ? 'bg-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            📟 平板模式
          </button>
        </div>
      </div>

      {/* Device Frame - Phone or Tablet */}
      {deviceMode === 'phone' ? (
        <motion.div
          key="phone"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-[360px] h-[720px] bg-black rounded-[3rem] shadow-2xl border-[8px] border-slate-800 overflow-hidden"
        >
        {/* Notch / Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center space-x-2">
          <div className="w-16 h-4 bg-slate-900 rounded-full"></div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-slate-50 overflow-y-auto no-scrollbar pb-20 relative">
          {/* Status Bar */}
          <div className="h-10 w-full flex justify-between items-center px-6 pt-2 text-xs font-medium text-slate-900">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <Wifi className="h-3 w-3" />
              <Battery className="h-3 w-3" />
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 py-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-primary">Hi, 李明 👋</h2>
              <p className="text-xs text-gray-500">准备好开始今天的实验了吗？</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <User className="h-5 w-5 text-accent" />
            </div>
          </div>

          {/* Main Content Area - Dynamic Switching */}
          <div className="px-5 space-y-6">
            {/* Sub Page Display */}
            {phoneSubPage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="fixed inset-0 bg-slate-50 z-40 overflow-y-auto pb-20"
              >
                <div className="sticky top-0 bg-white border-b px-5 py-3 flex items-center gap-3 z-10">
                  <button onClick={() => setPhoneSubPage(null)} className="p-2 hover:bg-slate-100 rounded-full">
                    ←
                  </button>
                  <h3 className="font-bold text-lg">{phoneSubPage}</h3>
                </div>
                <div className="p-5">
                  {phoneSubPage === '课程详情' && (
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                        <div className="text-4xl mb-3">🐍</div>
                        <h4 className="text-xl font-bold mb-2">Python 编程基础</h4>
                        <p className="text-sm text-blue-100">掌握 Python 核心语法和编程思维</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border">
                        <h5 className="font-bold mb-3">课程进度</h5>
                        <div className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>总体进度</span>
                            <span className="font-semibold text-blue-600">75%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500">已完成 15/20 课时</p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-bold text-sm">课程章节</h5>
                        {[
                          { title: '变量与数据类型', duration: '15分钟', completed: true },
                          { title: '条件判断', duration: '20分钟', completed: true },
                          { title: '循环结构', duration: '25分钟', completed: true },
                          { title: '函数定义', duration: '30分钟', completed: false, current: true },
                          { title: '列表与字典', duration: '25分钟', completed: false }
                        ].map((chapter, i) => (
                          <motion.div
                            key={i}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => chapter.current && setPhoneSubPage('代码编辑器')}
                            className={`bg-white rounded-xl p-3 border flex items-center justify-between ${chapter.current ? 'border-blue-500 bg-blue-50 cursor-pointer' : ''}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${chapter.completed ? 'bg-green-100 text-green-600' : chapter.current ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                                {chapter.completed ? '✓' : i + 1}
                              </div>
                              <div>
                                <p className="text-xs font-medium">{chapter.title}</p>
                                <p className="text-[10px] text-slate-500">{chapter.duration}</p>
                              </div>
                            </div>
                            {chapter.current && <Play className="h-4 w-4 text-blue-600" />}
                          </motion.div>
                        ))}
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
                        继续学习
                      </button>
                    </div>
                  )}
                  {phoneSubPage === '项目详情' && (
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                        <div className="text-4xl mb-3">💧</div>
                        <h4 className="text-xl font-bold mb-2">自动浇花系统</h4>
                        <p className="text-sm text-green-100">基于土壤湿度传感器的智能灌溉</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-slate-600">项目状态</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">已完成</span>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>完成度</span>
                            <span className="font-semibold text-green-600">100%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-600 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-bold text-sm">所需材料</h5>
                        {['ESP32 开发板', '土壤湿度传感器', '继电器模块', '水泵', '杜邦线'].map((item, i) => (
                          <div key={i} className="bg-white rounded-xl p-3 border flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xs">✓</div>
                            <span className="text-xs">{item}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors">
                        查看代码
                      </button>
                    </div>
                  )}
                  {phoneSubPage === '成就详情' && (
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center">
                        <Award className="h-16 w-16 mx-auto mb-3 opacity-80" />
                        <h4 className="text-xl font-bold mb-1">STEM 探索者 Lv.5</h4>
                        <p className="text-sm text-orange-100">经验值 850/1000</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: '首次实验', icon: '🎯', earned: true, desc: '完成第一个实验' },
                          { name: '代码大师', icon: '💻', earned: true, desc: '编写100行代码' },
                          { name: '硬件专家', icon: '🔧', earned: true, desc: '连接5个传感器' },
                          { name: '团队合作', icon: '👥', earned: true, desc: '参与协作项目' },
                          { name: '创新思维', icon: '💡', earned: false, desc: '提出创新方案' },
                          { name: '坚持不懈', icon: '🔥', earned: false, desc: '连续学习7天' }
                        ].map((badge, i) => (
                          <div key={i} className={`bg-white rounded-xl p-4 border text-center ${badge.earned ? '' : 'opacity-50'}`}>
                            <div className="text-3xl mb-2">{badge.icon}</div>
                            <p className="text-xs font-bold mb-1">{badge.name}</p>
                            <p className="text-[10px] text-slate-500">{badge.desc}</p>
                            {badge.earned && <p className="text-[10px] text-green-600 mt-2 font-medium">已获得</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {phoneSubPage === '代码编辑器' && (
                    <div className="space-y-4">
                      <div className="bg-slate-900 rounded-xl overflow-hidden">
                        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-xs text-slate-400">main.py</span>
                        </div>
                        <div className="p-4 font-mono text-sm text-green-400 overflow-x-auto">
                          <div className="text-slate-500"># 函数定义示例</div>
                          <div><span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(name):</div>
                          <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-300">f&quot;你好, &#123;name&#125;!&quot;</span></div>
                          <div className="mt-2"></div>
                          <div><span className="text-slate-500"># 调用函数</span></div>
                          <div>message = <span className="text-blue-400">greet</span>(<span className="text-yellow-300">&quot;李明&quot;</span>)</div>
                          <div><span className="text-blue-400">print</span>(message)</div>
                          <div className="mt-2 text-slate-500 animate-pulse">|</div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border">
                        <h5 className="font-bold text-sm mb-3">运行结果</h5>
                        <div className="bg-slate-100 rounded-lg p-3 font-mono text-sm">
                          <div className="text-green-600">你好, 李明!</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="py-3 bg-slate-100 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                          💾 保存代码
                        </button>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="py-3 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 transition-colors"
                        >
                          ▶️ 运行代码
                        </motion.button>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <h5 className="font-bold text-sm text-blue-900 mb-2">💡 学习提示</h5>
                        <ul className="text-xs text-blue-800 space-y-1">
                          <li>• def 关键字用于定义函数</li>
                          <li>• 函数名后面要加括号和冒号</li>
                          <li>• 函数体需要缩进（通常4个空格）</li>
                          <li>• return 语句返回结果</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Home Tab */}
            {activeTab === 'home' && (
              <>
                {/* Hardware Status Card */}
                <div className="bg-slate-900 rounded-2xl p-4 text-white shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <Cpu className="h-5 w-5 text-accent" />
                      <span className="font-bold text-sm">ESP32 开发板</span>
                    </div>
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">在线</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/10 rounded-lg p-2 flex items-center space-x-2">
                      <Battery className="h-3 w-3 text-green-400" /> <span>85%</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 flex items-center space-x-2">
                      <Wifi className="h-3 w-3 text-blue-400" /> <span>-42dBm</span>
                    </div>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div>
                  <h3 className="font-bold text-primary text-sm mb-3">AI 推荐项目</h3>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPhoneSubPage('项目详情')}
                    className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-md relative overflow-hidden cursor-pointer"
                  >
                    <Zap className="absolute -right-2 -bottom-2 h-20 w-20 text-white/10" />
                    <h4 className="font-bold text-base mb-1">智能感应小夜灯</h4>
                    <p className="text-[10px] text-indigo-100 mb-3 line-clamp-2">利用光敏电阻实现环境光自适应控制。</p>
                    <button className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-full flex items-center">
                      <Play className="h-3 w-3 mr-1 fill-current" /> 开始实验
                    </button>
                  </motion.div>
                </div>

                {/* Quick Actions Grid */}
                <div>
                  <h3 className="font-bold text-primary text-sm mb-3">常用工具</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { icon: Code, label: '代码', color: 'bg-blue-100 text-blue-600' },
                      { icon: Box, label: '3D模型', color: 'bg-orange-100 text-orange-600' },
                      { icon: Camera, label: 'AR扫描', color: 'bg-green-100 text-green-600' },
                      { icon: MessageSquare, label: 'AI助手', color: 'bg-purple-100 text-purple-600' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center space-y-2">
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-sm`}>
                          <item.icon className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-medium text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Learn Tab */}
            {activeTab === 'learn' && (
              <div className="space-y-5">
                {/* Daily Challenge */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-sm flex items-center"><Zap className="h-4 w-4 mr-1"/> 每日挑战</h3>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">剩余 2h</span>
                  </div>
                  <p className="text-xs text-orange-50 mb-3">使用 PWM 信号控制舵机转动到指定角度。</p>
                  <button className="w-full bg-white text-orange-600 text-xs font-bold py-2 rounded-lg">接受挑战</button>
                </div>

                <h3 className="font-bold text-primary text-sm">我的课程表</h3>
                {[
                  { name: 'Arduino 基础语法', p: 100, emoji: '🤖' },
                  { name: '传感器数据采集', p: 75, emoji: '📡' },
                  { name: '无线通信协议 (BLE)', p: 65, emoji: '📶' },
                  { name: 'Python 硬件编程', p: 30, emoji: '🐍' }
                ].map((course, i) => (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPhoneSubPage('课程详情')}
                    className="bg-white p-3 rounded-xl border shadow-sm flex items-center space-x-3 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
                      {course.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-bold">{course.name}</span>
                        <span className="text-accent">{course.p}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-accent h-1.5 rounded-full" style={{ width: `${course.p}%` }}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Knowledge Graph Entry */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-indigo-900 text-xs">STEM 知识图谱</h4>
                    <p className="text-[10px] text-indigo-600 mt-1">探索电子、机械与编程的联系</p>
                  </div>
                  <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700">
                    <Globe className="h-4 w-4" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-4">
                {/* Topic Tabs */}
                <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
                  {['全部', '开源硬件', '3D打印', '机器人', 'AI应用'].map((tag, i) => (
                    <span key={i} className={`text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap ${i === 0 ? 'bg-primary text-white' : 'bg-white border text-gray-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold text-primary text-sm">创客广场</h3>
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl border shadow-sm overflow-hidden">
                    <div className="h-28 bg-slate-200 flex items-center justify-center text-gray-400 text-xs relative">
                      [项目作品展示图]
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-[9px] px-2 py-0.5 rounded-full flex items-center">
                        <User className="h-2 w-2 mr-1" /> 王同学
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold text-xs mb-1">基于 ESP32 的自动浇花系统</h4>
                      <p className="text-[10px] text-gray-500 mb-2 line-clamp-2">通过土壤湿度传感器实时监测，当数值低于阈值时自动开启水泵...</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-gray-600">#物联网</span>
                          <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-gray-600">#自动化</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Award className="h-3 w-3" /> <span className="text-[9px]">128</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6 text-center pt-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <User className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary">李明</h3>
                  <p className="text-[10px] text-gray-500">STEM 探索者 Lv.5</p>
                </div>
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPhoneSubPage('成就详情')}
                  className="grid grid-cols-3 gap-2 text-center cursor-pointer"
                >
                  <div className="bg-white p-2 rounded-lg border">
                    <div className="font-bold text-accent">12</div>
                    <div className="text-[9px] text-gray-500">完成项目</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border">
                    <div className="font-bold text-accent">850</div>
                    <div className="text-[9px] text-gray-500">获得积分</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border">
                    <div className="font-bold text-accent">5</div>
                    <div className="text-[9px] text-gray-500">数字勋章</div>
                  </div>
                </motion.div>
                <div className="bg-white rounded-xl border text-left overflow-hidden">
                  {['我的硬件设备', '区块链证书', '学习报告', '系统设置'].map((item, i) => (
                    <div key={i} className="p-3 border-b last:border-0 flex justify-between items-center text-xs hover:bg-slate-50 cursor-pointer">
                      <span>{item}</span>
                      <span className="text-gray-400">&gt;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating AI Bubble Button - Inside Phone Frame */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowAIAssistant(true)}
          className="absolute bottom-20 right-4 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white z-30"
        >
          <Bot className="h-6 w-6" />
        </motion.button>

          {/* AI Chat Modal - Phone */}
          <AnimatePresence>
            {showAIAssistant && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
                onClick={() => setShowAIAssistant(false)}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="bg-white rounded-t-3xl sm:rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-t-3xl sm:rounded-t-2xl flex justify-between items-center">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-bold block">AI 老师</span>
                        <span className="text-xs text-white/80">在线答疑</span>
                      </div>
                    </div>
                    <button onClick={() => setShowAIAssistant(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50" style={{ maxHeight: '50vh' }}>
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-line shadow-sm ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
                            : 'bg-white text-slate-900 rounded-bl-sm border'
                        }`}>
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 bg-white border-t">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="输入你的问题..."
                        className="flex-1 px-4 py-2 border-2 rounded-full text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSendMessage}
                        className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-md"
                      >
                        <Send className="h-4 w-4" />
                      </motion.button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">💡 AI老师会根据你的学习情况提供个性化指导</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Navigation Bar */}
          <div className="absolute bottom-0 w-full h-16 bg-white border-t flex justify-around items-center px-2 pb-2">
            {['home', 'learn', 'community', 'profile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center space-y-1 ${activeTab === tab ? 'text-accent' : 'text-gray-400'}`}
              >
                {tab === 'home' && <Box className="h-5 w-5" />}
                {tab === 'learn' && <Code className="h-5 w-5" />}
                {tab === 'community' && <MessageSquare className="h-5 w-5" />}
                {tab === 'profile' && <User className="h-5 w-5" />}
                <span className="text-[9px] font-medium capitalize">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        /* Tablet Mode */
        <div className="overflow-x-auto w-full flex justify-center">
          <motion.div
            key="tablet"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-[1024px] h-[768px] bg-black rounded-[2rem] shadow-2xl border-[12px] border-slate-800 overflow-hidden flex-shrink-0"
          >
          {/* Tablet Status Bar */}
          <div className="h-8 bg-slate-900 flex justify-between items-center px-6 text-xs text-white">
            <span>{new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</span>
            <div className="flex items-center space-x-2">
              <Wifi className="h-3 w-3" />
              <Battery className="h-3 w-3" />
              <span>85%</span>
            </div>
          </div>

          {/* Tablet Content */}
          <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 overflow-y-auto p-8 pb-24">
            <AnimatePresence mode="wait">
              {tabletPage === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">你好，同学 👋</h2>
              <p className="text-lg text-slate-600">{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-4 gap-5 mb-8">
              {[
                { icon: Code, label: '我的课程', color: 'from-blue-500 to-blue-600', emoji: '📚', page: 'courses' },
                { icon: Camera, label: 'AR 实验室', color: 'from-purple-500 to-purple-600', emoji: '🥽', page: 'ar-lab' },
                { icon: Box, label: '实战项目', color: 'from-green-500 to-green-600', emoji: '🚀', page: 'projects' },
                { icon: Award, label: '学习成就', color: 'from-orange-500 to-orange-600', emoji: '🏆', page: 'achievements' }
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setTabletPage(item.page as 'courses' | 'ar-lab' | 'projects' | 'achievements')}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-3"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl`}>
                    {item.emoji}
                  </div>
                  <span className="font-semibold text-slate-900">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Today's Tasks */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">今日学习任务</h3>
              <div className="bg-white rounded-2xl p-4 shadow-md space-y-3">
                {[
                  { title: 'Python 基础语法 - 变量与数据类型', duration: '30分钟', type: '视频课程', progress: 75, completed: false },
                  { title: 'Arduino 入门 - LED 控制实验', duration: '45分钟', type: '实践操作', progress: 100, completed: true },
                  { title: '机器学习基础 - 监督学习概念', duration: '25分钟', type: '互动测验', progress: 30, completed: false }
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'
                    }`}>
                      {task.completed && '✓'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{task.title}</h4>
                      <p className="text-xs text-slate-500">{task.duration} · {task.type}</p>
                    </div>
                    <div className="flex items-center gap-3 min-w-[120px]">
                      <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: `${task.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-semibold text-blue-600 min-w-[35px] text-right">{task.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Stats */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">本周学习统计</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: '12.5', label: '学习时长(小时)' },
                  { value: '8', label: '完成任务' },
                  { value: '450', label: '获得积分' },
                  { value: '3', label: '连续天数' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">为你推荐</h3>
              <div className="grid grid-cols-3 gap-5">
                {[
                  { title: '机器人编程进阶', desc: '学习传感器应用和自动控制原理', level: '中级', duration: '12课时', emoji: '🤖', gradient: 'from-indigo-500 to-purple-600' },
                  { title: 'AI 视觉识别', desc: '掌握图像处理和模式识别技术', level: '高级', duration: '16课时', emoji: '👁️', gradient: 'from-pink-500 to-red-500' },
                  { title: '3D 建模与设计', desc: '使用 Blender 创建三维模型', level: '初级', duration: '10课时', emoji: '🎨', gradient: 'from-cyan-500 to-blue-500' }
                ].map((course, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className={`h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center text-6xl`}>
                      {course.emoji}
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-slate-900 mb-2">{course.title}</h4>
                      <p className="text-sm text-slate-600 mb-3 line-clamp-2">{course.desc}</p>
                      <div className="flex gap-3 text-xs text-slate-500 mb-4">
                        <span>{course.level}</span>
                        <span>·</span>
                        <span>{course.duration}</span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                        开始学习
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
                </motion.div>
              )}

              {/* Courses Page */}
              {tabletPage === 'courses' && (
                <motion.div
                  key="courses"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">我的课程 📚</h2>
                    <button onClick={() => setTabletPage('home')} className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all text-sm font-medium">
                      ← 返回首页
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { title: 'Python 编程基础', progress: 75, total: 20, completed: 15, emoji: '🐍', color: 'from-blue-500 to-blue-600' },
                      { title: 'Arduino 硬件开发', progress: 100, total: 15, completed: 15, emoji: '🔌', color: 'from-green-500 to-green-600' },
                      { title: '机器学习入门', progress: 30, total: 25, completed: 8, emoji: '🤖', color: 'from-purple-500 to-purple-600' },
                      { title: '3D 建模与设计', progress: 50, total: 18, completed: 9, emoji: '🎨', color: 'from-pink-500 to-pink-600' },
                      { title: '物联网应用开发', progress: 10, total: 22, completed: 2, emoji: '📡', color: 'from-indigo-500 to-indigo-600' },
                      { title: '机器人控制原理', progress: 0, total: 20, completed: 0, emoji: '⚙️', color: 'from-orange-500 to-orange-600' }
                    ].map((course, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                      >
                        <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl`}>
                          {course.emoji}
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-slate-900 mb-2">{course.title}</h4>
                          <div className="mb-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-600">进度</span>
                              <span className="font-semibold text-blue-600">{course.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mb-3">已完成 {course.completed}/{course.total} 课时</p>
                          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                            {course.progress === 100 ? '复习课程' : '继续学习'}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* AR Lab Page */}
              {tabletPage === 'ar-lab' && (
                <motion.div
                  key="ar-lab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">AR 实验室 🥽</h2>
                    <button onClick={() => setTabletPage('home')} className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all text-sm font-medium">
                      ← 返回首页
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
                    <Camera className="h-20 w-20 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">AR 实验环境</h3>
                    <p className="text-purple-100 mb-6">通过增强现实技术，在真实环境中进行虚拟实验</p>
                    <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      启动 AR 相机
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    {[
                      { title: '电路仿真实验', desc: '虚拟搭建电路并测试', emoji: '⚡', users: 234 },
                      { title: '机械结构组装', desc: '3D 模型拆解与组装', emoji: '🔧', users: 189 },
                      { title: '化学反应模拟', desc: '安全的化学实验体验', emoji: '🧪', users: 156 }
                    ].map((lab, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center"
                      >
                        <div className="text-4xl mb-3">{lab.emoji}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{lab.title}</h4>
                        <p className="text-xs text-slate-500 mb-3">{lab.desc}</p>
                        <p className="text-xs text-purple-600 font-medium">{lab.users} 人正在实验</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Projects Page */}
              {tabletPage === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">实战项目 🚀</h2>
                    <button onClick={() => setTabletPage('home')} className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all text-sm font-medium">
                      ← 返回首页
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { title: '智能温控风扇', status: '进行中', progress: 65, emoji: '🌬️', difficulty: '中级' },
                      { title: '自动浇花系统', status: '已完成', progress: 100, emoji: '💧', difficulty: '初级' },
                      { title: '语音控制小车', status: '进行中', progress: 40, emoji: '🚗', difficulty: '高级' },
                      { title: '环境监测站', status: '未开始', progress: 0, emoji: '🌡️', difficulty: '中级' }
                    ].map((project, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{project.emoji}</div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === '已完成' ? 'bg-green-100 text-green-700' :
                            project.status === '进行中' ? 'bg-blue-100 text-blue-700' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">{project.title}</h4>
                        <p className="text-xs text-slate-500 mb-3">难度：{project.difficulty}</p>
                        {project.progress > 0 && (
                          <div className="mb-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-600">完成度</span>
                              <span className="font-semibold text-blue-600">{project.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: `${project.progress}%` }}></div>
                            </div>
                          </div>
                        )}
                        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                          {project.status === '未开始' ? '开始项目' : '继续开发'}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Achievements Page */}
              {tabletPage === 'achievements' && (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">学习成就 🏆</h2>
                    <button onClick={() => setTabletPage('home')} className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all text-sm font-medium">
                      ← 返回首页
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100 text-sm mb-1">当前等级</p>
                        <h3 className="text-3xl font-bold">STEM 探索者 Lv.5</h3>
                      </div>
                      <Award className="h-16 w-16 opacity-80" />
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>经验值</span>
                        <span>850 / 1000</span>
                      </div>
                      <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { name: '首次实验', icon: '🎯', earned: true },
                      { name: '代码大师', icon: '💻', earned: true },
                      { name: '硬件专家', icon: '🔧', earned: true },
                      { name: '团队合作', icon: '👥', earned: true },
                      { name: '创新思维', icon: '💡', earned: false },
                      { name: '坚持不懈', icon: '🔥', earned: false },
                      { name: '知识分享', icon: '📚', earned: false },
                      { name: '完美主义者', icon: '⭐', earned: false }
                    ].map((badge, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-white rounded-2xl p-4 text-center shadow-md ${
                          badge.earned ? '' : 'opacity-50 grayscale'
                        }`}
                      >
                        <div className="text-3xl mb-2">{badge.icon}</div>
                        <p className="text-xs font-medium text-slate-900">{badge.name}</p>
                        {badge.earned && <p className="text-[10px] text-green-600 mt-1">已获得</p>}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating AI Bubble Button - Inside Tablet Frame */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAIAssistant(true)}
            className="absolute bottom-24 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white z-30"
          >
            <Bot className="h-7 w-7" />
          </motion.button>

          {/* AI Chat Modal - Tablet */}
          <AnimatePresence>
            {showAIAssistant && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8"
                onClick={() => setShowAIAssistant(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-3xl w-full max-w-2xl h-[600px] flex flex-col shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 flex justify-between items-center">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">AI 老师</h3>
                        <p className="text-xs text-white/80">根据你的学习进度提供个性化指导</p>
                      </div>
                    </div>
                    <button onClick={() => setShowAIAssistant(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-colors">
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[70%] rounded-2xl px-5 py-3 text-sm whitespace-pre-line shadow-sm ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
                            : 'bg-white text-slate-900 rounded-bl-sm border'
                        }`}>
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-6 bg-white border-t">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="输入你的问题，AI老师会根据你的学习情况给出建议..."
                        className="flex-1 px-5 py-3 border-2 rounded-full text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSendMessage}
                        className="px-6 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        <Send className="h-5 w-5" />
                      </motion.button>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 text-center">💡 AI老师已了解你的学习进度：Python 75% · Arduino 100% · 机器学习 30%</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tablet Dock */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-xl border border-white/30 flex gap-4">
            {[
              { icon: Box, label: '首页', action: () => setTabletPage('home') },
              { icon: Code, label: '课程', action: () => setTabletPage('courses') },
              { icon: Camera, label: 'AR实验', action: () => setTabletPage('ar-lab') },
              { icon: Box, label: '项目', action: () => setTabletPage('projects') },
              { icon: Award, label: '成就', action: () => setTabletPage('achievements') }
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 1.05 }}
                onClick={item.action}
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                  (i === 0 && tabletPage === 'home') ||
                  (i === 1 && tabletPage === 'courses') ||
                  (i === 2 && tabletPage === 'ar-lab') ||
                  (i === 3 && tabletPage === 'projects') ||
                  (i === 4 && tabletPage === 'achievements')
                    ? 'bg-blue-100'
                    : 'hover:bg-black/5'
                }`}
                title={item.label}
              >
                <item.icon className={`h-7 w-7 ${
                  (i === 0 && tabletPage === 'home') ||
                  (i === 1 && tabletPage === 'courses') ||
                  (i === 2 && tabletPage === 'ar-lab') ||
                  (i === 3 && tabletPage === 'projects') ||
                  (i === 4 && tabletPage === 'achievements')
                    ? 'text-blue-600'
                    : 'text-slate-700'
                }`} />
              </motion.button>
            ))}
          </div>
        </motion.div>
        </div>
      )}
    </div>
  );
}
