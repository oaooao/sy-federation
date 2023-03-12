// @ts-nocheck

// 使用 tailwind css 和 tsx 实现的 UI 界面
import React from "react";
import Chart from "chart.js/auto"; // 导入图表库

const data = {
  newMembers: 50,
  goldMembers: 30,
  goldCardRate: "60%",
  goldCardSales: "¥10,000",
  orderCount: 100,
  productCount: 200,
  totalGoldMembers: 150,
  salesFromEvent: "¥50,000",
  newMembersSalesRate: "20%",
  avgAmountPerPerson: "¥300",
  avgProductPerPerson: 4,
  avgAmountPerOrder: "¥1,000",
  avgProductPerOrder: 2,
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const CrowdVerificationAnalytics = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: ["新人群销售占比", "金卡销售占比"],
          datasets: [
            {
              data: [20, 80],
              backgroundColor: ["#6B7280", "#F59E0B"],
            },
          ],
        },
        options: options,
      });
    }
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-lg font-medium mb-4">人群认证活动分析</h2>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">本次活动纳新人数</div>
          <div className="text-xl font-medium">{data.newMembers}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">认证金卡人数</div>
          <div className="text-xl font-medium">{data.goldMembers}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">金卡率</div>
          <div className="text-xl font-medium">{data.goldCardRate}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">金卡购买金额</div>
          <div className="text-xl font-medium">{data.goldCardSales}</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">购买订单数</div>
          <div className="text-xl font-medium">{data.orderCount}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">购买商品数</div>
          <div className="text-xl font-medium">{data.productCount}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">金卡目前总人数</div>
          <div className="text-xl font-medium">{data.totalGoldMembers}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">活动带来的销售</div>
          <div className="text-xl font-medium">{data.salesFromEvent}</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">新人群销售占比</div>
          <div className="text-xl font-medium">{data.newMembersSalesRate}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">平均每人购买的金额</div>
          <div className="text-xl font-medium">{data.avgAmountPerPerson}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">平均每人购买的数量</div>
          <div className="text-xl font-medium">{data.avgProductPerPerson}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">平均每单金额</div>
          <div className="text-xl font-medium">{data.avgAmountPerOrder}</div>
        </div>
        <div className="bg-white rounded-md p-6 text-center">
          <div className="text-gray-400">平均每单购买数量</div>
          <div className="text-xl font-medium">{data.avgProductPerOrder}</div>
        </div>
        <div className="bg-white rounded-md p-6 col-span-2">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default CrowdVerificationAnalytics;
