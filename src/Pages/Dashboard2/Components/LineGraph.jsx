import React from 'react';
import { Chart } from 'react-google-charts';
import 'tailwindcss/tailwind.css';

const chartData = [
  ['Class', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  ['Class A', 90, 85, 92, 88, 94],
  ['Class B', 88, 92, 87, 89, 91],
  ['Class C', 95, 93, 91, 94, 96],
  ['Class D', 89, 90, 88, 92, 87],
  ['Class E', 91, 89, 93, 90, 92],
];

const LineChart = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-200">
      <div className="bg-white rounded">
        <Chart
          width={'340px'}
          height={'350px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            // title: 'Students\' Attendance in Classes',
            curveType: 'function',
            legend: { position: 'bottom' },
            pointSize: 4, // Set the size of notable dots
            series: {
              0: { color: '#2196F3' }, // Set line color to blue
            },
            areaOpacity: 0.1, // Set transparency for the gradient area
            // hAxis: {
            //   title: 'Classes',
            // },
            // vAxis: {
            //   title: 'Attendance Percentage',
            // },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
};

export default LineChart;
