const SHOPIFY_APP_URL = import.meta.env.VITE_SHOPIFY_APP_URL || 'https://astronote-shopify-frontend.onrender.com';
const RETAIL_APP_URL = import.meta.env.VITE_RETAIL_APP_URL || 'https://astronote-retail-frontend.onrender.com';

export default function Footer() {
  return (
    <footer className="border-t border-glass-border/30 bg-gradient-to-b from-surface-dark/50 to-primary-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/Logo/astronote-logo.png" 
                alt="Astronote Logo" 
                className="w-10 h-10 rounded-xl object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="text-xl font-bold text-primary-light tracking-tight">Astronote</span>
            </div>
            <p className="text-sm text-border-subtle leading-relaxed mb-4 max-w-md">
              SMS Marketing That Converts. Powerful solutions for Shopify stores and retail businesses. 
              Reach customers instantly, drive sales, and grow faster.
            </p>
            <div className="flex items-center gap-4 text-sm text-border-subtle">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ice-accent animate-pulse" />
                <span>98% open rates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zoom-fuchsia animate-pulse" style={{ animationDelay: '1s' }} />
                <span>Instant delivery</span>
              </div>
            </div>
          </div>

          {/* Shopify */}
          <div>
            <h3 className="text-sm font-semibold text-primary-light mb-4 uppercase tracking-wider">Shopify</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Get Started
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/login`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Login
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/pricing`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Pricing
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/features`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Features
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Retail */}
          <div>
            <h3 className="text-sm font-semibold text-primary-light mb-4 uppercase tracking-wider">Retail</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`${RETAIL_APP_URL}/retail`} 
                  className="text-sm text-border-subtle hover:text-zoom-fuchsia transition-colors inline-flex items-center gap-2 group"
                >
                  Get Started
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${RETAIL_APP_URL}/retail/login`} 
                  className="text-sm text-border-subtle hover:text-zoom-fuchsia transition-colors inline-flex items-center gap-2 group"
                >
                  Login
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${RETAIL_APP_URL}/retail/pricing`} 
                  className="text-sm text-border-subtle hover:text-zoom-fuchsia transition-colors inline-flex items-center gap-2 group"
                >
                  Pricing
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${RETAIL_APP_URL}/retail/features`} 
                  className="text-sm text-border-subtle hover:text-zoom-fuchsia transition-colors inline-flex items-center gap-2 group"
                >
                  Features
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-primary-light mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/privacy`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Privacy Policy
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/terms`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Terms of Service
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/gdpr`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  GDPR Policy
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={`${SHOPIFY_APP_URL}/shopify/contact`} 
                  className="text-sm text-border-subtle hover:text-ice-accent transition-colors inline-flex items-center gap-2 group"
                >
                  Contact Us
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-border-subtle text-center md:text-left">
              © {new Date().getFullYear()} Astronote. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-border-subtle">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ice-accent" />
                Built with ❤️ for businesses
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
