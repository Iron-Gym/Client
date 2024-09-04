import React from "react";
import CountCard from "./CountCard";
import Calendar from "./Calendar";
import IncomeByMonthChart from "./IncomeByMonthChart";
import MonthlyIncomeChart from "./MonthlyIncomeChart";
import UnpaidClients from "./UnpaidClients";

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
    <div className="home bg-[#0C0C0C] h-full w-full">
      <div className="w-full h-full flex">
        <div className="h-full w-9/12">
          <div className="h-1/6 p-3 pb-0">
            <div className="h-full bg-[#1E201E] rounded-lg">
              <CountCard name="kavinda" />
            </div>
          </div>
          <div className="h-3/6 w-full p-3">
            <div className="flex h-full w-full ">
              <div className="h-full w-3/5 flex justify-center bg-[#1E201E] items-start rounded-lg mr-3 pb-3 px-5">
                <IncomeByMonthChart data={incomeData} />
              </div>
              <div className="h-full w-2/5 flex justify-center bg-[#1E201E] items-start rounded-lg pb-3 px-5">
                <MonthlyIncomeChart data={monthlyIncome} />
              </div>
            </div>
            <h2 className="text-center">View all</h2>
          </div>
          <div className="h-2/6 p-3 pt-0 overflow-hidden">
            <UnpaidClients />
          </div>
        </div>
        <div className=" h-full w-3/12 p-3 pl-0">
          <div className="bg-[#1E201E] h-auto rounded-lg">
            <Calendar />
          </div>
          <div className="bg-red-800 h-auto">aad</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
