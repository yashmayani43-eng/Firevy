import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import OurMobileAppExpertiseServices from './OurMobileAppExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppCompanyBenefits from './MobileAppCompanyBenefits';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';

const VisaCardCuttingEdgeSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Artificial Intelligence & Fraud Detection',
      desc: 'We help financial institutions integrate AI and machine learning algorithms to detect anomalies, prevent card fraud in real time, and deliver personalized banking experiences.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="10" width="20" height="20" rx="4" />
          <path d="M15 20h10M20 15v10" strokeLinecap="round" />
          <path d="M16 10V6M24 10V6M16 30v4M24 30v4M10 16H6M10 24H6M30 16h4M30 24h4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Visa Tokenization (VTS) & Digital Wallets',
      desc: 'Integrate Visa Token Service (VTS) and Apple Pay / Google Wallet push provisioning to replace sensitive 16-digit PANs with secure virtual tokens for frictionless payments.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="10" width="28" height="20" rx="4" />
          <path d="M6 16h28" strokeLinecap="round" />
          <circle cx="14" cy="23" r="2" fill="#0084D1" />
          <circle cx="20" cy="23" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cross Platform Development Service',
      desc: 'With unified codebase frameworks like Flutter and React Native, we build high-performance, secure Visa card mobile apps that run seamlessly on iOS, Android, and Web.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 27a13 13 0 1120 0" strokeLinecap="round" />
          <path d="M19 21l6-6M25 15h-4M25 15v4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="22" r="2.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Biometric & Strong Customer Auth (SCA)',
      desc: 'Implement 3-D Secure 2.0 (3DS2), biometric Touch ID/Face ID verification, and FIDO2 compliance to maximize conversion rates while stopping unauthorized charges.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 28c-2.8 0-5-2.2-5-5 0-1.7.9-3.2 2.2-4-.3-.6-.5-1.4-.5-2.1 0-3.1 2.5-5.6 5.6-5.6.5 0 1 .1 1.4.2C17.9 9.3 20 8 22.3 8c3.4 0 6.2 2.5 6.7 5.8 2 .6 3.5 2.5 3.5 4.7 0 1.3-.5 2.5-1.4 3.4.9.9 1.5 2.1 1.5 3.6 0 2.8-2.2 5-5 5" strokeLinecap="round" />
          <circle cx="16" cy="18" r="1.5" fill="#0084D1" />
          <circle cx="24" cy="16" r="1.5" fill="#0084D1" />
          <circle cx="21" cy="22" r="1.5" fill="#0084D1" />
          <path d="M16 18l5 4 3-6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'NFC Contactless & Tap to Pay',
      desc: 'Enable seamless Tap-to-Pay and Host Card Emulation (HCE) allowing cardholders and merchants to accept transactions directly via NFC-enabled smartphones.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="6" width="20" height="28" rx="4" />
          <path d="M17 30h6" strokeLinecap="round" />
          <path d="M20 12l4.5 2.6v5.2L20 22.4l-4.5-2.6v-5.2L20 12z" />
          <path d="M20 12v10.4M15.5 14.6l4.5 2.6 4.5-2.6" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Open Banking & Card Issuing APIs',
      desc: 'Pre-integrated connectivity with Marqeta, Galileo, Stripe Issuing, Adyen, and Plaid to enable instant virtual card issuance, credit limits, and real-time ledger updates.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="4" />
          <path d="M5 14h30M11 10.5h.01M15 10.5h.01M19 10.5h.01" />
          <path d="M16 20l-3 3 3 3M24 20l3 3-3 3M21 19l-2 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Fintech Super Apps & Loyalty Engines',
      desc: 'Build all-in-one financial super apps featuring automated rewards, merchant-funded cashback, installment loans (BNPL), and multi-currency international spending.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="4" />
          <path d="M5 14h30M13 14v19M13 22h22" />
          <rect x="8" y="17" width="3" height="3" rx="0.5" fill="#0084D1" />
          <rect x="8" y="23" width="3" height="3" rx="0.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Progressive Web App Development',
      desc: 'Deliver fast, lightweight web cardholder portals with offline balance checking, instant push notifications, and biometric verification across any browser.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="13" y="6" width="22" height="28" rx="4" />
          <path d="M20 30h8M13 11h22M13 28h22" />
          <circle cx="10" cy="18" r="4" strokeDasharray="3 2" />
          <circle cx="10" cy="18" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 9,
      title: 'Blockchain & Crypto Card Solutions',
      desc: 'Bridge fiat card rails with crypto assets through Visa crypto debit cards, instant stablecoin settlement, and smart contract escrow integrations.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 7l11 6.5v13L20 33l-11-6.5v-13L20 7z" />
          <path d="M20 7v26M9 13.5l11 6.5 11-6.5" />
          <circle cx="20" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 10,
      title: 'IoT & Smart Device Payments',
      desc: 'Extend Visa payments to smart wearables, connected vehicles, and automated vending machines with encrypted tokenized IoT payment channels.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
          <path d="M12 12a11 11 0 0116 0M8 8a17 17 0 0124 0M12 28a11 11 0 0016 0M8 32a17 17 0 0024 0" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 11,
      title: 'PCI-DSS Cloud Infrastructure',
      desc: 'Enterprise cloud architectures certified for PCI-DSS Level 1 compliance with zero downtime, microservices scalability, and automated compliance auditing.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 28h17a6 6 0 001-11.9 8.5 8.5 0 00-16.5-2.1A6 6 0 0012 28z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 21v6M16 24l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const maxIndex = Math.max(0, technologies.length - 3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden w-full border-b border-slate-100">
      {/* Centered Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies Sapphire Use For Visa Card App<br className="hidden sm:inline" /> Development
        </h2>
      </div>

      {/* Full-width Carousel Container */}
      <div 
        className="w-full relative px-4 sm:px-6 lg:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${carouselIndex * (100 / 3 + 2)}%)`
            }}
          >
            {technologies.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-[#F5FAFF] border border-sky-100 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-14 h-14 rounded-lg bg-white shadow-xs border border-sky-100 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-[700] text-[#0B0F19] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-xs cursor-pointer text-lg font-bold"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-xs cursor-pointer text-lg font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

const VisaCardDigitalTransformationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: 'FintechCard Corp',
      bgColor: '#EBF4F6',
      logo: (
        <div className="text-2xl sm:text-3xl font-[900] tracking-wider text-slate-900 mb-3 font-sans">
          FINTECH<span className="text-[#0084D1]">CARD</span>
        </div>
      ),
      desc: 'FintechCard Corp is a next-generation card issuance platform delivering instant digital virtual cards with seamless tokenization across Apple Pay and Google Wallet.',
      bullets: [
        'Reduced card issuance latency from days to under 30 seconds',
        'PCI-DSS Level 1 certified cloud microservices architecture'
      ],
      mainImg: '/images/case-study-car.png'
    },
    {
      id: 2,
      company: 'L&T Technology Services',
      bgColor: '#F5EFEB',
      logo: (
        <div className="mb-4">
          <span className="inline-block bg-[#0B2545] text-white font-serif font-black text-xl px-2 py-0.5 tracking-tighter">
            L&amp;T
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-800 uppercase block mt-1 font-sans">
            Technology Services
          </span>
        </div>
      ),
      desc: 'L&T is a global leader in engineering services, enabling enterprises with end-to-end digital payment infrastructure, automated settlement, and secure cloud ledger synchronization.',
      bullets: [
        'Enhanced financial transaction throughput by 42%',
        'Automated real-time ledger settlement and multi-currency conversion'
      ],
      mainImg: '/images/case-study-construction.png'
    },
    {
      id: 3,
      company: 'MG Motor',
      bgColor: '#F1F1F1',
      logo: (
        <div className="mb-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 text-red-600 font-black text-base tracking-tighter font-sans">
            MG
          </span>
        </div>
      ),
      desc: 'MG Motor partnered with us to engineer connected vehicle payment ecosystems, allowing drivers to pay for toll, charging, and parking directly from their in-dash display via tokenized Visa cards.',
      bullets: [
        'In-vehicle frictionless checkout with tokenized biometrics',
        'Over 100K+ monthly active in-car transactions executed'
      ],
      mainImg: '/images/case-study-mg.png'
    },
    {
      id: 4,
      company: "L'Oréal",
      bgColor: '#FBF0EA',
      logo: (
        <div className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-slate-900 uppercase mb-3">
          L&apos;ORÉAL
        </div>
      ),
      desc: "L'Oréal implemented custom co-branded beauty reward credit card applications, driving customer loyalty with instant point redemptions and tailored retail perks at checkout.",
      bullets: [
        'Over 35% increase in repeat retail purchases within 6 months',
        'Seamless POS and mobile app omnichannel loyalty synchronization'
      ],
      mainImg: '/images/case-study-cosmetics.png'
    },
    {
      id: 5,
      company: 'Adani Gas',
      bgColor: '#EAF3F8',
      logo: (
        <div className="text-xl sm:text-2xl font-black text-slate-800 mb-3 tracking-tight font-sans">
          adani <span className="font-light text-slate-600">Gas</span>
        </div>
      ),
      desc: 'Adani Gas deployed our automated utility payment and billing suite, enabling millions of consumers to set up recurring Visa auto-debit payments with zero failure rates.',
      bullets: [
        'Automated recurring billing with zero transaction drop-offs',
        'Real-time statement generation and automated bill split'
      ],
      mainImg: '/images/case-study-smart-utility.png'
    },
    {
      id: 6,
      company: 'Waymark',
      bgColor: '#F4EFF7',
      logo: (
        <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-3 font-sans">
          Waymark
        </div>
      ),
      desc: 'Waymark leveraged our bespoke fintech payment APIs to integrate on-demand corporate expense cards with granular spending controls and instant mobile receipts.',
      bullets: [
        'Granular card controls by merchant category, spend limit, and time',
        '99.99% uptime with bank-grade multi-region disaster recovery'
      ],
      mainImg: '/images/case-study-waymark.png'
    }
  ];

  const maxIndex = Math.max(0, caseStudies.length - 2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFA] text-slate-900 font-sans text-left overflow-hidden w-full border-b border-slate-200/60">
      {/* Centered Heading */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
          Digital Transformation Case Studies
        </h2>
      </div>

      {/* Full-width Horizontal Carousel Container */}
      <div className="w-full relative px-4 sm:px-6 lg:px-8">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / 2 + 1.5)}%)`
          }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="w-full lg:w-[calc(50%-12px)] shrink-0 rounded-2xl p-6 sm:p-8 lg:p-10 transition-shadow shadow-xs border border-slate-200/70"
              style={{
                backgroundColor: cs.bgColor,
                minHeight: '440px'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
                {/* Left Column: Logo, Description, Points & Buttons */}
                <div className="lg:col-span-6 flex flex-col justify-between text-left h-full">
                  <div>
                    {cs.logo}
                    <p className="text-xs sm:text-[13px] font-[400] text-slate-700 leading-relaxed font-sans mb-4 line-clamp-4 sm:line-clamp-none">
                      {cs.desc}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {cs.bullets.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-900 font-bold font-sans">
                          <span className="text-slate-950 font-[950] shrink-0 mt-0.5 text-sm">»</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to="/portfolio"
                      className="px-6 py-2.5 bg-[#111827] hover:bg-slate-800 text-white font-[800] text-xs sm:text-sm rounded-full transition-all shadow-md font-sans"
                    >
                      View Case Study
                    </Link>
                    <Link
                      to="/portfolio"
                      className="px-6 py-2.5 bg-white/90 border border-slate-400 hover:bg-white text-slate-900 font-[800] text-xs sm:text-sm rounded-full transition-all shadow-xs font-sans"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>

                {/* Right Column: Case Study Graphic/Mockup */}
                <div className="lg:col-span-6 flex items-center justify-center min-h-[280px]">
                  <img
                    src={cs.mainImg}
                    alt={cs.company}
                    className="w-full h-auto max-h-[360px] object-contain rounded-2xl drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Center Navigation Controls */}
      <div className="flex items-center justify-center space-x-5 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold border border-slate-300 shadow-xs"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold border border-slate-300 shadow-xs"
        >
          →
        </button>
      </div>
    </section>
  );
};

export const VisaCardAppDevelopmentService = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased text-left selection:bg-sky-500 selection:text-white">
      <SEO
        title="Visa Card App Development Company | Custom Visa Card & Fintech Apps"
        description="We excel at providing cutting-edge Visa Card Apps that improve transaction speed, optimize financial operations, and offer intuitive payment experiences."
      />

      {/* =========================================================================
          HERO SECTION (1:1 Reference Match to Windows 11 Page Layout)
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-white text-slate-900 text-left font-sans relative overflow-hidden">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading, Subtitle, Stats & Discuss Your Project Button */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Main Title */}
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.18] font-sans"
                style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
              >
                <span className="block">Visa Card App Development</span>
                <span className="block">Company</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                We excel at providing cutting-edge Visa Card Apps that improve transaction speed, optimize financial operations, and offer intuitive payment experiences. As a reliable Visa Card App Development Company, we create effective solutions for both fintech startups and enterprise financial institutions, with real-time payment gateways, fraud protection, and contactless Visa PayWave integration at each step. Whether you require a cardholder mobile wallet app, an issuing bank portal, or a merchant payment acceptance dashboard, our skilled developers turn your ideas into reality. Contact us today for a complimentary consultation and quote specific to your requirements.
              </p>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Software<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Project Completed in<br />Software
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Discuss Your Project Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] mx-auto flex items-center justify-center">
                <img
                  src="/images/services/credit-card-hero-illustration.png"
                  alt="Visa Card App Development Company"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 ease-out hover:scale-102 drop-shadow-xl"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/windows_11_hero_illustration.svg';
                  }}
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Line */}
      <BrandLogoMarquee />

      {/* =========================================================================
          SECTION 1: Leading Experts In Visa Card App Development
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Illustration / Mockup */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[420px] mx-auto">
                <img
                  src="/images/services/credit-card-trusted-experts.png"
                  alt="Leading Experts In Visa Card App Development"
                  className="w-full h-auto object-contain select-none drop-shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/windows_11_hero_illustration.svg';
                  }}
                />
              </div>
            </div>

            {/* Right Column: Title & Description */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2
                className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25] font-sans"
              >
                Leading Experts In Visa Card<br />App Development
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Being a well-reputed leader in secure Visa card and digital payment application development services, we provide solid, PCI-DSS compliant, and industry-specific fintech solutions that meet modern banking and cardholder requirements. Our specialty is crafting bespoke Visa card app development services that enable organizations to scale effectively while embracing contactless payments, tokenization, and automated financial workflows. With extensive expertise in developing robust payment gateway architectures, we bring bank-grade encryption, seamless UX, and biometric authentication together to empower banks, neobanks, and fintech innovators to leverage the full potential of global Visa payment rails.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: World Wide Top Rated IT Company on Clutch (Blue Awards Banner)
          ========================================================================= */}
      <section className="w-full bg-[#005F96] text-white py-6 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            
            {/* Left Block: Heading + FIXED TROPHY BADGE */}
            <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-[800] tracking-tight text-white leading-[1.2] max-w-xs sm:max-w-sm text-left">
                World Wide Top Rated IT<br />Company on Clutch
              </h3>

              {/* FIXED TROPHY BADGE */}
              <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
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
            </div>

            {/* Right Block: CONTINUOUS INFINITE AUTO-SCROLLING MARQUEE FOR BADGES */}
            <div className="w-full lg:flex-1 overflow-hidden relative">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Manifest Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Web Review Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_app_goodfirm.svg" alt="GoodFirms" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_clutchn.svg" alt="Clutch Top Rated" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Manifest Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Web Review Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_app_goodfirm.svg" alt="GoodFirms" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_clutchn.svg" alt="Clutch Top Rated" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Business-Specific Visa Card System App Development
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Business-Specific Visa Card System App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F0F8FF] border border-sky-100 rounded-2xl p-8 sm:p-10 text-left relative overflow-hidden shadow-sm">
                <span className="text-5xl sm:text-6xl text-[#005F96] font-serif font-black leading-none block mb-4">“</span>
                <h3 className="text-2xl sm:text-[26px] font-[800] text-[#005F96] leading-[1.3] tracking-tight">
                  Secure, Scalable &amp;<br />Future-Ready<br />Apps
                </h3>
              </div>
            </div>

            {/* Right Detailed Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                We realize the critical significance of bank-grade security, regulatory compliance, and ultra-low latency for modern payment systems. Our Visa Card App Development Services are driven by crafting payment architectures that seamlessly interface with core banking platforms, card networks, and global acquiring processors. From cardholder balance check to instant tap-to-pay tokenization, we build apps that exceed user expectations for speed, convenience, and privacy.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Our fintech engineering experience across diverse financial sectors makes us the ideal partner for banks, credit unions, neobanks, and enterprises seeking bespoke card solutions. Whether you are developing an iOS and Android virtual card wallet, adding multi-tier rewards and cashback programs, or designing cloud microservices for transaction dispute management, our skilled team guarantees future-proof, compliant, and conversion-optimized products.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: Cutting Edge Technologies Sapphire Use For Visa Card App Development
          ========================================================================= */}
      <VisaCardCuttingEdgeSection />

      {/* =========================================================================
          SECTION 5: Our Premium Services Grid
          ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* SECTION: Success Stories Portfolio & Metrics */}
      <SuccessStoriesSection />

      {/* SECTION: Proud Awards & Recognition Banner */}
      <ProudAwardsBanner />

      {/* SECTION: Benefits of the Best Mobile App Development Company */}
      <MobileAppCompanyBenefits />

      {/* SECTION: Our Expertise in Mobile App Development Services */}
      <OurMobileAppExpertiseServices />

      {/* SECTION: Business Friendly Hiring Models */}
      <AndroidHiringModels />

      {/* SECTION: Innovative Solutions Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile Visa card app development life cycle from compliance planning and architecture design to secure sandbox testing and app store deployment." />

      {/* SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* SECTION: Trusted Brands */}
      <TrustedBrandsGrid />

      {/* SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* SECTION: We Have Been Featured In */}
      <FeaturedInBrandsSection />

      {/* SECTION: Digital Transformation Case Studies Full-Width Slider */}
      <VisaCardDigitalTransformationSection />

      {/* SECTION: Frequently Asked Questions */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        initialOpenIndex={null}
      />

      {/* SECTION: Our Recent Blogs */}
      <MobileAppRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <MobileAppWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Visa Card App Development Challenge To Address ?"
        subtitle="Get access to top Visa Card App Developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />
    </div>
  );
};

export default VisaCardAppDevelopmentService;
