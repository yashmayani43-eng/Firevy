import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import CuttingEdgeTechAiSection from './CuttingEdgeTechAiSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AiSuccessStoriesSection from './AiSuccessStoriesSection';
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

export const AdaptiveAiDevelopmentService = () => {
  const faqs = [
    {
      q: '1. What is Adaptive AI Development and how does it benefit enterprises?',
      a: 'Adaptive AI Development creates self-learning machine learning systems that dynamically update their models post-deployment based on real-time data streaming, user feedback, and changing environment contexts.'
    },
    {
      q: '2. How does Adaptive AI differ from traditional static AI models?',
      a: 'Traditional AI models rely on fixed historical training data and require periodic manual retraining. Adaptive AI continuously learns on production data streams to prevent concept drift and optimize performance automatically.'
    },
    {
      q: '3. Which frameworks and technology stacks do your Adaptive AI developers use?',
      a: 'We leverage TensorFlow, PyTorch, Azure ML Studio, Scikit-learn, Ray, MLflow, and streaming data pipelines like Kafka and Spark to build continuous learning AI solutions.'
    },
    {
      q: '4. How do you ensure data security and privacy in real-time adaptive learning systems?',
      a: 'We implement zero-trust security architectures, federated learning protocols, automated data sanitization pipelines, and compliance guardrails aligned with GDPR, HIPAA, and SOC2.'
    },
    {
      q: '5. What hiring models do you offer for Adaptive AI engineering squads?',
      a: 'We offer flexible project-based pricing, hourly billing ($21/hr), and dedicated full-time Adaptive AI engineering squads.'
    }
  ];

  const adaptiveBenefits = [
    {
      id: 1,
      title: 'Self-Learning Systems',
      desc: 'Make systems learn automatically from new information, allowing them to improve continuously without human action.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Real-Time Adaptability',
      desc: 'React in real time to shifting customer needs, behaviors, and external factors for enhanced engagement and retention.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Scalable Architecture',
      desc: 'Develop scalable solutions with microservices and serverless architectures designed for high performance at reduced costs.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Data-Driven Personalization',
      desc: 'Provide hyper-personalized user experiences based on real-time user behavior analysis and optimization accordingly.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Smooth Third-Party Integration',
      desc: 'Integrate your adaptive AI system seamlessly with current CRMs, ERPs, and cloud platforms for maximum ROI with minimal resistance.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Future-Proof Solutions',
      desc: 'Get one step ahead of the competition with AI systems that can evolve automatically, so you never lag behind technology trends.',
      icon: (
        <svg className="w-8 h-8 text-[#0082C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h7" />
        </svg>
      )
    }
  ];

  const adaptiveServicesWeOfferCards = [
    {
      id: 1,
      title: 'Dedicated AI Teams & Talent Onboarding',
      desc: 'Hire Adaptive AI Developers for a collaboration with your in-house team or develop from scratch with end-to-end ownership.'
    },
    {
      id: 2,
      title: 'Custom Adaptive AI Model Development',
      desc: 'Develop and deploy AI models that adapt through real-time feedback loops, refining prediction accuracy with each engagement.'
    },
    {
      id: 3,
      title: 'Adaptive Machine Learning Pipelines',
      desc: 'Construct ML pipelines with retraining and fine-tuning automation capabilities, keeping your models up to date over time.'
    },
    {
      id: 4,
      title: 'AI-Powered Decision Intelligence',
      desc: 'Build decision-making engines designed to optimize operational workflows, forecast market dynamics, and react to customer trends.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Adaptive AI Development Company | Self-Learning AI Solutions"
        description="Fasten your digital transformation pace with Adaptive AI Development Services engineered to enable businesses of any size to leverage intelligent automation and real-time continuous learning."
        canonical="/services/adaptive-ai-development"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO SECTION (Exact 1:1 Screenshot Match)
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title, Description, Stats & Blue Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Adaptive AI Development Company
              </h1>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Fasten your digital transformation pace with Adaptive AI Development Services engineered to enable businesses of any size to leverage the strength of intelligent automation and learn. Time Adaptive AI Solutions We excel in creating customized, scalable, and cost-effective Adaptive AI systems that adaptively change with your business requirements. As a leading AI enterprise, our solutions drive innovation at all levels. Get a quote today and learn how our Adaptive AI Development Company can transform your business.
              </p>

              {/* 4 Stats Counters Box Grid (Exact 1:1 Screenshot Match) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-100/80">
                <div>
                  <div className="text-[22px] sm:text-[25px] font-[900] text-[#0B0F19] leading-none mb-1">100+</div>
                  <div className="text-[11px] sm:text-[11.5px] font-bold text-[#64748B] leading-tight">Software Developers</div>
                </div>
                <div>
                  <div className="text-[22px] sm:text-[25px] font-[900] text-[#0B0F19] leading-none mb-1">20+</div>
                  <div className="text-[11px] sm:text-[11.5px] font-bold text-[#64748B] leading-tight">Fortune 500 Companies</div>
                </div>
                <div>
                  <div className="text-[22px] sm:text-[25px] font-[900] text-[#0B0F19] leading-none mb-1">1000+</div>
                  <div className="text-[11px] sm:text-[11.5px] font-bold text-[#64748B] leading-tight">Projects Completed in Software</div>
                </div>
                <div>
                  <div className="text-[22px] sm:text-[25px] font-[900] text-[#0B0F19] leading-none mb-1">320+</div>
                  <div className="text-[11px] sm:text-[11.5px] font-bold text-[#64748B] leading-tight">5-Star Clutch Reviews</div>
                </div>
              </div>

              <div className="pt-1">
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
                  src="/images/adaptive_ai_hero_robot.png"
                  alt="Adaptive AI Development Company Robot Laptop Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2ND COMPONENT: BRAND LOGOS MARQUEE
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3RD COMPONENT: SMART ADAPTIVE AI DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Robot / Desk Vector Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/ai_copilot_trusted_leader_illustration.svg"
                  alt="Smart Adaptive AI Development Services Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Title & Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Smart Adaptive AI Development Services
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                We are a reputable AI-Powered Adaptive AI Development Company with proven years of experience in developing secure, web-based systems and bespoke Adaptive AI development solutions for business. Our professionals use state-of-the-art Adaptive machine learning development services to construct models that learn, adapt, and get smarter over time. From small startups to large businesses, we provide enterprise Adaptive AI solutions that are customized to your industry needs to enable you to achieve unmatched agility and decision intelligence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4TH COMPONENT: CLUTCH TOP RATED WEB DEVELOPMENT COMPANY BANNER
          ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          5TH COMPONENT: CUSTOM ADAPTIVE AI SOLUTIONS FOR BUSINESSES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight">
              Custom Adaptive AI Solutions for Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
            {/* Left Quote Card Box (1:1 Screenshot Match) */}
            <div className="lg:col-span-5 bg-[#ECF4F8] rounded-[24px] p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-center min-h-[240px]">
              <div className="text-[#005F96] text-6xl font-serif font-black leading-none mb-2">“</div>
              <h3 className="text-[24px] sm:text-[28px] font-[800] text-[#005F96] leading-tight">
                Smart Software Development for Secure Applications
              </h3>
            </div>

            {/* Right Paragraph Columns */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Adaptive AI works by linking instruction with the introduction of self-taught models that modify with data context, and user activity. Our experts Custom Adaptive AI Development Services that not only support scalability and security but also provide actionable insights and real-time responsiveness. With experience in enterprise-grade deployment and mission-critical solutions, we assist companies in working the way in a rapidly evolving world.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Our Adaptive Machine Learning Development Services are based on adaptability and performance. We leverage the newest frameworks such as TensorFlow, PyTorch, and Azure ML Studio to develop AI systems that optimize themselves automatically. Our AI engineers in finance and healthcare, retail, logistics, and other sectors create adaptive systems responsive to user activity, market trends, and company objectives—future-proof and effective.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6TH COMPONENT: CUTTING EDGE TECHNOLOGY SAPPHIRE USE FOR ARTIFICIAL INTELLIGENCE DEVELOPMENT
          ========================================================================= */}
      <CuttingEdgeTechAiSection title="Cutting Edge Technology Sapphire Use For Artificial Intelligence Development" />

      {/* =========================================================================
          7TH COMPONENT: OUR PREMIUM SERVICES GRID
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          8TH COMPONENT: AI SUCCESS STORIES SECTION
          ========================================================================= */}
      <AiSuccessStoriesSection />

      {/* =========================================================================
          TRUST RECOGNITION BANNER ("Proud To Have Picked These Up Along The Way")
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          BENEFITS OF OUR ADAPTIVE AI DEVELOPMENT SERVICES
          ========================================================================= */}
      <KeyBenefitsCopilotSection
        title="Benefits of Our Adaptive AI Development Services"
        subtitle="Our adaptive solutions are designed to achieve long-term business value with ongoing improvement, system robustness, and operational effectiveness."
        benefitsList={adaptiveBenefits}
      />

      {/* =========================================================================
          ADAPTIVE AI DEVELOPMENT SERVICES WE OFFER
          ========================================================================= */}
      <CuttingEdgeTechAiSection
        title="Adaptive AI Development Services We Offer"
        subtitle="Harness our end-to-end Adaptive AI Development solutions designed to fit your business logic, scalability requirements, and operational objectives. We are experts in ROI-oriented AI solutions developed with flexibility as the core design principle"
        cardsList={adaptiveServicesWeOfferCards}
      />

      {/* =========================================================================
          BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <AndroidHiringModels
        title="Business Friendly Hiring Models : Building Greater Futures Through Innovation"
        subtitle="Choose from flexible engagement models designed to align with your project scale, timeline, and budget requirements."
      />

      {/* =========================================================================
          12TH COMPONENT: UNVEILING OUR INNOVATIVE SOLUTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection title="Unveiling Our Innovative Solution" />

      {/* =========================================================================
          13TH COMPONENT: PROCESS WE FOLLOW
          ========================================================================= */}
      <WorkProcessGrid title="Process We Follow" />

      {/* =========================================================================
          14TH COMPONENT: OUR STORY, THEIR WORDS
          ========================================================================= */}
      <VideoTestimonialsStory title="Our Story, Their Words" />

      {/* =========================================================================
          15TH COMPONENT: TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <BrandLogoGrid title="Trusted By The World's Leading Brands" />

      {/* =========================================================================
          16TH COMPONENT: SUCCESS MATRIX
          ========================================================================= */}
      <SuccessMatrixGrid title="Success Matrix" />

      {/* =========================================================================
          17TH COMPONENT: CUTTING-EDGE TECH STACK WE MASTER
          ========================================================================= */}
      <TechnologyStackGrid title="Cutting-Edge Tech Stack We Master" />

      {/* =========================================================================
          18TH COMPONENT: WE HAVE BEEN FEATURED IN INC.
          ========================================================================= */}
      <FeaturedInBrandsSection title="We Have Been Featured In Inc." />

      {/* =========================================================================
          19TH COMPONENT: DIGITAL TRANSFORMATION THROUGH INNOVATION AND COLLECTIVE KNOWLEDGE
          ========================================================================= */}
      <DigitalTransformationCaseStudies title="Digital Transformation Through Innovation and Collective Knowledge" />

      {/* =========================================================================
          20TH COMPONENT: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <SapphireFaqSection title="Frequently Asked Questions" faqList={faqs} />

      {/* =========================================================================
          21ST COMPONENT: OUR RECENT BLOGS
          ========================================================================= */}
      <AppDevelopmentRecentBlogsSection title="Our Recent Blogs" />

      {/* =========================================================================
          WHAT SETS US APART
          ========================================================================= */}
      <WhatSetsUsApartSection title="What Sets Us Apart" />

      {/* =========================================================================
          24TH COMPONENT: ANDROID CHALLENGE CTA BANNER
          ========================================================================= */}
      <AndroidChallengeCtaBanner />

      {/* =========================================================================
          25TH COMPONENT: SUBSCRIBE NEWSLETTER SECTION
          ========================================================================= */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default AdaptiveAiDevelopmentService;
