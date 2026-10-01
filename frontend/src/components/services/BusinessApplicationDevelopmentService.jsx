import React from 'react';
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
  Building2,
  Clock,
  Briefcase
} from 'lucide-react';

export const BusinessApplicationDevelopmentService = () => {

  // 1. Expertise In Our Business Application Development (6 cards matching AI Consulting style)
  const businessAppExpertiseCards = [
    {
      title: 'ERP Development',
      desc: 'We provide complete ERP services essential for effectively managing your expanding business, assuring business development, enhanced financial performance, and optimized operations across enterprise departments.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <img src="/images/business_application_development_services/icons/business_application_ic_1.svg" alt="ERP Development" className="w-6 h-6 object-contain" />
      )
    },
    {
      title: 'CRM Development',
      desc: 'We provide a comprehensive suite of customer relationship management (CRM) solutions to assist sales teams in streamlining, automating, and synchronizing customer interactions and field operations.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <img src="/images/business_application_development_services/icons/business_application_ic_2.svg" alt="CRM Development" className="w-6 h-6 object-contain" />
      )
    },
    {
      title: 'E-Commerce Development',
      desc: 'Enhance your online presence and commerce operations with our expert suite of e-commerce software services, building multi-device responsive platforms and frictionless checkouts.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <img src="/images/business_application_development_services/icons/business_application_ic_3.svg" alt="E-Commerce Development" className="w-6 h-6 object-contain" />
      )
    },
    {
      title: 'Service Management',
      desc: 'Standardize your information technology workflows and realize the full potential of enterprise ServiceNow investments with end-to-end ITSM assessment, implementation, and support.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <img src="/images/business_application_development_services/icons/business_application_ic_4.svg" alt="Service Management" className="w-6 h-6 object-contain" />
      )
    },
    {
      title: 'Finance Services',
      desc: 'Build scalable Dynamics 365 Finance solutions adaptable enough to meet specific business regulations, accounting standards, and financial reporting across enterprise domains.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <img src="/images/business_application_development_services/icons/business_application_ic_5.svg" alt="Finance Services" className="w-6 h-6 object-contain" />
      )
    },
    {
      title: 'Migration/ Upgrade/ Modernization',
      desc: 'Guarantee smooth, zero-downtime transfers to modern cloud ERP and SAP systems with strategic application modernization roadmaps tailored to your corporate infrastructure.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <img src="/images/business_application_development_services/icons/business_application_ic_6.svg" alt="Migration Upgrade Modernization" className="w-6 h-6 object-contain" />
      )
    }
  ];

  // 2. Benefits of Business Application Development (6 cards matching AI Consulting style)
  const businessAppBenefitsData = [
    {
      title: 'Streamlined Operational Efficiency',
      desc: 'Automate labor-intensive workflows and eliminate manual spreadsheets, drastically reducing operational overhead and accelerating turnaround times across departments.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Centralized Business Intelligence',
      desc: 'Unify isolated databases into unified analytics dashboards, providing executive leadership with actionable real-time KPIs and forecasting clarity.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Precision Alignment With Workflows',
      desc: 'Unlike generic off-the-shelf software, custom business apps adapt 100% to your unique internal hierarchies, business rules, and customer-facing touchpoints.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Scalable Cloud Architecture',
      desc: 'Engineered on resilient cloud microservices that scale effortlessly with transaction surges, geographic expansions, and high user volumes without performance dips.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: 'Enterprise Security & Compliance',
      desc: 'Protect mission-critical data with multi-factor authentication, granular role-based permissions (RBAC), end-to-end data encryption, and SOC-2/HIPAA compliance.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Maximized ROI & Lower Total Cost of Ownership',
      desc: 'Eliminate recurrent per-seat subscription licensing fees by owning your proprietary business code and software assets designed for decades of scalability.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4.5 16.5-1.5 1.5 3 3 1.5-1.5" />
          <path d="m15 4.5 4.5 4.5" />
          <path d="M9 12l2.5 2.5" />
          <path d="M14.5 3a5.5 5.5 0 0 1 6.5 6.5l-9.5 9.5a2.5 2.5 0 0 1-3.5 0l-3-3a2.5 2.5 0 0 1 0-3.5Z" />
        </svg>
      )
    }
  ];

  // 3. FAQ List tailored specifically for Business Application Development
  const businessAppFaqList = [
    {
      id: 1,
      question: 'How do you assess business requirements before starting application development?',
      answer: 'We conduct collaborative discovery workshops, stakeholder interviews, user journey mapping, and technical architecture audits to formulate an unambiguous product specification and sprint delivery roadmap.'
    },
    {
      id: 2,
      question: 'Can you integrate custom business apps with our existing legacy ERP or CRM?',
      answer: 'Yes. We specialize in building secure RESTful APIs, GraphQL endpoints, and event-driven message brokers (Kafka/RabbitMQ) that enable seamless real-time bi-directional synchronization with SAP, Salesforce, Oracle, and legacy databases.'
    },
    {
      id: 3,
      question: 'How do you ensure data security and regulatory compliance?',
      answer: 'We enforce zero-trust identity architectures, role-based access control (RBAC), TLS 1.3 data encryption at rest and in transit, and adhere to industry standards including SOC-2, ISO 27001, GDPR, and HIPAA.'
    },
    {
      id: 4,
      question: 'What is the typical development timeline for an enterprise business application MVP?',
      answer: 'A production-grade MVP typically launches within 8 to 12 weeks through agile two-week sprint increments, providing functional core workflows and tangible ROI validation before scaling secondary feature sets.'
    },
    {
      id: 5,
      question: 'Do you provide continuous SLA support and maintenance post-launch?',
      answer: 'Yes. We provide 24/7/365 infrastructure monitoring, guaranteed incident resolution SLAs, continuous performance profiling, database optimization, and feature enhancements to support your evolving business.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Business Application Development Services | Custom Enterprise Apps | Firevy.Co"
        description="Accelerate enterprise efficiency with Sapphire's custom Business Application Development services. Scalable ERPs, CRMs, workflow automation, cloud modernization, and cross-platform apps."
        keywords="business application development, custom business software, enterprise application development, business app developers, workflow automation, erp development, crm solutions, sapphire solutions"
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
                Business Application Development in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our business application development services empower startups, mid-market leaders, and global enterprises to streamline core operations, eliminate manual bottlenecks, and accelerate digital growth with scalable custom software solutions.
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
                  src="/images/business_application_development_services/images/business_application_banner.svg"
                  alt="Business Application Development Team"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO)                                           */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />


      {/* ========================================================================= */}
      {/* 2. BRIEF ABOUT BUSINESS APPLICATION DEVELOPMENT SERVICES                  */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Brief About Business <br />
                Application Development <br />
                Services
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Scalable, flexible, and dependable business applications. Our team of experts has a great deal of professional experience, several splendidly completed projects for a variety of companies, a variety of time-tested development strategies that have already proven their efficacy for a variety of objectives, and a desire to create masterpieces that deserve a prominent place among the best software applications. All our goods comply Cloud-based business application development services with the most adaptable and dependable business sector trends.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our business application development company offers specialized services geared toward the rapid and substantial development, installation, and total integration of corporate applications in various industries. Modern mobile applications, technical business applications, and project management are areas in which our team specializes.
              </p>
            </div>

            {/* Right Graphic: Exact SVG from Screenshot 1 */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/business_application_development_services/images/business_application_about.svg"
                  alt="Brief About Business Application Development Services"
                  className="w-full h-auto object-contain max-h-[440px]"
                />
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
      {/* 5. GET 100% CUSTOMIZABLE BUSINESS APPLICATION EXPERTS                     */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Business Application Experts
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
                Modernize, Automate, And Scale With Custom Business Applications
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Generic off-the-shelf software rarely fits complex enterprise processes, forcing workarounds and creating operational silos. When assessing <strong className="text-[#005F96] font-semibold">custom business software development</strong> options, partnering with a seasoned Business Application Development Company ensures that your systems reflect your exact operational workflows. Our advisory and engineering squads guide clients through discovery, architecture prototyping, and technology selection to mitigate long-term maintenance costs.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Whether you need to modernize a legacy desktop application into a responsive cloud-native portal, build an enterprise-wide ERP system, or orchestrate microservices across AWS, Azure, or GCP, Sapphire's Business Application Development Services deliver high reliability, seamless user experiences, and sustainable business ROI.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Sapphire" />

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
              Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
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
                  src="/images/adani.webp"
                  alt="Enterprise Resource Planning (ERP) Platform"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Enterprise Resource Planning (ERP) Platform
              </h3>
            </div>

            {/* Card 2 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/federal_forecasting_app.jpg"
                  alt="Omnichannel Supply Chain & Inventory Portal"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Omnichannel Supply Chain & Inventory Portal
              </h3>
            </div>

            {/* Card 3 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/stress_management_app.jpg"
                  alt="Real-Time Field Operations & Workflow Engine"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Real-Time Field Operations & Workflow Engine
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
                250+
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
      {/* 8. EXPERTISE IN OUR BUSINESS APPLICATION DEVELOPMENT                      */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our Business Application Development
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading Business Application Development Company, we have years of experience in this field. Our expertise include:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {businessAppExpertiseCards.map((card, idx) => (
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
      {/* 9. PROUD TO HAVE PICKED THESE UP ALONG THE WAY                            */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF BUSINESS APPLICATION DEVELOPMENT                          */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Business Application Development
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Business Application Development Services help organizations optimize internal workflows, enhance cross-department collaboration, and achieve scalable market expansion:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {businessAppBenefitsData.map((card, idx) => (
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
      <SapphireTechStackGrid domainName="Business Applications" />

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
        faqList={businessAppFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide enterprise application architectures that empower scalable growth. Feel free to contact us in case of any query not mentioned below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS BUSINESS APPLICATION DEVELOPMENT COMPANY        */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Business Application Company?"
        subtitle="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are a renowned software engineering and business application organization serving customers with end-to-end support. Our architecture blueprints, process discovery, and resilient engineering stand us one level up the competitors."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP BUSINESS APPLICATION DEVELOPERS (CTA BANNER)        */}
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
            Get access to top business application developers to engineer high-impact enterprise software solutions.
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

export default BusinessApplicationDevelopmentService;
