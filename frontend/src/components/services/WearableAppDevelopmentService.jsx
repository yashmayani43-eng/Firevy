import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';

export const WearableAppDevelopmentService = () => {
  // Benefits Of Wearable App Development Services (6 items matching design)
  const wearableBenefitsCards = [
    {
      title: 'Real-Time Data Sync',
      desc: 'Smart wearable devices sync health vitals, activity levels, and notifications with cloud servers and companion apps in real time using ultra-low power BLE protocols and background background processes.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Layered Shield */}
          <path d="M24 5 L37 10 V22 C37 32 24 40 24 40 C24 40 11 32 11 22 V10 Z" />
          {/* Heart Rate Pulse inside */}
          <path d="M16 23 H20 L22 17 L26 29 L28 21 L30 23 H33" strokeWidth="2.2" />
        </svg>
      )
    },
    {
      title: 'Optimizing Battery & Performance',
      desc: "Wearable applications must operate under stringent memory and CPU boundaries. Our architectures prioritize battery efficiency, tiny background memory footprints, and instant responsive screen wakes.",
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Smartwatch / Device Window */}
          <rect x="7" y="11" width="31" height="26" rx="6" />
          <line x1="7" y1="18" x2="38" y2="18" />
          <circle cx="12" cy="14.5" r="0.8" fill="currentColor" />
          <circle cx="16" cy="14.5" r="0.8" fill="currentColor" />
          {/* Speedometer Gauge Inside */}
          <path d="M14 31 A8.5 8.5 0 0 1 31 31" />
          <line x1="22.5" y1="31" x2="27.5" y2="24.5" />
          <circle cx="22.5" cy="31" r="1.5" fill="currentColor" />
          {/* Energy Bolt at Top Right */}
          <g transform="translate(31, 3) scale(0.7)">
            <path d="M13 2 L4 14 H12 L11 22 L20 10 H12 Z" fill="#0084D1" stroke="#0084D1" strokeWidth="1.5" />
          </g>
        </svg>
      )
    },
    {
      title: 'Cross-Ecosystem Integration',
      desc: 'Seamlessly interoperate across Apple watchOS, Wear OS by Google, Tizen, Garmin, and custom IoT telemetry devices, ensuring a unified biometric and alert experience for all end users.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Primary Device Screen */}
          <rect x="6" y="8" width="28" height="25" rx="4" />
          <line x1="6" y1="15" x2="34" y2="15" />
          <circle cx="11" cy="11.5" r="0.8" fill="currentColor" />
          <circle cx="15" cy="11.5" r="0.8" fill="currentColor" />
          {/* Bluetooth / Sync Icon */}
          <path d="M17 19 L23 25 L20 28 V16 L23 19 L17 25" strokeWidth="1.8" />
          {/* Secondary Watch Window on bottom right */}
          <rect x="22" y="21" width="20" height="19" rx="3.5" fill="white" stroke="currentColor" strokeWidth="2.2" />
          <line x1="22" y1="27" x2="42" y2="27" />
          <circle cx="32" cy="33" r="3.5" />
          <line x1="32" y1="33" x2="34" y2="33" />
        </svg>
      )
    },
    {
      title: 'Hands-Free User Experience',
      desc: 'Voice gestures, haptic feedback taps, and quick-glance complications allow users to access core workflows, navigate GPS paths, and control audio without taking out their mobile phones.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ascending Stairs / Bars */}
          <rect x="6" y="33" width="6" height="9" rx="1" />
          <rect x="15" y="27" width="6" height="15" rx="1" />
          <rect x="24" y="21" width="6" height="21" rx="1" />
          <rect x="33" y="15" width="6" height="27" rx="1" />
          {/* Walking / Running Person */}
          <circle cx="21" cy="7" r="2.8" />
          <path d="M17 18 L21 12 L26 14 L29 11" />
          <path d="M21 12 L19 22 L24 19" />
          <path d="M23 17 L27 23" />
          {/* Upward Growth Arrow */}
          <path d="M34 6 H41 V13" />
          <line x1="41" y1="6" x2="33" y2="14" />
        </svg>
      )
    },
    {
      title: 'Biometric & Health Monitoring',
      desc: 'Harness built-in optical heart rate sensors, ECG sensors, accelerometer telemetry, blood oxygen SpO2 trackers, and sleep staging metrics compliant with HIPAA and GDPR medical security protocols.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Base line */}
          <line x1="8" y1="41" x2="40" y2="41" />
          {/* 3 Pillar columns */}
          <path d="M12 41 V25 M17 41 V25" />
          <path d="M21 41 V21 M27 41 V21" />
          <path d="M31 41 V25 M36 41 V25" />
          {/* Center Gear / Watch Dial */}
          <circle cx="24" cy="14" r="5.5" />
          <circle cx="24" cy="14" r="2" fill="currentColor" />
          <path d="M24 6.5 V8.5 M24 19.5 V21.5 M16.5 14 H18.5 M29.5 14 H31.5 M18.7 8.7 L20.1 10.1 M27.9 17.9 L29.3 19.3 M18.7 19.3 L20.1 17.9 M27.9 10.1 L29.3 8.7" />
          {/* Left Sensor Ring */}
          <circle cx="14.5" cy="19.5" r="4" />
          <path d="M14.5 13.5 V15.5 M14.5 23.5 V25.5 M8.5 19.5 H10.5 M18.5 19.5 H20.5" />
          {/* Right Sensor Ring */}
          <circle cx="33.5" cy="19.5" r="4" />
          <path d="M33.5 13.5 V15.5 M33.5 23.5 V25.5 M27.5 19.5 H29.5 M37.5 19.5 H39.5" />
        </svg>
      )
    },
    {
      title: 'Instant Push & Micro-Interactions',
      desc: 'Elevate customer retention with context-aware wrist alerts, one-tap quick replies, interactive rich notifications, and glanceable widget complications tailored for fast decisions.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Heart Contour */}
          <path d="M24 33 C24 33 12 26 12 16.5 C12 12 15.5 8.5 20 8.5 C22.5 8.5 23.6 9.8 24 10.5 C24.4 9.8 25.5 8.5 28 8.5 C32.5 8.5 36 12 36 16.5 C36 26 24 33 24 33 Z" />
          {/* 3 People Silhouette Group Inside */}
          <circle cx="24" cy="15" r="2.2" />
          <path d="M20.5 22.5 C20.5 20.2 22 19 24 19 C26 19 27.5 20.2 27.5 22.5" />
          <circle cx="17.5" cy="17.5" r="1.8" />
          <path d="M14.5 24.5 C14.5 22.8 15.5 21.8 17.5 21.8 C18.5 21.8 19.3 22.2 19.8 23" />
          <circle cx="30.5" cy="17.5" r="1.8" />
          <path d="M28.2 23 C28.7 22.2 29.5 21.8 30.5 21.8 C32.5 21.8 33.5 22.8 33.5 24.5" />
          {/* Two Supporting Hands at Bottom */}
          <path d="M11 30 C11 30 13.5 37 18 39 H23" />
          <path d="M37 30 C37 30 34.5 37 30 39 H25" />
        </svg>
      )
    }
  ];

  // The Expertise Of Our Wearable App Development (6 items matching design)
  const expertiseItems = [
    {
      title: 'Smartwatch UI/UX Design',
      desc: 'Our design team crafts minimalist, glanceable smartwatch interfaces optimized for circular, rectangular, and curved screens with instant readability in bright outdoor sunlight.',
      iconBg: 'bg-[#F2EBFB]',
      iconColor: 'text-[#9333EA]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 9v3l2 1" />
          <path d="M9 5V2h6v3" />
          <path d="M9 19v3h6v-3" />
        </svg>
      )
    },
    {
      title: 'Apple Watch (watchOS) Apps',
      desc: 'Native watchOS solutions using SwiftUI, WatchKit, and HealthKit SDKs with standalone cellular connectivity, complications, background audio, and Apple Health synchronization.',
      iconBg: 'bg-[#E7F8EE]',
      iconColor: 'text-[#16A34A]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="4" />
          <path d="M10 2h4v2h-4zM10 20h4v2h-4z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )
    },
    {
      title: 'Google Wear OS Solutions',
      desc: 'High-performance Wear OS applications powered by Compose for Wear OS, Tiles API, and Google Fit integrations that run smoothly across Samsung Galaxy Watch, Pixel Watch, and Fossil hardware.',
      iconBg: 'bg-[#FDF0E7]',
      iconColor: 'text-[#EA580C]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4V2 M12 22v-2 M4 12H2 M22 12h-2" />
          <polyline points="12 8 12 12 15 14" />
        </svg>
      )
    },
    {
      title: 'Fitness & Telehealth Trackers',
      desc: 'Specialized healthcare and sports tracker apps monitoring step counts, caloric burn, heart rate variability (HRV), sleep stages, and telemetry data compliant with medical grade standards.',
      iconBg: 'bg-[#FEF8E7]',
      iconColor: 'text-[#D97706]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: 'IoT & BLE Wearable Integration',
      desc: 'Robust Bluetooth Low Energy (BLE) pairing pipelines connecting smart rings, biometric clothing, hearables, and industrial safety wristbands to central enterprise cloud dashboards.',
      iconBg: 'bg-[#EFF6FF]',
      iconColor: 'text-[#2563EB]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
        </svg>
      )
    },
    {
      title: 'Enterprise Safety & Field Tech',
      desc: 'Custom industrial wearable software for hands-free warehouse navigation, construction site worker distress SOS triggers, geofencing, and lone-worker safety compliance alerts.',
      iconBg: 'bg-[#FDF2F8]',
      iconColor: 'text-[#DB2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Reference Match)
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <img src="/images/ic_fixed_price.svg" alt="Fixed Price" className="w-12 h-12 object-contain" />
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      icon: (
        <img src="/images/ic_time_material.svg" alt="Time Material" className="w-12 h-12 object-contain" />
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <img src="/images/ic_full_time.svg" alt="Dedicated Team" className="w-12 h-12 object-contain" />
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      icon: (
        <img src="/images/bucketapproch.svg" alt="Buckets Approach" className="w-12 h-12 object-contain" />
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // 6 FAQ Items for Wearable App Development
  const faqItems = [
    {
      question: 'Which wearable platforms and operating systems do you support?',
      answer: 'We develop custom applications for Apple watchOS (Apple Watch Series & Ultra), Google Wear OS (Samsung Galaxy Watch, Google Pixel Watch), Garmin Connect IQ, and custom embedded BLE wearable firmware.'
    },
    {
      question: 'Can wearable apps function independently without a connected smartphone?',
      answer: 'Yes! We build standalone wearable applications that utilize onboard cellular LTE, Wi-Fi, and GPS capabilities to stream music, track workouts, process contactless payments, and sync cloud data without requiring an active phone connection.'
    },
    {
      question: 'How do you ensure wearable apps do not drain battery excessively?',
      answer: 'We implement battery-optimized architectures utilizing low-power sensor batching, asynchronous background task scheduling, minimal wake-lock durations, and lightweight local caching to deliver full-day battery life.'
    },
    {
      question: 'How long does it take to develop a custom wearable application?',
      answer: 'A standard companion or standalone wearable MVP typically requires 6 to 10 weeks from UI/UX design to final App Store and Google Play Store deployment, depending on hardware sensor integration and backend sync complexity.'
    },
    {
      question: 'Can wearable apps securely integrate with Apple Health and Google Health Connect?',
      answer: 'Absolutely. We specialize in building secure HealthKit and Health Connect pipelines with explicit user permission controls, encrypted data storage, and strict adherence to HIPAA and GDPR healthcare privacy standards.'
    },
    {
      question: 'Do you provide ongoing support and major OS version upgrades?',
      answer: 'Yes, we provide comprehensive SLA-backed maintenance packages including annual major watchOS and Wear OS compatibility upgrades, new watch complication designs, performance monitoring, and bug fixes.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      <SEO
        title="Wearable App Development Services | Custom Smartwatch & Wear OS Apps"
        description="Top Wearable App Development Company. Build robust, high-performance smartwatch applications for Apple watchOS, Google Wear OS, and IoT fitness devices."
        canonical="/services/wearable-app-development"
        keywords="wearable app development, smartwatch app development, watchos app development, wear os app development, hire wearable app developers"
      />

      {/* Section 1: Hero Banner */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 bg-white overflow-hidden border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1
                className="text-slate-900 font-extrabold tracking-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(30px, 3.6vw, 44px)',
                  lineHeight: '1.2'
                }}
              >
                Wearable App Development <br className="hidden sm:inline" />Services in USA
              </h1>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[24px] font-normal max-w-xl font-sans">
                Apple's smartwatches, healthcare wearables, Google Glass, etc., are the most fantastic examples of Wearable health data analytics platform. With the assistance of the IoT-based wearable application development company, you may infuse your firm with innovation and dominate the market.
              </p>

              {/* Button */}
              <div className="pt-2">
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#005F96] hover:bg-[#004a75] text-white font-bold text-xs sm:text-sm rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Illustration - Clean Transparent Background */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center lg:justify-end">
                <img
                  src="/images/wearable_hero_transparent.png"
                  alt="Wearable App Development Services in USA"
                  className="w-full max-w-[440px] h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Marquee */}
      <BrandLogoMarquee />

      {/* Section 3: Brief About Wearable App Development */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Illustration - Clean Transparent Background */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] flex items-center justify-center">
                <img
                  src="/images/wearable_brief_transparent.png"
                  alt="Brief About Wearable App Development"
                  className="w-full max-w-[380px] h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2
                className="text-slate-900 font-extrabold tracking-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '32px',
                  lineHeight: '40px'
                }}
              >
                Brief About Wearable App <br />Development
              </h2>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[24px] font-normal font-sans">
                We deploy original and creative applications every time because of our expertise in Custom wearable app development and our attention to learning about the potential future. Our staff has years of experience working on various specializations, whether smart watches or glasses, and we have a long list of happy customers to prove it.
              </p>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[24px] font-normal font-sans">
                Our Smart wearable app developers can create a wearable app that functions flawlessly across all platforms. Get in touch with Best wearable app development company to develop your wearable app in no time and at less cost.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                {/* Track 2 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: Build High-Performance Wearable Applications */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Build High-Performance Wearable Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-2xl p-7 sm:p-9 relative flex flex-col justify-between min-h-[260px] border border-sky-100 shadow-sm text-left">
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Connected, Scalable &amp;<br />High-Speed<br />Wearable Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We provide wearable application development services that are lightweight, highly responsive, and strictly compliant with Apple and Google platform guidelines. Our expertise in low-power Bluetooth communication, real-time sensor processing, HealthKit, and Wear OS Tiles ensures your brand delivers frictionless, glanceable user experiences with maximum device battery retention.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Our seasoned wearable engineers have delivered mission-critical wrist applications across fitness tracking, digital healthcare, enterprise logistics, sports telemetry, and contactless mobile payments. Hire Developers for Wearable Application Development who specialize in engineering standalone on-device solutions that set your business apart in the connected tech ecosystem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Premium Services Grid */}
      <div id="services-grid">
        <PremiumServicesGrid />
      </div>

      {/* Section: Success Stories (1:1 Reference Match) */}
      <section className="py-14 sm:py-20 bg-[#EAF5FC] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight font-sans">
              Success Stories
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-slate-700 font-normal leading-relaxed font-sans max-w-2xl mx-auto">
              Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
            {/* Card 1: Healthcare Mobile App Development Company */}
            <div className="flex flex-col group cursor-pointer text-left">
              <div className="relative w-full h-[220px] sm:h-[235px] rounded-[20px] overflow-hidden bg-white p-2 border border-slate-200/80 shadow-sm group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#7DD3FC] text-[#0369A1] text-[11px] font-[800] px-3 py-1 rounded-md shadow-xs">
                  Case Study
                </div>
                <img
                  src="/images/adani.webp"
                  alt="Healthcare Mobile App Development Company"
                  className="w-full h-full object-cover object-bottom rounded-[14px] group-hover:scale-[1.02] transition-transform duration-300 select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-[800] text-slate-900 mt-3.5 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                Healthcare Mobile App Development Company
              </h3>
            </div>

            {/* Card 2: Federal Forecasting App */}
            <div className="flex flex-col group cursor-pointer text-left">
              <div className="w-full h-[220px] sm:h-[235px] rounded-[20px] overflow-hidden bg-white p-2 border border-slate-200/80 shadow-sm group-hover:shadow-md transition-all">
                <img
                  src="/images/federal_forecasting_app.jpg"
                  alt="Federal Forecasting App"
                  className="w-full h-full object-cover rounded-[14px] group-hover:scale-[1.02] transition-transform duration-300 select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-[800] text-slate-900 mt-3.5 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                Federal Forecasting App
              </h3>
            </div>

            {/* Card 3: Stress Management App */}
            <div className="flex flex-col group cursor-pointer text-left">
              <div className="w-full h-[220px] sm:h-[235px] rounded-[20px] overflow-hidden bg-white p-2 border border-slate-200/80 shadow-sm group-hover:shadow-md transition-all">
                <img
                  src="/images/stress_management_app.jpg"
                  alt="Stress Management App"
                  className="w-full h-full object-cover rounded-[14px] group-hover:scale-[1.02] transition-transform duration-300 select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-[800] text-slate-900 mt-3.5 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                Stress Management App
              </h3>
            </div>
          </div>

          {/* Centered 'View All Portfolio' Dark Blue Button */}
          <div className="text-center mb-12 sm:mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[800] text-[14.5px] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Bottom Highlight / Stat Boxes (Purple, Mint Green, Peach, Deep Blue CTA) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {/* Box 1: Purple (23+ Years Experience) */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs h-[120px] hover:shadow-md transition-shadow">
              <div className="text-[34px] sm:text-[38px] font-[900] text-slate-950 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green (320+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A7F3D0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs h-[120px] hover:shadow-md transition-shadow">
              <div className="text-[34px] sm:text-[38px] font-[900] text-slate-950 tracking-tight leading-none mb-1 font-sans">
                320+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral (2800+ Satisfied Clients) */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs h-[120px] hover:shadow-md transition-shadow">
              <div className="text-[34px] sm:text-[38px] font-[900] text-slate-950 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue (Want to start Projects -> Get Estimation) */}
            <div className="bg-[#005F96] rounded-[18px] p-5 text-center flex flex-col justify-center items-center shadow-md h-[120px]">
              <div className="text-[17px] sm:text-[18px] font-[800] text-white tracking-tight leading-tight mb-2.5 font-sans">
                Want to start Projects
              </div>
              <Link
                to="/contact"
                className="bg-white text-[#005F96] hover:bg-slate-50 px-6 py-2 rounded-[6px] font-[800] text-[13px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: The Expertise Of Our Wearable App Developers */}
      <section className="py-16 sm:py-20 bg-[#f2f7fc] text-slate-900 font-sans border-b border-slate-200/70">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
              The Expertise Of Our Wearable App Developers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {expertiseItems.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-[18px] p-7 sm:p-8 border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,95,150,0.14)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden group cursor-pointer flex flex-col text-left select-none"
              >
                {/* Smooth Hover Gradient Fill Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E2F4FD] via-[#D2F0FD] to-[#BCE9FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                {/* Top Animated Gradient Accent Border (Deep Blue -> Cyan) */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#004A75] via-[#0070B3] to-[#38BDF8] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out" />

                {/* Bottom Animated Gradient Accent Border (Cyan -> Deep Blue) */}
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0070B3] to-[#004A75] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-right transition-all duration-500 ease-out" />

                {/* Card Content Layer */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[17.5px] sm:text-[18.5px] font-[700] text-[#111827] mb-3 leading-snug tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#64748B] group-hover:text-slate-700 leading-[1.7] font-normal font-sans transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Proud Awards Banner */}
      <ProudAwardsBanner />

      {/* Section: Benefits Of Wearable App Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
              Benefits Of Wearable App Development Services
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal font-sans">
              Wearable technology enhances business operations, user fitness, and enterprise mobility with instant on-wrist interaction. Six significant advantages of wearable app development services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {wearableBenefitsCards.map((card, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[18px] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,95,150,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left group cursor-default"
              >
                <div className="mb-5 text-[#0084D1] group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.7] font-normal font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 10: Business Friendly Hiring Models (1:1 Reference Match with Exact Icons) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#quote-form"
                  className="w-full py-2.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm transition-all shadow-xs hover:shadow-md font-sans inline-block mt-4 text-center cursor-pointer"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Section 11: InnovativeSolutionsVideoSection */}
      <InnovativeSolutionsVideoSection />

      {/* Section 12: ProcessWeFollow */}
      <ProcessWeFollow />

      {/* Section 13: OurStoryTheirWordsSection */}
      <OurStoryTheirWordsSection />

      {/* Section 14: TrustedBrandsGrid */}
      <TrustedBrandsGrid />

      {/* Section 15: SuccessMatrix */}
      <SuccessMatrix />

      {/* Technology Stack Grid (1:1 Reference Match) */}
      <SapphireTechStackGrid domainName="Wearable" />

      {/* Section 16: FeaturedInBrandsSection */}
      <FeaturedInBrandsSection />

      {/* Section 17: DigitalTransformationSlider */}
      <DigitalTransformationSlider />

      {/* Section 18: SapphireFaqSection */}
      <SapphireFaqSection customFaqs={faqItems} />

      {/* Section 19: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* Section 20: Bottom Blue CTA Banner */}
      <section className="relative w-full max-w-full py-9 sm:py-11 lg:py-12 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
          <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />
          <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
          <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3">
          <h2
            className="text-white tracking-tight leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '32px',
              color: '#FFFFFF'
            }}
          >
            Have Wearable Application Development Company<br />Challenge To Address ?
          </h2>

          <p className="text-xs sm:text-sm md:text-[14.5px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Wearable Application Development Company to transform your ideas into a robust application.
          </p>

          <div className="pt-2">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-[800] text-xs sm:text-sm px-8 py-2.5 rounded-[5px] shadow-md hover:shadow-lg transition-all duration-200 tracking-wide cursor-pointer"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WearableAppDevelopmentService;
