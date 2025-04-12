import React, { useState } from 'react';
import GroupImage from '../../lib/Group 19.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border navbar-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src={GroupImage}
                alt="Company Logo"
                className="h-8 w-auto"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 navbar-menu">
            <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
              Product
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <button 
              onClick={() => window.open('https://app.apollo.io/#/meet/al2-p3j-wax/Devscribedemo', '_blank')} 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-[30px] hover:bg-primary/90 transition-all duration-300"
            >
              Book a demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center navbar-mobile-menu">
            <button 
              onClick={() => window.open('https://app.apollo.io/#/meet/al2-p3j-wax/Devscribedemo', '_blank')} 
              className="w-full text-left px-6 py-2 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 