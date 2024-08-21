'use client';

import ProtectedRoute from '@/app/components/ProtextedRoute';
import React from 'react';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>Dashboard</div>
    </ProtectedRoute>
  );
};

export default Dashboard;
