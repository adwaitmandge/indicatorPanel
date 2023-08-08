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
import TwitterUserCheckTable from "views/admin/tables/components/TwitterUserCheckTable";
import { twitterUsersColumnsDataCheck } from "views/admin/default/variables/columnsData";
import { twitterUserData } from "views/admin/default/variables/twitterUserData";

const Twitter = () => {
  return (
    <div>
      {/* Charts */}
      <div className="mt-5 grid-cols-1 gap-5 md:grid-cols-2">
        {/* Total Spent */}
        <TwitterUserCheckTable
          columnsData={twitterUsersColumnsDataCheck}
          tableData={twitterUserData}
        />
      </div>

      {/* Tables & Charts */}
    </div>
  );
};

export default Twitter;
