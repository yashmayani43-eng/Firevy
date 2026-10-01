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
  Smartphone,
  Globe,
  ChevronRight,
  Quote,
  MapPin,
  Navigation,
  Compass,
  Layers,
  Map,
  Eye,
  Activity,
  Cpu,
  CheckCircle2,
  Users
} from 'lucide-react';

export const DigitalWayfindingSolutionsService = () => {

  // 6 Benefits of Digital Wayfinding Solutions
  const wayfindingBenefits = [
    {
      title: "Instant Location Guidance",
      desc: "Provide visitors with real-time turn-by-turn routes inside complex buildings, shopping malls, hospitals, and university campuses.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: "Reduced Visitor Stress & Confusion",
      desc: "Clear interactive 3D floor plans and step-by-step visual pathways eliminate anxiety for first-time hospital patients and airport travelers.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      )
    },
    {
      title: "Real-Time Emergency Evacuation Routing",
      desc: "Dynamically display safe exit pathways and accessible routes during emergency alerts, integrating with smart facility safety systems.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Better Operational Traffic Flow",
      desc: "Analyze visitor foot traffic heatmaps to optimize kiosk placement, reduce congestion, and improve facility space management.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 17l4-4 3 3 5-6" />
        </svg>
      )
    },
    {
      title: "Accessibility & Multi-Language Support",
      desc: "Wheelchair-accessible route planning, voice-guided navigation, ADA compliance, and multi-language support for diverse international audiences.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Scalable Infrastructure & Beacon Integration",
      desc: "Combine Bluetooth Low Energy (BLE) beacons, Wi-Fi RTT, QR codes, and mobile SDKs for seamless indoor-outdoor navigation.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    }
  ];

  // 6 Core Digital Wayfinding Solutions Services
  const wayfindingFeatures = [
    {
      title: "Interactive 3D Kiosk Software",
      desc: "Custom touchscreen kiosk applications featuring interactive 3D floor maps, search auto-complete, and mobile route transfer via QR codes.",
      badgeBg: "bg-[#F3E8FF]",
      iconColor: "text-[#7C3AED]",
      icon: Map
    },
    {
      title: "BLE Beacon & Indoor Positioning (IPS)",
      desc: "High-precision indoor positioning using Bluetooth Low Energy (BLE) beacons, Wi-Fi triangulation, and geomagnetic positioning for sub-meter accuracy.",
      badgeBg: "bg-[#DCFCE7]",
      iconColor: "text-[#16A34A]",
      icon: Navigation
    },
    {
      title: "Turn-by-Turn Mobile Navigation",
      desc: "Native iOS and Android mobile SDKs delivering blue-dot turn-by-turn indoor navigation with voice guidance and off-route re-routing.",
      badgeBg: "bg-[#FFEDD5]",
      iconColor: "text-[#EA580C]",
      icon: Smartphone
    },
    {
      title: "AR Camera Wayfinding",
      desc: "Augmented Reality (AR) camera overlays that superimpose direction arrows, destination pins, and landmark info onto real-world camera feeds.",
      badgeBg: "bg-[#FEF9C3]",
      iconColor: "text-[#CA8A04]",
      icon: Eye
    },
    {
      title: "Multi-Building Campus Mapping",
      desc: "Seamless indoor-outdoor transitions for university campuses, corporate headquarters, airports, and smart city infrastructure.",
      badgeBg: "bg-[#FCE7F3]",
      iconColor: "text-[#DB2777]",
      icon: Layers
    },
    {
      title: "Analytics & Traffic Heatmap Dashboard",
      desc: "Comprehensive admin dashboard analyzing search queries, popular destinations, visitor paths, dwell times, and peak traffic hours.",
      badgeBg: "bg-[#E0F2FE]",
      iconColor: "text-[#0284C7]",
      icon: Activity
    }
  ];

  // 8 Exact Digital Wayfinding Solutions FAQs
  const wayfindingFaqs = [
    {
      id: 1,
      question: "1. What is Digital Wayfinding and how does indoor navigation work?",
      answer: "Digital Wayfinding uses interactive 3D maps, touch kiosks, mobile apps, and indoor positioning technologies (BLE beacons, Wi-Fi RTT, QR codes) to guide visitors through complex indoor spaces step-by-step."
    },
    {
      id: 2,
      question: "2. Can visitors transfer routes from interactive kiosks to their smartphones?",
      answer: "Yes! Visitors can scan a dynamic QR code on any touchscreen kiosk to open turn-by-turn directions instantly on their mobile browser or app without needing any app download."
    },
    {
      id: 3,
      question: "3. Does the indoor positioning system require hardware installation like BLE beacons?",
      answer: "While BLE beacons provide sub-meter precision, we also support beacon-less options such as QR-based location anchoring, Wi-Fi positioning, and geomagnetic mapping to fit your budget."
    },
    {
      id: 4,
      question: "4. Is the wayfinding system accessible for individuals with disabilities (ADA Compliant)?",
      answer: "Yes, our systems feature ADA-compliant wheelchair-accessible route options, voice-guided screen readers for visually impaired visitors, and adjustable kiosk UI heights."
    },
    {
      id: 5,
      question: "5. Can the wayfinding software integrate with existing facility systems (ERP/HIS/CMS)?",
      answer: "Yes, we integrate with hospital management systems (HIS), airport flight display systems (FIDS), corporate calendar APIs, and security/evacuation alert systems."
    },
    {
      id: 6,
      question: "6. How long does it take to deploy a Digital Wayfinding Solution?",
      answer: "Deployment timelines range from 4 to 12 weeks depending on venue size, floor plan complexity, 3D rendering requirements, and hardware setup."
    },
    {
      id: 7,
      question: "7. Why choose Firevy.Co for Digital Wayfinding Solutions Development?",
      answer: "Firevy.Co brings 23+ years of IT engineering excellence, 320+ 5-star Clutch reviews, 3D spatial mapping expertise, AR navigation capabilities, and 24/7 technical support."
    },
    {
      id: 8,
      question: "8. Do you support both indoor and outdoor navigation transitions?",
      answer: "Yes, our platform smoothly transitions between outdoor GPS navigation and indoor BLE/Wi-Fi positioning, ideal for large multi-building campuses and smart cities."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Digital Wayfinding Solutions | ${BRAND.name}`}
        description="Transform facility navigation with 3D interactive kiosks, BLE beacon indoor positioning, AR camera wayfinding, and mobile navigation apps. Contact Firevy today."
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
            <Link to="/services/blockchain-development" className="hover:text-[#005F96] transition-colors">Blockchain Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Digital Wayfinding Solutions</span>
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
                Digital Wayfinding<br className="hidden sm:inline" /> Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Help visitors effortlessly navigate your complex facilities with intelligent indoor positioning, 3D interactive kiosk software, BLE beacons, and AR mobile wayfinding. Whether managing a hospital network, international airport, shopping mall, or university campus, we engineer turn-by-turn navigation solutions that eliminate visitor confusion, improve safety, and optimize foot traffic flow.
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
                      <linearGradient id="wayfindingBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EBF5FF" />
                        <stop offset="100%" stopColor="#E0F2FE" />
                      </linearGradient>
                      <filter id="softShadowWayfinding" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0284C7" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Backdrop Blob */}
                    <path
                      d="M 90,170 C 40,150 40,90 90,60 C 130,30 210,20 270,40 C 320,10 400,20 430,70 C 470,100 480,170 440,210 C 470,260 400,310 330,300 C 270,320 190,320 140,290 C 80,300 40,230 90,170 Z"
                      fill="url(#wayfindingBgGrad)"
                    />

                    {/* 3D Map Grid Backdrop */}
                    <g opacity="0.3" stroke="#005F96" strokeWidth="1" fill="none">
                      <path d="M 50,220 L 250,140 L 450,220 L 250,300 Z" fill="#FFFFFF" opacity="0.7" />
                      <line x1="150" y1="180" x2="350" y2="260" />
                      <line x1="250" y1="140" x2="250" y2="300" />
                      <line x1="350" y1="180" x2="150" y2="260" />
                    </g>

                    {/* Pulsing Location Pin Center */}
                    <g transform="translate(250, 190)" filter="url(#softShadowWayfinding)">
                      <circle cx="0" cy="0" r="32" fill="#38BDF8" opacity="0.25" />
                      <circle cx="0" cy="0" r="22" fill="#0284C7" />
                      <path d="M 0,-14 C -7,-14 -12,-9 -12,-2 C -12,7 0,16 0,16 C 0,16 12,7 12,-2 C 12,-9 7,-14 0,-14 Z" fill="#FFFFFF" />
                      <circle cx="0" cy="-2" r="4" fill="#005F96" />
                    </g>

                    {/* Dotted Navigation Route Line */}
                    <path
                      d="M 120,240 Q 180,160 250,190 T 380,130"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="3.5"
                      strokeDasharray="6 4"
                    />

                    {/* Touch Kiosk Mockup on Right */}
                    <g filter="url(#softShadowWayfinding)" transform="translate(340, 70)">
                      <rect x="0" y="0" width="85" height="175" rx="12" fill="#1E293B" stroke="#0284C7" strokeWidth="2.5" />
                      <rect x="5" y="6" width="75" height="145" rx="8" fill="#F0F9FF" />
                      {/* Map Graphics */}
                      <rect x="12" y="14" width="61" height="90" rx="4" fill="#E0F2FE" />
                      <path d="M 20,30 L 65,75 M 20,75 L 65,30" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
                      <circle cx="42.5" cy="52.5" r="6" fill="#005F96" />
                      {/* Search Bar */}
                      <rect x="12" y="112" width="61" height="12" rx="3" fill="#CBD5E1" />
                      {/* Kiosk Base */}
                      <rect x="25" y="155" width="35" height="20" fill="#0F172A" />
                      <rect x="10" y="170" width="65" height="5" rx="2" fill="#334155" />
                    </g>

                    {/* Mobile Phone Mockup on Left */}
                    <g filter="url(#softShadowWayfinding)" transform="translate(80, 80)">
                      <rect x="0" y="0" width="85" height="165" rx="16" fill="white" stroke="#0284C7" strokeWidth="2.5" />
                      <rect x="5" y="6" width="75" height="153" rx="10" fill="#F0F9FF" />
                      <rect x="30" y="10" width="25" height="3" rx="1.5" fill="#94A3B8" />
                      <circle cx="42.5" cy="65" r="18" fill="#0284C7" />
                      <path d="M 42.5,53 L 47.5,65 L 42.5,61 L 37.5,65 Z" fill="white" />
                      <rect x="12" y="98" width="61" height="10" rx="3" fill="#E2E8F0" />
                      <rect x="12" y="114" width="61" height="10" rx="3" fill="#0284C7" />
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
          SECTION 2: TRUSTED DIGITAL WAYFINDING SOLUTIONS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 rounded-3xl p-6 border border-sky-100 shadow-lg relative overflow-hidden text-center">
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-4">
                  <div className="relative w-48 h-48 bg-sky-100/70 rounded-full flex items-center justify-center p-3 border border-sky-200">
                    <div className="w-36 h-36 bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl shadow-xl p-4 border-2 border-white flex flex-col justify-between relative text-white">
                      <div className="flex justify-between items-center">
                        <MapPin className="w-6 h-6 text-amber-300" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="text-center font-black text-sm">
                        3D Indoor IPS
                      </div>
                      <div className="bg-emerald-500 text-white rounded-md py-0.5 text-[9px] font-bold text-center">
                        Sub-Meter Precision
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-sky-200 shadow-sm text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Real-Time Turn-by-Turn Positioning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Trusted Digital Wayfinding<br className="hidden sm:inline" /> Solutions Partner
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                As a leading Digital Wayfinding Solutions provider, we transform complex physical spaces into intuitive, self-navigating environments. Our engineering expertise spans interactive touchscreen kiosks, mobile BLE beacon positioning, 3D indoor mapping, and AR camera navigation tailored for healthcare networks, airports, higher education campuses, commercial real estate, and smart cities.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">Sub-Meter</div>
                  <div className="text-xs font-medium text-slate-500">IPS Precision</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">ADA Compliant</div>
                  <div className="text-xs font-medium text-slate-500">Accessible Routes</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">100% Mobile</div>
                  <div className="text-xs font-medium text-slate-500">QR Route Transfer</div>
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
          SECTION 3: PROFESSIONAL CUSTOM DIGITAL WAYFINDING SOLUTIONS SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Professional Custom digital wayfinding solutions services
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
                  Engineered for Intuitive Indoor Navigation and Seamless Spatial Guidance
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left py-2 font-sans">
              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.7] font-[400]">
                We build scalable spatial mapping and indoor navigation solutions that help visitors, patients, travelers, and employees find their destination without delay. Integrating vector floor plans, BLE beacon triggers, Wi-Fi RTT positioning, and responsive web/mobile SDKs, our platforms deliver precise blue-dot guidance across iOS, Android, and interactive touchscreen displays.
              </p>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.7] font-[400]">
                From custom 3D map rendering to real-time traffic heatmaps and emergency exit routing, our Digital Wayfinding Software Company delivers secure, cloud-hosted platforms that elevate visitor satisfaction while streamlining facility operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: OUR PREMIUM SERVICES
         ========================================================================= */}
      <PremiumServicesGrid companyName={BRAND.name} />

      {/* =========================================================================
          SECTION 5: OUR CORE DIGITAL WAYFINDING SOLUTIONS SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#EBF5FC]/60 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Our Core Digital Wayfinding Solutions Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {wayfindingFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${feat.badgeBg} ${feat.iconColor} flex items-center justify-center font-bold`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 tracking-tight leading-snug font-sans group-hover:text-[#005F96] transition-colors">
                      {feat.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-[400] font-sans">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004a77] text-white font-[800] text-base shadow-md hover:shadow-lg transition-all font-sans"
            >
              Get A Free Quote For Your Project
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: PROUD AWARDS BANNER
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          SECTION 7: BENEFITS OF DIGITAL WAYFINDING SOLUTIONS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-t border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Benefits of Digital Wayfinding Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wayfindingBenefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    {b.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 tracking-tight leading-snug group-hover:text-[#005F96] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-[400]">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: BUSINESS FRIENDLY HIRING MODELS
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          SECTION 9: UNVEILING OUR INNOVATIVE SOLUTION
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          SECTION 10: PROCESS WE FOLLOW
         ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          SECTION 11: OUR STORY, THEIR WORDS
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          SECTION 12: TRUSTED BY THE WORLD'S LEADING BRANDS
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 13: SUCCESS MATRIX
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 14: WE HAVE BEEN FEATURED IN
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          SECTION 15: DIGITAL TRANSFORMATION CASE STUDIES
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SECTION 16: FREQUENTLY ASKED QUESTIONS
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={wayfindingFaqs}
      />

      {/* =========================================================================
          SECTION 17: OUR RECENT BLOGS
         ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          SECTION 18: WHAT SETS US APART AS DIGITAL WAYFINDING SOLUTIONS COMPANY?
         ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Digital Wayfinding Solutions Company?"
        description="Being unique is our quality! Firevy.Co believes in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* =========================================================================
          SECTION 19: HAVE DIGITAL WAYFINDING SOLUTIONS CHALLENGE TO ADDRESS ?
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have Digital Wayfinding Solutions Challenge To Address ?",
          description: "Get access to top Digital Wayfinding Solutions specialists to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          SECTION 20: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
         ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default DigitalWayfindingSolutionsService;
