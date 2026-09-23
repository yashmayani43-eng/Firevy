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
import MetaverseComprehensiveServices from './MetaverseComprehensiveServices';
import {
  ArrowRight,
  Quote
} from 'lucide-react';

export const MetaverseDevelopmentCompanyService = () => {

  // Benefits of Metaverse Development Cards (Balanced 6 cards matching 3x2 grid)
  const metaverseBenefits = [
    {
      title: 'Persistent Virtual Real Estate & Spaces',
      desc: 'Build perpetual 3D digital environments that remain active 24/7, providing global users with an interactive spatial venue for branded gatherings, showcases, and commerce.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <path d="M6 20h36M20 20v20M6 32h14" />
          <circle cx="28" cy="14" r="2" />
        </svg>
      )
    },
    {
      title: 'Web3 & Digital Asset Monetization',
      desc: 'Harness tokenomics, smart contracts, and NFT digital goods to create direct-to-avatar commerce streams, digital land leases, and verifiable secondary trading marketplaces.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 12v24M18 17h10a4 4 0 0 1 0 8H18h12a4 4 0 0 1 0 8H18" />
        </svg>
      )
    },
    {
      title: 'Next-Gen 3D User Engagement',
      desc: 'Replace flat 2D browsing with deeply tactile spatial interactions. Real-time 3D physics, spatial audio, and gamified mechanics skyrocket user retention and brand immersion.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v10l7 4" />
          <path d="M16 8l-4-4M32 8l4-4" />
        </svg>
      )
    },
    {
      title: 'Borderless Multi-User Collaboration',
      desc: 'Enable distributed global teams, stakeholders, and customers to meet in shared spatial boardrooms with low-latency voice, avatar gestures, and synchronized 3D assets.',
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
      title: 'Decentralized Digital Identity & Avatars',
      desc: 'Equip users with customizable, cross-platform 3D avatars with rigged facial animation and decentralized self-sovereign identity protocols across multiple virtual worlds.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="8" />
          <path d="M10 40c0-7 6-12 14-12s14 5 14 12" />
          <path d="M24 4v4M18 6l2 3M30 6l-2 3" />
        </svg>
      )
    },
    {
      title: 'Frictionless Cross-Platform Interoperability',
      desc: 'Deploy spatial ecosystems that run seamlessly across WebXR web browsers, Meta Quest, Apple Vision Pro, iOS, Android, and high-performance desktop clients without lock-in.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0068A8]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="24" height="18" rx="2" />
          <rect x="20" y="18" width="22" height="22" rx="3" />
          <circle cx="31" cy="35" r="1.5" />
        </svg>
      )
    }
  ];

  // Metaverse FAQs
  const metaverseFaqs = [
    {
      question: '1. What are Metaverse Development Services and how can they benefit my enterprise?',
      answer: 'Metaverse Development Services encompass building persistent, multi-user 3D virtual spaces, spatial computing platforms, Web3 decentralized applications, and custom digital twins. Businesses benefit through hyper-engaging virtual commerce, borderless workforce collaboration, immersive brand activations, and new tokenized monetization avenues.'
    },
    {
      question: '2. Why should I choose Firevy as our Metaverse Development Company?',
      answer: 'Firevy brings deep spatial engineering capabilities, combining certified Unreal Engine 5 and Unity developers, WebGL experts, 3D character artists, and Web3 smart contract auditors. We build high-concurrency, cross-platform metaverse applications tailored for enterprise security, scalability, and performance.'
    },
    {
      question: '3. Can users access your Metaverse platforms without downloading heavy software?',
      answer: 'Yes! We specialize in WebXR and browser-based 3D applications (using Three.js, Babylon.js, and WebAssembly) allowing users to enter virtual environments directly via URLs on standard web browsers, smartphones, tablets, and VR headsets with zero download friction.'
    },
    {
      question: '4. Do your Metaverse solutions support VR and AR headsets like Apple Vision Pro and Meta Quest?',
      answer: 'Absolutely. We architect unified cross-platform pipelines that deploy to Apple Vision Pro, Meta Quest 3/Pro, HTC Vive, Pico, desktop Windows/macOS, and mobile devices with synchronized multiplayer state management.'
    },
    {
      question: '5. How do you integrate Web3, NFTs, and payment gateways into the Metaverse?',
      answer: 'We develop robust smart contracts (ERC-20, ERC-721, ERC-1155), integrate decentralized wallets (MetaMask, WalletConnect, Coinbase Wallet), and establish fiat-to-crypto checkout gateways to facilitate seamless digital asset buying, selling, and leasing.'
    },
    {
      question: '6. What industries can benefit most from custom Metaverse development?',
      answer: 'Industries including retail & fashion (virtual try-ons and digital twins), real estate & architecture (3D virtual walkthroughs), corporate enterprises (remote spatial offices and boardrooms), gaming & entertainment (virtual concerts and multiplayer arenas), and healthcare (collaborative clinical simulations) achieve immense ROI.'
    },
    {
      question: '7. How do you ensure high performance with thousands of concurrent users in a virtual world?',
      answer: 'We implement scalable spatial server architectures with distributed spatial partitioning, level-of-detail (LOD) asset streaming, low-latency WebRTC audio/video feeds, and authoritative headless servers hosted on AWS and Google Cloud.'
    },
    {
      question: '8. How long does it take to develop a custom Metaverse application?',
      answer: 'A minimum viable product (MVP) or custom virtual showroom typically requires 4 to 8 weeks, while full-scale persistent decentralized virtual worlds with comprehensive tokenomics and custom avatar ecosystems span 3 to 6 months.'
    },
    {
      question: '9. Do you offer ongoing maintenance and world-building updates post-launch?',
      answer: 'Yes, we provide end-to-end post-launch support including multi-user concurrency tuning, seasonal world and asset additions, security audits, server SLA monitoring, and device firmware compatibility updates.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <SEO
        title="Top Metaverse Development Company in USA | Firevy"
        description="Firevy is a premier Metaverse Development Company providing enterprise 3D virtual worlds, Web3 spatial computing, 3D avatar platforms, and WebXR solutions in USA."
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
                Metaverse Development Company in USA
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                Step into the next digital frontier with our end-to-end Metaverse development services. Firevy engineers hyper-immersive 3D virtual worlds, Web3 spatial ecosystems, interactive avatar platforms, and decentralized applications (dApps) that redefine customer engagement, virtual commerce, and enterprise collaboration.
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
                  src="/images/metaverse_hero_illustration.jpg"
                  alt="Metaverse Development Company in USA"
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
      {/* 3. ENTERPRISE METAVERSE DEVELOPMENT & CONSULTING */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
              <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/metaverse_enterprise_illustration.jpg"
                  alt="Enterprise Metaverse Development and Consulting Services"
                  className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight">
                Enterprise Metaverse Development And Consulting Services
              </h2>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                Our mission is to harness spatial computing, decentralized Web3 protocols, and photorealistic 3D virtual environments to assist forward-thinking enterprises in dominating the next era of digital interaction. From virtual corporate headquarters and expo halls to gamified token economies and digital twin cities, we deliver robust metaverse architectures designed for enterprise scale.
              </p>

              <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                We provide full-lifecycle custom Metaverse software engineering, smart contract architecture, 3D asset optimization, and cross-platform deployment. From Apple Vision Pro and Meta Quest to browser-based WebXR, harness the expertise of Firevy's metaverse engineers to create boundless virtual opportunities.
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
      {/* 5. QUICK AND AFFORDABLE METAVERSE SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Quick And Affordable Metaverse Development Services
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
                  Immersive, Scalable And Decentralized Virtual Worlds
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                The Metaverse represents the fusion of virtual worlds, spatial computing, decentralized finance, and social interaction. By unifying multi-user real-time 3D rendering with blockchain-backed asset verification, businesses can establish enduring digital communities and recurring revenue streams.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Our developers deliver customized <Link to="/services/software-development" className="text-[#005D95] font-bold underline hover:text-[#003b60]">software development service</Link> solutions engineered for high frame-rates, minimal latency, and frictionless onboarding. With deep expertise across Unity 3D, Unreal Engine 5, WebXR, Solidity, and spatial networking, we build metaverse platforms that stand the test of scale. Hire dedicated Metaverse developers to propel your business into the future.
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
            {/* Card 1: Virtual Real Estate & Digital Twin Mall */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#005F96] text-white text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/digital_twin_hero.jpg"
                  alt="Enterprise Virtual Real Estate and Digital Twin Mall"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Enterprise Virtual Real Estate & Digital Twin Mall
              </h3>
            </div>

            {/* Card 2: Next-Gen Web3 Metaverse Concert & Arena */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/digital_twin_pipeline.jpg"
                  alt="Next-Gen Web3 Metaverse Concert and Arena"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Next-Gen Web3 Metaverse Concert & Arena
              </h3>
            </div>

            {/* Card 3: 3D Avatar & Virtual Fashion Platform */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/virtual_reality_about.svg"
                  alt="3D Avatar and Virtual Fashion Platform"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                3D Avatar & Virtual Fashion E-Commerce Platform
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
      {/* 11. BENEFITS OF METAVERSE DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits Of Metaverse Development
            </h2>
            <p className="text-sm sm:text-[15.5px] text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              Metaverse solutions deliver transformative opportunities including persistent virtual real estate, Web3 asset monetization, limitless customer engagement, and borderless global collaboration. Explore key advantages below.
            </p>
          </div>

          {/* 6 Benefits Cards Grid (Balanced 3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {metaverseBenefits.map((item, index) => (
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
      {/* OUR COMPREHENSIVE METAVERSE DEVELOPMENT SERVICES (EDGE-TO-EDGE CAROUSEL) */}
      {/* ========================================================================= */}
      <MetaverseComprehensiveServices />

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
        faqs={metaverseFaqs}
      />

      {/* ========================================================================= */}
      {/* 24. WHAT SETS US APART IN METAVERSE DEVELOPMENT SERVICES? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Metaverse Development Services?"
        subtitle="Being unique is our quality! Firevy combines deep 3D spatial engineering with Web3 decentralization and photorealistic graphics to build world-class Metaverse platforms for global enterprises."
      />

      {/* ========================================================================= */}
      {/* 25. RECENT BLOGS */}
      {/* ========================================================================= */}
      <ItConsultingRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 26. HAVE METAVERSE DEVELOPMENT CHALLENGE TO ADDRESS ? */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Metaverse Development Challenge To Address ?"
        subtitle="Get access to top Metaverse, Web3, and 3D spatial developers to transform your ideas into an immersive digital reality."
        buttonText="Hire Metaverse Developers Now"
      />

      {/* ========================================================================= */}
      {/* ANCHOR */}
      {/* ========================================================================= */}
      <div id="consultation-form" />
    </div>
  );
};

export default MetaverseDevelopmentCompanyService;
