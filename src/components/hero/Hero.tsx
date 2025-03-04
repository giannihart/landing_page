import React, { useState } from 'react';
import ProductImage from '../../lib/Product.png';

const images = [
  { id: 1, src: ProductImage, alt: 'Generate Documentation' },
  { id: 2, src: ProductImage, alt: 'Text Editor' },
  { id: 3, src: ProductImage, alt: 'API Testing Playground' },
  { id: 4, src: ProductImage, alt: 'Custom Themes' },
];

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [currentImage, setCurrentImage] = useState(1);
  const [expandedButton, setExpandedButton] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    setStatus('Thanks for signing up!');
    setEmail('');
  };

  const handleButtonClick = (id: number) => {
    setCurrentImage(id);
    setExpandedButton(expandedButton === id ? null : id);
  };

  return (
    <div className="relative overflow-hidden bg-background pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Instantly Generate, Test,</span>
            <span className="block text-primary">and Perfect Your API Docs</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Devscribe simplifies API documentation by allowing you to generate, test, and style beautiful API docs—all in one place, with themes that match your company's brand.
          </p>
          
          {/* Email Signup Form */}
          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 hover:outline hover:outline-2 hover:outline-white"
                />
              </div>
              <div className="rainbow-button">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
                >
                  Get updates
                </button>
              </div>
            </form>
            {status && (
              <p className="mt-3 text-sm text-primary animate-fade-in">
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Animated Element */}
        <div className="mt-16">
          <div className="relative mx-auto w-full max-w-4xl">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-border bg-card">
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                {/* Content */}
                <div className="absolute inset-0">
                  <img
                    src={images[currentImage - 1].src}
                    alt={images[currentImage - 1].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Image Toggle Icons */}
            <div className="mt-6 flex justify-center gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative">
                  <button
                    onClick={() => handleButtonClick(image.id)}
                    className={`
                      flex items-center overflow-hidden transition-all duration-700 ease-out transform-gpu 
                      ${currentImage === image.id
                        ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.3)]'
                        : 'bg-secondary text-secondary-foreground hover:bg-primary/80 hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]'
                      }
                      rounded-lg w-12 ${expandedButton === image.id ? 'w-auto' : 'w-12'} 
                      h-12 relative z-10
                      hover:translate-y-[-5px] hover:scale-110 
                      transition-transform duration-300 ease-out
                    `}
                  >
                    <div className="flex items-center justify-center w-12 flex-shrink-0">
                      {image.id === 1 && (
                        <svg className="w-6 h-6 transition-transform duration-700 ease-out transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M4 10h16M4 15h12M4 20h8" />
                        </svg>
                      )}
                      {image.id === 2 && (
                        <svg className="w-6 h-6 transition-transform duration-700 ease-out transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      )}
                      {image.id === 3 && (
                        <svg className="w-6 h-6 transition-transform duration-700 ease-out transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16M4 4v8M20 4v8M7 12v4M17 12v4M7 16h10M12 16v4" />
                        </svg>
                      )}
                      {image.id === 4 && (
                        <svg className="w-6 h-6 transition-transform duration-700 ease-out transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                    </div>
                    <span className={`
                      text-sm font-medium whitespace-nowrap px-4 
                      ${expandedButton === image.id ? 'opacity-100' : 'opacity-0'}
                    `}>{image.alt}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Add this to your index.css or a new styles file
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style); 