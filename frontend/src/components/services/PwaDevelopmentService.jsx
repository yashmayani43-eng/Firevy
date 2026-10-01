import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TrustMarquee from '../home/TrustMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import BRAND from '../../constants/brand';
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Zap,
  Globe,
  Layers,
  Cpu,
  RefreshCw,
  Smartphone,
  Bell,
  WifiOff
} from 'lucide-react';

export const PwaDevelopmentService = () => {

  // 6 Core PWA Expertise Cards
  const pwaServices = [
    {
      title: "Custom Progressive Web App (PWA) Development",
      desc: "Architect fast, reliable, engaging web applications that combine native app functionalities with universal browser accessibility."
    },
    {
      title: "Service Worker & Offline Data Synchronization",
      desc: "Implement intelligent Service Worker caching strategies allowing your app to operate seamlessly in offline or low-connectivity environments."
    },
    {
      title: "Native Web Push Notifications",
      desc: "Engage users with real-time, targeted re-engagement notifications sent directly to desktop and mobile devices via Web Push API."
    },
    {
      title: "App Shell Architecture & Performance Tuning",
      desc: "Engineer light App Shell architectures that load instantly on initial launch, ensuring 100/100 Google Lighthouse performance scores."
    },
    {
      title: "Web App Manifest & Add-to-HomeScreen Experience",
      desc: "Create immersive full-screen native-like experiences with customized splash screens, app icons, and simple one-tap installation."
    },
    {
      title: "Legacy Web App to PWA Modernization",
      desc: "Refactor legacy web apps into progressive web applications with enhanced caching, HTTPS security, and responsive touch controls."
    }
  ];

  // 8 FAQs
  const pwaFaqs = [
    {
      q: "What is a Progressive Web App (PWA) and how does it benefit businesses?",
      a: "A PWA is a web application built with modern web technologies (HTML, CSS, JavaScript, WebAssembly) that delivers native app-like user experiences including offline capability, push notifications, and fast loading speeds without requiring App Store downloads."
    },
    {
      q: "Do PWAs require app store approvals for iOS and Android?",
      a: "No. Users can install PWAs directly from their web browsers with a single tap, bypassing App Store and Google Play Store submission processes and fee commissions."
    },
    {
      q: "Can PWAs function without an active internet connection?",
      a: "Yes! By utilizing Service Workers and Cache Storage APIs, PWAs cache essential assets and data, allowing users to browse content and queue actions even when completely offline."
    },
    {
      q: "Are PWAs indexed by Google for search engine optimization (SEO)?",
      a: "Yes. Because PWAs are built on standard web URLs, every page can be indexed and ranked by Google and other search engines, driving organic search traffic."
    },
    {
      q: "How do PWA development costs compare to native iOS and Android apps?",
      a: "Developing a single cross-platform PWA typically costs 50-60% less than building separate native iOS (Swift) and Android (Kotlin) apps, while dramatically reducing ongoing maintenance overhead."
    },
    {
      q: "Can PWAs send push notifications to users?",
      a: "Yes. Using the Web Push API, PWAs can send timely notifications to Android devices, desktop Chrome/Firefox/Edge, and macOS/iOS Safari."
    },
    {
      q: "What engagement models do you offer for hiring PWA developers?",
      a: "We offer flexible engagement models including Dedicated PWA Engineers, Fixed-Price Sprint Delivery, and Hourly Staff Augmentation."
    },
    {
      q: "How quickly can Firevy start on our PWA project?",
      a: "Following technical scoping and requirements alignment, dedicated PWA developers can onboard and begin coding within 48 to 72 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Progressive Web App Development Company in USA | ${BRAND.name}`}
        description="Progressive Web Apps Combine The Native App Experience With The Universality And Speed Of Web Browsers. Contact Firevy today."
      />

      {/* =========================================================================
          IMAGE 1: HERO SECTION
         ========================================================================= */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services/frontend-development" className="hover:text-[#005F96] transition-colors">Front End Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Progressive Web App</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-[1.15]"
              >
                Progressive Web App<br className="hidden sm:inline" /> Development Company in USA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Progressive Web Apps Combine The Native App Experience With The Universality And Speed Of Web Browsers
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004a77] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Visual Illustration (PWA Vector Graphic) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[520px] relative"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <svg viewBox="0 0 520 360" className="w-full h-full drop-shadow-md">
                    <defs>
                      <linearGradient id="pwaHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EBF5FF" />
                        <stop offset="100%" stopColor="#E0F2FE" />
                      </linearGradient>
                      <filter id="pwaHeroShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#005F96" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Window Screen Display */}
                    <rect x="50" y="50" width="340" height="240" rx="16" fill="#E0F2FE" stroke="#7C3AED" strokeWidth="2" />
                    
                    {/* Small PWA Browser Card */}
                    <g transform="translate(30, 90)" filter="url(#pwaHeroShadow)">
                      <rect x="0" y="0" width="105" height="65" rx="8" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="1.5" />
                      <rect x="0" y="0" width="105" height="14" rx="8" fill="#7C3AED" />
                      <text x="8" y="10" fill="white" fontSize="7" fontWeight="bold">PWA</text>
                      <line x1="8" y1="28" x2="65" y2="28" stroke="#7C3AED" strokeWidth="2" />
                      <line x1="8" y1="38" x2="85" y2="38" stroke="#CBD5E1" strokeWidth="2" />
                      <line x1="8" y1="48" x2="50" y2="48" stroke="#CBD5E1" strokeWidth="2" />
                    </g>

                    {/* PWA Purple Floating Badge */}
                    <g transform="translate(165, 45)" filter="url(#pwaHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#7C3AED" />
                      <text x="7" y="36" fill="white" fontSize="18" fontWeight="900" fontFamily="sans-serif">PWA</text>
                    </g>

                    {/* Tech Cubes */}
                    <g transform="translate(230, 45)" filter="url(#pwaHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#60A5FA" />
                      <circle cx="27.5" cy="27.5" r="10" fill="none" stroke="white" strokeWidth="3" />
                    </g>

                    <g transform="translate(295, 45)" filter="url(#pwaHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#60A5FA" />
                      <rect x="17" y="18" width="21" height="6" rx="2" fill="white" />
                      <rect x="17" y="27" width="21" height="6" rx="2" fill="white" />
                      <rect x="17" y="36" width="21" height="6" rx="2" fill="white" />
                    </g>

                    <g transform="translate(195, 115)" filter="url(#pwaHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#60A5FA" />
                      <path d="M 18 37 L 37 18 M 32 18 L 37 23 M 18 32 L 23 37" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    <g transform="translate(260, 115)" filter="url(#pwaHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#7C3AED" />
                      <path d="M 18 35 A 13 13 0 0 1 37 35" fill="none" stroke="white" strokeWidth="3" />
                      <line x1="27.5" y1="35" x2="33" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* Developer Person Vector Illustration */}
                    <g transform="translate(340, 140)">
                      <circle cx="45" cy="30" r="14" fill="#005F96" />
                      <path d="M 25 55 C 25 42, 65 42, 65 55 L 75 110 L 15 110 Z" fill="#0284C7" />
                      <rect x="15" y="110" width="60" height="25" fill="#1E293B" rx="4" />
                      <polygon points="5,85 45,85 55,70 15,70" fill="#0F172A" />
                      <rect x="5" y="85" width="40" height="4" fill="#64748B" rx="1" />
                    </g>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* IMAGE 1: Brand Logo Strip */}
        <div className="mt-8">
          <TrustMarquee />
        </div>
      </section>

      {/* =========================================================================
          IMAGE 1 & 2: GET PROGRESSIVE WEB APP DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Graphic (Person at Desk with PWA Monitor) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[460px] relative">
                <svg viewBox="0 0 460 320" className="w-full h-auto drop-shadow-md">
                  <rect x="50" y="240" width="360" height="12" fill="#1E293B" rx="2" />
                  <rect x="90" y="252" width="12" height="60" fill="#334155" />
                  <rect x="360" y="252" width="12" height="60" fill="#334155" />

                  <rect x="120" y="70" width="180" height="130" rx="8" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="3" />
                  <rect x="120" y="70" width="180" height="24" rx="8" fill="#7C3AED" />
                  <circle cx="134" cy="82" r="3" fill="#FF5F56" />
                  <circle cx="144" cy="82" r="3" fill="#FFBD2E" />
                  <circle cx="154" cy="82" r="3" fill="#27C93F" />
                  <text x="210" y="130" fill="#7C3AED" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">PWA</text>
                  <line x1="150" y1="150" x2="270" y2="150" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 4" />

                  <rect x="195" y="200" width="30" height="40" fill="#94A3B8" />
                  <rect x="175" y="235" width="70" height="5" fill="#64748B" rx="2" />

                  <path d="M 330 140 C 330 120, 360 120, 360 140 C 360 160, 320 190, 310 240 Z" fill="#0284C7" />
                  <circle cx="345" cy="120" r="16" fill="#005F96" />
                  <rect x="300" y="190" width="80" height="50" rx="8" fill="#475569" />
                </svg>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-5 text-left font-sans">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Get Progressive Web App<br className="hidden sm:inline" /> Development Services
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  It uses modern web protocols and Service Workers throughout the client-side infrastructure. Engage with us for advanced Progressive Web App Development that will positively impact your company. These applications will be inventive, offline-capable, and highly influential.
                </p>
                <p>
                  Because we are a Progressive Web App Development Company of the highest caliber, we can effortlessly satisfy our customers' expectations and carry out their activities as they have chosen. You can Hire PWA Developers to swiftly construct web apps using native-like installation and push notifications.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 2: BRIEF ABOUT OUR PROGRESSIVE WEB APP DEVELOPMENT
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-5 text-left font-sans">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Progressive Web App<br className="hidden sm:inline" /> Development
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Because PWAs are accessible for both desktop and mobile platforms without app store friction, they have the advantage of requiring users to download zero heavy binaries. Another incredible benefit of progressive web app development is how simple it is to re-engage users with Web Push notifications and offline data caching.
                </p>
                <p>
                  PWAs have access to native hardware APIs including camera, geolocation, device orientation, and background sync, enabling businesses to deliver native app performance over standard web URLs.
                </p>
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] relative">
                <svg viewBox="0 0 440 340" className="w-full h-auto drop-shadow-md">
                  <rect x="180" y="20" width="160" height="290" rx="24" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="4" />
                  <rect x="190" y="30" width="140" height="270" rx="16" fill="#F0F9FF" />
                  <rect x="235" y="35" width="50" height="6" rx="3" fill="#94A3B8" />

                  <rect x="205" y="60" width="50" height="50" rx="10" fill="#E0F2FE" stroke="#7C3AED" strokeWidth="1.5" />
                  <rect x="265" y="60" width="50" height="50" rx="10" fill="#7C3AED" />
                  <rect x="205" y="120" width="50" height="50" rx="10" fill="#7C3AED" />
                  <rect x="265" y="120" width="50" height="50" rx="10" fill="#E0F2FE" stroke="#7C3AED" strokeWidth="1.5" />
                  <rect x="205" y="180" width="50" height="50" rx="10" fill="#E0F2FE" stroke="#7C3AED" strokeWidth="1.5" />
                  <rect x="265" y="180" width="50" height="50" rx="10" fill="#7C3AED" />

                  <g transform="translate(60, 80)">
                    <circle cx="35" cy="30" r="14" fill="#005F96" />
                    <path d="M 15 50 C 15 40, 55 40, 55 50 L 65 140 L 5 140 Z" fill="#0284C7" />
                    <circle cx="65" cy="90" r="22" fill="#FFFFFF" stroke="#005F96" strokeWidth="3" />
                    <line x1="65" y1="90" x2="65" y2="78" stroke="#005F96" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="90" x2="74" y2="90" stroke="#005F96" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 3: CLUTCH TOP RATED BANNER
         ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          IMAGE 3: GET A 100% CUSTOMIZABLE PWA DEVELOPMENT BY EXPERTS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Get A 100% Customizable Progressive Web App Development By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 flex relative">
              <div className="w-full bg-[#EBF5FC] rounded-2xl p-8 sm:p-10 flex flex-col justify-center shadow-xs relative text-left border border-sky-100/60">
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EBF5FC] z-20" />

                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#005F96] fill-[#005F96]" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <h3 className="text-2xl sm:text-[28px] font-[800] text-[#005F96] tracking-tight leading-snug font-sans">
                  Fast, Offline-Capable, And Cross-Platform PWAs
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left font-sans">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our developers design integrated strategies using the speed and offline capabilities of PWA technology. Hire PWA Developers to create seamless websites, e-commerce stores, and enterprise web portals through which you communicate with your consumers.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                When you choose to outsource the development of your Progressive Web Application to our PWA App Development Company, you may anticipate receiving services of exceptional quality, specialized resources, sophisticated project management, and cost reductions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 4: OUR PREMIUM SERVICES GRID
         ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* =========================================================================
          IMAGE 4: THE EXPERTISE OF OUR PWA DEVELOPERS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3 font-sans">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              The Expertise Of Our Progressive Web App Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Our PWA Developers Have Years Of Expertise In Developing Progressive Web App Solutions For You. Our Expertise Includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pwaServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#005F96] flex items-center justify-center font-bold text-lg group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005F96] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9: PROUD AWARDS BANNER
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          SECTION 10: HIRING MODELS
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          SECTION 11: INNOVATIVE SOLUTIONS VIDEO SECTION
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          SECTION 12: PROCESS WE FOLLOW
         ========================================================================= */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile PWA engineering lifecycle ensures offline capability, Service Worker optimization, and seamless cloud deployment." />

      {/* =========================================================================
          SECTION 13: OUR STORY THEIR WORDS
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          SECTION 14: TRUSTED BRANDS GRID
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 15: SUCCESS MATRIX GRID
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 16: FEATURED IN BRANDS
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          SECTION 17: CASE STUDIES
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SECTION 18: SAPPHIRE FAQ SECTION
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Explore answers to common questions about our Progressive Web App development services."
        faqs={pwaFaqs}
      />

      {/* =========================================================================
          SECTION 19: RECENT BLOGS
         ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          SECTION 20: WHAT SETS US APART
         ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* =========================================================================
          SECTION 21: HAVE PROGRESSIVE WEB APP DEVELOPMENT CHALLENGE TO ADDRESS ?
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have Progressive Web App Development Challenge To Address ?",
          description: "Get Access To Top Progressive Web App Development To Transform Your Ideas Into A Robust Application",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          SECTION 22: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
         ========================================================================= */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default PwaDevelopmentService;
