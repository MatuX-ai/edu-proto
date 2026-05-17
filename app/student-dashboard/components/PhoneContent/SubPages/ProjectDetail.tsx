'use client';

interface ProjectDetailProps {
  onNavigate: (page: string) => void;
}

export function ProjectDetail({ onNavigate }: ProjectDetailProps) {
  return (
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
  );
}
