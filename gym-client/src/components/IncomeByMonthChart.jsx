import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomeByMonthChart = ({ data }) => {
  const labels = data.map((item) => item.month);

  // Extracting each data point for the datasets
  const totalIncomeData = data.map((item) => item.totalIncome);
  const expectedIncomeData = data.map((item) => item.expectedIncome);
  const pendingIncomeData = data.map((item) => item.pendingIncome);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Total Income",
        data: totalIncomeData,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Expected Income",
        data: expectedIncomeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Pending Income",
        data: pendingIncomeData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income Data",
        align: "start",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount (USD)",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default IncomeByMonthChart;
