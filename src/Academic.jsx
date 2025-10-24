import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Academic = () => {
  const [chartState] = useState({
    series: [
      {
        name: 'Passed All Subjects',
        data: [150, 180, 50, 96, 110],
      },
      {
        name: 'Has Backlogs',
        data: [50, 20, 50, 40, 40], 
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true, 
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, 
        },
      },
      xaxis: {
        categories: ['CSE', 'ECE', 'IT', 'AIML', 'DS'], 
        title: {
          text: 'Department',
          style: {
            fontSize: '14px',
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        title: {
          text: 'Number of Students', 
          style: {
            fontSize: '14px',
            fontWeight: 600,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
      colors: ['#00E396', '#FF4560'], 
      title: {
        text: 'Academic Status by Department',
        align: 'left',
      },
      dataLabels: {
        enabled: false, 
      },
    },
  });

  return (
    <div id="chart" style={{ border: '2px solid #ccc', display:'inline-block', justifyContent: 'center', marginTop:'100px', padding:'10px'}}>
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Academic;
