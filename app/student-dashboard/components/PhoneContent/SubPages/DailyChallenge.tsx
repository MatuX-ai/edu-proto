'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function DailyChallenge() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <Zap className="h-8 w-8" />
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">剩余 2h 15m</span>
        </div>
        <h4 className="text-xl font-bold mb-2">PWM 舵机控制</h4>
        <p className="text-sm text-orange-100 mb-4">使用 PWM 信号控制舵机转动到指定角度</p>
        <div className="flex gap-2 text-xs">
          <span className="bg-white/20 px-2 py-1 rounded">难度：中级</span>
          <span className="bg-white/20 px-2 py-1 rounded">奖励：50积分</span>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 border">
        <h5 className="font-bold text-sm mb-3">📋 挑战要求</h5>
        <ul className="text-xs text-slate-700 space-y-2">
          <li>✓ 理解 PWM 信号原理</li>
          <li>✓ 掌握舵机接线方法</li>
          <li>✓ 编写控制代码</li>
          <li>✓ 实现精确角度控制</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl p-4 border">
        <h5 className="font-bold text-sm mb-3">💡 提示</h5>
        <p className="text-xs text-slate-600 leading-relaxed">
          PWM（脉冲宽度调制）通过改变高电平的时间占比来控制舵机角度。
          通常 0.5ms 对应 0°，2.5ms 对应 180°。
        </p>
      </div>
      <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-green-400">
        <div className="text-slate-500 mb-2"></div>
        <div><span className="text-purple-400">#include</span> <span className="text-yellow-300">&lt;Servo.h&gt;</span></div>
        <div className="mt-2"></div>
        <div>Servo myServo;</div>
        <div className="mt-2"></div>
        <div><span className="text-purple-400">void</span> <span className="text-blue-400">setup</span>() &#123;</div>
        <div className="pl-4">myServo.<span className="text-blue-400">attach</span>(9);</div>
        <div>&#125;</div>
        <div className="mt-2"></div>
        <div><span className="text-purple-400">void</span> <span className="text-blue-400">loop</span>() &#123;</div>
        <div className="pl-4">myServo.<span className="text-blue-400">write</span>(90);</div>
        <div className="pl-4"><span className="text-blue-400">delay</span>(1000);</div>
        <div>&#125;</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 bg-slate-100 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
          💾 保存代码
        </button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all"
        >
          🚀 提交挑战
        </motion.button>
      </div>
    </div>
  );
}
