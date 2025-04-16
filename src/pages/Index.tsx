
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero/HeroSection';
import MatchSelectionSection from '../components/match-selection/MatchSelectionSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import TopPredictions from '../components/TopPredictions';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';

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
        
        <section id="match-selection" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
          <MatchSelectionSection />
        </section>
        
        <section id="leaderboard" className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <LeaderboardTable />
            </div>
          </div>
        </section>
        
        <section id="predictions" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
          <TopPredictions />
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
