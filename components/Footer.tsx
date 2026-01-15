
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a365d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1a365d] font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">CivicServe</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a registered non-profit organization dedicated to creating sustainable societal impact through community-driven initiatives.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2f855a] transition-colors">
                  <span className="sr-only">Social Link {i}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About our Founders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CSR Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2f855a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                123 Civic Plaza, Sector 4, Metro City, 560001
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2f855a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@civicserve.org
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2f855a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 (080) 244-8899
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#2f855a] mb-4">GIGW Compliance</h4>
            <p className="text-xs text-gray-400 mb-4">
              Website owned and maintained by CivicServe Foundation. Content is GIGW compliant for accessibility.
            </p>
            <div className="space-y-2">
              <a href="#" className="block text-xs font-semibold hover:text-[#2f855a] transition-colors">National Portal of India ↗</a>
              <a href="#" className="block text-xs font-semibold hover:text-[#2f855a] transition-colors">Digital India Initiative ↗</a>
              <a href="#" className="block text-xs font-semibold hover:text-[#2f855a] transition-colors">NGO Darpan ↗</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 CivicServe Organization. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#2f855a] rounded-full"></span>
              Secure Connection
            </span>
            <span>Last Updated: Mar 25, 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
