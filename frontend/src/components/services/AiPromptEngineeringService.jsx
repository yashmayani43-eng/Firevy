import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import CuttingEdgeTechAiSection from './CuttingEdgeTechAiSection';
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
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AiPromptEngineeringService = () => {
  const faqs = [
    {
      q: '1. What is AI Prompt Engineering and why is it essential for LLM performance?',
      a: 'AI Prompt Engineering is the practice of designing, optimizing, and structuring prompts for Large Language Models (LLMs) to ensure reliable, accurate, context-aware, and deterministic outputs while reducing API token costs.'
    },
    {
      q: '2. Which AI models and frameworks do your prompt engineers support?',
      a: 'We engineer and fine-tune prompts across OpenAI (GPT-4o, O1), Anthropic Claude 3.5, Google Gemini 1.5, Meta Llama 3, Mistral, and custom open-source models using LangChain, LlamaIndex, and DSPy.'
    },
    {
      q: '3. How does prompt optimization reduce enterprise AI operational costs?',
      a: 'By using context compression, system prompt refactoring, few-shot pruning, and structured JSON output schema enforcement, we cut token consumption by 40% to 70% per query.'
    },
    {
      q: '4. How do you protect AI prompt systems from prompt injection and security exploits?',
      a: 'We implement defensive prompt engineering, input sanitization pipelines, adversarial testing, dual-LLM guardrails, and automated hallucination filters to keep enterprise AI secure.'
    },
    {
      q: '5. What engagement models are available for hiring AI prompt engineers?',
      a: 'We offer flexible project-based pricing, hourly billing ($21/hr), and dedicated prompt engineering squads tailored to your timeline and scope.'
    }
  ];

  const promptBenefits = [
    {
      id: 1,
      title: 'Quality of Output',
      desc: 'an established prompt promotes reproducible, human-targeted and context-aware results from LLMs.',
      icon: (
        <svg className="w-7 h-7 text-[#006B8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Cost & Time Effective',
      desc: 'Established single prompts enhance productivity by using fewer compute cycles, tokens, and enabling staff to be less wasteful.',
      icon: (
        <svg className="w-7 h-7 text-[#006B8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'More Tailoring',
      desc: 'Establishing a domain relevant prompt tuning allows organizations to link AI behavior closer to internal goals, Intention and voice.',
      icon: (
        <svg className="w-7 h-7 text-[#006B8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Better User Experience',
      desc: 'Better AI outputs lead to more human, streamlined and meaningful interpersonal experience for customers, and any stakeholder interaction.',
      icon: (
        <svg className="w-7 h-7 text-[#006B8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <circle cx="9" cy="9" r="1.5" />
          <circle cx="15" cy="9" r="1.5" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Scalable in any case',
      desc: 'Whether for marketing, customer support, legal review, documentation and much more implications, established prompt modeled prompts fit the bill on many fronts.',
      icon: (
        <svg className="w-7 h-7 text-[#006B8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Future proof',
      desc: 'our prompt designs can evolve alongside advances in AI model releases and keep obsolescence at bay while improving updating ease.',
      icon: (
        <svg className="w-7 h-7 text-[#006B8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h7" />
        </svg>
      )
    }
  ];

  const promptConsultingCards = [
    {
      id: 1,
      title: 'Custom Prompt Design',
      desc: 'Prompting development—structured prompts for generative AI tasks—built for the domain, tone, and particular format needed to maximize relevance and coherence.'
    },
    {
      id: 2,
      title: 'LLM Prompt Optimization',
      desc: 'Iterative tuning and optimizations based on real-world user prompts to improve accuracy, limit hallucinations, and strengthen reliability in output.'
    },
    {
      id: 3,
      title: 'Prompt Templates for Automation',
      desc: 'Prompt templates for marketing, customer service, legal, and internal knowledge base use cases that enable faster delivery.'
    },
    {
      id: 4,
      title: 'AI Chatbot Workflows',
      desc: 'Design and build prompt flows with contextual memory for conversational AI, customer service, and support chatbots.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI Prompt Engineering Services | LLM Optimization Company"
        description="Empower your business with AI Prompt Engineering Services that drive intelligent automation, boost efficiency, and optimize LLM performance for OpenAI GPT-4, Claude, Gemini, and custom AI models."
        canonical="/services/ai-prompt-engineering"
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
                AI Prompt Engineering Services
              </h1>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Empower your business with AI Prompt Engineering Services that drive intelligent automation, boost efficiency, and optimize LLM performance. At Sapphire Software Solutions, we design & prompt optimization fine-tuning services for OpenAI, GPT-4, Claude, and custom AI models. Whether you're building AI chatbots, content automation tools, or smart decision support systems, Sapphire's AI prompt engineering company delivers precise, context-aware, and result-oriented outputs. Contact us for a free consultation today and discover how prompt engineering can revolutionize your business.
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
                  <div className="text-[11px] sm:text-[11.5px] font-bold text-[#64748B] leading-tight">Projects Completed Globally</div>
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
                  src="/images/ai_prompt_engineering_hero_laptop.png"
                  alt="AI Prompt Engineering Services Laptop Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2ND COMPONENT: BRAND LOGOS MARQUEE (Adani, Toyota, Almarai, Orient, etc.)
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3RD COMPONENT: RISE OF PROMPT ENGINEERING CONSULTING AND IMPLEMENTATION SERVICES
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Robot Assistant Vector Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/ai_copilot_trusted_leader_illustration.svg"
                  alt="Rise Of Prompt Engineering Consulting Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Title & Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Rise Of Prompt Engineering Consulting And Implementation Services
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                Harnessing AI prompt engineering can harness the full potential of Large Language Models (LLMs) like GPT, Claude, Llama, and Gemini. We build high-performance AI platforms using Natural Language Processing (NLP) and Generative AI technologies that transform businesses across industries and scale for your industry-specific requirements, ensuring improved accuracy, faster computation, and strict data security.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4TH COMPONENT: WHY HIRE PROMPT ENGINEERS FROM SAPPHIRE SOFTWARE SOLUTIONS?
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bullet List */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Why Hire Prompt Engineers From Sapphire Software Solutions?
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Hiring Sapphire's engineers means partnering with a veteran AI innovation company that delivers results: custom prompt engineering, tailored to perform tasks efficiently.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: 'Expertise in LLMs:',
                    desc: 'Skilled engineers trained in GPT, Claude, Gemini, and custom AI models.'
                  },
                  {
                    title: 'Industry-Specific Experience:',
                    desc: 'Custom prompt engineering for healthcare, legal, fintech, e-commerce, and SaaS sectors.'
                  },
                  {
                    title: 'Cost-Effective Scalability:',
                    desc: 'Optimize AI investments with dynamic pricing and fast deployment.'
                  },
                  {
                    title: 'Data Privacy & Trust:',
                    desc: 'Compliant with GDPR, HIPAA, and enterprise-grade data security.'
                  },
                  {
                    title: 'End-to-End AI Partner:',
                    desc: 'From concept to deployment, we build scalable AI systems.'
                  },
                  {
                    title: 'Global Delivery Model:',
                    desc: 'Serving clients across the USA, UK, UAE, Canada, and Germany.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#0B0F19] mt-2 flex-shrink-0" />
                    <p className="text-[14px] sm:text-[15px] text-[#334155] leading-snug">
                      <strong className="font-bold text-[#0B0F19]">{item.title} </strong>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Robot Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/ai_copilot_trusted_leader_illustration.svg"
                  alt="Why Hire Prompt Engineers Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5TH COMPONENT: CLUTCH TOP RATED WEB DEVELOPMENT COMPANY BANNER
          ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          6TH COMPONENT: PROMPT ENGINEERING CONSULTING SERVICES FOR BUSINESS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight">
              Prompt Engineering Consulting Services for Business
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
            {/* Left Quote Card Box (1:1 Screenshot Match) */}
            <div className="lg:col-span-5 bg-[#ECF4F8] rounded-[24px] p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-center min-h-[240px]">
              <div className="text-[#005F96] text-6xl font-serif font-black leading-none mb-2">“</div>
              <h3 className="text-[24px] sm:text-[28px] font-[800] text-[#005F96] leading-tight">
                Secure, Scalable & Future-Ready Apps
              </h3>
            </div>

            {/* Right Paragraph & Bullet List */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Our Prompt Engineering Consulting Services help businesses create optimized AI workflows that deliver real-world impact. We specialize in designing effective prompts that maximize LLM performance across multiple use cases, including:
              </p>

              <div className="space-y-2 pl-2">
                {[
                  'Customer Support Automation',
                  'AI Product Recommendation',
                  'Legal Document Summarization',
                  'Financial Analysis & Insights',
                  'Healthcare Data Processing'
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B0F19] flex-shrink-0" />
                    <span className="text-[14px] sm:text-[15px] font-semibold text-[#1E293B]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal pt-2">
                With our global team of AI prompt engineers & domain industry experts, we make enterprise AI integration effortless, reliable, transparent, and secure. Our goal is to build AI systems that continuously adapt, transparent, and user-centric.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          TECHNOLOGY SAPPHIRE USE FOR ARTIFICIAL INTELLIGENCE DEVELOPMENT
          ========================================================================= */}
      <CuttingEdgeTechAiSection title="Technology Sapphire Use For Artificial Intelligence Development" />

      {/* =========================================================================
          OUR PREMIUM SERVICES GRID
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          8TH COMPONENT: AI SUCCESS STORIES SECTION
          ========================================================================= */}
      <AiSuccessStoriesSection />

      {/* =========================================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY (Shifted right below Success Stories)
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          BENEFITS OF EXPERT AI PROMPT ENGINEERING SERVICES
          ========================================================================= */}
      <KeyBenefitsCopilotSection
        title="Benefits of Expert AI Prompt Engineering Services"
        subtitle="Transform your digital capabilities with quality craftAI prompt Design and Optimization that elevate AI performance"
        benefitsList={promptBenefits}
      />

      {/* =========================================================================
          PROMPT ENGINEERING CONSULTING SERVICES
          ========================================================================= */}
      <CuttingEdgeTechAiSection
        title="Prompt Engineering Consulting Services"
        subtitle="We provide a specialized set of AI prompt engineering services designed to enhance LLM interactions and improve enterprise AI implementations"
        cardsList={promptConsultingCards}
      />

      {/* =========================================================================
          12TH COMPONENT: BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <AndroidHiringModels
        title="Business Friendly Hiring Models : Building Greater Futures Through Innovation"
        subtitle="Choose from flexible engagement models designed to align with your project scale, timeline, and budget requirements."
      />

      {/* =========================================================================
          13TH COMPONENT: UNVEILING OUR INNOVATIVE SOLUTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection title="Unveiling Our Innovative Solution" />

      {/* =========================================================================
          14TH COMPONENT: PROCESS WE FOLLOW
          ========================================================================= */}
      <WorkProcessGrid title="Process We Follow" />

      {/* =========================================================================
          15TH COMPONENT: OUR STORY, THEIR WORDS
          ========================================================================= */}
      <VideoTestimonialsStory title="Our Story, Their Words" />

      {/* =========================================================================
          16TH COMPONENT: TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <BrandLogoGrid title="Trusted By The World's Leading Brands" />

      {/* =========================================================================
          17TH COMPONENT: SUCCESS MATRIX
          ========================================================================= */}
      <SuccessMatrixGrid title="Success Matrix" />

      {/* =========================================================================
          18TH COMPONENT: CUTTING-EDGE TECH STACK WE MASTER
          ========================================================================= */}
      <TechnologyStackGrid title="Cutting-Edge Tech Stack We Master" />

      {/* =========================================================================
          19TH COMPONENT: WE HAVE BEEN FEATURED IN INC.
          ========================================================================= */}
      <FeaturedInBrandsSection title="We Have Been Featured In Inc." />

      {/* =========================================================================
          20TH COMPONENT: DIGITAL TRANSFORMATION THROUGH INNOVATION AND COLLECTIVE KNOWLEDGE
          ========================================================================= */}
      <DigitalTransformationCaseStudies title="Digital Transformation Through Innovation and Collective Knowledge" />

      {/* =========================================================================
          21ST COMPONENT: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <SapphireFaqSection title="Frequently Asked Questions" faqList={faqs} />

      {/* =========================================================================
          22ND COMPONENT: OUR RECENT BLOGS
          ========================================================================= */}
      <AppDevelopmentRecentBlogsSection title="Our Recent Blogs" />

      {/* =========================================================================
          WHAT SETS US APART
          ========================================================================= */}
      <WhatSetsUsApartSection title="What Sets Us Apart" />

      {/* =========================================================================
          25TH COMPONENT: ANDROID CHALLENGE CTA BANNER
          ========================================================================= */}
      <AndroidChallengeCtaBanner />

      {/* =========================================================================
          26TH COMPONENT: SUBSCRIBE NEWSLETTER SECTION
          ========================================================================= */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default AiPromptEngineeringService;
