'use client';

import { motion } from 'framer-motion';
import { Flame, Trophy, Star } from 'lucide-react';
import { DeviceMode } from '../../types';

interface StreakSystemProps {
  mode: DeviceMode;
}

export function StreakSystem({ mode }: StreakSystemProps) {
  const isPhone = mode === 'phone';

  if (isPhone) {
    return (
      <div className="px-5 space-y-4">
        {/* Current Streak */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-5 text-white text-center">
          <Flame className="h-12 w-12 mx-auto mb-2 animate-pulse" />
          <div className="text-4xl font-bold mb-1">7</div>
          <div className="text-sm opacity-90 mb-3">天连续学习</div>
          <div className="flex justify-center gap-2 text-xs">
            <span className="bg-white/20 px-3 py-1 rounded-full">🔥 火热进行中</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">+70积分</span>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3">本周签到记录</h3>
          <div className="grid grid-cols-7 gap-2">
            {[
              { day: '一', signed: true },
              { day: '二', signed: true },
              { day: '三', signed: true },
              { day: '四', signed: true },
              { day: '五', signed: true },
              { day: '六', signed: true },
              { day: '日', signed: false, today: true }
            ].map((day, i) => (
              <div key={i} className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium mx-auto mb-1 ${
                  day.signed 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white' 
                    : day.today 
                      ? 'bg-blue-100 text-blue-600 border-2 border-blue-500'
                      : 'bg-slate-100 text-slate-400'
                }`}>
                  {day.signed ? '✓' : day.day}
                </div>
                <span className="text-[9px] text-slate-500">周{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Streak Rewards */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3">连胜奖励</h3>
          <div className="space-y-2">
            {[
              { days: 3, reward: '+30积分', emoji: '🎯', achieved: true },
              { days: 7, reward: '+70积分 + 徽章', emoji: '🔥', achieved: true, current: true },
              { days: 14, reward: '+150积分 + 限定皮肤', emoji: '⭐', achieved: false },
              { days: 30, reward: '+500积分 + 实物奖品', emoji: '🏆', achieved: false }
            ].map((milestone, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.98 }}
                className={`bg-white rounded-xl p-3 border flex items-center gap-3 ${
                  milestone.current ? 'border-orange-500 bg-orange-50' : ''
                } ${milestone.achieved && !milestone.current ? 'opacity-75' : ''}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                  milestone.achieved ? 'bg-orange-100' : 'bg-slate-100 grayscale'
                }`}>
                  {milestone.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-xs font-bold">{milestone.days} 天连胜</h4>
                    {milestone.current && (
                      <span className="text-[9px] bg-orange-500 text-white px-2 py-0.5 rounded-full">当前</span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-600">{milestone.reward}</p>
                </div>
                {milestone.achieved && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 className="font-bold text-sm text-blue-900 mb-2 flex items-center gap-2">
            <Star className="h-4 w-4" />
            连胜小贴士
          </h4>
          <ul className="text-xs text-blue-800 space-y-1">
            <li>✓ 每天完成任意课程即可保持连胜</li>
            <li>✓ 中断后需从 1 天重新开始</li>
            <li>✓ 连胜天数越高，奖励越丰厚</li>
          </ul>
        </div>
      </div>
    );
  }

  // 平板模式 - 更丰富的展示
  return (
    <div className="space-y-6">
      {/* Streak Overview */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-16 w-16 animate-pulse" />
              <div>
                <p className="text-orange-100 text-sm mb-1">当前连胜</p>
                <h2 className="text-6xl font-bold">7 天</h2>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-orange-100 text-xs mb-1">累计获得</div>
                <div className="font-bold">+70 积分</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-orange-100 text-xs mb-1">历史最高</div>
                <div className="font-bold">21 天</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-orange-100 text-xs mb-1">本月 streak</div>
                <div className="font-bold">4 次</div>
              </div>
            </div>
          </div>
          <Trophy className="h-32 w-32 opacity-20" />
        </div>
      </div>

      {/* Monthly Calendar */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">本月签到日历</h3>
        <div className="bg-white rounded-2xl border p-6">
          <div className="grid grid-cols-7 gap-3">
            {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => (
              <div key={i} className="text-center text-xs font-medium text-slate-500 mb-2">
                周{day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const signed = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15].includes(day);
              const today = day === 16;
              
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm cursor-pointer ${
                    signed 
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold' 
                      : today 
                        ? 'bg-blue-100 text-blue-600 border-2 border-blue-500 font-bold'
                        : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {signed ? '✓' : day}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Milestone Rewards */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">连胜里程碑</h3>
        <div className="grid grid-cols-4 gap-5">
          {[
            { days: 3, reward: '+30积分', emoji: '🎯', desc: '新手起步', achieved: true },
            { days: 7, reward: '+70积分 + 徽章', emoji: '🔥', desc: '一周坚持', achieved: true, current: true },
            { days: 14, reward: '+150积分 + 皮肤', emoji: '⭐', desc: '两周突破', achieved: false },
            { days: 30, reward: '+500积分 + 实物', emoji: '🏆', desc: '月度冠军', achieved: false },
            { days: 60, reward: '+1200积分', emoji: '💎', desc: '双月传奇', achieved: false },
            { days: 100, reward: '+2500积分 + 限定', emoji: '👑', desc: '百日王者', achieved: false },
            { days: 180, reward: '+5000积分', emoji: '🌟', desc: '半年成就', achieved: false },
            { days: 365, reward: '+10000积分 + 大奖', emoji: '🎊', desc: '年度至尊', achieved: false }
          ].map((milestone, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-2xl p-5 border text-center relative ${
                milestone.current ? 'border-orange-500 shadow-lg' : ''
              } ${milestone.achieved && !milestone.current ? 'opacity-75' : ''}`}
            >
              {milestone.current && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full font-bold">
                  当前目标
                </div>
              )}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 ${
                milestone.achieved ? 'bg-gradient-to-br from-orange-100 to-red-100' : 'bg-slate-100 grayscale'
              }`}>
                {milestone.emoji}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{milestone.days} 天</h4>
              <p className="text-xs text-slate-600 mb-2">{milestone.desc}</p>
              <p className="text-sm font-semibold text-orange-600">{milestone.reward}</p>
              {milestone.achieved && (
                <div className="mt-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-sm">✓</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Streak Rules */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
          <Star className="h-5 w-5" />
          连胜规则说明
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-indigo-800">
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">如何保持连胜</div>
              <div className="text-xs opacity-80 mt-1">每天完成任意课程、项目或挑战即可</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">中断后果</div>
              <div className="text-xs opacity-80 mt-1">连续2天未学习将重置为0天</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">奖励发放</div>
              <div className="text-xs opacity-80 mt-1">达到里程碑自动发放积分和道具</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">补签功能</div>
              <div className="text-xs opacity-80 mt-1">每月可使用3次补签卡（需兑换）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
