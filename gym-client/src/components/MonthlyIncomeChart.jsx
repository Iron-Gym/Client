import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const MonthlyIncomeChart = ({ data }) => {
  const chartData = {
    labels: ["Expected Income", "Current Income", "Due Income"],
    datasets: [
      {
        label: "Income Distribution",
        data: [data.expectedIncome, data.currentIncome, data.dueIncome],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)", // Expected Income color
          "rgba(75, 192, 192, 0.6)", // Current Income color
          "rgba(255, 99, 132, 0.6)", // Due Income color
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
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
        text: "Income Distribution",
        align: "start",
      },
    },
  };
  return <Doughnut data={chartData} options={options} />;
};

export default MonthlyIncomeChart;
