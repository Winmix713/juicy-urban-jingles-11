
import React from 'react';
import Header from '../components/Header';
import PredictionSystem from '../components/PredictionSystem';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import RecentMatchesCard from '../components/dashboard/RecentMatchesCard';
import PredictionPerformanceChart from '../components/dashboard/PredictionPerformanceChart';
import TeamInsightsCard from '../components/dashboard/TeamInsightsCard';
import UpcomingMatchesCard from '../components/dashboard/UpcomingMatchesCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-white mb-8">Vezérlőpult</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <DashboardOverview />
          <div className="lg:col-span-2">
            <PredictionPerformanceChart />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <RecentMatchesCard />
          </div>
          <TeamInsightsCard />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <UpcomingMatchesCard />
          </div>
          <div className="lg:col-span-2">
            <PredictionSystem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
