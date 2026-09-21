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
  ArrowLeft,
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
  HardDrive,
  Share2,
  FolderSync,
  ShieldAlert,
  Activity,
  Sliders
} from 'lucide-react';

export const CloudBasedStorageServices = () => {
  // Ref for Cutting-Edge Technologies Horizontal Slider
  const techScrollRef = useRef(null);

  // Cutting-Edge Technologies matching reference Image 1 (Cloud Computing, AR/VR, Computer Vision, AI/ML, IoT, Data Science)
  const cuttingEdgeTechnologies = [
    {
      id: 1,
      title: 'Cloud Computing',
      desc: 'With the help of our cloud software solutions, your company may run more adaptable and resiliently, thanks to their smooth migration, strong infrastructure, and affordable administration.',
      icon: '/images/software_development_company_in_usa/cuttingedge/cloudcomputing.svg'
    },
    {
      id: 2,
      title: 'AR/VR',
      desc: 'We create software that provides a feeling of realism that spans the actual and digital worlds, whether it is used for interactive marketing, immersive training, or other purposes.',
      icon: '/images/software_development_company_in_usa/cuttingedge/arvr.svg'
    },
    {
      id: 3,
      title: 'Computer Vision',
      desc: 'We can provide your software computer vision features to improve accuracy, automate processes, and open new avenues for creativity and job efficiency, ranging from picture recognition to video analysis.',
      icon: '/images/software_development_company_in_usa/cuttingedge/computervision.svg'
    },
    {
      id: 4,
      title: 'AI/ML',
      desc: 'We use AI solutions to automate software processes, provide insights, and promote more intelligent decision-making by leveraging the potential of AI/ML technology.',
      icon: '/images/software_development_company_in_usa/cuttingedge/aiml.svg'
    },
    {
      id: 5,
      title: 'IoT',
      desc: 'Our software for Internet of Things solutions is designed to provide customers with intelligent automation, smooth integration, and real-time monitoring, resulting in dramatic results for your company.',
      icon: '/images/software_development_company_in_usa/cuttingedge/iot.svg'
    },
    {
      id: 6,
      title: 'Data Science',
      desc: 'Our services, which range from big data solutions to predictive analytics, enable you to find hidden trends, streamline processes, and make data-driven choices that advance your company.',
      icon: '/images/software_development_company_in_usa/cuttingedge/datascience.svg'
    }
  ];

  // 6 Core Benefits of Cloud Based Storage Services
  const cloudStorageBenefits = [
    {
      title: 'Better Data Protection',
      desc: 'Multi-layered security measures and end-to-end encryption keep your business-critical data secure across all storage tiers.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <ShieldCheck className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Smooth Accessibility',
      desc: 'Make data accessible and manageable from anywhere, resulting in real-time collaboration and operational effectiveness worldwide.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Share2 className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Affordable Storage',
      desc: 'Pay-as-you-go pricing models save you massive overhead on on-premise IT hardware, power, cooling, and maintenance costs.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <HardDrive className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Scalable Infrastructure',
      desc: 'Scale storage capacity effortlessly from terabytes to petabytes with growing business data without physical hardware limitations.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Layers className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Disaster Recovery Readiness',
      desc: 'Safeguard against catastrophic data loss using automated geo-redundant backup systems and near-instant recovery capabilities.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <FolderSync className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Enhanced Business Agility',
      desc: 'Facilitate faster decision-making and responsiveness through data systems integrated and powered by modern cloud infrastructure.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Zap className="w-6 h-6" />
        </div>
      )
    }
  ];

  // 6 Services in "Our Cloud Computing Storage Services" matching Image 1
  const cloudStorageServicesCards = [
    {
      title: 'Enterprise Cloud Collaboration Solutions',
      desc: 'Enable teams to access, share, and collaborate securely through cloud storage services for business.'
    },
    {
      title: 'Custom Cloud Development & Consulting',
      desc: 'Cloud based data services that are custom made to meet the particular business needs and business processes.'
    },
    {
      title: 'Cloud Based Data Storage Solutions',
      desc: 'Safe and high-performance data storage solutions engineered for rapid access, scalability, and reliability.'
    },
    {
      title: 'Cloud Based Service Management',
      desc: 'Comprehensive management of your cloud infrastructure to guarantee uptime, performance, and security.'
    },
    {
      title: 'Data Backup & Recovery Services',
      desc: 'Enterprise data protection solutions for business continuity with automated disaster recovery and backup.'
    },
    {
      title: 'Cloud Migration & Integration Services',
      desc: 'Simplified migration from on-premise systems to cloud computing storage services without any downtime.'
    }
  ];

  // Carousel auto-scroll for Services
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const serviceScrollRef = useRef(null);

  useEffect(() => {
    if (isServiceHovered) return;
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % cloudStorageServicesCards.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isServiceHovered]);

  useEffect(() => {
    if (serviceScrollRef.current) {
      const cardStep = 370;
      serviceScrollRef.current.scrollTo({
        left: serviceIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [serviceIndex]);

  // Success Stories matching Image 1 exactly
  const cloudStorageSuccessCards = [
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

  // 9 Tailored Cloud Based Storage Services FAQs
  const cloudStorageFaqs = [
    {
      question: '1. What are Cloud Based Storage Services?',
      answer: 'Cloud Based Storage Services allow businesses to store, organize, and manage data on remote servers hosted on the internet, providing secure anywhere access, virtually limitless scalability, and drastic cost efficiency.'
    },
    {
      question: '2. Why should I choose a Cloud Based Storage Services Provider?',
      answer: 'A professional provider like Firevy.co ensures your mission-critical data is architected securely, highly available across multiple availability zones, and backed by automated disaster recovery, lifecycle tiering, and compliance mechanisms.'
    },
    {
      question: '3. What industries benefit most from Cloud Based Data Storage?',
      answer: 'Industries like healthcare, fintech, eCommerce, media streaming, and legal benefit the most, as they demand strict zero-loss data protection, real-time access, and regulatory compliance (HIPAA, GDPR, SOC 2).'
    },
    {
      question: '4. How secure is cloud based data storage for my business?',
      answer: 'Our cloud storage architectures implement military-grade AES-256 encryption at rest, TLS 1.3 in transit, role-based IAM access policies, object immutability (WORM), and continuous threat telemetry.'
    },
    {
      question: '5. Can you help migrate my data to the cloud?',
      answer: 'Yes, our Cloud Migration & Integration Services ensure smooth, accelerated, and zero-downtime migration from on-premise SAN, NAS, and legacy databases directly into AWS S3, Azure Blob, or Google Cloud Storage.'
    },
    {
      question: '6. What is Online Cloud Storage Services Management?',
      answer: 'It encompasses ongoing 24/7 proactive maintenance, performance monitoring, automated lifecycle tiering (hot to cold/archive), storage cost governance, and security auditing to maximize reliability.'
    },
    {
      question: '7. Do you provide backup and disaster recovery options?',
      answer: 'Absolutely. Our Cloud Based Storage Services feature automated cross-region replication, continuous point-in-time snapshots, and instant failover capabilities to safeguard against ransomware and hardware failures.'
    },
    {
      question: '8. Are Cloud Storage Services for Business customizable?',
      answer: 'Yes, we engineer bespoke hybrid, multi-cloud, and private cloud storage topologies tailored specifically to your data throughput, latency requirements, compliance mandates, and enterprise workflows.'
    },
    {
      question: '9. How do Cloud Based Storage Services reduce IT costs?',
      answer: 'By replacing expensive on-premise storage arrays, hardware refresh cycles, and maintenance contracts with dynamic pay-as-you-go cloud tiers, businesses slash total storage TCO by up to 60%.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white font-sans">
      <SEO
        title="Cloud Based Storage Services Provider | Firevy.co"
        description="Enterprise Cloud Based Storage Services Provider. Secure, scalable, and cost-effective cloud data storage, automated backup, zero-downtime migration, and disaster recovery."
        keywords="cloud based storage services, cloud storage provider, cloud data storage solutions, enterprise cloud backup, cloud migration services, AWS S3, Azure Blob, GCP Storage"
        url="https://firevy.co/services/cloud-based-storage-services"
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
                Cloud Based Storage <br />
                Services Provider
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-2xl font-sans">
                In the cloud-based age today, through-the-roof infrastructure expenses can creep in unnoticed and leach away business funds. At our organization, we are experts at Cloud Based Storage Services that give businesses control to securely store, manage, and access critical data anytime, anywhere with complete visibility and zero hardware bottlenecks. You may be a small startup or an enterprise, but our tailored cloud storage services are designed for affordability, efficacy, and long-term value. Are you ready to get the upper hand on your cloud storage? Get your free quote today and begin saving smartly.
              </p>

              {/* 4 Stats (Exact 1:1 match to First Image) */}
              <div className="flex flex-wrap items-start gap-8 sm:gap-11 pt-2">
                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">53+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Software<br />Developers
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">10+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Fortunes 500<br />Companies
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">530+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    Project Completed in<br />Software
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight leading-none">169+</div>
                  <div className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-snug mt-2">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Action Button (Exact 1:1 match to First Image) */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group font-sans"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Exact Matching 2D Flat Vector Illustration (No Box, Pure Clean Canvas) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_cost_optimization_hero.svg"
                  alt="Cloud Based Storage Services Provider"
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE (WORLD LEADING CLIENTS)                             */}
      {/* ========================================================================= */}
      <BrandLogoMarquee companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 3. LEADING CLOUD BASED STORAGE SERVICES PROVIDER OVERVIEW SECTION         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white text-left">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[500px] lg:max-w-none">
                <img
                  src="/images/cloud_based_storage_about.svg"
                  alt="Leading Cloud Based Storage Services Provider For Businesses Worldwide"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text Column (Clean H2 + Single Exact Paragraph matching Image 1) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-[900] text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Leading Cloud Based Storage <br className="hidden sm:inline" />
                Services Provider For <br className="hidden sm:inline" />
                Businesses Worldwide
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#475569] font-normal leading-[1.8] font-sans">
                As an established Cloud Based Data Storage and Cloud Based Service Management company, we have years of experience in providing secure and tailored storage solutions to global clients. Our Cloud Based Data Services expertise and cloud-based data services expertise help firms tap the maximum potential of cloud technology while maintaining compliance and high availability. From cloud storage services online to enterprise-class data management, we blend innovation and reliability to design efficient digital ecosystems that facilitate your business objectives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. AWARDS & RECOGNITIONS RIBBON                                           */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. TRANSFORMING DATA MANAGEMENT WITH CLOUD BASED STORAGE SERVICES         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference First Image */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-[1.2] mb-10 sm:mb-14 font-sans">
            Transforming Data Management with Cloud Based Storage <br className="hidden sm:inline" />
            Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[300px] group transition-all duration-300 hover:shadow-md">
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
                Smart Software <br />
                Development for <br />
                Secure <br />
                Applications
              </h3>
            </div>

            {/* Right Column: Detailed Narrative (Exact 1:1 Match to Reference Image 1) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left font-sans">
              <p>
                Our Best Cloud Storage Service Providers are designed to provide unparalleled scalability, flexibility, and business data protection for enterprises in multiple industries. We assist businesses in moving away from legacy infrastructure to new cloud based data storage infrastructures supporting uninterrupted access, auto recovery, and real-time data synchronization.
              </p>
              <p>
                With extensive knowledge of cloud based service management, our experts have delivered solutions to clients from industries ranging from healthcare, retail, and finance to logistics. As a leading Cloud Based Storage Services Provider, we specialize in developing business-specific solutions—providing not only cloud setup but data migration, monitoring, and ongoing optimization to achieve sustainable performance and robustness.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING-EDGE TECHNOLOGIES WE USE (EXACT 1:1 MATCH TO IMAGE 1)          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden w-full">
        {/* Centered Heading Matching Reference First Image */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-[1.25] font-sans">
            Cutting Edge Technologies Sapphire Use For Software <br className="hidden sm:inline" />
            Development Services
          </h2>
        </div>

        {/* Full-Width Carousel Track of Light Blue Cards */}
        <div className="relative overflow-hidden w-full select-none py-1">
          <div
            ref={techScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none px-4 sm:px-8 lg:px-12 scroll-smooth py-2"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cuttingEdgeTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 rounded-[16px] bg-[#E1F3FD] p-7 sm:p-8 min-h-[220px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="mb-4">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-[22px] font-[800] text-[#0B0F19] mb-3 leading-snug font-sans">
                  {tech.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.72] font-normal font-sans">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows for Scroll Navigation */}
        <div className="flex justify-center items-center gap-5 mt-8">
          <button
            onClick={() => {
              if (techScrollRef.current) {
                techScrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
              }
            }}
            aria-label="Previous technologies"
            className="p-2 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2]" />
          </button>
          <button
            onClick={() => {
              if (techScrollRef.current) {
                techScrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
              }
            }}
            aria-label="Next technologies"
            className="p-2 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
          >
            <ArrowRight className="w-6 h-6 stroke-[2]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT EXACTLY)                */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={cloudStorageSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 9. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)      */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF CLOUD BASED STORAGE SERVICES (6 CARDS)                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Cloud Based Storage Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Selecting us as your Cloud Based Storage Services Provider guarantees you reliability, flexibility, and quantifiable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudStorageBenefits.map((benefit, i) => (
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

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#005F96] hover:bg-[#004d7a] text-white font-extrabold text-sm shadow-md transition-all font-sans"
            >
              <span>Connect Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. OUR CLOUD COMPUTING STORAGE SERVICES (EXACT 1:1 MATCH TO IMAGE 1)     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left overflow-hidden w-full">
        {/* Centered Heading & Subtitle Matching Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-[1.25] mb-4 font-sans">
            Our Cloud Computing Storage Services
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#475569] font-normal leading-[1.7] max-w-3xl mx-auto font-sans">
            We provide a complete range of cloud-based data storage and management solutions intended to drive the digital transformation path of today's businesses
          </p>
        </div>

        {/* Full-Width Carousel Track of Light Blue Cards */}
        <div className="relative overflow-hidden w-full select-none py-1">
          <div
            ref={serviceScrollRef}
            onMouseEnter={() => setIsServiceHovered(true)}
            onMouseLeave={() => setIsServiceHovered(false)}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none px-4 sm:px-8 lg:px-12 scroll-smooth py-2"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cloudStorageServicesCards.map((service, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 rounded-[14px] bg-[#E1F3FD] p-7 sm:p-8 min-h-[220px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <h3 className="text-[19px] sm:text-[21px] font-[800] text-[#0B0F19] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.72] font-normal font-sans">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-center items-center gap-5 mt-8">
          <button
            onClick={() => {
              if (serviceScrollRef.current) {
                serviceScrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
              }
            }}
            aria-label="Previous service"
            className="p-2 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2]" />
          </button>
          <button
            onClick={() => {
              if (serviceScrollRef.current) {
                serviceScrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
              }
            }}
            aria-label="Next service"
            className="p-2 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
          >
            <ArrowRight className="w-6 h-6 stroke-[2]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. AGILE ENGAGEMENT MODELS                                               */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 13. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 14. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 15. CLIENT STORY VIDEO SLIDER (OUR STORY, THEIR WORDS)                    */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 16. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 17. SUCCESS MATRIX (DELIVERY METRICS)                                     */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 18. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS (9 QUESTIONS FROM SAPPHIRE)                */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        faqs={cloudStorageFaqs}
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 23. CALL TO ACTION BANNER                                                 */}
      {/* ========================================================================= */}
      <IWatchChallengeCtaBanner
        title="Have Cloud Based Storage Services Provider Company Challenge To Address ?"
        subtitle="Talk to our certified cloud architects and engineer an enterprise storage blueprint that cuts costs and eliminates bottlenecks."
      />
    </div>
  );
};

export default CloudBasedStorageServices;
