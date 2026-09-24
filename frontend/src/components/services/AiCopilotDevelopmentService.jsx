import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AiSuccessStoriesSection from './AiSuccessStoriesSection';
import ComprehensiveCopilotServicesSection from './ComprehensiveCopilotServicesSection';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import KeyBenefitsCopilotSection from './KeyBenefitsCopilotSection';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import WorkProcessGrid from '../home/WorkProcessGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import BrandLogoGrid from '../home/BrandLogoGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AndroidChallengeCtaBanner from './AndroidChallengeCtaBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import { ArrowRight } from 'lucide-react';

export const AiCopilotDevelopmentService = () => {
  const faqs = [
    {
      q: '1. What is AI Copilot Development and how does it benefit businesses?',
      a: 'AI Copilot Development involves creating domain-specific virtual AI assistants trained on proprietary enterprise knowledge bases, APIs, and workflows. They assist employees by automating routine tasks, summarizing context, writing code, and orchestrating complex backend processes.'
    },
    {
      q: '2. How secure is our proprietary corporate data with custom AI Copilots?',
      a: 'We implement zero-trust data architectures, private VPC model deployments (AWS, Azure, Google Cloud), and strict NDAs. Your internal data is never shared with public model training pools or third parties.'
    },
    {
      q: '3. Can an AI Copilot integrate with our existing enterprise software?',
      a: 'Yes, custom AI Copilots seamlessly connect via REST/GraphQL APIs, webhooks, or custom plugins into VS Code, Slack, Microsoft Teams, Salesforce, JIRA, SAP, and legacy web portals.'
    },
    {
      q: '4. What is the typical timeframe to build an enterprise AI Copilot?',
      a: 'An initial functional prototype/MVP copilot takes 3 to 5 weeks, while full enterprise integration with multi-modal capabilities takes 8 to 12 weeks.'
    },
    {
      q: '5. What hiring models do you offer for AI Copilot engineering?',
      a: 'We offer flexible Fixed Price project milestones, hourly Time & Material ($21/hr), and dedicated full-time AI engineering squads.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI Copilot Development Company | Custom AI Assistant & Agent Solutions"
        description="Firevy.Co is a trusted AI Copilot Development Company. We build intelligent, secure, and scalable AI copilots and AI virtual assistants to automate workflows and supercharge enterprise productivity."
        canonical="/services/ai-copilot-development"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO SECTION (Exact 1:1 Screenshot Match)
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title, Long Description & Blue Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                AI Copilot Development Company
              </h1>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Unlock the power of artificial intelligence and AI copilot integration and automation services with expert AI Copilot development services from a trusted AI Agent & Copilot Development Company. We specialize in building intelligent, secure, and scalable AI-driven solutions for businesses of all sizes. Our Custom AI copilot development services enhance productivity, streamline operations, and optimize workflows—all at an affordable cost. Whether you are a startup or a large enterprise, our team ensures a seamless AI integration tailored to your business needs. Contact us today for a free quote and elevate your operations with AI-driven automation!
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg font-sans"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Vector SVG Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/ai_copilot_hero_illustration.svg"
                  alt="AI Copilot Development Company Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2ND COMPONENT: BRAND LOGOS MARQUEE (TDSG, Astral Pipes, CLP, Adani, Toyota, etc.)
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3RD COMPONENT: A TRUSTED LEADER IN AI ASSISTANT DEVELOPMENT (1:1 Match)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Robot Assistant Vector Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/ai_copilot_trusted_leader_illustration.svg"
                  alt="A Trusted Leader In AI Assistant Development Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Title & Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                A Trusted Leader In AI Assistant Development
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                As a leading Generative AI Copilot development company, we provide secure and innovative web-based AI systems designed to empower businesses, startups, and entrepreneurs. With years of experience in AI, machine learning, and automation, we develop intelligent copilots that enhance decision-making, reduce manual efforts, and improve overall efficiency. Our Enterprise AI copilot Development Services providers and industry-specific AI solutions ensure reliability, adaptability, and superior performance. Trust us to deliver cutting-edge AI solutions that drive business success.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4TH COMPONENT: ARTIFICIAL INTELLIGENCE MARKET STATS (1:1 Screenshot Match)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80 font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Title, Paragraph & Button */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Artificial Intelligence Market Stats
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                The global artificial intelligence (AI) market was estimated to be worth US$119.78 billion in 2022. It is anticipated to reach US$1,591.03 billion by 2030, with a compound annual growth rate (CAGR) of 38.1% from 2022 to 2030.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg font-sans"
                >
                  <span>Connect With An Expert</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Software Market Volume Chart Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg overflow-hidden rounded-xl shadow-md border border-slate-200 bg-white">
                <img
                  src="/images/ai_market_stats_chart.svg"
                  alt="Software Market Volume (USD Billion) Chart"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5TH COMPONENT: CLUTCH TOP RATED WEB DEVELOPMENT COMPANY BANNER
          ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated Web Development Company on Clutch" />

      {/* =========================================================================
          6TH COMPONENT: HIGH-PERFORMANCE AI COPILOT SOLUTIONS FOR GLOBAL BUSINESSES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight">
              High-Performance AI Copilot Solutions for Global Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
            {/* Left Quote Card Box (1:1 Screenshot Match) */}
            <div className="lg:col-span-5 bg-[#ECF4F8] rounded-[24px] p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-center min-h-[240px]">
              <div className="text-[#005F96] text-6xl font-serif font-black leading-none mb-2">“</div>
              <h3 className="text-[24px] sm:text-[28px] font-[800] text-[#005F96] leading-tight">
                Innovative and intuitive websites
              </h3>
            </div>

            {/* Right Paragraph Columns */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Our AI Copilot solutions are designed to be secure, scalable, and high-performing, catering to businesses across various industries. We leverage cutting-edge AI and machine learning technologies to develop intelligent copilots that streamline operations and drive innovation. Our expertise in AI-driven automation, predictive analytics, and real-time data processing ensures that businesses can optimize their workflows and enhance productivity.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                With extensive experience in global projects, our skilled development team creates AI copilots that seamlessly integrate with existing systems, providing valuable insights and automation capabilities. We work closely with clients to understand their specific business needs and deliver customized AI solutions that drive measurable results. Whether you need AI-driven customer support, workflow automation, or predictive analytics, we build business-specific AI applications that enhance efficiency and scalability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7TH COMPONENT: OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* =========================================================================
          8TH COMPONENT: SUCCESS STORIES SECTION (1:1 Screenshot Match)
          ========================================================================= */}
      <AiSuccessStoriesSection />

      {/* =========================================================================
          9TH COMPONENT: COMPREHENSIVE COPILOT SOFTWARE DEVELOPMENT
          ========================================================================= */}
      <ComprehensiveCopilotServicesSection />

      {/* =========================================================================
          10TH COMPONENT: PROUD TO HAVE PICKED THESE UP ALONG THE WAY
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          11TH COMPONENT: KEY BENEFITS OF AI COPILOT SOLUTIONS
          ========================================================================= */}
      <KeyBenefitsCopilotSection />

      {/* =========================================================================
          12TH COMPONENT (SEQUENCE 1): BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          13TH COMPONENT (SEQUENCE 2): UNVEILING OUR INNOVATIVE SOLUTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          14TH COMPONENT (SEQUENCE 3): PROCESS WE FOLLOW
          ========================================================================= */}
      <WorkProcessGrid />

      {/* =========================================================================
          15TH COMPONENT (SEQUENCE 4): OUR STORY, THEIR WORDS
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          16TH COMPONENT (SEQUENCE 5): TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <BrandLogoGrid />

      {/* =========================================================================
          SUCCESS MATRIX GRID (Directly Below Trusted By The World's Leading Brands)
          ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          TECHNOLOGY STACK GRID (Directly Below Success Matrix, 1:1 Screenshot Match)
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          17TH COMPONENT (SEQUENCE 6): WE HAVE BEEN FEATURED IN
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          18TH COMPONENT (SEQUENCE 7): DIGITAL TRANSFORMATION THROUGH INNOVATION AND COLLECTIVE KNOWLEDGE
          ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          19TH COMPONENT (SEQUENCE 8): FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <SapphireFaqSection faqList={faqs} />

      {/* =========================================================================
          20TH COMPONENT (SEQUENCE 9): OUR RECENT BLOGS
          ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* =========================================================================
          21ST COMPONENT (SEQUENCE 10): BUSINESS FRIENDLY HIRING MODELS (REPEATED AT BOTTOM)
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          22ND COMPONENT: WHAT SETS US APART AS AI COPILOT DEVELOPMENT COMPANY
          ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As AI Copilot Development Company?"
      />

      {/* =========================================================================
          23RD COMPONENT: HAVE AI COPILOT DEVELOPMENT CHALLENGE TO ADDRESS CTA BANNER
          ========================================================================= */}
      <AndroidChallengeCtaBanner
        title="Have AI Copilot Development Challenge To Address ?"
        subtitle="Get access to top AI copilot developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* =========================================================================
          24TH COMPONENT: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
          ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default AiCopilotDevelopmentService;
