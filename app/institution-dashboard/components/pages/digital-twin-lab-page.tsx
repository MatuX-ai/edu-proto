'use client';

import { motion } from 'framer-motion';
import { Cpu, Thermometer, AlertTriangle, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DigitalTwinLabPage() {
  const [devices, setDevices] = useState([
    { id: 1, name: '3D 打印机 A', status: 'running', temp: 210, progress: 75 },
    { id: 2, name: '数控机床 B', status: 'idle', temp: 24, progress: 0 },
    { id: 3, name: '机械臂 C', status: 'warning', temp: 65, progress: 40 },
    { id: 4, name: '激光切割机 D', status: 'running', temp: 180, progress: 92 },
  ]);

  // 模拟 IoT 数据实时跳动
  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prev => prev.map(d => ({
        ...d,
        temp: d.status === 'running' ? d.temp + (Math.random() * 4 - 2) : 24,
        progress: d.status === 'running' ? Math.min(100, d.progress + 1) : d.progress
      })));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Cpu className="h-6 w-6 text-orange-500" />
          数字孪生实训中心
        </h2>
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Wifi className="h-4 w-4" /> 在线设备: 4/4</span>
          <span className="flex items-center gap-1 text-red-500"><AlertTriangle className="h-4 w-4" /> 预警: 1</span>
        </div>
      </div>

      {/* Lab Layout Visualization */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 rounded-xl p-6 min-h-[400px] relative overflow-hidden border border-slate-700">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4 p-4">
            {devices.map((device) => (
              <motion.div
                key={device.id}
                layout
                className={`rounded-lg border-2 flex flex-col items-center justify-center p-4 transition-colors ${
                  device.status === 'running' ? 'border-green-500 bg-green-500/10' :
                  device.status === 'warning' ? 'border-yellow-500 bg-yellow-500/10 animate-pulse' :
                  'border-slate-600 bg-slate-800'
                }`}
              >
                <Cpu className={`h-8 w-8 mb-2 ${device.status === 'running' ? 'text-green-400' : 'text-slate-400'}`} />
                <span className="text-xs text-white font-medium">{device.name}</span>
                <span className="text-[10px] text-slate-400 mt-1">{device.status.toUpperCase()}</span>
              </motion.div>
            ))}
          </div>
          {/* Grid Lines for Tech Feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        {/* Real-time Metrics */}
        <div className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">{device.name}</span>
                {device.status === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>任务进度</span>
                  <span>{device.progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${device.progress}%` }} />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                  <Thermometer className="h-3 w-3" />
                  <span>核心温度: {device.temp.toFixed(1)}°C</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
