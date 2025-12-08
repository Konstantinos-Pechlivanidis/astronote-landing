import { useEffect, useState } from 'react';
import GlassCard from './GlassCard';
import Icon from './Icon';

/**
 * ImageLightbox Component
 * Displays images in a full-screen modal when clicked
 */
export default function ImageLightbox({ children, imageSrc, imageAlt, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <div 
        onClick={openLightbox}
        className={`cursor-pointer group ${className}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox();
          }
        }}
        aria-label={`View ${imageAlt || 'image'} in full size`}
      >
        {children}
        {/* Hover overlay indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-sm font-semibold text-white flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
              Click to enlarge
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
          role="presentation"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={closeLightbox}
            aria-hidden="true"
          />
          
          {/* Modal Content */}
          <GlassCard
            variant="dark"
            className="relative z-10 max-w-[95vw] max-h-[95vh] p-4 animate-scale-in"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-2 -right-2 z-20 p-2.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors focus-ring min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/30"
              aria-label="Close image viewer"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            </button>

            {/* Image */}
            <div className="flex items-center justify-center min-h-[60vh] max-h-[90vh]">
              <img
                src={imageSrc}
                alt={imageAlt || 'Enlarged image'}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Caption */}
            {imageAlt && (
              <div className="mt-4 text-center">
                <p className="text-sm text-white/90">{imageAlt}</p>
              </div>
            )}
          </GlassCard>
        </div>
      )}
    </>
  );
}

