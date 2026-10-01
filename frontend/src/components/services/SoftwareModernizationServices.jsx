import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
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
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
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
  Activity,
  Globe2,
  Users2,
  Clock,
  TrendingUp,
  FileCode
} from 'lucide-react';

export const SoftwareModernizationServices = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const techScrollContainerRef = useRef(null);

  const cuttingEdgeTechList = [
    {
      title: 'Cloud Native & Kubernetes',
      desc: 'Containerize monolithic applications using Docker and Kubernetes orchestrations across AWS, Azure, and Google Cloud with multi-region elastic scalability.',
      icon: '/images/software_development_company_in_usa/cuttingedge/cloudcomputing.svg'
    },
    {
      title: 'Monolith to Microservices',
      desc: 'Deconstruct cumbersome legacy codebases into modular, loosely coupled microservices communicating over resilient gRPC, GraphQL, and event queues.',
      icon: '/images/software_development_company_in_usa/cuttingedge/aiml.svg'
    },
    {
      title: 'Legacy Database Re-engineering',
      desc: 'Migrate on-premise relational silos to high-throughput cloud databases (PostgreSQL, MongoDB, DynamoDB) with zero data loss and minimal operational downtime.',
      icon: '/images/software_development_company_in_usa/cuttingedge/datascience.svg'
    },
    {
      title: 'Automated CI/CD & DevSecOps',
      desc: 'Replace slow manual deployments with automated testing suites, vulnerability scanners, and continuous deployment pipelines for daily frictionless releases.',
      icon: '/images/software_development_company_in_usa/cuttingedge/arvr.svg'
    },
    {
      title: 'API-First Modernization',
      desc: 'Expose legacy business logic through secure, standardized RESTful and GraphQL APIs to seamlessly interconnect with modern mobile, web, and partner platforms.',
      icon: '/images/software_development_company_in_usa/cuttingedge/computervision.svg'
    },
    {
      title: 'AI & Intelligent Automation',
      desc: 'Inject predictive machine learning models and intelligent Robotic Process Automation (RPA) into legacy workflows to automate clerical business tasks.',
      icon: '/images/software_development_company_in_usa/cuttingedge/iot.svg'
    }
  ];

  // Success Stories (Matching User Screenshot Exactly)
  const modernizationSuccessCards = [
    {
      id: 1,
      title: 'Document Quality Analyzer Website Development',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'File Sharing App Development',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Data Analytics Website Development',
      image: '/images/success_stories/data_analytics.svg'
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

  // Carousel State for Key Service of Software Modernization Services Company
  const [isExpertiseHovered, setIsExpertiseHovered] = useState(false);
  const expertiseScrollRef = useRef(null);

  // Section: The Key Services of Software Modernization (Exact 1:1 Match to User Reference Image)
  const modernizationExpertiseCards = [
    {
      id: 1,
      title: 'Microservices Architecture Development',
      desc: 'We can break legacy monolithic systems down to agile, high performing microservices and simplify the technology stack to meet business objectives.'
    },
    {
      id: 2,
      title: 'UI/UX Modernization',
      desc: 'We can modernize any user interface capability by creating designs that are responsive, intuitive, and easy to use.'
    },
    {
      id: 3,
      title: 'API & Third-Party Integrations',
      desc: 'Modernize legacy applications as we enhance capabilities to help integrate user-defined solutions with existing functionalities using APIs and third-party tool interfaces.'
    },
    {
      id: 4,
      title: 'Performance and Security Upgrades',
      desc: 'We leverage existing applications to make them faster, secure, and robust through performance and security upgrades.'
    },
    {
      id: 5,
      title: 'Legacy Application Re-engineering',
      desc: 'We can reconstruct legacy applications into sophisticated, scalable and maintainable systems for any organization acting in the now.'
    },
    {
      id: 6,
      title: 'Cloud Migration & Re-platforming',
      desc: 'We can assist by moving or re-platforming legacy systems to cloud environments while enhancing the performance and security of the underlying architecture.'
    }
  ];

  // Set initial scroll offset so first card is partially cut off on the left (matching Reference Image 1)
  useEffect(() => {
    if (expertiseScrollRef.current) {
      expertiseScrollRef.current.scrollLeft = 200;
    }
  }, []);

  // Smooth auto-scroll loop
  useEffect(() => {
    if (isExpertiseHovered) return;
    const interval = setInterval(() => {
      if (expertiseScrollRef.current) {
        const container = expertiseScrollRef.current;
        const scrollStep = 360;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 40) {
          container.scrollTo({ left: 200, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isExpertiseHovered]);

  // Key Benefits Of Legacy Software Modernization (Using Exact SVGs)
  const modernizationBenefitsList = [
    {
      title: 'Enhanced Efficiency',
      desc: 'Streamlined processes and optimized workflows lead to enhanced productivity and reduced application response times across all operations.',
      icon: (
        <img
          src="/images/servicepagesnew/software_modernization_services_company/icons/enhanced_efficiency.svg"
          alt="Enhanced Efficiency"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Scalable for Growth',
      desc: 'Future-ready systems engineered with cloud elasticity and modular microservices that expand effortlessly to meet rising business demands.',
      icon: (
        <img
          src="/images/servicepagesnew/software_modernization_services_company/icons/scalable.svg"
          alt="Scalable for Growth"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Improved Security',
      desc: 'Shield your mission-critical applications against system vulnerabilities and cyber risks with the latest zero-trust encryption and compliance protocols.',
      icon: (
        <img
          src="/images/servicepagesnew/software_modernization_services_company/icons/improved_security.svg"
          alt="Improved Security"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Cost Savings',
      desc: 'Eliminate expensive legacy licensing fees and legacy server maintenance while dramatically slashing operational maintenance overhead.',
      icon: (
        <img
          src="/images/servicepagesnew/software_modernization_services_company/icons/cost_savings.svg"
          alt="Cost Savings"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Better User Experience',
      desc: 'Equip your employees and customers with responsive, intuitive, and modern user interfaces that drive satisfaction and high adoption.',
      icon: (
        <img
          src="/images/servicepagesnew/software_modernization_services_company/icons/better_user_experience.svg"
          alt="Better User Experience"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Seamless Integrations',
      desc: 'Effortlessly integrate user-defined solutions with existing core functionality and third-party SaaS ecosystems via secure APIs.',
      icon: (
        <img
          src="/images/servicepagesnew/software_modernization_services_company/icons/better_integrations.svg"
          alt="Seamless Integrations"
          className="w-12 h-12 object-contain"
        />
      )
    }
  ];

  // Modernization Software FAQs
  const modernizationFaqs = [
    {
      question: 'What is software modernization and why is it essential for growing businesses?',
      answer: 'Software modernization is the process of upgrading, refactoring, or re-architecting legacy applications to modern technology stacks, cloud environments, and microservices. It is essential because legacy systems accumulate technical debt, suffer from security vulnerabilities, have high upkeep costs, and cannot easily scale or integrate with modern digital tools.'
    },
    {
      question: 'How do you ensure zero data loss and business continuity during modernization?',
      answer: 'We employ the strangler fig migration pattern, continuous bidirectional data synchronization, and automated testing pipelines. This ensures that new microservices are phased in iteratively alongside existing systems, guaranteeing zero operational downtime and 100% data integrity.'
    },
    {
      question: 'Can you migrate legacy monoliths to AWS, Microsoft Azure, or Google Cloud?',
      answer: 'Yes. Our certified cloud architects specialize in re-hosting, re-platforming, and re-architecting monolithic applications to cloud-native architectures on AWS, Azure, and GCP, utilizing managed services, container orchestrators (Kubernetes), and serverless computing.'
    },
    {
      question: 'How long does a typical software modernization project take?',
      answer: 'Depending on the codebase complexity, size, and chosen strategy (refactoring vs. re-platforming), modernization projects can range from quick 6-week modernization sprints for high-priority bottlenecks to comprehensive 6 to 12-month enterprise-wide transformations carried out in agile milestones.'
    },
    {
      question: 'How do we get started with Firevy for software modernization services?',
      answer: 'You can begin by scheduling a free discovery consultation. Our senior modernization architects will audit your current architecture, identify security and performance bottlenecks, and provide a tailored modernization roadmap with clear cost and timeline estimates.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Software Modernization Services Company | Firevy.co"
        description="Future-proof your business with Firevy's software modernization services. Transform legacy systems into agile, scalable, and secure cloud-native solutions."
        canonical="https://firevy.co/services/software-modernization-services"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Layout Match to Reference)                           */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-16 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Software Modernization<br className="hidden sm:inline" /> Services Company
              </h1>

              <p className="text-[14.5px] sm:text-[15px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                Future proof your business with our Software Modernization Services to transform your legacy systems into agile & scalable, performant solutions. We specialize in developing custom web & application development solutions for businesses of any size at a competitive price point and with a commitment to quality. An enterprise, startup, or anything in between, Firevy will help you develop a modernization strategy that suits your business needs! Contact us for your free quote and enable the potential of modern and future ready technology.
              </p>

              {/* 4 Stats (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1">
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">Software<br />Developers</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">Fortunes 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">Project Completed in<br />Software</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[34px] font-extrabold text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#4B5563] mt-1 leading-[1.35]">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004d7c] text-white text-[15px] font-semibold transition-all duration-200 shadow-none space-x-2.5"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[500px] flex justify-center">
                <img
                  src="/images/servicepagesnew/software_modernization_services_company/img_banner.svg"
                  alt="Software Modernization Services Company"
                  className="w-full h-auto object-contain max-h-[380px]"
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
      {/* 3. DATA MODERNIZATION SERVICES EXPERTS                                    */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] flex justify-center">
                <img
                  src="/images/servicepagesnew/software_modernization_services_company/img_about.svg"
                  alt="Data Modernization Services Experts"
                  className="w-full h-auto object-contain max-h-[380px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Data Modernization Services Experts
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As an established software modernization services provider, we have extensive experience delivering secure, web-based systems and enterprise solutions of any size. We take organizations of any size, large scale or startups, and help them to re-engineer legacy systems into smarter, more efficient solutions. We take innovative approaches, industry expertise, global project experience, and smart modernization frameworks to create modernization solutions that ensure maximum ROI while reducing technology debt. Our best in class solutions will fulfill the current business requirements along with future scalability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH & GOODFIRMS TOP RATED RIBBON                                    */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE SOFTWARE MODERNIZATION BY EXPERTS                */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Software Modernization<br className="hidden sm:inline" /> By Experts
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
                Frictionless Migration,<br />
                Zero Downtime
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can engage seasoned software architects with deep proficiency across legacy codebase refactoring, enterprise cloud replatforming, high-concurrency microservices, and automated testing pipelines. Our mission is to transform rigid monolithic systems into agile, high-performance applications that eliminate technical debt and fuel sustainable revenue growth.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our custom software modernization roadmaps are tailored precisely to your organization's operational workflows—migrating on-premise servers to cloud infrastructure, decoupling bloated monolithic modules into microservices, and embedding real-time intelligence into mission-critical business platforms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING EDGE TECHNOLOGIES USED FOR SOFTWARE MODERNIZATION             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden w-full">
        <Container>
          {/* Centered Heading Matching Reference Design */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
              Cutting Edge Technologies Firevy Use For Software Modernization Services
            </h2>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="relative overflow-hidden w-full select-none py-1">
            <div
              ref={techScrollContainerRef}
              onMouseEnter={() => setIsTechHovered(true)}
              onMouseLeave={() => setIsTechHovered(false)}
              className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-1 py-2"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cuttingEdgeTechList.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[340px] lg:w-[375px] shrink-0 rounded-[16px] bg-[#DDF2FC] p-7 sm:p-8 min-h-[290px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md border border-[#CCE8FA]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="mb-5">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl sm:text-[21px] font-[800] text-[#0B0F19] mb-3 leading-snug font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.75] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Horizontal Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
            <button
              onClick={() => {
                if (techScrollContainerRef.current) {
                  techScrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
                }
              }}
              aria-label="Previous slide"
              className="p-2 text-slate-800 hover:text-[#0088CC] transition-colors cursor-pointer select-none text-2xl flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (techScrollContainerRef.current) {
                  techScrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
                }
              }}
              aria-label="Next slide"
              className="p-2 text-slate-800 hover:text-[#0088CC] transition-colors cursor-pointer select-none text-2xl flex items-center justify-center"
            >
              →
            </button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR PREMIUM SERVICES (1:1 MATCH TO USER SCREENSHOT 1)                  */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. SUCCESS STORIES & STATS (1:1 MATCH TO USER SCREENSHOT 2)               */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={modernizationSuccessCards}
        subtitle="Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 9. KEY BENEFITS OF LEGACY SOFTWARE MODERNIZATION EXPERTS                  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Key Benefits of Legacy Software Modernization Experts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
              By partnering with us for software modernization, you will achieve measurable benefits that allow your business to grow, adjust, and thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {modernizationBenefitsList.map((benefit, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-[14px] bg-[#F8FBFE] border border-[#E2EEF8] hover:shadow-md transition-all duration-300 flex flex-col text-left group"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0F172A] mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-[13.5px] sm:text-sm text-[#475569] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. KEY SERVICES OF SOFTWARE MODERNIZATION SERVICES COMPANY (CAROUSEL)    */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-20 bg-white font-sans w-full overflow-hidden text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        {/* Header Container */}
        <div className="max-w-5xl mx-auto px-4 text-center mb-10 sm:mb-12">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-2xl sm:text-3xl lg:text-[36px]">
            Key Service of Software Modernization Services Company
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We offer extensive software modernization services, delivered at high quality, to support your initiatives to enhance performance, lessen expenses, and strengthen robustness
          </p>
        </div>

        {/* Edge-to-edge Full-width Carousel (Exact Match to User Reference Screenshot 1) */}
        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...modernizationExpertiseCards, ...modernizationExpertiseCards].map((card, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[335px] lg:w-[350px] shrink-0 bg-[#DDF2FC] rounded-[16px] p-7 sm:p-8 flex flex-col justify-start border border-[#CCE8FA] select-none min-h-[250px] sm:min-h-[270px] transition-all duration-300 hover:shadow-md hover:bg-[#D5EEFA]"
              >
                <h3 className="font-[800] text-[17.5px] sm:text-[18.5px] text-[#0B0F19] mb-3.5 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.7] text-left font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* 11. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels title="Business Friendly Hiring Models : Building Greater Futures Through Innovation" />

      {/* ========================================================================= */}
      {/* 12. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 14. OUR STORY THEIR WORDS                                                 */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 15. TRUSTED BRANDS GRID                                                   */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 16. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 17. WHAT OUR CLIENTS SAY                                                  */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 18. FEATURED IN BRANDS                                                    */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection faqs={modernizationFaqs} />

      {/* ========================================================================= */}
      {/* 21. RECENT BLOGS                                                          */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 23. CTA BANNER                                                            */}
      {/* ========================================================================= */}
      <IWatchChallengeCtaBanner
        title="Have Software Modernization Services Company Challenge To Address ?"
        subtitle="Contact us now to leverage the expertise of our enterprise software modernization engineers. Their capabilities include:"
      />
    </div>
  );
};

export default SoftwareModernizationServices;
