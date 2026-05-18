'use client';

import { motion } from 'framer-motion';
import { Bell, Shield, Moon, Globe, LogOut } from 'lucide-react';

interface SettingsProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Settings({ onNavigate }: SettingsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 mb-4">系统设置</h2>
      
      {/* Account */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-slate-50">
          <h3 className="font-bold text-sm text-slate-700">账号与安全</h3>
        </div>
        {[
          { icon: Globe, label: '语言设置', value: '简体中文' },
          { icon: Bell, label: '消息通知', value: '已开启' },
          { icon: Shield, label: '隐私权限', value: '' }
        ].map((item, i) => (
          <div key={i} className="p-4 border-b last:border-0 flex items-center justify-between cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-slate-500" />
              <span className="text-sm">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.value && <span className="text-xs text-slate-400">{item.value}</span>}
              <span className="text-slate-300">&gt;</span>
            </div>
          </div>
        ))}
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-slate-50">
          <h3 className="font-bold text-sm text-slate-700">外观与显示</h3>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="h-5 w-5 text-slate-500" />
            <span className="text-sm">深色模式</span>
          </div>
          <div className="w-10 h-6 bg-slate-200 rounded-full relative cursor-pointer">
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>

      {/* Logout */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border border-red-100"
      >
        <LogOut className="h-4 w-4" /> 退出登录
      </motion.button>

      <div className="text-center text-[10px] text-slate-400">
        MatuX Education Platform v2.1.0
      </div>
    </div>
  );
}
