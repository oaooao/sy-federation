import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import ChinaMap from "./china-map";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, DoughnutController);

const Dashboard = () => {
  const recentPurchaseTimeData = {
    labels: ["0-1 months", "1-3 months", "3-6 months", "6-12 months"],
    datasets: [
      {
        label: "Distribution of Recent Purchase Time",
        data: [120, 150, 100, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const purchaseFrequencyData = {
    labels: [
      "1-2 times",
      "3-5 times",
      "6-10 times",
      "11-20 times",
      ">20 times",
    ],
    datasets: [
      {
        label: "Purchase Frequency Distribution",
        data: [30, 50, 80, 40, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const unitPriceData = {
    labels: ["0-50", "50-100", "100-200", "200-500", ">500"],
    datasets: [
      {
        label: "Unit Price Distribution",
        data: [50, 80, 100, 120, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75,192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const cumulativePurchaseAmountData = {
    labels: ["0-1000", "1000-5000", "5000-10000", "10000-50000", ">50000"],
    datasets: [
      {
        label: "Cumulative Purchase Amount Distribution",
        data: [200, 150, 100, 50, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const mapData = [
    { province: "广东", value: 0.2 },
    { province: "北京", value: 0.1 },
    { province: "江苏", value: 0.05 },
    { province: "上海", value: 0.07 },
    { province: "浙江", value: 0.09 },
    { province: "山东", value: 0.03 },
    { province: "河南", value: 0.02 },
    { province: "河北", value: 0.01 },
    { province: "辽宁", value: 0.01 },
    { province: "湖北", value: 0.03 },
    { province: "四川", value: 0.04 },
    { province: "湖南", value: 0.02 },
    { province: "福建", value: 0.02 },
    { province: "安徽", value: 0.01 },
    { province: "陕西", value: 0.01 },
    { province: "重庆", value: 0.02 },
    { province: "江西", value: 0.01 },
    { province: "广西", value: 0.01 },
    { province: "吉林", value: 0.01 },
    { province: "黑龙江", value: 0.01 },
    { province: "云南", value: 0.01 },
    { province: "贵州", value: 0.01 },
    { province: "甘肃", value: 0.01 },
    { province: "海南", value: 0.01 },
    { province: "宁夏", value: 0.01 },
    { province: "青海", value: 0.01 },
    { province: "西藏", value: 0 },
  ];

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="px-3 py-2 text-white font-bold">
            Distribution of Recent Purchase Time (Last 1 Year)
          </div>
          <div className="p-3">
            <Line data={recentPurchaseTimeData} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="px-3 py-2 text-white font-bold">
            Purchase Frequency Distribution (Last Year)
          </div>
          <div className="p-3">
            <Bar data={purchaseFrequencyData} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="px-3 py-2 text-white font-bold">
            The Unit Price of the Customer is Very Bad (In the Last Year)
          </div>
          <div className="p-3">
            <Doughnut data={unitPriceData} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="px-3 py-2 text-white font-bold">
            Cumulative Purchase Amount Distribution (Last Year)
          </div>
          <div className="p-3">
            <Bar data={cumulativePurchaseAmountData} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="px-3 py-2 text-white font-bold">
            Heat Map of the Proportion of Consumers on the Map of China
          </div>
          <div className="p-3">
            <ChinaMap data={mapData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
