import React from "react";

const CountCard = () => {
  return (
    <div className="flex justify-evenly items-center h-full p-3">
      <div className="bg-black text-white h-full w-full rounded-lg p-3 m-2">
        <h1>Header</h1>
        <div>
          <h2>
            Amount: <span className="text-red-400">200</span>
          </h2>
        </div>
      </div>
      <div className="bg-black text-white h-full w-full rounded-lg p-3 m-2">
        <h1>Header</h1>
        <div>
          <h2>
            Amount: <span className="text-red-400">200</span>
          </h2>
        </div>
      </div>
      <div className="bg-black text-white h-full w-full rounded-lg p-3 m-2">
        <h1>Header</h1>
        <div>
          <h2>
            Amount: <span className="text-red-400">200</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
