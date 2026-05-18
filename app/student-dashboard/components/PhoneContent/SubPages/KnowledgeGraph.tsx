'use client';

import { motion } from 'framer-motion';
import { Network, Zap, Cpu, Code } from 'lucide-react';

interface KnowledgeGraphProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function KnowledgeGraph({ onNavigate }: KnowledgeGraphProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 mb-4">STEM 知识图谱</h2>
      
      {/* Graph Visualization Placeholder */}
      <div className="bg-slate-900 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden border border-slate-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-purple-500 rounded-full"></div>
        </div>
        <div className="text-center z-10">
          <Network className="h-12 w-12 text-blue-500 mx-auto mb-2" />
          <p className="text-xs text-slate-400">交互式图谱加载中...</p>
        </div>
        
        {/* Floating Nodes */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-10 right-10 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-lg"
        >
          Python
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute bottom-10 left-10 bg-green-600 text-white text-[10px] px-2 py-1 rounded-lg"
        >
          Arduino
        </motion.div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: '编程逻辑', icon: Code, color: 'from-blue-500 to-blue-600' },
          { name: '硬件电路', icon: Cpu, color: 'from-green-500 to-green-600' },
          { name: '物理原理', icon: Zap, color: 'from-orange-500 to-orange-600' },
          { name: '工程设计', icon: Network, color: 'from-purple-500 to-purple-600' }
        ].map((cat, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.98 }}
            className={`bg-gradient-to-br ${cat.color} rounded-xl p-4 text-white cursor-pointer`}
          >
            <cat.icon className="h-6 w-6 mb-2" />
            <h4 className="font-bold text-sm">{cat.name}</h4>
            <p className="text-[10px] opacity-80 mt-1">12 个关联知识点</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
