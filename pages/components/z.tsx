import React from "react";

const CrowdCertificationAnalysis: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">人群认证活动分析</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 rounded-lg text-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">参与人数</h3>
          <p className="text-3xl font-bold">50</p>
        </div>
        <div className="bg-green-500 rounded-lg text-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">剩余名额</h3>
          <p className="text-3xl font-bold">100</p>
        </div>
        <div className="bg-yellow-500 rounded-lg text-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">活动时间</h3>
          <p className="text-lg font-bold">2023年3月10日</p>
          <p className="text-lg font-bold">上午9点至下午5点</p>
        </div>
        <div className="bg-purple-500 rounded-lg text-white p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2">活动地点</h3>
          <p className="text-lg font-bold">上海市长宁区东方明珠凯旋中心</p>
        </div>
      </div>
    </div>
  );
};

export default CrowdCertificationAnalysis;
