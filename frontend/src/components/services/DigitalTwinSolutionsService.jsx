import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';

import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';

import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ItConsultingRecentBlogsSection from './ItConsultingRecentBlogsSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import DigitalTwinComprehensiveServices from './DigitalTwinComprehensiveServices';
import {
  ArrowRight,
  Quote
} from 'lucide-react';

export const DigitalTwinSolutionsService = () => {

  // Benefits of Digital Twin Solutions Cards (Balanced 6 cards matching 3x2 grid)
  const digitalTwinBenefits = [
    {
      title: 'Real-Time Operational Visibility',
      desc: 'Sub-second bidirectional telemetry ingestion between physical machines, SCADA networks, and 3D virtual representations for complete operational transparency.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <path d="M6 20h36M20 20v20M6 32h14" />
          <circle cx="28" cy="14" r="2" />
        </svg>
      )
    },
    {
      title: 'Predictive Maintenance & Zero Downtime',
      desc: 'Continuous machine learning anomaly detection identifies thermal hotspots, micro-vibrations, and mechanical fatigue well before catastrophic equipment failure occurs.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 24l8 8 16-16" />
          <circle cx="24" cy="24" r="18" />
        </svg>
      )
    },
    {
      title: 'Risk-Free What-If Simulations',
      desc: 'Test load spikes, production reconfiguration, stress limits, and emergency protocols in a calibrated physics sandbox without disrupting active factory operations.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v10l7 4" />
          <path d="M16 8l-4-4M32 8l4-4" />
        </svg>
      )
    },
    {
      title: 'Asset Lifecycle Cost Reduction',
      desc: 'Extend machinery operational lifespan by 25-40% through precision usage monitoring, dynamic maintenance scheduling, and optimized power consumption.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="40" x2="40" y2="40" />
          <line x1="8" y1="40" x2="8" y2="8" />
          <path d="M14 34l8-10 8 6 10-14" />
          <circle cx="22" cy="24" r="2.5" />
          <circle cx="30" cy="30" r="2.5" />
          <circle cx="40" cy="16" r="2.5" />
        </svg>
      )
    },
    {
      title: 'Cross-System IT & OT Interoperability',
      desc: 'Unify disparate protocols—including OPC-UA, MQTT, REST APIs, and Modbus—into an authoritative central virtual replica accessible to cross-functional teams.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="6" />
          <circle cx="32" cy="16" r="6" />
          <path d="M8 36c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8" />
          <path d="M24 24v6M21 27h6" />
        </svg>
      )
    },
    {
      title: 'Automated Regulatory Compliance',
      desc: 'Maintain immutable timestamped logs of machine performance, emissions telemetry, and safety metrics to satisfy stringent ISO, OSHA, and environmental standards.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 4l18 6v14c0 11-8 20-18 24-10-4-18-13-18-24V10L24 4z" />
          <path d="M16 24l6 6 12-12" />
        </svg>
      )
    }
  ];

  // Digital Twin FAQs
  const digitalTwinFaqs = [
    {
      question: '1. What are Digital Twin Solutions and how do they benefit enterprise operations?',
      answer: 'A Digital Twin is a dynamic, virtual representation of a physical machine, product, or entire facility powered by real-time IoT sensor telemetry, physics modeling, and machine learning. Enterprises benefit through real-time operational visibility, predictive failure detection, optimized maintenance cycles, and risk-free simulation.'
    },
    {
      question: '2. Why should our company choose Firevy for Digital Twin development?',
      answer: 'Firevy brings deep cross-disciplinary expertise spanning industrial IoT engineering, PLC/SCADA telematics, CAD/BIM 3D modeling, and AI-driven predictive analytics. We deliver secure, scalable digital twin pipelines compliant with ISO industrial standards.'
    },
    {
      question: '3. What industrial protocols and IoT data sources can you integrate with?',
      answer: 'We natively integrate with OPC-UA, MQTT, Modbus, BACnet, Siemens S7, REST APIs, and industrial historians. Data feeds can be hosted on AWS IoT TwinMaker, Azure Digital Twins, Google Cloud IoT, or private on-premise clusters.'
    },
    {
      question: '4. How does a Digital Twin prevent unplanned machine downtime?',
      answer: 'Our predictive AI algorithms constantly benchmark live telemetry against calibrated physical thresholds. By recognizing vibration anomalies, temperature creep, and pressure fluctuations weeks ahead of time, teams perform scheduled repairs before failures happen.'
    },
    {
      question: '5. What industries gain the highest ROI from Digital Twin implementations?',
      answer: 'Heavy manufacturing, automotive assembly, aerospace, energy grids, smart commercial buildings (BIM), healthcare facilities, and supply chain logistics achieve the highest operational ROI and rapid payback periods.'
    },
    {
      question: '6. Can our CAD blueprints and 3D schematics be directly converted into a digital twin?',
      answer: 'Yes! We ingest complex CAD formats (SolidWorks, AutoCAD, CATIA, STEP, Revit BIM) and optimize them into lightweight, real-time 3D models running at 60+ FPS inside interactive web browsers, desktop dashboards, and VR headsets.'
    },
    {
      question: '7. How do you guarantee cybersecurity and data protection for industrial digital twins?',
      answer: 'We implement end-to-end TLS 1.3 encryption, mutual certificate authentication (mTLS), role-based access control (RBAC), and zero-trust perimeter network isolation to guarantee proprietary OT systems remain secure.'
    },
    {
      question: '8. How long does an enterprise Digital Twin development engagement typically take?',
      answer: 'A focused single-asset or pilot machine twin is commonly deployed within 4 to 8 weeks, while comprehensive facility-wide cyber-physical ecosystems spanning thousands of telemetry nodes typically take 3 to 6 months.'
    },
    {
      question: '9. Do you provide continuous calibration and algorithmic refinement post-launch?',
      answer: 'Yes, we provide ongoing sensor calibration, model retuning, machine learning drift prevention, cloud infrastructure scaling, and 24/7 telemetry SLA support.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <SEO
        title="Enterprise Digital Twin Solutions & Development Services | Firevy"
        description="Firevy delivers enterprise Digital Twin development services in USA, integrating real-time IoT telematics, cyber-physical synchronization, predictive maintenance, and 3D simulation twins."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Digital Twin Solutions & Development in USA
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                Bridge the physical and virtual worlds. Leverage our enterprise Digital Twin solutions—integrating real-time IoT telematics, physics-based 3D modeling, and predictive AI—to eliminate downtime, optimize asset lifecycles, and simulate complex operational workflows.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center space-x-3 bg-[#005D95] hover:bg-[#004b78] text-white px-8 py-3.5 rounded-[6px] font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/digital_twin_hero_3d.jpg"
                  alt="Digital Twin Solutions & Development in USA"
                  className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLIENT LOGOS MARQUEE */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. ENTERPRISE DIGITAL TWIN DEVELOPMENT & CONSULTING */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/digital_twin_enterprise_3d.jpg"
                  alt="Enterprise Digital Twin Development and Consulting Services"
                  className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight">
                Enterprise Digital Twin Development And Consulting Services
              </h2>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                Our mission is to harness cyber-physical systems engineering, IoT telematics integration, and physics-driven 3D simulations to help industrial enterprises achieve zero unplanned downtime, superior operational efficiency, and deep predictive intelligence. From robotic manufacturing lines and smart buildings to aerospace powertrains and utility distribution networks, we build digital twins built for real-world impact.
              </p>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                We provide full-lifecycle custom Digital Twin engineering, sensor network integration, CAD geometry conversion, and predictive ML modeling. From AWS IoT TwinMaker and Azure Digital Twins to customized on-premise spatial dashboards, leverage Firevy's engineering prowess to modernize your enterprise operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP RATED BANNER */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. QUICK AND AFFORDABLE DIGITAL TWIN SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Quick And Affordable Digital Twin Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#EBF6FB] rounded-2xl p-8 sm:p-10 text-left relative overflow-hidden border border-[#D5EBF5]">
                <div className="w-12 h-10 mb-4 text-[#005D95]">
                  <Quote className="w-12 h-12 fill-current opacity-90" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-[800] text-[#005D95] leading-snug tracking-tight">
                  Real-Time Physical & Virtual Asset Synchronization Guarantee
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Deploying high-impact digital twins in today's connected enterprise demands rigorous mathematical precision, low-latency telemetry ingestion, and seamless integration across enterprise IT and OT systems. Off-the-shelf software often fails to replicate complex proprietary machinery or unique facility workflows.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Our engineers provide personalized <Link to="/services/software-development" className="text-[#005D95] font-bold underline hover:text-[#003b60]">software development service</Link> solutions engineered for your exact SCADA networks, CAD schematics, and enterprise ERP systems. With deep expertise across industrial IoT, machine learning, and 3D simulation engines, we deliver solutions that minimize operational risk and unlock predictive intelligence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES & STATS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#DDF1FB] text-center font-sans border-t border-cyan-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-700 leading-relaxed font-sans">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: Industrial Smart Factory Cyber-Physical Twin */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#005F96] text-white text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/digital_twin_hero.jpg"
                  alt="Industrial Smart Factory Cyber-Physical Twin"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Industrial Smart Factory Cyber-Physical Twin
              </h3>
            </div>

            {/* Card 2: Automotive Powertrain & Robotics Simulation Platform */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/digital_twin_pipeline.jpg"
                  alt="Automotive Powertrain and Robotics Simulation Platform"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Automotive Powertrain & Robotics Simulation Platform
              </h3>
            </div>

            {/* Card 3: Smart City & Utility Grid Telematics Twin */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/virtual_reality_about.svg"
                  alt="Smart City and Utility Grid Telematics Twin"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Smart City & Utility Grid Telematics Twin
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
            {/* Box 1: Purple (23+ Years Experience) */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green (250+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                250+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral (2800+ Satisfied Clients) */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue (Want to start Projects -> Get Estimation) */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <Link
                to="/contact-us"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. AWARDS & TRUST RECOGNITION BANNER */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF DIGITAL TWIN SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits of Our Digital Twin Solutions
            </h2>
            <p className="text-sm sm:text-[15.5px] text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              Years of cyber-physical engineering, IoT telematics integration, and 3D simulation have made our committed digital twin specialists exceptionally skilled partners.
            </p>
          </div>

          {/* 6 Benefits Cards Grid (Balanced 3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {digitalTwinBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col text-left group"
              >
                <div className="mb-5 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0B0F19] mb-2.5 group-hover:text-[#0068A8] transition-colors font-sans">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[14px] leading-[1.65] font-normal font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* OUR COMPREHENSIVE DIGITAL TWIN SOLUTIONS (EDGE-TO-EDGE CAROUSEL) */}
      {/* ========================================================================= */}
      <DigitalTwinComprehensiveServices />

      {/* ========================================================================= */}
      {/* 12. HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 13. INNOVATIVE VIDEO SLIDER */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 14. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 15. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 16. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 17. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION THROUGH INNOVATION (CASE STUDIES) */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider
        data={{
          title: 'Digital Transformation Through Innovation and Collective Knowledge',
          description: 'At Firevy, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.'
        }}
      />

      {/* ========================================================================= */}
      {/* 23. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below"
        faqs={digitalTwinFaqs}
      />

      {/* ========================================================================= */}
      {/* 24. WHAT SETS US APART IN DIGITAL TWIN SOLUTIONS? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Digital Twin Solutions?"
        subtitle="Being unique is our quality! Firevy combines deep IoT telematics with predictive physics engines and 3D simulation to engineer world-class Digital Twin platforms for global industrial enterprises."
      />

      {/* ========================================================================= */}
      {/* 25. RECENT BLOGS */}
      {/* ========================================================================= */}
      <ItConsultingRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 26. HAVE DIGITAL TWIN CHALLENGE TO ADDRESS ? */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Digital Twin Challenge To Address ?"
        subtitle="Get access to top Digital Twin, Industrial IoT, and 3D simulation developers to transform your ideas into operational intelligence."
        buttonText="Hire Digital Twin Developers Now"
      />

      {/* ========================================================================= */}
      {/* ANCHOR */}
      {/* ========================================================================= */}
      <div id="consultation-form" />
    </div>
  );
};

export default DigitalTwinSolutionsService;
