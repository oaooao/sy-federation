import React from "react";

const data = [
  { name: "红茶奶盖", uv: 60 },
  { name: "抹茶拿铁", uv: 80 },
  { name: "水果茶", uv: 120 },
  { name: "黑糖波霸", uv: 90 },
  { name: "芝士波霸", uv: 150 },
  { name: "芝芝莓莓", uv: 200 },
];

export const UnionPointsAnalysis: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 font-sans">
      <div className="text-xl font-medium text-center mb-8">
        联合积分活动分析
      </div>

      {/* 活动详情卡片 */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="bg-white w-full md:w-1/2 p-8 rounded-lg shadow-lg">
          <div className="text-lg font-medium mb-4">活动详情</div>
          <div className="grid grid-cols-2 gap-4">
            <div>开始时间：</div>
            <div>2022-03-01 00:00:00</div>
            <div>结束时间：</div>
            <div>2022-03-31 23:59:59</div>
            <div>活动时长：</div>
            <div>31天</div>
            <div>活动门店：</div>
            <div>上海区域</div>
          </div>
        </div>

        {/* 活动进展卡片 */}
        <div className="ml-10 bg-white w-full md:w-1/2 p-8 rounded-lg shadow-lg">
          <div className="text-lg font-medium mb-4">活动进展</div>
          <div className="flex items-center justify-between space-x-8">
            <div className="w-1/2">
              <div className="text-sm text-gray-400 mb-2">总奖励积分</div>
              <div className="text-2xl font-medium">1000</div>
            </div>
            <div className="w-1/2">
              <div className="text-sm text-gray-400 mb-2">已领取积分</div>
              <div className="text-2xl font-medium">500</div>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                  进度
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-indigo-600">
                  50%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
              <div
                style={{ width: "50%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 数据分析卡片 */}
      <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-lg font-medium mb-4">数据分析</div>
        <div className="grid grid-cols-2 gap-8">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div
                className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-4" // 用于展示颜色
              >
                <div className="text-xs">{item.name}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-sm text-gray-400">{item.uv}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnionPointsAnalysis;
