
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Events from './components/Events';
import Impact from './components/Impact';
import DownloadCenter from './components/DownloadCenter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Impact />
        <WhatWeDo />
        <Events />
        <DownloadCenter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
