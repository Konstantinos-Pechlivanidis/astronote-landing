import GlassCard from '../components/ui/GlassCard';
import GlassButton from '../components/ui/GlassButton';
import GlassBadge from '../components/ui/GlassBadge';
import GradientText from '../components/ui/GradientText';
import Icon from '../components/ui/Icon';
import ImageLightbox from '../components/ui/ImageLightbox';
import SEO from '../components/SEO';
import { SHOPIFY_APP_URL, RETAIL_APP_URL } from '../utils/constants';

export default function Landing() {
  const shopifyScreenshots = [
    {
      src: '/shopify-images/campaigns.png',
      alt: 'Shopify Campaigns Dashboard',
      title: 'Campaign Management',
      description: 'Create and manage SMS campaigns directly from your Shopify admin.',
    },
    {
      src: '/shopify-images/create_campaign.png',
      alt: 'Create Campaign in Shopify',
      title: 'Campaign Builder',
      description: 'Intuitive campaign creation with audience targeting and scheduling.',
    },
    {
      src: '/shopify-images/reports.png',
      alt: 'Shopify Reports & Analytics',
      title: 'Analytics & Reports',
      description: 'Track performance with detailed analytics and conversion metrics.',
    },
  ];

  const retailScreenshots = [
    {
      src: '/retail-images/dashboard.png',
      alt: 'Retail Dashboard',
      title: 'Dashboard Overview',
      description: 'Complete view of your SMS marketing performance and customer insights.',
    },
    {
      src: '/retail-images/create_campaign.png',
      alt: 'Create Campaign in Retail',
      title: 'Campaign Creation',
      description: 'Build targeted SMS campaigns with advanced segmentation options.',
    },
    {
      src: '/retail-images/automations.png',
      alt: 'Retail Automations',
      title: 'Automation Workflows',
      description: 'Set up automated SMS workflows for customer engagement.',
    },
  ];

  const sharedFeatures = [
    {
      icon: 'sms',
      title: 'Send SMS Campaigns',
      description: 'Reach customers instantly with targeted SMS messages. 98% open rates and instant delivery mean your messages get seen.',
    },
    {
      icon: 'automation',
      title: 'Automate Workflows',
      description: 'Set up automated messages for orders, birthdays, and customer events. Save time while increasing engagement.',
    },
    {
      icon: 'analytics',
      title: 'Track Results',
      description: 'See delivery rates, opens, clicks, and conversions in real-time. Make data-driven decisions to improve performance.',
    },
    {
      icon: 'segment',
      title: 'Audience Segmentation',
      description: 'Target the right customers with segmentation based on behavior, preferences, and purchase history.',
    },
  ];

  const shopifyFeatures = [
    {
      icon: 'integration',
      title: 'Shopify Integration',
      description: 'Seamlessly sync with your Shopify store. Customer data, orders, and products sync automatically.',
    },
    {
      icon: 'store',
      title: 'Storefront Opt-in',
      description: 'Customizable SMS opt-in forms that integrate with your store theme. Collect phone numbers directly from your storefront.',
    },
    {
      icon: 'campaign',
      title: 'Discount Codes',
      description: 'Create and distribute discount codes through SMS campaigns. Track redemption rates in real-time.',
    },
    {
      icon: 'dashboard',
      title: 'Embedded Dashboard',
      description: 'Manage everything from your Shopify admin. No need to switch between platforms.',
    },
  ];

  const retailFeatures = [
    {
      icon: 'nfc',
      title: 'NFC Tags',
      description: 'Physical NFC tags for in-store opt-ins and visit confirmations. Connect online and offline customer experiences.',
    },
    {
      icon: 'connect',
      title: 'Opt-in Forms',
      description: 'Customizable opt-in forms for collecting customer phone numbers in-store or online.',
    },
    {
      icon: 'analytics',
      title: 'Visit Tracking',
      description: 'Track in-store visits and conversions from your SMS campaigns. Measure true ROI.',
    },
    {
      icon: 'target',
      title: 'Location-Based',
      description: 'Target customers based on store location and visit history. Personalize messages at scale.',
    },
  ];

  const results = [
    {
      number: '98%',
      label: 'Open Rate',
      description: 'SMS messages are read within minutes',
      icon: 'check',
    },
    {
      number: '10x',
      label: 'Better ROI',
      description: 'Compared to email marketing',
      icon: 'analytics',
    },
    {
      number: '3 min',
      label: 'Average Read Time',
      description: 'Customers read SMS instantly',
      icon: 'sms',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Astronote',
    applicationCategory: 'MarketingApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'SMS Marketing Platform',
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Astronote',
    url: SHOPIFY_APP_URL,
    description: 'SMS Marketing for Shopify and Retail Businesses. Grow your business with SMS marketing that converts.',
    sameAs: [],
  };

  return (
    <>
      <SEO
        title="SMS Marketing That Converts - Astronote"
        description="Grow your business with SMS marketing. Available for Shopify stores and retail businesses. 98% open rates, instant delivery, better conversions."
        path="/"
        keywords="SMS marketing, Shopify SMS, retail SMS, text message marketing, SMS campaigns"
        jsonLd={[structuredData, organizationData]}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-label="Hero section">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-surface-dark to-bg-dark">
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-ice-accent/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative max-w-[1200px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <GlassBadge variant="ice" className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs sm:text-sm">
                <Icon name="sms" size="sm" variant="ice" />
                <span>SMS Marketing That Converts</span>
              </GlassBadge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="block mb-2">Grow Your Business with</span>
                <GradientText>Astronote SMS</GradientText>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-border-subtle max-w-3xl mx-auto mb-3 sm:mb-4 leading-relaxed px-4">
                <strong className="text-primary-light">Two powerful solutions</strong> for 
                <span className="text-ice-accent"> Shopify stores</span> and 
                <span className="text-cyan-accent"> retail businesses</span>. 
                Reach customers instantly, drive sales, and grow faster.
              </p>

              <p className="text-base sm:text-lg text-border-subtle max-w-2xl mx-auto mb-6 sm:mb-10 px-4">
                Connect with customers where they spend most of their time—their phones. 
                98% open rates. Instant delivery. Better conversions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  href={`${SHOPIFY_APP_URL}/shopify`}
                  className="group w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    For Shopify Stores
                    <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassButton>
                <GlassButton 
                  variant="cyan" 
                  size="lg" 
                  href={`${RETAIL_APP_URL}/retail`}
                  className="group w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    For Retail Businesses
                    <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassButton>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-border-subtle px-4">
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" variant="ice" />
                  <span>Free trial available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-accent font-bold">98%</span>
                  <span>open rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" variant="ice" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Why SMS Marketing Works</h2>
              <p className="text-base sm:text-lg text-border-subtle max-w-2xl mx-auto px-4">
                SMS delivers results that email can't match. Here's what you can expect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {results.map((result, index) => (
                <GlassCard key={index} className="text-center p-6 sm:p-8 group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-ice-accent/20 group-hover:bg-ice-accent/30 transition-colors">
                      <Icon name={result.icon} size="lg" variant="ice" />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-ice-accent mb-3">{result.number}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{result.label}</h3>
                  <p className="text-sm sm:text-base text-border-subtle">{result.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Shopify Product Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/20 via-transparent to-surface-dark/20" />
          <div className="relative max-w-[1400px] mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <GlassBadge variant="ice" className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-xs sm:text-sm">
                <Icon name="store" size="sm" variant="ice" />
                <span>For Shopify Stores</span>
              </GlassBadge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">SMS Marketing Built for Shopify</h2>
              <p className="text-base sm:text-lg md:text-xl text-border-subtle max-w-3xl mx-auto leading-relaxed">
                Seamlessly integrated with your Shopify store. Manage campaigns, sync customer data, 
                and track results—all from your Shopify admin dashboard.
              </p>
            </div>

            {/* Screenshots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {shopifyScreenshots.map((screenshot, index) => (
                <div key={index} className="group">
                  <GlassCard variant="ice" className="p-0 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                    <div className="relative bg-gradient-to-b from-neutral-surface-primary to-neutral-surface-secondary p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 h-6 rounded bg-neutral-border/30" />
                      </div>
                      <ImageLightbox 
                        imageSrc={screenshot.src} 
                        imageAlt={screenshot.alt}
                        className="relative rounded-lg overflow-hidden shadow-glass-light-lg bg-white"
                      >
                        <img 
                          src={screenshot.src} 
                          alt={screenshot.alt}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = '/placeholder.svg';
                            e.target.alt = 'Screenshot placeholder';
                          }}
                        />
                      </ImageLightbox>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-light">{screenshot.title}</h3>
                      <p className="text-sm sm:text-base text-border-subtle">{screenshot.description}</p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {shopifyFeatures.map((feature, index) => (
                <GlassCard key={index} variant="ice" className="p-6 text-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-ice-accent/20 group-hover:bg-ice-accent/30 transition-colors">
                      <Icon name={feature.icon} size="lg" variant="ice" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-light">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-border-subtle leading-relaxed">{feature.description}</p>
                </GlassCard>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <GlassButton 
                variant="primary" 
                size="lg" 
                href={`${SHOPIFY_APP_URL}/shopify`}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Get Started with Shopify
                  <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                </span>
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Retail Product Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-accent/5 to-transparent" />
          <div className="relative max-w-[1400px] mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <GlassBadge variant="cyan" className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-xs sm:text-sm">
                <Icon name="nfc" size="sm" variant="cyan" />
                <span>For Retail Businesses</span>
              </GlassBadge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">SMS Marketing for Physical Stores</h2>
              <p className="text-base sm:text-lg md:text-xl text-border-subtle max-w-3xl mx-auto leading-relaxed">
                Connect online and offline experiences. Use NFC tags, opt-in forms, and location-based 
                targeting to engage customers both in-store and online.
              </p>
            </div>

            {/* Screenshots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {retailScreenshots.map((screenshot, index) => (
                <div key={index} className="group">
                  <GlassCard variant="cyan" className="p-0 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                    <div className="relative bg-gradient-to-b from-neutral-surface-primary to-neutral-surface-secondary p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 h-6 rounded bg-neutral-border/30" />
                      </div>
                      <ImageLightbox 
                        imageSrc={screenshot.src} 
                        imageAlt={screenshot.alt}
                        className="relative rounded-lg overflow-hidden shadow-glass-light-lg bg-white"
                      >
                        <img 
                          src={screenshot.src} 
                          alt={screenshot.alt}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = '/placeholder.svg';
                            e.target.alt = 'Screenshot placeholder';
                          }}
                        />
                      </ImageLightbox>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-light">{screenshot.title}</h3>
                      <p className="text-sm sm:text-base text-border-subtle">{screenshot.description}</p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {retailFeatures.map((feature, index) => (
                <GlassCard key={index} variant="cyan" className="p-6 text-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-cyan-accent/20 group-hover:bg-cyan-accent/30 transition-colors">
                      <Icon name={feature.icon} size="lg" variant="cyan" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-light">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-border-subtle leading-relaxed">{feature.description}</p>
                </GlassCard>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <GlassButton 
                variant="cyan" 
                size="lg" 
                href={`${RETAIL_APP_URL}/retail`}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Get Started with Retail
                  <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                </span>
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Shared Features Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Everything You Need</h2>
              <p className="text-base sm:text-lg text-border-subtle max-w-2xl mx-auto">
                Powerful features available in both platforms to help you create, send, and track SMS campaigns that convert.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {sharedFeatures.map((feature, index) => (
                <GlassCard key={index} className="p-6 text-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-ice-accent/20 group-hover:bg-ice-accent/30 transition-colors">
                      <Icon name={feature.icon} size="lg" variant="ice" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-light">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-border-subtle leading-relaxed">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Comparison Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface-dark/30">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Choose Your Platform</h2>
              <p className="text-base sm:text-lg text-border-subtle max-w-2xl mx-auto">
                Astronote works for both Shopify stores and retail businesses. Pick the platform that fits your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Shopify Card */}
              <GlassCard variant="ice" className="p-6 sm:p-8 text-center group hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-ice-accent/20 group-hover:bg-ice-accent/30 transition-colors">
                    <Icon name="store" size="xl" variant="ice" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-primary-light">Shopify Stores</h3>
                <p className="text-sm sm:text-base text-border-subtle leading-relaxed mb-4 sm:mb-6">
                  Perfect for e-commerce stores on Shopify. Seamless integration with your store data, products, and customers.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="ice" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">Automatic customer sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="ice" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">Storefront opt-in forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="ice" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">Discount code integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="ice" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">Embedded admin dashboard</span>
                  </li>
                </ul>
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  href={`${SHOPIFY_APP_URL}/shopify`}
                  className="w-full group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started for Shopify
                    <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassButton>
              </GlassCard>

              {/* Retail Card */}
              <GlassCard variant="cyan" className="p-6 sm:p-8 text-center group hover:scale-[1.02] transition-all duration-300 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <GlassBadge variant="cyan" className="text-xs font-semibold">
                    Physical Stores
                  </GlassBadge>
                </div>
                <div className="flex justify-center mb-4 sm:mb-6 mt-4">
                  <div className="p-3 sm:p-4 rounded-xl bg-cyan-accent/20 group-hover:bg-cyan-accent/30 transition-colors">
                    <Icon name="nfc" size="xl" variant="cyan" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-primary-light">Retail Businesses</h3>
                <p className="text-sm sm:text-base text-border-subtle leading-relaxed mb-4 sm:mb-6">
                  Perfect for physical retail stores. NFC tags, opt-in forms, and in-store conversion tracking.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="cyan" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">NFC tag integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="cyan" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">In-store opt-in forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="cyan" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">Visit confirmation tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" size="sm" variant="cyan" className="mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-border-subtle">Conversion analytics</span>
                  </li>
                </ul>
                <GlassButton 
                  variant="cyan" 
                  size="lg" 
                  href={`${RETAIL_APP_URL}/retail`}
                  className="w-full group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started for Retail
                    <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassButton>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-surface-dark to-bg-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-ice-accent/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="relative max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Ready to Grow Your Business?</h2>
            <p className="text-base sm:text-lg md:text-xl text-border-subtle mb-6 sm:mb-10 leading-relaxed px-4">
              Start using SMS marketing to reach customers instantly, drive sales, and grow faster. 
              Choose the platform that fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 px-4">
              <GlassButton 
                variant="primary" 
                size="lg" 
                href={`${SHOPIFY_APP_URL}/shopify`}
                className="group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  For Shopify Stores
                  <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                </span>
              </GlassButton>
              <GlassButton 
                variant="cyan" 
                size="lg" 
                href={`${RETAIL_APP_URL}/retail`}
                className="group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  For Retail Businesses
                  <Icon name="arrowRight" size="sm" className="group-hover:translate-x-1 transition-transform" />
                </span>
              </GlassButton>
            </div>
            <p className="text-xs sm:text-sm text-border-subtle px-4">No credit card required • Free trial available • 98% open rates</p>
          </div>
        </section>
      </main>
    </>
  );
}
