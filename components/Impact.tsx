
import React from 'react';
import { STATS, NEWS_ALERTS } from '../constants';

const Impact: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="ticker-wrap mb-16">
        <div className="ticker">
          {NEWS_ALERTS.map((news, idx) => (
            <span key={idx} className="text-white font-medium mx-12">
              <span className="bg-[#2f855a] text-[10px] px-2 py-0.5 rounded uppercase mr-3">Latest News</span>
              {news}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {NEWS_ALERTS.map((news, idx) => (
            <span key={`dup-${idx}`} className="text-white font-medium mx-12">
              <span className="bg-[#2f855a] text-[10px] px-2 py-0.5 rounded uppercase mr-3">Latest News</span>
              {news}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-[#2f855a]/10 rounded-xl mb-4 text-[#2f855a]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-1">
                {stat.value.toLocaleString()}{stat.suffix}
              </h3>
              <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
