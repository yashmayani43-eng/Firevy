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
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  Monitor,
  Smartphone,
  Sparkles,
  Layout,
  CheckCircle2,
  Flame
} from 'lucide-react';

export const FrontendDevelopmentService = () => {

  // 6 Benefits of Frontend Development
  const frontendBenefits = [
    {
      title: "Lightning Fast Load Times & Core Web Vitals",
      desc: "Optimized bundle splitting, lazy loading, image compression, and efficient DOM rendering to achieve sub-second page loads and top Google lighthouse scores.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "Pixel-Perfect & Adaptive Responsive UI",
      desc: "Fluid CSS grid/flexbox layouts customized for seamless multi-device rendering across mobile smartphones, tablets, laptops, and ultra-wide displays.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "SEO-Friendly Server-Side Rendering (SSR)",
      desc: "Leverage Next.js and Nuxt.js SSR / SSG capabilities to ensure deep search engine indexing, social meta tags, and instant dynamic content delivery.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Modular Component-Driven Architecture",
      desc: "Reusable React/Vue UI components styled with modern design tokens, reducing code duplication and accelerating long-term feature delivery.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: "Cross-Browser Compatibility & Standards",
      desc: "Rigorously tested across Chrome, Safari, Firefox, and Edge with automated cross-platform E2E test scripts.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "WCAG 2.1 Accessibility & Enterprise Security",
      desc: "Enforce ARIA standards, keyboard navigation, screen reader compatibility, and XSS/CSRF security headers across every web interface.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  // 6 Core Services
  const frontendServices = [
    {
      title: "React.js & Next.js Web App Development",
      desc: "Engineered high-speed Single Page Applications (SPAs) and server-rendered web portals with React 18, Next.js, and TypeScript."
    },
    {
      title: "Vue.js & Nuxt.js Frontend Engineering",
      desc: "Build lightweight, responsive enterprise dashboards, e-commerce storefronts, and interactive web tools powered by Vue 3 and Pinia."
    },
    {
      title: "Angular Enterprise Web Applications",
      desc: "Robust, scalable enterprise web platforms built with Angular, RxJS reactive state management, and TypeScript architecture."
    },
    {
      title: "Progressive Web App (PWA) Development",
      desc: "Offline-capable web applications with service workers, push notifications, native-like mobile installability, and instant loading."
    },
    {
      title: "Design System & UI Component Libraries",
      desc: "Creation of bespoke, branded UI component libraries using Storybook, TailwindCSS, and custom design system tokens."
    },
    {
      title: "Legacy Frontend Modernization & Migration",
      desc: "Refactor legacy jQuery or monolith frontend templates into modern micro-frontends with zero business downtime."
    }
  ];

  // 8 FAQs
  const frontendFaqs = [
    {
      q: "What modern frontend technologies and frameworks do you use?",
      a: "We specialize in React.js, Next.js, Vue.js, Nuxt.js, Angular, TypeScript, TailwindCSS, HTML5/CSS3, Vite, Webpack, Redux Toolkit, and Pinia."
    },
    {
      q: "How do you ensure web pages load quickly and rank high on Google?",
      a: "We implement Server-Side Rendering (SSR), Static Site Generation (SSG), automatic image optimization, code-splitting, tree-shaking, and efficient Caching/CDN setups to achieve top Core Web Vitals metrics."
    },
    {
      q: "Do your frontend web apps work seamlessly across all mobile devices?",
      a: "Yes! All frontend interfaces engineered by Firevy are fully responsive and mobile-first, ensuring fluid user experiences across smartphones, tablets, desktops, and large displays."
    },
    {
      q: "Can you build a custom design system for our company?",
      a: "Absolutely. We construct reusable UI component libraries with Storybook documentation, consistent design tokens, themes, and WCAG accessibility standards."
    },
    {
      q: "How do you integrate frontend code with backend REST APIs and GraphQL?",
      a: "We utilize strongly-typed API clients (Axios, Fetch, React Query, RTK Query, Apollo GraphQL) with automated error handling, caching, and state management."
    },
    {
      q: "What is a Progressive Web App (PWA) and should we build one?",
      a: "A PWA combines web reach with native mobile app features like offline support, home-screen installation, and push notifications without requiring app store submission."
    },
    {
      q: "What engagement models are available for hiring frontend developers?",
      a: "We provide flexible engagement models including Dedicated Frontend Engineers, Project-Based Fixed Price execution, and Hourly Staff Augmentation."
    },
    {
      q: "How fast can we onboard a dedicated frontend developer from Firevy?",
      a: "Following our initial technical scope and stack alignment, dedicated frontend engineers can be onboarded and active on your codebase within 48 to 72 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Frontend Development Services | ${BRAND.name}`}
        description="Build high-performance, pixel-perfect web interfaces with modern React, Next.js, Vue.js, Angular, and TypeScript frontend development services."
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION
         ========================================================================= */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-sky-100/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Frontend Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-[1.15]"
              >
                Frontend Development<br className="hidden sm:inline" /> Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Deliver captivating, pixel-perfect user experiences with custom frontend web engineering. We specialize in building responsive, high-speed single page applications, progressive web apps, and enterprise portals powered by React, Next.js, Vue.js, Angular, and TypeScript.
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

            {/* Right Hero Visual Illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[500px] relative"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <svg viewBox="0 0 500 350" className="w-full h-full drop-shadow-md">
                    <defs>
                      <linearGradient id="frontendBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F0F7FC" />
                        <stop offset="100%" stopColor="#E0F2FE" />
                      </linearGradient>
                      <filter id="softShadowFrontend" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#005F96" floodOpacity="0.12" />
                      </filter>
                    </defs>

                    {/* Backdrop Blob */}
                    <path
                      d="M 90,170 C 40,150 40,90 90,60 C 130,30 210,20 270,40 C 320,10 400,20 430,70 C 470,100 480,170 440,210 C 470,260 400,310 330,300 C 270,320 190,320 140,290 C 80,300 40,230 90,170 Z"
                      fill="url(#frontendBgGrad)"
                    />

                    {/* Web Browser Frame Center */}
                    <g transform="translate(140, 70)" filter="url(#softShadowFrontend)">
                      <rect x="0" y="0" width="220" height="180" rx="10" fill="#FFFFFF" stroke="#005F96" strokeWidth="2.5" />
                      {/* Browser Header Bar */}
                      <rect x="0" y="0" width="220" height="26" rx="10" fill="#005F96" />
                      <circle cx="15" cy="13" r="4" fill="#FF5F56" />
                      <circle cx="28" cy="13" r="4" fill="#FFBD2E" />
                      <circle cx="41" cy="13" r="4" fill="#27C93F" />
                      <rect x="60" y="6" width="145" height="14" rx="4" fill="#ffffff" opacity="0.2" />

                      {/* Code Graphic Mockup */}
                      <rect x="15" y="40" width="80" height="35" rx="6" fill="#F0F7FC" stroke="#BAE6FD" strokeWidth="1" />
                      <rect x="105" y="40" width="100" height="35" rx="6" fill="#F0F7FC" stroke="#BAE6FD" strokeWidth="1" />
                      <rect x="15" y="85" width="190" height="75" rx="6" fill="#0F172A" />
                      
                      {/* React/Vue/TS Code Snippet Mock */}
                      <text x="25" y="105" fill="#38BDF8" fontSize="10" fontFamily="monospace">&lt;React.Component&gt;</text>
                      <text x="35" y="122" fill="#34D399" fontSize="10" fontFamily="monospace">state: {'{ loading: false }'}</text>
                      <text x="35" y="139" fill="#FBBF24" fontSize="10" fontFamily="monospace">renderUI() =&gt; &lt;App /&gt;</text>
                      <text x="25" y="152" fill="#38BDF8" fontSize="10" fontFamily="monospace">&lt;/React.Component&gt;</text>
                    </g>

                    {/* Tech Badges Surrounding */}
                    <g transform="translate(70, 100)" filter="url(#softShadowFrontend)">
                      <rect x="0" y="0" width="70" height="36" rx="8" fill="#1E293B" />
                      <text x="35" y="22" fill="#61DAFB" fontSize="12" fontWeight="700" textAnchor="middle">React</text>
                    </g>

                    <g transform="translate(360, 90)" filter="url(#softShadowFrontend)">
                      <rect x="0" y="0" width="70" height="36" rx="8" fill="#1E293B" />
                      <text x="35" y="22" fill="#42B883" fontSize="12" fontWeight="700" textAnchor="middle">Vue.js</text>
                    </g>

                    <g transform="translate(70, 210)" filter="url(#softShadowFrontend)">
                      <rect x="0" y="0" width="75" height="36" rx="8" fill="#1E293B" />
                      <text x="37.5" y="22" fill="#3178C6" fontSize="12" fontWeight="700" textAnchor="middle">TypeScript</text>
                    </g>

                    <g transform="translate(360, 200)" filter="url(#softShadowFrontend)">
                      <rect x="0" y="0" width="70" height="36" rx="8" fill="#1E293B" />
                      <text x="35" y="22" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">Next.js</text>
                    </g>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        <div className="mt-8">
          <TrustMarquee />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUSTED FRONTEND DEVELOPMENT SERVICES PARTNER
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 rounded-3xl p-6 border border-sky-100 shadow-lg relative overflow-hidden text-center">
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-4">
                  <div className="relative w-48 h-48 bg-sky-100/70 rounded-full flex items-center justify-center p-3 border border-sky-200">
                    <div className="w-36 h-36 bg-gradient-to-br from-sky-600 to-blue-800 rounded-2xl shadow-xl p-4 border-2 border-white flex flex-col justify-between relative text-white">
                      <div className="flex justify-between items-center">
                        <Layout className="w-6 h-6 text-sky-200" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="text-center font-black text-sm">
                        Modern Web UI
                      </div>
                      <div className="bg-emerald-500 text-white rounded-md py-0.5 text-[9px] font-bold text-center">
                        Core Web Vitals 100%
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-sky-200 shadow-sm text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Pixel-Perfect Responsive Layouts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Trusted Frontend Development<br className="hidden sm:inline" /> Services Partner
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                As an industry-leading Frontend Development Services partner, Firevy converts complex user interface requirements into intuitive, blazing-fast web applications. Our engineers leverage modern frontend frameworks, strict component design systems, and responsive CSS architectures to maximize user engagement and business conversion rates.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">Sub-Second</div>
                  <div className="text-xs font-medium text-slate-500">Speed Optimization</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">100% Responsive</div>
                  <div className="text-xs font-medium text-slate-500">Multi-Device Compatible</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">SEO-Ready</div>
                  <div className="text-xs font-medium text-slate-500">SSR & SSG Next.js</div>
                </div>
              </div>
            </div>

          </div>
        </Container>

        <div className="mt-14">
          <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROFESSIONAL CUSTOM FRONTEND DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Professional Custom frontend development services
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
                  Engineered for Lightning Speed, High Engagement, and Flawless User Interfaces
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our custom frontend engineering teams craft scalable web architectures using state-of-the-art JavaScript and TypeScript ecosystems. From designing interactive SaaS dashboards to building high-concurrency e-commerce storefronts, we ensure your web presence is fast, accessible, and resilient.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Whether you need a brand-new Next.js application or want to modernize legacy frontend templates into a reusable React UI component library, Firevy delivers clean, maintainable, and fully tested code aligned with global web standards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: PREMIUM SERVICES GRID
         ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* =========================================================================
          SECTION 5: CORE SERVICES GRID (6 Cards)
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              Our Frontend Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Tailored frontend web development solutions for startups, scale-ups, and global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {frontendServices.map((service, idx) => (
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
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: PROUD AWARDS BANNER
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          SECTION 7: BENEFITS GRID (6 Cards)
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              Key Advantages of Frontend Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Discover why leading organizations trust Firevy for high-impact web engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {frontendBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all duration-300 text-left space-y-4"
              >
                <div className="p-3 bg-white rounded-xl inline-block shadow-2xs border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: HIRING MODELS
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          SECTION 9: INNOVATIVE SOLUTIONS VIDEO SECTION
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          SECTION 10: PROCESS WE FOLLOW
         ========================================================================= */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our structured frontend engineering lifecycle ensures pixel-perfect UI execution, automated CI/CD deployment, and high performance." />

      {/* =========================================================================
          SECTION 11: OUR STORY THEIR WORDS
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          SECTION 12: TRUSTED BRANDS GRID
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 13: SUCCESS MATRIX GRID
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 14: FEATURED IN BRANDS
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          SECTION 15: CASE STUDIES
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SECTION 16: SAPPHIRE FAQ SECTION
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Explore answers to common questions about our frontend development services."
        faqs={frontendFaqs}
      />

      {/* =========================================================================
          SECTION 17: RECENT BLOGS
         ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          SECTION 18: WHAT SETS US APART
         ========================================================================= */}
      <WhatSetsUsApartSection />
    </div>
  );
};

export default FrontendDevelopmentService;
