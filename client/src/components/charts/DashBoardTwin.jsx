import Card from "components/card";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MdBarChart } from "react-icons/md";

const DashBoardTwin = ({ fakeCounts, realCounts }) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Sports",
          "Politics",
          "Education",
          "Entertainment",
          "Business",
          "Health",
          "Technology",
          "Religion",
          "Other",
        ],
      },
    },
    dataLabels: {
      style: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
    },
    
    markers: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
    grid: {
      row: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
      column: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
    },
    series: [
      {
        name: "fakeCounts",
        data: fakeCounts,
      },
      {
        name: "realCounts",
        data: realCounts,
      },
    ],
  });

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Fake/Real Vs Category
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Card>
  );
};

export default DashBoardTwin;
