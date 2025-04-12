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
import { TextRevealByWord } from './components/text-reveal/TextRevealByWord';

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
      <TextRevealByWord 
        text="Devscribe saves enterprises millions by automatically transforming repositories into AI-generated API docs in seconds, reducing developer hours by 20-30%."
        className="py-24 bg-background"
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
