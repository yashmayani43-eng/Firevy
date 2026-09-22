import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import TrustMarquee from '../home/TrustMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import ProcessWeFollow from '../common/ProcessWeFollow';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SocialMediaSection from '../common/SocialMediaSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock, Check, Quote, Trophy, Award, Star, ArrowRight, PieChart,
  LineChart, Globe, Headphones, Handshake, UserCheck, ShieldCheck,
  Lightbulb, Users, Lock, Sliders, MessageSquare, Flag, RotateCcw,
  ShoppingBag, Server, Code, Layout, CheckSquare, Wrench, Target,
  Key, CheckCircle2, RefreshCw, TrendingUp, BarChart2, DollarSign,
  Coins, Zap, Phone
} from 'lucide-react';

export const HireNodeJsDevelopersService = () => {
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  return (
    <>
      <SEO
        title="Hire Node.js Developers | Top Dedicated Node JS Programmers Firevy.co"
        description="Hire dedicated Node.js developers from Firevy.co starting at $21/hr. Expert Express.js, NestJS, TypeScript, Microservices, and Real-Time WebSocket backend architects."
      />

      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 bg-[#F2F7FB] text-slate-900 font-sans relative overflow-hidden text-left border-b border-slate-200/60">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Title + Description + 4 Stats + Teal Pill CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 leading-tight tracking-tight font-sans">
                Hire Node.js Developers
              </h1>

              <p className="text-sm sm:text-[15px] text-[#475569] font-normal leading-[1.7] max-w-xl font-sans">
                Node.js is an open-source, cross-platform JavaScript runtime environment that enables developers to build high-performance, event-driven backend systems and scalable real-time applications.
              </p>

              {/* 4 Stat Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-[#006E90] font-sans leading-none">200+</div>
                  <div className="text-xs sm:text-[13px] font-[700] text-slate-800 leading-tight mt-2 font-sans">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-[#006E90] font-sans leading-none">20+</div>
                  <div className="text-xs sm:text-[13px] font-[700] text-slate-800 leading-tight mt-2 font-sans">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-[#006E90] font-sans leading-none">2800+</div>
                  <div className="text-xs sm:text-[13px] font-[700] text-slate-800 leading-tight mt-2 font-sans">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-[#006E90] font-sans leading-none">320+</div>
                  <div className="text-xs sm:text-[13px] font-[700] text-slate-800 leading-tight mt-2 font-sans">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Teal CTA Pill Section */}
              <div className="pt-4">
                <div className="text-xs sm:text-[13px] font-[700] text-[#006E90] mb-2.5 font-sans">
                  Get Top Talent Work for you At
                </div>

                <div className="p-1.5 pl-5 pr-1.5 bg-[#008BAA] rounded-full shadow-md inline-flex items-center justify-between space-x-4 max-w-md w-full border border-cyan-600/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                      <Clock className="w-4 h-4 text-white stroke-[2.5]" />
                    </div>
                    <div className="text-left font-sans">
                      <span className="text-white font-[900] text-lg leading-none block font-sans">
                        $21<span className="text-xs font-semibold text-cyan-100">/hr</span>
                      </span>
                      <span className="text-[10px] text-cyan-100 uppercase tracking-wider font-semibold block font-sans">
                        Starting Price
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="px-6 py-2.5 rounded-full bg-white text-[#006E90] hover:bg-slate-50 font-[800] text-xs transition-all shadow-sm uppercase tracking-wide font-sans shrink-0"
                  >
                    Hire Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <img
                  src="/images/node_js_hero_monitor_illustration.png"
                  alt="Hire Node.js Developers Illustration"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SECTION 1: Hire Node.js Developers For Your Next Project */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100 text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-xl">
                <img
                  src="/images/node_js_developers_team_illustration.png"
                  alt="Hire Node JS Developers Team"
                  className="w-full h-auto object-contain max-h-[440px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text Block */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight font-sans leading-snug">
                Hire Node JS Developers For Your Next Project
              </h2>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.75] font-normal font-sans">
                At Firevy.co, we offer experienced Node.js developers who possess deep expertise in Express.js, NestJS, TypeScript, GraphQL, and microservices architecture. Our team excels at engineering robust APIs, real-time WebSocket communication platforms, and lightning-fast cloud backend infrastructures tailored for startups and global enterprises.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#006E90] hover:bg-[#005573] text-white font-[800] text-sm transition-all shadow-md font-sans"
                >
                  <span>Hire Node JS Developer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SECTION 2: Engagement Models & Pricing Cards */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/60 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-[900] text-slate-900 tracking-tight font-sans">
              Choose Flexible Engagement Models
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-sans">
              Hire top-tier Node.js engineers with transparent monthly, hourly, or project-based billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Hourly */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center relative">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#006E90] mx-auto mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-[800] text-slate-900 font-sans mb-1">Hourly Model</h3>
                <span className="text-xs font-bold text-slate-500 block mb-2 font-sans">Pay As You Go</span>
                <div className="text-2xl sm:text-3xl font-[900] text-slate-900 mb-6 font-sans">
                  $21<span className="text-sm text-slate-500 font-normal">/hr</span>
                </div>

                <ul className="space-y-3 text-left text-xs sm:text-[13px] text-slate-700 font-sans mb-8">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Billing cycle : Weekly / Bi-weekly</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Time tracker report on demand</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Direct Slack / Teams communication</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>No long-term commitment</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-[#006E90] hover:bg-[#005573] text-white font-[800] text-sm block transition-all shadow-md font-sans mb-3"
                >
                  Hire Now
                </Link>
                <div className="bg-sky-50/80 rounded-lg py-1.5 text-[11px] text-[#006E90] font-bold font-sans">
                  We sign NDA for all our projects.
                </div>
              </div>
            </div>

            {/* Card 2: Yearly / Full-Time Dedicated */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#006E90] shadow-2xl transition-all duration-300 flex flex-col justify-between text-center relative transform md:-translate-y-2">
              <div>
                <span className="text-[11px] font-extrabold text-[#006E90] uppercase tracking-wider block mb-1 font-sans">
                  Save Up To 20%
                </span>
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#006E90] mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <h3 className="text-xl font-[800] text-slate-900 font-sans">Full-Time Dedicated</h3>
                  <span className="bg-sky-100 text-[#006E90] text-[10px] font-black px-2 py-0.5 rounded-full uppercase font-sans">
                    Best Deal
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-500 block mb-2 font-sans">160 Hours / Month</span>
                <div className="text-2xl sm:text-3xl font-[900] text-[#006E90] mb-6 font-sans">
                  $3200<span className="text-sm text-slate-500 font-normal">/mo</span>
                </div>

                <ul className="space-y-3 text-left text-xs sm:text-[13px] text-slate-700 font-sans mb-8">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Billing cycle : Monthly</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Dedicated Scrum Master & QA Support</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>8 hours a day, 5 days a week</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Overnight overlap available</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-[#006E90] hover:bg-[#005573] text-white font-[800] text-sm block transition-all shadow-md font-sans mb-3"
                >
                  Hire Now
                </Link>
                <div className="bg-sky-50/80 rounded-lg py-1.5 text-[11px] text-[#006E90] font-bold font-sans">
                  We sign NDA for all our projects.
                </div>
              </div>
            </div>

            {/* Card 3: Part-Time Developer */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center relative">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#006E90] mx-auto mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-[800] text-slate-900 font-sans mb-1">Part-time Developer</h3>
                <span className="text-xs font-bold text-slate-500 block mb-2 font-sans">4 hours a day, 5 days a week</span>
                <div className="text-2xl sm:text-3xl font-[900] text-slate-900 mb-6 font-sans">
                  80 hours/month
                </div>

                <ul className="space-y-3 text-left text-xs sm:text-[13px] text-slate-700 font-sans mb-8">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Billing cycle : Monthly</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Project Trackers : Jira, Basecamp, Redmine</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>4 hours a day, 5 days a week</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Minimum: 1 month</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-[#006E90] hover:bg-[#005573] text-white font-[800] text-sm block transition-all shadow-md font-sans mb-3"
                >
                  Hire Now
                </Link>
                <div className="bg-sky-50/80 rounded-lg py-1.5 text-[11px] text-[#006E90] font-bold font-sans">
                  We sign NDA for all our projects.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION 4: Brief About Our Node JS Developer */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100 text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight font-sans leading-snug">
                Brief About Our Node JS Developer
              </h2>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.75] font-normal font-sans">
                Our Node.js developers specialize in architecting highly reactive, event-driven web applications, microservices pipelines, and real-time backend ecosystems. With experience in building complex SaaS platforms and IoT data streaming engines, we deliver performant, secure, and easily scalable codebases.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#006E90] hover:bg-[#005573] text-white font-[800] text-sm transition-all shadow-md font-sans"
                >
                  <span>Hire Dedicated Node JS Developer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-xl">
                <img
                  src="/images/node_js_deployment_checklist_illustration.png"
                  alt="Brief About Node JS Developer"
                  className="w-full h-auto object-contain max-h-[440px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. SECTION 5: Clutch Top Rated Badges Horizontal Auto-Scroll Banner */}
      <ClutchTopRatedBanner title="World Wide Top Rated NodeJS Development Company on Clutch" />

      {/* 5.5. SECTION 5.5: Who Exactly Is A Node Js Developer? */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16 font-sans">
            Who Exactly Is A Node Js Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Box with Quote & Bold Text */}
            <div className="lg:col-span-5 bg-[#EBF7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              {/* Background Wavy Subtle Pattern */}
              <svg className="absolute inset-0 w-full h-full text-cyan-200/20 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M 0 100 C 100 50, 200 150, 300 100 C 400 50, 500 150, 600 100" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 200 C 100 150, 200 250, 300 200 C 400 150, 500 250, 600 200" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 300 C 100 250, 200 350, 300 300 C 400 250, 500 350, 600 300" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="relative z-10 space-y-6">
                {/* Large Quote Icon */}
                <div className="text-[#005D89]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-[#005D89] leading-[1.25] tracking-tight">
                  Lightweight And<br />
                  Intuitive<br />
                  Applications
                </h3>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  A JavaScript code used for the logic of a server-side web application is something that a NodeJS developer is accountable for producing. You can also Hire Node.js Developers for AI Integration to connect intelligent features, automation tools, and AI-driven functionalities with your Node.js applications. Hire NodeJS Programmers to construct backend components, assist front-end developers, and connect web applications to web services provided by third parties. Additionally, the developer is responsible for managing data flow between the users and the servers. The good news is that you can Hire Node Js Developer in India at a meager cost to work remotely for you.
                </p>
                <p>
                  Our team has worked on various projects involving building websites using Node.js, including real-time applications, social apps, talking apps, etc. We provide several different recruiting choices, giving you the freedom to Hire Dedicated Node.js Developers or teams by your organization's needs. Hire to contact us as soon as possible if you are interested in hiring Node.js developers for your project.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-[#005D89] hover:bg-[#004d73] text-white font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
                >
                  Let's Discuss Your Project
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 6. SECTION 6: Our Node.js Development Services */}
      <PremiumServicesGrid techName="Node.js" />

      {/* 8. SECTION 8: Seasoned Node.js Experts */}
      <SapphireSeasonedExpertsSection techName="Node.js" />

      {/* 9. SECTION 9: Industries We Serve with Node.js */}
      <IndustryFocusedInsightsSection techName="Node.js" />

      {/* 9.5. SECTION 9.5: About Us Company Achievements Stats */}
      <AboutUsStats companyName="Sapphire" />

      {/* 9.6. SECTION 9.6: Sectors Thriving Through Firevy's Bespoke Node.js App Development Services */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke Node.js App Development Services" />

      {/* 9.7. SECTION 9.7: Employ the Advanced Proficiency of Sapphire's Dedicated Development Team */}
      <LeverageExpertiseGridSection brandName="Sapphire" title="Employ the Advanced Proficiency of Sapphire’s Dedicated Development Team" />

      {/* 9.8. SECTION 9.8: How We Divide Your Project Responsibilities */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-white tracking-tight font-sans">
              How We Divide Your Project Responsibilities ?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal mt-3 font-sans">
              Clear ownership and seamless collaboration structures ensuring smooth delivery of your Node.js backend projects.
            </p>
          </div>

          {/* Responsibility Tabs Header */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-slate-800/90 rounded-full border border-slate-700/80">
              <button
                onClick={() => setResponsibilityTab('sapphire')}
                className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all font-sans ${
                  responsibilityTab === 'sapphire'
                    ? 'bg-[#008BAA] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Firevy Responsibilities
              </button>
              <button
                onClick={() => setResponsibilityTab('client')}
                className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all font-sans ${
                  responsibilityTab === 'client'
                    ? 'bg-[#008BAA] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Client Responsibilities
              </button>
            </div>
          </div>

          {/* Tab 1: Firevy Responsibilities */}
          {responsibilityTab === 'sapphire' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Talent Allocation & Management</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Matching vetted senior Node.js developers tailored specifically to your backend architecture, security rules, and performance objectives.
                </p>
              </div>

              <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Quality Assurance & Delivery</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Conducting unit tests, automated CI/CD pipeline deployment checks, code reviews, and maintaining zero-downtime microservices standards.
                </p>
              </div>

              <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Daily Standups & Reports</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Transparent daily updates, commit logs, sprint demos, and direct access to developers via Slack, Jira, and GitHub/GitLab.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Client Responsibilities */}
          {responsibilityTab === 'client' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Product Vision & Priorities</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Defining sprint goals, business requirements, and prioritizing feature backlogs for maximum ROI.
                </p>
              </div>

              <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Access & Credentials</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Providing necessary API keys, repository access, cloud infrastructure credentials, and third-party integrations.
                </p>
              </div>

              <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Timely Feedback & Sign-off</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Reviewing sprint milestones, approving deployments, and providing feedback during sprint retrospectives.
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 10. SECTION 10: Node.js Technical Proficiency / Tech Stack */}
      <TechStackProficientGrid techName="Node.js" />

      {/* 13. SECTION 13: 4 Steps to Hire Node.js Developers */}
      <HireDeveloper4Steps techName="Node.js" />

      {/* SUCCESS STORIES SECTION PLACED DIRECTLY BELOW RESPONSIBILITIES */}
      <SuccessStoriesSection />

      {/* 15. SECTION 15: Video Testimonials */}
      <VideoTestimonialsStory />

      {/* 16. SECTION 16: Engagement Models */}
      <EngagementModelsSection />

      {/* 17. SECTION 17: Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* 18. SECTION 18: Innovative Solutions */}
      <InnovativeSolutionVideo />

      {/* 19. SECTION 19: Process We Follow */}
      <ProcessWeFollow />

      {/* 20. SECTION 20: Client Reviews */}
      <ClientReviewsDarkSection />

      {/* 21. SECTION 21: Case Studies */}
      <DigitalTransformationCaseStudies />

      {/* 22. SECTION 22: What Sets Us Apart */}
      <WhatSetsUsApartSection />

      {/* 23. SECTION 23: FAQ Section */}
      <SapphireFaqSection techName="Node.js" />

      {/* 24. SECTION 24: Conversion Banner */}
      <ConversionCalloutBanner />

      {/* 25. SECTION 25: Social Media */}
      <SocialMediaSection />

      {/* 26. SECTION 26: Recent Blogs */}
      <RecentBlogsSection />

      {/* 27. SECTION 27: Subscribe Newsletter */}
      <SubscribeNewsletterSection />
    </>
  );
};

export default HireNodeJsDevelopersService;
