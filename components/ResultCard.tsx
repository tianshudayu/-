import React from 'react';
import { CheckCircle2, FileText, Share2, Home, User, Gift, CreditCard } from 'lucide-react';
import { OfficialSeal } from './OfficialSeal';
import { UserData } from '../types';

interface ResultCardProps {
  data: UserData;
}

export const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full bg-red-50 relative animate-in fade-in slide-in-from-bottom-10 duration-1000">
      {/* Top Header */}
      <div className="bg-red-600 text-white p-4 pt-8 text-center shadow-lg">
        <h1 className="text-xl font-bold tracking-widest">审核结束</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-4">
        
        {/* Notification Banner */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100 text-center">
          <h2 className="text-red-600 font-bold text-lg mb-2 flex items-center justify-center gap-2">
            <span>🎉</span> 恭喜您，成功申请圆梦行动补偿金！
          </h2>
          <div className="text-red-700 font-bold text-xl mb-4">财政部审批通过！</div>
          <div className="bg-yellow-50 text-yellow-800 text-xs p-3 rounded border border-yellow-200">
            审批结果财政部已备案在册，无需截图！无需发送至圆梦行动官方大群！
          </div>
        </div>

        {/* Main Details Card */}
        <div className="bg-[#fffdf5] rounded-lg p-5 shadow-md border border-yellow-100 relative overflow-hidden">
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-4">补偿资金详情</h3>
            
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-gray-500">补偿资金：</span>
              <span className="text-red-500 font-black text-2xl sm:text-3xl tracking-tighter">
                {data.amount}<span className="text-sm text-gray-600 font-normal ml-1">元</span>
              </span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">申请日期：</span>
              <span className="text-gray-800 font-medium">{data.date}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-500 block mb-2">专属权益：</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded border border-green-100">百姓专用资金</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-100">大额转账无忧</span>
                <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded border border-orange-100">大额取现无忧</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-4 mb-4">
              <span className="text-gray-500">领取人：</span>
              <span className="text-gray-800 font-bold text-lg">{data.name}</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6 relative z-10">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-green-600" />
                </div>
                <div className="w-0.5 h-full bg-gray-200 my-1"></div>
              </div>
              <div className="pb-4">
                <h4 className="font-bold text-gray-800">正式申请</h4>
                <p className="text-xs text-gray-500 mt-1">{data.date} 18:39:00 - 申请已提交，请耐心等待审核结果</p>
              </div>
            </div>

            <div className="flex gap-3">
               <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-green-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">审核通过</h4>
                <p className="text-xs text-gray-500 mt-1">{data.date} 18:39:06 - 您的申请已通过审核</p>
              </div>
            </div>
          </div>

          {/* Stamp */}
          <OfficialSeal />
        </div>
        
        <p className="text-center text-gray-400 text-xs mt-8">圆梦行动 · 官方认证 · 真实有效</p>
      </div>

      {/* Bottom Navigation (Visual Only) */}
      <div className="bg-white border-t border-gray-200 px-6 py-2 flex justify-between items-center absolute bottom-0 w-full">
        <div className="flex flex-col items-center text-gray-400">
          <Home size={20} />
          <span className="text-[10px] mt-1">首页</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Gift size={20} />
          <span className="text-[10px] mt-1">圆梦大使</span>
        </div>
        <div className="flex flex-col items-center text-red-600">
          <FileText size={20} />
          <span className="text-[10px] mt-1 font-bold">补 偿</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Share2 size={20} />
          <span className="text-[10px] mt-1">宣传</span>
        </div>
         <div className="flex flex-col items-center text-gray-400">
          <User size={20} />
          <span className="text-[10px] mt-1">我的</span>
        </div>
      </div>
    </div>
  );
};