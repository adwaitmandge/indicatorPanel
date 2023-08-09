import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard.jsx";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import {
  MdArrowDropUp,
  MdBarChart,
  MdDashboard,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { columnsDataCheck } from "views/admin/default/variables/columnsData.js";
import { columnsDataComplex } from "views/admin/default/variables/columnsData.js";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "views/admin/default/variables/tableDataCheck";
import tableDataComplex from "views/admin/default/variables/tableDataComplex";
import ComplexTable from "views/admin/default/components/ComplexTable";
import Card from "components/card";
import BarChart from "components/charts/BarChart";
import { barChartDataWeeklyRevenue } from "variables/charts";
import { barChartOptionsWeeklyRevenue } from "variables/charts";
import LineChart from "components/charts/LineChart";
import { lineChartDataTotalSpent } from "variables/charts";
import { lineChartOptionsTotalSpent } from "variables/charts";
import { twitterDataTotalSpent } from "variables/charts";
import { twitterDataWeeklyRevenue } from "variables/charts";
import { twitterColumnsDataCheck } from "views/admin/default/variables/columnsData";
import { twitterData } from "views/admin/default/variables/twitterData";
import TwitterCheckTable from "views/admin/tables/components/TwitterCheckTable";
import InstagramCheckTable from "views/admin/tables/components/InstagramCheckTable";
import { instagramColumnsDataCheck } from "views/admin/default/variables/columnsData";
import { instagramData } from "views/admin/default/variables/instagramData";

const Twitter = () => {
  return (
    <div>
      {/* Charts */}
      <div className="mt-5 grid-cols-1 gap-5 md:grid-cols-2">
        {/* Total Spent */}
        <InstagramCheckTable
          columnsData={instagramColumnsDataCheck}
          tableData={instagramData}
        />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div className="mb-3">
          <Card extra="!p-[20px] text-center w-full">
            <div className="flex justify-between">
              <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
                <MdOutlineCalendarToday />
                <span className="text-sm font-medium text-gray-600">
                  This month
                </span>
              </button>
              <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                <MdBarChart className="h-6 w-6" />
              </button>
            </div>

            <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
              <div className="flex flex-col">
                <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
                  182
                </p>
                <div className="flex flex-col items-start">
                  <p className="mt-2 text-sm text-gray-600">Fallacy Rate</p>
                  <div className="flex flex-row items-center justify-center">
                    <MdArrowDropUp className="font-medium text-green-500" />
                    <p className="text-sm font-bold text-green-500"> -1.31% </p>
                  </div>
                </div>
              </div>
              <div className="h-full w-full">
                <LineChart
                  options={lineChartOptionsTotalSpent}
                  series={twitterDataTotalSpent}
                />
              </div>
            </div>
          </Card>

          {/* Weekly Revenue */}
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className=" w-full rounded-[20px] md:grid-cols-2">
          <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
            <div className="mb-auto flex items-center justify-between px-6">
              <h2 className="text-lg font-bold text-navy-700 dark:text-white">
                Political Ideology
              </h2>
              <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                <MdBarChart className="h-6 w-6" />
              </button>
            </div>

            <div className="md:mt-16 lg:mt-0">
              <div className="h-[250px] w-full xl:h-[350px]">
                p
                <BarChart
                  chartData={barChartDataWeeklyRevenue}
                  chartOptions={barChartOptionsWeeklyRevenue}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
