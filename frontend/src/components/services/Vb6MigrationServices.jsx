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
  Smartphone,
  Layers,
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
  Globe,
  Database,
  Terminal,
  Activity,
  GitBranch,
  FileCode2
} from 'lucide-react';

export const Vb6MigrationServices = () => {

  // 1. Expertise In Our VB6 Migration (6 cards)
  const vb6ExpertiseCards = [
    {
      title: 'Automated Code Conversion & AST Parsing',
      desc: 'We utilize advanced Abstract Syntax Tree (AST) tools and custom semantic converters to automatically translate legacy VB6 forms, classes, and code modules into clean, idiomatic C# and .NET 8.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'ActiveX & Third-Party OCX Replacement',
      desc: 'Legacy 32-bit ActiveX components and discontinued third-party OCX controls are systematically re-architected into modern WPF, Blazor, or React UI equivalents without losing UI functionality.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Database & Data Access Modernization',
      desc: 'Upgrade legacy DAO, RDO, and ADO connections to high-performance Entity Framework Core and ADO.NET, refactoring outdated Access or SQL schemas to cloud-ready SQL Server and PostgreSQL.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    },
    {
      title: 'Web & Cloud Architecture Migration',
      desc: 'Transform desktop-bound VB6 client-server apps into scalable, cloud-native web portals hosted on Microsoft Azure or AWS with secure microservices, containerization, and RESTful APIs.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },
    {
      title: 'Automated Regression & Equivalence Testing',
      desc: 'Our QA specialists conduct automated side-by-side behavioral tests to ensure the converted .NET application reproduces 100% of historical calculation logic and validation rules accurately.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    },
    {
      title: 'Zero-Downtime Phased Cutover',
      desc: 'We structure the migration in modular phases with backward-compatible interop layers, enabling seamless parallel running, database synchronization, and cutover with zero disruption.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      )
    }
  ];

  // 4. Benefits of VB6 Migration Services (6 cards)
  const vb6BenefitsData = [
    {
      title: 'Eliminate Security Vulnerabilities',
      desc: 'Visual Basic 6 runtime has been officially unsupported by Microsoft for years. Migrating to modern .NET eliminates unpatched security holes and complies with enterprise IT compliance mandates.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Seamless Windows 11 & Cloud Support',
      desc: 'Run natively on 64-bit modern Windows operating systems, virtualized environments, and cloud providers without compatibility workarounds, crashes, or legacy DLL hell.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: '5x to 10x Performance Acceleration',
      desc: 'Leverage modern compiled C# execution, 64-bit multi-threading, asynchronous I/O, and advanced memory management to process heavy enterprise workloads dramatically faster.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: 'Preserve Hard-Earned Business Logic',
      desc: 'Decades of complex business rules, calculation engines, and domain workflows baked into your VB6 application are meticulously preserved, verified, and converted into modern maintainable code.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Access to Vast Developer Talent Pool',
      desc: 'Overcome the critical shortage of retiring VB6 engineers. Moving to modern .NET / C# empowers your organization to hire, onboard, and collaborate with world-class software engineers effortlessly.',
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
      title: 'Future-Proof Mobile & API Integrations',
      desc: 'Modernized .NET backends allow you to easily build RESTful/GraphQL APIs, publish native iOS/Android mobile apps, and integrate with enterprise SaaS systems like Salesforce and ERPs.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  // 5. FAQ List tailored specifically for VB6 Migration Services
  const vb6FaqList = [
    {
      id: 1,
      question: 'Why should we migrate our legacy VB6 application instead of rewriting it completely from scratch?',
      answer: 'Rewriting from scratch often takes years, incurs massive budgets, and carries a high risk of losing hidden business rules that were fine-tuned over decades. Our migration approach combines automated conversion tools with expert refactoring, delivering a modern .NET system in a fraction of the time and cost while guaranteeing 100% logic retention.'
    },
    {
      id: 2,
      question: 'How do you handle obsolete ActiveX controls and third-party OCX libraries?',
      answer: 'We conduct a complete dependency inventory during our initial assessment. For each ActiveX/OCX control, we identify modern native .NET counterparts, build custom open-source wrappers, or re-engineer the UI with modern WPF, Blazor, or React controls that mimic the exact functional behavior.'
    },
    {
      id: 3,
      question: 'Can we migrate our VB6 desktop software directly to a cloud-native web application?',
      answer: 'Yes. Depending on your business goals, we can migrate your VB6 app directly to modern Windows desktop (.NET 8 WPF/WinForms) or re-architect the presentation layer into a modern web portal (React, Angular, or Blazor) supported by a clean RESTful .NET Core API backend.'
    },
    {
      id: 4,
      question: 'How do you guarantee that business logic won’t be lost or altered during migration?',
      answer: 'We establish extensive automated regression suites that compare the outputs of your existing VB6 system with the newly migrated .NET code using identical datasets. Every calculation, edge case, and validation constraint is proven identical before production cutover.'
    },
    {
      id: 5,
      question: 'What is the typical timeframe and engagement model for a VB6 migration project?',
      answer: 'Timelines vary from 6 to 16 weeks based on lines of code, database complexity, and external dependencies. We start with an in-depth Code & Architecture Assessment, deliver a working Proof of Concept (POC), and proceed with phased agile sprints with full visibility.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="VB6 Migration Services | Visual Basic 6 to .NET Migration | Firevy.Co"
        description="Modernize legacy Visual Basic 6 applications to high-performance, secure .NET 8, C#, web, and cloud architectures. Automated code refactoring, database modernization, and zero downtime."
        keywords="VB6 migration services, visual basic 6 migration, VB6 to .NET, VB6 to C# migration, legacy software modernization, VB6 migration company, migrate VB6 to web"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]"
              >
                VB6 Migration Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our enterprise VB6 migration services are engineered to modernize legacy Visual Basic 6 systems into high-performance, cloud-native .NET applications with automated refactoring, zero data loss, and zero disruption to your daily operations.
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

            {/* Right Hero Meeting Vector / 3D Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/vb6_migration/vb6_hero.svg"
                  alt="VB6 Migration Services Team"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg max-h-[380px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO) */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 2. LEADING VB6 MIGRATION SERVICES COMPANY */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic: Migration Architecture & Metrics */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/vb6_migration/vb6_section_1.svg"
                  alt="Leading VB6 Migration Services Company"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg max-h-[380px]"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Leading VB6 Migration <br />
                Services Company
              </h2>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our legacy software migration and modernization experts possess deep specialized knowledge of Visual Basic 6.0 and the modern Microsoft .NET ecosystem to deliver seamless, automated transitions that eliminate technical debt. As a trusted <Link to="/services/software-modernization-services" className="text-[#005F96] hover:underline font-semibold">software modernization services company</Link>, we ensure that every critical business rule is faithfully preserved. To execute VB6 Migration Services with maximum ROI, we audit your code modules, resolve ActiveX dependencies, and deliver clean, maintainable C# applications.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT BEST VB6 MIGRATION CONSULTANTS FOR ENTERPRISES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Brief About Best VB6 <br />
                Migration Consultants For Enterprises
              </h2>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our VB6 migration architects conduct detailed parameter audits of your forms, OCX dependencies, and backend databases to engineer clean, maintainable software that your engineers and end-users can build on for years to come.
              </p>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                As a specialized Legacy Migration and Consulting Agency, we engineer seamless database replatforming, automated test verifications, and modern cloud deployment architectures designed for enterprise longevity.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/vb6_migration/vb6_about.svg"
                  alt="Brief About Best VB6 Migration Consultants For Enterprises"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg max-h-[380px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% RELIABLE VB6 MIGRATION EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Reliable VB6 Migration Experts
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
                Assess, Modernize, And Scale Legacy Enterprise Software
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Running mission-critical operations on obsolete Visual Basic 6 runtimes exposes your business to unpatched vulnerabilities, system crashes on Windows 11, and severe developer shortages. With our specialized <strong className="text-[#005F96] font-semibold">VB6 migration services</strong>, your legacy applications are upgraded to modern, supported .NET ecosystems while retaining 100% of your business rules and workflows.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                From initial AST automated parsing and ActiveX control replacement to database replatforming and cloud deployment, our dedicated migration engineers provide end-to-end modernization. Gain full compatibility with modern operating systems, high-speed 64-bit performance, and seamless future scalability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES + 4 STAT BOXES */}
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
            {/* Card 1: Employee Health Monitoring App */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden shadow-xs hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/almraai.svg"
                  alt="Employee Health Monitoring App"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Employee Health Monitoring App
              </h3>
            </div>

            {/* Card 2: Water Distribution System */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden shadow-xs hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/water_distribution_system.svg"
                  alt="Water Distribution System"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Water Distribution System
              </h3>
            </div>

            {/* Card 3: Vehicle Data Logging Software Services */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden shadow-xs hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/vehicle_data_logging_software_services.svg"
                  alt="Vehicle Data Logging Software Services"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Vehicle Data Logging Software Services
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

          {/* 4 Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1 */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                250+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4 */}
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
      {/* 8. EXPERTISE IN OUR VB6 MIGRATION */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our VB6 Migration
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading Legacy Migration and Software Modernization Company, we have decades of hands-on experience modernizing legacy systems. Our expertise includes:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {vb6ExpertiseCards.map((card, idx) => (
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
      {/* 13. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 14. BENEFITS OF VB6 MIGRATION SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of VB6 Migration Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Visual Basic 6 to .NET Migration Services empower enterprises to eliminate technical debt, enhance operational resilience, and accelerate business agility:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {vb6BenefitsData.map((card, idx) => (
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
      {/* 15. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 16. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 17. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 18. OUR STORY, THEIR WORDS */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 19. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 20. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 21. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="VB6 migration" />

      {/* ========================================================================= */}
      {/* 22. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 23. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 24. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={vb6FaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to your technical requirements and architect future-proof modernization solutions. Feel free to contact our VB6 migration specialists for any custom inquiry."
      />

      {/* ========================================================================= */}
      {/* 25. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 26. WHAT SETS US APART AS VB6 MIGRATION? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In VB6 Migration?"
        subtitle="Being unique is our quality! Firevy Solutions delivers tailored, high-performance software modernization platforms with automated conversion pipelines, 100% logic verification, and frictionless cloud deployment. We are a renowned custom software organization serving clients with end-to-end support."
      />

      {/* ========================================================================= */}
      {/* 27. GET ACCESS TO TOP VB6 MIGRATION DEVELOPERS (CTA BANNER) */}
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
            Get access to top VB6 to .NET migration developers and consultants to modernize legacy systems and accelerate enterprise digital transformation.
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
      {/* 28. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default Vb6MigrationServices;
