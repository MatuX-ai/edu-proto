'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Send, CheckCircle } from 'lucide-react';

interface ProjectDetailProps {
  onNavigate: (page: string) => void;
}

export default function ProjectDetail({ onNavigate }: ProjectDetailProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">智能感应小夜灯</h2>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">进行中</span>
        </div>
        <p className="text-sm opacity-90 mb-4">利用光敏电阻实现环境光自适应控制，学习模拟信号读取与 PWM 输出。</p>
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('代码编辑器')}
            className="flex-1 bg-white text-green-600 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
          >
            <Code className="h-4 w-4" /> 编写代码
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-white/20 backdrop-blur text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
          >
            <Cpu className="h-4 w-4" /> 硬件连接
          </motion.button>
        </div>
      </div>

      {/* Steps */}
      <div>
        <h3 className="font-bold text-slate-900 mb-3">实验步骤</h3>
        <div className="space-y-3">
          {[
            { title: '搭建电路', desc: '连接光敏电阻到 A0 引脚', completed: true },
            { title: '读取数据', desc: '编写程序读取模拟值', completed: true },
            { title: '逻辑判断', desc: '设定阈值控制 LED 开关', completed: false, current: true },
            { title: '调试优化', desc: '调整灵敏度并测试', completed: false }
          ].map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border-2 ${
                step.completed ? 'bg-green-500 border-green-500 text-white' : 
                step.current ? 'border-blue-500 text-blue-500' : 'border-slate-200 text-slate-300'
              }`}>
                {step.completed ? <CheckCircle className="h-5 w-5" /> : i + 1}
              </div>
              <div className="pb-4 border-l-2 border-slate-100 pl-4 -ml-4 ml-3.5">
                <h4 className={`text-sm font-bold ${step.current ? 'text-blue-600' : 'text-slate-900'}`}>{step.title}</h4>
                <p className="text-xs text-slate-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submission */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
        <h4 className="font-bold text-indigo-900 text-sm mb-2">提交作品</h4>
        <textarea 
          placeholder="描述你的实验心得或遇到的问题..."
          className="w-full bg-white border border-indigo-200 rounded-lg p-3 text-sm focus:outline-none focus:border-indigo-500 mb-3"
          rows={3}
        ></textarea>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" /> 提交报告
        </motion.button>
      </div>
    </div>
  );
}
