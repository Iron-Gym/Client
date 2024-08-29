import React from "react";
import CountCard from "./CountCard";
import Calendar from "./Calendar";
import IncomeByMonthChart from "./IncomeByMonthChart";
import MonthlyIncomeChart from "./MonthlyIncomeChart";

// Example income data
const incomeData = [
  {
    month: "2024-05",
    totalIncome: 1000.0,
    expectedIncome: 23000.0,
    pendingIncome: 22000.0,
    newMembersCount: 3,
  },
  {
    month: "2024-06",
    totalIncome: 3000.0,
    expectedIncome: 23000.0,
    pendingIncome: 20000.0,
    newMembersCount: 6,
  },
  {
    month: "2024-07",
    totalIncome: 2000.0,
    expectedIncome: 23000.0,
    pendingIncome: 21000.0,
    newMembersCount: 1,
  },
];

const monthlyIncome = {
  expectedIncome: 23000.0,
  currentIncome: 40000.0,
  dueIncome: 23000.0,
};
const Home = () => {
  return (
    <div className="home bg-[rgb(250,249,246)] h-full w-full">
      <div className="w-full h-full flex">
        <div className="bg-blue-400 h-full w-9/12">
          <div className="bg-red-600 h-1/4">
            <CountCard name="kavinda" />
          </div>
          <div className="bg-blue-900 h-2/4 w-full flex">
            <div className="h-full w-1/2">
              <IncomeByMonthChart data={incomeData} />
              {/* Pass incomeData as a prop */}
            </div>
            <div className="h-full w-1/2">
              <MonthlyIncomeChart data={monthlyIncome} />
            </div>
          </div>
          <div className="bg-blue-100 h-1/4">ss</div>
        </div>
        <div className="bg-red-400 h-full w-3/12">
          <div className="bg-blue-100 h-2/4">
            <Calendar />
          </div>
          <div className="bg-red-800 h-2/4">aad</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
