import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
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
import { ArrowRight } from 'lucide-react';

export const EthicalAiDevelopmentService = () => {
  const faqs = [
    {
      q: '1. What is Ethical AI Development and why is it essential for enterprises?',
      a: 'Ethical AI Development focuses on engineering artificial intelligence systems that are fair, unbiased, transparent, privacy-preserving, and fully compliant with global regulations like the EU AI Act and NIST AI RMF framework.'
    },
    {
      q: '2. How do you detect and mitigate algorithmic bias in AI models?',
      a: 'We conduct comprehensive data audits, evaluate fairness metrics across demographic subsets, use synthetic data balancing, and implement adversarial debiasing techniques to neutralize model bias.'
    },
    {
      q: '3. How do your Ethical AI solutions ensure compliance with global regulations?',
      a: 'We implement zero-trust data architectures, audit trails, anonymization pipelines, and model monitoring tools that align with the EU AI Act, NIST AI Risk Management Framework, GDPR, and HIPAA standards.'
    },
    {
      q: '4. What is Explainable AI (XAI) and how does it provide transparency?',
      a: 'Explainable AI (XAI) utilizes model interpretability algorithms such as SHAP and LIME to expose decision-making factors, giving human auditors clear feature attribution visibility into black-box neural networks.'
    },
    {
      q: '5. What hiring models do you offer for Ethical AI engineering and auditing?',
      a: 'We offer flexible Fixed Price project milestones, hourly Time & Material ($21/hr), and dedicated full-time Ethical AI engineering squads.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Ethical AI Development Company | Responsible & Transparent AI Solutions"
        description="Firevy.Co is a trusted Ethical AI Development Company. We build unbiased, transparent, secure, and compliant AI solutions adhering to EU AI Act, NIST AI Risk Management, and global data privacy standards."
        canonical="/services/ethical-ai-development"
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
                Ethical AI Development Company
              </h1>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                As we enter the era of AI, custom AI algorithms and models are driving more intelligent and scalable ways for business processes, creating experiences and tools – almost everywhere you look or step. Ethical AI Development Company provides secure, tailored models and software solutions custom to your business goals and your budget. Custom ethical AI software development requires continuous focus on transparency, fairness and governance when deploying them at scale in connection with your company's values. Get your free quote today and let's start building responsible custom Ethical AI models.
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
                  src="/images/ai_copilot_hero_illustration.svg"
                  alt="Ethical AI Development Company Illustration"
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
          3RD COMPONENT: SHAPE THE FUTURE WITH CUSTOM ETHICAL AI SOFTWARE DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Robot Assistant Vector Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/ai_copilot_trusted_leader_illustration.svg"
                  alt="Shape The Future With Custom Ethical AI Software Development Illustration"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Title & Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Shape The Future With Custom Ethical AI Software Development
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                At Sapphire, we specialize in reinventing digital future through ethical, secure, enterprise-grade AI systems designed to support startups, enterprises, and mission-critical operations. We have a consistent depth of experience in AI systems, privacy, data management, and machine learning models which means we can build comprehensive AI frameworks while remaining true to fundamental ethical values. Our offering encompasses the highest level of AI services across a variety of industries such as healthcare, finance, and government. Enterprise Ethical AI consulting services incorporate compliance, explainability and accountability in every code line.
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
          5TH COMPONENT: INNOVATE WITH CONFIDENCE — POWERED BY ETHICAL AI DEVELOPERS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight">
              Innovate with Confidence — Powered by Ethical AI Developers
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

            {/* Right Paragraph Columns */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We specialize in building high-performance, secure, and ethically-informed AI systems for a multitude of industries and applications. Whether you are looking to build an AI chatbot, predictive analytics system, or a fully autonomous workflow, Ethical AI Development Company makes certain compliance framework for modern technology is done responsibly, risks are mitigated, and ethical effects are considered from day one, including the reduction of privacy-by-design principles.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We have completed projects delivering AI & enterprise services across North America, Europe, Asia-Pacific, and the Middle East. Our multilingual, multidisciplinary team of data scientists, machine learning engineers, and software developers works simultaneously, collaboratively and iteratively in a workshop-style framework to design solutions that deliver high performance and real-world impact. We have deep experience in business-specific AI systems across logistics, legal, financial, and healthcare industries — allowing us to equip software with continuous feedback to optimize measurable business outcomes.
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
          22ND COMPONENT: WHAT SETS US APART AS ETHICAL AI DEVELOPMENT COMPANY
          ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Ethical AI Development Company?"
      />

      {/* =========================================================================
          23RD COMPONENT: HAVE ETHICAL AI DEVELOPMENT CHALLENGE TO ADDRESS CTA BANNER
          ========================================================================= */}
      <AndroidChallengeCtaBanner
        title="Have Ethical AI Development Challenge To Address ?"
        subtitle="Get access to top ethical AI engineers and compliance experts to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* =========================================================================
          24TH COMPONENT: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
          ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default EthicalAiDevelopmentService;
