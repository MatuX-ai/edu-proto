'use client';

export function Settings() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b">
          <h5 className="font-bold text-sm mb-1">账号信息</h5>
          <p className="text-xs text-slate-500">管理你的个人资料</p>
        </div>
        <div className="divide-y">
          <div className="p-4 flex justify-between items-center">
            <span className="text-sm">昵称</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">李明</span>
              <span className="text-slate-400">&gt;</span>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-sm">学校</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">北京市实验小学</span>
              <span className="text-slate-400">&gt;</span>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-sm">班级</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">五年级1班</span>
              <span className="text-slate-400">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b">
          <h5 className="font-bold text-sm mb-1">通知设置</h5>
          <p className="text-xs text-slate-500">自定义消息提醒</p>
        </div>
        <div className="divide-y">
          {[
            { label: '课程提醒', enabled: true },
            { label: '作业截止', enabled: true },
            { label: '成就获得', enabled: true },
            { label: '社区互动', enabled: false }
          ].map((item, i) => (
            <div key={i} className="p-4 flex justify-between items-center">
              <span className="text-sm">{item.label}</span>
              <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${item.enabled ? 'bg-blue-600' : 'bg-slate-300'}`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${item.enabled ? 'translate-x-6' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm hover:bg-red-100 transition-colors">
        退出登录
      </button>
    </div>
  );
}
