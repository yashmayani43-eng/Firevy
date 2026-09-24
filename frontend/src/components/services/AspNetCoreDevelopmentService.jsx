import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  ArrowRight,
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  Cpu,
  ShieldCheck,
  Quote,
  Clock,
  Sliders,
  FileText,
  TrendingUp,
  Monitor,
  Server,
  Layers,
  Code
} from 'lucide-react';

export const AspNetCoreDevelopmentService = () => {
  const rangeServices = [
    {
      title: 'ASP.NET Core Web Application Development',
      desc: 'We build lightweight, high-performing web applications using ASP.NET Core, MVC, and Razor Pages to meet the unique needs of businesses of all types and sizes.',
      icon: Globe,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'ASP.NET Core Enterprise Solutions',
      desc: 'Our enterprise solutions leverage C# and .NET 8/9 to create scalable, secure, and multi-tenant enterprise software with high data processing capabilities.',
      icon: Server,
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'ASP.NET Core API & Microservices',
      desc: 'We architect RESTful Web APIs and microservices using gRPC and ASP.NET Core, enabling seamless integration between mobile apps, frontends, and cloud databases.',
      icon: Layers,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'ASP.NET Core Migration & Upgrades',
      desc: 'Migrate legacy ASP.NET Web Forms or .NET Framework 4.x applications to cross-platform ASP.NET Core with zero downtime and improved server throughput.',
      icon: Cpu,
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Cloud Native & Azure Integration',
      desc: 'Deploy ASP.NET Core applications into Microsoft Azure App Services, Docker containers, and Kubernetes clusters with automated CI/CD pipelines.',
      icon: Cloud,
      iconBg: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'ASP.NET Core Security & Maintenance',
      desc: 'Our certified .NET architects provide ongoing 24/7 SLA maintenance, OWASP security hardening, IdentityServer integration, and performance optimization.',
      icon: ShieldCheck,
      iconBg: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const benefits = [
    {
      title: 'Cross-Platform High Performance',
      desc: 'ASP.NET Core is built from the ground up to run seamlessly on Windows, Linux, and macOS, delivering top-tier benchmark speeds and minimal resource usage.',
      icon: Cloud
    },
    {
      title: 'Asynchronous Programming & Speed',
      desc: 'With non-blocking async/await patterns and Kestrel web server, ASP.NET Core handles high-concurrency traffic with minimal latency.',
      icon: Clock
    },
    {
      title: 'Built-in Security & Dependency Injection',
      desc: 'Features built-in IoC container for dependency injection, CSRF protection, CORS support, OAuth2/OIDC authentication, and encrypted data storage.',
      icon: Sliders
    },
    {
      title: 'Unified Web API & MVC Framework',
      desc: 'Combines MVC web controllers and RESTful Web APIs into a unified programming model, reducing codebase complexity and accelerating development.',
      icon: FileText
    },
    {
      title: 'Open Source & Vibrant Community',
      desc: 'Backed by Microsoft and an active open-source community, offering continuous updates, NuGet package ecosystem, and enterprise longevity.',
      icon: TrendingUp
    },
    {
      title: 'Cloud-Ready & Azure Native',
      desc: 'Designed for effortless cloud deployment with built-in support for Environment variables, Azure Key Vault, App Insights logging, and Docker containerization.',
      icon: Monitor
    }
  ];

  const caseStudies = [
    {
      title: 'ASP.NET Core Ecommerce Portal',
      tag: 'Case Study',
      subtitle: 'High-Scale Online Shopping & Inventory Management App',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-cyan-500'
    },
    {
      title: 'Enterprise ERP & Microservices',
      tag: 'Data Management',
      subtitle: 'ASP.NET Core Web API & Azure SQL Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-blue-500'
    },
    {
      title: 'Legacy .NET Core Migration',
      tag: '.NET Core',
      subtitle: 'Cloud Migration & Azure DevOps Automation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="ASP.Net App Development Services in USA | Firevy"
        description="Our team designs, develops, and deploys cost-effective and reliable .NET solutions as per your business needs. Contact us to get DOT Net solutions developed by seasoned experts."
        canonical="/services/asp-net-core-development"
      />

      {/* =========================================================================
          1. HERO SECTION (Exact ASP.Net App Development Mockup)
          ========================================================================= */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-slate-50/50 text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title, Subtitle & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[36px] sm:text-[44px] lg:text-[50px] font-[800] text-[#0B0F19] leading-[1.15] tracking-tight">
                ASP.Net App Development<br />Services in USA
              </h1>

              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.7] font-normal max-w-[580px]">
                Our team designs, develops, and deploys cost-effective and reliable .NET solutions as per your business needs. Contact us to get DOT Net solutions developed by seasoned experts to outperform your competitors.
              </p>

              {/* Primary CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#005F96] hover:bg-[#004875] text-white font-[700] text-sm px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 1:1 Exact Vector Graphic Illustration matching reference image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                {/* SVG Vector Graphic matching reference screenshot 1:1 */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Wireframe Gears */}
                    <g stroke="#38BDF8" strokeWidth="1.5" opacity="0.4" fill="none">
                      <circle cx="210" cy="55" r="22" strokeDasharray="3 3" />
                      <circle cx="210" cy="55" r="12" />
                      <circle cx="450" cy="220" r="38" strokeDasharray="4 4" />
                      <circle cx="450" cy="220" r="22" />
                    </g>
                    <circle cx="442" cy="235" r="3" fill="#F97316" />

                    {/* Laptop Bottom Base Stand */}
                    <path d="M 60 345 L 440 345 C 445 345, 450 350, 440 358 L 60 358 C 50 358, 55 350, 60 345 Z" fill="url(#laptop_base_grad_core)" stroke="#CBD5E1" strokeWidth="1" />
                    <rect x="220" y="345" width="60" height="4" rx="2" fill="#94A3B8" />

                    {/* Laptop Black Outer Frame */}
                    <rect x="90" y="70" width="320" height="275" rx="10" fill="#0A0E17" stroke="#1E293B" strokeWidth="3" />

                    {/* Laptop Canvas Screen */}
                    <rect x="100" y="80" width="300" height="255" rx="4" fill="#FFFFFF" />

                    {/* Screen Top Title Bar (#38BDF8 Bright Blue) */}
                    <path d="M 100 84 C 100 81.7, 101.7 80, 104 80 L 396 80 C 398.3 80, 400 81.7, 400 84 L 400 108 L 100 108 Z" fill="#38BDF8" />
                    
                    <circle cx="116" cy="94" r="5" fill="#F43F5E" />
                    <circle cx="130" cy="94" r="5" fill="#FBBF24" />
                    <circle cx="144" cy="94" r="5" fill="#FFFFFF" />

                    {/* Code Line Bars on Left Side */}
                    <g fill="#BAE6FD">
                      <rect x="120" y="125" width="165" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="138" width="130" height="7" rx="3.5" />
                      <rect x="120" y="151" width="145" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="164" width="110" height="7" rx="3.5" />
                      <rect x="120" y="177" width="155" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="190" width="95" height="7" rx="3.5" />
                      <rect x="120" y="203" width="140" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="216" width="160" height="7" rx="3.5" />
                      <rect x="120" y="229" width="125" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="242" width="145" height="7" rx="3.5" />
                      <rect x="120" y="255" width="110" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="268" width="155" height="7" rx="3.5" />
                      <rect x="120" y="281" width="130" height="7" rx="3.5" fill="#93C5FD" />
                      <rect x="120" y="294" width="90" height="7" rx="3.5" />
                    </g>

                    {/* Microsoft .NET Logo Emblem on Right Side */}
                    <g transform="translate(300, 140)">
                      <path d="M 12 42 C 6 22, 28 8, 36 24 C 44 40, 62 26, 68 8 C 58 26, 42 38, 32 20 C 22 4, 14 18, 12 42 Z" fill="url(#ms_wave_grad_core)" />
                      <path d="M 28 42 C 34 22, 56 12, 64 28 C 54 28, 44 26, 36 14 C 28 28, 28 38, 28 42 Z" fill="#0078D4" opacity="0.8" />
                      <text x="68" y="25" fill="#1E293B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Microsoft®</text>
                      <text x="5" y="75" fill="#0F172A" fontSize="36" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">.NET</text>
                    </g>

                    {/* FLOATING BADGES */}

                    {/* 1. VB (Top Left - Yellow/Gold) */}
                    <g transform="translate(70, 80)">
                      <rect x="0" y="0" width="58" height="58" rx="8" fill="#EAB308" filter="url(#badge_shadow_core)" />
                      <text x="29" y="38" fill="#FFFFFF" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">VB</text>
                    </g>

                    {/* 2. .NET Core (Top Center - Purple) */}
                    <g transform="translate(235, 15)">
                      <rect x="0" y="0" width="66" height="66" rx="10" fill="#581C87" filter="url(#badge_shadow_core)" />
                      <text x="33" y="36" fill="#FFFFFF" fontSize="20" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">.NET</text>
                      <text x="33" y="52" fill="#E9D5FF" fontSize="11" fontWeight="normal" textAnchor="middle" fontFamily="sans-serif">Core</text>
                    </g>

                    {/* 3. SQL Server (Top Right - Pink/Magenta) */}
                    <g transform="translate(385, 50)">
                      <rect x="0" y="0" width="58" height="58" rx="8" fill="#EC4899" filter="url(#badge_shadow_core)" />
                      <ellipse cx="29" cy="18" rx="14" ry="5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                      <path d="M 15 18 L 15 32 C 15 35, 43 35, 43 32 L 43 18" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                      <path d="M 15 25 C 15 28, 43 28, 43 25" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                      <text x="29" y="48" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQL Server</text>
                    </g>

                    {/* 4. Azure (Bottom Left - Blue) */}
                    <g transform="translate(42, 218)">
                      <rect x="0" y="0" width="66" height="66" rx="8" fill="#0078D4" filter="url(#badge_shadow_core)" />
                      <path d="M 28 14 L 45 42 L 32 42 L 23 28 Z" fill="#FFFFFF" />
                      <path d="M 20 22 L 14 42 L 30 42 Z" fill="#FFFFFF" opacity="0.8" />
                      <text x="33" y="56" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Azure</text>
                    </g>

                    {/* 5. C# (Bottom Right - Emerald/Teal Green) */}
                    <g transform="translate(388, 248)">
                      <rect x="0" y="0" width="64" height="64" rx="8" fill="#00C49F" filter="url(#badge_shadow_core)" />
                      <polygon points="32,14 46,22 46,38 32,46 18,38 18,22" fill="#FFFFFF" />
                      <text x="32" y="34" fill="#00C49F" fontSize="14" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">C#</text>
                    </g>

                    {/* Gradients & Filters */}
                    <defs>
                      <linearGradient id="laptop_base_grad_core" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#CBD5E1" />
                      </linearGradient>
                      <linearGradient id="ms_wave_grad_core" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A4EF" />
                        <stop offset="100%" stopColor="#0078D4" />
                      </linearGradient>
                      <filter id="badge_shadow_core" x="-10%" y="-10%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.15" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. CLIENT LOGOS STRIP (Homepage Style Infinite Scrolling Marquee)
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. #1 .NET APPLICATION DEVELOPMENT SERVICES SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Illustration (Mobile & Web App Development) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-sky-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                {/* 1:1 Exact Vector Graphic Illustration matching reference image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_soft_sec3_asp" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.08" />
                      </filter>
                    </defs>

                    {/* Background Organic Blobs */}
                    <g opacity="0.9">
                      <path d="M 100 200 C 60 120, 140 40, 240 60 C 320 80, 360 20, 460 70 C 540 120, 560 260, 510 330 C 460 400, 360 410, 260 395 C 160 380, 100 320, 100 200 Z" fill="#E1F4FE" />
                      <path d="M 120 220 C 90 150, 150 70, 260 80 C 350 90, 420 40, 490 110 C 560 180, 520 310, 440 370 C 350 430, 220 390, 150 350 C 100 310, 130 260, 120 220 Z" fill="#D2EFFF" opacity="0.6" />
                      <path d="M 60 280 C 40 220, 80 160, 140 170 C 200 180, 220 280, 160 340 C 100 400, 70 340, 60 280 Z" fill="#EBF7FF" />
                    </g>

                    {/* Top Right Gear Wheel Icon */}
                    <g transform="translate(395, 18)">
                      <path d="M 25 5 L 29 5 L 31 11 C 33 12, 35 13, 37 14 L 43 11 L 46 14 L 43 20 C 44 22, 45 24, 46 26 L 52 28 L 52 32 L 46 34 C 45 36, 44 38, 43 40 L 46 46 L 43 49 L 37 46 C 35 47, 33 48, 31 49 L 29 55 L 25 55 L 23 49 C 21 48, 19 47, 17 46 L 11 49 L 8 46 L 11 40 C 10 38, 9 36, 8 34 L 2 32 L 2 28 L 8 26 C 9 24, 10 22, 11 20 L 8 14 L 11 11 L 17 14 C 19 13, 21 12, 23 11 Z" fill="#008ECB" />
                      <circle cx="27" cy="30" r="11" fill="#E1F4FE" />
                    </g>

                    {/* Top Left Soft Blue Badge */}
                    <g transform="translate(125, 90)">
                      <rect x="0" y="0" width="68" height="68" rx="18" fill="#369FE2" filter="url(#shadow_soft_sec3_asp)" />
                    </g>

                    {/* Top Right Code Badge </ > */}
                    <g transform="translate(445, 75)">
                      <rect x="0" y="0" width="72" height="72" rx="18" fill="#008ECB" filter="url(#shadow_soft_sec3_asp)" />
                      <path d="M 22 45 L 12 36 L 22 27 M 50 45 L 60 36 L 50 27 M 40 21 L 32 51" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                    {/* Central Smartphone */}
                    <g transform="translate(230, 70)">
                      {/* Dark Outer Frame */}
                      <rect x="0" y="0" width="180" height="320" rx="24" fill="#1E2C39" filter="url(#shadow_soft_sec3_asp)" />
                      
                      {/* Screen Display (Bright Cyan Blue) */}
                      <rect x="12" y="16" width="156" height="288" rx="14" fill="#009BD8" />

                      {/* Phone UI Layout Wireframe Elements */}
                      {/* Dotted Rectangle Container at Top */}
                      <rect x="26" y="32" width="128" height="85" rx="4" fill="none" stroke="#0080B2" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="90" cy="50" r="3" fill="#0080B2" />
                      <circle cx="102" cy="50" r="3" fill="#0080B2" />
                      <circle cx="114" cy="50" r="3" fill="#0080B2" />
                      
                      {/* Image Icon inside top frame */}
                      <g transform="translate(74, 60)">
                        <rect x="0" y="0" width="32" height="24" rx="3" fill="none" stroke="#0080B2" strokeWidth="1.5" />
                        <path d="M 4 20 L 12 11 L 18 17 L 22 13 L 28 20 Z" fill="#0080B2" />
                        <circle cx="22" cy="7" r="2.5" fill="#0080B2" />
                      </g>

                      {/* Middle UI Blocks */}
                      <rect x="26" y="125" width="40" height="40" rx="4" fill="#0087BA" opacity="0.6" />
                      <rect x="74" y="125" width="80" height="100" rx="4" fill="#0087BA" opacity="0.5" />
                      <rect x="82" y="135" width="64" height="22" rx="3" fill="#007CAE" />
                      <rect x="82" y="165" width="64" height="22" rx="3" fill="#007CAE" />
                      <rect x="82" y="195" width="64" height="22" rx="3" fill="#007CAE" />

                      {/* Bottom Document Card Icon */}
                      <g transform="translate(42, 235)">
                        <rect x="0" y="0" width="48" height="36" rx="4" fill="#0087BA" opacity="0.6" />
                        <rect x="14" y="8" width="20" height="20" rx="2" fill="none" stroke="#0080B2" strokeWidth="1.5" />
                        <line x1="18" y1="13" x2="30" y2="13" stroke="#0080B2" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="18" y1="17" x2="28" y2="17" stroke="#0080B2" strokeWidth="1.5" strokeLinecap="round" />
                      </g>

                      {/* Bottom Chat Icon Tab Badge */}
                      <g transform="translate(66, 280)">
                        <rect x="0" y="0" width="48" height="38" rx="10" fill="#008ECB" />
                        <path d="M 16 12 C 12 12, 10 14, 10 18 C 10 21, 12 23, 15 23 L 15 26 L 19 23 L 32 23 C 34 23, 36 21, 36 18 C 36 14, 34 12, 32 12 Z" fill="#FFFFFF" />
                      </g>
                    </g>

                    {/* Left Side: Kneeling Developer Figure & Floating Video Player Card */}
                    <g>
                      {/* Floating Video Player Card */}
                      <g transform="translate(195, 200)">
                        <rect x="0" y="0" width="105" height="60" rx="5" fill="#86C8EF" stroke="#71BCE7" strokeWidth="1" filter="url(#shadow_soft_sec3_asp)" />
                        {/* Header with play bar */}
                        <rect x="4" y="4" width="97" height="38" rx="3" fill="#FFFFFF" opacity="0.3" />
                        {/* Center Play Circle Button */}
                        <circle cx="52.5" cy="23" r="10" fill="#FFFFFF" />
                        <polygon points="50.5,18 57.5,23 50.5,28" fill="#5A8EC9" />
                        {/* Video timeline bar at bottom */}
                        <rect x="8" y="48" width="89" height="4" rx="2" fill="#58A8DE" />
                        <rect x="8" y="48" width="26" height="4" rx="2" fill="#1B2734" />
                      </g>

                      {/* Kneeling Developer Character */}
                      <g transform="translate(100, 240)">
                        {/* Head & Hair */}
                        <circle cx="65" cy="12" r="10" fill="#FEDECF" />
                        <path d="M 55 10 C 55 2, 65 0, 73 4 C 77 7, 75 16, 75 16 C 71 14, 63 15, 60 18 Z" fill="#1B2734" />
                        
                        {/* Arms holding the video card */}
                        <path d="M 68 28 L 105 -24 L 115 -20 L 76 34 Z" fill="#5A8EC9" />
                        <path d="M 62 30 L 98 -28 L 108 -24 L 70 38 Z" fill="#4B7EBA" />
                        
                        {/* Shirt / Torso */}
                        <path d="M 52 24 L 72 24 L 78 52 L 44 52 Z" fill="#5A8EC9" />
                        
                        {/* Kneeling Legs (Navy Trousers) */}
                        <path d="M 46 52 L 60 52 L 55 90 L 15 90 L 15 80 L 42 78 Z" fill="#1B2734" />
                        <path d="M 62 52 L 82 52 L 86 88 L 72 88 L 68 64 Z" fill="#1B2734" />
                        
                        {/* Shoes */}
                        <ellipse cx="12" cy="88" rx="8" ry="4" fill="#1B2734" />
                        <ellipse cx="80" cy="88" rx="9" ry="4" fill="#1B2734" />
                      </g>
                    </g>

                    {/* Right Side: Standing Developer Figure & Floating Code Window */}
                    <g>
                      {/* Floating Code Editor Window */}
                      <g transform="translate(340, 145)">
                        <rect x="0" y="0" width="115" height="95" rx="6" fill="#86C8EF" stroke="#72BDE6" strokeWidth="1" filter="url(#shadow_soft_sec3_asp)" />
                        {/* Dark Header Bar */}
                        <path d="M 0 6 C 0 2.7, 2.7 0, 6 0 L 109 0 C 112.3 0, 115 2.7, 115 6 L 115 16 L 0 16 Z" fill="#1B2734" />
                        <circle cx="10" cy="8" r="2.5" fill="#EF4444" />
                        <circle cx="18" cy="8" r="2.5" fill="#F59E0B" />
                        <circle cx="26" cy="8" r="2.5" fill="#10B981" />
                        
                        {/* Code Syntax Lines */}
                        <g fill="#1B2734" opacity="0.8">
                          <rect x="10" y="24" width="35" height="4" rx="2" />
                          <rect x="48" y="24" width="40" height="4" rx="2" fill="#005F96" />
                          <rect x="18" y="32" width="25" height="4" rx="2" fill="#005F96" />
                          <rect x="46" y="32" width="50" height="4" rx="2" />
                          <rect x="26" y="40" width="45" height="4" rx="2" />
                          <rect x="26" y="48" width="30" height="4" rx="2" fill="#005F96" />
                          <rect x="26" y="56" width="60" height="4" rx="2" />
                          <rect x="18" y="64" width="40" height="4" rx="2" />
                          <rect x="10" y="72" width="20" height="4" rx="2" fill="#005F96" />
                          <rect x="10" y="80" width="55" height="4" rx="2" />
                        </g>
                      </g>

                      {/* Standing Developer Character */}
                      <g transform="translate(440, 185)">
                        {/* Head & Hair */}
                        <circle cx="60" cy="14" r="10" fill="#FEDECF" />
                        <path d="M 50 12 C 50 4, 60 2, 68 6 C 72 9, 70 18, 70 18 C 66 16, 58 17, 55 20 Z" fill="#1B2734" />
                        
                        {/* Torso & Shirt & Tie */}
                        <path d="M 48 26 L 70 26 L 74 65 L 44 65 Z" fill="#5A8EC9" />
                        {/* Navy Tie */}
                        <polygon points="58,26 62,26 63,48 59,52 57,48" fill="#1B2734" />

                        {/* Raised Right Arm pointing finger at Code Window */}
                        <path d="M 46 30 L -10 -25 L -5 -32 L 52 26 Z" fill="#5A8EC9" />
                        <circle cx="-9" cy="-28" r="4" fill="#FEDECF" />

                        {/* Left Arm holding Laptop */}
                        <path d="M 68 32 L 50 50 L 35 48 L 30 52 L 50 58 L 72 38 Z" fill="#4B7EBA" />
                        {/* Small Laptop in Left Hand */}
                        <rect x="18" y="40" width="24" height="15" rx="2" fill="#1B2734" transform="rotate(-10)" />
                        <rect x="14" y="52" width="28" height="3" rx="1" fill="#94A3B8" />

                        {/* Standing Legs (Navy Trousers) */}
                        <path d="M 45 65 L 57 65 L 55 145 L 43 145 Z" fill="#1B2734" />
                        <path d="M 60 65 L 72 65 L 70 145 L 58 145 Z" fill="#1B2734" />

                        {/* Black Shoes */}
                        <path d="M 38 142 L 55 142 C 55 147, 38 147, 38 142 Z" fill="#1B2734" />
                        <path d="M 54 142 L 72 142 C 72 147, 54 147, 54 142 Z" fill="#1B2734" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Detailed Description */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                #1 .NET Application<br />Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15.5px] text-[#475569] leading-relaxed font-normal">
                <p>
                  The creation of .NET applications provides businesses with quick, easy-to-use, feature-rich solutions that enhance business results and expedite operations. We provide a broad selection of tailored .NET development solutions as part of our AI-Powered .NET Application Development Services. We are Affordable .NET development services for startups with more than ten years of expertise developing IT solutions and collaborating with businesses from a range of industries. See more about our services for .NET applications here. Reach out to us for a quick quote now!
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <ShieldCheck className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Enterprise Security & NDA</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Cloud className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Cloud & Azure Optimization</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Sliders className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>AI-Powered Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Clock className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>24/7 SLA Maintenance</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Request Quick Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          3.5 BRIEF ABOUT TOP .NET DEVELOPMENT SERVICES SECTION (Mockup Match)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/60 text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Paragraphs */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Brief About Top .NET<br />Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  ASP NET framework is based on object-oriented programming, which reduces extraneous codes and requires developers to do less coding. The .NET framework facilitates post-development deployment with capabilities like no-impact apps, private components, controlled code sharing, side-by-side versioning, and partially trusted code.
                </p>
                <p>
                  .NET has been used to create millions of apps since its initial release in 2002. It also performs quite well on Microsoft® Windows Server™ 2003 and Windows 2000 Server.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-Device Responsive Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-blue-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                {/* SVG Vector illustration matching mockup */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="200" r="160" fill="#F0F9FF" />
                    
                    {/* Background Laptop */}
                    <rect x="90" y="100" width="320" height="200" rx="14" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
                    <rect x="100" y="115" width="300" height="170" rx="8" fill="#F8FAFC" />
                    
                    <circle cx="115" cy="128" r="4" fill="#EF4444" />
                    <circle cx="128" cy="128" r="4" fill="#F59E0B" />
                    <circle cx="141" cy="128" r="4" fill="#10B981" />
                    
                    <rect x="115" y="145" width="130" height="75" rx="8" fill="#BAE6FD" />
                    <rect x="255" y="145" width="130" height="18" rx="4" fill="#E2E8F0" />
                    <rect x="255" y="172" width="100" height="14" rx="4" fill="#E2E8F0" />
                    <rect x="115" y="230" width="130" height="45" rx="6" fill="#FCA5A5" />
                    <rect x="255" y="230" width="130" height="45" rx="6" fill="#BAE6FD" />

                    {/* Left Phone */}
                    <rect x="50" y="170" width="80" height="165" rx="16" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                    <rect x="56" y="180" width="68" height="145" rx="10" fill="#FFFFFF" />
                    <rect x="64" y="192" width="52" height="45" rx="4" fill="#BAE6FD" />
                    <rect x="64" y="246" width="52" height="14" rx="3" fill="#FCA5A5" />
                    <rect x="64" y="268" width="52" height="14" rx="3" fill="#E2E8F0" />
                    <circle cx="78" cy="296" r="3" fill="#F59E0B" />
                    <circle cx="92" cy="296" r="3" fill="#F59E0B" />

                    {/* Right Tablet / Phone */}
                    <rect x="375" y="170" width="95" height="165" rx="16" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                    <rect x="381" y="180" width="83" height="145" rx="10" fill="#FFFFFF" />
                    <rect x="390" y="192" width="65" height="55" rx="4" fill="#BAE6FD" />
                    <rect x="390" y="256" width="65" height="15" rx="3" fill="#E2E8F0" />
                    <rect x="390" y="278" width="65" height="15" rx="3" fill="#FCA5A5" />
                    <circle cx="410" cy="305" r="3.5" fill="#3B82F6" />
                    <circle cx="426" cy="305" r="3.5" fill="#3B82F6" />

                    {/* Floating </> Badge */}
                    <rect x="215" y="65" width="52" height="36" rx="10" fill="#FFFFFF" stroke="#F97316" strokeWidth="2.5" />
                    <text x="241" y="89" fill="#F97316" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>

                    {/* Floating Microsoft .NET Logo Badge */}
                    <circle cx="335" cy="75" r="24" fill="#FFFFFF" stroke="#0078D4" strokeWidth="2" />
                    <path d="M323 66L331 78H335L347 66H343L333 75.5L326.5 66H323Z" fill="#0078D4" />
                    <text x="335" y="91" fill="#1E293B" fontSize="9" fontWeight="bold" textAnchor="middle">.NET</text>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER
          ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          5. WE DEVELOP SECURE AND FEATURE-RICH WEB SOLUTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Box: Textured Blue Callout Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/50 to-slate-50 border border-sky-100 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-[#005F96] text-white flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-[900] text-[#005F96] leading-snug tracking-tight">
                    Scalability, Security, Affordability, And Performance
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Paragraphs */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
                We Develop Secure And Feature-Rich Web Solutions
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  ASP.NET provides the framework you need to construct simple online applications as well as large and complicated applications. We have expertise working with clients from many industries as one of the best ASP.NET development companies. We are functioning on several different bandwidth initiatives. Being a <strong className="text-[#005F96] font-semibold">top software developmnet company</strong>, We have the necessary knowledge, team, and resources to develop business-specific apps to help your company succeed.
                </p>
                <p>
                  Our skilled team has created a slew of ASP.NET applications that have significantly aided the company's growth. We are one of India's most dependable, experienced, and professional ASP.NET development companies. Despite this, we have extensive expertise working on worldwide projects with a variety of worldwide businesses. We assist businesses in expanding their international reach by developing web apps in ASP.NET.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR PREMIUM SERVICES
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. SUCCESS STORIES & STATS BAR
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-sky-50/60 text-slate-900 text-left border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 right-3 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow ${item.badgeBg}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3 rounded-md shadow transition-all"
            >
              <span>View All Portfolio</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#E0D7FF] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-purple-900">23+</div>
              <div className="text-xs font-bold text-purple-800">Years Experience</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#CCF2F4] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-teal-900">320+</div>
              <div className="text-xs font-bold text-teal-800">5-Star Clutch Reviews</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFD4D4] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-rose-900">2800+</div>
              <div className="text-xs font-bold text-rose-800">Satisfied Clients</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#005F96] text-white text-center space-y-3 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-sm font-bold">Want to start Projects</div>
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-[#005F96] font-extrabold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-all"
              >
                Get Estimation
              </Link>
            </div>
          </div>

        </Container>
      </section>

      {/* =========================================================================
          8. OUR RANGE OF ASP.NET CORE DEVELOPMENT SERVICES INCLUDE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Our Range Of ASP.NET Core Development Services Include
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Firevy.Co, we have excellence in delivering solutions for a wide variety of business types and sizes. Take a look at our most cutting-edge product offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {rangeServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-md transition-all"
            >
              <span>Get A Free Quote For Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </Container>
      </section>

      {/* =========================================================================
          9. BENEFITS OF ASP.NET CORE DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Benefits Of ASP.NET Core Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              ASP.NET Core Development provides many advantages to developers, both as a PaaS and an IaaS. The platform is also well-suited for ordinary, mid-level IT projects for companies. Here are some of its key advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          11. UNVEILING OUR INNOVATIVE SOLUTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          12. PROCESS WE FOLLOW
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          13. OUR STORY, THEIR WORDS
          ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          14. TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          15. SUCCESS MATRIX
          ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          16. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <SapphireTechStackGrid domainName="Microsoft" />

      {/* =========================================================================
          17. WE HAVE BEEN FEATURED IN
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          18. DIGITAL TRANSFORMATION CASE STUDIES
          ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          19. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={[
          {
            id: 1,
            question: "1. What is ASP.NET Core Development?",
            answer: "ASP.NET Core is an open-source, cross-platform framework created by Microsoft for building cloud-based, internet-connected applications such as web apps, IoT apps, and mobile backends."
          },
          {
            id: 2,
            question: "2. What are the key features of ASP.NET Core?",
            answer: "Key features include cross-platform execution (Windows, Linux, macOS), high performance, built-in dependency injection, unified MVC & Web API controllers, and seamless integration with cloud services like Azure."
          },
          {
            id: 3,
            question: "3. Can you migrate my legacy .NET Framework app to ASP.NET Core?",
            answer: "Yes, our certified Microsoft developers specialize in migrating legacy ASP.NET Web Forms and .NET Framework 4.x applications to modern ASP.NET Core (.NET 8/9) with full zero-downtime execution."
          },
          {
            id: 4,
            question: "4. Is ASP.NET Core suitable for microservices architecture?",
            answer: "Absolutely. ASP.NET Core's lightweight memory footprint, fast startup time, and support for Docker containers and gRPC make it an ideal choice for microservices architectures."
          },
          {
            id: 5,
            question: "5. How much does it cost to hire ASP.NET Core developers from Firevy.co?",
            answer: "We offer flexible engagement models including Dedicated Developers starting at $21/hour, monthly retainers, and fixed-scope project pricing tailored to your budget."
          },
          {
            id: 6,
            question: "6. Why choose Firevy.co for ASP.NET Core Development Services?",
            answer: "Firevy.co brings 23+ years of IT engineering excellence, 320+ 5-star Clutch reviews, certified Microsoft Azure & .NET developers, strict NDA compliance, and 24/7 SLA technical support."
          }
        ]}
      />

      {/* =========================================================================
          20. OUR RECENT BLOGS
          ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          21. WHAT SETS US APART AS ASP.NET CORE DEVELOPMENT SERVICES COMPANY?
          ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As ASP.NET Core Development Services Company?"
        description="Being unique is our quality! Firevy.co believes in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* =========================================================================
          22. HAVE ASP.NET CORE DEVELOPMENT CHALLENGE TO ADDRESS ?
          ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have ASP.NET Core Development Challenge To Address ?",
          description: "Get access to top ASP.NET Core developers to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          23. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
          ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default AspNetCoreDevelopmentService;
