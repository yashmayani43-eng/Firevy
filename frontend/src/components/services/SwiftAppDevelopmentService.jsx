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

export const SwiftAppDevelopmentService = () => {
  // Benefits Of Swift App Development Services (6 items matching design)
  const swiftBenefitsCards = [
    {
      title: 'Safe and reliable',
      desc: "Runtime crashes and memory leaks are reduced via optional type inference and memory management. Swift's robust type system lets developers identify compile-time problems, making apps more reliable and resilient.",
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Layered Shield */}
          <path d="M24 5 L37 10 V22 C37 32 24 40 24 40 C24 40 11 32 11 22 V10 Z" />
          {/* Thumbs Up inside shield */}
          <path d="M20 28 V20 C20 18.5 21 16 23 14 C24.5 12.5 25 10.5 25 10.5 C25 10.5 26 11.5 26 13.5 C26 15.5 25 17.5 25 18.5 H30.5 C32 18.5 32.8 19.5 32.4 21 L30.5 27.5 C30 29 28.8 30 27.2 30 H21.8 C20.8 30 20 29.1 20 28 Z" />
          <path d="M16 20 H20 V30 H16 C15 30 14 29.1 14 28 V22 C14 20.9 15 20 16 20 Z" />
        </svg>
      )
    },
    {
      title: 'Optimizing Performance',
      desc: "Swift's sophisticated syntax and compiler optimizations speed up performance and decrease memory overhead. This speed increase improves user experiences, app startup times, and responsiveness, especially for resource-intensive operations.",
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Browser / Monitor Window */}
          <rect x="7" y="11" width="31" height="26" rx="3" />
          <line x1="7" y1="18" x2="38" y2="18" />
          <circle cx="12" cy="14.5" r="0.8" fill="currentColor" />
          <circle cx="16" cy="14.5" r="0.8" fill="currentColor" />
          {/* Speedometer Gauge Inside */}
          <path d="M14 31 A8.5 8.5 0 0 1 31 31" />
          <line x1="22.5" y1="31" x2="27.5" y2="24.5" />
          <circle cx="22.5" cy="31" r="1.5" fill="currentColor" />
          {/* Cogwheel / Gear at Top Right */}
          <g transform="translate(30, 4) scale(0.65)">
            <circle cx="12" cy="12" r="5" strokeWidth="2.8" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" strokeWidth="2.8" />
          </g>
        </svg>
      )
    },
    {
      title: 'Interoperability with Objective-C',
      desc: 'Swift integrates smoothly with Objective-C codebases and you can use old libraries and frameworks while switching to Swift. Using Swift and Objective-C in the same project makes the Swift transition more accessible and more versatile.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Primary Code Window */}
          <rect x="6" y="8" width="28" height="25" rx="3" />
          <line x1="6" y1="15" x2="34" y2="15" />
          <circle cx="11" cy="11.5" r="0.8" fill="currentColor" />
          <circle cx="15" cy="11.5" r="0.8" fill="currentColor" />
          {/* Code Brackets </> */}
          <path d="M14 20.5 L11 23.5 L14 26.5" />
          <path d="M23 20.5 L26 23.5 L23 26.5" />
          <line x1="20" y1="19.5" x2="17" y2="27.5" />
          {/* Secondary Objective-C / Sub-window badge on bottom right */}
          <rect x="22" y="21" width="20" height="19" rx="2.5" fill="white" stroke="currentColor" strokeWidth="2.2" />
          <line x1="22" y1="27" x2="42" y2="27" />
          {/* Objective-C "C" shape inside */}
          <path d="M35 34 C35 31.8 33.2 30.5 31 30.5 C28.5 30.5 27 32.5 27 34.5 C27 36.5 28.5 38.5 31 38.5 C33.2 38.5 35 37.2 35 35" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Better Productivity',
      desc: "Swift playgrounds speed up development and testing by letting developers experiment with code in real-time and observe outcomes. Swift's robust type system and compile-time checks discover problems early, decreasing debugging time and boosting code quality.",
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Ascending Stairs / Bars */}
          <rect x="6" y="33" width="6" height="9" rx="1" />
          <rect x="15" y="27" width="6" height="15" rx="1" />
          <rect x="24" y="21" width="6" height="21" rx="1" />
          <rect x="33" y="15" width="6" height="27" rx="1" />
          {/* Climbing Person */}
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
      title: 'Efficiency',
      desc: 'Because it was designed with performance in mind, it frequently outperforms Objective-C. Swift produces effective machine code with its optimized compiler and modern runtime, which leads to improved overall performance.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Base line */}
          <line x1="8" y1="41" x2="40" y2="41" />
          {/* 3 Pillar columns */}
          <path d="M12 41 V25 M17 41 V25" />
          <path d="M21 41 V21 M27 41 V21" />
          <path d="M31 41 V25 M36 41 V25" />
          {/* Center Gear */}
          <circle cx="24" cy="14" r="5.5" />
          <circle cx="24" cy="14" r="2" fill="currentColor" />
          <path d="M24 6.5 V8.5 M24 19.5 V21.5 M16.5 14 H18.5 M29.5 14 H31.5 M18.7 8.7 L20.1 10.1 M27.9 17.9 L29.3 19.3 M18.7 19.3 L20.1 17.9 M27.9 10.1 L29.3 8.7" />
          {/* Left Gear */}
          <circle cx="14.5" cy="19.5" r="4" />
          <path d="M14.5 13.5 V15.5 M14.5 23.5 V25.5 M8.5 19.5 H10.5 M18.5 19.5 H20.5" />
          {/* Right Gear */}
          <circle cx="33.5" cy="19.5" r="4" />
          <path d="M33.5 13.5 V15.5 M33.5 23.5 V25.5 M27.5 19.5 H29.5 M37.5 19.5 H39.5" />
        </svg>
      )
    },
    {
      title: 'Community Support',
      desc: 'Swift will lead iOS app development, giving developers access to the newest features and capabilities. A large community of Swift developers contribute libraries, frameworks, and resources to the ecosystem.',
      icon: (
        <svg className="w-11 h-11 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Heart Contour */}
          <path d="M24 33 C24 33 12 26 12 16.5 C12 12 15.5 8.5 20 8.5 C22.5 8.5 23.6 9.8 24 10.5 C24.4 9.8 25.5 8.5 28 8.5 C32.5 8.5 36 12 36 16.5 C36 26 24 33 24 33 Z" />
          {/* 3 People Silhouette Group Inside */}
          {/* Center Person */}
          <circle cx="24" cy="15" r="2.2" />
          <path d="M20.5 22.5 C20.5 20.2 22 19 24 19 C26 19 27.5 20.2 27.5 22.5" />
          {/* Left Person */}
          <circle cx="17.5" cy="17.5" r="1.8" />
          <path d="M14.5 24.5 C14.5 22.8 15.5 21.8 17.5 21.8 C18.5 21.8 19.3 22.2 19.8 23" />
          {/* Right Person */}
          <circle cx="30.5" cy="17.5" r="1.8" />
          <path d="M28.2 23 C28.7 22.2 29.5 21.8 30.5 21.8 C32.5 21.8 33.5 22.8 33.5 24.5" />
          {/* Two Supporting Hands at Bottom */}
          <path d="M11 30 C11 30 13.5 37 18 39 H23" />
          <path d="M37 30 C37 30 34.5 37 30 39 H25" />
        </svg>
      )
    }
  ];

  // The Expertise Of Our Swift App Development (6 items matching design)
  const expertiseItems = [
    {
      title: 'Swift App Designing',
      desc: 'Our creative team develops attractive, intuitive, and highly interactive Swift-based iOS apps that stand out in the Apple App Store. These applications are built using the Swift programming language.',
      iconBg: 'bg-[#F2EBFB]',
      iconColor: 'text-[#9333EA]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <path d="M12 15V11 M12 11C12 9 10 8 9 9C8 10 9 12 12 11ZM12 11C12 9 14 8 15 9C16 10 15 12 12 11Z" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      title: 'Swift Migration Services',
      desc: 'You can hire Swift app developers in Canada or get Swift Mobile Application Development Services if you want to migrate any existing applications to swift.',
      iconBg: 'bg-[#E7F8EE]',
      iconColor: 'text-[#16A34A]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <polyline points="9 14 12 17 15 14" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      )
    },
    {
      title: 'Custom IOS Swift Development',
      desc: 'We provide various bespoke iOS Swift development services in Canada, all aimed at meeting specific business needs and long-term goals by concentrating on fundamental technological processes.',
      iconBg: 'bg-[#FDF0E7]',
      iconColor: 'text-[#EA580C]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="3" />
          <line x1="8" y1="8" x2="13" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="14" y2="16" />
        </svg>
      )
    },
    {
      title: 'Swift Enterprise Application',
      desc: 'We provide Swift apps suitable for corporate use by integrating cutting-edge technologies like AI and ML to help ERPs and CRMs work more effectively and serve their intended purposes.',
      iconBg: 'bg-[#FEF8E7]',
      iconColor: 'text-[#D97706]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M13 21V11l6-4v14" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
          <line x1="9" y1="13" x2="9.01" y2="13" strokeWidth="2.5" />
          <line x1="9" y1="17" x2="9.01" y2="17" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Swift App Testing And Porting',
      desc: 'Our extensive Swift app testing and porting services are an additional benefit that makes your swift application bug free.',
      iconBg: 'bg-[#FDECEF]',
      iconColor: 'text-[#E11D48]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="3" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      title: 'Swift App Consultation',
      desc: 'Whether you need help with app development or need to take expert suggestions in choosing the right tech stack, our Swift app consultation caters to all your needs.',
      iconBg: 'bg-[#E7F6FD]',
      iconColor: 'text-[#0284C7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="3" />
          <line x1="12" y1="8" x2="12" y2="13" />
          <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2.5" />
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

  // 6 FAQ Items
  const faqItems = [
    {
      question: 'Why choose Swift for native iOS application development?',
      answer: 'Swift delivers blazing-fast compilation, modern safety features, memory safety with ARC, cleaner syntax, and first-class support for latest Apple hardware and APIs like SwiftUI, CoreML, and Metal.'
    },
    {
      question: 'Can you migrate our existing Objective-C app to Swift?',
      answer: 'Yes! We specialize in modular, incremental migration from Objective-C to Swift, maintaining backward compatibility while modernizing your codebase with modern patterns and SwiftUI views.'
    },
    {
      question: 'How do you ensure smooth App Store review and approval?',
      answer: 'Our senior engineers follow Apple Human Interface Guidelines and App Store Review Guidelines strictly, performing rigorous TestFlight QA, privacy manifest checks, and security audits before final submission.'
    },
    {
      question: 'How long does it take to develop a custom Swift application?',
      answer: 'A standard feature-complete Swift MVP typically takes 8 to 12 weeks from UI/UX design to final App Store deployment, depending on architectural complexity and API integrations.'
    },
    {
      question: 'Can a single Swift codebase support iPhone, iPad, Apple Watch, and Mac?',
      answer: 'Yes! Utilizing SwiftUI and multi-target Xcode architectures, we share up to 80% of business logic, networking, and data layers across iOS, iPadOS, watchOS, and macOS apps.'
    },
    {
      question: 'Do you provide continuous maintenance and OS version updates?',
      answer: 'Yes, we provide SLA-backed maintenance packages including annual major iOS version compatibility upgrades, Xcode toolchain updates, performance monitoring, and bug fixes.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      <SEO
        title="Swift App Development Services | Custom iOS & Swift Application Development"
        description="Premier Swift App Development Company. Build robust, high-performance native iOS, iPadOS, and watchOS applications with modern Swift and SwiftUI."
        canonical="/services/swift-app-development"
        keywords="swift app development, swift ios development, hire swift developers, swiftui app development, native ios apps"
      />

      {/* Section 1: Hero Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#f8fafc] overflow-hidden border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 font-black tracking-tight"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  lineHeight: '1.2'
                }}
              >
                Swift Application<br />Development Company
              </h1>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[22px] font-normal max-w-2xl font-sans">
                We excel in creating Swift Applications that are robust, high-performance, and customized for Apple ecosystem platforms. Starting from custom Swift iOS app development services to enterprise Swift app development, our solutions are engineered for fluid UX, maximum speed, and Apple design standards. Get in touch with us today to hire Swift application developers and avail free consultation for your project.
              </p>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-3 pb-2">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Software<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Project Completed in<br />Software
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>

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

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-xl overflow-hidden flex items-center justify-center lg:justify-end">
                <img
                  src="/images/swift_hero_monitor.png"
                  alt="Swift Application Development Company Illustration"
                  className="w-full max-w-[540px] h-auto object-contain drop-shadow-sm select-none pointer-events-none"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Marquee */}
      <BrandLogoMarquee />

      {/* Section 3: Trusted Experts In Swift Application Development */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-md flex items-center justify-center">
                <img
                  src="/images/swift_remote_developers.png"
                  alt="Trusted Experts In Swift Application Development"
                  className="w-full max-w-[420px] h-auto object-contain block drop-shadow-sm select-none pointer-events-none"
                  style={{ mixBlendMode: 'multiply' }}
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
                Trusted Experts In Swift <br />Application Development
              </h2>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[24px] font-normal font-sans">
                As a top Swift Application Development Company, we apply years of experience in designing secure, scalable, and intuitive Apple ecosystem applications. Our expertise includes iOS Swift apps, iPadOS solutions, macOS desktop software, and watchOS integrations for startups, growing brands, and enterprises. Through clean architecture, contemporary Swift UI/UIKit design, and strict adherence to Apple guidelines, we enable businesses to deploy apps users love and trust.
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
                  {/* Badge 1: Golden Trophy with Laurel Wreath */}
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

                  {/* Badge 2 */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 3 */}
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 4 */}
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 5 */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 6 */}
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

      {/* Section 5: Build High-Performance Swift Applications */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Build High-Performance Swift Applications
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
                Native, Scalable &amp;<br />High-Speed<br />iOS Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We provide Swift application development services that are fast, intuitive, and compliant with Apple standards of security and design. Our expertise in Swift concurrency, memory optimization, CoreData, and SwiftUI ensures businesses deliver delightful user experiences with superior device performance.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Our seasoned iOS developers have delivered mission-critical applications across retail, healthcare, fintech, and enterprise automation. Hire Developers for Swift Application Development who specialize in architecting native iOS solutions that empower startups and enterprises to lead the digital market.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Premium Services Grid */}
      <div id="services-grid">
        <PremiumServicesGrid />
      </div>

      {/* Section: The Expertise Of Our Swift App Development */}
      <section className="py-16 sm:py-20 bg-[#f2f7fc] text-slate-900 font-sans border-b border-slate-200/70">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
              The Expertise Of Our Swift App Development
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

      {/* Section: Benefits Of Swift App Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
              Benefits Of Swift App Development Services
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal font-sans">
              Apple created Swift, a sophisticated and contemporary programming language for iOS, macOS, watchOS, and tvOS apps. Swift app development has six significant advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {swiftBenefitsCards.map((card, idx) => (
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

      {/* Section 12: Business Friendly Hiring Models */}
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

      {/* Section 13: InnovativeSolutionsVideoSection */}
      <InnovativeSolutionsVideoSection />

      {/* Section 14: ProcessWeFollow */}
      <ProcessWeFollow />

      {/* Section 15: OurStoryTheirWordsSection */}
      <OurStoryTheirWordsSection />

      {/* Section 16: TrustedBrandsGrid */}
      <TrustedBrandsGrid />

      {/* Section 17: SuccessMatrix */}
      <SuccessMatrix />

      {/* Section 18: FeaturedInBrandsSection */}
      <FeaturedInBrandsSection />

      {/* Section 19: DigitalTransformationSlider */}
      <DigitalTransformationSlider />

      {/* Section 20: SapphireFaqSection */}
      <SapphireFaqSection customFaqs={faqItems} />

      {/* Section 21: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* Section 22: Bottom Blue CTA Banner */}
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
            Have Swift Application Development Company<br />Challenge To Address ?
          </h2>

          <p className="text-xs sm:text-sm md:text-[14.5px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Swift Application Development Company to transform your ideas into a robust application.
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

export default SwiftAppDevelopmentService;
