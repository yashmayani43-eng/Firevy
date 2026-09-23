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
import ExtendedRealityComprehensiveServices from './ExtendedRealityComprehensiveServices';
import {
  ArrowRight,
  Quote
} from 'lucide-react';

export const ExtendedRealityDevelopmentService = () => {


  // Benefits of Extended Reality Development Cards (Balanced 6 cards matching 3x2 grid)
  const xrBenefits = [
    {
      title: 'Unrivaled User Engagement',
      desc: 'Immersive 3D environments hold user attention significantly longer than conventional 2D flat screens, establishing deep emotional connection and memorable brand recall.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v10l7 4" />
          <path d="M16 8l-4-4M32 8l4-4" />
        </svg>
      )
    },
    {
      title: 'Accelerated Training Retention',
      desc: 'Experiential learning in VR/XR improves procedural recall and knowledge retention by up to 75% compared to traditional classrooms or PDF operational manuals.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 38V14a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v24" />
          <path d="M4 38h40" />
          <circle cx="24" cy="20" r="5" />
          <path d="M18 32c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      )
    },
    {
      title: 'Zero-Risk Virtual Prototyping',
      desc: 'Simulate high-risk operations, aerospace manufacturing, and complex surgical procedures in photorealistic 3D space with zero physical risk and negligible material cost.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 4l18 6v14c0 11-8 20-18 24-10-4-18-13-18-24V10L24 4z" />
          <path d="M16 24l6 6 12-12" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform Portability',
      desc: 'Deploy future-ready spatial applications seamlessly across Meta Quest, Apple Vision Pro, mobile iOS/Android, and standard WebXR browsers through unified engine pipelines.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="24" height="18" rx="2" />
          <rect x="20" y="18" width="22" height="22" rx="3" />
          <circle cx="31" cy="35" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Spatial Data Visualization',
      desc: 'Inspect complex multi-layered architectural designs, industrial IoT telemetries, and anatomical models in full 360-degree interactive spatial dimensions.',
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
      title: 'Real-Time Remote Collaboration',
      desc: 'Empower global distributed squads to collaborate in shared virtual spaces with spatial audio, real-time avatar interaction, and multi-user object manipulation.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="6" />
          <circle cx="32" cy="16" r="6" />
          <path d="M8 36c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8" />
          <path d="M24 24v6M21 27h6" />
        </svg>
      )
    }
  ];



  // Extended Reality FAQs
  const xrFaqs = [
    {
      question: '1. What are Extended Reality (XR) Development Services and how can they benefit my business?',
      answer: 'Extended Reality (XR) is the umbrella term encompassing Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR). XR Development Services empower businesses to build immersive simulations, interactive 3D product visualizers, and collaborative spatial tools that boost user engagement and streamline complex enterprise operations.'
    },
    {
      question: '2. Why should I choose Firevy for Extended Reality Development Services?',
      answer: 'Firevy provides end-to-end XR engineering expertise, combining certified Unity and Unreal Engine developers with seasoned 3D artists. We deliver high-frame-rate, optimized spatial computing solutions with zero motion sickness, cross-platform hardware compatibility, and rigorous security.'
    },
    {
      question: '3. What hardware devices do your Extended Reality solutions support?',
      answer: 'Our solutions support leading headsets including Apple Vision Pro, Meta Quest 3/Pro, HTC Vive, Valve Index, Microsoft HoloLens 2, as well as iOS/Android mobile devices and standard WebXR desktop browsers.'
    },
    {
      question: '4. What industries can benefit most from Extended Reality Development?',
      answer: 'Industries such as healthcare and medical training, aerospace, automotive, manufacturing, retail and e-commerce, architecture, real estate, education, and defense experience the highest ROI through immersive XR simulations.'
    },
    {
      question: '5. How does Extended Reality improve enterprise employee training?',
      answer: 'XR allows employees to practice complex, high-risk procedures in a safe, repeatable virtual environment. Experiential training improves muscle memory and retention by up to 75% while dramatically slashing travel and equipment costs.'
    },
    {
      question: '6. Do you develop browser-based WebXR solutions without requiring app downloads?',
      answer: 'Yes! We specialize in WebXR, Three.js, and Babylon.js applications that run directly inside modern web browsers on mobile phones, tablets, desktops, and headsets with zero app store download friction.'
    },
    {
      question: '7. What is the typical cost of an Extended Reality development project?',
      answer: 'The investment depends on project scope, 3D asset fidelity, target hardware, and interactivity complexity. We provide flexible engagement models—including fixed-price milestones and dedicated developer squads—to match your business budget.'
    },
    {
      question: '8. How long does it take to build a custom Extended Reality application?',
      answer: 'A rapid prototype or MVP can be deployed in 4 to 6 weeks, while comprehensive enterprise-grade simulations typically take 2 to 4 months following our agile sprint methodology.'
    },
    {
      question: '9. Do you provide ongoing maintenance, asset updates, and headset support?',
      answer: 'Yes, we provide post-launch support, performance optimization, device firmware adaptation, 3D asset updates, and multi-user server maintenance to keep your spatial apps running smoothly.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <SEO
        title="Professional Extended Reality (XR) Development Services in USA | Firevy"
        description="Firevy provides premier Extended Reality (XR) development services in USA, covering AR, VR, MR, spatial computing, 3D simulation, and WebXR solutions."
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
                Extended Reality Development Services in USA
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                Step beyond physical boundaries into immersive digital realms. Leverage our cutting-edge Extended Reality (XR) development services—spanning Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR)—to transform customer engagement, enterprise training, and spatial computing workflows.
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
                  src="/images/vr_hero_illustration.jpg"
                  alt="Extended Reality Development Services in USA"
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
      {/* 3. ENTERPRISE EXTENDED REALITY DEVELOPMENT & CONSULTING */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/vr_best_company_illustration.jpg"
                  alt="Enterprise Extended Reality Development and Consulting Services"
                  className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight">
                Enterprise Extended Reality Development And Consulting Services
              </h2>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                Our mission is to harness spatial computing, photorealistic 3D modeling, and interactive simulations to assist global enterprises in achieving superior training, marketing, and design collaboration. From healthcare and defense to automotive, manufacturing, retail, and architecture, we deliver robust XR systems designed for real-world impact.
              </p>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                We provide affordable Extended Reality application development and full-lifecycle custom XR software engineering, architectural design, and cross-platform deployment. From Apple Vision Pro and Meta Quest to WebXR and mobile AR, harness the power of Firevy's XR engineers to redefine your digital presence.
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
      {/* 5. QUICK AND AFFORDABLE EXTENDED REALITY SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Quick And Affordable Extended Reality Development Services
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
                  Immersive, Scalable And Powerful Spatial Apps
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Extended Reality is redefining how modern businesses engage with users and manage mission-critical operations. By unifying real and digital spaces with real-time rendering, spatial audio, and computer vision, XR bridges the divide between virtual concepts and real-world actions.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Our XR developers provide tailored <Link to="/services/software-development" className="text-[#005D95] font-bold underline hover:text-[#003b60]">software development service</Link> solutions to meet your target headsets, frame rate requirements, and budget. With extensive experience in Unity 3D, Unreal Engine 5, OpenXR, and spatial computing, we engineer high-performance applications that scale. Hire dedicated XR developers who empower your organization with innovative spatial experiences.
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
            {/* Card 1: Medical Surgical VR Simulation */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#005F96] text-white text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/digital_twin_hero.jpg"
                  alt="Medical Surgical VR Simulation Application"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Medical Surgical VR Simulation Platform
              </h3>
            </div>

            {/* Card 2: Automotive 3D Spatial Showroom */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/digital_twin_pipeline.jpg"
                  alt="Automotive 3D Spatial Showroom"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Automotive 3D Spatial Showroom
              </h3>
            </div>

            {/* Card 3: Enterprise AR Remote Field Assistance */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/augmented_reality_about.svg"
                  alt="Enterprise AR Remote Field Assistance"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Enterprise AR Remote Field Assistance
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
      {/* 11. BENEFITS OF EXTENDED REALITY DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits Of Extended Reality Development
            </h2>
            <p className="text-sm sm:text-[15.5px] text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              Extended Reality delivers revolutionary advantages including unparalleled user retention, interactive spatial analytics, risk-free training, and distinct brand differentiation. Explore key XR benefits.
            </p>
          </div>

          {/* 6 Benefits Cards Grid (Balanced 3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {xrBenefits.map((item, index) => (
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
      {/* OUR COMPREHENSIVE EXTENDED REALITY DEVELOPMENT SERVICES (EDGE-TO-EDGE CAROUSEL) */}
      {/* ========================================================================= */}
      <ExtendedRealityComprehensiveServices />

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
        faqs={xrFaqs}
      />

      {/* ========================================================================= */}
      {/* 24. WHAT SETS US APART IN EXTENDED REALITY DEVELOPMENT SERVICES? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Extended Reality Development Services?"
        subtitle="Being unique is our quality! Firevy combines deep spatial computing engineering with photorealistic 3D design to build world-class XR, AR, and VR solutions for global enterprises."
      />

      {/* ========================================================================= */}
      {/* 25. RECENT BLOGS */}
      {/* ========================================================================= */}
      <ItConsultingRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 26. HAVE EXTENDED REALITY DEVELOPMENT CHALLENGE TO ADDRESS ? */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Extended Reality Development Challenge To Address ?"
        subtitle="Get access to top XR, VR, and AR developers to transform your ideas into an immersive spatial application."
        buttonText="Hire XR Developers Now"
      />

      {/* ========================================================================= */}
      {/* ANCHOR */}
      {/* ========================================================================= */}
      <div id="consultation-form" />
    </div>
  );
};

export default ExtendedRealityDevelopmentService;
