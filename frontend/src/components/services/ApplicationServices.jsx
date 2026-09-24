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
  Bot,
  Code2,
  Terminal,
  Activity
} from 'lucide-react';

export const ApplicationServices = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies (Section 8)
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const techScrollContainerRef = useRef(null);

  const cuttingEdgeTechList = [
    {
      title: 'Cloud Native & Containerized Apps',
      desc: 'Build scalable, portable application workloads across AWS, Azure, and Google Cloud with Docker, Kubernetes, and automated microservice orchestration.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 28a8 8 0 0 1 1.5-15.8A12 12 0 0 1 36 18a8 8 0 0 1-2 15.7H12z" />
          <path d="M24 22v12M18 28l6-6 6 6" />
        </svg>
      )
    },
    {
      title: 'Modern Web & Frontend Frameworks',
      desc: 'Deliver blazing-fast, responsive user interfaces utilizing React, Next.js, Vue, Angular, and TypeScript with progressive web app (PWA) capabilities.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="26" rx="4" />
          <path d="M6 16h36M14 12h.01M18 12h.01M22 12h.01" />
          <path d="M16 40h16M24 34v6" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform & Native Mobile Apps',
      desc: 'Develop high-performance iOS and Android mobile solutions with Flutter, React Native, Swift, and Kotlin that deliver flawless native performance.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="6" width="20" height="36" rx="5" />
          <path d="M22 12h4M24 36v.01" />
        </svg>
      )
    },
    {
      title: 'Microservices & Enterprise APIs',
      desc: 'Decouple monolithic backends into independently deployable, high-concurrency microservices using Node.js, Go, Java Spring Boot, and GraphQL.',
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
      title: 'Event-Driven Streaming & Caching',
      desc: 'Process millions of concurrent real-time transactions with Apache Kafka, RabbitMQ, and Redis distributed caching for ultra-low latency.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 14h32M8 24h32M8 34h32" />
          <circle cx="16" cy="14" r="4" fill="#0084D1" />
          <circle cx="32" cy="24" r="4" fill="#0084D1" />
          <circle cx="20" cy="34" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Enterprise App Security & DevSecOps',
      desc: 'Fortify application endpoints with OAuth2, OpenID Connect, end-to-end data encryption, automated CI/CD security gating, and SOC2/HIPAA compliance.',
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

  // Section 18: Expertise of Our Application Services Specialists
  const appExpertiseCards = [
    {
      id: 1,
      title: 'Full-Stack Application Engineering',
      desc: 'Our full-stack engineers design intuitive user experiences backed by robust, scalable server-side architectures across modern cloud stacks.'
    },
    {
      id: 2,
      title: 'Cloud-Native Architecture & Microservices',
      desc: 'We structure applications into modular, independently deployable services that scale dynamically under peak enterprise workloads.'
    },
    {
      id: 3,
      title: 'Automated CI/CD & DevOps Delivery',
      desc: 'Implement Infrastructure as Code (Terraform), continuous integration, and automated container deployment pipelines for zero-downtime releases.'
    },
    {
      id: 4,
      title: 'Legacy Re-Engineering & Modernization',
      desc: 'Safely refactor outdated legacy applications without operational interruption, ensuring high fidelity and seamless data synchronization.'
    },
    {
      id: 5,
      title: 'Enterprise API & Systems Integration',
      desc: 'Unify disparate corporate databases, ERPs, and cloud tools through secure, well-documented RESTful and GraphQL API layers.'
    },
    {
      id: 6,
      title: '24/7 SLA Support & Site Reliability',
      desc: 'Dedicated reliability engineers actively monitor system health, track latency metrics, and provide around-the-clock maintenance.'
    }
  ];

  // Benefits Of Application Services (6 Cards matching screenshot 1:1)
  const appBenefitsList = [
    {
      title: 'Application Creator Options',
      desc: 'Application creator platform makes use of point-and-click technologies, allowing developers, business analysts, and other non-IT workers in the company to create applications.',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 36h12M21 42h6" />
          <path d="M24 6a12 12 0 0 0-8 21v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a12 12 0 0 0-8-21z" />
          <path d="M12 18l-4-2M36 18l4-2M24 2v4" />
        </svg>
      )
    },
    {
      title: 'Less QA Effort',
      desc: 'With application services, you would be able to develop and test versions of a new application much quicker if there is no delay associated with the QA of a version release when code is involved.',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="26" r="14" />
          <path d="M24 18v8l5 5M20 6h8M24 6v6" />
          <path d="M38 14l3-3M10 14l-3-3" />
        </svg>
      )
    },
    {
      title: 'Agile Application Building',
      desc: 'Application Services frameworks enable you to iteratively develop, deploy, evaluate, and optimize business applications to help you get to the final solution faster.',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="24" height="28" rx="3" />
          <path d="M32 18l8 8-8 8M16 20h8M16 26h6M16 32h8" />
        </svg>
      )
    },
    {
      title: 'Reduced Deployment Time',
      desc: 'With application services, app development timelines become more constrained. Platforms with one-click deployment allow for quicker publication of applications and straightforward incorporation.',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 24a16 16 0 1 1 4.7 11.3L8 31" />
          <path d="M8 22v9h9" />
          <path d="M24 16v8l6 4" />
        </svg>
      )
    },
    {
      title: 'Integration Services',
      desc: 'Workflows that incorporate third-party applications, such as mapping tools, are easily integrated on mobile devices or the server, increasing reliability and promoting efficient application adoption.',
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="6" />
          <circle cx="10" cy="12" r="4" />
          <circle cx="38" cy="12" r="4" />
          <circle cx="10" cy="36" r="4" />
          <circle cx="38" cy="36" r="4" />
          <path d="M14 14l6 6M34 14l-6 6M14 34l6-6M34 34l-6-6" />
        </svg>
      )
    },
    {
      title: 'Application Scalability',
      desc: "Platforms such as Application Services have a cloud environment and make it simple to move to a new implementation tool, whether it's to improve data protection, reduce maintenance costs.",
      icon: (
        <svg className="w-10 h-10 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 18h8v-8a4 4 0 0 1 8 0v8h8a4 4 0 0 1 0 8h-8v8a4 4 0 0 1-8 0v-8H8a4 4 0 0 1 0-8z" />
          <rect x="6" y="6" width="36" height="36" rx="6" strokeDasharray="3 3" />
        </svg>
      )
    }
  ];

  // Section 29: Application Services FAQs
  const appFaqs = [
    {
      question: 'What are enterprise application services and why are they vital for businesses?',
      answer: 'Application services encompass the end-to-end lifecycle of business software—including custom application development, legacy modernization, cloud migration, systems integration, and ongoing 24/7 maintenance. These services ensure your software operates reliably, scales with customer demand, and continuously adapts to emerging market opportunities.'
    },
    {
      question: 'What core application services does Firevy provide?',
      answer: 'Firevy provides six comprehensive pillars: 1. Custom Enterprise Application Development, 2. Legacy Modernization & Microservices Re-Architecture, 3. Cloud Application Engineering & Migration, 4. Enterprise API Integration, 5. Quality Assurance & Automated Testing, and 6. Managed Application Support & 24/7 SRE.'
    },
    {
      question: 'How do you approach modernizing a legacy monolithic application?',
      answer: 'We utilize proven incremental approaches like the strangler fig pattern. First, we perform an architectural audit and decouple discrete functional modules into microservices. We then set up dual-run synchronization and API gateways to validate data integrity before retiring older monolithic modules with zero downtime.'
    },
    {
      question: 'Can Firevy develop cross-platform applications for both web and mobile?',
      answer: 'Yes. Our team builds unified cross-platform solutions using React, Next.js, Flutter, and React Native, as well as native Swift and Kotlin apps. This ensures seamless performance, consistent brand identity, and synchronized business logic across all desktop and mobile devices.'
    },
    {
      question: 'Why choose Firevy.co for enterprise application services?',
      answer: 'Firevy combines deep engineering acumen with agile sprint transparency. With seasoned architects, 1200+ successfully completed digital applications, and a 98% client retention rate, we build maintainable software solutions that deliver concrete business ROI.'
    },
    {
      question: 'How do you ensure application security and compliance?',
      answer: 'We implement DevSecOps from Day 1. This includes automated vulnerability scanning in CI/CD pipelines, role-based access control (RBAC), OAuth 2.0 / OpenID authentication, end-to-end data encryption in transit and at rest, and strict adherence to SOC2, HIPAA, and GDPR standards.'
    },
    {
      question: 'What industries do you build application solutions for?',
      answer: 'We develop specialized applications for healthcare, fintech and banking, e-commerce, logistics, manufacturing, telecommunications, and real estate, ensuring strict compliance with all industry-specific security and regulatory standards.'
    },
    {
      question: 'How do we get started with Firevy for application services?',
      answer: 'You can begin by scheduling a free discovery consultation with our senior application architects. We will analyze your functional requirements, audit existing architecture, and provide a clear project roadmap with transparent cost and milestone estimates.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Enterprise Application Services in USA | Firevy.co"
        description="Accelerate your business with enterprise application services. Custom application development, legacy modernization, cloud migration, API integration, and 24/7 managed support."
        canonical="https://firevy.co/services/application-services"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Reference Match to DigitalTransformationService)     */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#EFF6FC] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Enterprise Application Services<br className="hidden sm:inline" /> in USA
              </h1>

              <p className="text-[15px] sm:text-[15.5px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                By combining modern web and mobile application engineering with cloud-native architectures, legacy modernization, and resilient DevOps pipelines, Firevy delivers full-lifecycle enterprise application services. Let our architects engineer secure, high-concurrency systems that drive business growth.
              </p>

              {/* 4 Stats (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Enterprise App<br />Architects</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">40+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Fortune 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">1200+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Applications<br />Delivered</div>
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
                  src="/images/application_services_hero.jpg"
                  alt="Enterprise Application Services in USA"
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
      {/* 3. OVERVIEW 1: Application Services (Image Left + Text Right)              */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src="/images/application_services_about.jpg"
                  alt="Enterprise Application Services & Strategic Modernization"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Enterprise Application Services & Strategic Modernization
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                In an increasingly software-driven world, robust enterprise applications are the lifeblood of business operations. Modernizing outdated monoliths, developing high-performance web and mobile applications, and streamlining API integrations empower organizations to enhance user experiences, boost agility, and eliminate operational bottlenecks.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As a premier Application Services Company, Firevy's senior technology architects craft scalable, resilient, and secure application ecosystems. From initial product discovery and modern frontend engineering to high-throughput backend APIs and multi-cloud deployment, we turn complex technical challenges into competitive market advantages.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. OVERVIEW 2: Brief About App Services (Text Left + Image Right)         */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Brief About Our Enterprise Application Development Approach
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                When you partner with Firevy for application services, you gain a dedicated agile engineering pod that oversees every stage of the software lifecycle: domain-driven architectural design, cloud-native microservices development, automated CI/CD pipelines, and rigorous performance testing.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                Our proven engineering methodologies guarantee zero operational disruptions, safeguarding business continuity while delivering scalable, high-velocity digital products that easily handle millions of transactions.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src="/images/application_services_brief.jpg"
                  alt="Brief About Enterprise Application Services"
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
      {/* 6. GET 100% CUSTOMIZABLE APPLICATION SERVICES BY EXPERTS                  */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Application Services<br className="hidden sm:inline" /> By Experts
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
                Agile Engineering,<br />
                Scalable Architecture,<br />
                Continuous Delivery
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can engage seasoned application development specialists with deep proficiency across modern web frameworks, enterprise cloud infrastructure, high-concurrency microservices, and mobile ecosystems. Our mission is to build robust, fault-tolerant enterprise software that accelerates operational efficiency and fuels sustainable revenue growth.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our custom application services roadmaps are tailored precisely to your organization's workflow demands—integrating legacy ERP systems with modern cloud APIs, designing intuitive customer portals, and embedding real-time intelligence into mission-critical business workflows.
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
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Custom Web & Mobile Engineering</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineer responsive, user-centric web applications and cross-platform mobile apps built with modern frameworks and resilient cloud backends.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Modernization & Cloud Replatforming</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Migrate legacy systems and refactor monolithic applications into containerized microservices running on AWS, Azure, or GCP with zero downtime.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Managed Support & SRE</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ensure 99.99% uptime with proactive telemetry monitoring, automated CI/CD deployment pipelines, regular security patches, and 24/7 site reliability engineering.
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
              We leverage future-ready technological frameworks to engineer responsive, scalable, and secure application ecosystems.
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
      {/* 10. SEASONED APPLICATION SERVICES EXPERTS TEAM                            */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS                                             */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Leverage Scalable Enterprise Application Services" />

      {/* ========================================================================= */}
      {/* 12. ABOUT US STATS (100% On-Time, 20+ Yrs, 450+ Devs, 98% CSAT)          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 13. TRANSFORMATIVE IMPACT / BENEFITS (8 PASTEL CARDS)                     */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Application Services On Your Business Success" />

      {/* ========================================================================= */}
      {/* 14. COMPREHENSIVE SUITE OF MOBILE APP DEVELOPMENT SERVICES (BLUE SECTION) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans text-left overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Firevy’s Comprehensive Suite of Mobile App Development Services
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Firevy developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Firevy provides full-service mobile app development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Mobile App UI/UX Design',
                desc: 'By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
              },
              {
                title: 'MVP Development',
                desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
              },
              {
                title: 'Custom App Development',
                desc: "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
              },
              {
                title: 'Startup App Development',
                desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
              },
              {
                title: 'Enterprise App Development',
                desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
              },
              {
                title: 'Embedded IoT App Development',
                desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-start text-left shadow-md hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 15. SECTORS THRIVING ON APPLICATION SERVICES SOLUTIONS                    */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving On Modern Application Services & Solutions" />

      {/* ========================================================================= */}
      {/* 16. SUCCESS STORIES SECTION                                               */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK THAT DEVELOPERS USE PROFICIENTLY                     */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection title="Technology Stack That Firevy Application Services Experts Use Proficiently" />

      {/* ========================================================================= */}
      {/* 17.1 PROUD TO HAVE PICKED THESE UP ALONG THE WAY (AWARDS BANNER)          */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* ========================================================================= */}
      {/* 17.2 BENEFITS OF APPLICATION SERVICES                                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F8FBFE] text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight">
              Benefits Of Application Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of the most well-known advantages of mobile app growth for businesses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {appBenefitsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left space-y-3.5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0F172A] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 18. THE EXPERTISE OF OUR APPLICATION SERVICES EXPERTS                     */}
      {/* ========================================================================= */}
      <HybridAppExpertiseServices
        title="The Expertise Of Our Enterprise Application Specialists"
        subtitle="Contact us now to leverage the expertise of our enterprise application engineers. Their capabilities include:"
        cards={appExpertiseCards}
      />

      {/* ========================================================================= */}
      {/* 19. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 20. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
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
      {/* 28. APPLICATION CASE STUDIES SLIDER                                       */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 29. FREQUENTLY ASKED QUESTIONS (8 APPLICATION SERVICES FAQS)              */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Empower Modern Enterprises. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={appFaqs}
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
          title="Have An Application Development Challenge To Address ?"
          subtitle="Get access to top Enterprise Application Architects and Senior Developers to engineer, modernize, and maintain your business applications."
          buttonText="Hire Experts Now"
        />
      </div>
    </div>
  );
};

export default ApplicationServices;
