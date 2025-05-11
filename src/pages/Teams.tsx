
import React, { useState, useEffect } from 'react';
import { Shield, Search, Filter, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PREMIER_LEAGUE_TEAMS, Team } from '../data/premier-league-teams';
import TeamGrid from '../components/teams/TeamGrid';
import TeamDetail from '../components/teams/TeamDetail';
import TeamStatsCard from '../components/teams/TeamStatsCard';
import { Input } from '@/components/ui/input';

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTeams = PREMIER_LEAGUE_TEAMS.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleCloseDetail = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2.5 mb-3 bg-gradient-to-r from-blue-500/10 to-transparent px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-blue-400" />
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Csapatok
                </h1>
              </div>
              <p className="text-gray-400 max-w-lg">
                Válaszd ki kedvenc csapataidat és fedezd fel statisztikáikat, játékosaikat és teljesítményüket.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30 w-full"
                  placeholder="Csapat keresése..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="flex items-center justify-center h-10 w-10 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Filter className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <TeamStatsCard />
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-5 w-5 text-amber-400" />
                <h2 className="text-xl font-bold text-white">Premier League csapatok</h2>
              </div>
              <TeamGrid teams={filteredTeams} onTeamClick={handleTeamClick} />
            </div>
          </div>
        </section>
      </main>
      
      {selectedTeam && (
        <TeamDetail team={selectedTeam} onClose={handleCloseDetail} />
      )}
      
      <Footer />
    </div>
  );
};

export default Teams;
