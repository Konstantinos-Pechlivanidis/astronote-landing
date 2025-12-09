import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Professional ImageLightbox Component
 * Uses React Portal for proper rendering and full-screen image viewing
 */
export default function ImageLightbox({ children, imageSrc, imageAlt, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const openLightbox = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    const handleClickOutside = (e) => {
      if (imageRef.current && !imageRef.current.contains(e.target)) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const lightboxContent = isOpen && isMounted ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt || 'Image viewer'}
    >
      {/* Close Button */}
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 z-[10000] p-3 rounded-full bg-white/90 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-xl hover:scale-110"
        aria-label="Close image viewer"
      >
        <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center overflow-auto p-4 md:p-8">
        <div className="flex flex-col items-center justify-center min-h-full py-8">
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt || 'Enlarged image'}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl cursor-zoom-out"
            style={{
              maxWidth: '100vw',
              maxHeight: '90vh',
            }}
            loading="eager"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              console.error('Failed to load image:', imageSrc);
              e.currentTarget.src = '/placeholder.svg';
            }}
          />

          {/* Caption */}
          {imageAlt && (
            <div className="mt-6 text-center">
              <div className="inline-block px-6 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg">
                <p className="text-base text-gray-900 font-medium">{imageAlt}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div 
        onClick={openLightbox}
        className={`cursor-pointer group relative ${className}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(e);
          }
        }}
        aria-label={`View ${imageAlt || 'image'} in full size`}
      >
        {children}
        {/* Hover overlay indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/30 rounded-lg">
          <div className="px-4 py-2 rounded-lg bg-white/95 backdrop-blur-sm border border-white/30 shadow-xl">
            <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Click to enlarge
            </span>
          </div>
        </div>
      </div>

      {/* Portal the lightbox to body */}
      {isMounted && createPortal(lightboxContent, document.body)}
    </>
  );
}
