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
  ArrowRight
} from 'lucide-react';

export const PrototypeDevelopmentService = () => {

  // 1. The Expertise Of Our Prototype Development Services (6 cards)
  const prototypeExpertiseCards = [
    {
      title: 'Prototype App Development',
      desc: 'A static prototype is a series of static pictures that illustrates the appearance of your product and its functionalities. Our Prototype App Development Services will allow you to create prototypes for apps in no time and effort.',
      bg: 'bg-[#EFEAFF]',
      icon: (
        <img
          src="/images/prototype_development_services/icons/prototype_development_ic_1.svg"
          alt="Prototype App Development"
          className="w-7 h-7 object-contain"
        />
      )
    },
    {
      title: 'Interactive Prototyping',
      desc: "Interactive, clickable prototyping enables the user to test the game's functionality and connected components. With its interactive prototype game development, we establish the replies to each conceivable user contact with the application and the foundation for your Minimum Viable Product's success.",
      bg: 'bg-[#E5F7E8]',
      icon: (
        <img
          src="/images/prototype_development_services/icons/prototype_development_ic_2.svg"
          alt="Interactive Prototyping"
          className="w-7 h-7 object-contain"
        />
      )
    },
    {
      title: 'Rapid Prototype Development',
      desc: 'Rapid prototype development requires little work and time. Typically, a prototype has a lifetime of one Agile sprint. Thus, this sort of prototyping may be used to test various concepts and rapidly integrate audience response into the next prototype.',
      bg: 'bg-[#FEEFEA]',
      icon: (
        <img
          src="/images/prototype_development_services/icons/prototype_development_ic_3.svg"
          alt="Rapid Prototype Development"
          className="w-7 h-7 object-contain"
        />
      )
    },
    {
      title: 'Product Prototype Software',
      desc: 'When constructing a product prototype, we begin with a product that fulfills our understanding of the criteria. While its first iteration will fall short of your expectations for the result, subsequent iterations will enhance the product with each new stage using the prototype web development.',
      bg: 'bg-[#FEF8E4]',
      icon: (
        <img
          src="/images/prototype_development_services/icons/prototype_development_ic_4.svg"
          alt="Product Prototype Software"
          className="w-7 h-7 object-contain"
        />
      )
    },
    {
      title: 'Incremental Prototyping',
      desc: "We suggest interactive prototyping for your company software with several modules that may operate reasonably independently. We can concurrently develop a prototype website for the software's most essential elements.",
      bg: 'bg-[#FCE8F0]',
      icon: (
        <img
          src="/images/prototype_development_services/icons/prototype_development_ic_5.svg"
          alt="Incremental Prototyping"
          className="w-7 h-7 object-contain"
        />
      )
    },
    {
      title: 'Extreme Prototyping',
      desc: 'Extreme prototyping is prevalent in Web development and consists of three phases that share the user interface and services layer as essential components. Included in the services layer are business logic, communication, and authorization. Our Prototype Development Agency helps you save both time and money.',
      bg: 'bg-[#E5F5FD]',
      icon: (
        <img
          src="/images/prototype_development_services/icons/prototype_development_ic_6.svg"
          alt="Extreme Prototyping"
          className="w-7 h-7 object-contain"
        />
      )
    }
  ];

  // 2. Benefits of Prototype Development Services (6 cards)
  const prototypeBenefitsData = [
    {
      title: 'Reduce Risk',
      desc: 'Businesses may test design, functionality, and usability before investing in full-scale manufacturing by building a physical prototype. This eliminates expensive changes and ensures the final product satisfies quality and consumer expectations.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/prototypedev/reducerisk.png"
          alt="Reduce Risk"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      title: 'Better Communication',
      desc: 'Designers, engineers, developers, and clients communicate well using prototypes and concretize the product idea, improving comprehension and feedback. Improved communication aligns everyone’s vision and expectations.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/prototypedev/bettercommunication.png"
          alt="Better Communication"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      title: 'Improved User Feedback',
      desc: 'Users can evaluate usability, design, and functioning by using a functional prototype. This input helps designers make educated choices, improve user experience, and satisfy market demands and preferences.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/prototypedev/improveduserfeedback.png"
          alt="Improved User Feedback"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      title: 'Quicker Market Entry',
      desc: 'Businesses can rapidly discover and fix problems using prototypes’ fast iteration and testing. This speeds up product development and launch. Businesses can speed up development, decrease delays, and gain a competitive advantage.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/prototypedev/quickermarketentry.png"
          alt="Quicker Market Entry"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      title: 'Cost-effectiveness',
      desc: 'Investing in prototype development might save money over time. Businesses may prevent costly design revisions and manufacturing errors by recognizing and fixing concerns early. Prototyping optimizes resources, making the final product cost-effective and efficient.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/prototypedev/costeffectiveness.png"
          alt="Cost-effectiveness"
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      title: 'Innovation, Creativity',
      desc: 'Designers and engineers may test new ideas and concepts using prototypes, encouraging innovation and creativity. The iterative nature of prototyping encourages ongoing improvement and discovery, resulting in distinctive and inventive products.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/prototypedev/innovationcreativity.png"
          alt="Innovation, Creativity"
          className="w-10 h-10 object-contain"
        />
      )
    }
  ];

  // 3. FAQ List tailored specifically for Prototype Development Services
  const prototypeFaqList = [
    {
      id: 1,
      question: 'What is the price of creating a prototype?',
      answer: 'Our vast experience dealing with startups and enterprises across sectors has taught us that prototype scope varies based on fidelity, interactivity, and platforms. Contact our technical architects for an accurate, transparent estimation tailored to your project.'
    },
    {
      id: 2,
      question: 'Should I invest in the development of a mobile application prototype?',
      answer: 'Yes! Over 40% of digital products fail because they rushed into costly coding before validating market demand and user behavior. Prototyping de-risks your entire capital investment by proving usability and value upfront.'
    },
    {
      id: 3,
      question: 'How can a prototype assist actual users in verifying an idea?',
      answer: 'As part of our software prototyping services, we assist you in validating concepts with actual users that fit your ideal persona profile. User testing sessions yield vital insights into friction points, navigation flows, and feature priorities.'
    },
    {
      id: 4,
      question: 'What deliverables do we receive at the end of a prototype engagement?',
      answer: 'You receive clickable high-fidelity prototypes (Figma/Adobe XD), interactive proof-of-concept builds, functional technical requirement documents (PRD), design tokens, and an architectural development roadmap for the engineering team.'
    },
    {
      id: 5,
      question: 'What makes Firevy a trusted provider of prototype development services?',
      answer: 'With 23+ years of IT expertise, 1,500+ delivered projects, and 2,800+ global clients including Fortune 500 enterprises, Firevy delivers industry-leading rapid prototyping that accelerates funding and product-market fit.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Prototype Development Services in USA | Prototype Development Company | Firevy.Co"
        description="Firevy offers top prototype development services in USA. Interactive prototyping, rapid MVP prototyping, clickable mobile/web wireframes, UI/UX architecture, and functional proof-of-concepts."
        keywords="prototype development services, prototype development company in usa, prototype app development, interactive prototyping, rapid prototype development, incremental prototyping, prototype software development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]"
              >
                Prototype Development Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Before introducing a new product or service, it is essential to include the input of all stakeholders, including consumers, investors, and other users.
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

            {/* Right Hero Vector / Banner SVG Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/prototype_development_services/images/prototype_development_banner.svg"
                  alt="Prototype Development Services in USA"
                  className="w-full h-auto object-contain max-h-[400px]"
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
      {/* 2. OFFERING PROTOTYPE SOFTWARE DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/prototype_development_services/images/prototype_development_section_1.svg"
                  alt="Offering Prototype Software Development Services"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Offering Prototype Software <br />
                Development Services
              </h2>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Blueprint documents and static sketches often fail to elicit genuine user insights. Interactive product prototype development creates a testable beta version of your application that stakeholders and early adopters can evaluate in real time. Our <Link to="/services/application-services" className="text-[#005F96] hover:underline font-semibold">custom application development company</Link> specializes in rapid prototype design, utilizing pre-built components and time-tested design frameworks to build scalable prototypes ready for full engineering.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT PROTOTYPE DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.2] font-sans">
                Brief About Prototype <br />
                Development Services
              </h2>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                To accelerate product innovation, our methodology establishes a transparent, iterative, and high-velocity delivery cadence. We merge user journey mapping, design thinking, and Agile sprints to transform untested assumptions into validated product specifications.
              </p>

              <p className="text-[#475569] text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                From conceptual wireframes through clickable prototypes, usability testing, and development handoffs, our dedicated prototype engineers give startups and enterprises the competitive speed needed to capture market opportunities.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/prototype_development_services/images/prototype_development_about.svg"
                  alt="Brief About Prototype Development Services"
                  className="w-full h-auto object-contain max-h-[380px]"
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
      {/* 5. GET 100% CUSTOMIZABLE PROTOTYPE DEVELOPMENT BY EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Prototype Development By Experts
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
                Reliable And User-Friendly Prototyping
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Regardless of your idea's complexity, we provide rapid, high-fidelity prototypes that leave investors and stakeholders thoroughly impressed. Our prototyping specialists combine intuitive user flows, polished UI mockups, and interactive clickable states into testable assets.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Every venture and market niche is unique. We tailor our product design, UX architecture, and proof-of-concept modeling to fit your exact goals. Partner with our prototype development team to de-risk development, optimize budgets, and accelerate time-to-market.
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
      {/* 7. SUCCESS STORIES + 4 STAT BOXES (SAME TO SAME 1:1 REFERENCE) */}
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
      {/* 8. THE EXPERTISE OF OUR PROTOTYPE APP DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              The Expertise Of Our Prototype App Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              We have a team to construct transparent and user-friendly software for prototyping software and website development services. Our expertise include:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid with Exact Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {prototypeExpertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="prototype-expertise-card p-7 sm:p-8 flex flex-col justify-start text-left group"
              >
                <div className="relative z-10">
                  <div className={`w-[54px] h-[54px] rounded-[10px] ${card.bg} flex items-center justify-center mb-5`}>
                    {card.icon}
                  </div>
                  <h3 className="font-[800] text-[#0B0F19] group-hover:text-[#005D89] text-[18px] sm:text-[19px] leading-[1.3] mb-3 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#555555] text-[13.5px] sm:text-[14px] leading-[1.75] font-[400]">
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
      {/* 9. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF PROTOTYPE DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Prototype Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Prototype development services help companies create, evaluate ideas, and expedite product development. Here are the major benefits:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {prototypeBenefitsData.map((card, idx) => (
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
      {/* 11. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 12. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 14. OUR STORY, THEIR WORDS */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 15. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 16. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="Prototype development" />

      {/* ========================================================================= */}
      {/* 18. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={prototypeFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to your requirements and provide solutions that captivate users. Feel free to contact our prototyping specialists for any custom inquiry."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS PROTOTYPE DEVELOPMENT COMPANY */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Prototype Development Company?"
        subtitle="Being unique is our quality! Firevy Solutions delivers tailored, high-performance prototype architecture with automated workflows, real-time feedback loops, and frictionless design-to-code execution. We are a renowned custom software organization serving clients with end-to-end support."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP PROTOTYPE DEVELOPERS (CTA BANNER) */}
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
            Get access to top Prototype Development Services to transform your ideas into an interactive, testable application.
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
      {/* 24. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default PrototypeDevelopmentService;
