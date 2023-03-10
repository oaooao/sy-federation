import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'

Chart.register(CategoryScale, LinearScale, BarElement)

const data = {
  labels: ["活动1", "活动2", "活动3", "活动4", "活动5"],
  datasets: [
    {
      label: "积分获得情况",
      backgroundColor: [
        "#69D1C5",
        "#F1B7D5",
        "#FF6F61",
        "#C8E8C8",
        "#F6AE2D",
      ],
      data: [320, 280, 180, 400, 230],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="font-bold text-lg mb-2">积分获得情况</div>
        <Bar data={data} options={options} />
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="font-bold text-lg mb-2">积分活动列表</div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">活动名称</th>
              <th className="border px-4 py-2">积分数量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">活动1</td>
              <td className="border px-4 py-2">320</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">活动2</td>
              <td className="border px-4 py-2">280</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">活动3</td>
              <td className="border px-4 py-2">180</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">活动4</td>
              <td className="border px-4 py-2">400</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">活动5</td>
              <td className="border px-4 py-2">230</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
