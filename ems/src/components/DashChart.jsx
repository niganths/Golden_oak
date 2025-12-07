import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import axios from 'axios';

const DashChart = ({ updateCounts }) => {
  const [count, setCategoryCount] = useState(0);
  const [count1, setCategoryCount1] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/categoryCount")
      .then(res => setCategoryCount(res.data.count))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/employeeCount")
      .then(res => setCategoryCount1(res.data.count))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    updateCounts(count, count1);
  }, [count, count1, updateCounts]);

  const data = {
    labels: ['Pending Works', 'Employee Count'],
    datasets: [
      {
        label: 'Counts',
        data: [count, count1],
        backgroundColor: ['rgba(54,162,235,0.6)', 'rgba(75,192,192,0.6)'],
        borderColor: ['rgba(54,162,235,1)', 'rgba(75,192,192,1)'],
        borderWidth: 2,
        borderRadius: 10
      }
    ]
  };

  return (
    <div
      className="shadow-lg bg-white"
      style={{
        borderRadius: "20px",
        padding: "25px",
        width: "100%",
        height: "380px",
        transition: "0.3s",
      }}
    >
      <h5
        className="text-center fw-bold mb-3"
        style={{ letterSpacing: "0.5px" }}
      >
        Dashboard Overview
      </h5>

      <div style={{ height: "300px" }}>
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "rgba(0,0,0,0.85)",
                padding: 12,
                cornerRadius: 10
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { stepSize: 1 }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default DashChart;
