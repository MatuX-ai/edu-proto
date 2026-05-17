'use client';

import { motion } from 'framer-motion';
import { Activity, Thermometer, Droplets, Zap, Mic, Volume2 } from 'lucide-react';
import { DeviceMode } from '../../types';
import { useState, useEffect } from 'react';

interface SensorMonitorPageProps {
  mode: DeviceMode;
}

export function SensorMonitorPage({ mode }: SensorMonitorPageProps) {
  const isPhone = mode === 'phone';
  const [sensorData, setSensorData] = useState({
    temperature: 25.3,
    humidity: 62,
    light: 450,
    sound: 35
  });
  const [voiceCommand, setVoiceCommand] = useState('');
  const [isListening, setIsListening] = useState(false);

  // 模拟传感器数据更新
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: +(prev.temperature + (Math.random() - 0.5)).toFixed(1),
        humidity: Math.round(prev.humidity + (Math.random() - 0.5) * 3),
        light: Math.round(prev.light + (Math.random() - 0.5) * 20),
        sound: Math.round(prev.sound + (Math.random() - 0.5) * 10)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleVoiceCommand = (command: string) => {
    setVoiceCommand(command);
    setTimeout(() => setVoiceCommand(''), 3000);
  };

  if (isPhone) {
    return (
      <div className="px-5 space-y-5">
        {/* Real-time Status */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">实时数据监控</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs">在线</span>
            </div>
          </div>
          <p className="text-sm text-green-100">ESP32-DevKit · 最后更新: 刚刚</p>
        </div>

        {/* Sensor Cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: '温度', value: `${sensorData.temperature}°C`, icon: Thermometer, color: 'from-orange-500 to-red-500' },
            { name: '湿度', value: `${sensorData.humidity}%`, icon: Droplets, color: 'from-blue-500 to-cyan-500' },
            { name: '光照', value: `${sensorData.light} lux`, icon: Zap, color: 'from-yellow-500 to-orange-500' },
            { name: '声音', value: `${sensorData.sound} dB`, icon: Volume2, color: 'from-purple-500 to-pink-500' }
          ].map((sensor, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className={`bg-gradient-to-br ${sensor.color} rounded-xl p-4 text-white`}
            >
              <sensor.icon className="h-6 w-6 mb-2 opacity-80" />
              <div className="text-2xl font-bold mb-1">{sensor.value}</div>
              <div className="text-xs opacity-90">{sensor.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Voice Command Section */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3">TinyML 语音指令</h3>
          
          {voiceCommand && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-xl p-4 mb-3"
            >
              <div className="flex items-center gap-2 text-green-700">
                <Mic className="h-5 w-5" />
                <span className="text-sm font-medium">识别到: "{voiceCommand}"</span>
              </div>
            </motion.div>
          )}

          <div className="space-y-2">
            {[
              { command: '开灯', action: 'LED ON', emoji: '💡' },
              { command: '关灯', action: 'LED OFF', emoji: '🌑' },
              { command: '读取温度', action: 'READ TEMP', emoji: '🌡️' },
              { command: '启动风扇', action: 'FAN ON', emoji: '🌀' }
            ].map((item, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleVoiceCommand(item.command)}
                className="w-full bg-white border rounded-xl p-3 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="text-left">
                    <div className="text-sm font-bold">{item.command}</div>
                    <div className="text-[10px] text-slate-500">{item.action}</div>
                  </div>
                </div>
                <Mic className="h-5 w-5 text-slate-400" />
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsListening(!isListening)}
            className={`w-full mt-3 py-3 rounded-xl font-bold flex items-center justify-center gap-2 ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-blue-600 text-white'
            }`}
          >
            <Mic className="h-5 w-5" />
            {isListening ? '正在聆听...' : '开始语音识别'}
          </motion.button>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3">快捷控制</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'LED', icon: '💡', active: true },
              { label: '蜂鸣器', icon: '🔊', active: false },
              { label: '电机', icon: '⚙️', active: false }
            ].map((action, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                className={`rounded-xl p-3 text-center border ${
                  action.active 
                    ? 'bg-green-50 border-green-300' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-2xl mb-1">{action.icon}</div>
                <div className={`text-xs font-medium ${action.active ? 'text-green-700' : 'text-slate-700'}`}>
                  {action.label}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 平板模式 - 更丰富的展示
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-slate-900">传感器监控 📊</h2>
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 px-4 py-2 rounded-xl">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-green-700">设备在线</span>
          <span className="text-xs text-green-600">ESP32-DevKit</span>
        </div>
      </div>

      {/* Sensor Dashboard */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { name: '温度', value: sensorData.temperature, unit: '°C', icon: Thermometer, color: 'from-orange-500 to-red-500', range: '0-50°C' },
          { name: '湿度', value: sensorData.humidity, unit: '%', icon: Droplets, color: 'from-blue-500 to-cyan-500', range: '0-100%' },
          { name: '光照强度', value: sensorData.light, unit: 'lux', icon: Zap, color: 'from-yellow-500 to-orange-500', range: '0-1000 lux' },
          { name: '声音强度', value: sensorData.sound, unit: 'dB', icon: Volume2, color: 'from-purple-500 to-pink-500', range: '0-100 dB' }
        ].map((sensor, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className={`bg-gradient-to-br ${sensor.color} rounded-2xl p-6 text-white relative overflow-hidden`}
          >
            <sensor.icon className="h-12 w-12 mb-4 opacity-80" />
            <div className="text-4xl font-bold mb-2">
              {sensor.value}<span className="text-xl ml-1">{sensor.unit}</span>
            </div>
            <div className="text-sm opacity-90 mb-1">{sensor.name}</div>
            <div className="text-xs opacity-75">量程: {sensor.range}</div>
            <Activity className="absolute bottom-4 right-4 h-16 w-16 opacity-10" />
          </motion.div>
        ))}
      </div>

      {/* Voice Control Panel */}
      <div className="bg-white rounded-2xl border p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Mic className="h-6 w-6 text-blue-600" />
          TinyML 语音控制中心
        </h3>

        {voiceCommand && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4"
          >
            <div className="flex items-center gap-3 text-green-700">
              <Mic className="h-6 w-6" />
              <div>
                <div className="font-bold">识别成功</div>
                <div className="text-sm">指令: "{voiceCommand}" · 置信度: 95%</div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-4 gap-4">
          {[
            { command: '开灯', action: 'LED ON', desc: '点亮板载 LED', emoji: '💡' },
            { command: '关灯', action: 'LED OFF', desc: '关闭板载 LED', emoji: '🌑' },
            { command: '读取温度', action: 'READ TEMP', desc: '获取当前温度', emoji: '🌡️' },
            { command: '启动风扇', action: 'FAN ON', desc: '开启直流电机', emoji: '🌀' },
            { command: '停止风扇', action: 'FAN OFF', desc: '关闭直流电机', emoji: '⏹️' },
            { command: '蜂鸣器响', action: 'BEEP ON', desc: '激活蜂鸣器', emoji: '🔊' },
            { command: '读取湿度', action: 'READ HUM', desc: '获取当前湿度', emoji: '💧' },
            { command: '系统状态', action: 'STATUS', desc: '查询设备状态', emoji: 'ℹ️' }
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleVoiceCommand(item.command)}
              className="bg-slate-50 border rounded-xl p-4 text-left hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors">
                {item.command}
              </div>
              <div className="text-[10px] text-slate-500 mb-1">{item.action}</div>
              <div className="text-[10px] text-slate-400">{item.desc}</div>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsListening(!isListening)}
            className={`flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
            }`}
          >
            <Mic className="h-6 w-6" />
            {isListening ? '正在聆听... (点击停止)' : '开始语音识别'}
          </motion.button>
          <button className="px-6 py-4 bg-slate-100 rounded-xl font-medium text-slate-700 hover:bg-slate-200 transition-colors">
            查看识别日志
          </button>
        </div>
      </div>

      {/* Device Control */}
      <div className="bg-white rounded-2xl border p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">设备控制面板</h3>
        <div className="grid grid-cols-6 gap-4">
          {[
            { label: '板载 LED', icon: '💡', active: true, pin: 'GPIO 2' },
            { label: '蜂鸣器', icon: '🔊', active: false, pin: 'GPIO 5' },
            { label: '直流电机', icon: '⚙️', active: false, pin: 'GPIO 12' },
            { label: '舵机', icon: '🔄', active: false, pin: 'GPIO 13' },
            { label: 'RGB LED', icon: '🌈', active: true, pin: 'GPIO 14' },
            { label: '继电器', icon: '🔌', active: false, pin: 'GPIO 15' }
          ].map((device, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className={`rounded-xl p-4 text-center border-2 cursor-pointer transition-all ${
                device.active 
                  ? 'bg-green-50 border-green-400' 
                  : 'bg-white border-slate-200 hover:border-blue-300'
              }`}
            >
              <div className="text-3xl mb-2">{device.icon}</div>
              <div className={`text-xs font-bold mb-1 ${device.active ? 'text-green-700' : 'text-slate-700'}`}>
                {device.label}
              </div>
              <div className="text-[10px] text-slate-500">{device.pin}</div>
              <div className={`mt-2 text-[10px] font-medium ${device.active ? 'text-green-600' : 'text-slate-400'}`}>
                {device.active ? '● 运行中' : '○ 已停止'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
