import React from "react";

const StatisticBlock = ({ number, color, title }) => (
  <div className="flex flex-col items-center mb-8 sm:mb-8">
    <span className={`text-4xl font-bold text-${color} mb-2`}>{number}</span>
    <span className="font-medium text-black">{title}</span>
  </div>
);

export const StatsSection = () => (
  <div className="bg-white w-full flex flex-col md:flex-row justify-between px-8 sm:px-16 lg:px-77 py-28">
    <StatisticBlock number="12K+" color="indigo-700" title="Project Completed" />
    <StatisticBlock number="20K+" color="pink-700" title="Industry Experience" />
    <StatisticBlock number="10K+" color="green-500" title="Happy Clients" />
    <StatisticBlock number="32K+" color="purple-500" title="Awards Winner" />
  </div>
);

export default StatsSection;
