import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TravelCuttingEdgeTechSection from './TravelCuttingEdgeTechSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import TravelExpertiseServices from './TravelExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import { ArrowRight } from 'lucide-react';

export const TravelSoftwareDevelopmentService = () => {
  // 6 Benefits Cards Grid (Exact 1:1 Match with Outline SVG Icons)
  const travelBenefits = [
    {
      title: 'Unified Multi-Supplier Inventory & GDS Integrations',
      desc: 'Seamless connections with Amadeus, Sabre, Travelport, HotelBeds, and direct airline NDC APIs guaranteeing real-time seat and room availability.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M6 24h36M24 6a27 27 0 0 1 0 36M24 6a27 27 0 0 0 0 36" />
        </svg>
      )
    },
    {
      title: 'Sub-Second Search & Instant Booking Confirmation',
      desc: 'Ultra-fast caching and parallel query dispatching ensuring your travelers browse complex itineraries and check out within seconds without dropouts.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <polyline points="24 12 24 24 32 28" />
          <path d="M10 24h3M35 24h3" />
        </svg>
      )
    },
    {
      title: 'AI-Driven Dynamic Pricing & Revenue Optimization',
      desc: 'Machine learning algorithms continuously assess flight demand, competitor rates, and hotel occupancy to maximize margin yield on every reservation.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="8 36 18 24 28 30 40 14" />
          <polyline points="32 14 40 14 40 22" />
          <circle cx="40" cy="14" r="2" fill="#0084D1" />
          <line x1="8" y1="40" x2="40" y2="40" />
        </svg>
      )
    },
    {
      title: 'Automated Vouchers, Invoicing & Multi-Currency',
      desc: 'Immediate PDF e-ticket generation, dynamic invoice splitting, and multi-currency global payment processing with zero manual reconciliation overhead.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <path d="M16 35l2 2 4-4" />
          <line x1="25" y1="35" x2="31" y2="35" />
          <circle cx="37" cy="11" r="3" />
          <path d="M37 6v2M37 14v2M32 11h2M40 11h2" />
        </svg>
      )
    },
    {
      title: 'Interactive Offline Maps & Real-Time Flight Telemetry',
      desc: 'GPS wayfinding, offline mobile itinerary navigation, automated gate-change alerts, and dynamic trip updates keeping travelers informed 24/7.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 12 18 6 30 12 42 6 42 36 30 42 18 36 6 42" />
          <line x1="18" y1="6" x2="18" y2="36" />
          <line x1="30" y1="12" x2="30" y2="42" />
          <circle cx="24" cy="24" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Omni-Channel Cross-Platform Mobile & Web Experience',
      desc: 'High-performing responsive web platforms and native iOS/Android applications allowing travelers to plan, book, and manage journeys on any screen.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="28" rx="4" />
          <line x1="8" y1="18" x2="40" y2="18" />
          <circle cx="16" cy="28" r="2" fill="#0084D1" />
          <line x1="24" y1="28" x2="32" y2="28" strokeWidth="2" />
        </svg>
      )
    }
  ];

  // Success Stories (Exact 1:1 Match to Reference Portfolio)
  const travelSuccessCards = [
    {
      id: 1,
      title: 'Omni-Channel Global Online Travel Agency (OTA) Booking Platform',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Cloud-Native Hotel Channel Manager & Property Management System',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'AI-Driven Dynamic Vacation Packaging & Tour Operator Engine',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Firevy.Co Branded)
  const travelFaqs = [
    {
      question: '1. What is Travel Software Development?',
      answer: 'Travel Software Development entails engineering end-to-end digital solutions for travel agencies, tour operators, airlines, hoteliers, and corporate travel managers. This includes online booking engines, GDS/NDC integrations, hotel property management systems (PMS), mobile travel apps, and dynamic packaging platforms.'
    },
    {
      question: '2. Which GDS and travel suppliers can you integrate with?',
      answer: 'We integrate with all leading Global Distribution Systems (Amadeus, Sabre, Travelport, Galileo), hotel bed banks (HotelBeds, WebBeds, Agoda), car rental APIs (Hertz, Avis, Rentalcars), and direct airline NDC protocols to give your platform comprehensive global inventory.'
    },
    {
      question: '3. What is the difference between B2B and B2C travel portals?',
      answer: 'A B2C travel portal serves end travelers with intuitive search, retail pricing, instant card checkout, and mobile vouchers. A B2B travel portal allows sub-agents, corporate clients, and travel brokers to manage markups, credit limits, multi-tier commission structures, and bulk booking workflows.'
    },
    {
      question: '4. How do you handle real-time inventory updates and avoid double-bookings?',
      answer: 'We architect two-way synchronization engines using WebSockets, automated webhook listeners, and distributed lock managers (Redis). This ensures room availability, seat selections, and price changes reflect across all connected channels simultaneously in real time.'
    },
    {
      question: '5. Can you build a custom mobile app for our travel brand?',
      answer: 'Yes. We engineer feature-rich iOS and Android mobile travel apps with offline itinerary access, GPS navigation, real-time push notifications for flight delays/gate changes, mobile boarding passes, and in-app customer support chat.'
    },
    {
      question: '6. Does your travel software support dynamic vacation packaging?',
      answer: 'Yes. Our dynamic packaging engines allow travelers to combine flights, hotel accommodations, car rentals, travel insurance, and local sightseeing tours into a single custom itinerary with real-time bundled discounts.'
    },
    {
      question: '7. How do you ensure multi-currency payments and fraud protection?',
      answer: 'We integrate global payment gateways (Stripe, Adyen, PayPal, Worldpay) with 3D Secure 2.0, multi-currency settlement, localized payment methods (Apple Pay, Google Pay, Alipay), and automated anti-fraud velocity checks.'
    },
    {
      question: '8. How long does it take to build a custom travel portal?',
      answer: 'A customized booking MVP with core GDS flight and hotel integration typically launches within 8 to 12 weeks. Large-scale enterprise travel ecosystems featuring dynamic packaging, B2B agent hierarchies, and custom PMS systems take approximately 3 to 6 months.'
    },
    {
      question: '9. How can we get started with Firevy.Co for our travel tech project?',
      answer: 'Reach out through our consultation form with your project scope and business model. Our travel technology architects will deliver an architectural blueprint, supplier integration strategy, and cost estimate within 24 hours.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SEO
        title="Travel Software Development Company | Firevy.Co"
        description="Firevy.Co engineers enterprise travel software solutions. Online travel agencies (OTA), GDS aggregation, airline ticketing engines, hotel PMS, and mobile travel booking apps."
        keywords="travel software development, travel portal development company, GDS integration, airline reservation software, hotel booking engine, OTA platform development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Match to Reference Screenshot)                      */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading + Tagline + Metrics + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.14] font-sans"
                style={{ fontSize: 'clamp(30px, 4vw, 40px)' }}
              >
                Travel Software Development Services
              </h1>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                Empower travel agencies, tour operators, airlines, and hospitality brands with scalable, real-time travel technology solutions. From GDS/NDC flight and hotel aggregation to AI dynamic pricing and smart itinerary booking apps.
              </p>

              {/* 4 Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">5M+</div>
                  <div className="text-xs text-slate-600 font-medium">Bookings Processed</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">99.98%</div>
                  <div className="text-xs text-slate-600 font-medium">Search & API Uptime</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">50+</div>
                  <div className="text-xs text-slate-600 font-medium">Supplier Connectors</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">100%</div>
                  <div className="text-xs text-slate-600 font-medium">Automated Vouchers</div>
                </div>
              </div>

              {/* Single "Let's Talk" CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/ai_travel_app.png"
                  alt="Travel Software Development"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/taxi_booking_app_mockup.jpg';
                  }}
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. HIGH-PRECISION SOLUTIONS (Image Left + Content Right)                  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/waymark_map_app.webp"
                  alt="Travel Software Architecture & Itinerary Engine"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/taxi_booking_app_mockup.jpg';
                  }}
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for High-Precision Travel Software Development
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Modern travelers expect friction-free search, instant confirmation, transparent pricing, and comprehensive mobile accessibility. Fragmented legacy reservation engines, slow GDS lookups, and double-booking errors erode traveler confidence and eat into operator margins. Our specialized Travel Software Development services build modern, highly synchronized travel portals that transform the traveler journey.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By combining sub-second supplier aggregation with dynamic yield pricing algorithms, automated e-ticketing pipelines, and interactive GPS itinerary builders, we empower travel agencies, OTA operators, and hospitality leaders to scale their booking volume smoothly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 6. 100% CUSTOMIZABLE SOLUTIONS (Quote Card + Narrative)                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Travel Software Solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[320px] group transition-all duration-300 hover:shadow-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              {/* Speech bubble pointer arrow pointing right towards narrative */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Seamless booking,<br />real-time inventory &<br />zero-failure guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Building a competitive travel software ecosystem requires deep domain proficiency across global inventory protocols, complex commission structures, and multi-currency checkout. As a seasoned digital product engineering partner, we construct tailored travel technology solutions that directly address your business model and target audience.
              </p>
              <p>
                Our 100% personalized Travel Software Solutions are architected to support B2C online travel agencies, B2B wholesale agent networks, corporate travel management, and tour operator packaging portals. We equip ambitious travel brands with resilient, low-latency tools that turn site visitors into confirmed bookings.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION                                      */}
      {/* ========================================================================= */}
      <TravelCuttingEdgeTechSection companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES                                                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={travelSuccessCards}
        subtitle="Know Firevy.Co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER                                                   */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR TRAVEL SOFTWARE DEVELOPMENT                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Travel Software Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of travel tech engineering, multi-GDS aggregation, and high-load booking engine architecture have made our engineers trusted technology partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {travelBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.8px] leading-[1.68] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. OUR EXPERTISE IN DEDICATED TRAVEL SOFTWARE PLATFORMS                  */}
      {/* ========================================================================= */}
      <TravelExpertiseServices />

      {/* ========================================================================= */}
      {/* 13. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 14. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 15. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Travel Software Development Process We Follow"
        subtitle="Our comprehensive 6-phase engineering lifecycle from travel workflow analysis and GDS/NDC API architecture to secure payment integration, load testing, and cloud deployment."
      />

      {/* ========================================================================= */}
      {/* 16. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 17. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 18. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 19. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 20. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 21. FREQUENTLY ASKED QUESTIONS (SapphireFaqSection 1:1 Match)              */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below."
        faqs={travelFaqs}
        companyName="Firevy.Co"
      />

      {/* ========================================================================= */}
      {/* 22. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 23. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 24. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          heading="Ready to Modernize Your Travel Technology Platform?"
          text="Our travel technology architects and software engineers are ready to build your next-generation booking ecosystem."
          buttonText="Get Free Travel Tech Consultation"
        />
      </div>
    </div>
  );
};

export default TravelSoftwareDevelopmentService;
