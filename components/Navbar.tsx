
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-[#1a365d] tracking-tight">CivicServe</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#1a365d] px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#2f855a] transition-all">Home</a>
              <a href="#about" className="text-gray-600 hover:text-[#1a365d] px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#2f855a] transition-all">About</a>
              <a href="#events" className="text-gray-600 hover:text-[#1a365d] px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#2f855a] transition-all">Events</a>
              <a href="#downloads" className="text-gray-600 hover:text-[#1a365d] px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#2f855a] transition-all">Reports</a>
              <a href="#downloads" className="text-gray-600 hover:text-[#1a365d] px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#2f855a] transition-all">GOs</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#downloads" className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-[#1a365d] hover:bg-[#152c4a] transition-colors">
              Download Center
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]">About</a>
          <a href="#events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]">Events</a>
          <a href="#downloads" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]">Reports & GOs</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-100">
          <div className="px-5">
            <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1a365d] hover:bg-[#152c4a]">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
