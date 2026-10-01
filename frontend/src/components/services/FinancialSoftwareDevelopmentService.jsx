import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import FinancialCuttingEdgeTechSection from './FinancialCuttingEdgeTechSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import FinancialExpertiseServices from './FinancialExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import { ArrowRight } from 'lucide-react';

export const FinancialSoftwareDevelopmentService = () => {
  // 6 Benefits Cards Grid (Exact 1:1 Match with Outline SVG Icons)
  const financialBenefits = [
    {
      title: 'Sub-Millisecond Financial Execution & Routing',
      desc: 'High-performance order matching and transactional queuing architectures engineered to process millions of concurrent payments without bottlenecking.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <polyline points="24 12 24 24 32 28" />
          <path d="M10 24h3M35 24h3" />
        </svg>
      )
    },
    {
      title: 'Automated Fraud Prevention & Zero-Trust Security',
      desc: 'Machine learning heuristics, behavioral biometrics, and automated suspicious activity scoring protecting accounts from chargebacks and unauthorized access.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6 L38 12 V22 C38 31 32 39 24 42 C16 39 10 31 10 22 V12 Z" />
          <path d="M18 24l4 4 8-8" />
          <circle cx="24" cy="18" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Seamless Open Banking & Multi-Gateway Integration',
      desc: 'Universal interoperability with SWIFT, ACH, SEPA, Visa, Mastercard, Plaid, and Stripe for frictionless omni-channel global settlements.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="28" rx="4" />
          <line x1="8" y1="18" x2="40" y2="18" />
          <circle cx="16" cy="28" r="2" fill="#0084D1" />
          <line x1="24" y1="28" x2="32" y2="28" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Guaranteed Regulatory Compliance (PCI-DSS & SOC 2)',
      desc: 'Built from the ground up to meet stringent global mandates, including PCI-DSS Level 1, SOC 2 Type II, GDPR, ISO 27001, and GLBA compliance.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <path d="M16 35l2 2 4-4" />
          <line x1="25" y1="35" x2="31" y2="35" />
          <circle cx="37" cy="11" r="3" />
          <path d="M37 6v2M37 14v2M32 11h2M40 11h2" />
        </svg>
      )
    },
    {
      title: 'Scalable Multi-Currency Double-Entry Ledgers',
      desc: 'Cryptographically auditable transaction books, automated foreign exchange rate updates, and sub-account isolation for multi-tenant fintech platforms.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="24" cy="12" rx="16" ry="6" />
          <path d="M8 12v12c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
          <path d="M8 24v12c0 3.3 7.2 6 16 6s16-2.7 16-6V24" />
          <circle cx="24" cy="24" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'AI-Driven Financial Analytics & Cash-Flow Modeling',
      desc: 'Interactive financial dashboards, algorithmic spend categorization, automated cash flow forecasting, and personalized financial insights.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="8 36 18 24 28 30 40 14" />
          <polyline points="32 14 40 14 40 22" />
          <circle cx="40" cy="14" r="2" fill="#0084D1" />
          <line x1="8" y1="40" x2="40" y2="40" />
        </svg>
      )
    }
  ];

  // Success Stories (Exact 1:1 Match to Reference Portfolio)
  const financialSuccessCards = [
    {
      id: 1,
      title: 'High-Frequency Multi-Currency Payment Gateway Engine',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'AI-Powered Real-Time Fraud Detection & AML Core Platform',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Cloud-Native Neobank Mobile & Web Digital Banking Ecosystem',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Firevy.Co Branded)
  const financialFaqs = [
    {
      question: '1. What is Financial Software Development?',
      answer: 'Financial Software Development entails engineering enterprise-grade, secure software systems for banks, financial institutions, fintech startups, and investment firms. This includes digital banking platforms, payment gateways, lending portals, algorithmic trading systems, WealthTech applications, and regulatory compliance tools.'
    },
    {
      question: '2. How do you ensure PCI-DSS compliance and financial data security?',
      answer: 'We build systems adhering strictly to PCI-DSS Level 1 standards, SOC 2 Type II controls, and ISO 27001 requirements. Our protocols incorporate end-to-end tokenization, Hardware Security Module (HSM) key management, AES-256 field encryption, TLS 1.3 in-transit protection, and routine automated static/dynamic vulnerability scans.'
    },
    {
      question: '3. Can you integrate open banking APIs like Plaid, Stripe, and legacy core banking systems?',
      answer: 'Yes. We specialize in building secure API middleware connecting modern consumer frontends with open banking aggregators (Plaid, Yodlee, MX), payment processors (Stripe, Adyen), and legacy core banking mainframes (Fiserv, FIS, Jack Henry, Temenos) via secure RESTful, gRPC, and ISO 20022 message schemas.'
    },
    {
      question: '4. What architectural patterns do you employ for high-volume financial transactions?',
      answer: 'We deploy event-driven microservices architectures backed by Apache Kafka, Redis cluster caching, and horizontally scalable relational databases (PostgreSQL/Amazon Aurora) with ACID compliance, idempotency keys, and CQRS patterns to eliminate duplicate charges and guarantee zero data loss.'
    },
    {
      question: '5. How does AI-driven fraud detection work in your financial applications?',
      answer: 'Our platforms leverage real-time machine learning models that analyze transaction attributes—such as IP geolocation, device fingerprinting, behavioral patterns, and velocity checks—scoring risk within milliseconds and initiating automated step-up authentication or flagging for compliance review.'
    },
    {
      question: '6. Can you build cross-platform mobile apps for digital banking and investing?',
      answer: 'Yes. We engineer intuitive, high-security mobile applications for iOS and Android using React Native, Flutter, and native Swift/Kotlin. These feature biometric authentication (Face ID/Fingerprint), encrypted local storage, push notifications, and virtual debit card management.'
    },
    {
      question: '7. Do you support multi-currency, cross-border payments and digital assets?',
      answer: 'Yes. We construct multi-currency digital wallets, real-time FX conversion engines, and blockchain-enabled settlement ledgers, enabling low-fee international remittance, stablecoin treasury operations, and cross-border commercial trade.'
    },
    {
      question: '8. How long does it take to develop a custom financial software solution?',
      answer: 'A focused MVP—such as a digital wallet, specialized lending portal, or payment integration gateway—typically takes 8 to 12 weeks. Comprehensive enterprise core banking or institutional trading platforms generally require 4 to 6 months of agile sprint execution.'
    },
    {
      question: '9. How can we get started with Firevy.Co for our financial technology project?',
      answer: 'Reach out through our consultation form with your product objectives and compliance criteria. Our senior fintech architects and security specialists will evaluate your requirements and provide an architectural blueprint, tech stack proposal, and roadmap within 24 hours.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SEO
        title="Financial Software Development Company | Firevy.Co"
        description="Firevy.Co engineers enterprise financial software solutions. High-frequency payment engines, AI fraud prevention, core banking, WealthTech platforms, and PCI-DSS compliance."
        keywords="financial software development, fintech software company, banking app development, payment gateway integration, wealthtech software, fraud detection algorithms"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 Match to Reference Screenshot)                      */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading + Tagline + Metrics + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.14] font-sans"
                style={{ fontSize: 'clamp(30px, 4vw, 40px)' }}
              >
                Financial Software Development Services
              </h1>

              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                Empower banks, fintech enterprises, and investment institutions with secure, scalable, and compliant financial software solutions. From high-throughput real-time payment processing and AI-driven fraud detection to automated lending and core digital banking.
              </p>

              {/* 4 Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">10M+</div>
                  <div className="text-xs text-slate-600 font-medium">Daily Transactions</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">99.999%</div>
                  <div className="text-xs text-slate-600 font-medium">Core Availability</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">Sub-5ms</div>
                  <div className="text-xs text-slate-600 font-medium">Execution Speed</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">100%</div>
                  <div className="text-xs text-slate-600 font-medium">PCI-DSS & SOC 2</div>
                </div>
              </div>

              {/* Single "Let's Talk" CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/services/fintech_hero_illustration.svg"
                  alt="Financial Software Development"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/services/fintech_hero_illustration.png';
                  }}
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. HIGH-PRECISION SOLUTIONS (Image Left + Content Right)                  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/services/fintech_brief_illustration.png"
                  alt="Financial Software Architecture & Security Pipeline"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/services/fintech_section2_illustration.png';
                  }}
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for High-Precision Financial Software Development
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                In the digital economy, financial applications demand uncompromising reliability, absolute data integrity, and sub-second performance. Legacy systems, security vulnerabilities, and latency-prone integrations can severely disrupt customer trust and expose organizations to regulatory penalties. Our expert Financial Software Development services engineer modern, resilient financial ecosystems tailored to the evolving needs of global commerce.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                By combining institutional-grade encryption with event-driven transaction pipelines, automated KYC/AML checks, and open banking API standards, we empower banks, lenders, and fintech innovators to launch transformative financial products with speed and peace of mind.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 6. 100% CUSTOMIZABLE SOLUTIONS (Quote Card + Narrative)                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Get 100% Customizable Financial Software Solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[320px] group transition-all duration-300 hover:shadow-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              {/* Speech bubble pointer arrow pointing right towards narrative */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
                “
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Zero-compromise<br />security & regulatory<br />compliance guarantee
              </h3>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Developing successful financial software requires comprehensive proficiency beyond conventional application engineering. It requires zero-loss double-entry ledger math, real-time transaction reconciliation, strict statutory audit trails, and multi-tier authentication. As an established digital technology engineering firm, we construct custom financial platforms aligned to your exact operating requirements.
              </p>
              <p>
                Our 100% personalized Financial Software Solutions are architected to support digital neobanks, cross-border remittance networks, algorithmic trading portals, alternative lending engines, and multi-asset wealth management. We equip established financial brands and disruptive fintech startups with scalable, secure tools that accelerate market expansion.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUTTING EDGE TECHNOLOGIES SECTION                                      */}
      {/* ========================================================================= */}
      <FinancialCuttingEdgeTechSection companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 8. OUR PREMIUM SERVICES                                                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 9. SUCCESS STORIES                                                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={financialSuccessCards}
        subtitle="Know Firevy.Co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 10. PROUD AWARDS BANNER                                                   */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 11. BENEFITS OF OUR FINANCIAL SOFTWARE DEVELOPMENT                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight leading-tight mb-3.5 font-sans">
              Benefits of Our Financial Software Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Years of fintech engineering, payment gateway integration, and high-security compliance architecture have made our engineers trusted technology partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {financialBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100/90 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.8px] leading-[1.68] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. OUR EXPERTISE IN DEDICATED FINANCIAL SOFTWARE PLATFORMS               */}
      {/* ========================================================================= */}
      <FinancialExpertiseServices />

      {/* ========================================================================= */}
      {/* 13. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 14. INNOVATIVE VIDEO SOLUTIONS SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 15. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Financial Software Development Process We Follow"
        subtitle="Our systematic 6-phase engineering lifecycle from regulatory audit and financial architecture design to secure coding, automated penetration testing, and zero-downtime cloud deployment."
      />

      {/* ========================================================================= */}
      {/* 16. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 17. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 18. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 19. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 20. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 21. FREQUENTLY ASKED QUESTIONS (SapphireFaqSection 1:1 Match)              */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below."
        faqs={financialFaqs}
        companyName="Firevy.Co"
      />

      {/* ========================================================================= */}
      {/* 22. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 23. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 24. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          heading="Have a High-Stakes Financial Software Project?"
          text="Our fintech architects and security-certified engineers are ready to build your institutional-grade financial solution."
          buttonText="Get Free Financial Consultation"
        />
      </div>
    </div>
  );
};

export default FinancialSoftwareDevelopmentService;
