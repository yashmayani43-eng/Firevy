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
                className="w-full max-w-[540px] relative"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <svg viewBox="0 0 540 380" className="w-full h-full drop-shadow-lg">
                    <defs>
                      <filter id="pwaShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#005F96" floodOpacity="0.18" />
                      </filter>
                      <filter id="pwaBadgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.12" />
                      </filter>

                      <linearGradient id="pwaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#4f46e5" />
                      </linearGradient>

                      <linearGradient id="pwaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#005F96" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>

                      <linearGradient id="pwaGreenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>

                    {/* Floating Badge 1: Top Left - Lighthouse Score */}
                    <g transform="translate(30, 45)" filter="url(#pwaBadgeShadow)">
                      <rect x="0" y="0" width="130" height="44" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                      <circle cx="22" cy="22" r="14" fill="#10b981" />
                      <text x="22" y="27" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">100</text>
                      <text x="78" y="22" fill="#0f172a" fontSize="12" fontWeight="800" fontFamily="sans-serif">Lighthouse</text>
                      <text x="78" y="35" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="sans-serif">Perf Score</text>
                    </g>

                    {/* Floating Badge 2: Top Right - Web Push Notifications */}
                    <g transform="translate(385, 40)" filter="url(#pwaBadgeShadow)">
                      <rect x="0" y="0" width="125" height="44" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                      <rect x="8" y="8" width="28" height="28" rx="8" fill="url(#pwaGrad1)" />
                      <path d="M22 17 C22 14, 24 14, 24 17 C26 18, 27 20, 27 23 L28 25 H16 L17 23 C17 20, 18 18, 22 17 Z M20 27 C20 28, 24 28, 24 27" stroke="#ffffff" strokeWidth="2" fill="none" />
                      <text x="78" y="22" fill="#0f172a" fontSize="12" fontWeight="800" fontFamily="sans-serif">Web Push</text>
                      <text x="78" y="35" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="sans-serif">Real-time Alert</text>
                    </g>

                    {/* Floating Badge 3: Middle Right - Service Worker */}
                    <g transform="translate(395, 220)" filter="url(#pwaBadgeShadow)">
                      <rect x="0" y="0" width="125" height="48" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                      <rect x="10" y="9" width="30" height="30" rx="8" fill="#0284c7" />
                      <path d="M20 24 L24 28 L31 18" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                      <text x="82" y="24" fill="#0f172a" fontSize="12" fontWeight="800" fontFamily="sans-serif">Offline Sync</text>
                      <text x="82" y="37" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="sans-serif">Service Worker</text>
                    </g>

                    {/* Floating Badge 4: Bottom Left - Add to Home Screen */}
                    <g transform="translate(20, 290)" filter="url(#pwaBadgeShadow)">
                      <rect x="0" y="0" width="140" height="46" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                      <rect x="8" y="7" width="30" height="30" rx="8" fill="url(#pwaGreenGrad)" />
                      <path d="M23 15 V29 M16 22 H30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                      <text x="87" y="23" fill="#0f172a" fontSize="12" fontWeight="800" fontFamily="sans-serif">Install PWA</text>
                      <text x="87" y="36" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="sans-serif">1-Tap Add</text>
                    </g>

                    {/* CENTER DESKTOP BROWSER MOCKUP */}
                    <g transform="translate(130, 70)" filter="url(#pwaShadow)">
                      <rect x="0" y="0" width="260" height="175" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="3" />
                      <rect x="8" y="8" width="244" height="159" rx="6" fill="#ffffff" />
                      <path d="M8 8 H252 V30 H8 Z" fill="#f8fafc" />
                      <circle cx="20" cy="19" r="3.5" fill="#ef4444" />
                      <circle cx="30" cy="19" r="3.5" fill="#f59e0b" />
                      <circle cx="40" cy="19" r="3.5" fill="#10b981" />
                      <rect x="58" y="14" width="130" height="11" rx="5" fill="#e2e8f0" />
                      <text x="123" y="22" fill="#64748b" fontSize="7" textAnchor="middle" fontFamily="sans-serif">https://pwa.app</text>

                      <rect x="18" y="40" width="224" height="60" rx="8" fill="url(#pwaGrad1)" />
                      <text x="30" y="60" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">Progressive Web App</text>
                      <text x="30" y="74" fill="#e0e7ff" fontSize="9" fontFamily="sans-serif">Instant Loading • Offline First</text>

                      <rect x="30" y="82" width="75" height="14" rx="7" fill="#ffffff" />
                      <text x="67" y="92" fill="#4f46e5" fontSize="7" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">● Add to Desktop</text>

                      <rect x="18" y="108" width="68" height="48" rx="6" fill="#f1f5f9" />
                      <rect x="96" y="108" width="68" height="48" rx="6" fill="#f1f5f9" />
                      <rect x="174" y="108" width="68" height="48" rx="6" fill="#f1f5f9" />
                    </g>

                    {/* SMARTPHONE OVERLAY ON RIGHT OF DESKTOP */}
                    <g transform="translate(260, 140)" filter="url(#pwaShadow)">
                      <rect x="0" y="0" width="120" height="220" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="3" />
                      <rect x="5" y="5" width="110" height="210" rx="16" fill="#ffffff" />
                      <rect x="40" y="10" width="40" height="8" rx="4" fill="#0f172a" />

                      <rect x="5" y="5" width="110" height="50" rx="16" fill="url(#pwaGrad2)" />
                      <text x="14" y="32" fill="#ffffff" fontSize="10" fontWeight="800" fontFamily="sans-serif">PWA Mobile</text>

                      <rect x="12" y="65" width="96" height="40" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                      <circle cx="28" cy="85" r="10" fill="url(#pwaGreenGrad)" />
                      <text x="45" y="82" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="sans-serif">Offline Ready</text>
                      <text x="45" y="92" fill="#10b981" fontSize="7" fontWeight="600" fontFamily="sans-serif">Service Worker</text>

                      <rect x="12" y="112" width="96" height="40" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                      <rect x="12" y="159" width="96" height="35" rx="6" fill="url(#pwaGrad1)" />
                      <text x="60" y="180" fill="#ffffff" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Install Application</text>
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
            
            {/* Left Column Graphic (PWA Architecture & Service Worker Engine) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[460px] relative">
                <svg viewBox="0 0 460 320" className="w-full h-auto drop-shadow-md">
                  <defs>
                    <filter id="pwaSec2Shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#005F96" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="pwaWorkstationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#005F96" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>

                  {/* NO BACKGROUND CONTAINER BOX - TRANSPARENT CANVAS */}
                  <g filter="url(#pwaSec2Shadow)">
                    {/* Workstation Monitor */}
                    <rect x="90" y="40" width="280" height="180" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="3" />
                    <rect x="100" y="50" width="260" height="160" rx="6" fill="#ffffff" />
                    {/* Header */}
                    <path d="M100 50 H360 V74 H100 Z" fill="url(#pwaWorkstationGrad)" />
                    <text x="115" y="66" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif">PWA Service Worker Engine</text>

                    {/* Service Worker Pipeline */}
                    <rect x="115" y="85" width="230" height="42" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="135" cy="106" r="10" fill="#10b981" />
                    <path d="M130 106 L134 110 L140 102" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    <text x="155" y="102" fill="#0f172a" fontSize="10" fontWeight="700" fontFamily="sans-serif">Cache API &amp; Background Sync</text>
                    <text x="155" y="114" fill="#64748b" fontSize="8" fontFamily="sans-serif">Zero latency offline fallback</text>

                    {/* Web Push Banner inside screen */}
                    <rect x="115" y="136" width="230" height="40" rx="8" fill="#7c3aed" />
                    <text x="130" y="153" fill="#ffffff" fontSize="10" fontWeight="800" fontFamily="sans-serif">Web Push Notification Triggered</text>
                    <text x="130" y="165" fill="#e0e7ff" fontSize="8" fontFamily="sans-serif">Sent to Chrome, Safari &amp; Edge</text>

                    {/* Monitor Stand */}
                    <rect x="210" y="220" width="40" height="30" fill="#64748b" rx="2" />
                    <rect x="170" y="250" width="120" height="8" fill="#475569" rx="4" />
                  </g>
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

            {/* Right Column Graphic (Native Hardware APIs & Mobile PWA) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] relative">
                <svg viewBox="0 0 440 340" className="w-full h-auto drop-shadow-md">
                  <defs>
                    <filter id="pwaSec3Shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#7c3aed" floodOpacity="0.16" />
                    </filter>
                    <linearGradient id="sec3PhoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>

                  {/* NO BACKGROUND RECTANGLE - TRANSPARENT CANVAS */}
                  {/* Floating Badge Left: Camera & Geolocation APIs */}
                  <g transform="translate(30, 60)" filter="url(#pwaSec3Shadow)">
                    <rect x="0" y="0" width="130" height="46" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    <rect x="8" y="8" width="30" height="30" rx="8" fill="#005F96" />
                    <text x="23" y="27" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">API</text>
                    <text x="82" y="23" fill="#0f172a" fontSize="11" fontWeight="800" fontFamily="sans-serif">Native Hardware</text>
                    <text x="82" y="36" fill="#64748b" fontSize="9" fontFamily="sans-serif">GPS &amp; Camera</text>
                  </g>

                  {/* Floating Badge Left 2: Offline Storage */}
                  <g transform="translate(40, 210)" filter="url(#pwaSec3Shadow)">
                    <rect x="0" y="0" width="125" height="46" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                    <rect x="8" y="8" width="30" height="30" rx="8" fill="#10b981" />
                    <path d="M18 23 L22 27 L29 18" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="78" y="23" fill="#0f172a" fontSize="11" fontWeight="800" fontFamily="sans-serif">IndexedDB</text>
                    <text x="78" y="36" fill="#64748b" fontSize="9" fontFamily="sans-serif">Offline Cache</text>
                  </g>

                  {/* Center Smartphone with Installed PWA Apps Grid */}
                  <g transform="translate(190, 25)" filter="url(#pwaSec3Shadow)">
                    <rect x="0" y="0" width="160" height="290" rx="28" fill="#0f172a" stroke="#334155" strokeWidth="3" />
                    <rect x="6" y="6" width="148" height="278" rx="22" fill="#ffffff" />
                    <rect x="55" y="14" width="50" height="6" rx="3" fill="#1e293b" />

                    <rect x="6" y="6" width="148" height="70" rx="22" fill="url(#sec3PhoneGrad)" />
                    <text x="20" y="45" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">PWA App Store</text>

                    <g transform="translate(18, 90)">
                      <rect x="0" y="0" width="32" height="32" rx="8" fill="#005F96" />
                      <rect x="42" y="0" width="32" height="32" rx="8" fill="#7c3aed" />
                      <rect x="84" y="0" width="32" height="32" rx="8" fill="#10b981" />

                      <rect x="0" y="42" width="32" height="32" rx="8" fill="#f59e0b" />
                      <rect x="42" y="42" width="32" height="32" rx="8" fill="#06b6d4" />
                      <rect x="84" y="42" width="32" height="32" rx="8" fill="#ec4899" />

                      <rect x="0" y="84" width="32" height="32" rx="8" fill="#8b5cf6" />
                      <rect x="42" y="84" width="32" height="32" rx="8" fill="#3b82f6" />
                      <rect x="84" y="84" width="32" height="32" rx="8" fill="#14b8a6" />
                    </g>

                    <rect x="16" y="235" width="128" height="32" rx="8" fill="url(#sec3PhoneGrad)" />
                    <text x="80" y="255" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Zero App Store Fee</text>
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
