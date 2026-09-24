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

export const VirtualRealityAppDevelopmentService = () => {

  // 1. The Expertise Of Our Virtual Reality App Developers (6 cards matching layout)
  const vrExpertiseCards = [
    {
      title: 'VR Integration And Deployment',
      desc: 'Want to increase the effectiveness of your app and enhance user performance? We offer Virtual Reality Software Development tailored to unique company requirements. Using VR integration and deployment solutions, you may implement virtual reality in various work-related systems.',
      bg: 'bg-[#F3E8FF]',
      icon: '/images/vr_icons/vr_ic_1.svg'
    },
    {
      title: '3D Walkthroughs & Spatial Tours',
      desc: 'Attract potential consumers and investors with a 3D tour that provides an insight into what the finished project will include. It may assist clients in seeing the items and their attributes while allowing them to control their movement with real-time freedom.',
      bg: 'bg-[#DCFCE7]',
      icon: '/images/vr_icons/vr_ic_2.svg'
    },
    {
      title: 'Support & Maintenance',
      desc: 'Our virtual reality developers are always available to assist with the maintenance and upkeep of your applications, ensuring that any technical difficulties are fixed swiftly. You may contact our support staff around the clock for application-related issues.',
      bg: 'bg-[#FFEDD5]',
      icon: '/images/vr_icons/vr_ic_3.svg'
    },
    {
      title: 'Presentation And Sales Showrooms',
      desc: 'VR is a fantastic tool for firms who wish to advertise their goods with compelling product presentations. We design applications that aid companies in sales training and allow prospective customers to test your items before making a purchase virtually.',
      bg: 'bg-[#FEF9C3]',
      icon: '/images/vr_icons/vr_ic_4.svg'
    },
    {
      title: 'Custom VR App Development',
      desc: 'From high-fidelity interactive physics simulations to multiplayer collaborative spatial environments, our engineers construct tailor-made VR experiences compatible across Oculus Meta Quest, HTC Vive, and Apple Vision Pro headsets.',
      bg: 'bg-[#FCE7F3]',
      icon: '/images/vr_icons/vr_ic_5.svg'
    },
    {
      title: 'VR Training & Simulation Systems',
      desc: 'Deliver hyper-realistic industrial, flight, and medical emergency scenarios in safe virtual environments. Reduce operational costs and dangerous on-site liabilities while drastically improving workforce retention and competency.',
      bg: 'bg-[#E0F2FE]',
      icon: '/images/vr_icons/vr_ic_6.svg'
    }
  ];

  // 2. Benefits of Virtual Reality App Development Services (6 cards matching layout)
  const vrBenefitsData = [
    {
      title: 'Immersive user experiences',
      desc: 'Provide customers with a feeling of presence and immersion unequaled by conventional media by using VR technology. Get unmatched immersion in virtual worlds, 3D objects, and simulations, keeping users interested for longer.',
      icon: '/images/vr_benefits/immersiveuserexperiences.png'
    },
    {
      title: 'Improved education and training',
      desc: 'VR applications safely and effectively instruct users in virtual classrooms, medical simulations, industrial training, and flying simulations. VR applications simulate real-world surroundings and interactions to increase skill competence and reduce training expenses.',
      icon: '/images/vr_benefits/improvededucationandtraining.png'
    },
    {
      title: 'Marketing and branding innovation',
      desc: 'VR experiences provide businesses with a memorable method to promote their goods and services. Interactive 3D showcases and immersive branded virtual environments capture consumer attention and elevate brand prestige.',
      icon: '/images/vr_benefits/marketingandbrandinginnovation.png'
    },
    {
      title: 'Healthcare & Medical Applications',
      desc: 'From preoperative 3D surgical planning to cognitive therapy, phobia exposure, and physical rehabilitation, virtual reality empowers clinicians and medical students with risk-free interactive practice.',
      icon: '/images/vr_benefits/healthcareuses.png'
    },
    {
      title: 'Remote Collaboration & Virtual Workspaces',
      desc: 'Empower geographically distributed teams to assemble in photorealistic digital meeting halls. Spatial 3D audio, lifelike avatars, and whiteboard interactions make distance collaboration feel natural.',
      icon: '/images/vr_benefits/collaborationandcommunicationremotely.png'
    },
    {
      title: 'Virtual Tours & Architectural Walkthroughs',
      desc: 'Enable real estate investors and global buyers to explore unbuilt properties and luxury environments in 1:1 true physical scale, accelerating sales velocity and eliminating travel requirements.',
      icon: '/images/vr_benefits/touringandvr.png'
    }
  ];

  // 3. FAQ List tailored specifically for Virtual Reality App Development Services
  const vrFaqList = [
    {
      id: 1,
      question: 'What platforms and headsets do your virtual reality apps support?',
      answer: 'Our VR applications support all leading hardware ecosystems including Meta Quest 3/Pro, HTC Vive XR Elite, PlayStation VR2, Valve Index, and Apple Vision Pro. We build using cross-platform frameworks like OpenXR, Unity, and Unreal Engine.'
    },
    {
      id: 2,
      question: 'How much does it cost to build a custom virtual reality application?',
      answer: 'The investment for custom VR development depends on 3D asset fidelity, interactive physics, multiplayer functionality, and targeted hardware. An MVP simulation typically starts around $30,000 to $50,000, while complex enterprise training solutions can scale further based on project scope.'
    },
    {
      id: 3,
      question: 'Can you integrate VR applications with our existing enterprise software and LMS?',
      answer: 'Yes. We seamlessly connect VR training applications to your Enterprise LMS (SCORM/xAPI), CRM, ERP databases, and cloud analytics dashboards, allowing real-time tracking of trainee test scores, completion times, and user behavior metrics.'
    },
    {
      id: 4,
      question: 'What is the typical timeframe for developing a virtual reality application?',
      answer: 'A standard prototype or pilot VR application takes approximately 6 to 10 weeks, encompassing 3D modeling, environment design, and controller interaction mechanics. Comprehensive multi-level applications typically require 3 to 6 months.'
    },
    {
      id: 5,
      question: 'Do you assist with 3D asset modeling and sound design?',
      answer: 'Yes. We offer complete end-to-end services including concept art, photorealistic 3D asset modeling, texture rigging, animation, and binaural spatial audio engineering to ensure total sensory immersion.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      {/* SEO Information */}
      <SEO
        title="Virtual Reality App Development Company in USA | Firevy.co"
        description="Transform your enterprise with Firevy's Virtual Reality App Development Services. Custom 3D environments, VR training simulations, and immersive spatial applications for Meta Quest, HTC Vive, and Apple Vision Pro."
        keywords="virtual reality app development company, vr app development services, custom vr software, virtual reality developers, meta quest app development, enterprise vr training, 3d vr simulation"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Exact 1:1 Match with Reference Screenshot Image 1)       */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-slate-900 tracking-tight font-[900] text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px] leading-[1.18] font-sans">
                Virtual Reality App<br className="hidden sm:inline" /> Development Company in USA
              </h1>

              <p className="text-slate-600 max-w-xl text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal">
                VR apps for iPhone and Android devices signified the transition to a consumer headgear that would foster the next generation of VR goods.
              </p>

              {/* CTA Button matching Image 1 1:1 */}
              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-bold text-sm sm:text-base transition-all shadow-sm space-x-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Right Hero Illustration matching Image 1 1:1 */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[620px] flex justify-center">
                <img
                  src="/images/virtual_reality_hero.svg"
                  alt="Virtual Reality App Development Company in USA"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO)                                           */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 border-b border-slate-200/80">
        <Container>
          <BrandLogoMarquee />
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 2. BEST VIRTUAL REALITY APP DEVELOPMENT COMPANY                           */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/virtual_reality_about.svg"
                  alt="Best Virtual Reality App Development Company"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Best Virtual Reality App <br />
                Development Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                The competitive advantage of Custom virtual reality app development is the ability to create immersive experiences on the move. As a result of our extensive experience in mobile and spatial software development, we can create scalable applications that operate without a hitch on smartphones, tablets, and dedicated head-mounted displays.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                We craft hyper-realistic visual aesthetics, interactive physics simulations, and seamless multi-user networking so your end users feel completely present within your virtual universe.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT OUR VIRTUAL REALITY APP DEVELOPMENT SERVICES               */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Brief About Our Virtual Reality <br />
                App Development Services
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Immersive VR experiences for enhanced user engagement: Businesses whose primary concentration is the creation of products may showcase them via the use of our specialized 3D walkthrough software.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                As a leading Virtual Reality App Development Company, we guarantee that your virtual reality mobile apps will function faultlessly on all compatible devices. You can reach a wider audience and leave lasting impressions if you Hire VR Developers from us.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/virtual_reality_brief.svg"
                  alt="Brief About Virtual Reality App Development"
                  className="w-full h-auto object-contain"
                  loading="lazy"
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
      {/* 5. GET 100% CUSTOMIZABLE VR APP DEVELOPMENT SERVICES                      */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Virtual Reality App Development Services By Experts.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card with Exact Background Image & Quotation Mark */}
            <div className="lg:col-span-4 relative bg-[#F0F8FF] p-7 sm:p-9 flex flex-col justify-start min-h-[300px] overflow-visible select-none">
              {/* Exact Shape Pattern WebP Background */}
              <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
                <img
                  src="/images/shape_pattern.webp"
                  alt="Pattern background"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
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
              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005d89] tracking-tight leading-[1.3] relative z-10 text-left">
                Delivering cutting-edge VR app development services
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Being unique is the only way to survive and grow in this era of fast technological progress. And one method to do this is to provide your consumers with customized virtual reality applications. We build tailor-made VR experiences from the ground up to fit your business objectives, technical ecosystem, and target hardware platforms.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Our VR development team leverages Unity and Unreal Engine to create photo-realistic 3D graphics, responsive spatial physics, and intuitive 6-DOF motion controller tracking. Whether you need room-scale enterprise training or standalone mobile VR, we build solutions that captivate and convert.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

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
              Know Firevy journey from concept to success. Explore how we've brought spatial ideas to life and achieved remarkable results for our clients.
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
                  alt="Industrial VR Training Simulator"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Industrial Safety & Hazardous Machinery VR Simulator
              </h3>
            </div>

            {/* Card 2 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/federal_forecasting_app.jpg"
                  alt="Healthcare Surgical Tele-Immersion Portal"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Healthcare Surgical Tele-Immersion & Anatomical Portal
              </h3>
            </div>

            {/* Card 3 */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/stress_management_app.jpg"
                  alt="Virtual Real Estate Spatial Walkthrough"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Virtual Real Estate Spatial Walkthrough & 3D Showroom
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
                320+
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
      {/* 8. THE EXPERTISE OF OUR VIRTUAL REALITY APP DEVELOPERS                    */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              The Expertise Of Our Virtual Reality App Developers
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-2xl mx-auto">
              You can Hire VR App Developers on a weekly or monthly basis, depending upon your needs. Take a look at the expertise of our VR app developers:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {vrExpertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="expertise-hover-card p-7 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center mb-5 shadow-xs p-2.5`}>
                    <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
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
      {/* 10. BENEFITS OF VIRTUAL REALITY APP DEVELOPMENT SERVICES                  */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Virtual Reality App Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              VR app development is becoming more popular among organizations across sectors due to its many perks. Significant advantages of VR app development:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {vrBenefitsData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start text-left border border-slate-100"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
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
      <SapphireTechStackGrid domainName="virtual reality app development" />

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
        faqList={vrFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide VR solutions that captivate users. Feel free to contact us in case of any query not mentioned below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS VR APP DEVELOPMENT COMPANY                      */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Virtual Reality App Development ?"
        subtitle="Being unique is our quality! Firevy believes in the things that give us an edge over our competitors. We are a renowned spatial computing and virtual reality software development organization serving customers with end-to-end support. Our ideation and feasibility assessments stand us one level up."
      />

      {/* ========================================================================= */}
      {/* 23. HAVE VR APP DEVELOPMENT CHALLENGE TO ADDRESS (CTA BANNER)             */}
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
            Have Virtual Reality App Development Challenge To Address ?
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

export default VirtualRealityAppDevelopmentService;
