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
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock, Check, Quote, Trophy, Award, Star, ArrowRight, PieChart,
  LineChart, Globe, Headphones, Handshake, UserCheck, ShieldCheck,
  Lightbulb, Users, Lock, Sliders, MessageSquare, Flag, RotateCcw,
  ShoppingBag, Server, Code, Layout, CheckSquare, Wrench, Target,
  Key, CheckCircle2, RefreshCw, TrendingUp, BarChart2, DollarSign,
  Coins, Zap
} from 'lucide-react';

export const HireMeanStackDevelopersService = () => {
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  return (
    <>
      <SEO
        title="Hire MEAN Stack Developers | Top Dedicated MEAN Developers Firevy.co"
        description="Hire dedicated MEAN Stack developers from Firevy.co starting at $21/hr. Expert MongoDB, Express.js, Angular, and Node.js engineers for enterprise full-stack web applications."
      />

      {/* 1. HERO SECTION */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 font-sans relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text + Stats + Teal CTA Box */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 leading-tight tracking-tight font-sans">
                Hire MEAN Stack Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl font-sans">
                MEAN Stack development has amassed a large amount of popularity due to its ability to serve as a flexible blend of cutting-edge technologies for web application development. You can Hire dedicated MEAN Stack developers to develop productive applications.
              </p>

              {/* 4 Stat Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 pt-2">
                <div>
                  <div className="text-2xl sm:text-3xl font-[900] text-[#006E90] font-sans">200+</div>
                  <div className="text-xs sm:text-[13px] font-[600] text-slate-700 leading-tight mt-1 font-sans">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-[900] text-[#006E90] font-sans">20+</div>
                  <div className="text-xs sm:text-[13px] font-[600] text-slate-700 leading-tight mt-1 font-sans">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-[900] text-[#006E90] font-sans">2800+</div>
                  <div className="text-xs sm:text-[13px] font-[600] text-slate-700 leading-tight mt-1 font-sans">
                    Project<br />Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-[900] text-[#006E90] font-sans">320+</div>
                  <div className="text-xs sm:text-[13px] font-[600] text-slate-700 leading-tight mt-1 font-sans">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>

              {/* Teal CTA Container */}
              <div className="mt-8">
                <div className="text-xs font-[700] text-[#006E90] mb-2 font-sans">
                  Get Top Talent Work for you At
                </div>
                <div className="p-2 bg-[#0080A0] rounded-2xl shadow-lg inline-flex items-center justify-between space-x-4 max-w-md w-full border border-cyan-700/20">
                  <div className="flex items-center space-x-2.5 pl-3">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-[900] text-lg sm:text-xl tracking-tight font-sans">
                      $21/Hourly*
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-white hover:bg-slate-50 text-[#0080A0] font-[900] text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer font-sans"
                  >
                    Hire Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/3] flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-slate-200/60 pointer-events-none" viewBox="0 0 400 300">
                  <circle cx="80" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="340" cy="220" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 50 150 Q 200 280 350 150" fill="none" stroke="#0080A0" strokeWidth="1.5" opacity="0.15" />
                </svg>

                <div className="w-full bg-white rounded-2xl border-2 border-slate-200/90 shadow-2xl overflow-hidden relative z-10 p-4 sm:p-5">
                  <div className="flex items-center space-x-1.5 pb-3 border-b border-slate-100">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <div className="ml-4 h-4 bg-slate-100 rounded-md w-36" />
                  </div>

                  <div className="py-5 space-y-3 font-mono text-[11px] text-slate-400">
                    <div className="flex space-x-2">
                      <span className="text-purple-600 font-bold">import</span>
                      <span className="text-slate-800 font-semibold">{`{ Express }`}</span>
                      <span className="text-purple-600 font-bold">from</span>
                      <span className="text-emerald-600">'express'</span>;
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-purple-600 font-bold">import</span>
                      <span className="text-slate-800 font-semibold">{`{ Component }`}</span>
                      <span className="text-purple-600 font-bold">from</span>
                      <span className="text-rose-600">'@angular/core'</span>;
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-purple-600 font-bold">const</span>
                      <span className="text-blue-600 font-bold">app</span> = <span className="text-slate-800">Express()</span>;
                    </div>
                    <div className="h-2 bg-slate-100 rounded w-3/4 my-2" />
                    <div className="h-2 bg-slate-100 rounded w-1/2" />
                    <div className="h-2 bg-slate-100 rounded w-5/6" />
                  </div>

                  <div className="w-20 h-4 bg-slate-200 rounded-b-md mx-auto -mb-5" />
                </div>

                <div className="absolute -top-3 -right-3 z-20 bg-white border border-rose-100 p-2 sm:p-2.5 rounded-2xl shadow-xl flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-[#DD0031] text-white flex items-center justify-center font-black text-lg shadow-md font-sans">
                    A
                  </div>
                  <span className="text-xs font-bold text-slate-800 pr-1 font-sans">Angular</span>
                </div>

                <div className="absolute top-1/3 -left-5 z-20 bg-[#111827] text-white p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center space-x-2 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs font-mono">
                    EX
                  </div>
                  <span className="text-xs font-bold text-white pr-1 font-sans">Express</span>
                </div>

                <div className="absolute -bottom-3 left-4 z-20 bg-white border border-emerald-100 p-2 sm:p-2.5 rounded-2xl shadow-xl flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-[#47A248] text-white flex items-center justify-center font-black text-sm shadow-md font-sans">
                    🍃
                  </div>
                  <span className="text-xs font-bold text-slate-800 pr-1 font-sans">MongoDB</span>
                </div>

                <div className="absolute -bottom-3 -right-3 z-20 bg-white border border-emerald-100 p-2 sm:p-2.5 rounded-2xl shadow-xl flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-[#339933] text-white flex items-center justify-center font-black text-xs font-mono shadow-md">
                    JS
                  </div>
                  <span className="text-xs font-bold text-slate-800 pr-1 font-sans">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CLIENT LOGOS MARQUEE BAR */}
      <TrustMarquee />

      {/* 3. SECTION 1: Best Mean Stack Developers Available With Us */}
      <section className="py-16 bg-white border-b border-slate-100 text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-4 flex items-center justify-center">
                <div className="w-full bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-700 relative">
                  <div className="bg-[#EBF5FB] rounded-xl p-4 min-h-[220px] flex flex-col justify-between relative overflow-hidden border border-cyan-200">
                    <div className="space-y-2">
                      <div className="h-2.5 bg-cyan-600/30 rounded w-2/3" />
                      <div className="h-2 bg-slate-300 rounded w-1/2" />
                      <div className="h-2 bg-slate-300 rounded w-4/5" />
                      <div className="h-2 bg-slate-300 rounded w-3/5" />
                    </div>

                    <div className="absolute right-6 top-6 w-28 h-44 bg-slate-900 rounded-xl p-1.5 shadow-2xl border border-cyan-400/40 z-10 flex flex-col justify-between">
                      <div className="bg-sky-500 rounded-lg h-full p-2 flex flex-col items-center justify-center text-white">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
                          ⚙️
                        </div>
                        <span className="text-[9px] font-black tracking-wider uppercase">App Ready</span>
                      </div>
                    </div>

                    <div className="absolute top-2 left-28 bg-[#339933] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                      node.js
                    </div>

                    <div className="absolute top-10 right-2 bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                      JS
                    </div>

                    <div className="absolute bottom-3 left-32 bg-[#DD0031] text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                      A
                    </div>
                  </div>
                  <div className="w-28 h-3 bg-slate-700 rounded-b-md mx-auto mt-1" />
                </div>
              </div>
            </div>

            {/* Right Column: Title + Paragraph */}
            <div className="lg:col-span-6 text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 leading-tight tracking-tight font-sans">
                Best Mean Stack Developers Available With Us
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
                All of the MEAN components (MongoDB, ExpressJS, Angular, NodeJS) are expertly handled by our full-stack MEAN developers. Hire mean stack developers to create mobile and web applications that are ready for the future. We provide a range of hiring models so you can select the most appropriate ones for your project.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION 2: Our Flexible Hiring Models */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 font-sans">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight font-sans">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-2.5 font-sans">
              Hire Mean Stack Developers from Firevy.co Starts from,
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Quarterly */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center relative">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#006E90] mx-auto mb-4">
                  <PieChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-[800] text-slate-900 font-sans mb-1">Quarterly</h3>
                <span className="text-xs font-bold text-slate-500 block mb-2 font-sans">Starting From</span>
                <div className="text-2xl sm:text-3xl font-[900] text-slate-900 mb-6 font-sans">
                  $ 7500.00/ Month
                </div>

                <ul className="space-y-3 text-left text-xs sm:text-[13px] text-slate-700 font-sans mb-8">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Billing cycle : Monthly</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>4 hours a day, 5 days a week</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Minimum: 2 months</span>
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

            {/* Card 2: Yearly */}
            <div className="bg-white rounded-3xl p-8 border-4 border-[#006E90] shadow-2xl transition-all duration-300 flex flex-col justify-between text-center relative transform md:-translate-y-2">
              <div>
                <span className="text-[11px] font-extrabold text-[#006E90] uppercase tracking-wider block mb-1 font-sans">
                  Save Up To 20%
                </span>
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#006E90] mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <h3 className="text-xl font-[800] text-slate-900 font-sans">Yearly</h3>
                  <span className="bg-sky-100 text-[#006E90] text-[10px] font-black px-2 py-0.5 rounded-full uppercase font-sans">
                    Best Deal
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-500 block mb-2 font-sans">Starting From</span>
                <div className="text-2xl sm:text-3xl font-[900] text-[#006E90] mb-6 font-sans">
                  $25000.0
                </div>

                <ul className="space-y-3 text-left text-xs sm:text-[13px] text-slate-700 font-sans mb-8">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Billing cycle : Monthly</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>4 hours a day, 5 days a week</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Minimum: 2 months</span>
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

            {/* Card 3: Part-time Developer */}
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
                    <span>Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>4 hours a day, 5 days a week</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#006E90] shrink-0 mt-0.5" />
                    <span>Minimum: 2 months</span>
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

      {/* 5. SECTION 3: Developers Comparison Table */}
      <section className="py-16 bg-white border-b border-slate-100 text-slate-900 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight font-sans">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-2.5 font-sans">
              Hire Mean Stack Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <thead>
                <tr className="bg-[#005F96] text-white font-sans text-sm sm:text-base font-bold">
                  <th className="p-4 sm:p-5 border-r border-cyan-700/50 w-1/4">Range of Developers</th>
                  <th className="p-4 sm:p-5 border-r border-cyan-700/50 w-1/4">Junior Developers</th>
                  <th className="p-4 sm:p-5 border-r border-cyan-700/50 w-1/4">Mid-Level Developers</th>
                  <th className="p-4 sm:p-5 w-1/4">Senior Developers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-sans text-slate-800">
                <tr className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold bg-[#005F96] text-white border-r border-cyan-700/50">Approx Cost</td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900 border-r border-slate-200">$17</td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900 border-r border-slate-200">$22</td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">$29</td>
                </tr>
                <tr className="bg-slate-50/60 hover:bg-slate-100 transition-colors">
                  <td className="p-4 sm:p-5 font-bold bg-[#005F96] text-white border-r border-cyan-700/50">Years of Experience</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">1-3 Years</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">3-5 Years</td>
                  <td className="p-4 sm:p-5">5+ Years</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold bg-[#005F96] text-white border-r border-cyan-700/50">Project Manager</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">Yes</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">Yes</td>
                  <td className="p-4 sm:p-5">Yes</td>
                </tr>
                <tr className="bg-slate-50/60 hover:bg-slate-100 transition-colors">
                  <td className="p-4 sm:p-5 font-bold bg-[#005F96] text-white border-r border-cyan-700/50">Time Zone Flexibility</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">Yes</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">Yes</td>
                  <td className="p-4 sm:p-5">Yes</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold bg-[#005F96] text-white border-r border-cyan-700/50">Quality Guarantee</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">Yes</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">Yes</td>
                  <td className="p-4 sm:p-5">Yes</td>
                </tr>
                <tr className="bg-slate-50/60 hover:bg-slate-100 transition-colors">
                  <td className="p-4 sm:p-5 font-bold bg-[#005F96] text-white border-r border-cyan-700/50">Working Hours</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">40 hours/ Week</td>
                  <td className="p-4 sm:p-5 border-r border-slate-200">40 hours/ Week</td>
                  <td className="p-4 sm:p-5">40 hours/ Week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 6. SECTION 4: Brief About Our Mean Stack Developer */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 leading-tight tracking-tight font-sans">
                Brief About Our Mean Stack Developer
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
                Our Mean stack developers have rich expertise in database administration using MongoDB and more. Our pool of talented developers has knowledge of Angularjs and Node js programming languages.
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
                Our Mean stack developers have wide expertise in languages such as HTML5, XHTML, and CSS coding. Our Mean stack developers have expertise in UI, UX design and development, and MVC Design Patterns. You can hire our front-end developers who have rich expertise in a variety of JS frameworks.
              </p>
            </div>

            {/* Right Column: Character Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center p-4">
                <div className="w-full bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800 relative text-white flex flex-col justify-between min-h-[220px]">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-xs font-mono text-cyan-400">MEAN IDE</span>
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <div className="py-4 space-y-2 font-mono text-[11px] text-slate-300">
                    <div><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = <span className="text-cyan-300">new</span> <span className="text-blue-400">MeanDeveloper()</span>;</div>
                    <div><span className="text-purple-400">await</span> developer.<span className="text-emerald-400 font-bold">buildScalableApps()</span>;</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-2xl shadow-xl border border-slate-200 text-slate-900 flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-xl bg-[#DD0031] text-white flex items-center justify-center font-black text-xs font-sans">A</div>
                    <span className="text-xs font-bold font-sans">Angular Expert</span>
                  </div>

                  <div className="absolute -top-4 -left-4 bg-[#111827] p-2 rounded-2xl shadow-xl border border-slate-700 text-white flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xs font-mono">EX</div>
                    <span className="text-xs font-bold font-sans">Express Backend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SECTION 5: Clutch Top Rated Banner */}
      <section className="py-8 bg-[#005C8A] text-white font-sans overflow-hidden border-b border-cyan-950 select-none">
        <Container>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 sm:gap-8">
            {/* Left Title */}
            <div className="text-left max-w-sm shrink-0">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-[900] text-white leading-tight font-sans tracking-tight">
                World Wide Top Rated<br />
                Mean Stack Development<br />
                Company on Clutch
              </h3>
            </div>

            {/* Gold Trophy with Laurel Wreath SVG */}
            <div className="shrink-0 flex items-center justify-center">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 100 100" fill="none">
                <path d="M 30 75 Q 18 50 32 25 Q 26 40 32 60 Z" fill="#FFC107" />
                <path d="M 24 65 Q 12 45 26 22 Q 20 35 26 52 Z" fill="#FFB300" opacity="0.8" />
                <path d="M 20 50 Q 10 32 22 15 Q 16 26 21 40 Z" fill="#FFC107" />
                <path d="M 70 75 Q 82 50 68 25 Q 74 40 68 60 Z" fill="#FFC107" />
                <path d="M 76 65 Q 88 45 74 22 Q 80 35 74 52 Z" fill="#FFB300" opacity="0.8" />
                <path d="M 80 50 Q 90 32 78 15 Q 84 26 79 40 Z" fill="#FFC107" />
                <path d="M 36 28 L 64 28 C 64 45 58 55 50 56 C 42 55 36 45 36 28 Z" fill="#FFD54F" stroke="#FFA000" strokeWidth="2" />
                <path d="M 46 56 L 54 56 L 54 68 L 46 68 Z" fill="#FFC107" />
                <rect x="40" y="68" width="20" height="7" rx="2" fill="#FFA000" />
                <path d="M 36 34 C 28 34 28 44 36 44" fill="none" stroke="#FFD54F" strokeWidth="2.5" />
                <path d="M 64 34 C 72 34 72 44 64 44" fill="none" stroke="#FFD54F" strokeWidth="2.5" />
                <polygon points="50,33 53,40 60,40 55,44 57,51 50,47 43,51 45,44 40,40 47,40" fill="#FFF8E1" />
              </svg>
            </div>

            {/* Badges Row */}
            <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-none py-2">
              <div className="w-20 h-28 bg-[#182330] rounded-b-xl border border-slate-400/40 p-1.5 flex flex-col justify-between items-center text-center shadow-md shrink-0">
                <span className="text-[7px] font-bold text-slate-300 uppercase tracking-widest mt-0.5">TOP</span>
                <span className="text-[6.5px] font-black text-slate-200 uppercase leading-none">MOBILE APP</span>
                <span className="text-sm font-black text-white tracking-tight font-serif my-0.5">Clutch</span>
                <div className="w-full bg-slate-700/60 rounded py-0.5 text-[6.5px] font-extrabold text-slate-200 uppercase">
                  DEVELOPERS<br />2022
                </div>
              </div>

              <div className="w-20 h-28 bg-[#1B263B] rounded-b-xl border border-amber-500/40 p-1 flex flex-col justify-between items-center text-center shadow-md shrink-0">
                <span className="text-xs font-black text-white tracking-tight font-serif mt-0.5">Clutch</span>
                <span className="text-[6.5px] font-bold text-slate-300 uppercase">TOP COMPANY</span>
                <div className="w-full bg-[#B89762] text-slate-950 font-black text-[7px] py-1 rounded-sm uppercase tracking-tighter">
                  DEVELOPMENT<br />2022
                </div>
                <span className="text-[6.5px] font-bold text-slate-400 uppercase mb-0.5">INDIA</span>
              </div>

              <div className="w-20 h-28 bg-[#A81938] rounded-b-xl border-2 border-white/90 p-1 flex flex-col justify-between items-center text-center shadow-md shrink-0">
                <div className="w-full bg-white text-[#A81938] font-black text-[6.5px] py-0.5 uppercase tracking-tighter rounded-xs">
                  MOST REVIEWED
                </div>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#A81938] text-[9px] font-black shadow-xs my-0.5">
                  ★
                </div>
                <span className="text-[6.5px] font-extrabold text-white leading-tight uppercase font-sans mb-0.5">
                  MOBILE APP<br />DEVELOPMENT<br />COMPANIES
                </span>
                <div className="w-3 h-3 bg-white/30 rounded-full flex items-center justify-center text-[5px] font-bold text-white">top</div>
              </div>

              <div className="w-20 h-28 bg-[#A81938] rounded-b-xl border-2 border-white/90 p-1 flex flex-col justify-between items-center text-center shadow-md shrink-0">
                <div className="w-full bg-white text-[#A81938] font-black text-[6.5px] py-0.5 uppercase tracking-tighter rounded-xs">
                  MOST REVIEWED
                </div>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#A81938] text-[9px] font-black shadow-xs my-0.5">
                  ★
                </div>
                <span className="text-[6px] font-extrabold text-white leading-tight uppercase font-sans mb-0.5">
                  MICROSOFT<br />SHAREPOINT<br />CONSULTING
                </span>
                <div className="w-3 h-3 bg-white/30 rounded-full flex items-center justify-center text-[5px] font-bold text-white">top</div>
              </div>

              <div className="w-20 h-28 bg-[#A81938] rounded-b-xl border-2 border-white/90 p-1 flex flex-col justify-between items-center text-center shadow-md shrink-0">
                <div className="w-full bg-white text-[#A81938] font-black text-[6.5px] py-0.5 uppercase tracking-tighter rounded-xs">
                  MOST REVIEWED
                </div>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#A81938] text-[9px] font-black shadow-xs my-0.5">
                  ★
                </div>
                <span className="text-[6.5px] font-extrabold text-white leading-tight uppercase font-sans mb-0.5">
                  SOFTWARE<br />DEVELOPERS<br />COMPANIES
                </span>
                <div className="w-3 h-3 bg-white/30 rounded-full flex items-center justify-center text-[5px] font-bold text-white">top</div>
              </div>

              <div className="w-20 h-28 bg-[#A81938] rounded-b-xl border-2 border-white/90 p-1 flex flex-col justify-between items-center text-center shadow-md shrink-0">
                <div className="w-full bg-white text-[#A81938] font-black text-[6.5px] py-0.5 uppercase tracking-tighter rounded-xs">
                  MOST REVIEWED
                </div>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#A81938] text-[9px] font-black shadow-xs my-0.5">
                  ★
                </div>
                <span className="text-[6.5px] font-extrabold text-white leading-tight uppercase font-sans mb-0.5">
                  WEB<br />DEVELOPERS<br />COMPANIES
                </span>
                <div className="w-3 h-3 bg-white/30 rounded-full flex items-center justify-center text-[5px] font-bold text-white">top</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. SECTION 6: What Exactly Is A Mean Stack Developer? */}
      <section className="py-16 bg-white border-b border-slate-100 text-slate-900 font-sans">
        <Container>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight text-center mb-10 font-sans">
            What Exactly Is A Mean Stack Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5 bg-[#EBF5FB] p-8 rounded-3xl border border-cyan-200/80 shadow-sm text-left relative">
              <Quote className="w-10 h-10 text-[#006085] opacity-30 mb-2" />
              <h3 className="text-xl sm:text-2xl font-[900] text-[#006085] leading-snug font-sans">
                Hire Mean Stack Developers At A Reasonable Rate
              </h3>
            </div>

            <div className="lg:col-span-7 text-left space-y-5">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                Our remote MEAN stack developers have designed and launched a wide array of websites, applications, and portals, with a scope of defects and mistakes that is either minimal or nonexistent in most cases. As a trusted Mean Stack development company you can get our MEAN Stack Consulting to build Mean Stack apps. In addition, the team has the necessary skill set and expertise to develop applications with a high degree of precision and skill. We provide you with the opportunity to engage MEAN Stack web developers for MEAN Stack Migration & Porting to work on an hourly, part-time, or full-time basis, depending on what best meets your needs.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-[#006085] hover:bg-[#004D6B] text-white font-[800] text-sm transition-all shadow-md font-sans"
                >
                  <span>Let's Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. SECTION 7: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 10. SECTION 8: Meet Sapphire's Exceptional Team of Seasoned Experts (Image 1) */}
      <SapphireSeasonedExpertsSection />

      {/* 11. SECTION 9: Leverage The Expertise of Sapphire Dedicated Developers (Image 2 & 3) */}
      <LeverageExpertiseGridSection />

      {/* 12. SECTION 10: Industry-Focused Insights To Elevate Your Business (Image 4) */}
      <IndustryFocusedInsightsSection />

      {/* 13. SECTION 11: About Us Stats (Image 5) */}
      <AboutUsStats />

      {/* 14. SECTION 12: Sectors Thriving Through Sapphire's Bespoke Dedicated Developers (Image 5 Bottom) */}
      <SectorsThrivingSection />

      {/* 15. SECTION 13: Employ the Advanced Proficiency of Sapphire's Dedicated Development Team (Screenshot 1) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
              Employ the Advanced Proficiency of Sapphire’s Dedicated Development Team
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {[
              { title: 'On-Time Progress Monitoring', IconComp: LineChart },
              { title: 'Time-Zone Compatibility', IconComp: Globe },
              { title: 'Cost-Effective Development', IconComp: DollarSign },
              { title: 'World Class Expertise', IconComp: Users },
              { title: 'Least Turnaround Time', IconComp: RotateCcw },
              { title: 'Best Management Standards', IconComp: ShieldCheck },
              { title: '500+ Seasons Experts', IconComp: Lightbulb },
              { title: '24x7 Support Team', IconComp: Headphones },
              { title: 'Efficient Project Management', IconComp: Handshake },
              { title: 'Dedicated Delivery Management', IconComp: UserCheck }
            ].map((item, idx) => {
              const CardIcon = item.IconComp;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-xs hover:shadow-md border border-slate-200/80 transition-all flex flex-col justify-center items-center space-y-3 h-44"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-100/80 text-[#006095] flex items-center justify-center">
                    <CardIcon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 16. SECTION 14: How We Divide Your Project Responsibilities ? (Screenshot 2) */}
      <section className="py-16 md:py-20 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            {/* Sapphire / Client Segmented Control Switch */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  onClick={() => setResponsibilityTab('sapphire')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'sapphire'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Sapphire
                </button>
                <button
                  onClick={() => setResponsibilityTab('client')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'client'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Client
                </button>
              </div>
            </div>

            {/* 6 Responsive Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {(responsibilityTab === 'sapphire'
                ? [
                    { title: 'Create a dedicated team', IconComp: Users },
                    { title: 'Gather required access', IconComp: Lock },
                    { title: 'Plan project resources', IconComp: Sliders },
                    { title: 'Create a standard delivery practice', IconComp: Clock },
                    { title: 'Regular communication between stakeholders', IconComp: MessageSquare },
                    { title: 'Research on competitors', IconComp: Flag }
                  ]
                : [
                    { title: 'Define project scope & vision', IconComp: Target },
                    { title: 'Provide domain context & access', IconComp: Key },
                    { title: 'Review sprint deliverables', IconComp: CheckCircle2 },
                    { title: 'Provide timely feedback & approvals', IconComp: RefreshCw },
                    { title: 'Align business priorities with roadmap', IconComp: TrendingUp },
                    { title: 'Co-evaluate key performance indicators', IconComp: BarChart2 }
                  ]
              ).map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#EBF4FA] rounded-2xl p-8 text-center border border-cyan-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-center items-center space-y-4 min-h-[160px]"
                  >
                    <div className="w-12 h-12 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 17. SECTION 15: Technology Stack That Sapphire Dedicated Developers Use Proficiently (Screenshot 3) */}
      <TechStackProficientGrid title="Technology Stack That Sapphire Dedicated Developers Use Proficiently" />

      {/* 18. SECTION 16: The Expertise Of Our Talented Mean Stack Developer (Screenshots 4 & 5) */}
      <section className="py-16 md:py-20 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
              The Expertise Of Our Talented Mean Stack Developer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                title: 'Mean Stack Ecommerce Store Development',
                bg: 'bg-[#F3E8FF]',
                iconColor: 'text-[#9333EA]',
                IconComp: ShoppingBag,
                desc: 'To fulfill the ever-increasing needs of clients, online companies require a scalable, high-performing, and adaptable eCommerce shop that can be easily constructed using the MEAN stack. Our devoted MEAN Stack eCommerce Development specialists provide superior eCommerce app development services to clients in all industry verticals. Hiring a MEAN Stack application development expert from us will assist you in developing ROI-boosting eCommerce solutions.'
              },
              {
                title: 'Mean Stack ERP Development',
                bg: 'bg-[#DCFCE7]',
                iconColor: 'text-[#16A34A]',
                IconComp: Server,
                desc: 'Our MEAN Stack ERP Development experts have hands-on expertise in designing ERP systems that are scalable, resilient, and user-friendly across all devices. Hiring full-stack MEAN developers from our top MEAN stack development firm in India for ERP development may assist you in tracking possible leads, driving business success, improving customer management, and making smart business choices.'
              },
              {
                title: 'API & Web App Development',
                bg: 'bg-[#FFEDD5]',
                iconColor: 'text-[#EA580C]',
                IconComp: Code,
                desc: 'If you choose MEAN over other technological stacks (Ruby on Rails, LAMP, etc.), you may get dynamic front-end and back-end for online and mobile apps. Leverage the knowledge of our MEAN Stack Web Development experts to create powerful and bespoke web apps and APIs for many business domains and industries.'
              },
              {
                title: 'Enterprise CMS Development',
                bg: 'bg-[#FEF9C3]',
                iconColor: 'text-[#CA8A04]',
                IconComp: Layout,
                desc: 'A firm wants a user-friendly CMS gateway to optimize its quality management process and enhance operational efficiency. Employ our MEAN Stack CMS Development experts to create feature-rich, scalable, and user-friendly CMS for enterprises of all sizes.'
              },
              {
                title: 'Testing And QA',
                bg: 'bg-[#FCE7F3]',
                iconColor: 'text-[#DB2777]',
                IconComp: CheckSquare,
                desc: 'Recruit MEAN Stack Migration & Porting experts from our talent pool. Our specialists execute thorough alpha and beta testing, guaranteeing that your application functions flawlessly and contains specific test cases. As an ISO-certified service provider, we guarantee that your dynamic applications and websites are of the highest quality.'
              },
              {
                title: 'Maintenance & Support Services',
                bg: 'bg-[#CFFAFE]',
                iconColor: 'text-[#0891B2]',
                IconComp: Wrench,
                desc: 'Get comprehensive maintenance and support MEAN stack development services from our team of MEAN specialists. Our nimble specialists offer round-the-clock Mean Stack development services to solve your MEAN stack development issues with agility, allowing you to remain stress-free and concentrate on the essential business tasks that drive your company\'s bottom line.'
              }
            ].map((card, idx) => {
              const CardIcon = card.IconComp;
              return (
                <div
                  key={idx}
                  className="expertise-hover-card p-7 sm:p-8 flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.iconColor} flex items-center justify-center mb-5`}>
                      <CardIcon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-[#006095] hover:bg-[#004B77] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              Get A Free Quote For Your Project
            </Link>
          </div>
        </Container>
      </section>

      {/* 19. Proud To Have Picked These Up Along The Way (Image 1) */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* 20. Benefits of Hiring Dedicated Developers (Images 1 & 2) */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Cost Efficiency',
                  desc: 'One of the most significant advantages of hiring dedicated developers is the access to a global talent pool. We provide access to global talent, frequently from low-cost locations, lowering labour costs without sacrificing quality.',
                  IconComp: Coins
                },
                {
                  title: 'Access to Specialized Skills',
                  desc: 'Dedicated developers are experts in their fields. You can swiftly overcome talent shortages by employing dedicated developers, ensuring projects are completed on time and without errors.',
                  IconComp: Award
                },
                {
                  title: 'Scalability and Flexibility',
                  desc: 'Dedicated developers allow team size and composition changes without full-time employment. They can swiftly adapt to project needs and market circumstances, assuring timely delivery and resource optimisation.',
                  IconComp: Sliders
                },
                {
                  title: 'Focused and Committed Effort',
                  desc: 'Dedicated developers are more productive and committed since they only work on their tasks. This dedication generally improves code quality, turnaround times, and development process cohesion.',
                  IconComp: ShieldCheck
                },
                {
                  title: 'Reduced Time to Market',
                  desc: 'Dedicated developers can speed up project development by using their experience and attention. Businesses can optimize operations, eliminate bottlenecks, and finish projects quickly by hiring dedicated developers.',
                  IconComp: Zap
                },
                {
                  title: 'Enhanced Innovation and Creativity',
                  desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers can also encourage a collaborative atmosphere where in-house and external talent merge their expertise.',
                  IconComp: Lightbulb
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100/90 transition-all flex flex-col justify-start space-y-4 text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 21. Hire Mean Stack Developer In 4 Easy Steps (Image 3) */}
      <HireDeveloper4Steps
        title="Hire Mean Stack Developer In 4 Easy Steps"
        subtitle="Mean stack offers a number of advantages over another platform. Some of them are:"
      />

      {/* 22. Video Testimonials / Our Story, Their Words (Image 4 Top) */}
      <VideoTestimonialsStory />

      {/* 23. Business Friendly Hiring Models (Image 4 Bottom) */}
      <EngagementModelsSection
        title="Business Friendly Hiring Models : Building Greater Futures Through Innovation"
        subtitle="We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:"
      />

      {/* 24. Success Matrix (Image 1) */}
      <SuccessMatrixGrid />

      {/* 25. Unveiling Our Innovative Solution (Image 2) */}
      <InnovativeSolutionVideo />

      {/* 26. Process We Follow (Image 3) */}
      <ProcessWeFollow />

      {/* 27. What Our Clients Say (Image 4) */}
      <ClientReviewsDarkSection />

      {/* 28. Digital Transformation Through Innovation and Collective Knowledge (Image 5) */}
      <DigitalTransformationCaseStudies />

      {/* 29. Frequently Asked Questions (Image 1) */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={[
          {
            id: 1,
            question: "1. Why mean Stack Development?",
            answer: "MEAN Stack (MongoDB, Express.js, Angular, Node.js) enables single-language full-stack JavaScript development, high performance with non-blocking I/O, rapid prototyping, and cost-effective scalable enterprise web applications."
          },
          {
            id: 2,
            question: "2. Is Mean Stack Construction Scalable?",
            answer: "Yes, MEAN Stack architecture relies on Node.js asynchronous event-driven model and MongoDB distributed document database, allowing effortless horizontal scaling across cloud instances."
          },
          {
            id: 3,
            question: "3. Is Mean Stack Development an economically viable option?",
            answer: "Using JavaScript across frontend and backend significantly reduces development overhead, streamlines code reusability, and speeds up time-to-market compared to multi-language stacks."
          },
          {
            id: 4,
            question: "4. Why should I hire MEAN Stack developers from Sapphire Solutions?",
            answer: "Our MEAN stack developers have 23+ years of combined experience, 320+ 5-star Clutch reviews, strict NDA compliance, zero onboarding delay, and 24/7 SLA technical support."
          },
          {
            id: 5,
            question: "5. What are the benefits of using the MEAN Stack for web application development?",
            answer: "Key benefits include single-page application responsiveness with Angular, flexible JSON schema with MongoDB, high-throughput RESTful APIs with Express, and lightning-fast server performance with Node.js."
          },
          {
            id: 6,
            question: "6. Do your MEAN Stack developers offer full project lifecycle support?",
            answer: "Yes, we handle everything from discovery, UI/UX wireframing, architecture design, and sprint development to automated QA testing, cloud deployment, and post-launch maintenance."
          },
          {
            id: 7,
            question: "7. Can I hire remote MEAN Stack developers from Sapphire Solutions for my business?",
            answer: "Absolutely. We offer flexible engagement models—hourly ($21/hr), part-time, or dedicated monthly retainers aligned with your timezone."
          },
          {
            id: 8,
            question: "8. What kind of web applications can be built using the MEAN Stack?",
            answer: "You can build enterprise SaaS portals, eCommerce stores, real-time messaging apps, healthcare portals, ERP & CRM systems, streaming platforms, and custom REST/GraphQL API backends."
          }
        ]}
      />

      {/* 30. Social Media (Image 2 Top) */}
      <SocialMediaSection />

      {/* 31. Our Recent Blogs (Image 2 Bottom) */}
      <RecentBlogsSection />

      {/* 32. What Sets Us Apart As Mean Stack Development Company? (Image 3) */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Mean Stack Development Company?"
        description="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* 33. Have Mean Stack Development Challenge To Address ? (Image 4 Top) */}
      <ConversionCalloutBanner
        data={{
          title: "Have Mean Stack Development Challenge To Address ?",
          description: "Get access to top Mean Stack developers to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* 34. Subscribe us and Get the latest updates and news (Image 4 Bottom) */}
      <SubscribeNewsletterSection />
    </>
  );
};

export default HireMeanStackDevelopersService;

