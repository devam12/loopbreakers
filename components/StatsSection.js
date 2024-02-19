import React from "react";

const StatisticBlock = ({ digit, colors, title }) => (
  <div className="flex flex-col items-center mb-8 sm:mb-8">
    <span className={`text-4xl font-bold ${colors} mb-2`}>{digit}</span>
    <span className="font-medium text-black">{title}</span>
  </div>
);

export const StatsSection = () => (
  <div>
    <div className=" w-full flex flex-col md:flex-row justify-between px-8 sm:px-16 lg:px-77 pt-20">
      <StatisticBlock digit="12K+" colors="text-indigo-700" title="Project Completed" />
      <StatisticBlock digit="20K+" colors="text-pink-700" title="Industry Experience" />
      <StatisticBlock digit="10K+" colors="text-green-500" title="Happy Clients" />
      <StatisticBlock digit="32K+" colors="text-purple-500" title="Awards Winner" />
    </div>
  </div>
);

export default StatsSection;
