import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import AiSuccessStoriesSection from './AiSuccessStoriesSection';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Database,
  Search,
  PieChart
} from 'lucide-react';

export const AiInBusinessIntelligenceService = () => {
  const [cuttingEdgeSlide, setCuttingEdgeSlide] = useState(0);
  const [corePlatformSlide, setCorePlatformSlide] = useState(0);

  const corePlatformCards = [
    {
      title: 'Embedded BI for SaaS Products',
      desc: 'We can embed AI-enabled BI components into your current SaaS platform or new SaaS product which will add additional value for your customers and intelligence to your product.'
    },
    {
      title: 'Custom BI Dashboard Development',
      desc: 'We can build custom dashboards that incorporate AI algorithms to visualize your real-time KPIs, trends, and decision-support visuals.'
    },
    {
      title: 'Predictive Analytics Integration',
      desc: 'We will leverage machine learning models that can predict sales, customer churn, demand forecasting, and anomalies in operations.'
    },
    {
      title: 'Data Warehouse & ETL Automation',
      desc: 'We will automate data ingestion and ETL pipelines to prepare structured big data for real-time AI modeling and accurate business intelligence.'
    }
  ];

  const expertOfferings = [
    {
      title: 'Neuro-Symbolic AI',
      desc: 'In order to overcome the shortcomings of both neural and symbolic AI architectures, neuro-symbolic AI combines both to create a strong AI that is able to reason, learn, and model cognitive processes.',
      iconType: 'neuro'
    },
    {
      title: 'Explainable AI (XAI)',
      desc: 'It contributes to defining model correctness, fairness, transparency, and decision-making results driven by AI. When implementing AI models into production, an organization needs to be able to explain AI to gain the confidence of its stakeholders.',
      iconType: 'xai'
    },
    {
      title: 'Quantum Machine Learning',
      desc: 'At the vanguard of AI research and application, quantum machine learning holds the potential to solve some of the most difficult issues in a variety of industries.',
      iconType: 'quantum'
    },
    {
      title: 'Multimodal AI',
      desc: 'AI systems are able to process multimodal artificial intelligence across a range of industries.',
      iconType: 'multimodal'
    },
    {
      title: 'Generative AI',
      desc: 'We use top-notch models such as GAN, Diffusion, and LLM to help construct Autonomous AI agents, multi-modal virtual assistants and customer support, automated content generation, conversation intelligence, and other unique solutions.',
      iconType: 'generative'
    },
    {
      title: 'OpenAI’s GPT-4',
      desc: 'The big multimodal language model GPT-4 from OpenAI creates text based on both textual and visual input. We employ it for the analysis of qualitative data, including transcripts and conversations with customer service.',
      iconType: 'gpt'
    }
  ];



  const faqs = [
    {
      q: '1. What is AI in Business Intelligence?',
      a: 'AI in Business Intelligence infuses machine learning and natural language processing into data analytics pipelines to automate insights and forecasting.'
    },
    {
      q: '2. Can AI BI connect to Snowflake, BigQuery, or PostgreSQL?',
      a: 'Yes! Our custom AI BI platforms connect directly to Snowflake, Databricks, BigQuery, Redshift, and relational databases.'
    },
    {
      q: '3. How does NL2SQL benefit non-technical executives?',
      a: 'Executives can type questions like "What were our top 3 regions last quarter?" and instantly receive clean charts and numbers.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI in Business Intelligence Services | Smart Analytics Company"
        description="Transform corporate data into actionable decisions with AI-driven Business Intelligence, NL2SQL, and predictive analytics."
        canonical="/services/ai-in-business-intelligence"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-[#006B8F] text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Smart Enterprise Analytics</span>
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] leading-[1.15]">
                AI in Business Intelligence Services
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Supercharge your data analytics with AI. We integrate Natural Language Queries (NL2SQL), automated anomaly detection, and predictive forecasting to help your leadership team make data-backed decisions faster.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Build AI BI Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="AI in Business Intelligence"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BrandLogoMarquee />



      {/* =========================================================================
          1. AI IN BUSINESS MANAGEMENT SERVICES (Matching User Image)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: BI Dashboard Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-md border border-slate-100">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="AI In Business Management Services"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            {/* Right Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                AI In Business Management Services
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                As a trusted AI in Business Intelligence Development Services, we help organizations turn raw data into competitive advantage. Hire AI developers for BI Integration expertise include robust, secure web-based BI dashboards, real-time AI in Business Analytics engine platforms designed to harness and interpret big data, and Industry AI models. We have years of experience working with businesses of all types, entrepreneurs, and global startups, combining domain knowledge with security-based architecture and agile development practices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER (Matching User Image)
          ========================================================================= */}
      <section className="py-4 sm:py-5 bg-[#005F96] text-white font-sans text-left border-y border-cyan-800/60 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
            {/* Title & Laurel Wreath Trophy */}
            <div className="flex items-center space-x-4 shrink-0">
              <h3 className="text-[19px] sm:text-[23px] font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT<br className="hidden sm:inline" /> Company on Clutch
              </h3>

              {/* Golden Laurel Wreath Trophy Cup */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  <defs>
                    <linearGradient id="goldWreathGradBI" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF176" />
                      <stop offset="40%" stopColor="#FFD700" />
                      <stop offset="75%" stopColor="#FFA000" />
                      <stop offset="100%" stopColor="#FF8F00" />
                    </linearGradient>
                    <linearGradient id="goldCupGradBI" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF9C4" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#E65100" />
                    </linearGradient>
                  </defs>
                  <path d="M50 80 C32 78 18 64 18 45 C18 30 28 18 42 14" stroke="url(#goldWreathGradBI)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M50 80 C68 78 82 64 82 45 C82 30 72 18 58 14" stroke="url(#goldWreathGradBI)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <ellipse cx="40" cy="15" rx="3.5" ry="7" transform="rotate(-40 40 15)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="32" cy="22" rx="3.5" ry="7" transform="rotate(-30 32 22)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="25" cy="32" rx="3.5" ry="7" transform="rotate(-15 25 32)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="21" cy="44" rx="3.5" ry="7" transform="rotate(0 21 44)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="22" cy="56" rx="3.5" ry="7" transform="rotate(15 22 56)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="28" cy="67" rx="3.5" ry="7" transform="rotate(30 28 67)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="36" cy="75" rx="3.5" ry="7" transform="rotate(45 36 75)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="60" cy="15" rx="3.5" ry="7" transform="rotate(40 60 15)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="68" cy="22" rx="3.5" ry="7" transform="rotate(30 68 22)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="75" cy="32" rx="3.5" ry="7" transform="rotate(15 75 32)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="79" cy="44" rx="3.5" ry="7" transform="rotate(0 79 44)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="78" cy="56" rx="3.5" ry="7" transform="rotate(-15 78 56)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="72" cy="67" rx="3.5" ry="7" transform="rotate(-30 72 67)" fill="url(#goldWreathGradBI)" />
                  <ellipse cx="64" cy="75" rx="3.5" ry="7" transform="rotate(-45 64 75)" fill="url(#goldWreathGradBI)" />
                  <polygon points="50,77 54,81 50,85 46,81" fill="url(#goldWreathGradBI)" />
                  <path d="M38 67 H62 L60 72 H40 Z" fill="url(#goldCupGradBI)" />
                  <rect x="42" y="64" width="16" height="3" fill="url(#goldWreathGradBI)" />
                  <rect x="47" y="55" width="6" height="9" fill="url(#goldWreathGradBI)" />
                  <path d="M35 28 H65 V46 C65 53 57 58 50 58 C43 58 35 53 35 46 Z" fill="url(#goldCupGradBI)" />
                  <ellipse cx="50" cy="28" rx="15" ry="3" fill="#FFFDE7" />
                  <path d="M35 32 C26 32 26 44 35 46" stroke="url(#goldWreathGradBI)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M65 32 C74 32 74 44 65 46" stroke="url(#goldWreathGradBI)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* 5 Badges Row */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 overflow-x-auto max-w-full py-1">
              <svg className="w-[82px] sm:w-[92px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
                <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V105L45 115L5 105V2Z" fill="white" stroke="#DC2626" strokeWidth="1.5" />
                <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V18H5V2Z" fill="#B91C1C" />
                <text x="45" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" letterSpacing="0.3">MOST REVIEWED</text>
                <text x="45" y="30" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="800">DEDICATED</text>
                <text x="45" y="38" textAnchor="middle" fill="#B91C1C" fontSize="5.2" fontWeight="800">SOFTWARE DEVELOPMENT</text>
                <text x="45" y="46" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="800">COMPANY 2024</text>
                <rect x="5" y="54" width="80" height="14" fill="#B91C1C" />
                <circle cx="45" cy="61" r="8" fill="#B91C1C" stroke="white" strokeWidth="1.2" />
                <text x="45" y="64.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">★</text>
                <text x="45" y="80" textAnchor="middle" fill="#DC2626" fontSize="7">★★★★★</text>
                <text x="45" y="92" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800">USA</text>
              </svg>

              <svg className="w-[82px] sm:w-[92px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
                <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V105L45 115L5 105V2Z" fill="white" stroke="#DC2626" strokeWidth="1.5" />
                <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V18H5V2Z" fill="#B91C1C" />
                <text x="45" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" letterSpacing="0.3">MOST REVIEWED</text>
                <text x="45" y="34" textAnchor="middle" fill="#B91C1C" fontSize="6.5" fontWeight="900">SOFTWARE</text>
                <text x="45" y="44" textAnchor="middle" fill="#1E293B" fontSize="6.5" fontWeight="900">DEVELOPERS</text>
                <rect x="5" y="54" width="80" height="14" fill="#B91C1C" />
                <circle cx="45" cy="61" r="8" fill="#B91C1C" stroke="white" strokeWidth="1.2" />
                <text x="45" y="64.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">★</text>
                <text x="45" y="80" textAnchor="middle" fill="#DC2626" fontSize="7">★★★★★</text>
                <text x="45" y="92" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800">USA</text>
              </svg>

              <svg className="w-[92px] sm:w-[102px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 100 110" fill="none">
                <circle cx="50" cy="48" r="44" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="50" cy="48" r="38" fill="#0369A1" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                <g fill="#F59E0B" fontSize="8" textAnchor="middle">
                  <text x="32" y="24">★</text>
                  <text x="41" y="20">★</text>
                  <text x="50" y="18">★</text>
                  <text x="59" y="20">★</text>
                  <text x="68" y="24">★</text>
                </g>
                <path d="M44 26h12v7c0 3.3-2.7 6-6 6s-6-2.7-6-6v-7z" fill="#FBBF24" />
                <rect x="42" y="25" width="16" height="2" fill="#FDE047" />
                <rect x="48" y="39" width="4" height="4" fill="#D97706" />
                <rect x="45" y="43" width="10" height="2" fill="#FBBF24" />
                <text x="50" y="52" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="900">TOP DEDICATED</text>
                <text x="50" y="58" textAnchor="middle" fill="white" fontSize="5" fontWeight="800">SOFTWARE</text>
                <text x="50" y="64" textAnchor="middle" fill="white" fontSize="5" fontWeight="800">DEVELOPMENT COMPANY</text>
                <path d="M10 74L20 68H80L90 74L80 82H20L10 74Z" fill="#1D4ED8" stroke="white" strokeWidth="1" />
                <text x="50" y="78" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="900" letterSpacing="0.5">goodfirms.co</text>
                <path d="M18 80L10 94L24 88L26 80H18Z" fill="#1E40AF" />
                <path d="M82 80L90 94L76 88L74 80H82Z" fill="#1E40AF" />
              </svg>

              <svg className="w-[82px] sm:w-[92px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
                <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V105L45 115L5 105V2Z" fill="white" stroke="#DC2626" strokeWidth="1.5" />
                <path d="M5 2C5 0.9 5.9 0 7 0H83C84.1 0 85 0.9 85 2V18H5V2Z" fill="#B91C1C" />
                <text x="45" y="12" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" letterSpacing="0.3">MOST REVIEWED</text>
                <text x="45" y="30" textAnchor="middle" fill="#B91C1C" fontSize="5.5" fontWeight="800">ON-DEMAND SOFTWARE</text>
                <text x="45" y="38" textAnchor="middle" fill="#1E293B" fontSize="5.5" fontWeight="800">DEVELOPMENT COMPANY</text>
                <text x="45" y="46" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="800">2024</text>
                <rect x="5" y="54" width="80" height="14" fill="#B91C1C" />
                <circle cx="45" cy="61" r="8" fill="#B91C1C" stroke="white" strokeWidth="1.2" />
                <text x="45" y="64.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">★</text>
                <text x="45" y="80" textAnchor="middle" fill="#DC2626" fontSize="7">★★★★★</text>
                <text x="45" y="92" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800">USA</text>
              </svg>

              <svg className="w-[85px] sm:w-[95px] h-[105px] sm:h-[115px] drop-shadow-md shrink-0" viewBox="0 0 90 115" fill="none">
                <polygon points="45,2 85,22 85,88 45,108 5,88 5,22" fill="white" stroke="#334155" strokeWidth="2" />
                <polygon points="45,6 81,24 81,86 45,104 9,86 9,24" fill="none" stroke="#64748B" strokeWidth="0.8" />
                <path d="M18 16H72V34H18V16Z" fill="#1E293B" />
                <text x="45" y="24" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="800">TOP DEDICATED</text>
                <text x="45" y="30" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">SOFTWARE COMPANY</text>
                <text x="45" y="58" textAnchor="middle" fill="#0F172A" fontSize="16" fontFamily="sans-serif" fontWeight="900" letterSpacing="-0.5">Clutch</text>
                <circle cx="63" cy="48" r="2" fill="#DA291C" />
                <line x1="20" y1="68" x2="70" y2="68" stroke="#CBD5E1" strokeWidth="1" />
                <text x="45" y="78" textAnchor="middle" fill="#334155" fontSize="6.5" fontWeight="900" letterSpacing="0.3">DEVELOPERS</text>
                <text x="45" y="88" textAnchor="middle" fill="#64748B" fontSize="8" fontWeight="900">2022</text>
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. ADVANCE AI IN BUSINESS STRATEGY (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Advance AI in Business Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 bg-[#ECF4F8] rounded-[24px] p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-center min-h-[260px]">
              <div className="text-[#0082C8] text-6xl font-serif font-black leading-none mb-2">“</div>
              <h3 className="text-[24px] sm:text-[28px] font-[800] text-[#006B8F] leading-tight">
                Smart Software Development for Secure Applications
              </h3>
            </div>

            {/* Right Paragraphs */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We develop BI platforms based on AI models and capabilities, making it easier for companies to develop deep business insights into business operations, customer behavior, and sales forecasting. Our systems develop deep insights by integrating machine learning models with interactive buttons in our BI dashboards, in real-time, supporting big data analytics with real time, predictive analytics. Our solutions can be adapted to many industry verticals, from retail and finance to manufacturing and healthcare.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We have a knowledgeable mix of data scientists, AI engineers, full-stack developers, and BI expertise that work together to develop performant applications with each project being aligned with business objectives. We successfully delivered projects
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. CUTTING EDGE TECHNOLOGY SAPPHIRE USE FOR ARTIFICIAL INTELLIGENCE DEVELOPMENT (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2.5">
            <h2 className="text-[26px] sm:text-[34px] font-[800] text-slate-950 tracking-tight">
              Cutting Edge Technology Sapphire Use For Artificial Intelligence Development
            </h2>
          </div>

          {/* Light Blue Cards Slider/Carousel Container */}
          <div className="relative overflow-hidden max-w-6xl mx-auto px-1 py-2">
            <div
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{ transform: `translateX(-${cuttingEdgeSlide * 315}px)` }}
            >
              {expertOfferings.map((off, idx) => (
                <div
                  key={idx}
                  className="bg-[#DDF4FF] rounded-[18px] p-6 sm:p-7 border border-sky-100/70 shadow-xs flex flex-col justify-between text-left shrink-0 w-[290px] sm:w-[310px] min-h-[260px] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* SVG Line-Art Icon */}
                    <div className="mb-5 flex items-center justify-start text-[#0082C8]">
                      {off.iconType === 'neuro' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="24" cy="24" r="14" fill="#BAE6FD" stroke="#0082C8" />
                          <path d="M24 16v16m-8-8h16" strokeWidth="2" />
                          <circle cx="24" cy="24" r="4" fill="#0082C8" />
                          <circle cx="24" cy="10" r="2.5" fill="#0082C8" />
                          <circle cx="24" cy="38" r="2.5" fill="#0082C8" />
                          <circle cx="10" cy="24" r="2.5" fill="#0082C8" />
                          <circle cx="38" cy="24" r="2.5" fill="#0082C8" />
                        </svg>
                      )}
                      {off.iconType === 'xai' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="20" cy="20" r="11" fill="#BAE6FD" stroke="#0082C8" strokeWidth="2" />
                          <line x1="28" y1="28" x2="38" y2="38" strokeWidth="3" strokeLinecap="round" />
                          <path d="M15 20h10m-5-5v10" strokeWidth="2" />
                        </svg>
                      )}
                      {off.iconType === 'quantum' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(30 24 24)" />
                          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-30 24 24)" />
                          <circle cx="24" cy="24" r="4" fill="#0082C8" />
                        </svg>
                      )}
                      {off.iconType === 'multimodal' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="8" width="36" height="26" rx="3" fill="#BAE6FD" stroke="#0082C8" />
                          <line x1="18" y1="40" x2="30" y2="40" strokeWidth="2.5" />
                          <line x1="24" y1="34" x2="24" y2="40" strokeWidth="2.5" />
                          <path d="M14 18l4 4-4 4" strokeWidth="2" />
                          <line x1="22" y1="26" x2="30" y2="26" strokeWidth="2" />
                          <circle cx="33" cy="16" r="3" fill="#0082C8" />
                        </svg>
                      )}
                      {off.iconType === 'generative' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 36h12m-10 4h8" strokeWidth="2.2" />
                          <path d="M15 22a9 9 0 1 1 18 0c0 3.8-2.2 7-5 8.7V34H20v-3.3c-2.8-1.7-5-4.9-5-8.7z" fill="#BAE6FD" />
                          <circle cx="24" cy="21" r="3" fill="#0082C8" />
                          <path d="M24 8v-4m-12 8l-3-3m27 3l3-3m-30 12h-4m34 0h-4" strokeWidth="1.8" />
                        </svg>
                      )}
                      {off.iconType === 'gpt' && (
                        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="8" y="10" width="32" height="22" rx="3" fill="#BAE6FD" stroke="#0082C8" />
                          <path d="M4 38h40a2 2 0 0 0 2-2v-2H2v2a2 2 0 0 0 2 2z" fill="#0082C8" />
                          <path d="M17 18l-4 4 4 4m14-8l4 4-4 4" strokeWidth="2" />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-[17px] font-[800] text-slate-900 mb-2.5 tracking-tight">
                      {off.title}
                    </h3>
                    <p className="text-[13.5px] text-[#334155] leading-relaxed font-normal">
                      {off.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Slider Navigation Arrows */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={() => setCuttingEdgeSlide(prev => Math.max(0, prev - 1))}
              disabled={cuttingEdgeSlide === 0}
              className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${
                cuttingEdgeSlide === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              ←
            </button>
            <button
              onClick={() => setCuttingEdgeSlide(prev => Math.min(expertOfferings.length - 3, prev + 1))}
              disabled={cuttingEdgeSlide >= expertOfferings.length - 3}
              className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${
                cuttingEdgeSlide >= expertOfferings.length - 3 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              →
            </button>
          </div>
        </Container>
      </section>

      <PremiumServicesGrid />

      {/* SUCCESS STORIES SECTION */}
      <AiSuccessStoriesSection />

      {/* =========================================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY BANNER (Matching User Image)
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          KEY BENEFITS OF AI IN BUSINESS INTELLIGENCE DEVELOPMENT SERVICES (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight leading-tight">
              Key Benefits of AI in Business Intelligence Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="16" />
                  <circle cx="24" cy="24" r="8" fill="#BAE6FD" />
                  <circle cx="24" cy="24" r="3" fill="#0082C8" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Quicker Decisions</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Get insights and predictions in real-time so you can make faster and better strategic decisions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="10" width="32" height="22" rx="3" fill="#BAE6FD" />
                  <line x1="16" y1="38" x2="32" y2="38" strokeWidth="2.5" />
                  <line x1="24" y1="32" x2="24" y2="38" strokeWidth="2.5" />
                  <path d="M18 20l4 4 8-8" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Less Error</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Reduce the potential for human error and subjectivity because you can now employ AI algorithms to validate, analyze, and interpret your data.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 38l12-14 8 8 14-16" strokeWidth="2.5" />
                  <path d="M34 16h8v8" strokeWidth="2.5" fill="#BAE6FD" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">More Efficient Operations</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Automate repetitive, data-driven tasks, streamline workflows, and spend less time reporting and more time analyzing.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="10" fill="#BAE6FD" />
                  <path d="M24 6v4m0 28v4m-18-18h4m28 0h4m-7-11l-3 3m-18 18l-3 3m0-24l3 3m18 18l3 3" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">More Business Agility</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Quickly adapt your business to changing market conditions with intelligent systems that evolve and learn with your data.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 28a10 10 0 0 1 18-6 8 8 0 1 1 6 12H12z" fill="#BAE6FD" stroke="#0082C8" />
                  <path d="M24 20v12m-4-4l4 4 4-4" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Scalable Data Structure</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Construct systems that grow as your data and business grow and make less frequent structural changes.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="18" r="7" fill="#BAE6FD" />
                  <path d="M10 38c0-7 6-12 14-12s14 5 14 12" strokeWidth="2.2" />
                  <circle cx="36" cy="14" r="2.5" fill="#0082C8" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Insights Empowering Users</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Empower business users with the tools to generate their own insights, visualizations, and forecasts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR CORE AI-BASED DECISION INTELLIGENCE PLATFORM FOR ENTERPRISES (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2.5">
            <h2 className="text-[26px] sm:text-[34px] font-[800] text-slate-950 tracking-tight leading-tight">
              Our Core AI-based decision Intelligence Platform for Enterprises
            </h2>
          </div>

          {/* Light Blue Cards Slider/Carousel Container */}
          <div className="relative overflow-hidden max-w-6xl mx-auto px-1 py-2">
            <div
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{ transform: `translateX(-${corePlatformSlide * 315}px)` }}
            >
              {corePlatformCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#DDF4FF] rounded-[18px] p-6 sm:p-7 border border-sky-100/70 shadow-xs flex flex-col justify-between text-left shrink-0 w-[290px] sm:w-[320px] min-h-[220px] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="text-[17px] font-[800] text-slate-900 mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] text-[#334155] leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Slider Navigation Arrows */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={() => setCorePlatformSlide(prev => Math.max(0, prev - 1))}
              disabled={corePlatformSlide === 0}
              className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${
                corePlatformSlide === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              ←
            </button>
            <button
              onClick={() => setCorePlatformSlide(prev => Math.min(corePlatformCards.length - 3, prev + 1))}
              disabled={corePlatformSlide >= corePlatformCards.length - 3}
              className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${
                corePlatformSlide >= corePlatformCards.length - 3 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              →
            </button>
          </div>
        </Container>
      </section>

      {/* 1. Business Friendly Hiring Models : Building Greater Futures Through Innovation */}
      <AndroidHiringModels />

      {/* 2. Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 3. Process We Follow */}
      <ProcessWeFollow />

      <FeaturedInLogosGrid />

      <section className="py-14 bg-[#005F96] text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Turn Big Data into Instant Business Decisions with AI BI
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#005F96] rounded-lg font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Consult BI Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AiInBusinessIntelligenceService;
