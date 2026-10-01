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
  RefreshCw
} from 'lucide-react';

export const ReactJsDevelopmentService = () => {

  // 6 Core React.js Expertise Cards
  const reactServices = [
    {
      title: "Custom React.js Single Page App (SPA) Development",
      desc: "Architect fast, responsive, single-page web applications utilizing React.js, TypeScript, and modern component-driven architectures."
    },
    {
      title: "React Component Libraries & Design Systems",
      desc: "Develop accessible, reusable UI component libraries documented in Storybook with Tailwind CSS, Radix UI, and Shadcn UI primitives."
    },
    {
      title: "React Native Mobile App Development (iOS & Android)",
      desc: "Build cross-platform mobile apps using React Native with shared codebases, native device API bridges, and high-FPS animations."
    },
    {
      title: "State Management & Real-Time Data Pipelines",
      desc: "Architect global application state using Redux Toolkit, Zustand, TanStack React Query, and real-time WebSocket subscriptions."
    },
    {
      title: "React Microservices & GraphQL Integration",
      desc: "Connect React frontends with RESTful and GraphQL backend microservices built on Node.js, Python, Java, or .NET Core."
    },
    {
      title: "Legacy Codebase Migration to React & Audit",
      desc: "Refactor legacy jQuery, AngularJS, PHP, or older frontend stacks into modern React TypeScript components with zero downtime."
    }
  ];

  // 8 FAQs
  const reactFaqs = [
    {
      q: "What makes React.js the preferred choice for enterprise web applications?",
      a: "React.js offers a component-based architecture, virtual DOM for high-performance updates, declarative UI development, and a massive ecosystem of libraries backed by Meta."
    },
    {
      q: "Can React.js applications be optimized for search engines (SEO)?",
      a: "Yes! While plain React SPAs can be pre-rendered or augmented with hydration, we leverage Next.js or static site generation (SSG/SSR) to guarantee 100% search engine indexability."
    },
    {
      q: "What state management tools do your React developers use?",
      a: "We utilize industry-standard state management libraries including Redux Toolkit, Zustand, Context API for local state, and TanStack React Query for async server state."
    },
    {
      q: "Can we share code between our React web app and React Native mobile app?",
      a: "Yes! Up to 60-80% of business logic, state management store routines, utility functions, and API layer code can be shared across React web and React Native mobile apps."
    },
    {
      q: "Do you offer migration services from Angular, Vue, or jQuery to React?",
      a: "Yes. We perform step-by-step strangler-pattern migrations, converting legacy views into modern React components while keeping your production app running seamlessly."
    },
    {
      q: "How do you ensure React application performance and accessibility?",
      a: "We perform bundle size analysis, dynamic code-splitting via React.lazy, memoization (useMemo/useCallback), and enforce WCAG accessibility guidelines."
    },
    {
      q: "What engagement models do you offer for hiring React developers?",
      a: "We offer flexible engagement models including Dedicated React Engineers, Project-Based Fixed Price execution, and Hourly Staff Augmentation."
    },
    {
      q: "How quickly can Firevy onboard dedicated React.js developers?",
      a: "Following our technical alignment and requirements review, senior React.js developers can onboard and begin coding within 48 to 72 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`React JS Development Company in USA | ${BRAND.name}`}
        description="React.JS Is A Library That Is Effective At Generating Lightweight, Responsive, And High-Performance Single Page Applications. Contact Firevy today."
      />

      {/* =========================================================================
          IMAGE 1: HERO SECTION
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
            <Link to="/services/frontend-development" className="hover:text-[#005F96] transition-colors">Front End Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">React JS Development</span>
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
                React JS Development<br className="hidden sm:inline" /> Company in USA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                React.JS Is A Library That Is Effective At Generating Lightweight, Responsive, And High-Performance Single Page Applications
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

            {/* Right Hero Visual Illustration (React Atom Graphic) */}
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
                      <linearGradient id="reactHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EBF5FF" />
                        <stop offset="100%" stopColor="#E0F2FE" />
                      </linearGradient>
                      <filter id="reactHeroShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#005F96" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Blue Window Display */}
                    <rect x="50" y="50" width="340" height="240" rx="16" fill="#E0F2FE" stroke="#61DAFB" strokeWidth="2" />
                    
                    {/* Small REACT.JS Browser Card */}
                    <g transform="translate(30, 90)" filter="url(#reactHeroShadow)">
                      <rect x="0" y="0" width="105" height="65" rx="8" fill="#FFFFFF" stroke="#005F96" strokeWidth="1.5" />
                      <rect x="0" y="0" width="105" height="14" rx="8" fill="#005F96" />
                      <text x="8" y="10" fill="white" fontSize="7" fontWeight="bold">REACT.JS</text>
                      <line x1="8" y1="28" x2="65" y2="28" stroke="#61DAFB" strokeWidth="2" />
                      <line x1="8" y1="38" x2="85" y2="38" stroke="#CBD5E1" strokeWidth="2" />
                      <line x1="8" y1="48" x2="50" y2="48" stroke="#CBD5E1" strokeWidth="2" />
                    </g>

                    {/* React Atom Floating Badge */}
                    <g transform="translate(165, 45)" filter="url(#reactHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#20232A" />
                      <ellipse cx="27.5" cy="27.5" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(0 27.5 27.5)" />
                      <ellipse cx="27.5" cy="27.5" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 27.5 27.5)" />
                      <ellipse cx="27.5" cy="27.5" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 27.5 27.5)" />
                      <circle cx="27.5" cy="27.5" r="3.5" fill="#61DAFB" />
                    </g>

                    {/* Floating Tech Icons */}
                    <g transform="translate(230, 45)" filter="url(#reactHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#60A5FA" />
                      <circle cx="27.5" cy="27.5" r="10" fill="none" stroke="white" strokeWidth="3" />
                    </g>

                    <g transform="translate(295, 45)" filter="url(#reactHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#60A5FA" />
                      <rect x="17" y="18" width="21" height="6" rx="2" fill="white" />
                      <rect x="17" y="27" width="21" height="6" rx="2" fill="white" />
                      <rect x="17" y="36" width="21" height="6" rx="2" fill="white" />
                    </g>

                    <g transform="translate(195, 115)" filter="url(#reactHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#60A5FA" />
                      <path d="M 18 37 L 37 18 M 32 18 L 37 23 M 18 32 L 23 37" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    <g transform="translate(260, 115)" filter="url(#reactHeroShadow)">
                      <rect x="0" y="0" width="55" height="55" rx="10" fill="#20232A" />
                      <path d="M 18 35 A 13 13 0 0 1 37 35" fill="none" stroke="#61DAFB" strokeWidth="3" />
                      <line x1="27.5" y1="35" x2="33" y2="24" stroke="#61DAFB" strokeWidth="3" strokeLinecap="round" />
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
          IMAGE 1 & 2: GET REACT JS APPLICATION DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Graphic (Person at Desk with REACT.JS Monitor) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[460px] relative">
                <svg viewBox="0 0 460 320" className="w-full h-auto drop-shadow-md">
                  <rect x="50" y="240" width="360" height="12" fill="#1E293B" rx="2" />
                  <rect x="90" y="252" width="12" height="60" fill="#334155" />
                  <rect x="360" y="252" width="12" height="60" fill="#334155" />

                  <rect x="120" y="70" width="180" height="130" rx="8" fill="#FFFFFF" stroke="#005F96" strokeWidth="3" />
                  <rect x="120" y="70" width="180" height="24" rx="8" fill="#005F96" />
                  <circle cx="134" cy="82" r="3" fill="#FF5F56" />
                  <circle cx="144" cy="82" r="3" fill="#FFBD2E" />
                  <circle cx="154" cy="82" r="3" fill="#27C93F" />
                  <text x="210" y="130" fill="#005F96" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">REACT.JS</text>
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
                Get React JS Application<br className="hidden sm:inline" /> Development Services
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  It uses JavaScript and Virtual DOM throughout the front-end protocols. Engage with us for advanced React.JS Application Development that will positively impact your company. These applications will be inventive, responsive, and influential.
                </p>
                <p>
                  Because we are a React JS Web Development Company of the highest caliber, we can effortlessly satisfy our customers' expectations and carry out their activities as they have chosen. You can Hire React Developers to swiftly construct web applications using component-driven UI architecture.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 2: BRIEF ABOUT OUR REACT JS DEVELOPMENT
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-5 text-left font-sans">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our React JS<br className="hidden sm:inline" /> Development
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Because React is accessible for component-based development of JavaScript applications using virtual DOM reconciliation, it has the advantage of updating user interface components with maximum efficiency. Another incredible benefit of React web development is how simple it is to maintain and scale complex enterprise frontends.
                </p>
                <p>
                  React has access to React Native and Next.js platforms, enabling developers to create cross-platform mobile apps and server-rendered web portals with high stability and speed.
                </p>
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] relative">
                <svg viewBox="0 0 440 340" className="w-full h-auto drop-shadow-md">
                  <rect x="180" y="20" width="160" height="290" rx="24" fill="#FFFFFF" stroke="#005F96" strokeWidth="4" />
                  <rect x="190" y="30" width="140" height="270" rx="16" fill="#F0F9FF" />
                  <rect x="235" y="35" width="50" height="6" rx="3" fill="#94A3B8" />

                  <rect x="205" y="60" width="50" height="50" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
                  <rect x="265" y="60" width="50" height="50" rx="10" fill="#0284C7" />
                  <rect x="205" y="120" width="50" height="50" rx="10" fill="#0284C7" />
                  <rect x="265" y="120" width="50" height="50" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
                  <rect x="205" y="180" width="50" height="50" rx="10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
                  <rect x="265" y="180" width="50" height="50" rx="10" fill="#0284C7" />

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
          IMAGE 3: GET A 100% CUSTOMIZABLE REACT JS DEVELOPMENT BY EXPERTS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Get A 100% Customizable React JS Development By Experts
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
                  Scalable, Interactive, And Fast Single Page Apps
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left font-sans">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our developers design integrated strategies using the flexibility and rich ecosystem of React JS framework. Hire React JS Developers to create seamless websites and Enterprise React JS Development Services through which you communicate with your consumers.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                When you choose to outsource the development of your React application to our React JS App Development Company, you may anticipate receiving services of exceptional quality, specialized resources, sophisticated project management, and cost reductions.
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
          IMAGE 4: THE EXPERTISE OF OUR REACT JS DEVELOPERS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3 font-sans">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              The Expertise Of Our React JS Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Our React Developers Have Years Of Expertise In Developing React JS Solutions For You. Our Expertise Includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reactServices.map((service, idx) => (
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
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile React.js engineering lifecycle ensures component modularity, automated testing, and seamless cloud deployment." />

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
        subtitle="Explore answers to common questions about our React JS development services."
        faqs={reactFaqs}
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
          SECTION 21: HAVE REACT JS DEVELOPMENT CHALLENGE TO ADDRESS ?
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have React JS Development Challenge To Address ?",
          description: "Get Access To Top React JS Development To Transform Your Ideas Into A Robust Application",
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

export default ReactJsDevelopmentService;
