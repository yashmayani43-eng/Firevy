import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronRight,
  ArrowLeft,
  Globe,
  Sparkles,
  Code2,
  Cloud,
  Lock,
  Cpu,
  RefreshCw,
  Compass,
  Award,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3,
  Layers,
  Smartphone,
  Server,
  Play,
  X
} from 'lucide-react';

export const WebApplicationDevelopmentService = () => {
  const [isCineStreamVideoOpen, setIsCineStreamVideoOpen] = useState(false);

  // 1. Expertise In Our Web Application Development (6 cards matching AI Consulting style)
  const webExpertiseCards = [
    {
      title: 'Custom Web Application Development',
      desc: 'Build bespoke, high-performance web applications tailored to complex enterprise workflows, integrating reactive frontends, resilient microservices, and auto-scaling cloud databases.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 8l3 3-3 3" />
          <path d="M13 14h4" />
        </svg>
      )
    },
    {
      title: 'Progressive Web Applications (PWA)',
      desc: 'Deliver native-like mobile and desktop experiences through modern web browsers with offline caching, push notifications, background sync, and lightning-fast loading speeds.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <path d="M9 6h6" />
        </svg>
      )
    },
    {
      title: 'Cloud-Native SaaS Platforms',
      desc: 'Architect secure multi-tenant Software-as-a-Service (SaaS) platforms with dynamic subscription billing, role-based access control, tenant isolation, and automated CI/CD deployments.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },
    {
      title: 'Enterprise Web Portals & Dashboards',
      desc: 'Engineer customized B2B/B2C customer portals, vendor platforms, and real-time executive analytics cockpits that unify disparate data sources into intuitive interactive interfaces.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      )
    },
    {
      title: 'Full-Stack API & Microservices',
      desc: 'Design decoupled, high-concurrency backends using RESTful APIs, GraphQL, and event-driven architectures that interconnect web applications with third-party ecosystems seamlessly.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="10" y1="21" x2="14" y2="3" />
        </svg>
      )
    },
    {
      title: 'Legacy Web Modernization & Migration',
      desc: 'Refactor outdated monolithic web platforms into agile, cloud-native architectures (AWS, Azure, GCP) with zero operational downtime, improved security compliance, and lowered TCO.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      )
    }
  ];

  // 2. Benefits of Web Application Development Services (6 cards matching AI Consulting style)
  const webBenefitsData = [
    {
      title: 'High Concurrency & Scalable Performance',
      desc: 'Our web applications leverage distributed caching, CDNs, and elastic microservices to handle millions of simultaneous users with sub-second response times.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform Accessibility & Global Reach',
      desc: 'Run seamlessly on any modern device, operating system, and browser without requiring app store downloads, dramatically reducing customer onboarding friction.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: 'Enterprise-Grade Security & Zero-Trust Compliance',
      desc: 'Safeguard customer data and corporate intellectual property with zero-trust architectures, end-to-end encryption, automated vulnerability scanners, and SOC-2/GDPR compliance.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'Modular Maintainability & Rapid Iteration',
      desc: 'Decoupled component-driven architectures enable rapid feature releases, automated testing pipelines, and effortless continuous integration without system outages.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: 'Seamless Third-Party Ecosystem Integrations',
      desc: 'Integrate with leading payment gateways, CRM/ERP platforms, marketing automation suites, and cloud analytics lakes through standardized, secure APIs.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
          <polyline points="18 9 22 12 18 15" />
          <line x1="10" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      title: 'Maximized ROI & Lower Total Cost of Ownership',
      desc: 'Eliminate repetitive manual workflows, minimize infrastructure overhead with auto-scaling cloud resources, and drive revenue through intuitive self-service digital experiences.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  // 3. FAQ List tailored specifically for Web Application Development Services
  const webFaqList = [
    {
      id: 1,
      question: 'What is the difference between a website and a custom web application?',
      answer: 'While a standard website is primarily informative with static or semi-dynamic content, a custom web application is an interactive software program executed in the browser. It features complex business logic, user authentication, live data manipulation, automated workflows, and deep integrations with enterprise databases and third-party APIs.'
    },
    {
      id: 2,
      question: 'Which frontend and backend tech stacks do your web developers specialize in?',
      answer: 'Our engineers excel across modern reactive frontends including React.js, Next.js, Vue.js, Angular, and TypeScript. For backend architectures, we build resilient microservices in Node.js, Express, Python (Django, FastAPI), Go, and .NET Core, deployed on cloud providers such as AWS, Google Cloud, and Microsoft Azure.'
    },
    {
      id: 3,
      question: 'How do you ensure high performance, lightning speed, and cybersecurity?',
      answer: 'We employ multi-layer caching (Redis, Memcached), Content Delivery Networks (Cloudflare, AWS CloudFront), code splitting, lazy loading, and database indexing. For cybersecurity, we implement OWASP Top 10 defenses, zero-trust RBAC, end-to-end SSL/TLS encryption, and automated CI/CD security vulnerability scans.'
    },
    {
      id: 4,
      question: 'Can you modernize or re-platform our existing legacy web application?',
      answer: 'Yes. We specialize in legacy system modernization—decoupling bloated monoliths into scalable microservices, migrating on-premise relational databases to hyperscale cloud systems, and updating outdated user interfaces to modern, accessible design systems without disrupting your ongoing business operations.'
    },
    {
      id: 5,
      question: 'What is the typical development timeline for a custom web application?',
      answer: 'A standard proof-of-concept (PoC) or Minimum Viable Product (MVP) typically takes 6 to 10 weeks, while comprehensive enterprise web applications proceed in agile two-week sprints across 3 to 6 months with continuous deployment and milestone demonstrations.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Web Application Development Services | Custom Web App Company | Firevy.Co"
        description="Build high-performance, secure, and scalable web applications with Firevy. Custom web app engineering, PWAs, enterprise SaaS platforms, and cloud-native microservices."
        keywords="web application development services, custom web app development, pwa development, enterprise web application company, saas web app developers, react web development, full stack web development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (MATCHING AI CONSULTING BANNER & LAYOUT)                   */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[41px] leading-[1.2]"
              >
                Web Application Development Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our custom web application development is tailored to the business needs of startups, high-growth tech firms, and global enterprises seeking to engineer secure, high-concurrency web platforms that drive sustainable revenue growth.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-md hover:shadow-lg transform active:scale-95 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Hero Meeting Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/software_dev_laptop_hero.svg"
                  alt="Web Application Development Team"
                  className="w-full h-auto object-contain max-h-[360px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO)                                           */}
      {/* ========================================================================= */}
      <BrandLogoMarquee companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 2. LEADING WEB APPLICATION DEVELOPMENT COMPANY                            */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/software_dev_desk_brief.svg"
                  alt="Leading Web Application Development Team"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading Web Application <br />
                Development <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our web application engineering firm uses deep architectural proficiency and modern full-stack frameworks to build high-performance web systems that yield the highest operational resilience for <strong className="text-[#005F96] font-semibold">best enterprise software development company</strong> in competitive digital environments. We engineer responsive, secure web platforms that empower cross-functional teams to automate workflows and optimize customer engagement. From multi-tenant SaaS cloud portals to scalable microservice backends, we architect your web infrastructure to ensure friction-free operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. WEB APPLICATION DEVELOPMENT MARKET STATS                               */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Web Application <br />
                Development <br />
                Market Stats
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                The global web application development and enterprise cloud software market was estimated to be worth US$167.30 billion in 2023. It is anticipated to reach US$342.80 billion by 2030, with a compound annual growth rate (CAGR) of 10.8% from 2023 to 2030, driven by rapid cloud migration, microservices, and digital-first customer channels.
              </p>

              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-md hover:shadow-lg transform active:scale-95 group"
                >
                  <span>Connect With An Expert</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: Market Stats Stacked Bar Chart */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/software_market_volume_chart.png"
                  alt="Web Application Market Volume (USD Billion)"
                  className="w-full h-auto object-contain rounded-xl shadow-sm border border-slate-100"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3.1 DIGITAL REVOLUTION AROUND THE WORLD                                   */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Digital Revolution Infographic Card */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] bg-[#F1F6FB] rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Infographic Header */}
                <div className="text-left mb-6 sm:mb-8">
                  <h3 className="text-xs sm:text-[13px] font-extrabold text-slate-800 tracking-wider uppercase">
                    DIGITAL REVOLUTION AROUND THE WORLD
                  </h3>
                  <p className="text-[9px] sm:text-[9.5px] text-slate-400 font-semibold tracking-wide uppercase mt-1">
                    CHANGE IN THE USE OF CONNECTED DEVICES AND SERVICES OVER TIME
                  </p>
                </div>

                {/* 4 Stat Circles Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center items-start">
                  {/* Item 1: Total Population */}
                  <div className="flex flex-col items-center">
                    <div className="text-[8.5px] sm:text-[9.5px] font-bold text-slate-600 uppercase tracking-tight h-7 flex items-center justify-center text-center leading-tight">
                      TOTAL<br />POPULATION
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#CE5C9E] flex items-center justify-center text-white my-3 shadow-sm transition-transform duration-300 hover:scale-105">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        <path d="M18.5 10c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5 16 6.12 16 7.5s1.12 2.5 2.5 2.5zm0 1.5c-1.39 0-2.62.48-3.56 1.28 1.32.79 2.29 2.05 2.51 3.52.02 0 .04 0 .05 0 2.1 0 3.5 1.05 3.5 2.2v1.5H23v-1.5c0-1.77-3.03-3.5-4.5-3.5z" opacity="0.85" />
                        <path d="M5.5 10c1.38 0 2.5-1.12 2.5-2.5S6.88 5 5.5 5 3 6.12 3 7.5 4.12 10 5.5 10zm0 1.5C4.03 11.5 1 13.23 1 15v1.5h2V15c0-1.15 1.4-2.2 3.5-2.2.02 0 .04 0 .05 0 .22-1.47 1.19-2.73 2.51-3.52-.94-.8-2.17-1.28-3.56-1.28z" opacity="0.85" />
                      </svg>
                    </div>
                    <div className="font-extrabold text-[16px] sm:text-[19px] lg:text-[21px] text-slate-900 leading-tight">
                      8.01
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-tight">
                      BILLION
                    </div>
                    <div className="mt-2 text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase leading-tight">
                      URBANISATION:<br />
                      <span className="font-bold text-slate-700">58%</span>
                    </div>
                  </div>

                  {/* Item 2: Unique Mobile Phone Users */}
                  <div className="flex flex-col items-center">
                    <div className="text-[8.5px] sm:text-[9.5px] font-bold text-slate-600 uppercase tracking-tight h-7 flex items-center justify-center text-center leading-tight">
                      UNIQUE MOBILE<br />PHONE USERS
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#E25547] flex items-center justify-center text-white my-3 shadow-sm transition-transform duration-300 hover:scale-105">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2.5" ry="2.5" fill="none" />
                        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                      </svg>
                    </div>
                    <div className="font-extrabold text-[16px] sm:text-[19px] lg:text-[21px] text-slate-900 leading-tight">
                      5.66
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-tight">
                      BILLION
                    </div>
                    <div className="mt-2 text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase leading-tight">
                      VS. POPULATION<br />
                      <span className="font-bold text-slate-700">69.0%</span>
                    </div>
                  </div>

                  {/* Item 3: Internet Users */}
                  <div className="flex flex-col items-center">
                    <div className="text-[8.5px] sm:text-[9.5px] font-bold text-slate-600 uppercase tracking-tight h-7 flex items-center justify-center text-center leading-tight">
                      INTERNET<br />USERS
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#3D1A2E] flex items-center justify-center text-white my-3 shadow-sm transition-transform duration-300 hover:scale-105">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0 4-10 15.3 15.3 0 0 0-4-10z" />
                      </svg>
                    </div>
                    <div className="font-extrabold text-[16px] sm:text-[19px] lg:text-[21px] text-slate-900 leading-tight">
                      5.18
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-tight">
                      BILLION
                    </div>
                    <div className="mt-2 text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase leading-tight">
                      VS. POPULATION<br />
                      <span className="font-bold text-slate-700">64.4%</span>
                    </div>
                  </div>

                  {/* Item 4: Active Social Media Users */}
                  <div className="flex flex-col items-center">
                    <div className="text-[8.5px] sm:text-[9.5px] font-bold text-slate-600 uppercase tracking-tight h-7 flex items-center justify-center text-center leading-tight">
                      ACTIVE SOCIAL<br />MEDIA USERS
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#1D6FB8] flex items-center justify-center text-white my-3 shadow-sm transition-transform duration-300 hover:scale-105">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9H7V9h10v2zm-4 4H7v-2h6v2zm4-6H7V7h10v2z" />
                      </svg>
                    </div>
                    <div className="font-extrabold text-[16px] sm:text-[19px] lg:text-[21px] text-slate-900 leading-tight">
                      4.86
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-tight">
                      BILLION
                    </div>
                    <div className="mt-2 text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase leading-tight">
                      VS. POPULATION<br />
                      <span className="font-bold text-slate-700">60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Content & CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Digital Revolution Around the <br className="hidden sm:inline" />
                World
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                The world&apos;s population passed 8 billion on 15 November and has now reached more than 8.01 billion with more than 58 % of the world&apos;s population living in Urban areas. Approx 5.66 billion( 69% of world&apos;s population) uses mobiles with a 3.5% increase in the past year, and around 178 million new users have joined over the past 12 months. There are 5.18 billion internet users which is 64.4 percent of the world&apos;s total population while global internet users have increased by 1.9 percent over the past 12 months. There are 4.86 billion social media users globally which is 60 percent of the global population while recently,138 million new users have joined, equating to an annual growth of approximately 3%.
              </p>

              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005D95] hover:bg-[#004A75] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg transform active:scale-95 group"
                >
                  <span>Connect With An Expert</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER                                                */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE WEB APPLICATION DEVELOPMENT EXPERTS              */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Web Application Development Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              {/* Subtle Topographic Background Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              {/* Quote Icon */}
              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Strategize, Engineer, And Scale With Modern Web Applications
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Even if your organization collects massive amounts of business data, data alone will not produce competitive advantage unless you have a robust, responsive web application ecosystem. When evaluating <strong className="text-[#005F96] font-semibold">custom web application development</strong> frameworks and computing architectures, you need the guidance of a proven web engineering partner to eliminate technical debt and guarantee high availability.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize our specialized full-stack engineers to build progressive web apps, automate complex operations, and deploy resilient production backends across AWS, Google Cloud, or Microsoft Azure. Whether you are an early-stage startup or a Fortune 500 company, our Web Application Development Company will help you launch high-impact digital experiences.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES + 4 STAT BOXES                                         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#DDF1FB] text-center font-sans border-t border-cyan-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-700 leading-relaxed font-sans">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1 */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#005F96] text-white text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/success_stories/data_analytics.svg"
                  alt="Enterprise SaaS Analytics Web Application"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Enterprise SaaS Analytics Web Application
              </h3>
            </div>

            {/* Card 2 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/redetect.svg"
                  alt="Document Quality Analyzer Website Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Document Quality Analyzer Website Development
              </h3>
            </div>

            {/* Card 3 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/file_sharing_application.svg"
                  alt="Cloud-Native File Sharing Web Application"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Cloud-Native File Sharing Web Application
              </h3>
            </div>
          </div>

          {/* Centered "View All Portfolio" Button */}
          <div className="mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-9 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Colorful Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Purple */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                320+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <a
                href="#consultation-form"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. EXPERTISE IN OUR WEB APPLICATION DEVELOPMENT                           */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our Web Application Development
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading Web Application Development Company, we have years of experience in this field. Our expertise include:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {webExpertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="expertise-hover-card p-7 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5 shadow-xs`}>
                    {card.icon}
                  </div>
                  <h3 className="font-[800] text-[#0B0F19] text-[18px] sm:text-[19px] leading-[1.3] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.7] font-[400]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8.1 BEST WEB DEVELOPMENT COMPANY - VIDEO SHOWCASE                         */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white font-sans text-center relative overflow-hidden border-b border-slate-100 select-none">
        <Container>
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight mb-10 sm:mb-14">
            Best Web Development Company
          </h2>

          {/* Video Showcase Card Container with Decorative Background Accent Circles */}
          <div className="relative max-w-4xl mx-auto flex items-center justify-center py-2 sm:py-4">
            {/* Left Soft Sky Blue Background Accent Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 sm:-left-20 w-56 sm:w-72 h-56 sm:h-72 bg-[#D8F0FA] rounded-full filter blur-[1px] opacity-80 -z-0 pointer-events-none" />

            {/* Right Soft Pink Background Accent Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-20 w-56 sm:w-72 h-56 sm:h-72 bg-[#FDE2E4] rounded-full filter blur-[1px] opacity-80 -z-0 pointer-events-none" />

            {/* CineStream Interactive Video Card */}
            <div
              onClick={() => setIsCineStreamVideoOpen(true)}
              className="relative z-10 w-full rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden cursor-pointer group border border-slate-800/80 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-pink-500/10 bg-[#06080E]"
            >
              {/* Card Graphic Image */}
              <img
                src="/images/cinestream_video_card.png"
                alt="CineStream - Best Web Development Company Showcase"
                className="w-full h-auto object-cover block"
              />

              {/* Firevy.co Brand Logo Overlay in Top-Right Corner */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-7 lg:top-7 lg:right-9 z-20 flex items-center space-x-1.5 sm:space-x-2">
                <img
                  src="/firevy_logo_white.png"
                  alt="Firevy.co"
                  className="h-5 sm:h-6 md:h-7 w-auto object-contain brightness-125 drop-shadow-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-white font-black text-sm sm:text-base md:text-[19px] tracking-tight drop-shadow font-sans">
                  Firevy<span className="text-[#00A3E0]">.co</span>
                </span>
              </div>

              {/* Subtle Animated Glow on Play Button Area */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-transparent group-hover:bg-white/10 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CineStream Video Lightbox Modal */}
      {isCineStreamVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 flex items-center justify-between border-b border-slate-800">
              <h3 className="font-bold text-white text-sm sm:text-base">
                CineStream - Best Web Development Showcase
              </h3>
              <button
                onClick={() => setIsCineStreamVideoOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                title="CineStream Web Application Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. PROUD TO HAVE PICKED THESE UP ALONG THE WAY                            */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF WEB APPLICATION DEVELOPMENT SERVICES                      */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Web Application Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Web Application Development Services help companies engineer high-availability digital architectures and succeed in the modern web era. Benefits include:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {webBenefitsData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start text-left border border-slate-100"
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[#0B0F19] text-[18px] sm:text-[19px] leading-[1.3] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.7] font-[400]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. BUSINESS FRIENDLY HIRING MODELS                                       */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 12. UNVEILING OUR INNOVATIVE SOLUTION                                     */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 14. OUR STORY, THEIR WORDS                                                */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 15. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 16. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK                                                      */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="Web Application Development" />

      {/* ========================================================================= */}
      {/* 18. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION THROUGH INNOVATION                             */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={webFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide architectures that empower scalable growth. Feel free to contact us in case of any query not mentioned below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS WEB APPLICATION DEVELOPMENT COMPANY             */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Web Application Development Company?"
        subtitle="Being unique is our quality! Firevy.Co believes in the principles that give us an edge over our competitors. We are a renowned web software engineering organization serving customers with end-to-end support. Our architecture design, prototyping, and resilient full-stack deployment stand us one level above competitors."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP WEB DEVELOPERS (CTA BANNER)                         */}
      {/* ========================================================================= */}
      <section className="relative w-full max-w-full py-9 sm:py-11 bg-[#005D95] text-white text-center font-sans overflow-hidden border-b border-slate-200">
        {/* Background Floating Geometric Circle & Square Overlay Graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[16px] border-white/10 opacity-70" />
          <div className="absolute top-8 left-16 w-12 h-12 rounded-full bg-white/10 opacity-40" />
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-3xl border-[20px] border-white/10 opacity-50 transform rotate-12" />
          <div className="absolute bottom-6 right-20 w-16 h-16 rounded-2xl bg-white/10 opacity-30" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg lg:text-[20px] font-[600] text-white leading-relaxed">
            Get access to top web application developers to engineer secure, high-concurrency digital platforms.
          </p>
          <div>
            <a
              href="#consultation-form"
              className="inline-block bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base px-9 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 24. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS                      */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default WebApplicationDevelopmentService;
