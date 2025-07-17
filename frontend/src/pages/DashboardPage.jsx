// DashboardPage.jsx
import { useEffect, useState } from 'react';
import api from '../api/axios';
import LinkPage from './LinkPage';

// src/pages/DashboardPage.jsx
const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p>Welcome back! Here’s what’s happening:</p>
      {/* Add charts and overview summaries here */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">Recent Clicks: 120</div>
        <div className="p-4 bg-white shadow rounded">Conversions: 30</div>
        <div className="p-4 bg-white shadow rounded">Top Link: example.com/abc</div>
        <div className="p-4 bg-white shadow rounded">Revenue: $1,200</div>
      </div>
    </div>
  );
};

export default DashboardPage;

