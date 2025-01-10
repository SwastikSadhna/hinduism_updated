import React from 'react';
import ShlokList from '../Components/Shlok/ShlokList';
import Footer from '../components/Footer';

const SanatanShloksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">Daily Sanatan Shloks</h1>
        <ShlokList />
      </main>
      <Footer />
    </div>
  );
};

export default SanatanShloksPage;

