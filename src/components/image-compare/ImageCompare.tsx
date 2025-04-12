import React, { useState, useRef } from 'react';
import BeforeImage from '../../lib/Devscribemain.png';
import AfterImage from '../../lib/Baddocs.png';

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
}

const ImageCompare: React.FC<ImageCompareProps> = ({ 
  beforeImage, 
  afterImage
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="relative py-16 md:py-24 bg-background image-compare-container">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-w-16 aspect-h-9 image-compare-slider">
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ 
                width: `${sliderPosition}%` 
              }}
            >
              <img 
                src={beforeImage} 
                alt="Before Devscribe" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <img 
              src={afterImage} 
              alt="After Devscribe" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div 
              className="absolute top-0 bottom-0 w-1 bg-primary left-1/2 transform -translate-x-1/2"
              style={{ 
                left: `${sliderPosition}%` 
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Range Input */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={handleSliderChange}
              className="absolute w-full h-full top-0 left-0 z-10 opacity-0 cursor-pointer"
              aria-label="Image comparison slider"
            />
          </div>

          {/* Slider Guide */}
          <div className="mt-6 text-center">
            <div className="flex justify-between max-w-4xl mx-auto px-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
                <span className="text-base font-bold text-foreground">Slide left to see Standard Documentation</span>
              </div>
              <div className="flex items-center">
                <span className="text-base font-bold text-foreground">Slide right to see Devscribe Documentation</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCompare; 