
import React from 'react';

const initiatives = [
  {
    title: 'Healthcare for All',
    desc: 'Setting up mobile clinics and providing essential diagnostics in remote areas.',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Education Grants',
    desc: 'Financial assistance and resources for meritorious students from low-income families.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Environmental Care',
    desc: 'Mass tree plantation drives and urban gardening initiatives to combat pollution.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Welfare Services',
    desc: 'Direct relief and support systems for the elderly and displaced communities.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    color: 'bg-rose-50 text-rose-600'
  }
];

const WhatWeDo: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2f855a] font-bold tracking-widest text-sm uppercase mb-3">Promotional Activities</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#1a365d] mb-6">Driving Real Change through Local Initiatives</h3>
          <p className="text-gray-600 leading-relaxed">
            We focus on four key pillars that form the foundation of a thriving society. Every initiative is designed for longevity and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1a365d] mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-6">
                <a href="#" className="text-[#2f855a] font-semibold text-sm inline-flex items-center group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
