'use client';

import { motion } from 'framer-motion';
import { Award, Share2, Download, Shield } from 'lucide-react';

interface AchievementDetailProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AchievementDetail({ onNavigate }: AchievementDetailProps) {
  return (
    <div className="space-y-6 text-center">
      {/* Badge Display */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-40 h-40 mx-auto flex items-center justify-center shadow-2xl relative"
      >
        <Award className="h-20 w-20 text-white" />
        <div className="absolute -bottom-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full border-2 border-white">
          Lv.5 勋章
        </div>
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900">STEM 探索者</h2>
        <p className="text-sm text-slate-500 mt-1">获得于 2026年5月5日</p>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl p-4 border text-left">
        <h3 className="font-bold text-sm mb-2">获得条件</h3>
        <ul className="text-xs text-slate-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>完成 5 个不同类别的实验项目</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>累计学习时长超过 20 小时</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>在社区分享至少 3 篇作品心得</span>
          </li>
        </ul>
      </div>

      {/* Blockchain Info */}
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
        <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
          <Shield className="h-4 w-4" />
          <span className="text-xs font-bold">区块链认证信息</span>
        </div>
        <p className="text-[10px] text-slate-400 break-all">TxHash: 0x7f8a...3b2c</p>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-purple-100 text-purple-700 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
        >
          <Share2 className="h-4 w-4" /> 分享成就
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-100 text-indigo-700 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
        >
          <Download className="h-4 w-4" /> 下载证书
        </motion.button>
      </div>
    </div>
  );
}
