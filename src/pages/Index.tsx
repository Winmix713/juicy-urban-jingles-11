
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero/HeroSection';
import MatchSelectionSection from '../components/match-selection/MatchSelectionSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import TopPredictions from '../components/TopPredictions';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import MatchesSummaryCard from '../components/matches/MatchesSummaryCard';
import StatisticsCard from '../components/matches/StatisticsCard';
import { Trophy, Users, BarChart, Clock } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <Header />
      
      <main>
        <section id="hero" className="relative">
          <HeroSection />
        </section>
        
        <section className="relative py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatisticsCard 
                title="Aktív felhasználók"
                icon={<Users className="h-5 w-5 text-blue-400" />}
                value="10K+"
                change="8%"
                isPositive={true}
              />
              <StatisticsCard 
                title="Sikeres tippek"
                icon={<Trophy className="h-5 w-5 text-emerald-400" />}
                value="76%"
                change="2.5%"
                isPositive={true}
              />
              <StatisticsCard 
                title="Mérkőzések"
                icon={<BarChart className="h-5 w-5 text-purple-400" />}
                value="124"
                change="15"
                isPositive={true}
              />
              <StatisticsCard 
                title="Élő mérkőzések"
                icon={<Clock className="h-5 w-5 text-amber-400" />}
                value="3"
                change="2"
                isPositive={true}
              />
            </div>
          </div>
        </section>
        
        <section className="relative py-10">
          <div className="container mx-auto px-4">
            <MatchesSummaryCard />
          </div>
        </section>
        
        <section id="match-selection" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
          <MatchSelectionSection />
        </section>
        
        <section id="leaderboard" className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div className="animate-fade-in">
                    <div className="inline-flex items-center gap-2.5 mb-3 bg-gradient-to-r from-blue-500/10 to-transparent px-4 py-2 rounded-full">
                      <Trophy className="w-5 h-5 text-blue-400" />
                      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Leaderboard
                      </h2>
                    </div>
                  </div>
                </div>
                <LeaderboardTable />
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div className="animate-fade-in">
                    <div className="inline-flex items-center gap-2.5 mb-3 bg-gradient-to-r from-purple-500/10 to-transparent px-4 py-2 rounded-full">
                      <BarChart className="w-5 h-5 text-purple-400" />
                      <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Top Predictions
                      </h2>
                    </div>
                  </div>
                </div>
                <TopPredictions />
              </div>
            </div>
          </div>
        </section>
        
        <section id="call-to-action" className="relative">
          <CallToAction />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
