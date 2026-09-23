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
  Cloud,
  RefreshCw,
  GitBranch,
  Database,
  Lock,
  Workflow,
  Server,
  BarChart3,
  Bot
} from 'lucide-react';

export const DigitalTransformationService = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies (Section 8)
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const techScrollContainerRef = useRef(null);

  const cuttingEdgeTechList = [
    {
      title: 'Cloud Native & Hybrid Multi-Cloud',
      desc: 'Modernize application workloads across AWS, Azure, and Google Cloud with containerized microservices and automated infrastructure.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 28a8 8 0 0 1 1.5-15.8A12 12 0 0 1 36 18a8 8 0 0 1-2 15.7H12z" />
          <path d="M24 22v12M18 28l6-6 6 6" />
        </svg>
      )
    },
    {
      title: 'Enterprise AI & Machine Learning',
      desc: 'Embed predictive analytics, LLM intelligence, computer vision, and autonomous agent workflows into legacy ERP and customer journeys.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="8" />
          <circle cx="24" cy="24" r="5" fill="#0084D1" />
          <path d="M16 24h16M24 16v16" />
        </svg>
      )
    },
    {
      title: 'Robotic Process Automation (RPA)',
      desc: 'Eliminate manual bottlenecks with intelligent bot automation across billing, supply chain, regulatory audits, and customer support.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="14" width="28" height="22" rx="4" />
          <circle cx="18" cy="23" r="2.5" fill="currentColor" />
          <circle cx="30" cy="23" r="2.5" fill="currentColor" />
          <path d="M20 30h8M24 6v8" />
        </svg>
      )
    },
    {
      title: 'Microservices & API Orchestration',
      desc: 'Decouple brittle monolithic software into independently scalable, fault-tolerant RESTful and event-driven Kafka architectures.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="14" height="14" rx="3" />
          <rect x="28" y="8" width="14" height="14" rx="3" />
          <rect x="17" y="26" width="14" height="14" rx="3" />
          <path d="M13 22v6h4M35 22v6h-4" />
        </svg>
      )
    },
    {
      title: 'Data Lakes & Real-Time Analytics',
      desc: 'Unify siloed enterprise data into centralized data lakes, enabling instant BI dashboards and executive decision intelligence.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="24" cy="12" rx="16" ry="6" />
          <path d="M8 12v12c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
          <path d="M8 24v12c0 3.3 7.2 6 16 6s16-2.7 16-6V24" />
        </svg>
      )
    },
    {
      title: 'Zero-Trust Cybersecurity & Compliance',
      desc: 'Fortify digital operations with end-to-end encryption, automated compliance governance (SOC2, HIPAA, GDPR), and identity federation.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6 L40 12 C40 28 32 38 24 42 C16 38 8 28 8 12 Z" />
          <circle cx="24" cy="22" r="3" fill="#0084D1" />
          <path d="M24 25v6" strokeWidth="3" />
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

  // Section 16: Comprehensive Suite of Digital Transformation Services Cards
  const dtServicesSuite = [
    {
      title: 'Cloud Strategy & Migration',
      desc: 'Seamlessly shift workloads to AWS, Azure, or GCP with zero downtime. We optimize resource allocation, containerize monoliths, and eliminate infrastructure maintenance overhead.',
      features: ['Multi-Cloud Migration Framework', 'Containerization with Kubernetes', 'Serverless & Auto-Scaling Compute', 'Cloud Cost & FinOps Optimization']
    },
    {
      title: 'Legacy Modernization & Refactoring',
      desc: 'Transform aging legacy software and archaic tech stacks into modern microservices, removing technical debt while safeguarding vital historical business data.',
      features: ['Monolith to Microservices Roadmap', 'Database Schema Modernization', 'Zero-Downtime Data Migration', 'API-First Decoupled Architecture']
    },
    {
      title: 'Intelligent Process Automation (RPA)',
      desc: 'Deploy autonomous bots and intelligent workflow engines that handle repetitive corporate tasks, accelerate processing speed, and reduce human operational error.',
      features: ['Robotic Process Automation', 'Intelligent Document Processing', 'Automated Cross-System Syncing', 'ERP/CRM Workflow Automation']
    },
    {
      title: 'Digital Product Engineering',
      desc: 'Accelerate the creation of market-leading customer-facing portals, enterprise web solutions, and mobile platforms that deliver superior user satisfaction and retention.',
      features: ['Modern Single-Page Applications', 'High-Concurrency Backend APIs', 'Omnichannel Customer Portals', 'Continuous Feature Deployment']
    },
    {
      title: 'Data Architecture & Business Intelligence',
      desc: 'Break data silos with robust ETL pipelines and modern cloud data warehouses (Snowflake, BigQuery), delivering real-time dashboards and predictive predictive analytics.',
      features: ['Enterprise Data Lakehouse Design', 'Real-Time Streaming Pipelines', 'Executive KPI Dashboards', 'Predictive AI/ML Decision Engines']
    },
    {
      title: 'Cybersecurity & Compliance Governance',
      desc: 'Safeguard your transformed digital infrastructure with zero-trust architecture, automated vulnerability scanning, access control management, and compliance audits.',
      features: ['Zero-Trust Security Policies', 'SOC2, HIPAA & GDPR Compliance', 'Identity & Access Management (IAM)', 'Continuous Penetration Testing']
    }
  ];

  // Section 18: Expertise of Our Digital Transformation Experts Cards
  const dtExpertiseCards = [
    {
      id: 1,
      title: 'Cloud-First Transformation',
      desc: 'We engineer cloud environments that maximize scalability and minimize operational expenses across AWS, Azure, and Google Cloud Platform.'
    },
    {
      id: 2,
      title: 'Strategic Modernization Consulting',
      desc: 'Our enterprise architects provide comprehensive technology audits, digital roadmaps, and ROI forecasts that align technology investments with executive business goals.'
    },
    {
      id: 3,
      title: 'Automated Operations & CI/CD',
      desc: 'Implement Infrastructure as Code (Terraform), continuous integration, automated testing, and zero-touch deployments for ultra-fast time to market.'
    },
    {
      id: 4,
      title: 'Legacy System Re-Architecture',
      desc: 'Safely refactor outdated core business systems without disrupting active operations, maintaining strict data integrity throughout the transition.'
    },
    {
      id: 5,
      title: 'Enterprise Mobile & Web Portals',
      desc: 'Deliver responsive, modern digital interfaces that empower internal employees and external customers with instant access to corporate services.'
    },
    {
      id: 6,
      title: '24/7 Managed Platform Support',
      desc: 'Our dedicated site reliability engineers maintain 99.99% uptime, monitor system metrics proactively, and provide continuous enhancements.'
    }
  ];

  // Section 29: Digital Transformation FAQs
  const dtFaqs = [
    {
      question: 'What is digital transformation and why does my business need it?',
      answer: 'Digital transformation is the integration of digital technology across all areas of a business, fundamentally changing how you operate and deliver value to customers. It modernizes legacy infrastructure, streamlines manual workflows, unlocks data intelligence, and empowers organizations to innovate faster and outperform competitors.'
    },
    {
      question: 'What are the core components of digital transformation services at Firevy?',
      answer: 'Our digital transformation services encompass six core pillars: 1. Cloud Strategy & Migration, 2. Legacy Modernization, 3. Process Automation & RPA, 4. Custom Digital Product Engineering, 5. Enterprise Data & Analytics, and 6. Zero-Trust Cybersecurity & Compliance.'
    },
    {
      question: 'How long does an enterprise digital transformation project typically take?',
      answer: 'Digital transformation is an iterative journey. While quick-win automation sprints and cloud migrations can deliver measurable results within 6 to 12 weeks, comprehensive enterprise-wide modernization typically proceeds in agile phases across 6 to 18 months, ensuring continuous business operations without disruption.'
    },
    {
      question: 'How do you ensure legacy system data remains intact during modernization?',
      answer: 'We utilize phased strangler-fig migration patterns, automated ETL data validation, and dual-run synchronization. This guarantees that your historical data and business logic are safely transferred and reconciled before any legacy systems are fully decommissioned.'
    },
    {
      question: 'Why choose Firevy.co for digital transformation services?',
      answer: 'Firevy combines deep enterprise engineering expertise with agile delivery models. With seasoned software architects, 1200+ completed technology projects, and a 98% client retention rate, we design pragmatic solutions that generate quantifiable business ROI and operational efficiency.'
    },
    {
      question: 'How does digital transformation impact cybersecurity?',
      answer: 'Digital transformation integrates security from day one through DevSecOps, zero-trust network models, role-based access control, and end-to-end data encryption, dramatically reducing vulnerability compared to unpatched legacy systems.'
    },
    {
      question: 'What industries do you serve with Digital Transformation Services?',
      answer: 'We provide specialized digital transformation consulting and engineering for healthcare, finance and banking, retail & e-commerce, logistics, manufacturing, telecommunications, and real estate, conforming to all industry-specific compliance requirements.'
    },
    {
      question: 'How do we get started with Firevy for digital transformation?',
      answer: 'You can begin by scheduling a discovery session with our senior enterprise architects. We perform a technical assessment of your current architecture, identify key operational bottlenecks, and formulate a phased digital transformation roadmap.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Enterprise Digital Transformation Services in USA | Firevy.co"
        description="Accelerate your business with enterprise digital transformation services. Modernize legacy systems, automate corporate workflows, and scale with cloud, AI, and agile engineering."
        canonical="https://firevy.co/services/digital-transformation-services"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Reference Match to AugmentedRealityAppDevelopment)   */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#EFF6FC] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Enterprise Digital Transformation<br className="hidden sm:inline" /> Services in USA
              </h1>

              <p className="text-[15px] sm:text-[15.5px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                By combining cloud migration with intelligent process automation, modern microservices, and AI-driven data intelligence, Firevy accelerates end-to-end digital transformation for global enterprises. Let our architects engineer resilient systems that propel your market leadership.
              </p>

              {/* 4 Stats (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Enterprise<br />Architects</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">40+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Fortunes 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">1200+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Completed Projects<br />Delivered</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button */}
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

            {/* Right Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60">
                <img
                  src="/images/digital_transformation_hero.jpg"
                  alt="Enterprise Digital Transformation Services in USA"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
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
      {/* 3. OVERVIEW 1: Digital Transformation Services (Image Left + Text Right)  */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src="/images/digital_transformation_about.jpg"
                  alt="Digital Transformation Services & Strategic Modernization"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Digital Transformation Services & Strategic Modernization
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                In today's fast-moving economy, digital transformation has evolved from a competitive advantage into an urgent operational necessity. Modernizing outdated architectures, digitizing manual customer touchpoints, and migrating legacy infrastructure to the cloud empowers organizations to slash operating overhead and outpace market disruption.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As a premier Digital Transformation Services Company, Firevy's enterprise technology consultants identify the highest-impact interventions for your business. We engineer resilient software systems, automate manual data pipelines, and craft engaging customer portals backed by cutting-edge cloud engineering.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. OVERVIEW 2: Brief About DT Services (Text Left + Image Right)           */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Brief About Our Enterprise Digital Transformation Approach
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                When you partner with Firevy for digital transformation, you gain an agile engineering pod that handles every tier of the modernization lifecycle: legacy code audits, cloud-native replatforming, CI/CD pipeline automation, and automated compliance controls.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                Our pragmatic modernization methodology guarantees zero operational downtime, safeguarding your day-to-day revenue generation while building a high-velocity digital foundation that scales effortlessly for the next decade.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src="/images/digital_transformation_brief.jpg"
                  alt="Brief About Enterprise Digital Transformation"
                  className="w-full h-auto object-contain"
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
      {/* 6. GET 100% CUSTOMIZABLE DIGITAL TRANSFORMATION BY EXPERTS                */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get A 100% Customizable Digital Transformation<br className="hidden sm:inline" /> By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card with Shape Pattern & Speech Bubble */}
            <div className="lg:col-span-4 relative bg-[#F0F8FF] p-7 sm:p-9 flex flex-col justify-start min-h-[290px] overflow-visible select-none rounded-xl">
              <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden rounded-xl">
                <img
                  src="/images/shape_pattern.webp"
                  alt="Pattern background"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              <div className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FF] z-20 pointer-events-none" />

              <div className="mb-4 relative z-10">
                <img
                  src="/images/quotation_mark.svg"
                  alt="Quotation mark"
                  className="w-[52px] h-[49px]"
                />
              </div>

              <h3 className="text-[25px] sm:text-[27px] lg:text-[29px] font-bold text-[#005d89] tracking-tight leading-[1.28] relative z-10 text-left">
                Agile Modernization,<br />
                Predictable Scaling,<br />
                Enterprise Security
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can engage seasoned digital transformation specialists with deep experience across enterprise architectures, cloud orchestration, workflow automation, and distributed microservices. Our primary objective is to engineer scalable, fault-tolerant digital solutions that unlock efficiency and ignite revenue growth across your operations.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our digital transformation roadmaps are customized for your enterprise needs—integrating legacy ERPs with modern cloud platforms, automating manual human verification steps, and embedding real-time intelligence into customer touchpoints.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. THREE KEY CAPABILITIES CARDS                                           */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Cloud Migration & Scalability</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamlessly move mission-critical applications and databases to public, hybrid, or private clouds with automated auto-scaling and minimal operational costs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Workflow className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Intelligent Process Automation</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploy robotic process automation (RPA) and automated document workflows to eliminate repetitive labor and accelerate service delivery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Data-Driven Decision Systems</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consolidate disparate data silos into centralized real-time analytics engines, predictive AI forecasting, and executive telemetry dashboards.
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
              We leverage future-ready technological frameworks to engineer responsive, scalable, and secure digital enterprise ecosystems.
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
      {/* 10. SEASONED DIGITAL TRANSFORMATION EXPERTS TEAM                          */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS                                             */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Leverage Enterprise Digital Transformation" />

      {/* ========================================================================= */}
      {/* 12. TRANSFORMATIVE IMPACT / BENEFITS (8 PASTEL CARDS)                     */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Digital Transformation On Your Business Success" />

      {/* ========================================================================= */}
      {/* 13. ABOUT US STATS (100% On-Time, 20+ Yrs, 450+ Devs, 98% CSAT)          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 14. SECTORS THRIVING ON DIGITAL TRANSFORMATION SOLUTIONS                  */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving On Enterprise Digital Transformation Solutions" />

      {/* ========================================================================= */}
      {/* 15. SUCCESS STORIES SECTION                                               */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 16. COMPREHENSIVE SUITE OF DIGITAL TRANSFORMATION SERVICES                */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
              Firevy’s Comprehensive Suite of Digital Transformation Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Firevy engineers excel at modernizing enterprise architectures by utilizing our deep knowledge of cloud ecosystems, automated workflows, and microservices. We provide full-service digital transformation tailored to your operational specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dtServicesSuite.map((service, idx) => (
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
      <MobileAppProficientTechStackSection title="Technology Stack That Firevy Digital Transformation Experts Use Proficiently" />

      {/* ========================================================================= */}
      {/* 18. THE EXPERTISE OF OUR DIGITAL TRANSFORMATION EXPERTS                   */}
      {/* ========================================================================= */}
      <HybridAppExpertiseServices
        title="The Expertise Of Our Digital Transformation Specialists"
        subtitle="Contact us now to leverage the expertise of our enterprise modernization engineers. Their capabilities include:"
        cards={dtExpertiseCards}
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
      {/* 29. FREQUENTLY ASKED QUESTIONS (8 DT FAQS)                                */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Empower Modern Enterprises. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={dtFaqs}
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
          title="Have Digital Transformation Challenge To Address ?"
          subtitle="Get access to top Enterprise Architects and Engineers to modernize your infrastructure and business workflows."
          buttonText="Hire Experts Now"
        />
      </div>
    </div>
  );
};

export default DigitalTransformationService;
