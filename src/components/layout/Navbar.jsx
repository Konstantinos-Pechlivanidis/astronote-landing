import { useState, useEffect } from 'react';
import GlassButton from '../ui/GlassButton';

const SHOPIFY_APP_URL = import.meta.env.VITE_SHOPIFY_APP_URL || 'https://astronote-shopify-frontend.onrender.com';
const RETAIL_APP_URL = import.meta.env.VITE_RETAIL_APP_URL || 'https://astronote-retail-frontend.onrender.com';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-gradient-to-r from-primary-dark/95 via-surface-dark/95 to-primary-dark/95 shadow-glass-lg border-b border-glass-border/50'
          : 'bg-gradient-to-r from-primary-dark/80 via-surface-dark/80 to-primary-dark/80 border-b border-glass-border/30'
      } backdrop-blur-[30px] -webkit-backdrop-blur-[30px]`}
      style={{ height: '72px' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 group transition-transform hover:scale-105"
          aria-label="Astronote Home"
        >
          <img 
            src="/Logo/astronote-logo.png" 
            alt="Astronote Logo" 
            className="w-10 h-10 rounded-xl object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-xl font-bold text-primary-light tracking-tight">Astronote</span>
        </a>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <GlassButton 
            variant="ghost" 
            size="sm" 
            href={`${SHOPIFY_APP_URL}/shopify/login`}
            className="text-primary-light/90 hover:text-ice-accent"
          >
            Shopify Login
          </GlassButton>
          <GlassButton 
            variant="ghost" 
            size="sm" 
            href={`${RETAIL_APP_URL}/retail/login`}
            className="text-primary-light/90 hover:text-ice-accent"
          >
            Retail Login
          </GlassButton>
          <GlassButton 
            variant="primary" 
            size="sm" 
            href={`${SHOPIFY_APP_URL}/shopify`}
            className="bg-gradient-to-r from-ice-accent to-ice-dark hover:from-ice-light hover:to-ice-accent shadow-glow-ice hover:shadow-glow-ice-lg"
          >
            Get Started
          </GlassButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg text-primary-light hover:bg-glass-border/20 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

