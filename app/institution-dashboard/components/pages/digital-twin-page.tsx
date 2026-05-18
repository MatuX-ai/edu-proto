'use client';

import { motion } from 'framer-motion';
import { Activity, Cpu, Wifi, Zap } from 'lucide-react';

export default function DigitalTwinPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">智能制造数字孪生实验室</h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          <Wifi className="h-4 w-4" />
          <span>设备在线: 12/12</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* 3D View Placeholder */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl relative overflow-hidden border border-slate-700 shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Cpu className="h-20 w-20 text-blue-500 mx-auto mb-4 animate-pulse" />
              <p className="text-slate-400 font-mono">正在同步物理实体数据...</p>
              <div className="mt-4 w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
                <motion.div 
                  className="h-full bg-blue-500" 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
          
          {/* Overlay Data */}
          <div className="absolute top-4 left-4 space-y-2">
            <div className="bg-black/50 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-xs text-white font-mono">
              RPM: 2400 | Temp: 45°C
            </div>
            <div className="bg-black/50 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-xs text-green-400 font-mono">
              Status: RUNNING
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              实时工况监控
            </h3>
            <div className="space-y-4">
              {[
                { label: '主轴负载', val: '65%', color: 'bg-blue-500' },
                { label: '进给速度', val: '1200 mm/min', color: 'bg-green-500' },
                { label: '刀具磨损', val: '12%', color: 'bg-yellow-500' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-bold text-gray-800">{item.val}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: item.val }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl text-white shadow-lg">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              远程干预
            </h3>
            <p className="text-indigo-100 text-sm mb-4">检测到 3 号工位有轻微震动异常，建议立即检查。</p>
            <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-medium">
              发送停机指令
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
