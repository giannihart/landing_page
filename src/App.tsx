import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import FeatureComparison from './components/FeatureCompare/FeatureComparison';
import UserTypes from './components/UserTypes/UserTypes';
// import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';
import ImageCompare from './components/image-compare/ImageCompare';
import SupportSection from './components/Collaboration /SupportSection';

// Import placeholder images
import BeforeImage from './lib/Devscribemain.png';
import AfterImage from './lib/Baddocs.png';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ImageCompare 
        beforeImage={BeforeImage} 
        afterImage={AfterImage}
      />
      <Features />
      <UserTypes />
      <FeatureComparison />
      {/* <Pricing /> */}
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
