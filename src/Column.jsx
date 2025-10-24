import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Column() {
  const [state] = React.useState({
    series: [
      {
        name: 'Companies Visited',
        data: [50, 85, 120, 155], 
      },
    ],
    options: {
      chart: {
        type: 'bar', 
        height: 350,
        toolbar: {
          show: false 
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758']
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      title: {
        text: 'Total Number of Companies Visited Over Years',
        align: 'left',
        margin: 20,
        style: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
        },
      },
      xaxis: {
        categories: [
          '2020-21', 
          '2021-22', 
          '2022-23', 
          '2023-24'
        ],
        title: {
          text: 'Academic Year',
          style: {
            color: '#555',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Count of Companies',
          style: {
            color: '#555',
          },
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' companies';
          },
        },
      },
      colors: ['#4CAF50'], 
    },
  });

  const containerStyle = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f6f9', 
  };

  const chartContainerStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#fff',
    maxWidth: '420px', 
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div id="column-chart" style={chartContainerStyle}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar" 
          height={350}
          width="100%"
        />
      </div>
    </div>
  );
}

export default Column;
