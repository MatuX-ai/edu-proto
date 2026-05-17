'use client';

import { Award } from 'lucide-react';
import { Badge } from '../../../types';

export function AchievementDetail() {
  const badges: Badge[] = [
    { name: '首次实验', icon: '🎯', earned: true, desc: '完成第一个实验' },
    { name: '代码大师', icon: '💻', earned: true, desc: '编写100行代码' },
    { name: '硬件专家', icon: '🔧', earned: true, desc: '连接5个传感器' },
    { name: '团队合作', icon: '👥', earned: true, desc: '参与协作项目' },
    { name: '创新思维', icon: '💡', earned: false, desc: '提出创新方案' },
    { name: '坚持不懈', icon: '🔥', earned: false, desc: '连续学习7天' }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center">
        <Award className="h-16 w-16 mx-auto mb-3 opacity-80" />
        <h4 className="text-xl font-bold mb-1">STEM 探索者 Lv.5</h4>
        <p className="text-sm text-orange-100">经验值 850/1000</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, i) => (
          <div key={i} className={`bg-white rounded-xl p-4 border text-center ${badge.earned ? '' : 'opacity-50'}`}>
            <div className="text-3xl mb-2">{badge.icon}</div>
            <p className="text-xs font-bold mb-1">{badge.name}</p>
            <p className="text-[10px] text-slate-500">{badge.desc}</p>
            {badge.earned && <p className="text-[10px] text-green-600 mt-2 font-medium">已获得</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
