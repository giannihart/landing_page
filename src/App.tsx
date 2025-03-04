import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import FeatureComparison from './components/pricing/FeatureComparison';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <FeatureComparison />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
