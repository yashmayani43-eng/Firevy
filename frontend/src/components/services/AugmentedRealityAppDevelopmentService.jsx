import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { SapphireSeasonedExpertsSection } from './SapphireSeasonedExpertsSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { TransformativeImpactSection } from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import { SectorsThrivingSection } from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import AndroidComparativeAnalysis from './AndroidComparativeAnalysis';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Glasses,
  Eye,
  Box,
  Compass,
  Monitor,
  Gamepad2,
  Wrench,
  HelpCircle
} from 'lucide-react';

export const AugmentedRealityAppDevelopmentService = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies (Section 8)
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const techScrollContainerRef = useRef(null);

  const cuttingEdgeTechList = [
    {
      title: 'Artificial Intelligence',
      desc: 'Seamlessly integrate smart computer vision and neural object detection into augmented environments.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="8" />
          <path d="M16 24h16M24 16v16" />
          <circle cx="24" cy="24" r="5" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Extended Reality (XR)',
      desc: 'Deliver seamless interoperability between Augmented Reality, Mixed Reality, and full spatial immersion.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 14h36v20H6z" rx="6" />
          <circle cx="17" cy="24" r="5" />
          <circle cx="31" cy="24" r="5" />
          <path d="M22 24h4" />
        </svg>
      )
    },
    {
      title: 'Cross Platform AR',
      desc: 'Deploy single-codebase spatial applications across iOS ARKit, Android ARCore, and Unity engines.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="10" width="18" height="28" rx="3" />
          <rect x="24" y="6" width="18" height="32" rx="3" />
          <circle cx="15" cy="32" r="1.5" fill="currentColor" />
          <circle cx="33" cy="32" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Machine Learning',
      desc: 'Real-time gesture recognition, edge spatial indexing, and intelligent scene classification models.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="5" />
          <circle cx="14" cy="32" r="5" />
          <circle cx="34" cy="32" r="5" />
          <line x1="24" y1="19" x2="14" y2="27" />
          <line x1="24" y1="19" x2="34" y2="27" />
          <line x1="19" y1="32" x2="29" y2="32" />
        </svg>
      )
    },
    {
      title: 'Augmented Reality (AR)',
      desc: 'High-precision SLAM tracking, surface meshing, and photorealistic 3D holographic projection.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,6 42,16 42,32 24,42 6,32 6,16" />
          <line x1="24" y1="6" x2="24" y2="42" />
          <line x1="6" y1="16" x2="42" y2="32" />
          <line x1="6" y1="32" x2="42" y2="16" />
        </svg>
      )
    },
    {
      title: 'Low-Code Spatial Systems',
      desc: 'Rapid AR prototyping and dynamic CMS-driven 3D asset staging pipelines for agile iterations.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 24 16 30" />
          <line x1="26" y1="30" x2="34" y2="30" />
          <rect x="6" y="8" width="36" height="32" rx="4" />
        </svg>
      )
    },
    {
      title: 'Internet of Things (IoT)',
      desc: 'Connect physical sensor telemetry with digital twin AR overlays for smart maintenance and diagnostics.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="6" fill="#0084D1" />
          <path d="M14 14a14 14 0 0 1 20 0M8 8a22 22 0 0 1 32 0" />
        </svg>
      )
    },
    {
      title: 'Cloud Native & 5G Edge',
      desc: 'Ultra-low latency cloud spatial anchoring, remote multi-user AR rendering, and continuous delivery.',
      icon: (
        <svg className="w-9 h-9 text-[#0084D1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 28a8 8 0 0 1 1.5-15.8A12 12 0 0 1 36 18a8 8 0 0 1-2 15.7H12z" />
        </svg>
      )
    }
  ];

  // Auto-scroll loop for Cutting Edge Tech Carousel
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      if (techScrollContainerRef.current) {
        const container = techScrollContainerRef.current;
        const cardWidth = 320;
        const gap = 20;
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  // Section 16: Comprehensive Suite of AR Development Services Cards
  const arServicesSuite = [
    {
      title: 'AR App UI/UX Design',
      desc: 'By considering market trends and spatial design best practices that provide an enhanced immersive user experience, we help you create intuitive, sophisticated, and user-friendly 3D spatial user interfaces.',
      features: ['Spatial Navigation & HUD', 'Gesture-Driven Interactions', 'Contextual 3D Feedback', 'Interactive Onboarding Flow']
    },
    {
      title: 'MVP Development',
      desc: 'By creating an AR MVP with core tracking and interactive capabilities, we validate your market thesis quickly. This enables you to swiftly test real user engagement before committing to full-scale development.',
      features: ['Proof-of-Concept Prototyping', 'Rapid LiDAR / SLAM Testing', 'Core Feature Validation', 'Fast App Store Beta Testing']
    },
    {
      title: 'Custom AR App Development',
      desc: 'Whether you are developing an augmented reality app for enterprise training, retail try-on, or social engagement, we turn your unique concepts into high-performing spatial applications.',
      features: ['Tailored Spatial Computing', 'Proprietary 3D Asset Engines', 'Custom Shader Pipelines', 'Full Brand Integration']
    },
    {
      title: 'Startup AR Solutions',
      desc: 'Our world-class augmented reality solutions empower disruptive startups to launch scalable apps quickly with leading frameworks like ARKit, ARCore, Niantic Lightship, and Unity.',
      features: ['Lean Architecture Sprints', 'Investor-Ready Demos', 'Scalable Cloud Anchors', 'Rapid Go-To-Market Strategy']
    },
    {
      title: 'Enterprise AR Integration',
      desc: 'Enhance your operational efficiency, remote field assistance, and factory floor maintenance by integrating real-time IoT telemetry, ERP systems, and cloud data into AR wearable smart glasses.',
      features: ['Hands-Free Smart Glasses Apps', 'Digital Twin Visualizations', 'Field Inspection Telemetry', 'Enterprise ERP/CRM Connectors']
    },
    {
      title: 'Embedded & IoT AR Solutions',
      desc: 'To monitor, control, and fully exploit your connected IoT environment, get a highly customized spatial computing software solution built with edge machine learning and real-time sensor overlays.',
      features: ['Real-Time Sensor Overlays', 'Beacon-Based Location Triggers', 'Edge Machine Learning', 'Industrial Maintenance Guides']
    }
  ];

  // Section 18: Expertise of Our AR Developers Cards
  const arExpertiseCards = [
    {
      id: 1,
      title: 'AR Mobile Apps',
      desc: 'We leverage the built-in capabilities of mobile devices, such as the camera, GPS, Bluetooth, and LiDAR sensors, to build responsive augmented reality apps using native ARKit, ARCore, and cross-platform engines.'
    },
    {
      id: 2,
      title: 'AR Consultation',
      desc: 'Our augmented reality consultants guide you to the right architecture, hardware platforms, and 3D pipelines so that your organization extracts the maximum ROI and business value from spatial computing.'
    },
    {
      id: 3,
      title: 'AR Cardboard Applications',
      desc: 'Our knowledge enables us to deliver outstanding, cost-effective augmented reality experiences using accessible viewers, cardboard kits, and lightweight smartphone spatial tracking.'
    },
    {
      id: 4,
      title: 'AR Apps For Desktop',
      desc: 'Using high-definition webcams, depth sensors, and spatial computing plugins, we replicate augmented reality experiences on desktop workstations for educational, technical, and architectural workflows.'
    },
    {
      id: 5,
      title: 'AR Game Apps',
      desc: 'Players of our augmented reality games interact with 3D characters, physics simulations, and superimposed digital elements over real-world surroundings in smooth 60 FPS real-time.'
    },
    {
      id: 6,
      title: 'AR Support & Maintenance',
      desc: 'Our dedicated AR maintenance engineering team regularly eliminates bugs, updates SDKs for iOS and Android OS updates, and optimizes 3D asset rendering for smooth continuous performance.'
    }
  ];

  // Section 29: Augmented Reality FAQs (1:1 from Reference)
  const arFaqs = [
    {
      question: 'What is the cost of developing an augmented reality app?',
      answer: 'Depending on the intricacy of the 3D sceneries, physics interactions, and custom 3D models you want to create, the investment varies. Typically, developing an augmented reality MVP for a single operating platform (iOS or Android) ranges between $30,000 to $60,000. Enterprise-grade spatial applications with cloud spatial anchors, LiDAR meshing, and multi-user cross-platform synchronization can scale higher based on custom requirements.'
    },
    {
      question: 'How is augmented reality made?',
      answer: 'Augmented reality superimposes digital 3D computer graphics over real-world environments captured through device cameras. It uses computer vision, Simultaneous Localization and Mapping (SLAM), surface plane detection, and depth sensing to lock virtual objects securely in real-world physical coordinates.'
    },
    {
      question: 'What are the examples of successful AR implementation?',
      answer: 'Prominent examples of AR include Pokémon GO in gaming, IKEA Place and Amazon AR View in retail furniture placement, Sephora Virtual Artist in beauty try-ons, and enterprise maintenance solutions across Boeing and Siemens for hands-free assembly instructions.'
    },
    {
      question: 'How do you create an augmented reality application?',
      answer: 'The development of an augmented reality app follows eight systematic stages: 1. Determining market position and spatial use cases. 2. Architecting business & UX strategy. 3. Selecting the optimal tech stack (ARKit, ARCore, Unity). 4. Defining feature specifications. 5. UI/UX and 3D spatial prototyping. 6. Agile development & sensor integration. 7. Thorough real-world device testing and QA. 8. App Store/Play Store deployment and continuous feature updates.'
    },
    {
      question: 'Why choose Firevy.co for augmented reality (AR) app development?',
      answer: 'Firevy combines deep spatial computing engineering with award-winning creative 3D artistry. We leverage the latest AR SDKs, LiDAR depth sensing, and real-time computer vision to deliver engaging, scalable, and ultra-high-performance AR experiences tailored to your business metrics.'
    },
    {
      question: 'What types of augmented reality apps can Firevy.co develop?',
      answer: 'We develop a wide range of AR solutions including interactive retail try-on apps, educational STEM visualizers, real estate virtual walkthroughs, healthcare surgical simulation tools, industrial digital twins, and location-based AR navigation.'
    },
    {
      question: 'What platforms do you support for AR app development?',
      answer: 'We build AR apps for iOS (ARKit, RealityKit), Android (ARCore), cross-platform mobile frameworks (Flutter, React Native), Unity 3D, Unreal Engine, WebAR (browser-based 8th Wall), and wearable smart glasses including Apple Vision Pro and Meta Quest.'
    },
    {
      question: 'What industries do you serve with Custom AR App Development Services?',
      answer: 'Our enterprise AR solutions cater to retail & ecommerce, healthcare, education, real estate, automotive, logistics, tourism, and industrial manufacturing. We understand industry-specific regulatory constraints and build tailored, secure solutions.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Augmented Reality App Development Services in USA | Firevy.co"
        description="By combining AR with more sophisticated forms of AR Development and ML algorithms, we can develop augmented reality applications. Our team of developers specializing in augmented reality can assist you in giving effect to your most audacious ideas."
        canonical="https://firevy.co/services/augmented-reality-app-development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Reference Match)                                     */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#EFF6FC] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Augmented Reality App<br className="hidden sm:inline" /> Development Services in USA
              </h1>

              <p className="text-[15px] sm:text-[15.5px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                By combining AR with more sophisticated forms of AR Development and ML algorithms, we can develop augmented reality applications. Our team of developers specializing in augmented reality can assist you in giving effect to your most audacious ideas.
              </p>

              {/* 4 Stats matching Image 1 100% (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">80+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Mobile App<br />Developers</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Fortunes 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">800+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Project Completed in<br />Mobile Technology</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button matching Image 1 */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[5px] bg-[#005F96] hover:bg-[#004d7c] text-white text-[15px] font-semibold transition-all duration-200 shadow-none space-x-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Illustration matching Image 1 1:1 */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/augmented_reality_hero.svg"
                  alt="Augmented Reality App Development Services in USA"
                  className="w-full h-auto object-contain"
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
      {/* 3. OVERVIEW 1: AR App Development Services (Image Left + Text Right)      */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[450px]">
                <img
                  src="/images/augmented_reality_about.svg"
                  alt="Augmented Reality App Development Services"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Augmented Reality App Development Services
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                It has become clear that augmented reality apps may be used for more than simply amusement. AR technology has become a driving force behind the success of manufacturing firms, medical facilities, fintech organizations, merchants, and consumer apps by creatively solving complicated business issues.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As a Best Augmented Reality App Development Company, our Augmented Reality Mobile App Development Experts will identify the most beneficial solution to satisfy your company's requirements since they have expertise in several domains and an in-depth understanding of cutting-edge augmented reality development technology.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. OVERVIEW 2: Brief About AR Development (Text Left + Image Right)       */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Brief About Our Augmented Reality App Development
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                When you employ our augmented reality (AR) developers, you won't have to worry about 3D modeling, rigging and animation, SLAM tracking, marker-less and marker-based tracking, and a wide variety of other creative components.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As an Augmented Reality Company, we guarantee that our augmented reality mobile app development solutions will help you attract and engage the audience you seek. You can outperform your rivals and establish a higher brand value if you get greater exposure.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[450px]">
                <img
                  src="/images/augmented_reality_brief.svg"
                  alt="Brief About Augmented Reality App Development"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLUTCH & GOODFIRMS TOP RATED RIBBON                                    */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 6. GET A 100% CUSTOMIZABLE AUGMENTED REALITY APP DEVELOPMENT BY EXPERTS   */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get A 100% Customizable Augmented Reality App Development<br className="hidden sm:inline" /> By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card with Exact Background Image & Quotation Mark */}
            <div className="lg:col-span-4 relative bg-[#F0F8FF] p-7 sm:p-9 flex flex-col justify-start min-h-[290px] overflow-visible select-none">
              {/* Exact Shape Pattern WebP Background */}
              <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
                <img
                  src="/images/shape_pattern.webp"
                  alt="Pattern background"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Speech Bubble Arrow on Right (Desktop Only) matching Image 1 */}
              <div className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FF] z-20 pointer-events-none" />

              {/* Exact Quotation Mark SVG */}
              <div className="mb-4 relative z-10">
                <img
                  src="/images/quotation_mark.svg"
                  alt="Quotation mark"
                  className="w-[52px] h-[49px]"
                />
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[25px] sm:text-[27px] lg:text-[29px] font-bold text-[#005d89] tracking-tight leading-[1.28] relative z-10 text-left">
                Customized Apps,<br />
                Flexible Payment,<br />
                Sleek Design
              </h3>
            </div>

            {/* Right Column: Paragraph Content matching Image 1 1:1 */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can hire augmented reality developers with years of proven expertise in building best-in-industry custom android augmented reality apps, iOS- iPad/iPhone AR apps, and wearable devices offering robust backend and friendly user interface to attract and engage your target audience and accomplish your goals. The group's primary objective is to provide cutting-edge Immersive AR app design and development services for various business sectors.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our augmented reality mobile apps run faultlessly on all compatible devices, including AR headsets, smart glasses, smart lenses, tablets, smartphones, and other compatible devices. You will ultimately be able to reach a wider audience if you Hire AR Developers from us.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. THREE KEY AR CAPABILITIES CARDS                                        */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Box className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Immersive 3D Experiences</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Photorealistic 3D asset modeling, dynamic lighting estimation, and physically based rendering that make virtual assets blend naturally with physical environments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Real-Time Spatial Mapping & SLAM</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Simultaneous Localization and Mapping with instant plane detection, vertical wall anchoring, and LiDAR environmental depth meshing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFE] border border-slate-200/80 hover:border-[#005F96]/40 hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#005F96]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Cross-Platform Compatibility</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineered for maximum reach across Apple iOS, Google Android, WebAR browsers, and next-generation smart glasses headsets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. CUTTING EDGE TECHNOLOGIES WE USE                                       */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
              Cutting Edge Technologies We Use
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We leverage future-ready technological frameworks to engineer responsive, scalable, and immersive AR software.
            </p>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div
            ref={techScrollContainerRef}
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
            className="flex items-stretch space-x-5 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {cuttingEdgeTechList.map((item, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[310px] shrink-0 p-6 rounded-2xl bg-[#EFF7FE] border border-blue-100/90 shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-xs border border-blue-100/60">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR PREMIUM SERVICES GRID                                              */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 10. SEASONED AR APP DEVELOPERS / EXPERTS TEAM                             */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS                                             */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Augmented Reality App Development" />

      {/* ========================================================================= */}
      {/* 12. TRANSFORMATIVE IMPACT / BENEFITS (8 PASTEL CARDS)                     */}
      {/* ========================================================================= */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Augmented Reality On Your Business Success" />

      {/* ========================================================================= */}
      {/* 13. ABOUT US STATS (100% On-Time, 20+ Yrs, 450+ Devs, 98% CSAT)          */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 14. SECTORS THRIVING ON AR APP DEVELOPMENT                                */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving On Augmented Reality App Development Solutions" />

      {/* ========================================================================= */}
      {/* 15. SUCCESS STORIES SECTION                                               */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 16. COMPREHENSIVE SUITE OF AR APP DEVELOPMENT SERVICES                    */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
              Firevy’s Comprehensive Suite of Augmented Reality App Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Firevy developers thrive at developing compelling augmented reality applications by utilizing our knowledge of the latest spatial frameworks. We provide full-service AR development customized to meet your exact specifications.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {arServicesSuite.map((service, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#EFF7FE] border border-blue-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-[#005F96] font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-blue-100/60">
                  {service.features.map((feat, featIdx) => (
                    <div key={featIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005F96] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK THAT DEVELOPERS USE PROFICIENTLY                     */}
      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection title="Technology Stack That Firevy AR Developers Use Proficiently" />

      {/* ========================================================================= */}
      {/* 18. THE EXPERTISE OF OUR AR APP DEVELOPERS                                */}
      {/* ========================================================================= */}
      <HybridAppExpertiseServices
        title="The Expertise Of Our Augmented Reality App Developers"
        subtitle="Contact us now to avail the expertise of our Augmented reality app developers. Their expertise includes:"
        cards={arExpertiseCards}
      />

      {/* ========================================================================= */}
      {/* 19. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 20. COMPARATIVE ANALYSIS                                                  */}
      {/* ========================================================================= */}
      <AndroidComparativeAnalysis />

      {/* ========================================================================= */}
      {/* 21. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 22. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 23. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 24. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 25. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 26. WHAT OUR CLIENTS SAY                                                  */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 27. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 28. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 29. FREQUENTLY ASKED QUESTIONS (8 AR FAQS)                                */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={arFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 30. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 31. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 32. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Augmented Reality App Development Challenge To Address ?"
          subtitle="Get access to top Augmented reality app developers to transform your ideas into a robust application."
          buttonText="Hire Now"
        />
      </div>
    </div>
  );
};

export default AugmentedRealityAppDevelopmentService;
