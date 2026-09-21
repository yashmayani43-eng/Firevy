import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import {
  Database,
  Filter,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Sparkles,
  BarChart3,
  RefreshCw,
  Cpu,
  FileCheck2,
  Lock,
  Workflow,
  Server,
  Award,
  Cloud,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const CloudFoundrySoftwareDevelopmentService = () => {
  // Ref for Cutting-Edge Technologies Horizontal Slider
  const techScrollRef = useRef(null);

  // Cutting-Edge Technologies matching reference First Image (IoT, Data Science, Cloud Computing, AR/VR, etc.)
  const cuttingEdgeTechnologies = [
    {
      id: 1,
      title: 'IoT',
      desc: 'Our software for Internet of Things solutions is designed to provide customers with intelligent automation, smooth integration, and real-time monitoring, resulting in dramatic results for your company.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="14" width="20" height="20" rx="3" />
          <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0084D1" stroke="none" fontFamily="sans-serif">IoT</text>
          <path d="M20 14V8M28 14V8M20 34v6M28 34v6M14 20H8M14 28H8M34 20h6M34 28h6" />
          <circle cx="20" cy="7" r="1.5" fill="#0084D1" />
          <circle cx="28" cy="7" r="1.5" fill="#0084D1" />
          <circle cx="20" cy="41" r="1.5" fill="#0084D1" />
          <circle cx="28" cy="41" r="1.5" fill="#0084D1" />
          <circle cx="7" cy="20" r="1.5" fill="#0084D1" />
          <circle cx="7" cy="28" r="1.5" fill="#0084D1" />
          <circle cx="41" cy="20" r="1.5" fill="#0084D1" />
          <circle cx="41" cy="28" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Data Science',
      desc: 'Our services, which range from big data solutions to predictive analytics, enable you to find hidden trends, streamline processes, and make data-driven choices that advance your company.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="24" cy="24" rx="20" ry="7" transform="rotate(-30 24 24)" />
          <ellipse cx="24" cy="24" rx="20" ry="7" transform="rotate(30 24 24)" />
          <ellipse cx="24" cy="24" rx="20" ry="7" transform="rotate(90 24 24)" />
          <rect x="19" y="19" width="10" height="10" rx="2" fill="#E1F3FD" />
          <rect x="19" y="19" width="10" height="10" rx="2" stroke="#0084D1" />
          <line x1="22" y1="22" x2="26" y2="22" />
          <line x1="22" y1="26" x2="26" y2="26" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cloud Computing',
      desc: 'With the help of our cloud software solutions, your company may run more adaptable and resiliently, thanks to their smooth migration, strong infrastructure, and affordable administration.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16a5 5 0 0 1 9-2 4 4 0 0 1 7 3 3.5 3.5 0 0 1-1 7H16a4 4 0 0 1 0-8z" />
          <rect x="8" y="27" width="14" height="13" rx="2" />
          <line x1="11" y1="31" x2="19" y2="31" />
          <line x1="11" y1="35" x2="19" y2="35" />
          <circle cx="12" cy="29" r="0.5" fill="#0084D1" />
          <rect x="26" y="27" width="15" height="10" rx="2" />
          <line x1="33.5" y1="37" x2="33.5" y2="40" />
          <line x1="30" y1="40" x2="37" y2="40" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'AR/VR',
      desc: 'We create software that provides a feeling of realism that spans the actual and digital worlds, whether it is used for interactive marketing, immersive training, or other purposes.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="13" y="6" width="22" height="36" rx="4" />
          <line x1="21" y1="10" x2="27" y2="10" />
          <circle cx="24" cy="38" r="1.5" fill="#0084D1" />
          <path d="M24 16l7 4v8l-7 4-7-4v-8l7-4z" />
          <path d="M24 16v12M31 20l-7 4M17 20l7 4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Cloud Foundry & Diego PaaS',
      desc: 'Deploy, orchestrate, and scale enterprise microservices with automated buildpacks, self-healing Diego container cells, and zero-downtime traffic routing.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24 6 40 15 40 33 24 42 8 33 8 15 24 6" />
          <line x1="24" y1="6" x2="24" y2="42" />
          <circle cx="24" cy="24" r="4" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'AI & Machine Learning',
      desc: 'We use AI solutions to automate software processes, provide predictive insights, and promote intelligent decision-making by leveraging advanced machine learning models.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="14" width="20" height="20" rx="3" />
          <circle cx="24" cy="24" r="5" />
          <circle cx="24" cy="24" r="2" fill="#0084D1" />
          <path d="M19 8v6M29 8v6M19 34v6M29 34v6M8 19h6M8 29h6M34 19h6M34 29h6" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Blockchain',
      desc: 'We build decentralized, tamper-proof blockchain solutions that ensure high security, transparency, and data integrity for enterprise transactions and smart contracts.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <rect x="28" y="8" width="12" height="12" rx="2" />
          <rect x="8" y="28" width="12" height="12" rx="2" />
          <rect x="28" y="28" width="12" height="12" rx="2" />
          <path d="M20 14h8M20 34h8M14 20v8M34 20v8" strokeDasharray="2 2" />
          <circle cx="24" cy="14" r="2" fill="#0084D1" />
          <circle cx="24" cy="34" r="2" fill="#0084D1" />
        </svg>
      )
    }
  ];

  // 6 Benefits Cards Grid (Exact 1:1 Match to Reference Layout & SVG Styling)
  const cloudFoundryBenefits = [
    {
      title: 'Seasoned Cloud Foundry Certified Architects',
      desc: 'Cloud Foundry PaaS architecture, Diego clustering, and multi-region deployment are among the subjects our certified engineers are well familiar with, ensuring peak scalability.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="7" width="32" height="13" rx="2" />
          <line x1="13" y1="13.5" x2="15" y2="13.5" strokeWidth="2.5" />
          <line x1="18" y1="13.5" x2="20" y2="13.5" strokeWidth="2.5" />
          <line x1="23" y1="13.5" x2="25" y2="13.5" strokeWidth="2.5" />
          <circle cx="34" cy="13.5" r="1.3" fill="#0084D1" />
          <circle cx="30" cy="13.5" r="1.3" fill="#0084D1" />
          <rect x="8" y="25" width="32" height="13" rx="2" />
          <line x1="13" y1="31.5" x2="15" y2="31.5" strokeWidth="2.5" />
          <line x1="18" y1="31.5" x2="20" y2="31.5" strokeWidth="2.5" />
          <line x1="23" y1="31.5" x2="25" y2="31.5" strokeWidth="2.5" />
          <circle cx="34" cy="31.5" r="1.3" fill="#0084D1" />
          <circle cx="30" cy="31.5" r="1.3" fill="#0084D1" />
          <path d="M14 20v5M34 20v5" />
        </svg>
      )
    },
    {
      title: 'Mastery of Leading PaaS & Container Tools',
      desc: 'To execute exact and reliable cloud solutions, our team makes use of modern Cloud Foundry technologies like Diego cells, BOSH, Gorouter, Cloud Native Buildpacks, and OSBAPI brokers.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 16 L38 16 L28 28 L28 38 L20 38 L20 28 Z" />
          <line x1="15" y1="7" x2="15" y2="12" />
          <circle cx="15" cy="6" r="1.8" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="12" />
          <circle cx="24" cy="3" r="1.8" fill="#0084D1" />
          <line x1="33" y1="7" x2="33" y2="12" />
          <circle cx="33" cy="6" r="1.8" fill="#0084D1" />
          <circle cx="24" cy="43" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Agile and Group Cloud Migration',
      desc: 'Working directly with your team, we use an agile approach to identify your application challenges and provide tailored Cloud Foundry migration solutions fit for your company goals.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 7 A 17 17 0 1 1 9 24" />
          <polyline points="5 14 9 24 19 20" />
          <circle cx="24" cy="24" r="5" />
          <path d="M24 16v2M24 30v2M16 24h2M30 24h2M18.5 18.5l1.4 1.4M28.1 28.1l1.4 1.4M18.5 29.5l1.4-1.4M28.1 19.9l1.4-1.4" />
        </svg>
      )
    },
    {
      title: 'Testing for Quality & High Availability',
      desc: 'To guarantee resilience and speed, every Cloud Foundry deployment goes through thorough chaos testing and performance validation under real-time global traffic loads.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <circle cx="37" cy="11" r="3" />
        </svg>
      )
    },
    {
      title: 'Future-Ready, Scalable PaaS Solutions',
      desc: 'Our developers provide scalable Cloud Foundry architectures meant to expand with your company, effortlessly managing microservices scaling, event streaming, and analytics.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="8" width="12" height="12" rx="2" />
          <circle cx="24" cy="14" r="2" fill="#0084D1" />
          <line x1="24" y1="4" x2="24" y2="8" />
          <line x1="14" y1="14" x2="18" y2="14" />
          <line x1="30" y1="14" x2="34" y2="14" />
          <path d="M9 34c4-2 9-2 13-2h4a6 6 0 0 1 6 6v3H7v-3a4 4 0 0 1 2-4z" />
          <path d="M22 32l3-5a2 2 0 0 1 3 2l-2 3" />
        </svg>
      )
    },
    {
      title: 'Constant Support & FinOps Optimization',
      desc: 'We provide ongoing assistance for Cloud Foundry services to maintain the current and optimal state of your infrastructure, offering 24/7 SRE monitoring, right-sizing, and cost optimization.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26V20a10 10 0 0 1 20 0v6" />
          <rect x="11" y="24" width="6" height="10" rx="2" />
          <rect x="31" y="24" width="6" height="10" rx="2" />
          <path d="M34 32v2a4 4 0 0 1-4 4h-6" />
          <circle cx="21" cy="38" r="2" fill="#0084D1" />
        </svg>
      )
    }
  ];

  // Carousel State for Our Expertise Section
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const [isExpertiseHovered, setIsExpertiseHovered] = useState(false);
  const expertiseScrollRef = useRef(null);

  const cloudFoundryExpertiseCards = [
    {
      title: 'Automated CI/CD Integration',
      desc: 'Implement continuous integration and continuous deployment pipelines to speed up time-to-market and ensure reliable, zero-downtime releases.'
    },
    {
      title: 'Performance Monitoring & Optimization',
      desc: 'Leverage real time analytics and monitoring tools to guarantee app performance, availability, and uptime.'
    },
    {
      title: 'Third-Party API & Service Integrations',
      desc: 'Integrate databases, messaging queues, identity, and more with your Cloud Foundry apps to add functionality.'
    },
    {
      title: 'Custom Cloud Native Application Development',
      desc: 'Utilize Cloud Foundry’s open-source platform to develop and deploy highly scalable applications specific to your business needs.'
    },
    {
      title: 'Microservices Architecture Implementation',
      desc: 'Transitioning legacy systems to microservices architecture for increased agility, fault tolerance, and independent scaling of services.'
    },
    {
      title: 'Multi-Cloud Migration & Deployment',
      desc: 'Seamlessly migrate workloads to Cloud Foundry across AWS, Azure, GCP, or private clouds with zero downtime and vendor independence.'
    }
  ];

  useEffect(() => {
    if (isExpertiseHovered) return;
    const interval = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % cloudFoundryExpertiseCards.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isExpertiseHovered]);

  useEffect(() => {
    if (expertiseScrollRef.current) {
      const cardStep = 390;
      expertiseScrollRef.current.scrollTo({
        left: expertiseIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [expertiseIndex]);

  // Success Stories tailored to Cloud Foundry
  const cloudFoundrySuccessCards = [
    {
      id: 1,
      title: 'Enterprise Microservices & Cloud-Native Tanzu Cluster',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Real-Time Diego Container Orchestration & API Mesh Platform',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Automated Zero-Downtime BOSH CI/CD Deployment Pipeline',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Tailored to Cloud Foundry Platform & Firevy.co)
  const cloudFoundryFaqs = [
    {
      question: '1. What are Cloud Foundry Software Development Services, and why are they essential?',
      answer: 'Cloud Foundry Software Development Services encompass enterprise PaaS architecture design, application containerization (Diego), automated builds (Buildpacks), service broker binding (OSBAPI), and multi-cloud lifecycle management (BOSH). They ensure lightning-fast developer velocity, zero-downtime deployments, and multi-cloud independence.'
    },
    {
      question: '2. How do your Cloud Foundry migration services work?',
      answer: 'Our process includes legacy infrastructure auditing, 12-factor application refactoring, automated service broker configuration for persistent state, Diego containerization, validation testing, and live traffic cutover with zero downtime.'
    },
    {
      question: '3. What makes Cloud Foundry Diego superior for container management?',
      answer: 'Diego is Cloud Foundry’s purpose-built container management engine. It distributes workloads across cell nodes using an auction algorithm, continuously monitors instance health, automatically restarts crashed instances, and eliminates complex orchestration script maintenance.'
    },
    {
      question: '4. Do you provide Cloud Foundry development services tailored to our sector?',
      answer: 'Yes, we serve diverse industries including Fintech, Healthcare, eCommerce, Logistics, and SaaS, ensuring full regulatory compliance with HIPAA, SOC 2, and PCI-DSS standards.'
    },
    {
      question: '5. How secure is our enterprise infrastructure on Cloud Foundry?',
      answer: 'Cloud Foundry is built with security-by-design principles. We enforce container isolation via Garden, User Account and Authentication (UAA) identity access control, TLS termination, mutual TLS between internal components, and automated platform-wide CVE security patch rollouts.'
    },
    {
      question: '6. How does Cloud Foundry eliminate vendor lock-in across multi-cloud?',
      answer: 'Cloud Foundry abstracts underlying infrastructure through BOSH Cloud Provider Interfaces (CPIs). The exact same application package and deployment manifest runs consistently on AWS, Microsoft Azure, Google Cloud, and private VMware vSphere without changing application code.'
    },
    {
      question: '7. Why should businesses choose Firevy.co for Cloud Foundry development services?',
      answer: 'With certified Cloud Foundry & Tanzu Architects and 500+ successful cloud deliveries, Firevy.co is trusted by global companies to modernize workloads, eliminate release bottlenecks, and unlock unmatched developer productivity.'
    },
    {
      question: '8. What types of Cloud Foundry services does Firevy.co offer?',
      answer: 'We offer end-to-end Cloud Foundry services including Diego runtime deployment, custom Buildpack engineering, Open Service Broker integrations, VMware Tanzu Application Service (TAS) migration, BOSH lifecycle automation, and 24/7 SRE managed operations.'
    },
    {
      question: '9. Does Firevy.co offer continuous Cloud Foundry cost optimization (FinOps)?',
      answer: 'Yes, we implement proactive Cloud Foundry FinOps practices, including cell container bin-packing, auto-scaling policy tuning, idle instance hibernation, and automated resource metering to lower ongoing multi-cloud infrastructure expenses by up to 50%.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Cloud Foundry Software Development Services | PaaS Consulting & Architecture | Firevy.co"
        description="Accelerate your enterprise digital transformation with Firevy's Cloud Foundry Software Development Services. Diego container orchestration, BOSH automation, Cloud Native Buildpacks, and multi-cloud PaaS solutions."
        keywords="Cloud Foundry Software Development Services, Cloud Foundry PaaS, Cloud Foundry Consulting, Diego Container Runtime, BOSH Multi-Cloud, Cloud Native Buildpacks, VMware Tanzu, Firevy.co"
        url="https://firevy.co/services/cloud-foundry-software-development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT 1:1 MATCH TO REFERENCE FIRST IMAGE)               */}
      {/* ========================================================================= */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Title + Paragraph + 4 Stats + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.18] font-sans">
                Cloud Foundry Software Development <br />
                Services
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-2xl font-sans">
                Go that extra mile with best Cloud Foundry Software Development Services, an epitome in advancement and cost-effective services designed for altogether different products and sizes. I am more than a startup trying to grow or an enterprise in need of modernizing. We build cloud-native web and mobile apps that scale and secure the handling of their business. Flexibility and speed are neatly integrated into our made to fit software so that your charges will be minimal. Conduct your app development today! Enjoy the deals by Affordable Cloud Foundry consulting and development services provider that has store for you from here until eternity.
              </p>

              {/* 4 Stats (Exact layout from First Image - clean text without card borders) */}
              <div className="flex flex-wrap items-start gap-8 sm:gap-11 pt-2">
                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">100+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Software<br />Developers
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">20+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Fortunes 500<br />Companies
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">1000+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Project Completed in<br />Software
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">320+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Action Button (Exact from First Image) */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Exact Matching 2D Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_foundry_hero.jpg"
                  alt="Cloud Foundry Software Development Services"
                  className="w-full h-auto object-contain drop-shadow-md transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
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
      {/* 3. SAFEST BEST CLOUD FOUNDRY COMPANY (Image Left + Narrative Right)       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Cloud Foundry Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/cloud_foundry_pipeline.jpg"
                  alt="Automated Cloud Foundry PaaS Architecture"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for the Safest Best Cloud Foundry Software Development Company
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Enterprises handle enormous volumes of microservices and workloads in the digital age. Monolithic on-premise servers and unstandardized infrastructure may, however, be rife with scaling bottlenecks, configuration drift, and excessive operational costs, causing business slowdowns and missed opportunities.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                At Firevy.Co, our Cloud Foundry certified engineers architect resilient multi-cloud PaaS systems backed by BOSH lifecycle automation, Cloud Native Buildpacks, and custom Open Service Brokers. We empower enterprises to achieve continuous delivery with guaranteed 99.99% uptime.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* ========================================================================= */}
      {/* 5. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 6. 100% CUSTOMIZABLE CLOUD FOUNDRY SERVICES (Quote Card + Narrative)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference Screenshot */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Cloud Foundry Software Development Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[320px] group transition-all duration-300 hover:shadow-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              {/* Speech bubble pointer arrow pointing right towards narrative */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Developer-first,<br />zero-downtime PaaS<br />guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative (Exact 1:1 Match to Reference Layout) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Navigating complex multi-cloud deployments without a standardized Platform as a Service leads to configuration drift, security gaps, and sluggish release cycles. As an enterprise Cloud Foundry Software Development Company, Firevy.Co provides tailored PaaS architectures that empower developers to ship code rapidly without touching servers.
              </p>
              <p>
                Our 100% personalized Cloud Foundry Solutions are designed for your unique enterprise workloads. Whether your needs are for Diego container runtime orchestration, BOSH multi-cloud cluster lifecycle management, custom buildpack development, or VMware Tanzu modernization, our certified team provides architectures that strengthen system uptime, accelerate release velocity, and maximize business growth.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION (EXACT 1:1 MATCH TO FIRST IMAGE)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FA] font-sans text-left border-y border-slate-100">
        <Container className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
                Cutting-Edge Technologies We Use For Cloud Foundry
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] max-w-2xl font-normal leading-relaxed">
                As a premier Cloud Foundry engineering firm, Firevy.Co leverages enterprise-grade PaaS orchestration, lifecycle tooling, and cloud-native frameworks.
              </p>
            </div>

        {/* Full-Width Edge-to-Edge Cards Carousel Track */}
        <div className="relative overflow-hidden w-full select-none py-1">
          <div
            ref={techScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none px-4 sm:px-8 lg:px-12 scroll-smooth py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cuttingEdgeTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="w-[300px] sm:w-[340px] lg:w-[370px] shrink-0 rounded-[14px] bg-[#E1F3FD] p-6 sm:p-7 min-h-[220px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
              >
                {/* Top Icon */}
                <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                  {tech.icon}
                </div>

                {/* Tech Title */}
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-2 leading-snug tracking-tight">
                  {tech.title}
                </h3>

                {/* Tech Description */}
                <p className="font-normal text-[#334155] text-[13px] sm:text-[13.5px] leading-[1.65]">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Center Navigation Arrows Matching Reference First Image */}
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
          <button
            onClick={() => {
              if (techScrollRef.current) {
                techScrollRef.current.scrollBy({ left: -390, behavior: 'smooth' });
              }
            }}
            aria-label="Previous technologies"
            className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none text-2xl font-bold"
          >
            ←
          </button>

          <button
            onClick={() => {
              if (techScrollRef.current) {
                techScrollRef.current.scrollBy({ left: 390, behavior: 'smooth' });
              }
            }}
            aria-label="Next technologies"
            className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none text-2xl font-bold"
          >
            →
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES (MATCHING REFERENCE SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={cloudFoundrySuccessCards}
        subtitle="Explore how Firevy.Co has enabled global enterprises to transform software velocity and achieve resilient multi-cloud operations with Cloud Foundry PaaS."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR CLOUD FOUNDRY SERVICES (EXACT 1:1 MATCH TO REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Cloud Foundry Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of enterprise cloud engineering, Diego orchestration, and BOSH automation have made our certified Cloud Foundry developers very talented individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudFoundryBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.8px] leading-[1.68] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. END-TO-END CLOUD FOUNDRY DEVELOPMENT SERVICES                         */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        {/* Header Container */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-12">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
            End-to-End Cloud Foundry Development Services
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide all services in Cloud Foundry environments to guarantee scale, performance, and productivity through
          </p>
        </div>

        {/* Edge-to-edge Full-width Carousel */}
        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cloudFoundryExpertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 bg-[#DDF1FC] rounded-[16px] p-6 sm:p-7 flex flex-col justify-start border border-[#CEEAFA] select-none min-h-[220px] sm:min-h-[240px] transition-all duration-300 hover:shadow-md hover:bg-[#D5EEFA]"
              >
                <h3 className="font-[800] text-[16.5px] sm:text-[18px] text-[#0B0F19] mb-3 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#334155] leading-[1.65] text-left font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 14. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 15. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Cloud Foundry Development Process We Follow"
        subtitle="Our systematic cloud pipeline from initial architecture auditing and workload assessment to automated Diego deployment, BOSH integration, and 24/7 SRE monitoring."
      />

      {/* ========================================================================= */}
      {/* 16. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 17. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 18. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 19. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 20. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 21. FREQUENTLY ASKED QUESTIONS (Exact 9 Reference FAQs)                   */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={cloudFoundryFaqs}
        companyName="Firevy.Co"
      />

      {/* ========================================================================= */}
      {/* 22. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 23. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 24. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Cloud Foundry Challenge To Address ?"
          subtitle="Get access to top Cloud Foundry Certified Architects and Tanzu specialists at Firevy.Co to transform your deployment pipeline into an automated PaaS ecosystem."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default CloudFoundrySoftwareDevelopmentService;
