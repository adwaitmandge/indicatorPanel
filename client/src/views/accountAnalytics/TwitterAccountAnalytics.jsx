import Widget from "components/widget/Widget";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { BsFillPersonFill } from "react-icons";
import Card from "components/card";
import { twitterAccountColumnsDataCheck } from "views/admin/default/variables/columnsData";
import { twitterAccountData } from "views/admin/default/variables/twitterAccountData";
import TwitterAccountCheckTable from "views/admin/tables/components/TwitterAccountCheckTable";

const TwitterAccountAnalytics = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Card extra="!flex-row p-3 flex-grow items-center cursor-pointer rounded-[20px]">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
          </div>
          <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <p className="font-dm text-lg font-medium text-gray-600">
              Account Name
            </p>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Kaushik7894
            </h4>
          </div>
        </Card>
        <Card extra="!flex-row p-3 flex-grow items-center cursor-pointer rounded-[20px]">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </span>
          </div>
          <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <p className="font-dm text-lg font-medium text-gray-600">
              Number of Posts
            </p>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              1312
            </h4>
          </div>
        </Card>
        <Card extra="!flex-row p-3 flex-grow items-center cursor-pointer rounded-[20px]">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </span>
          </div>
          <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <p className="font-dm text-lg font-medium text-gray-600">
              Avg No. of Posts
            </p>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              116
            </h4>
          </div>
        </Card>
      </div>
      <div>
        {/* Charts */}
        <div className="mt-5 grid-cols-1 gap-5 md:grid-cols-2">
          {/* Total Spent */}
          <TwitterAccountCheckTable
            columnsData={twitterAccountColumnsDataCheck}
            tableData={twitterAccountData}
          />
        </div>

        {/* Tables & Charts */}
      </div>
    </div>
  );
};

export default TwitterAccountAnalytics;
