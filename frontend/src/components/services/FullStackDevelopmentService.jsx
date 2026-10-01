import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { SapphireSeasonedExpertsSection } from './SapphireSeasonedExpertsSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { TransformativeImpactSection } from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import { SectorsThrivingSection } from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import AndroidComparativeAnalysis from './AndroidComparativeAnalysis';
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
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Box,
  Compass,
  Monitor,
  Gamepad2,
  Wrench,
  HelpCircle,
  Code,
  Database,
  Server,
  Cloud,
  Layout,
  Globe
} from 'lucide-react';

export const FullStackDevelopmentService = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies (Section 8)
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const techScrollContainerRef = useRef(null);

  const cuttingEdgeTechList = [
    {
      title: 'Modern Frontend Stacks',
      desc: 'Build reactive, responsive user interfaces utilizing React.js, Next.js, Vue.js, Angular, and Tailwind CSS with sub-second page loads.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="26" rx="4" />
          <path d="M16 40h16M24 34v6" />
          <path d="M14 18l4 4-4 4M22 26h6" />
        </svg>
      )
    },
    {
      title: 'Scalable Backend Runtimes',
      desc: 'Engineer resilient, event-driven server logic and microservices using Node.js, Express, Python (FastAPI/Django), Java Spring, and Go.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="12" rx="3" />
          <rect x="8" y="28" width="32" height="12" rx="3" />
          <circle cx="14" cy="14" r="1.5" fill="#0084D1" />
          <circle cx="20" cy="14" r="1.5" fill="#0084D1" />
          <circle cx="14" cy="34" r="1.5" fill="#0084D1" />
          <circle cx="20" cy="34" r="1.5" fill="#0084D1" />
          <path d="M24 20v8" />
        </svg>
      )
    },
    {
      title: 'Database & Distributed Cache',
      desc: 'Architect high-throughput persistent storage and caching layers with PostgreSQL, MySQL, MongoDB, DynamoDB, and Redis.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="24" cy="12" rx="16" ry="6" />
          <path d="M8 12v12c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
          <path d="M8 24v12c0 3.3 7.2 6 16 6s16-2.7 16-6V24" />
        </svg>
      )
    },
    {
      title: 'Cloud Native & DevOps',
      desc: 'Deploy resilient cloud architectures on AWS, Azure, and GCP with Docker containerization, Kubernetes orchestration, and CI/CD pipelines.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 28a8 8 0 0 1 1.5-15.8A12 12 0 0 1 36 18a8 8 0 0 1-2 15.7H12z" />
          <polyline points="20 26 24 22 28 26" />
          <line x1="24" y1="22" x2="24" y2="34" />
        </svg>
      )
    },
    {
      title: 'RESTful & GraphQL APIs',
      desc: 'Design high-performance API gateways, decoupled service layers, gRPC communication protocols, and bidirectional WebSockets.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="24" r="6" />
          <circle cx="36" cy="14" r="6" />
          <circle cx="36" cy="34" r="6" />
          <line x1="18" y1="21" x2="30" y2="16" />
          <line x1="18" y1="27" x2="30" y2="32" />
        </svg>
      )
    },
    {
      title: 'Microservices & Event Streams',
      desc: 'Break monoliths into independent, highly scalable microservices orchestrated via Apache Kafka, RabbitMQ, and AWS SNS/SQS.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="6" width="14" height="14" rx="3" />
          <rect x="28" y="6" width="14" height="14" rx="3" />
          <rect x="17" y="28" width="14" height="14" rx="3" />
          <path d="M13 20v3a5 5 0 0 0 5 5h1M35 20v3a5 5 0 0 1-5 5h-1" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform Mobile Stacks',
      desc: 'Synchronize web and mobile experiences with React Native, Flutter, and native bridges coupled with shared backend systems.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="24" height="36" rx="5" />
          <line x1="20" y1="10" x2="28" y2="10" />
          <circle cx="24" cy="36" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'DevSecOps & Enterprise Security',
      desc: 'Enforce enterprise-grade data security with OAuth2, JWT, RBAC authorization, automated SAST/DAST audits, and zero-trust policies.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6l14 6v12c0 10-6.5 17-14 20-7.5-3-14-10-14-20V12l14-6z" />
          <polyline points="18 24 22 28 30 20" />
        </svg>
      )
    }
  ];

  // Auto-scroll loop for Cutting Edge Tech Carousel
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      if (techScrollContainerRef.current) {
        const container = techScrollContainerRef.current;
        const cardWidth = 320;
        const gap = 20;
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  // Section 16: Comprehensive Suite of Full Stack Development Services Cards
  const fullStackServicesSuite = [
    {
      title: 'Full Stack Web App Development',
      desc: 'By considering modern architectural patterns and user-centric frontend designs backed by high-throughput server runtimes, we help you create intuitive, scalable, and high-performance web applications.',
      features: ['Single Page (SPA) & SSR Apps', 'Responsive Cross-Browser UI', 'RESTful & GraphQL Connectors', 'Enterprise Performance Optimization']
    },
    {
      title: 'Full Stack MVP Development',
      desc: 'By developing an end-to-end full stack MVP with vital frontend interactions and robust backend logic, we validate your product thesis quickly and let you test real user traction before committing to enterprise scaling.',
      features: ['Rapid Prototyping & Wireframing', 'Core Feature Validation', 'Agile 2-4 Week MVP Delivery', 'Investor-Ready Architecture']
    },
    {
      title: 'Custom Full Stack Software Development',
      desc: 'Whether you are developing an enterprise SaaS portal, an omnichannel digital platform, or a workflow automation tool, we turn your unique business logic into secure, resilient full stack software.',
      features: ['Tailored System Architecture', 'Multi-Tier Microservices', 'Custom Data Processing Engines', 'Seamless Third-Party API Integrations']
    },
    {
      title: 'Startup Full Stack Engineering',
      desc: 'Our world-class full stack solutions empower disruptive startups to launch scalable web and mobile platforms rapidly with cost-effective modern stacks such as MERN, MEAN, Next.js, and Python.',
      features: ['Lean Architecture Sprints', 'High-Speed Feature Rollouts', 'Elastic Cloud Scaling', 'Fast Go-To-Market Execution']
    },
    {
      title: 'Enterprise Full Stack Integration',
      desc: 'Modernize legacy monolithic systems by refactoring them into decoupled microservices, cloud-native deployments, and seamless integrations with existing ERP, CRM, and corporate databases.',
      features: ['Legacy Monolith Modernization', 'Zero-Downtime Data Migration', 'Hybrid Cloud Deployment', 'Enterprise ERP/CRM Connectors']
    },
    {
      title: 'Cloud-Native & DevOps Support',
      desc: 'To guarantee maximum uptime, robust horizontal scalability, and zero friction in deployment, we configure automated CI/CD pipelines, containerization, and 24/7 observability across AWS and Azure.',
      features: ['Docker & Kubernetes Pipelines', 'Continuous Integration / Delivery', 'Real-Time Logging & APM', 'Automated Security & Backup Guardrails']
    }
  ];

  // Section 18: Expertise of Our Full Stack Developers Cards
  const fullStackExpertiseCards = [
    {
      id: 1,
      title: 'Frontend UI/UX Engineering',
      desc: 'We leverage modern client technologies such as React.js, Next.js, Vue.js, Angular, and Tailwind CSS to craft pixel-perfect, responsive user interfaces that deliver exceptional user satisfaction.'
    },
    {
      id: 2,
      title: 'Backend & Server-Side Systems',
      desc: 'Our seasoned backend engineers construct resilient, high-throughput server logic, event-driven architectures, and microservices utilizing Node.js, Python, Java, Go, and .NET.'
    },
    {
      id: 3,
      title: 'Database Architecture & Management',
      desc: 'We design, normalize, and optimize relational and NoSQL databases—including PostgreSQL, MySQL, MongoDB, DynamoDB, and Redis—ensuring high availability and lightning-fast query execution.'
    },
    {
      id: 4,
      title: 'API & Microservices Engineering',
      desc: 'Using RESTful conventions, GraphQL schemas, and gRPC protocols, we create secure, decoupled service layers that seamlessly bridge client apps, internal systems, and third-party partner APIs.'
    },
    {
      id: 5,
      title: 'DevOps & Cloud Infrastructure',
      desc: 'We architect cloud environments across AWS, Azure, and Google Cloud with Docker, Kubernetes, and automated CI/CD pipelines to ensure continuous delivery with zero downtime.'
    },
    {
      id: 6,
      title: 'Full Stack Maintenance & Upgrades',
      desc: 'Our dedicated maintenance engineering squad regularly resolves bugs, performs security patching, updates core libraries and dependencies, and optimizes database queries for ongoing stability.'
    }
  ];

  // Section 29: Full Stack Development FAQs
  const fullStackFaqs = [
    {
      question: 'What is full stack development and what technologies do you specialize in?',
      answer: 'Full stack development encompasses both frontend (client-side) and backend (server-side, database, and infrastructure) engineering. At Firevy, our full stack engineers specialize in modern stacks including MERN (MongoDB, Express, React, Node.js), MEAN, Next.js, Python (Django/FastAPI), Java Spring Boot, Golang, PostgreSQL, MySQL, Docker, Kubernetes, and AWS/Azure cloud environments.'
    },
    {
      question: 'What is the cost of developing a full stack application?',
      answer: 'The investment for full stack development depends on project scope, architectural complexity, feature sets, third-party integrations, and performance requirements. Developing an end-to-end full stack MVP typically ranges between $25,000 to $50,000. Enterprise-grade platforms featuring multi-tenant SaaS architectures, distributed microservices, and complex compliance layers can scale higher based on tailored specifications.'
    },
    {
      question: 'Why should I hire full stack developers instead of separate frontend and backend specialists?',
      answer: 'Full stack developers understand how all tiers of an application communicate—from browser rendering to database query execution. This holistic understanding eliminates handoff friction between teams, accelerates prototyping and sprint delivery, reduces overall engineering overhead, and ensures unified code quality across your stack.'
    },
    {
      question: 'How do you guarantee the security and scalability of full stack software?',
      answer: 'We implement industry-standard security practices, including OWASP Top 10 mitigation, OAuth2/JWT authentication, role-based access control (RBAC), end-to-end encryption in transit (TLS 1.3) and at rest, and automated dependency vulnerability scans. For scalability, we design stateless microservices, database indexing and connection pooling, Redis caching, and autoscaling cloud containers managed via Docker and Kubernetes.'
    },
    {
      question: 'Can your full stack developers build mobile apps as well?',
      answer: 'Yes. Our full stack team has extensive experience engineering cross-platform mobile apps with React Native and Flutter, linking them with unified backend APIs, serverless push notification services, and real-time database synchronization.'
    },
    {
      question: 'What engagement models are available for hiring full stack developers?',
      answer: 'We offer versatile engagement models tailored to your roadmap: Dedicated Engineering Pods, Hourly T & M (starting at $21/hr), Fixed-Price Milestone Contracts, and Resource Augmentation. All models include transparent Agile sprints, daily Slack/GitHub collaboration, and flexible timezone overlap.'
    },
    {
      question: 'How quickly can your full stack developers onboard into our existing project?',
      answer: 'Our pre-vetted senior full stack engineers can onboard and begin contributing to your codebase, daily standups, and Jira/Linear boards within 48 to 72 hours following the initial discovery call.'
    },
    {
      question: 'What industries do you serve with Custom Full Stack Development Services?',
      answer: 'Our full stack engineering solutions power high-impact platforms in FinTech, Healthcare, E-Commerce & Retail, SaaS & Enterprise B2B, Logistics & Supply Chain, Real Estate, and EdTech. We adhere strictly to industry standards such as HIPAA, SOC 2, and GDPR.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Full Stack Development Services in USA | Firevy.co"
        description="By combining modern frontend frameworks with robust backend architectures and cloud DevOps pipelines, we build high-performance full stack applications. Our team of dedicated full stack developers brings your vision to life."
        canonical="https://firevy.co/services/full-stack-development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Reference Match)                                     */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#EFF6FC] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Full Stack Development<br className="hidden sm:inline" /> Services in USA
              </h1>

              <p className="text-[15px] sm:text-[15.5px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                By combining cutting-edge frontend interfaces with resilient backend architectures and cloud DevOps pipelines, we build high-performance, enterprise-grade full stack applications. Our dedicated full stack engineers bring your vision to life.
              </p>

              {/* 4 Stats matching Reference 100% (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">80+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Full Stack<br />Developers</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Fortunes 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">800+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Project Completed in<br />Web & Mobile</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button matching Reference */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[5px] bg-[#005F96] hover:bg-[#004d7c] text-white text-[15px] font-semibold transition-all duration-200 shadow-none space-x-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Illustration matching Reference */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/software_dev_laptop_hero.svg"
                  alt="Full Stack Development Services in USA"
                  className="w-full h-auto object-contain"
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
      <BrandLogoMarquee companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 3. OVERVIEW 1: Full Stack Development Services (Image Left + Text Right)  */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[450px]">
                <img
                  src="/images/software_dev_desk_brief.svg"
                  alt="Full Stack Development Services"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Full Stack Development Services
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                It has become clear that modern digital products require more than isolated frontend designs or standalone server scripts. Full stack technology has become the core driving force behind the success of SaaS platforms, healthcare systems, fintech enterprises, ecommerce leaders, and high-growth startups by harmonizing complex frontend interactions with high-throughput backend services.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As a Best Full Stack Development Company, our Full Stack Web and Mobile App Development Experts will identify the most beneficial architectural approach to satisfy your company's requirements since they have expertise across multiple domains and an in-depth understanding of cutting-edge full stack engineering technology.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. OVERVIEW 2: Brief About Full Stack Development (Text Left + Image Right)*/}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Brief About Our Full Stack Development
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                When you employ our full stack developers, you won't have to worry about frontend state management, server-side APIs, database indexing, cloud containerization, CI/CD automation, and a wide variety of other critical technical components.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As a leading Full Stack Development Company, we guarantee that our full stack mobile and web app development solutions will help you attract and engage the audience you seek. You can outperform your rivals and establish higher business efficiency with seamless end-to-end performance.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[450px]">
                <img
                  src="/images/node_js_hero_monitor_illustration.svg"
                  alt="Brief About Full Stack Development"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLUTCH & GOODFIRMS TOP RATED RIBBON                                    */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 6. GET A 100% CUSTOMIZABLE FULL STACK DEVELOPMENT BY EXPERTS              */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get A 100% Customizable Full Stack Development<br className="hidden sm:inline" /> By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card with Exact Background Image & Quotation Mark */}
            <div className="lg:col-span-4 relative bg-[#F0F8FF] p-7 sm:p-9 flex flex-col justify-start min-h-[290px] overflow-visible select-none">
              {/* Exact Shape Pattern WebP Background */}
              <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
                <img
                  src="/images/shape_pattern.webp"
                  alt="Pattern background"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
              <div className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FF] z-20 pointer-events-none" />

              {/* Exact Quotation Mark SVG */}
              <div className="mb-4 relative z-10">
                <img
                  src="/images/quotation_mark.svg"
                  alt="Quotation mark"
                  className="w-[52px] h-[49px]"
                />
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[25px] sm:text-[27px] lg:text-[29px] font-bold text-[#005d89] tracking-tight leading-[1.28] relative z-10 text-left">
                Customized Apps,<br />
                Flexible Payment,<br />
                Sleek Architecture
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can hire full stack developers with years of proven expertise in building best-in-industry custom web applications, mobile platforms, and enterprise microservices offering robust backend logic and friendly user interfaces to attract and engage your target audience and accomplish your business goals. Our primary objective is to provide cutting-edge full stack architecture and development services for various business sectors.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our full stack solutions run faultlessly across all modern platforms, including web browsers, iOS & Android mobile devices, tablets, and cloud infrastructure. You will ultimately be able to achieve rapid time-to-market and lower total cost of ownership when you Hire Full Stack Developers from us.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. THREE KEY FULL STACK CAPABILITIES CARDS                                */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Monitor className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Intuitive Modern Frontend</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-fidelity responsive UI/UX built with React, Next.js, Vue, and Angular, delivering sub-second load times, smooth transitions, and seamless cross-device compatibility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Resilient Backend & APIs</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-throughput, event-driven microservices and RESTful/GraphQL APIs built on Node.js, Python, Java, and Go with secure enterprise authentication and high data integrity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Scalable Cloud & DevOps</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cloud-native deployments on AWS and Azure with Docker, Kubernetes, and automated CI/CD pipelines, integrated with optimized PostgreSQL, MySQL, and MongoDB clusters.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. CUTTING EDGE TECHNOLOGIES WE USE                                       */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
              Cutting Edge Technologies We Use
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We leverage future-ready technological frameworks to engineer responsive, scalable, and resilient full stack software.
            </p>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div
            ref={techScrollContainerRef}
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
            className="flex items-stretch space-x-5 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {cuttingEdgeTechList.map((item, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[310px] shrink-0 p-6 rounded-2xl bg-[#EFF7FE] border border-blue-100/90 shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-xs border border-blue-100/60">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR PREMIUM SERVICES GRID                                              */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 10. SEASONED FULL STACK APP DEVELOPERS / EXPERTS TEAM                     */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS                                             */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Full Stack Development" />

      {/* ========================================================================= */}
      {/* 12. TRANSFORMATIVE IMPACT / BENEFITS (8 PASTEL CARDS)                     */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Full Stack Development On Your Business Success" />

      {/* ========================================================================= */}
      {/* 13. ABOUT US STATS (100% On-Time, 20+ Yrs, 450+ Devs, 98% CSAT)          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 14. SECTORS THRIVING ON FULL STACK DEVELOPMENT                            */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving On Full Stack Development Solutions" />

      {/* ========================================================================= */}
      {/* 15. SUCCESS STORIES SECTION                                               */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 16. COMPREHENSIVE SUITE OF FULL STACK DEVELOPMENT SERVICES                */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
              Firevy’s Comprehensive Suite of Full Stack Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Firevy developers thrive at developing compelling full stack applications by utilizing our knowledge of the latest web, mobile, and cloud frameworks. We provide full-service engineering customized to meet your exact specifications.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fullStackServicesSuite.map((service, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#EFF7FE] border border-blue-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-[#005F96] font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-blue-100/60">
                  {service.features.map((feat, featIdx) => (
                    <div key={featIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005F96] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK THAT DEVELOPERS USE PROFICIENTLY                     */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection title="Technology Stack That Firevy Full Stack Developers Use Proficiently" />

      {/* ========================================================================= */}
      {/* 18. THE EXPERTISE OF OUR FULL STACK DEVELOPERS                            */}
      {/* ========================================================================= */}
      <HybridAppExpertiseServices
        title="The Expertise Of Our Full Stack Developers"
        subtitle="Contact us now to avail the expertise of our Full Stack developers. Their expertise includes:"
        cards={fullStackExpertiseCards}
      />

      {/* ========================================================================= */}
      {/* 19. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 20. COMPARATIVE ANALYSIS                                                  */}
      {/* ========================================================================= */}
      <AndroidComparativeAnalysis />

      {/* ========================================================================= */}
      {/* 21. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 22. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 23. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 24. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 25. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 26. WHAT OUR CLIENTS SAY                                                  */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 27. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 28. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 29. FREQUENTLY ASKED QUESTIONS (8 FULL STACK FAQS)                        */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={fullStackFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 30. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 31. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 32. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Full Stack Development Challenge To Address ?"
          subtitle="Get access to top Full Stack developers to transform your ideas into a robust application."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default FullStackDevelopmentService;
