
import React, { useState, useMemo } from 'react';
import { GOVERNMENT_ORDERS, REPORTS } from '../constants';
import { GovernmentOrder, Report } from '../types';

const DownloadCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredGOs = useMemo(() => {
    return GOVERNMENT_ORDERS.filter(go => 
      go.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      go.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      go.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section id="downloads" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[#2f855a] font-bold tracking-widest text-sm uppercase mb-3">Download Center</h2>
          <h3 className="text-3xl font-bold text-[#1a365d]">Resources & Compliance</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Annual/Monthly Reports */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-xl font-bold text-[#1a365d] flex items-center gap-2">
              <svg className="w-6 h-6 text-[#2f855a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Organizational Reports
            </h4>
            <div className="space-y-3">
              {REPORTS.map((report) => (
                <div key={report.id} className="p-4 rounded-xl border border-gray-100 hover:border-[#2f855a]/50 hover:bg-gray-50 transition-all flex items-center justify-between group">
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="font-semibold text-[#1a365d] text-sm truncate">{report.title}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-0.5 rounded uppercase">{report.year}</span>
                      <span>{report.size}</span>
                      <span className="text-[#2f855a] font-medium">{report.type}</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 p-2 text-[#2f855a] hover:bg-[#2f855a] hover:text-white rounded-lg transition-colors" title="Download PDF">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic mt-4 text-center">All files are in PDF format and verified for authenticity.</p>
          </div>

          {/* Government Orders Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-xl font-bold text-[#1a365d] flex items-center gap-2">
                <svg className="w-6 h-6 text-[#2f855a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Government Orders (GOs)
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search order or title..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-[#2f855a] focus:border-[#2f855a] outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="w-4 h-4 absolute left-4 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#1a365d] uppercase tracking-wider">Order Details</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#1a365d] uppercase tracking-wider hidden md:table-cell">Department</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#1a365d] uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-[#1a365d] uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredGOs.length > 0 ? (
                      filteredGOs.map((go) => (
                        <tr key={go.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm font-semibold text-[#1a365d]">{go.title}</div>
                            <div className="text-xs text-gray-500 font-mono mt-0.5">{go.orderNumber}</div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                              {go.department}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{go.date}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-bold rounded-lg text-white bg-[#2f855a] hover:bg-[#276749] transition-all">
                              Download <span className="hidden lg:inline ml-1">PDF</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                          <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          No results found matching "{searchTerm}"
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
