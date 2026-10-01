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
  Radio,
  Wifi,
  KeyRound
} from 'lucide-react';

export const EnterpriseMobilityServices = () => {

  // 1. Expertise In Our Enterprise Mobility Services (6 cards)
  const mobilityExpertiseCards = [
    {
      title: 'Enterprise Mobility Architecture & Strategy',
      desc: 'We architect comprehensive enterprise mobility roadmaps tailored to your organizational structure, remote workforce demands, and cross-departmental operations.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-6 h-6 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      )
    },
    {
      title: 'Mobile Device Management (MDM) & EMM',
      desc: 'Centralized policy enforcement, remote device provisioning, Knox/Apple DEP containerization, remote wipe, and geo-fencing for both corporate and BYOD fleets.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform & Native Mobile Apps',
      desc: 'Engineered high-performance iOS and Android enterprise mobile apps using Swift, Kotlin, React Native, and Flutter with sleek interfaces and native hardware integration.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-6 h-6 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: 'Field Force Automation & Offline Sync',
      desc: 'Equip on-site technicians, logistics drivers, and field inspectors with fault-tolerant mobile apps that function flawlessly offline and auto-sync when connectivity resumes.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-6 h-6 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      )
    },
    {
      title: 'Zero-Trust Security & Biometrics',
      desc: 'Enterprise-grade encryption at rest and in transit, per-app micro-VPNs, biometric authentication (FaceID, fingerprint), and single sign-on (SSO) with Azure AD/Okta.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-6 h-6 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'ERP, CRM & Cloud Backend Integration',
      desc: 'Seamlessly link mobile interfaces with mission-critical enterprise systems including SAP, Oracle, Microsoft Dynamics 365, Salesforce, and bespoke cloud databases.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    }
  ];

  // 4. Benefits of Enterprise Mobility Services (6 cards)
  const mobilityBenefitsData = [
    {
      title: '40%+ Boost in Workforce Productivity',
      desc: 'Enable field agents, executives, and operational teams to access critical documents, approve workflows, and close business transactions in real time from any location.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: 'Military-Grade Data Protection',
      desc: 'Protect sensitive corporate intelligence, customer records, and internal IP with hardware-backed encryption, encrypted data sandboxing, and compliance with HIPAA and GDPR.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Real-Time Operational Telemetry',
      desc: 'Gain total situational awareness with live GPS fleet tracking, equipment diagnostics, inventory replenishment alerts, and executive performance KPI dashboards.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: 'Frictionless BYOD Management',
      desc: 'Separate personal device data from corporate apps with zero invasion of employee privacy, offering seamless self-enrollment and automatic security compliance checks.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Flawless Offline Resilience',
      desc: 'Critical business processes never stop even in remote zones without cell towers. Mobile clients store encrypted transactions locally and resolve sync conflicts automatically.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      )
    },
    {
      title: 'Accelerated Time-To-Market',
      desc: 'Pre-built enterprise micro-frameworks and modern CI/CD mobile pipelines ensure rapid prototyping, iterative enhancements, and effortless deployment to internal app portals.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    }
  ];

  // 5. FAQ List tailored specifically for Enterprise Mobility Services
  const mobilityFaqList = [
    {
      id: 1,
      question: 'What are enterprise mobility services and how do they benefit large organizations?',
      answer: 'Enterprise Mobility Services encompass the strategic design, development, security, and governance of mobile applications, devices, and cloud backends. They enable modern distributed workforces to access corporate assets securely from anywhere, streamlining operations, speeding up customer responses, and boosting productivity.'
    },
    {
      id: 2,
      question: 'How do you secure corporate enterprise data on personal employee devices (BYOD)?',
      answer: 'We utilize advanced containerization and Enterprise Mobility Management (EMM) solutions such as Microsoft Intune, VMware Workspace ONE, and Samsung Knox. Corporate data resides in an encrypted sandbox isolated from personal apps, with enforced copy-paste restrictions, remote wipe capabilities, and zero invasion into personal privacy.'
    },
    {
      id: 3,
      question: 'Can your enterprise mobile applications function in offline mode without internet?',
      answer: 'Yes. We engineer offline-first architectures utilizing local encrypted SQLite or Realm databases. Field personnel can execute inspection checklists, inventory counts, or client sign-offs without interruption. Once an internet connection is established, changes sync bi-directionally using smart conflict-resolution algorithms.'
    },
    {
      id: 4,
      question: 'How do mobile enterprise solutions connect with our existing ERP and CRM systems?',
      answer: 'We build high-throughput, secure REST and GraphQL API gateways that integrate seamlessly with your core systems (such as SAP, Oracle, NetSuite, Salesforce, and Microsoft Dynamics). Data flows bi-directionally with strict role-based access control and token-based authentication.'
    },
    {
      id: 5,
      question: 'What are the typical deployment models and timelines for enterprise mobility projects?',
      answer: 'Engagement timelines typically range from 8 to 16 weeks based on modular scope. We follow an Agile delivery process: architectural discovery, interactive UX prototyping, sprint-based API and app development, security penetration testing, and enterprise app store rollouts.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Enterprise Mobility Services | Custom Enterprise Mobile Solutions | Firevy.Co"
        description="Empower your workforce with Firevy's Enterprise Mobility Services. Custom iOS/Android enterprise apps, Mobile Device Management (MDM), offline sync, ERP/CRM integration, and zero-trust security."
        keywords="enterprise mobility services, enterprise mobile app development, MDM solutions, BYOD enterprise security, enterprise mobile solutions company, workforce automation apps"
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
                Enterprise Mobility Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Our enterprise mobility services are engineered to empower your mobile workforce, streamline cross-platform operations, and secure critical corporate data with zero-trust MDM architectures and cloud-native connectivity.
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
                  src="/images/enterprise_mobility/mobility_hero.svg"
                  alt="Enterprise Mobility Services Team"
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
      {/* 2. LEADING ENTERPRISE MOBILITY SERVICES COMPANY */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic: Multi-Device Enterprise Network Visual */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/enterprise_mobility/mobility_section_1.svg"
                  alt="Leading Enterprise Mobility Services Company"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg max-h-[380px]"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Leading Enterprise Mobility <br />
                Services Company
              </h2>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our enterprise mobility consultants leverage deep expertise in native mobile frameworks, zero-trust cloud architectures, and Mobile Device Management (MDM) to build agile platforms that keep modern distributed teams connected and productive. As a trusted <Link to="/services/custom-mobile-app-development" className="text-[#005F96] hover:underline font-semibold">custom mobile app development company</Link>, we ensure that every remote and on-site operation is automated and protected. To build Enterprise Mobility Services with maximum ROI, we analyze your field workflows, device fleets, compliance obligations, and backend architectures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT BEST ENTERPRISE MOBILITY CONSULTANTS FOR ENTERPRISES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Brief About Best Enterprise Mobility <br />
                Consultants For Enterprises
              </h2>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our mobility architects conduct parameterized investigations of your field team hurdles, device vulnerabilities, and communication gaps to engineer streamlined enterprise mobile applications that your employees love using every day.
              </p>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                As a specialized Enterprise Mobility Solutions and Consulting Agency, we engineer intuitive role-specific mobile interfaces, encrypted offline data caches, and bulletproof MDM policies designed for long-term scalability.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/enterprise_mobility/mobility_about.svg"
                  alt="Brief About Best Enterprise Mobility Consultants For Enterprises"
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
      {/* 5. GET 100% RELIABLE ENTERPRISE MOBILITY EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Reliable Enterprise Mobility Experts
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
                Empower, Secure, And Mobilize Enterprise Workforces
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Generic consumer mobile apps lack the security hardening, offline reliability, and fleet governance required by modern enterprises. With our specialized <strong className="text-[#005F96] font-semibold">enterprise mobility services</strong>, your mobile ecosystem complies strictly with internal IT governance, HIPAA/SOC-2 standards, and existing business backends. We audit your workflows, implement containerized device management, and build apps that maximize field velocity.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                From cross-platform React Native and Flutter engineering to full-scale Mobile Device Management (MDM) deployment and cloud API orchestration, our dedicated mobility specialists provide complete lifecycle engineering. Gain total visibility into device health, worker efficiency, and live enterprise operations with zero operational friction.
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
      {/* 8. EXPERTISE IN OUR ENTERPRISE MOBILITY SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our Enterprise Mobility Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              As a Leading Enterprise Mobility Consulting and Development Company, we have decades of experience deploying resilient mobile systems. Our expertise includes:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {mobilityExpertiseCards.map((card, idx) => (
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
      {/* 14. BENEFITS OF ENTERPRISE MOBILITY SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Enterprise Mobility Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Enterprise Mobility Services empower modern workforces to collaborate securely, make real-time decisions, and accelerate field operations:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {mobilityBenefitsData.map((card, idx) => (
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
      <SapphireTechStackGrid domainName="Enterprise mobility" />

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
        faqList={mobilityFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to your workforce requirements and architect secure, mobile-first solutions. Feel free to contact our enterprise mobility specialists for any custom inquiry."
      />

      {/* ========================================================================= */}
      {/* 25. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 26. WHAT SETS US APART AS ENTERPRISE MOBILITY? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Enterprise Mobility?"
        subtitle="Being unique is our quality! Firevy Solutions delivers tailored, high-performance enterprise mobility platforms with automated workflows, zero-trust security, and real-time backend synchronization. We are a renowned custom software organization serving global enterprises with end-to-end support."
      />

      {/* ========================================================================= */}
      {/* 27. GET ACCESS TO TOP ENTERPRISE MOBILITY DEVELOPERS (CTA BANNER) */}
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
            Get access to top enterprise mobility developers and consultants to empower your mobile workforce and accelerate digital productivity.
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

export default EnterpriseMobilityServices;
