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
  Server,
  Cloud,
  CheckCircle2,
  Lock,
  Boxes
} from 'lucide-react';

export const CSharpDevelopmentService = () => {

  // 6 Benefits of C Sharp Development
  const csharpBenefits = [
    {
      title: "High Performance & Execution Speed",
      desc: "Compile to native CIL bytecode with optimized JIT execution, providing lightning-fast response times for complex backend services and desktop applications.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "Strong Type Safety & Robust Security",
      desc: "Benefit from automatic garbage collection, strict type checks, exception handling, and built-in memory protection against buffer overflows.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Cross-Platform Versatility (.NET Core / MAUI)",
      desc: "Build once and deploy across Windows, Linux, macOS, iOS, and Android seamlessly using unified .NET ecosystem tools.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Native Azure & Cloud Integration",
      desc: "Engineered for cloud-native microservices, serverless Azure Functions, containerized Docker deployments, and Kubernetes orchestration.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      title: "Rich Ecosystem & Modern Language Features",
      desc: "Utilize LINQ queries, async/await pattern, pattern matching, records, dependency injection, and millions of NuGet packages.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: "Enterprise Maintenance & Microsoft Support",
      desc: "Backed by Microsoft's continuous LTS releases, enterprise-grade tooling with Visual Studio, and long-term backwards compatibility.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  // 6 Core Services
  const csharpServices = [
    {
      title: "Custom C# Web Application Development",
      desc: "Build scalable, responsive web portals and web APIs leveraging ASP.NET Core MVC, Razor Pages, and Blazor WebAssembly."
    },
    {
      title: "C# Enterprise Software & Backend Systems",
      desc: "Develop robust mission-critical enterprise platforms, distributed event-driven microservices, and high-throughput transactional backends."
    },
    {
      title: "Cross-Platform Mobile & Desktop (MAUI / WPF)",
      desc: "Engineered desktop apps using WPF / WinUI 3 and cross-platform native iOS & Android applications using .NET MAUI."
    },
    {
      title: "C# Cloud-Native Services & Azure Integration",
      desc: "Deploy serverless Azure Functions, Azure App Services, Service Bus messaging queues, and Cosmos DB integrations."
    },
    {
      title: "RESTful & gRPC API Development",
      desc: "High-performance API endpoints, OpenAPI/Swagger contracts, OAuth2/OIDC security, and gRPC microservice communication."
    },
    {
      title: "Legacy .NET Modernization & C# Migration",
      desc: "Refactor legacy .NET Framework applications to modern cross-platform .NET 8 / .NET 9 with containerization and zero downtime."
    }
  ];

  // 8 FAQs
  const csharpFaqs = [
    {
      q: "Why choose C# for enterprise software development?",
      a: "C# combined with modern .NET provides unmatched type safety, high execution performance, native cross-platform support, rich tooling in Visual Studio, and continuous Long Term Support (LTS) backed by Microsoft."
    },
    {
      q: "Can C# applications run natively on Linux and macOS?",
      a: "Yes! Since the release of .NET Core (and unified .NET 6/7/8/9), C# code compiles and runs natively across Windows, Linux servers, macOS, and containerized Docker environments with high efficiency."
    },
    {
      q: "What C# frameworks do your developers specialize in?",
      a: "Our developers specialize in ASP.NET Core, Entity Framework Core, Blazor, .NET MAUI, WPF, gRPC, SignalR, Azure SDKs, and xUnit/NUnit testing suites."
    },
    {
      q: "Do you offer migration from legacy .NET Framework to modern .NET 8 / .NET 9?",
      a: "Absolutely. We perform complete architectural audits, code refactoring, dependency upgrades, and database migrations to upgrade your legacy .NET Framework apps to modern cross-platform .NET."
    },
    {
      q: "How do you ensure security in C# application development?",
      a: "We enforce strict security practices including data encryption at rest and in transit, OAuth2/OpenID Connect authentication, OWASP top 10 protection, parametric EF Core queries to eliminate SQL injection, and automated CI/CD static code scanning."
    },
    {
      q: "Can C# be used for real-time applications?",
      a: "Yes! Using ASP.NET Core SignalR and gRPC, C# enables bi-directional real-time communication for live dashboards, chat solutions, financial trading platforms, and IoT telemetry pipelines."
    },
    {
      q: "What engagement models do you offer for hiring C# developers?",
      a: "We offer flexible hiring models including Dedicated Developers, Project-Based Fixed Price contracts, and Hourly Staff Augmentation tailored to your project timeline."
    },
    {
      q: "How long does it take to start a C# development project with Firevy?",
      a: "Following our initial technical consultation and requirements scope, we can onboard dedicated C# engineers and initiate development within 48 to 72 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`C Sharp Development Services | ${BRAND.name}`}
        description="Build high-performance enterprise web apps, desktop software, cross-platform mobile solutions, and cloud microservices with custom C# and .NET development."
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
            <span className="text-[#005F96] font-semibold">C Sharp Development</span>
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
                C Sharp Development<br className="hidden sm:inline" /> Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Engineer secure, enterprise-grade web applications, cloud microservices, desktop solutions, and mobile apps with custom C# and .NET development. Firevy brings deep expertise in ASP.NET Core, EF Core, Blazor, and Azure cloud infrastructure to accelerate your digital transformation.
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
                      <linearGradient id="csharpBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F0F7FC" />
                        <stop offset="100%" stopColor="#E0F2FE" />
                      </linearGradient>
                      <filter id="softShadowCsharp" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#005F96" floodOpacity="0.12" />
                      </filter>
                    </defs>

                    {/* Backdrop Blob */}
                    <path
                      d="M 90,170 C 40,150 40,90 90,60 C 130,30 210,20 270,40 C 320,10 400,20 430,70 C 470,100 480,170 440,210 C 470,260 400,310 330,300 C 270,320 190,320 140,290 C 80,300 40,230 90,170 Z"
                      fill="url(#csharpBgGrad)"
                    />

                    {/* 3D C# Architecture Shield Center */}
                    <g transform="translate(250, 160)" filter="url(#softShadowCsharp)">
                      <circle cx="0" cy="0" r="65" fill="#FFFFFF" stroke="#005F96" strokeWidth="3" />
                      <circle cx="0" cy="0" r="52" fill="#005F96" />
                      {/* C# Logo Text / Symbol */}
                      <text x="-16" y="12" fill="white" fontSize="38" fontWeight="900" fontFamily="sans-serif">C#</text>
                    </g>

                    {/* Surrounding Nodes */}
                    <g transform="translate(130, 90)" filter="url(#softShadowCsharp)">
                      <rect x="0" y="0" width="80" height="42" rx="8" fill="#1E293B" />
                      <text x="40" y="26" fill="#38BDF8" fontSize="12" fontWeight="700" textAnchor="middle">ASP.NET</text>
                    </g>

                    <g transform="translate(290, 80)" filter="url(#softShadowCsharp)">
                      <rect x="0" y="0" width="80" height="42" rx="8" fill="#1E293B" />
                      <text x="40" y="26" fill="#38BDF8" fontSize="12" fontWeight="700" textAnchor="middle">Azure Cloud</text>
                    </g>

                    <g transform="translate(110, 230)" filter="url(#softShadowCsharp)">
                      <rect x="0" y="0" width="90" height="42" rx="8" fill="#1E293B" />
                      <text x="45" y="26" fill="#38BDF8" fontSize="12" fontWeight="700" textAnchor="middle">EF Core SQL</text>
                    </g>

                    <g transform="translate(300, 220)" filter="url(#softShadowCsharp)">
                      <rect x="0" y="0" width="90" height="42" rx="8" fill="#1E293B" />
                      <text x="45" y="26" fill="#38BDF8" fontSize="12" fontWeight="700" textAnchor="middle">Microservices</text>
                    </g>

                    {/* Connection Lines */}
                    <line x1="170" y1="110" x2="210" y2="135" stroke="#005F96" strokeWidth="2" strokeDasharray="4 3" />
                    <line x1="330" y1="100" x2="290" y2="130" stroke="#005F96" strokeWidth="2" strokeDasharray="4 3" />
                    <line x1="160" y1="230" x2="205" y2="185" stroke="#005F96" strokeWidth="2" strokeDasharray="4 3" />
                    <line x1="330" y1="220" x2="290" y2="185" stroke="#005F96" strokeWidth="2" strokeDasharray="4 3" />
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
          SECTION 2: TRUSTED C SHARP DEVELOPMENT SERVICES PARTNER
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
                        <Code2 className="w-6 h-6 text-sky-200" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="text-center font-black text-base">
                        .NET 9 & C#
                      </div>
                      <div className="bg-emerald-500 text-white rounded-md py-0.5 text-[9px] font-bold text-center">
                        Enterprise Grade
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-sky-200 shadow-sm text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>High-Performance Scalable Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Trusted C Sharp Development<br className="hidden sm:inline" /> Services Partner
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                As an industry-acclaimed C# and .NET Development Services partner, Firevy builds resilient enterprise backends, cloud-native microservices, custom Web APIs, and multi-platform software solutions. We leverage the full power of modern .NET 8 / .NET 9, ASP.NET Core, and Microsoft Azure to deliver secure, maintainable code engineered for high traffic and mission-critical reliability.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">99.9% Uptime</div>
                  <div className="text-xs font-medium text-slate-500">Cloud Reliability</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">Type Safe</div>
                  <div className="text-xs font-medium text-slate-500">Robust Execution</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">Cross-Platform</div>
                  <div className="text-xs font-medium text-slate-500">Win, Linux & Mac</div>
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
          SECTION 3: PROFESSIONAL CUSTOM C SHARP DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Professional Custom C Sharp development services
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
                  Engineered for High Throughput, Enterprise Security, and Seamless Microservices
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our custom C# development team designs end-to-end software architectures that adapt to evolving business landscapes. From building asynchronous REST/gRPC Web APIs to deploying containerized Docker applications on Kubernetes, we ensure your systems deliver optimal speed and uptime.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Whether you need a new cloud-native ASP.NET Core platform or seek to modernize existing .NET Framework enterprise assets, Firevy delivers clean, maintainable, and fully tested C# source code built to Microsoft industry standards.
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
              Our C Sharp Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Tailored C# software engineering solutions for startups, scale-ups, and global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {csharpServices.map((service, idx) => (
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
              Key Advantages of C Sharp Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Discover why leading organizations trust C# for critical enterprise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {csharpBenefits.map((item, idx) => (
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
      <ProcessWeFollow title="Process We Follow" subtitle="Our structured C# engineering lifecycle ensures high code quality, automated CI/CD deployment, and long-term project success." />

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
        subtitle="Explore answers to common questions about our C Sharp development services."
        faqs={csharpFaqs}
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

export default CSharpDevelopmentService;
