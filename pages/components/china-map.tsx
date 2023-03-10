import React from 'react';
import { Chart } from 'react-chartjs-2';

const ChinaMap = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#fff',
        },
      }],
      yAxes: [{
        ticks: {
          fontColor: '#fff',
        },
      }],
    },
  };

  Chart.defaults.global.defaultFontColor = '#fff';

  return (
    <div className="w-full">
      <canvas id="chinaMap" />
      <script>
        {Chart.plugins.register({
          beforeDraw: function(chart) {
            var width = chart.chart.width;
            var height = chart.chart.height;
            var ctx = chart.chart.ctx;

            ctx.restore();
            ctx.font = "20px 'Arial'";
            ctx.textBaseline = "middle";
            var text = "Map of China";
            var textX = Math.round((width - ctx.measureText(text).width) / 2);
            var textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        })}
      </script>
      <Chart
        type="scatter"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ChinaMap;
