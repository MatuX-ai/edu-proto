'use client';

import { motion } from 'framer-motion';
import { Mic, Monitor, Users, Settings, PlayCircle, Square } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LiveControlPage() {
  const [viewers, setViewers] = useState(1284);
  const [comments, setComments] = useState(356);

  // 模拟实时数据波动
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10) - 4);
      setComments(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">直播中控管理</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
            <Square className="h-4 w-4 fill-current" />
            <span>停止推流</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Settings className="h-4 w-4" />
            <span>参数设置</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-black aspect-video rounded-xl relative overflow-hidden flex items-center justify-center group shadow-2xl">
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse font-bold tracking-wider">LIVE ON AIR</div>
            <div className="absolute bottom-4 right-4 text-white/80 text-sm font-mono bg-black/50 px-2 rounded">01:23:45</div>
            <PlayCircle className="h-16 w-16 text-white/20 group-hover:text-white/40 transition-colors" />
            
            {/* 模拟信号干扰线 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full animate-[scan_4s_linear_infinite] pointer-events-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              layout 
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between"
            >
              <div>
                <span className="text-sm text-gray-500">在线观众</span>
                <div className="text-2xl font-bold text-gray-800 font-mono">{viewers.toLocaleString()}</div>
              </div>
              <Users className="h-8 w-8 text-blue-500 opacity-80" />
            </motion.div>
            <motion.div 
              layout 
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between"
            >
              <div>
                <span className="text-sm text-gray-500">互动评论</span>
                <div className="text-2xl font-bold text-gray-800 font-mono">{comments.toLocaleString()}</div>
              </div>
              <Mic className="h-8 w-8 text-green-500 opacity-80" />
            </motion.div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">信号源控制</h3>
            <div className="space-y-3">
              {['主摄像头', 'PPT 演示', '桌面共享'].map((source, i) => (
                <button key={i} className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${i === 0 ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <Monitor className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">{source}</span>
                  </div>
                  {i === 0 && <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4">音频监控</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden flex items-end px-1 gap-0.5">
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["20%", "80%", "40%"] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                    className="flex-1 bg-green-500 rounded-t-sm opacity-80"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-mono">-12dB</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
