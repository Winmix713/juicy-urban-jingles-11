
import React from 'react';
import { Team } from '../../data/premier-league-teams';
import { Shield, Users, Trophy, BarChart, X, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamDetailProps {
  team: Team;
  onClose: () => void;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/80 border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl animate-scale-up">
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 text-gray-400" />
          </Button>
          <h3 className="text-lg font-semibold text-white">Csapat részletek</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
          >
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-20 w-20 rounded-md overflow-hidden bg-gradient-to-br from-black/40 to-black/20 p-2 flex items-center justify-center border border-white/10">
              <img 
                src={team.logoUrl} 
                alt={`${team.name} logo`} 
                className="h-14 w-14 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white">{team.name}</h2>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-xs text-blue-400 font-medium">Premier League</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="bg-white/5 rounded-full px-3 py-1 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-xs text-gray-300">26 játékos</span>
                </div>
                <div className="bg-white/5 rounded-full px-3 py-1 flex items-center gap-1">
                  <Trophy className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-xs text-gray-300">12 trófea</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Következő mérkőzés</h4>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-black/20 p-1 flex items-center justify-center">
                    <img src={team.logoUrl} alt={team.name} className="h-8 w-8 object-contain" />
                  </div>
                  <span className="text-xs text-white mt-1">{team.name}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">VS</span>
                  <span className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>21:00</span>
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-black/20 p-1 flex items-center justify-center">
                    <img src="https://resources.premierleague.com/premierleague/badges/50/t8.png" alt="Chelsea" className="h-8 w-8 object-contain" />
                  </div>
                  <span className="text-xs text-white mt-1">Chelsea</span>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>2023. május 15.</span>
                </span>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Forma</h4>
              <div className="flex items-center gap-2 justify-between">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-500">W</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-red-500">L</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-500">W</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-500">D</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-green-500">W</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-xs text-gray-400">5 mérkőzés</span>
                  <span className="text-xs text-emerald-400">68% győzelem</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 border border-white/5 mb-6">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Szezon statisztikák</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Meccs</p>
                <p className="text-lg font-semibold text-white">28</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Győzelem</p>
                <p className="text-lg font-semibold text-emerald-400">18</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Vereség</p>
                <p className="text-lg font-semibold text-red-400">6</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Gólok</p>
                <p className="text-lg font-semibold text-white">48</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Kapott gólok</p>
                <p className="text-lg font-semibold text-white">24</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Pont</p>
                <p className="text-lg font-semibold text-blue-400">57</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={onClose} 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              Bezárás
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
