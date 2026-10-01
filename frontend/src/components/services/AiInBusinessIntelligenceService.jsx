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
import { CuttingEdgeTechAiSection } from './CuttingEdgeTechAiSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
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



  const biFaqList = [
    {
      id: 1,
      question: '1. What is a business intelligence platform?',
      answer: 'A Business Intelligence (BI) platform is a tech-driven architecture that ingests, cleanses, analyzes, and visualizes raw enterprise data into interactive dashboards and actionable analytics for strategic decision-making.'
    },
    {
      id: 2,
      question: '2. Why is business intelligence important?',
      answer: 'Business Intelligence empowers organizations to eliminate guesswork, detect market trends early, optimize operational performance, reduce bottlenecks, and maximize revenue using real-time data insights.'
    },
    {
      id: 3,
      question: '3. How business intelligence works?',
      answer: 'BI works by connecting to disparate data sources, executing Automated ETL (Extract, Transform, Load) pipelines into a centralized data warehouse, and running analytical models visualized on custom web dashboards.'
    },
    {
      id: 4,
      question: '4. What kinds of services related to business intelligence do you provide?',
      answer: 'We provide end-to-end BI services including Custom BI Dashboard Development, Embedded BI for SaaS, Predictive Analytics & AI Integration, Data Warehouse Engineering, and Real-Time Reporting Solutions.'
    },
    {
      id: 5,
      question: '5.How can you assist with the business intelligence solutions already in place?',
      answer: 'We upgrade legacy BI tools, optimize query performance, integrate modern AI/ML algorithms, rebuild slow dashboards, and unify fragmented database infrastructure.'
    },
    {
      id: 6,
      question: '6.In your capacity as a business intelligence consultant, what exactly do you do?',
      answer: 'As BI consultants, we assess your data maturity, architect scalable data pipelines, select optimal BI frameworks, implement SOC2-compliant security, and train internal teams to maximize ROI.'
    },
    {
      id: 7,
      question: '7. What makes Sapphire Software Solutions a leading business intelligence company?',
      answer: 'With 23+ years of experience, 1500+ completed projects, senior data engineers, and proven track record across Fortune 500 companies, Firevy / Sapphire delivers bank-grade, high-performance BI platforms.'
    },
    {
      id: 8,
      question: '8. What business intelligence services does Sapphire Software Solutions provide?',
      answer: 'We offer full-lifecycle BI engineering: custom dashboards, data warehouse automation, predictive machine learning, NL2SQL natural language queries, and continuous 24/7 BI maintenance.'
    },
    {
      id: 9,
      question: '9. How long does it take Sapphire Software Solutions to deliver a business intelligence project?',
      answer: 'Project timelines range from 2–4 weeks for MVP BI dashboard deployments to 2–4 months for complex enterprise-wide data warehouse and AI-driven predictive analytics platforms.'
    },
    {
      id: 10,
      question: '10. What engagement models does Sapphire Software Solutions offer for BI services?',
      answer: 'We offer flexible engagement models including Dedicated Developer Hire (hourly/monthly), Fixed-Price Milestone Delivery, and Managed Team Sprints.'
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
              <div className="w-full max-w-lg flex items-center justify-center">
                <img
                  src="/images/ai_delivering_services_illustration_nobg.png"
                  alt="AI in Business Intelligence"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-102"
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
              <div className="w-full max-w-md flex items-center justify-center">
                <img
                  src="/images/ai_delivering_services_illustration_nobg.png"
                  alt="AI In Business Management Services"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-102"
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
      {/* =========================================================================
          2. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER (Animated Scrolling Marquee)
          ========================================================================= */}
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
      <CuttingEdgeTechAiSection title="Cutting Edge Technology Sapphire Use For Artificial Intelligence Development" />

      <PremiumServicesGrid />

      {/* SUCCESS STORIES SECTION */}
      <AiSuccessStoriesSection />

      {/* =========================================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY BANNER (Matching User Image)
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          BENEFITS OF BUSINESS INTELLIGENCE (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight leading-tight">
              Benefits of Business Intelligence
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
              Business Intelligence (BI) Services help companies turn raw data into actionable insights to improve decision-making and strategic development. Benefits of Business Intelligence Services:
            </p>
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
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Decision-making</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Real-time data analysis from BI Services helps firms make smart choices. These services help firms see patterns, spot opportunities and make strategic choices that boost growth and efficiency by combining data from several sources.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 18h24M12 24h18M12 30h12" strokeWidth="2.5" />
                  <rect x="8" y="10" width="32" height="28" rx="3" fill="#BAE6FD" opacity="0.4" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">More efficient operations</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Business process inefficiencies and bottlenecks are identified by BI Services to simplify operations and streamline operations, cut costs, and boost productivity by examining performance indicators and operational data.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="24" cy="14" rx="14" ry="5" fill="#BAE6FD" />
                  <path d="M10 14v10c0 2.8 6.3 5 14 5s14-2.2 14-5V14" />
                  <path d="M10 24v10c0 2.8 6.3 5 14 5s14-2.2 14-5V24" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Data Quality</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Data quality and consistency are essential for proper analysis and reporting. Data cleaning, integration, and validation by BI Services ensures that your business choices are founded on correct data. This boosts data and insight trust.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="16" r="6" fill="#BAE6FD" />
                  <path d="M14 36c0-6 4.5-10 10-10s10 4 10 10" strokeWidth="2.2" />
                  <path d="M34 22l6 6m0-6l-6 6" strokeWidth="2.2" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Competitive Edge</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Market trends, consumer behavior, and competition performance insights from BI Services provide firms an advantage. By anticipating industry trends and understanding client wants, firms may innovate, enhance their offers, and gain market share.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="10" width="32" height="22" rx="3" fill="#BAE6FD" />
                  <line x1="16" y1="38" x2="32" y2="38" strokeWidth="2.5" />
                  <line x1="24" y1="32" x2="24" y2="38" strokeWidth="2.5" />
                  <path d="M16 26l5-6 4 3 7-8" strokeWidth="2.2" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Custom Dashboards, Reports</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Custom dashboards and reports for particular company requirements are a major feature of BI Services. These tools let stakeholders view KPIs and other vital information in an understandable and accessible style.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 36h24V12H12v24z" fill="#BAE6FD" stroke="#0082C8" />
                  <path d="M28 20l8-8m-8 0h8v8" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Scalability</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                BI Services scale to suit the demands of small and big organizations and scale with your business's data quantities and complexity, meeting your changing analytical demands. This flexibility lets companies increase their BI capabilities as they grow and change.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR CORE AI-BASED DECISION INTELLIGENCE PLATFORM FOR ENTERPRISES (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100 overflow-hidden w-full">
        {/* Title Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight max-w-5xl mx-auto">
            Our Core AI-based decision Intelligence Platform for Enterprises
          </h2>
        </div>

        {/* Full Width Edge-to-Edge Horizontal Carousel Container */}
        <div className="w-full pl-4 sm:pl-8 lg:pl-16 pr-0 overflow-hidden">
          <div className="relative overflow-hidden w-full py-2">
            <div
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{ transform: `translateX(-${corePlatformSlide * 480}px)` }}
            >
              {corePlatformCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#DDF4FF] rounded-[18px] p-7 sm:p-8 border border-sky-100/70 shadow-xs flex flex-col justify-between text-left shrink-0 w-[340px] sm:w-[410px] lg:w-[460px] min-h-[220px] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-[800] text-slate-900 mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-[#334155] leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Slider Navigation Arrows */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          <button
            onClick={() => setCorePlatformSlide(prev => Math.max(0, prev - 1))}
            disabled={corePlatformSlide === 0}
            className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${corePlatformSlide === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
          >
            ←
          </button>
          <button
            onClick={() => setCorePlatformSlide(prev => Math.min(corePlatformCards.length - 1, prev + 1))}
            disabled={corePlatformSlide >= corePlatformCards.length - 1}
            className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${corePlatformSlide >= corePlatformCards.length - 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
          >
            →
          </button>
        </div>
      </section>

      {/* 1. Business Friendly Hiring Models : Building Greater Futures Through Innovation */}
      <AndroidHiringModels />

      {/* 2. Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 3. Process We Follow */}
      <ProcessWeFollow />

      <FeaturedInLogosGrid />

      {/* Digital Transformation Through Innovation and Collective Knowledge */}
      <DigitalTransformationCaseStudies />

      {/* Frequently Asked Questions Section */}
      <SapphireFaqSection customFaqs={biFaqList} />

      {/* Our Recent Blogs */}
      <MobileAppRecentBlogsSection />

      {/* What Sets Us Apart As Mobile App Development Company */}
      <MobileAppWhatSetsUsApartSection />

      {/* Have A Data Analytics Challenge To Address CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have A Data Analytics Challenge To Address ?"
        subtitle="Get access to top Data Analytics Specialists to transform your data into actionable business intelligence."
        buttonText="Hire Now"
      />
    </div>
  );
};

export default AiInBusinessIntelligenceService;
