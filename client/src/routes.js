import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import Auth from "views/auth/auth";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Twitter from "views/analytics/Twitter";
import Instagram from "views/analytics/Instagram";
import Reddit from "views/analytics/Reddit";
import TwitterUserAnalytics from "views/userAnalytics/twitterUserAnalytics";
import TwitterAccountAnalytics from "views/accountAnalytics/TwitterAccountAnalytics";

const routes = [
  {
    name: "Social Media Analytics",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },

  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  {
    name: "Auth",
    layout: "/auth",
    path: "",
    icon: <MdLock className="h-6 w-6" />,
    component: <Auth />,
  },
  {
    name: "Twitter Analytics",
    layout: "/analytics",
    path: "twitter",
    icon: <MdLock className="h-6 w-6" />,
    component: <Twitter />,
  },
  {
    name: "Twitter Account Analytics",
    layout: "/analytics",
    path: "twitter/accounts/*",
    icon: <MdLock className="h-6 w-6" />,
    component: <TwitterAccountAnalytics />,
  },
  {
    name: "Twitter User Analytics",
    layout: "/analytics",
    path: "twitter/*",
    icon: <MdLock className="h-6 w-6" />,
    component: <TwitterUserAnalytics />,
  },
  {
    name: "Instagram Analytics",
    layout: "/analytics",
    path: "instagram",
    icon: <MdLock className="h-6 w-6" />,
    component: <Instagram />,
  },
  {
    name: "Reddit Analytics",
    layout: "/analytics",
    path: "reddit",
    icon: <MdLock className="h-6 w-6" />,
    component: <Reddit />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
