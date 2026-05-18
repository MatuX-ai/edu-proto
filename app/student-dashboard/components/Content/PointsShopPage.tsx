'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star, Trophy, Gift } from 'lucide-react';
import { DeviceMode } from '../../types';

interface PointsShopPageProps {
  mode: DeviceMode;
}

export function PointsShopPage({ mode }: PointsShopPageProps) {
  const isPhone = mode === 'phone';

  if (isPhone) {
    return (
      <div className="px-5 space-y-5">
        {/* User Points Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 text-white text-center">
          <div className="text-4xl font-bold mb-1">850</div>
          <div className="text-sm opacity-90 mb-3">当前积分</div>
          <div className="flex justify-center gap-4 text-xs">
            <span className="bg-white/20 px-3 py-1 rounded-full">本周 +120</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">历史 2,450</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['全部', '虚拟道具', '实物奖品', '课程优惠', '勋章'].map((cat, i) => (
            <span 
              key={i} 
              className={`text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap cursor-pointer ${
                i === 0 ? 'bg-orange-500 text-white' : 'bg-white border text-gray-600'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Shop Items */}
        <h3 className="font-bold text-slate-900 text-base">热门兑换</h3>
        <div className="space-y-3">
          {[
            { 
              name: 'AI助手高级版（7天）', 
              points: 200, 
              emoji: '🤖', 
              type: 'virtual',
              originalPrice: '¥20',
              stock: '充足'
            },
            { 
              name: 'Arduino starter kit', 
              points: 800, 
              emoji: '🔧', 
              type: 'physical',
              originalPrice: '¥199',
              stock: '仅剩3件'
            },
            { 
              name: 'Python进阶课程券', 
              points: 350, 
              emoji: '🐍', 
              type: 'coupon',
              originalPrice: '¥99',
              stock: '充足'
            },
            { 
              name: '限量版STEM徽章', 
              points: 500, 
              emoji: '🏅', 
              type: 'badge',
              originalPrice: '限量',
              stock: '仅剩12个'
            },
            { 
              name: '3D打印服务券', 
              points: 450, 
              emoji: '🖨️', 
              type: 'service',
              originalPrice: '¥50',
              stock: '充足'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center p-3">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-3xl mr-3">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xs mb-1">{item.name}</h4>
                  <p className="text-[10px] text-slate-500 mb-2">原价 {item.originalPrice}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
                      <span className="text-sm font-bold text-orange-600">{item.points}</span>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full ${
                      item.stock.includes('仅剩') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {item.stock}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 text-xs font-bold">
                立即兑换
              </button>
            </motion.div>
          ))}
        </div>

        {/* Exchange History Entry */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between cursor-pointer"
        >
          <div>
            <h4 className="font-bold text-indigo-900 text-xs">兑换记录</h4>
            <p className="text-[10px] text-indigo-600 mt-1">查看历史兑换订单</p>
          </div>
          <ShoppingCart className="h-5 w-5 text-indigo-600" />
        </motion.div>
      </div>
    );
  }

  // 平板模式 - 更丰富的展示
  return (
    <div className="space-y-6">
      {/* Points Overview */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-orange-100 text-sm mb-2">我的积分余额</p>
            <h2 className="text-5xl font-bold mb-4">850</h2>
            <div className="flex gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-orange-100 text-xs mb-1">本周获得</div>
                <div className="font-bold">+120</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-orange-100 text-xs mb-1">累计获得</div>
                <div className="font-bold">2,450</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-orange-100 text-xs mb-1">已使用</div>
                <div className="font-bold">1,600</div>
              </div>
            </div>
          </div>
          <Trophy className="h-24 w-24 opacity-20" />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3">
        {['全部', '虚拟道具', '实物奖品', '课程优惠', '限定勋章'].map((cat, i) => (
          <button
            key={i}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
              i === 0 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                : 'bg-white border text-slate-700 hover:border-orange-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shop Grid */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">精选好物</h3>
        <div className="grid grid-cols-3 gap-5">
          {[
            { 
              name: 'AI助手高级版（7天）', 
              points: 200, 
              emoji: '🤖', 
              type: 'virtual',
              desc: '解锁无限次AI问答，优先响应',
              originalPrice: '¥20',
              stock: '充足',
              hot: true
            },
            { 
              name: 'Arduino Starter Kit', 
              points: 800, 
              emoji: '🔧', 
              type: 'physical',
              desc: '官方正品套件，含20+传感器',
              originalPrice: '¥199',
              stock: '仅剩3件',
              hot: true
            },
            { 
              name: 'Python进阶课程券', 
              points: 350, 
              emoji: '🐍', 
              type: 'coupon',
              desc: '抵扣任意Python课程费用',
              originalPrice: '¥99',
              stock: '充足',
              hot: false
            },
            { 
              name: '限量版STEM徽章', 
              points: 500, 
              emoji: '🏅', 
              type: 'badge',
              desc: '实体金属徽章，收藏价值',
              originalPrice: '限量发售',
              stock: '仅剩12个',
              hot: true
            },
            { 
              name: '3D打印服务券', 
              points: 450, 
              emoji: '🖨️', 
              type: 'service',
              desc: '免费打印任意模型（限50g）',
              originalPrice: '¥50',
              stock: '充足',
              hot: false
            },
            { 
              name: '编程马拉松门票', 
              points: 600, 
              emoji: '🎫', 
              type: 'event',
              desc: '线下黑客松活动入场券',
              originalPrice: '¥150',
              stock: '剩余28张',
              hot: false
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer relative"
            >
              {item.hot && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold z-10">
                  HOT
                </div>
              )}
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl">
                {item.emoji}
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-orange-500 fill-orange-500" />
                    <span className="text-xl font-bold text-orange-600">{item.points}</span>
                  </div>
                  <span className="text-xs text-slate-400 line-through">{item.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.stock.includes('仅剩') || item.stock.includes('剩余') 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {item.stock}
                  </span>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                    立即兑换
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Points Rules */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
          <Gift className="h-5 w-5" />
          积分获取规则
        </h4>
        <div className="grid grid-cols-4 gap-4 text-sm text-blue-800">
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">完成课程</div>
              <div className="text-xs opacity-80">+50~100分/课</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">连胜奖励</div>
              <div className="text-xs opacity-80">+20~100分</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">✓</span>
            <div>
              <div className="font-semibold">作品分享</div>
              <div className="text-xs opacity-80">+30分/次</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
