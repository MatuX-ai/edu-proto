'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export function KnowledgeGraph() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-center">
        <Globe className="h-16 w-16 mx-auto mb-3 opacity-80" />
        <h4 className="text-xl font-bold mb-2">STEM 知识图谱</h4>
        <p className="text-sm text-indigo-100">探索电子、机械与编程的联系</p>
      </div>
      <div className="space-y-3">
        <h5 className="font-bold text-sm">📡 电子学分支</h5>
        {[
          { name: '电路基础', progress: 100, locked: false },
          { name: '传感器应用', progress: 75, locked: false },
          { name: '无线通信', progress: 30, locked: false },
          { name: '嵌入式系统', progress: 0, locked: true }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.98 }}
            className={`bg-white rounded-xl p-3 border flex items-center justify-between ${item.locked ? 'opacity-50' : 'cursor-pointer'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${item.progress === 100 ? 'bg-green-100 text-green-600' : item.progress > 0 ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                {item.locked ? '🔒' : item.progress === 100 ? '✓' : `${item.progress}%`}
              </div>
              <span className="text-xs font-medium">{item.name}</span>
            </div>
            {!item.locked && <span className="text-slate-400">&gt;</span>}
          </motion.div>
        ))}
      </div>
      <div className="space-y-3">
        <h5 className="font-bold text-sm">⚙️ 机械学分支</h5>
        {[
          { name: '简单机械', progress: 100, locked: false },
          { name: '传动系统', progress: 60, locked: false },
          { name: '3D建模', progress: 0, locked: true }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.98 }}
            className={`bg-white rounded-xl p-3 border flex items-center justify-between ${item.locked ? 'opacity-50' : 'cursor-pointer'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${item.progress === 100 ? 'bg-green-100 text-green-600' : item.progress > 0 ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                {item.locked ? '🔒' : item.progress === 100 ? '✓' : `${item.progress}%`}
              </div>
              <span className="text-xs font-medium">{item.name}</span>
            </div>
            {!item.locked && <span className="text-slate-400">&gt;</span>}
          </motion.div>
        ))}
      </div>
      <div className="space-y-3">
        <h5 className="font-bold text-sm">💻 编程分支</h5>
        {[
          { name: 'Python基础', progress: 75, locked: false },
          { name: 'Arduino编程', progress: 100, locked: false },
          { name: '机器学习', progress: 30, locked: false },
          { name: 'Web开发', progress: 0, locked: true }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.98 }}
            className={`bg-white rounded-xl p-3 border flex items-center justify-between ${item.locked ? 'opacity-50' : 'cursor-pointer'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${item.progress === 100 ? 'bg-green-100 text-green-600' : item.progress > 0 ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                {item.locked ? '🔒' : item.progress === 100 ? '✓' : `${item.progress}%`}
              </div>
              <span className="text-xs font-medium">{item.name}</span>
            </div>
            {!item.locked && <span className="text-slate-400">&gt;</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
