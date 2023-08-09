import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";

import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.js";
import tableDataComplex from "./variables/tableDataComplex.js";
import ComplexTable from "./components/ComplexTable";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import TwinBarChart from "components/charts/TwinBarChart";
import { useEffect, useState } from "react";
import DashBoardTwin from "components/charts/DashBoardTwin";
import axios from "axios";
const Dashboard = () => {
  const navigate = useNavigate();
  const [realCounts, setRealCounts] = useState([]);
  const [fakeCounts, setFakeCounts] = useState([]);
  const [twitterDataWeeklyRevenue, setTwitterDataWeeklyRevenue] = useState([]);
  const [loading, setLoading] = useState(true);

  const realCountsArray = [];
  const fakeCountsArray = [];
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/charts/mainfrt") // Update with your API endpoint
      .then((response) => {
        const categoryData = response.data;
        console.log("categoryData", categoryData);

        // Iterate through the category data and populate arrays
        for (const category in categoryData) {
          realCountsArray.push(categoryData[category].realCount);
          fakeCountsArray.push(categoryData[category].fakeCount);
        }

        // Update state arrays
        setTwitterDataWeeklyRevenue([
          {
            name: "FAKE",
            data: fakeCountsArray,
            color: "#FE0000",
          },
          {
            name: "REAL",
            data: realCountsArray,
            color: "#55FE00",
          },
        ]);

        setRealCounts(realCountsArray);
        setFakeCounts(fakeCountsArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log("in the twitter page", fakeCounts, realCounts);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          pathname={"/analytics/twitter"}
          icon={<SocialIcon network="twitter" />}
          title={"Twitter"}
          subtitle={"7.9%"}
        />
        <Widget
          pathname={"/analytics/instagram"}
          icon={<SocialIcon network="instagram" />}
          title={"Instagram"}
          subtitle={"2.1%"}
        />
        <Widget
          pathname={"/analytics/reddit"}
          icon={<SocialIcon network="reddit" />}
          title={"Reddit"}
          subtitle={"5.1%"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        {/* <WeeklyRevenue /> */}
        {twitterDataWeeklyRevenue && (
          <DashBoardTwin fakeCounts={fakeCounts} realCounts={realCounts} />
        )}
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}
      </div>
    </div>
  );
};

export default Dashboard;
