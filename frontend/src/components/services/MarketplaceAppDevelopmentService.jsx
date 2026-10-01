import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';
import IWatchWhatSetsUsApartSection from './IWatchWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';

export const MarketplaceAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // 6 Expertise Items for Marketplace App Development
  const expertiseItems = [
    {
      title: 'Custom B2B & B2C Multi-Vendor Platforms',
      desc: 'We engineer scalable multi-vendor eCommerce and service marketplaces with customized vendor portals, product catalogs, and automated commission structures.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    {
      title: 'Decentralized P2P Trading & Escrow',
      desc: 'Deploy peer-to-peer Web3 trading platforms backed by smart contract escrow, zero-middleman settlements, and multi-signature security protocols.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      )
    },
    {
      title: 'Smart Contract Automated Payouts',
      desc: 'Automate multi-tier commission splits, creator royalties, and vendor payout distributions on-chain or via Stripe Connect instantly upon order fulfillment.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      title: 'Multi-Gateway Payment Integration',
      desc: 'Empower global shoppers with frictionless checkout options including Stripe, PayPal, Apple Pay, credit cards, and MetaMask/WalletConnect crypto on-ramps.',
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 6v12" />
        </svg>
      )
    },
    {
      title: 'KYC/AML & Trust Rating Engine',
      desc: 'Protect buyers and merchants with automated identity verification (Sumsub/Jumio), buyer protection policies, and multi-factor reputation scorecards.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Real-Time Inventory & Order Tracking',
      desc: 'Provide vendors and administrators with live order status tracking, stock synchronization, dynamic pricing rules, and integrated logistics API dispatches.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Marketplace App Development
  const benefitsItems = [
    {
      title: 'Scalable Multi-Tenant Architecture',
      desc: 'Architected to handle millions of active SKU listings, high-concurrency search filters, and flash-sale traffic spikes without performance lag.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'Automated Commission Revenue Streams',
      desc: 'Maximize platform profitability with customizable transaction fees, seller subscription tiers, and featured listing monetization models.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Frictionless Multi-Currency Payments',
      desc: 'Seamlessly accept fiat payments in 130+ global currencies alongside Web3 cryptocurrency options for instant global reach.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        </svg>
      )
    },
    {
      title: 'High Conversion UI/UX Experience',
      desc: 'Designed with intuitive elastic search (Algolia/Elasticsearch), AI product recommendations, and frictionless 1-click checkout flows.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      title: 'Smart Escrow & Conflict Resolution',
      desc: 'Eliminate merchant fraud with automated escrow release rules, proof-of-delivery validations, and multi-tier dispute management.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'OWASP & PCI-DSS Compliant Security',
      desc: 'Bank-grade SSL data encryption, PCI-DSS tokenized payment storage, and OWASP Web3 auditing protect merchant data.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Match)
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#8b5cf6] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 12 C16 7, 24 6, 31 12" />
          <path d="M17 14 H31" strokeWidth="2" />
          <path d="M18 16 H30" />
          <path d="M18 16 C11 21, 9 34, 15 40 C18 43, 30 43, 33 40 C39 34, 37 21, 30 16 Z" />
          <line x1="24" y1="22" x2="24" y2="35" strokeWidth="1.8" />
          <path d="M27 25 C27 23, 21 23, 21 28 C21 33, 27 32, 27 35 C27 38, 21 38, 21 35" strokeWidth="1.8" />
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#22c55e] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 5 H28" strokeWidth="2" />
          <line x1="24" y1="5" x2="24" y2="9" strokeWidth="1.8" />
          <circle cx="27" cy="27" r="14" />
          <circle cx="27" cy="27" r="1" fill="currentColor" />
          <line x1="27" y1="27" x2="21" y2="21" strokeWidth="1.8" />
          <line x1="27" y1="27" x2="32" y2="22" strokeWidth="1.8" />
        </svg>
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#f97316] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="17" cy="15" r="5.5" />
          <path d="M15 23 C15 25, 19 25, 19 23" />
          <path d="M9 32 C9 24, 25 24, 25 32" />
          <circle cx="27" cy="17" r="4.8" />
          <path d="M22 32 C22 27, 35 27, 35 32" />
        </svg>
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0284c7] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 22 C15 12, 27 7, 35 7" />
          <circle cx="18" cy="30" r="7" />
          <circle cx="32" cy="18" r="4.5" />
        </svg>
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: 'Node.js & Express / Python Django', desc: 'High-speed RESTful & GraphQL microservices architecture for marketplace operations.' },
      { name: 'Solidity & Web3 Contracts', desc: 'Smart contract escrow and decentralized payment distribution protocols.' }
    ],
    frontend: [
      { name: 'React.js & Next.js SSR', desc: 'SEO-optimized frontend interface with instant page rendering and dynamic search.' },
      { name: 'React Native & Flutter', desc: 'Cross-platform native iOS & Android mobile marketplace applications.' }
    ],
    database: [
      { name: 'PostgreSQL & MongoDB', desc: 'Relational & Document database design optimized for high-volume transactions.' },
      { name: 'Redis Cache & Elasticsearch', desc: 'Sub-second search filtering and distributed session caching.' }
    ],
    devops: [
      { name: 'AWS Cloud & Docker', desc: 'Auto-scaling cloud infrastructure with automated CI/CD deployment pipelines.' }
    ],
    testing: [
      { name: 'Jest, Cypress & Hardhat', desc: 'End-to-end frontend, API, and smart contract security test suites.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent sprint planning with senior full-stack & Web3 marketplace engineers.' }
    ]
  };

  // Official Marketplace App FAQs
  const marketplaceFaqs = [
    {
      q: '1. What is Marketplace App Development?',
      a: 'Marketplace app development involves building digital platforms (B2B, B2C, P2P) where multiple independent sellers list products or services, and buyers transact with automated commission management and buyer protection.'
    },
    {
      q: '2. Can you build both Web2 (traditional) and Web3 (decentralized) marketplaces?',
      a: 'Yes! We build traditional e-commerce marketplaces (Stripe, PayPal, credit cards) as well as Web3 decentralized platforms (crypto wallets, smart contract escrows, NFTs).'
    },
    {
      q: '3. How do automated escrow and payment split payouts work?',
      a: 'When a buyer places an order, funds are held securely in escrow (via smart contract or Stripe Connect). Upon order delivery confirmation, payment splits automatically to the seller minus platform commission fees.'
    },
    {
      q: '4. Can non-crypto users purchase items with traditional credit cards?',
      a: 'Yes! We integrate fiat payment gateways (Stripe, MoonPay, Apple Pay, credit cards) so Web2 consumers can buy effortlessly without needing crypto wallet knowledge.'
    },
    {
      q: '5. How do you handle seller onboarding and product inventory management?',
      a: 'We build intuitive merchant dashboards featuring bulk CSV product imports, stock alerts, order fulfillment tracking, analytics charts, and identity verification (KYC).'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict non-disclosure agreements before initial architecture planning calls to ensure 100% confidentiality and complete IP source code ownership.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen overflow-x-hidden">
      <SEO
        title="Marketplace App Development Company USA | Custom B2B & B2C Platforms | Firevy.Co"
        description="Top Marketplace App Development Company. Build custom multi-vendor e-commerce, P2P, Web3, and enterprise marketplace applications with Firevy.Co."
        canonical="/services/marketplace-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Marketplace App Development Services in USA"
        subtitle="We are not just developers; instead, we are your partners who will consistently collaborate with you to understand your company needs and provide you custom marketplace app development services."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        heroImage="/images/marketplace_app_hero.png"
        serviceCategory="marketplace-app"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* SECTION 2: Customized On-Demand Marketplace App Development Experts */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: PNG Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/marketplace_sec2_illustration.png"
                  alt="Customized On-Demand Marketplace App Development Experts"
                  className="w-full max-w-[480px] h-auto object-contain select-none pointer-events-none drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Customized On-Demand Marketplace App Development Experts
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                When you work with us, you can be confident that you will get comprehensive app development services for the marketplace from our side. As a Best marketplace app development company, we are committed to building Custom AI Marketplace App Development for operations.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We are the End-to-end marketplace app development company in the marketplace mobile app development industry. Aside from that, we have designed our marketplace software development services for the marketplace so that it not only satisfies the one-of-a-kind demands of our customers but also assists them in expanding their earnings and increasing their return on investment. When it comes to providing Affordable AI Marketplace App Development Services, we can meet any criteria that may arise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Brief About Marketplace Application Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Marketplace Application Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our AI Powered Marketplace App Development Company is supported by a group of knowledgeable and experienced specialists who can produce mobile apps for the development of markets that are of the highest quality. As a marketplace platform development company, we constantly ensure that our projects are delivered as quickly as possible.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                To ensure that you always have someone to turn to for help in an urgent situation, we are here for you around the clock. Our mission is to provide the most effective answers to problems by delivering marketplace development services at affordable prices.
              </p>
            </div>

            {/* Right Column: Brief Solutions PNG Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/marketplace_sec3_illustration.png"
                  alt="Brief About Marketplace Application Development Services"
                  className="w-full max-w-[480px] h-auto object-contain select-none pointer-events-none drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: World Wide Top Rated IT Company on Clutch */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Award 1" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Award 2" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/top_mobile_app_goodfirm.svg" alt="Award 3" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/top_mobile_clutchn.svg" alt="Award 4" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Get 100% Customizable Marketplace Applications */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Get 100% Customizable Marketplace Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-2xl bg-[#EFF7FC] border border-blue-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[300px]">
                <div className="relative z-10 text-[#005F96] mb-4">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-[800] text-[#005F96] leading-tight">
                    Scalable, Multi-Vendor & High-Conversion Marketplaces
                  </h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As a top Marketplace App development company, our developers build feature-rich mobile and web marketplace software. We integrate real-time inventory synchronization, vendor portal management, elastic search filtering, and multi-gateway payment checkouts.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We ensure your marketplace complies with PCI-DSS payment security, OWASP guidelines, and global financial standards for maximum buyer and merchant trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our Marketplace App Development Services */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              The Expertise Of Our Marketplace App Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our full-stack & Web3 engineers have years of experience in custom marketplace app development. Key expertise areas include:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 sm:mb-12"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="expertise-hover-card p-7 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-[12px] ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-[15px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Proud Awards Banner */}
      <ProudAwardsBanner />

      {/* SECTION: Benefits Of Marketplace App Development */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Benefits Of Marketplace App Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can expand market reach and generate automated commission revenue with custom marketplace software. Six major advantages include:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Business Friendly Hiring Models */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[20px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-[400] leading-relaxed font-sans text-center">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 pt-2 text-left font-sans text-xs sm:text-[13px] text-slate-700 font-[600]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0284c7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#quote-form"
                  className="w-full py-3 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-sm transition-all shadow-md hover:shadow-lg font-sans inline-block mt-4"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Innovative Solutions Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from marketplace wireframing and escrow design to UAT, security audit, and mainnet launch." />

      {/* SECTION: Our Story & Brands */}
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="marketplace app" richTechCategories={techCategories} />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={marketplaceFaqs} />

      {/* SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <IWatchWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Marketplace App Development Challenge To Address ?"
        subtitle="Get access to top Marketplace App Development team to transform your ideas into a high-converting multi-vendor application."
      />
    </div>
  );
};

export default MarketplaceAppDevelopmentService;
