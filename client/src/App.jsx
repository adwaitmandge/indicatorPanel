import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import AnalyticsLayout from "layouts/analytics";
import UserLayout from "layouts/user";


const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="analytics/*" element={<AnalyticsLayout />} />
      <Route path="user/*" element={<UserLayout/>} />
    </Routes>
  );
};

export default App;
