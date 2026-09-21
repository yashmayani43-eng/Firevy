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
  TrendingDown,
  DollarSign,
  PieChart,
  Activity,
  Sliders
} from 'lucide-react';

export const CloudCostOptimizationSoftwareService = () => {
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
      title: 'AR / VR',
      desc: 'Our AR/VR development services provide realistic simulations and immersive digital experiences that increase brand engagement, boost operational effectiveness, and change customer experiences.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 16h30a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z" />
          <path d="M19 34c1.5-3 3-5 5-5s3.5 2 5 5" />
          <circle cx="15" cy="24" r="3" />
          <circle cx="33" cy="24" r="3" />
          <path d="M5 24H2M46 24h-3" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Blockchain',
      desc: 'Our blockchain development services assist businesses in creating transparent, decentralized, and tamper-resistant systems that increase transaction speed, reduce fraud, and improve data security.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="7" width="12" height="12" rx="2" />
          <rect x="29" y="7" width="12" height="12" rx="2" />
          <rect x="7" y="29" width="12" height="12" rx="2" />
          <rect x="29" y="29" width="12" height="12" rx="2" />
          <path d="M19 13h10M13 19v10M35 19v10M19 35h10" />
          <circle cx="24" cy="24" r="2.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Artificial Intelligence',
      desc: 'Our AI solutions empower companies to automate labor-intensive processes, discover strategic insights, and deliver hyper-personalized user experiences with precision and intelligence.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="14" />
          <path d="M24 10v4M24 34v4M10 24h4M34 24h4" />
          <circle cx="19" cy="21" r="2" fill="#0084D1" />
          <circle cx="29" cy="21" r="2" fill="#0084D1" />
          <path d="M19 28c1.5 2 3.5 3 5 3s3.5-1 5-3" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Cyber Security',
      desc: 'Our comprehensive cybersecurity services safeguard your enterprise data, infrastructure, and brand reputation through proactive threat identification and zero-trust engineering.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6l14 6v12c0 10-7 16-14 18-7-2-14-8-14-18V12l14-6z" />
          <path d="M24 18v10M20 23h8" />
        </svg>
      )
    }
  ];

  // 6 Core Pillars of Cloud Cost Optimization Services
  const cloudCostBenefits = [
    {
      title: 'Continuous FinOps Automation',
      desc: 'Automate idle compute discovery, schedule dev/test environment shutdowns, and eliminate abandoned storage volumes automatically without human intervention.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="28" rx="4" />
          <path d="M16 22l5 5 11-11" />
          <path d="M8 18h32" />
        </svg>
      )
    },
    {
      title: 'Intelligent Compute Rightsizing',
      desc: 'Analyze historic CPU, RAM, and IOPS utilization algorithms to downscale oversized VMs, instances, and databases with zero disruption to active production workloads.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 38V10M42 38V10M6 24h36M18 16l-6 8 6 8M30 16l6 8-6 8" />
        </svg>
      )
    },
    {
      title: 'Multi-Cloud Expense Visibility',
      desc: 'Unify AWS, Microsoft Azure, Google Cloud, and private cloud billing telemetry into a single interactive dashboard with granular department chargeback allocation.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <path d="M24 8v16l11 6" />
          <circle cx="24" cy="24" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Kubernetes Pod Bin-Packing',
      desc: 'Maximize container cluster density through automated Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA) tuning to eliminate node sprawl.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="12" height="12" rx="2" />
          <rect x="26" y="8" width="12" height="12" rx="2" />
          <rect x="10" y="24" width="12" height="12" rx="2" />
          <rect x="26" y="24" width="12" height="12" rx="2" />
        </svg>
      )
    },
    {
      title: 'Commitment & RI Optimization',
      desc: 'Strategically manage Reserved Instances (RIs), Savings Plans, and Spot instances to achieve up to 72% discounts without risky over-commitment lock-in.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <text x="24" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0084D1" stroke="none" fontFamily="sans-serif">$</text>
        </svg>
      )
    },
    {
      title: 'Zero-Impact Uptime & Security',
      desc: 'Implement non-intrusive optimization guardrails that maintain 99.99% system availability, zero-trust perimeter security, and full regulatory compliance.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6l14 6v12c0 10-7 16-14 18-7-2-14-8-14-18V12l14-6z" />
          <path d="M18 24l4 4 8-8" />
        </svg>
      )
    }
  ];

  // Carousel State for Section 12 (End-to-End Cloud Cost Optimization Services)
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const [isExpertiseHovered, setIsExpertiseHovered] = useState(false);
  const expertiseScrollRef = useRef(null);

  const cloudCostExpertiseCards = [
    {
      title: 'Automated Cloud Resource Scheduling',
      desc: 'Implement automated start/stop schedules for non-production environments to eliminate overnight and weekend compute waste.'
    },
    {
      title: 'Performance Monitoring & Optimization',
      desc: 'Leverage real-time analytics, metric anomaly alerts, and unit-economics dashboards to guarantee cost efficiency and uptime.'
    },
    {
      title: 'Third-Party API & Service Integrations',
      desc: 'Integrate AWS Cost Explorer, Azure Cost Management, Datadog, Slack, and Jira with custom FinOps pipelines.'
    },
    {
      title: 'Custom Cloud Native FinOps Software',
      desc: 'Build bespoke cost governance platforms tailored to your company’s unique multi-cloud architecture and business workflows.'
    },
    {
      title: 'Microservices Architecture Implementation',
      desc: 'Transitioning legacy systems to microservices and Kubernetes pod bin-packing for increased resource density and reduced cluster footprint.'
    },
    {
      title: 'Multi-Cloud Migration & Deployment',
      desc: 'Systematically audit, tag, and rightsize workloads across AWS, Azure, and GCP with zero downtime and vendor independence.'
    }
  ];

  useEffect(() => {
    if (isExpertiseHovered) return;
    const interval = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % cloudCostExpertiseCards.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isExpertiseHovered]);

  useEffect(() => {
    if (expertiseScrollRef.current) {
      const cardStep = 370;
      expertiseScrollRef.current.scrollTo({
        left: expertiseIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [expertiseIndex]);

  // Success Stories matching Image 1 exactly
  const cloudCostSuccessCards = [
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

  // 9 Tailored Cloud Cost Optimization FAQs
  const cloudCostFaqs = [
    {
      question: '1. What is Cloud Cost Optimization and how does it benefit our business?',
      answer: 'Cloud Cost Optimization (FinOps) is the strategic discipline of analyzing, rightsizing, and automating cloud resource usage across AWS, Azure, and GCP. It eliminates waste, reclaims idle infrastructure, and optimizes reservation pricing models to slash recurring cloud bills by up to 50% without slowing engineering velocity.'
    },
    {
      question: '2. How quickly can we expect to see tangible cost reductions?',
      answer: 'Initial quick-win optimizations—such as terminating orphaned volumes, removing unattached elastic IPs, rightsizing idle instances, and scheduling non-production environments—typically deliver measurable savings within the first 14 to 30 days of implementation.'
    },
    {
      question: '3. Will cloud cost optimization cause any downtime or latency for our users?',
      answer: 'No. Our certified cloud architects use zero-downtime rolling strategies, shadow telemetry audits, and automated rollback guardrails. All compute rightsizing, container bin-packing, and reservation reallocation is performed without any disruption to your live production users.'
    },
    {
      question: '4. Do you support multi-cloud architectures across AWS, Azure, and GCP?',
      answer: 'Yes, our custom cost optimization software connects seamlessly to AWS Cost Explorer, Azure Cost Management, Google Cloud Billing, and hybrid private cloud infrastructures through native APIs and automated telemetry collectors.'
    },
    {
      question: '5. How do you optimize Kubernetes and microservice cluster costs?',
      answer: 'We deploy automated Horizontal Pod Autoscaling (HPA) and Vertical Pod Autoscaling (VPA), configure Karpenter/Cluster Autoscaler node provisioning, eliminate CPU/RAM throttling over-allocation, and blend low-cost Spot/Preemptible instances for stateless microservices.'
    },
    {
      question: '6. How do you manage Reserved Instances (RIs) and Savings Plans?',
      answer: 'We analyze your 6-to-12 month historical workload baseline to architect a dynamic blend of 1-year and 3-year Compute Savings Plans and Convertible RIs, maximizing discount rates (up to 72%) while ensuring flexible coverage as workloads evolve.'
    },
    {
      question: '7. Why should businesses partner with Firevy.co for cloud cost optimization?',
      answer: 'With certified FinOps practitioners, 500+ successful cloud engineering engagements, and proven automated software blueprints, Firevy.co delivers measurable ROI with guaranteed cost reduction and ongoing infrastructure governance.'
    },
    {
      question: '8. What security permissions are required for your cost optimization tools?',
      answer: 'We strictly adhere to least-privilege zero-trust standards. Our audit and analysis tools require read-only metadata permissions (e.g. AWS Cost Explorer, CloudWatch metrics) and never access or inspect your underlying database records or customer data.'
    },
    {
      question: '9. Does Firevy.co offer continuous ongoing FinOps and cost governance?',
      answer: 'Yes, we provide 24/7 proactive FinOps management, including automated spend anomaly alerts, weekly executive cost dashboards, and monthly architecture rightsizing sprints to prevent cost creep permanently.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Cloud Cost Optimization Software Development Services | FinOps Solutions | Firevy.co"
        description="Slash multi-cloud spend by up to 50% with Firevy's Cloud Cost Optimization Software Development Services. FinOps automation, intelligent compute rightsizing, Kubernetes bin-packing, and multi-cloud analytics."
        keywords="Cloud Cost Optimization Software Development Services, Cloud Cost Optimization, Cloud FinOps, AWS Cost Reduction, Azure Cost Management, GCP Cost Optimization, Kubernetes FinOps, Cloud Waste Elimination, Firevy.co"
        url="https://firevy.co/services/cloud-cost-optimization-software"
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
                Cloud Cost Optimization <br />
                Software Development
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-2xl font-sans">
                In the cloud-based age today, through-the-roof infrastructure expenses can creep in unnoticed and leach away business funds. At our organization, we are experts at Cloud Cost Optimization Software Development that gives businesses control to eliminate wasteful expenditures and get complete visibility into their cloud expenditure. You may be a small startup or an enterprise, but our tailored cloud cost optimization services are designed for affordability, efficacy, and long-term value. Are you ready to get the upper hand on your cloud budget? Get your free quote today and begin saving smartly.
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
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Exact Matching 2D Flat Vector Illustration (No Box, Pure Clean Canvas) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_cost_optimization_hero.svg"
                  alt="Cloud Cost Optimization Software Development"
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-105 cursor-pointer"
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
      {/* 3. SAFEST BEST CLOUD COST OPTIMIZATION COMPANY (Image Left + Narrative)   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Cloud Cost About Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="/images/cloud_cost_optimization_about.svg"
                  alt="Automated Cloud Cost Optimization Architecture"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content (Matching First Image 1:1) */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Expert Custom Cloud Cost Optimization Software Developers
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Being a top-rated AI-driven Cloud Cost Optimization Software company, we assist startups, businesses, and entrepreneurs to realize maximum ROI on their cloud investments. With in-depth knowledge in cloud cost optimization solutions, secure systems architecture, and scalable software development, we provide customized platforms to ease cost control. Our sector-specific solutions along with our innovative methods ensure enhanced cloud governance and sustainable cost savings. From Google Cloud Cost Optimization to hybrid and multi-cloud platforms, our secure systems are designed to meet your specific requirements.
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
      {/* 6. 100% CUSTOMIZABLE SERVICES (Quote Card + Narrative)                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference Screenshot */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Cloud Cost Optimization Software Services
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
                Intelligent FinOps,<br />zero-waste multi-cloud<br />guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative (Exact 1:1 Match to Reference Layout) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Operating with peak financial efficiency in the data-driven world of today depends on resilient and hyper-optimized infrastructure. Legacy cloud architectures may, however, suffer from runaway expenses, idle VM instances, and unmonitored data transfers. As a Cloud Cost Optimization Company, our customizable solutions provide immediate savings and operational transparency.
              </p>
              <p>
                Our 100% personalized Cloud Cost Optimization Solutions are designed for your unique enterprise workloads. Whether your needs are for automated resource rightsizing, Kubernetes cluster density optimization, Savings Plan orchestration, or multi-cloud FinOps dashboards, our certified team provides architectures that strengthen margins, preserve velocity, and maximize business growth.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION (EXACT 1:1 MATCH TO FIRST IMAGE)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left border-y border-slate-100 overflow-hidden w-full">
        {/* Centered Heading Matching Reference First Image */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
            Cutting Edge Technologies Sapphire Use For Software<br className="hidden sm:inline" /> Development Services
          </h2>
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
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={cloudCostSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER (PROUD TO HAVE PICKED THESE UP ALONG THE WAY)     */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR CLOUD COST OPTIMIZATION SERVICES                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Cloud Cost Optimization Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of enterprise cloud engineering, intelligent compute rightsizing, and FinOps automation have made our certified cloud architects very talented individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudCostBenefits.map((benefit, i) => (
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
      {/* 12. END-TO-END CLOUD COST OPTIMIZATION SERVICES                           */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        {/* Header Container */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-12">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
            End-to-End Cloud Cost Optimization Services
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide all services in cloud cost governance and FinOps environments to guarantee scale, savings, and productivity through
          </p>
        </div>

        {/* Edge-to-edge Full-width Carousel */}
        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cloudCostExpertiseCards.map((card, idx) => (
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
        title="Cloud Cost Optimization Process We Follow"
        subtitle="Our systematic FinOps pipeline from initial cloud bill auditing and waste identification to automated rightsizing, continuous monitoring, and ongoing cost governance."
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
      {/* 21. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={cloudCostFaqs}
        companyName="Firevy.co"
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
          title="Have Cloud Cost Optimization Challenge To Address ?"
          subtitle="Get access to top Cloud FinOps Certified Architects & Cloud Cost Engineers at Firevy.co to reduce your monthly cloud infrastructure spend by up to 50%."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default CloudCostOptimizationSoftwareService;
