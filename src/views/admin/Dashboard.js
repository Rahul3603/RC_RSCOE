import React from "react";

// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import CardStats from "../../components/Cards/CardStats";

export default function Dashboard() {
  return (
    <>
      <div className="absolute bg-slate-50 md:pt-10 pb-40 pt-8 z-0 w-full">
        <div className="px-2 md:px-8 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-rc-blue"
                  statTextColor="text-rc-white"
                  statSubtitle="ROTARACTORS"
                  statTitle="350,897"
                  statIconName="fa-solid fa-user"
                  statIconColor="text-rc-blue"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-rc-red"
                  statTextColor="text-rc-white"
                  statSubtitle="NEW ROTARACTORS"
                  statTitle="2,356"
                  statIconName="fa-solid fa-user-plus"
                  statIconColor="text-rc-red"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-rc-yellow"
                  statTextColor="text-rc-black"
                  statSubtitle="ALUMNIS"
                  statTitle="924"
                  statIconName="fa-solid fa-user-graduate"
                  statIconColor="text-rc-yellow"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-rc-black"
                  statTextColor="text-rc-white"
                  statSubtitle="TOTAL"
                  statTitle="48,54,123"
                  statIconName="fa-solid fa-users"
                  statIconColor="text-rc-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-4 md:px-8 mx-auto">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-2 mt-[29rem] lg:mt-64 xl:mt-44">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-2 mb-12 mt-0 xl:mt-44">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4 px-2 md:px-8 mx-auto">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
