import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import MobileAppAwardsMarqueeBanner from './MobileAppAwardsMarqueeBanner';
import MobileAppCuttingEdgeTechnologiesSection from './MobileAppCuttingEdgeTechnologiesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import BestMobileAppCompanyShowcase from './BestMobileAppCompanyShowcase';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import MobileAppComparativeAnalysis from './MobileAppComparativeAnalysis';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Code2,
  Cpu,
  Layers,
  Repeat,
  ShieldCheck,
  Zap,
  ArrowRight,
  Database,
  Cloud,
  CheckCircle2,
  RefreshCw,
  GitBranch,
  Terminal,
  Settings,
  Sparkles,
  Server,
  Globe
} from 'lucide-react';

export const SoftwareDevelopmentService = () => {
  // Key Software Development Offerings
  const softwareOfferings = [
    {
      title: 'Custom Enterprise Software Development',
      desc: 'Build robust, highly scalable corporate software solutions with bespoke business logic, automated workflows, and enterprise-grade security standards.',
      icon: <Code2 className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Cloud-Native & SaaS Application Development',
      desc: 'Architect multi-tenant SaaS platforms on AWS, Azure, and GCP leveraging containerized microservices, serverless functions, and auto-scaling infrastructure.',
      icon: <Cloud className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Modern Web & Microservices Architecture',
      desc: 'Develop high-speed, modern full-stack web platforms using React, Node.js, Python, and Go with resilient RESTful and GraphQL API backbones.',
      icon: <Layers className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'Legacy Software Modernization & Refactoring',
      desc: 'Deconstruct monolithic codebases into modular microservices, modernize outdated technology stacks, and eliminate technical debt without business downtime.',
      icon: <RefreshCw className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'API Engineering & System Integration',
      desc: 'Connect disparate enterprise ecosystems (ERP, CRM, payment gateways, and data warehouses) through secure, rate-limited, and fault-tolerant APIs.',
      icon: <GitBranch className="w-8 h-8 text-[#005F96]" />
    },
    {
      title: 'DevOps, CI/CD & Automated QA Engineering',
      desc: 'Implement automated testing pipelines, Infrastructure as Code (Terraform/Kubernetes), continuous delivery, and round-the-clock system observability.',
      icon: <ShieldCheck className="w-8 h-8 text-[#005F96]" />
    }
  ];

  // 6 Software Expertise Services
  const softwareExpertiseServices = [
    {
      id: 1,
      title: 'Software UI/UX & Architecture Design',
      desc: 'By considering user workflows, ergonomic data visualization, and accessibility standards, we design clean, intuitive, and high-converting software interfaces.'
    },
    {
      id: 2,
      title: 'MVP & Prototype Development',
      desc: 'Quickly validate your business thesis with a rapid, production-ready MVP. Collect feedback from early stakeholders and iterate with agile sprint cycles.'
    },
    {
      id: 3,
      title: 'Custom Application Development',
      desc: 'Whether building proprietary fintech algorithms, healthcare management engines, or logistics trackers, we turn unique specifications into market-leading software.'
    },
    {
      id: 4,
      title: 'Startup Software Engineering',
      desc: 'Empower high-growth startups with agile engineering pods, modular architectures, and scalable tech stacks that satisfy rigorous investor audits.'
    },
    {
      id: 5,
      title: 'Enterprise Software Integration',
      desc: 'Unify internal workflows by embedding third-party services, SAP/Salesforce bridges, and real-time event brokers (Kafka/RabbitMQ) into your application layer.'
    },
    {
      id: 6,
      title: 'AI & Data-Driven Software Solutions',
      desc: 'Augment corporate applications with predictive AI models, automated ETL data pipelines, vector search, and intelligent workflow automation.'
    }
  ];

  // Benefits Data
  const softwareBenefits = [
    {
      title: 'Tech-savvy Engineering',
      desc: 'Our full-stack engineers master TypeScript, Python, Java, Go, C#, Rust, Node.js, React, Kubernetes, and Cloud architectures with enterprise-grade coding standards.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="24" width="7" height="18" rx="1.5" />
          <rect x="18" y="16" width="7" height="26" rx="1.5" />
          <rect x="30" y="8" width="7" height="34" rx="1.5" />
          <path d="M7 16 L22 7 L32 14 L42 4" strokeWidth="2.5" />
          <path d="M34 4 H42 V12" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Domain Knowledge and Skill',
      desc: 'Experienced software architects across fintech, healthcare, logistics, e-commerce, and SaaS solve complex business challenges with time-tested design patterns.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6 L38 11 C38 26 31 37 24 42 C17 37 10 26 10 11 Z" />
          <path d="M17 24 L22 29 L31 19" strokeWidth="2.6" />
        </svg>
      )
    },
    {
      title: 'Architectural Excellence',
      desc: 'We follow Domain-Driven Design (DDD), Clean Architecture, and strict static analysis, ensuring your software codebase remains maintainable for decades.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="7" strokeWidth="2" />
          <path d="M20.5 4 H27.5 L29 9 L33.5 10.8 L38 8 L42 12 L39.2 16.5 L41 21 L46 22.5 V29.5 L41 31 L39.2 35.5 L42 40 L38 44 L33.5 41.2 L29 43 L27.5 48 H20.5 L19 43 L14.5 41.2 L10 44 L6 40 L8.8 35.5 L7 31 L2 29.5 V22.5 L7 21 L8.8 16.5 L6 12 L10 8 L14.5 10.8 L19 9 Z" />
        </svg>
      )
    },
    {
      title: 'Agile & DevOps Precision',
      desc: 'Sprint milestones, automated testing suites, automated CI/CD deployments, and continuous client feedback ensure on-schedule and on-budget deliveries.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="12" r="5" />
          <path d="M16 26 C16 21.6 19.6 18 24 18 C28.4 18 32 21.6 32 26" />
          <path d="M8 32 C12 30 16 34 24 34 C32 34 36 30 40 32" />
          <path d="M10 40 C14 38 18 41 24 41 C30 41 34 38 38 40" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      title: 'Complete IP Transparency',
      desc: 'You maintain 100% source code ownership, intellectual property rights, direct Slack/Teams team access, and continuous Git repository visibility throughout development.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="6" />
          <circle cx="32" cy="16" r="6" />
          <path d="M8 36 C8 29 14 26 20 26 C26 26 32 29 32 36" />
          <path d="M24 26 C28 26 38 28 38 36" />
        </svg>
      )
    },
    {
      title: 'Security & Enterprise Compliance',
      desc: 'Our software engineers incorporate SOC2, HIPAA, GDPR, and ISO 27001 compliance standards, regular vulnerability audits, and end-to-end data encryption.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="20" width="28" height="20" rx="4" />
          <path d="M16 20 V14 C16 9.6 19.6 6 24 6 C28.4 6 32 9.6 32 14 V20" />
          <circle cx="24" cy="30" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Best Custom Software Development Company | Firevy.Co"
        description="As a leading custom software development company with Good Review and High Rating, we strive to offer cutting-edge software solutions tailored to our clients' needs. Let's engineer robust, scalable software that surpasses your expectations."
        keywords="Software development company, custom software development services, enterprise software solutions, web and cloud development, Firevy.Co"
        url="https://Firevy.co/services/software-development-service"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading + Description + Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.12] font-sans"
                style={{ fontSize: 'clamp(32px, 4.2vw, 48px)' }}
              >
                Best Software<br />Development Company
              </h1>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                As a leading custom software development company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design and engineer software that surpasses your expectations and makes you an industry leader. Contact us now!
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>

                <Link
                  to="/services/hire-software-developers"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Hire Software Developers</span>
                  <span className="text-base font-bold">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Generated 3D Software Development Hero Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[480px] mx-auto flex items-center justify-center">
                <img
                  src="/images/software_development_hero.jpg"
                  alt="Best Software Development Company"
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-xl transition-transform duration-500 ease-out hover:scale-105 cursor-pointer border border-slate-100"
                  loading="eager"
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
      {/* 3. SOFTWARE DEVELOPMENT MARKET STATS & MARKET SIZE                        */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAFCFE] font-sans text-slate-800 border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Bar Growth Chart */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200/80 w-full max-w-[460px]">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 font-sans">
                  Enterprise Software Market Trajectory (USD Billions)
                </h3>
                
                <div className="h-48 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-slate-100">
                  {[
                    { year: '2021', val: '$512B', height: '42%', color: '#38BDF8' },
                    { year: '2022', val: '$585B', height: '54%', color: '#0EA5E9' },
                    { year: '2023', val: '$659B', height: '68%', color: '#0284C7' },
                    { year: '2024', val: '$745B', height: '82%', color: '#005F96' },
                    { year: '2025', val: '$850B', height: '98%', color: '#004B77' }
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <span className="text-[11px] font-bold text-slate-700 opacity-90 group-hover:scale-110 transition-transform">
                        {bar.val}
                      </span>
                      <div
                        className="w-full rounded-t-md transition-all duration-500 group-hover:brightness-110"
                        style={{ height: bar.height, backgroundColor: bar.color }}
                      />
                      <span className="text-xs font-semibold text-slate-600 mt-1 font-sans">
                        {bar.year}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Source: Global Enterprise Software & Cloud Spending Forecast
                </p>
              </div>
            </div>

            {/* Right: Narrative + CTA */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-bold text-[#005F96] uppercase tracking-wider block">
                Accelerating Digital Momentum
              </span>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Global Software Market Growth & Enterprise Demand
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75]">
                The global custom software development market is experiencing unprecedented demand, surpassing USD 700 billion. Businesses worldwide are modernizing legacy infrastructure, moving to autonomous cloud platforms, and integrating real-time automated intelligence to stay ahead.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-[5px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] transition-all shadow-sm"
                >
                  Connect With A Software Architect
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. DELIVERING IMPACTFUL SOFTWARE APPLICATION SERVICES                      */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: 3D Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center select-none overflow-hidden rounded-2xl group border border-slate-100 shadow-md">
                <img
                  src="/images/software_development_delivery.jpg"
                  alt="Delivering Impactful Software Development Services"
                  className="w-full h-auto object-contain max-h-[420px] transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Title & Detailed Description */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Delivering Impactful Software<br />Development Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8] text-left">
                We provide a comprehensive suite of custom software development services covering systems architecture, interface design, cloud infrastructure, integration, and continuous 24/7 management. From initial requirements ideation to high-availability deployment, our battle-tested engineers build secure, fault-tolerant, and high-performance software systems that adapt to evolving market requirements. Partner with Firevy's senior developers to take your technological capabilities to new heights.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. TOP RATED CLUTCH AWARDS MARQUEE                                        */}
      {/* ========================================================================= */}
      <MobileAppAwardsMarqueeBanner />

      {/* ========================================================================= */}
      {/* 6. CREATING EXCELLENT SOFTWARE FOR EVERY BUSINESS                         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Creating Excellent Software for Every Business
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Quote Card */}
            <div className="lg:col-span-5 bg-[#F0F8FF] border border-[#BAE6FD]/80 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden shadow-xs min-h-[340px] group transition-all duration-300 hover:shadow-md">
              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>
              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Smart and Reliable<br />Software
              </h3>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Discover the potential of entirely customizable software development services with a reliable enterprise engineering partner. Custom software engineered specifically for your organizational workflows and performance benchmarks is our specialty. We emphasize architectural modularity, high concurrency, and data security to guarantee your systems scale seamlessly.
              </p>
              <p>
                As a premier custom software development company, our team collaborates closely with your technical stakeholders from conception to delivery. With modern CI/CD pipelines, containerization, and agile sprints, we convert ambitious digital concepts into mission-critical systems that drive measurable ROI.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES FIREVY USE                                   */}
      {/* ========================================================================= */}
      <MobileAppCuttingEdgeTechnologiesSection companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 8. DEDICATED SOFTWARE DEVELOPMENT CAPABILITIES                            */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-100 text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#005F96] uppercase tracking-wider block mb-2 font-sans">
              End-to-End Engineering Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Comprehensive Software Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              We engineer scalable software platforms with rigorous architecture reviews, zero-downtime deployments, and round-the-clock reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {softwareOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {offering.icon}
                  </div>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] mb-2.5 group-hover:text-[#005F96] transition-colors font-sans">
                    {offering.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal font-sans">
                    {offering.desc}
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-6 flex items-center text-xs font-bold text-[#005F96] group-hover:translate-x-1 transition-transform">
                  <span>Explore Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR PREMIUM SERVICES GRID                                              */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 10. MEET FIREVY'S EXCEPTIONAL TEAM OF SEASONED EXPERTS                    */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS                    */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Custom Software Development" />

      {/* ========================================================================= */}
      {/* 12. EXPLORE THE TRANSFORMATIVE IMPACT OF CUSTOM SOFTWARE                  */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Custom Software On Your Business Success" />

      {/* ========================================================================= */}
      {/* 13. ABOUT US STATS (8-CARD GRID)                                          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 14. SECTORS THRIVING THROUGH FIREVY BESPOKE SOFTWARE SERVICES             */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.Co’s Bespoke Software Development Services" />

      {/* ========================================================================= */}
      {/* 15. SUCCESS STORIES PORTFOLIO & METRICS                                   */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 16. THE EXPERTISE OF OUR SOFTWARE DEVELOPMENT SERVICES                    */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3 px-4">
            <h2
              className="font-[800] text-white tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              The Expertise of Our Software Development Services
            </h2>
            <p
              className="text-white/90 font-normal max-w-3xl mx-auto"
              style={{ fontSize: '13.5px', lineHeight: '1.65' }}
            >
              Our software engineering methodology combines architectural clarity, robust APIs, automated test coverage, and modern cloud deployment frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1320px] mx-auto">
            {softwareExpertiseServices.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[14px] sm:rounded-[16px] p-6 sm:p-7 flex flex-col justify-between text-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65] font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center text-xs font-bold text-[#005F96]">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 17. BEST SOFTWARE COMPANY SHOWCASE (MOCKUPS & VIDEO)                      */}
      {/* ========================================================================= */}
      <BestMobileAppCompanyShowcase title="Best Custom Software Development Company" />

      {/* ========================================================================= */}
      {/* 18. TECHNOLOGY STACK PROFICIENTLY USED                                    */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection />

      {/* ========================================================================= */}
      {/* 19. PROUD AWARDS & RECOGNITION BANNER                                     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 20. BENEFITS OF THE BEST SOFTWARE DEVELOPMENT COMPANY                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Choosing Firevy as Your Software Development Company
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              From enterprise software modernization to agile MVP engineering, we deliver battle-tested digital products designed to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {softwareBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#F8FBFE] rounded-2xl p-7 border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-[#0B0F19] mb-2 font-sans">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 21. BUSINESS FRIENDLY HIRING MODELS                                       */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 22. COMPARATIVE ANALYSIS                                                  */}
      {/* ========================================================================= */}
      <MobileAppComparativeAnalysis />

      {/* ========================================================================= */}
      {/* 23. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 24. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Our agile software development life cycle from architecture blueprints and sprint development to CI/CD deployment and SLA support."
      />

      {/* ========================================================================= */}
      {/* 25. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 26. TRUSTED BRANDS GRID                                                   */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 27. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 28. WHAT OUR CLIENTS SAY (CLUTCH REVIEWS CAROUSEL)                        */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 29. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 30. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 31. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide solutions that empower modern enterprises. Feel free to contact us with any questions."
        companyName="Firevy.Co"
      />

      {/* ========================================================================= */}
      {/* 32. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 33. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <MobileAppWhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 34. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Software Development Challenge To Address ?"
          subtitle="Get access to top Software Engineers and Architects to transform your vision into high-performance systems."
          buttonText="Hire Developers Now"
        />
      </div>
    </div>
  );
};

export default SoftwareDevelopmentService;
