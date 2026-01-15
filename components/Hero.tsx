
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a365d] leading-tight mb-6">
            Building Stronger <span className="text-[#2f855a]">Communities</span> Together.
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Our mission is to empower individuals through sustainable initiatives, quality education, and accessible healthcare. We are committed to transparency and impactful service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-8 py-4 bg-[#1a365d] text-white text-lg font-bold rounded-xl shadow-lg hover:bg-[#152c4a] hover:-translate-y-0.5 transition-all">
              Latest Activities
            </button>
            <button className="px-8 py-4 bg-white text-[#1a365d] text-lg font-bold rounded-xl border-2 border-[#1a365d] hover:bg-gray-50 hover:-translate-y-0.5 transition-all">
              Join Our Mission
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={`https://picsum.photos/id/${i + 20}/100/100`}
                  alt="supporter"
                />
              ))}
            </div>
            <p className="text-sm">Join 2,400+ active volunteers</p>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2f855a] opacity-5 blur-3xl rounded-full"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/111/1000/800" 
              alt="Community impact" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Live Impact</p>
              </div>
              <p className="text-[#1a365d] font-semibold mt-1">Health camp in progress at Central Square</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
