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
  TrendingUp,
  LineChart,
  PieChart,
  Activity,
  Sliders
} from 'lucide-react';

export const CloudAnalyticsSoftwareDevelopmentService = () => {
  // Ref for Cutting-Edge Technologies Horizontal Slider
  const techScrollRef = useRef(null);

  // Cutting-Edge Technologies matching reference (Cloud Computing, AR/VR, Computer Vision, AI/ML, IoT, Data Science)
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

  // 6 Core Benefits of Cloud Analytics Software Development
  const cloudAnalyticsBenefits = [
    {
      title: 'Real-Time Stream Processing',
      desc: 'Ingest and analyze continuous telemetry, clickstreams, and IoT feeds with sub-second query latency for immediate decision velocity.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Activity className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Predictive Business Intelligence',
      desc: 'Embed machine learning forecasting algorithms into executive reporting tools to anticipate market trends, demand spikes, and user churn.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <TrendingUp className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Unified Multi-Cloud Observability',
      desc: 'Break down departmental data silos across AWS, Azure, and Google Cloud with centralized data lakes, catalogs, and unified governance.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Layers className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Enterprise Data Governance & Security',
      desc: 'Implement zero-trust role-based access control (RBAC), column-level masking, and automated compliance auditing for HIPAA, GDPR, and SOC 2.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <ShieldCheck className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Elastic Storage & Compute Scale',
      desc: 'Separate compute from storage effortlessly using serverless query engines that scale dynamically with your data workloads.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Cloud className="w-6 h-6" />
        </div>
      )
    },
    {
      title: 'Accelerated Decision Velocity',
      desc: 'Equip leadership and engineering teams with interactive self-service BI dashboards that transform raw logs into actionable bottom-line value.',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
          <Zap className="w-6 h-6" />
        </div>
      )
    }
  ];

  // Carousel State for Section 12 (End-to-End Cloud Analytics Services)
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const [isExpertiseHovered, setIsExpertiseHovered] = useState(false);
  const expertiseScrollRef = useRef(null);

  const cloudAnalyticsExpertiseCards = [
    {
      title: 'Data Lakehouse & Warehouse Engineering',
      desc: 'Architect high-throughput modern lakehouse ecosystems using Snowflake, Databricks, BigQuery, and AWS Redshift tailored to petabyte-scale queries.'
    },
    {
      title: 'Real-Time Telemetry & Event Streaming',
      desc: 'Deploy resilient Apache Kafka, AWS Kinesis, and Apache Flink pipelines to ingest, validate, and enrich operational events in milliseconds.'
    },
    {
      title: 'AI/ML Predictive Analytics & Modeling',
      desc: 'Develop custom statistical and deep learning models for predictive maintenance, customer lifetime value prediction, and automated anomaly detection.'
    },
    {
      title: 'Interactive BI Dashboards & Visualizations',
      desc: 'Engineer customized executive analytics cockpits and embedded BI dashboards utilizing PowerBI, Tableau, Apache Superset, and Looker.'
    },
    {
      title: 'Cloud Data Migration & ETL/ELT Pipelines',
      desc: 'Automate schema migration, data cleansing, and resilient dbt transformations with zero data loss from legacy on-prem systems to modern clouds.'
    },
    {
      title: 'Data Quality & Governance Automation',
      desc: 'Implement automated data drift alerts, lineage tracking, metadata cataloging, and policy enforcement to maintain enterprise-grade reliability.'
    }
  ];

  useEffect(() => {
    if (isExpertiseHovered) return;
    const interval = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % cloudAnalyticsExpertiseCards.length);
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

  // Success Stories
  const cloudAnalyticsSuccessCards = [
    {
      id: 1,
      title: 'Enterprise Big Data Analytics Platform',
      image: '/images/success_stories/data_analytics.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Real-Time Document Quality Analyzer',
      image: '/images/success_stories/redetect.svg'
    },
    {
      id: 3,
      title: 'High-Volume File Sharing & Telemetry App',
      image: '/images/success_stories/file_sharing_application.svg'
    }
  ];

  // 9 Tailored Cloud Analytics Software Development FAQs
  const cloudAnalyticsFaqs = [
    {
      question: '1. What is Cloud Analytics Software Development and why does our business need it?',
      answer: 'Cloud Analytics Software Development is the engineering of scalable, cloud-native data pipelines, storage lakehouses, and real-time visualization systems. It replaces slow, siloed legacy reporting with real-time streaming, predictive AI modeling, and self-service dashboards, helping organizations unlock rapid data-driven decision-making.'
    },
    {
      question: '2. Which cloud data warehouse and analytics platforms do you support?',
      answer: 'We specialize in all modern enterprise data platforms including Snowflake, Databricks, Google Cloud BigQuery, AWS Redshift, Azure Synapse Analytics, Apache Kafka, and ClickHouse, tailored to your workload economics and latency requirements.'
    },
    {
      question: '3. Can you integrate real-time streaming analytics with existing legacy databases?',
      answer: 'Yes. We utilize change data capture (CDC) technologies (such as Debezium and Apache Kafka) to continuously stream updates from legacy SQL Server, Oracle, and PostgreSQL databases into cloud lakehouses without disrupting live production operations.'
    },
    {
      question: '4. How do you ensure enterprise data governance and regulatory compliance?',
      answer: 'We architect granular zero-trust access controls, column- and row-level encryption, dynamic data masking, and automated audit logging to ensure full compliance with GDPR, HIPAA, CCPA, and SOC 2 Type II mandates.'
    },
    {
      question: '5. How quickly can we deploy custom analytics dashboards for executive teams?',
      answer: 'Our agile sprint framework typically delivers functional proof-of-concept pipelines and initial executive dashboards within 3 to 4 weeks, followed by continuous phased iterations for deep predictive intelligence.'
    },
    {
      question: '6. Do you build custom embedded analytics into SaaS products?',
      answer: 'Yes. We design multi-tenant embedded analytics architectures that allow SaaS companies to offer high-performance, branded reporting and interactive telemetry dashboards directly to their end customers.'
    },
    {
      question: '7. How do you optimize query performance and reduce cloud analytics computing bills?',
      answer: 'We optimize partition strategies, leverage materialized views, implement automated cluster auto-suspend, and tune ETL workflows to maximize cache hits, consistently decreasing cloud analytics query costs by 30% to 50%.'
    },
    {
      question: '8. What machine learning and AI capabilities can be integrated into the analytics pipeline?',
      answer: 'We integrate automated anomaly detection, demand and revenue forecasting, natural language querying (Text-to-SQL AI agents), customer lifetime value scoring, and automated root-cause analysis into your data streams.'
    },
    {
      question: '9. Does Firevy.co provide ongoing support and pipeline monitoring after deployment?',
      answer: 'Yes, we provide 24/7 proactive data operations (DataOps) support, including pipeline health monitoring, schema drift mitigation, performance audits, and SLA-backed maintenance to guarantee zero pipeline downtime.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#005F96] selection:text-white">
      {/* SEO Metadata */}
      <SEO
        title="Cloud Analytics Software Development Services | Big Data Solutions | Firevy.co"
        description="Transform big data into actionable business value with Firevy's Cloud Analytics Software Development Services. Real-time stream processing, lakehouse engineering, AI/ML predictive analytics, and executive BI dashboards."
        keywords="Cloud Analytics Software Development Services, Cloud Analytics Development, Big Data Analytics, Snowflake Solutions, Databricks, Real-Time Stream Analytics, Cloud Business Intelligence, Predictive Analytics, Firevy.co"
        url="https://firevy.co/services/cloud-analytics-software-development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT 1:1 MATCH TO REFERENCE UI)                         */}
      {/* ========================================================================= */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Title + Paragraph + 4 Stats + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.18] font-sans">
                Cloud Analytics <br />
                Software Development
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-2xl font-sans">
                In today's data-driven digital ecosystem, raw information is only as valuable as the velocity at which you can extract actionable business insight. At our organization, we specialize in Cloud Analytics Software Development that empowers modern enterprises with real-time stream ingestion, predictive machine learning, and centralized business intelligence dashboards. Whether you are scaling an agile startup or optimizing a multinational enterprise, our custom cloud analytics services are engineered for low latency, unmatched scalability, and quantifiable ROI. Ready to turn your cloud data into an unfair competitive advantage? Get your free quote today and start building intelligent analytics.
              </p>

              {/* 4 Stats (Exact 1:1 match) */}
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

              {/* Action Button */}
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

            {/* Right Column: 2D Flat Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
                <img
                  src="/images/cloud_analytics_hero.svg"
                  alt="Cloud Analytics Software Development"
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
      <BrandLogoMarquee companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 3. LEADING CLOUD ANALYTICS SOFTWARE DEVELOPMENT COMPANY                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Cloud Analytics About Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="/images/cloud_analytics_about.svg"
                  alt="Cloud Analytics Architecture and Pipelines"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[34px] font-[900] text-[#0B0F19] tracking-tight leading-[1.22] font-sans">
                Leading Cloud Analytics Software Development Services Provider For Businesses Worldwide
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal font-sans">
                As an established Cloud Analytics Software Development and Big Data engineering partner, we have years of hands-on experience designing robust, scalable, and secure data infrastructures for global enterprises. Our cloud data services help organizations harness the true value of their information assets while ensuring stringent compliance, sub-second query performance, and continuous data availability.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal font-sans">
                From real-time event streaming architectures to petabyte-scale lakehouses, we combine cutting-edge analytical frameworks with battle-tested data engineering methodologies. Our certified cloud data architects collaborate with your leadership to construct modern digital intelligence ecosystems that directly drive business outcomes and revenue growth.
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
      {/* 5. TRANSFORMING DECISION-MAKING WITH CLOUD ANALYTICS                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-[1.2] mb-10 sm:mb-14 font-sans">
            Transforming Decision-Making with Cloud Analytics <br className="hidden sm:inline" />
            Software Development Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Soft Blue Quote Card with Topographic Lines */}
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

              {/* Speech bubble pointer arrow pointing right */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Smart Cloud <br />
                Analytics for <br />
                Real-Time <br />
                Intelligence
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left font-sans">
              <p>
                Our Cloud Analytics Software Development services are designed to give companies complete mastery over their distributed data assets. We help organizations break free from slow, batch-processed silos and adopt modern streaming pipelines, interactive business intelligence, and AI-powered predictive telemetry that deliver instant visibility into key performance indicators.
              </p>
              <p>
                With cross-domain expertise spanning healthcare, fintech, e-commerce, and logistics, our team constructs customized analytical architectures tailored to your corporate tech stack. Whether integrating Snowflake, Google BigQuery, or custom Apache Kafka pipelines, we deliver end-to-end reliability, rigorous governance, and high-concurrency reporting that scales with your growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING-EDGE TECHNOLOGIES WE USE                                       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden w-full">
        {/* Centered Heading */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-[1.25] font-sans">
            Cutting Edge Technologies We Use For Software <br className="hidden sm:inline" />
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

        {/* Carousel Navigation Arrows */}
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
      {/* 8. SUCCESS STORIES                                                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={cloudAnalyticsSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable analytical results for our clients."
      />

      {/* ========================================================================= */}
      {/* 9. PROUD AWARDS BANNER                                                    */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF CLOUD ANALYTICS SOFTWARE DEVELOPMENT                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Cloud Analytics Software Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Selecting Firevy.co as your Cloud Analytics engineering partner guarantees speed, elastic scalability, and quantifiable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudAnalyticsBenefits.map((benefit, i) => (
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
      {/* 11. END-TO-END CLOUD ANALYTICS SERVICES CAROUSEL                          */}
      {/* ========================================================================= */}
      <section
        className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
        onMouseEnter={() => setIsExpertiseHovered(true)}
        onMouseLeave={() => setIsExpertiseHovered(false)}
      >
        {/* Header Container */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-12">
          <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
            End-to-End Cloud Analytics Services
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide all services in cloud analytics and modern data architectures to guarantee scale, accuracy, and operational productivity.
          </p>
        </div>

        {/* Edge-to-edge Full-width Carousel */}
        <div className="w-full relative">
          <div
            ref={expertiseScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cloudAnalyticsExpertiseCards.map((card, idx) => (
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

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-center items-center gap-5 mt-8">
          <button
            onClick={() => {
              if (expertiseScrollRef.current) {
                expertiseScrollRef.current.scrollBy({ left: -370, behavior: 'smooth' });
              }
            }}
            aria-label="Previous services"
            className="p-2 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2]" />
          </button>
          <button
            onClick={() => {
              if (expertiseScrollRef.current) {
                expertiseScrollRef.current.scrollBy({ left: 370, behavior: 'smooth' });
              }
            }}
            aria-label="Next services"
            className="p-2 flex items-center justify-center text-slate-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
          >
            <ArrowRight className="w-6 h-6 stroke-[2]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 13. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 14. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Cloud Analytics Software Development Process We Follow"
        subtitle="Our systematic data engineering lifecycle from initial source discovery and lakehouse architecture to streaming pipeline development, dashboard visualization, and 24/7 automated monitoring."
      />

      {/* ========================================================================= */}
      {/* 15. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 16. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 17. SUCCESS MATRIX                                                        */}
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
      {/* 20. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={cloudAnalyticsFaqs}
        companyName="Firevy.co"
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
      {/* 23. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Cloud Analytics Challenge To Address ?"
          subtitle="Get access to top Cloud Big Data Architects & Analytics Engineers at Firevy.co to turn your enterprise data into predictive business growth."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default CloudAnalyticsSoftwareDevelopmentService;
