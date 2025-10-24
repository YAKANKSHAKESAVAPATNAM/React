// import React from "react";

// const Skills = () => {
//     return (
//         <form>
//             <label>SKILLS :</label>
//             <input type="checkbox" id="skills" name="skills" />
//             <label htmlFor="skills">HTML</label>
//             <input type="checkbox" id="css" name="skills" />
//             <label htmlFor="css">CSS</label>
//             <input type="checkbox" id="javascript" name="skills" />
//             <label htmlFor="javascript">JavaScript</label>
//         </form>
//     );
// }
// export default Skills;

import React, { useEffect, useRef } from 'react';

const CHART_JS_CDN = "https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js";

const loadChartScript = () => {
  return new Promise((resolve) => {
    if (typeof window.Chart !== 'undefined') {
      return resolve();
    }
    const script = document.createElement('script');
    script.src = CHART_JS_CDN;
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

const SkillsProficiencyChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const skillData = [
    { label: 'Programming (P/J)', score: 76, color: '#3B82F6' },
    { label: 'Data Structures & Algo.', score: 72, color: '#10B981' },
    { label: 'Communication Skills', score: 83, color: '#FBBF24' },
    { label: 'Cloud & DevOps (T-Hub)', score: 72, color: '#8B5CF6' },
    { label: 'Problem Solving', score: 74, color: '#EF4444' },
  ];

  useEffect(() => {
    loadChartScript().then(() => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      const datasets = skillData.map((skill, index) => {
        const totalScore = 100;
        const remaining = totalScore - skill.score;
        const innerRadius = 25 - (index * 5);

        return {
          label: skill.label,
          data: [skill.score, remaining],
          backgroundColor: [skill.color, '#E5E7EB'],
          borderColor: '#ffffff',
          borderWidth: 2,
          circumference: 270,
          rotation: -135,
          cutout: `${innerRadius}%`,
          borderRadius: 5,
        };
      }).reverse();

      chartInstance.current = new window.Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: skillData.map(s => s.label),
          datasets: datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: { family: 'Inter, sans-serif' }
              },
            },
            tooltip: {
              filter: function (tooltipItem) {
                return tooltipItem.dataIndex === 0;
              },
              callbacks: {
                label: function (context) {
                  const label = context.dataset.label || '';
                  return `${label}: ${context.formattedValue} Score`;
                }
              }
            }
          },
        },
      });
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        height: '600px',
        margin: '0 auto',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h2 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Student Skill Proficiency Scores (Radial Progress)
      </h2>
      <div style={{ position: 'relative', height: '450px', width: '90%' }}>
        <canvas ref={chartRef} id="proficiency-chart"></canvas>
      </div>
    </div>
  );
};

function Skills() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#F3F4F6',
      minHeight: '100vh',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '10px',
        marginTop: '20px'
      }}>
        Academic Skills Mastery Dashboard
      </h1>

      <SkillsProficiencyChart />
    </div>
  );
}

export default Skills;