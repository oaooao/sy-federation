import React from "react";

const CrowdCertificationAnalysis: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        人群认证活动分析
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-indigo-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">纳新人数</h3>
          <p className="text-2xl font-bold">50</p>
        </div>
        <div className="bg-teal-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">认证金卡人数</h3>
          <p className="text-2xl font-bold">100</p>
        </div>
        <div className="bg-yellow-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">金卡率</h3>
          <p className="text-2xl font-bold">50%</p>
        </div>
        <div className="bg-purple-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">金卡购买金额</h3>
          <p className="text-2xl font-bold">$1000</p>
        </div>
        <div className="bg-pink-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">购买订单数</h3>
          <p className="text-2xl font-bold">20</p>
        </div>
        <div className="bg-green-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">购买商品数</h3>
          <p className="text-2xl font-bold">100</p>
        </div>
        <div className="bg-blue-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">金卡总人数</h3>
          <p className="text-2xl font-bold">200</p>
        </div>
        <div className="bg-red-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">活动带来的销售</h3>
          <p className="text-2xl font-bold">$5000</p>
        </div>
        <div className="bg-yellow-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">新人销售占比</h3>
          <p className="text-2xl font-bold">70%</p>
        </div>
        <div className="bg-green-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">新人购买商品数</h3>
          <p className="text-2xl font-bold">100</p>
        </div>
        <div className="bg-blue-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">新人购买订单数</h3>
          <p className="text-2xl font-bold">20</p>
        </div>
        <div className="bg-red-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">新人购买金额</h3>
          <p className="text-2xl font-bold">$1000</p>
        </div>
        <div className="bg-pink-500 rounded-lg text-white p-3 shadow-md">
          <h3 className="text-lg font-bold mb-2">新人购买率</h3>
          <p className="text-2xl font-bold">50%</p>
        </div>
      </div>
    </div>
  );
};

export default CrowdCertificationAnalysis;
