import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Donut() {
  const [state] = React.useState({
    series: [1200, 600],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['THUB', 'NON-THUB'], 
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: 'Placement Rate',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart" style={{ border: '2px solid #ccc', display:'inline-block', marginLeft:'450px', marginTop:'100px', padding:'10px'}}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={380}
      />
    </div>
  );
}

export default Donut;
