// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import './Averagesalary.css';

// function AverageSalary() {
//   const [state] = React.useState({
//     series: [
//       {
//         name: "Average Salary (in ₹LPA)",
//         data: [6.2, 5.8, 5.6, 5.9, 5.5],
//       },
//       {
//         name: "Highest Salary (in ₹LPA)",
//         data: [12.4, 11.2, 10.8, 11.5, 10.0],
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         toolbar: {
//           show: true,
//         },
//       },
//       title: {
//         text: "Department-wise Salary Statistics",
//         align: "left",
//         style: {
//           fontSize: "18px",
//           fontWeight: "600",
//           color: "#263238",
//         },
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "50%",
//           borderRadius: 8,
//         },
//       },
//       dataLabels: {
//         enabled: true,
//         style: {
//           fontSize: "12px",
//           colors: ["#333"],
//         },
//         formatter: (val) => `${val}L`,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: ["CSE", "IT", "AIML", "DS", "ECE"],
//         title: {
//           text: "Departments",
//         },
//       },
//       yaxis: {
//         title: {
//           text: "Salary (in LPA)",
//         },
//         min: 0,
//         max: 15,
//       },
//       fill: {
//         opacity: 1,
//         type: "gradient",
//         gradient: {
//           shade: "light",
//           type: "vertical",
//           shadeIntensity: 0.25,
//           inverseColors: false,
//           opacityFrom: 0.9,
//           opacityTo: 0.8,
//           stops: [0, 100],
//         },
//       },
//       colors: ["#008FFB", "#FEB019"],
//       legend: {
//         position: "top",
//         horizontalAlign: "center",
//       },
//       tooltip: {
//         y: {
//           formatter: (val) => `${val} LPA`,
//         },
//       },
//       grid: {
//         borderColor: "#e7e7e7",
//         row: {
//           colors: ["#f9f9f9", "transparent"],
//           opacity: 0.5,
//         },
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="bar"
//           height={400}
//           width={800}
//         />
//       </div>
//     </div>
//   );
// }

// export default AverageSalary;

import React from "react";
import ReactApexChart from "react-apexcharts";

const AverageSalary = () => {
  const [state] = React.useState({
    // series: [
    //   {
    //     name: "Net Profit",
    //     data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    //   },
    //   {
    //     name: "Revenue",
    //     data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    //   },
    //   {
    //     name: "Free Cash Flow",
    //     data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    //   },
    // ],
    // options: {
    //   chart: {
    //     type: "bar",
    //     height: 350,
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //       columnWidth: "55%",
    //       borderRadius: 5,
    //       borderRadiusApplication: "end",
    //     },
    //   },
    series: [
      {
        name: "Average Salary (in ₹LPA)",
        data: [6.2, 5.8, 5.6, 5.9, 5.5],
      },
      {
        name: "Highest Salary (in ₹LPA)",
        data: [12.4, 11.2, 10.8, 11.5, 10.0],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: true,
        },
      },
      title: {
        text: "Department-wise Salary Statistics",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "600",
          color: "#263238",
        },
      },
       grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f9f9f9", "transparent"],
          opacity: 0.5,
        }
      },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   stroke: {
    //     show: true,
    //     width: 2,
    //     colors: ["transparent"],
    //   },
    //   xaxis: {
    //     categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    //   },
    //   yaxis: {
    //     title: {
    //       text: "$ (thousands)",
    //     },
    //   },
    //   fill: {
    //     opacity: 1,
    //   },
     plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadius: 8,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          colors: ["#333"],
        },
        formatter: (val) => `${val}L`,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["CSE", "IT", "AIML", "DS", "ECE"],
        title: {
          text: "Departments",
        },
      },
      yaxis: {
        title: {
          text: "Salary (in LPA)",
        },
        min: 0,
        max: 15,
      },
      fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          inverseColors: false,
          opacityFrom: 0.9,
          opacityTo: 0.8,
          stops: [0, 100],
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
   <div id="avg-salary" >
  <div className="chart-container" style={{ border: '2px solid #ccc', display:'inline-block', justifyContent: 'center', marginTop:'100px', padding:'10px'}}>
    <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
      Average Salary Overview
    </h2>
    <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
  </div>
</div>

  );
};

export default AverageSalary;
