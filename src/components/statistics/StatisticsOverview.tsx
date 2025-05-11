
import React from 'react';
import { TrendingUp, Calendar, Award, Users } from 'lucide-react';
import StatCard from './StatCard';

const StatisticsOverview = () => {
  return (
    <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
      <h2 className="text-xl font-semibold text-white mb-4">Áttekintés</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          icon={<TrendingUp className="h-5 w-5 text-emerald-400" />}
          title="Pontosság"
          value="87%"
          change="+2.5%"
          isPositive={true}
        />
        <StatCard 
          icon={<Calendar className="h-5 w-5 text-blue-400" />}
          title="Tippek"
          value="458"
          change="+28"
          isPositive={true}
        />
        <StatCard 
          icon={<Award className="h-5 w-5 text-amber-400" />}
          title="Rang"
          value="#8"
          change="+3"
          isPositive={true}
        />
        <StatCard 
          icon={<Users className="h-5 w-5 text-purple-400" />}
          title="Követők"
          value="124"
          change="-5"
          isPositive={false}
        />
      </div>
    </div>
  );
};

export default StatisticsOverview;
