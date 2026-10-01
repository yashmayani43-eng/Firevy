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

export const BitcoinWalletDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // 6 Expertise Items for Bitcoin Wallet Development
  const expertiseItems = [
    {
      title: 'Custom Non-Custodial HD Wallets',
      desc: 'We architect hierarchical deterministic (HD) Bitcoin wallets conforming to BIP-32, BIP-39, and BIP-44 standards, ensuring users retain 100% private key ownership.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'Lightning Network Integration',
      desc: 'We embed Layer-2 Lightning Network Daemon (LND) channels into mobile and web wallets for sub-second, micro-fee Bitcoin payment processing.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Multi-Sig & Hardware Wallet Support',
      desc: 'Implement N-of-M multi-signature security (2-of-3, 3-of-5) alongside hardware wallet USB/NFC integration for Ledger, Trezor, and Coldcard.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'SegWit & Taproot Optimization',
      desc: 'Lower transaction fees by utilizing Native SegWit (Bech32) and Taproot (P2TR) script formats with MAST and Schnorr signature efficiency.',
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
        </svg>
      )
    },
    {
      title: 'Biometric & MPC Key Security',
      desc: 'Integrate multi-party computation (MPC) threshold signatures, iOS FaceID, Android Fingerprint, and hardware-backed Secure Enclave storage.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          <path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10s10-4.5 10-10A10 10 0 0 0 12 2z" />
        </svg>
      )
    },
    {
      title: 'Cross-Chain & Fiat Gateway Integration',
      desc: 'Enable seamless crypto-to-fiat on-ramps (Visa, Mastercard, Apple Pay) and instant cross-chain swaps between BTC, USDT, and Lightning satoshis.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 6v12" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Bitcoin Wallet Development
  const benefitsItems = [
    {
      title: 'Instant Microsecond Payments',
      desc: 'Leverage Lightning Network channels for instant settlement of micro-satoshis without waiting for Bitcoin block confirmations.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Minimal Transaction Gas Fees',
      desc: 'Native SegWit and Taproot transaction formatting reduces data footprint and cuts mempool fee costs by up to 50%.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: '100% User Key Control (Non-Custodial)',
      desc: 'Ensure total user sovereignty with 12/24-word seed recovery passphrases and zero central server key retention.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Enterprise Multi-Sig Treasury',
      desc: 'Protect corporate treasuries with multi-key approval workflows requiring M-of-N executive authorizations per transaction.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'Cold Storage & SPV Decoupling',
      desc: 'Simplified Payment Verification (SPV) node synchronization ensures fast mobile balance checks without downloading full blockchain history.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12H2M12 2v20" />
        </svg>
      )
    },
    {
      title: 'OWASP Financial-Grade Security',
      desc: 'AES-256 seed encryption, SSL pinning, anti-tampering obfuscation, and zero-knowledge privacy features protect funds against malware.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
      { name: 'Bitcoin Core & Electrum Protocol', desc: 'Full node & SPV electrum RPC connections for transaction relaying.' },
      { name: 'BitcoinJS & bcoin', desc: 'Robust JavaScript libraries for client-side transaction signing & taproot scripts.' },
      { name: 'Lightning LND & Core Lightning', desc: 'Layer-2 payment channel nodes for sub-second micro-transactions.' }
    ],
    frontend: [
      { name: 'React Native & Flutter', desc: 'Cross-platform iOS & Android mobile wallet interfaces with smooth UX.' },
      { name: 'Swift & Kotlin Native', desc: 'High-performance native mobile clients leveraging Secure Enclave & Keystore.' }
    ],
    database: [
      { name: 'Encrypted LevelDB & RocksDB', desc: 'High-throughput local key-value databases for wallet UTXO tracking.' }
    ],
    devops: [
      { name: 'Docker & Kubernetes', desc: 'High-availability containerized Bitcoin Core and LND node infrastructure.' }
    ],
    testing: [
      { name: 'Bitcoin Regtest & Testnet3', desc: 'Automated local regtest environments for zero-cost transaction testing.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent sprint planning with certified senior Bitcoin protocol engineers.' }
    ]
  };

  // Official Bitcoin Wallet FAQs
  const bitcoinFaqs = [
    {
      q: '1. What is Bitcoin Wallet Development?',
      a: 'Bitcoin wallet development involves creating secure software or hardware interfaces that generate cryptographic key pairs, manage UTXOs, format SegWit/Taproot transactions, and broadcast transactions to the Bitcoin network.'
    },
    {
      q: '2. What is the difference between Custodial and Non-Custodial Bitcoin Wallets?',
      a: 'In a non-custodial wallet, the user holds 100% control of their private keys via a seed phrase. In a custodial wallet, a central server manages the keys. We build both non-custodial and enterprise-grade custodial wallets based on your compliance needs.'
    },
    {
      q: '3. How does Lightning Network integration benefit my wallet?',
      a: 'Lightning Network enables instant, micro-fee payments by settling transactions off-chain in peer-to-peer payment channels, making Bitcoin scalable for everyday retail transactions.'
    },
    {
      q: '4. What are BIP-32, BIP-39, and BIP-44 standards?',
      a: 'These Bitcoin Improvement Proposals define hierarchical deterministic (HD) wallet standards. BIP-39 generates human-readable 12/24-word seed phrases, while BIP-32 and BIP-44 allow generating infinite sub-addresses from a single master seed.'
    },
    {
      q: '5. How secure are Multi-Signature (Multi-Sig) Bitcoin wallets?',
      a: 'Multi-signature wallets require approvals from M-of-N keys (e.g., 2-of-3) to spend funds. This eliminates single points of failure, making it ideal for corporate treasury management and escrow services.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict non-disclosure agreements before initial architecture discovery calls to ensure 100% confidentiality and complete IP source code ownership.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen overflow-x-hidden">
      <SEO
        title="Bitcoin Wallet Development Company USA | Custom Crypto Wallets | Firevy.Co"
        description="Top Bitcoin Wallet Development Company. Build custom non-custodial HD wallets, Lightning Network apps, SegWit/Taproot multi-sig solutions with Firevy.Co."
        canonical="/services/bitcoin-wallet-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Bitcoin Wallet Development Company in USA"
        subtitle="Financial institutions and businesses that deal in bitcoin are looking to make the most of the possibilities presented by the rapidly expanding market for bitcoin."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        heroImage="/images/bitcoin_wallet_hero.png"
        serviceCategory="bitcoin-wallet"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* SECTION 2: Business-Oriented Bitcoin Wallet Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: PNG Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/bitcoin_sec2_illustration.png"
                  alt="Business-Oriented Bitcoin Wallet Development Services"
                  className="w-full max-w-[480px] h-auto object-contain select-none pointer-events-none drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Business-Oriented Bitcoin Wallet Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Utilizing the custom Bitcoin Wallet Development Services as a revenue stream and introducing their Bitcoin wallet development cost and timeline has resulted in varying success for various companies. With the help of this function, users can ensure the safety of their accounts. Our knowledgeable crypto wallet app development experts in Bitcoin wallet development tasks. Their research into the most recent Crypto Wallet Development Solution can be updated in Bitcoin wallet development activities is advancing rapidly. This allows them to stay on the cutting edge of the industry.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Brief About Bitcoin Wallet Development */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Bitcoin Wallet Development
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Creating a secure Bitcoin wallet requires deep expertise in cryptography, BIP standards, UTXO management, and peer-to-peer network protocols. By utilizing BIP-32/39/44 seed generation, users can safely manage their funds across multiple devices using a single mnemonic backup phrase.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Firevy.Co brings 23+ years of IT engineering excellence and over a decade of dedicated Web3 experience. We help fintech startups, crypto exchanges, and corporate treasuries build secure Bitcoin wallets with zero-downtime execution and 100% source code ownership.
              </p>
            </div>

            {/* Right Column: Brief Solutions PNG Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/bitcoin_sec3_illustration.png"
                  alt="Brief About Bitcoin Wallet Development"
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

      {/* SECTION: Get 100% Customizable Bitcoin Wallet Apps */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Get 100% Customizable Bitcoin Wallet Applications
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
                    Scalable, Non-Custodial & High-Security Wallets
                  </h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As a top Bitcoin Wallet development company, our developers build feature-rich mobile and web wallet software. We integrate biological biometric login (FaceID/Fingerprint), multi-sig key storage, QR code invoicing, and real-time Satoshi fee estimators.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We ensure your wallet complies with financial security standards, OWASP mobile guidelines, and seamless fiat currency payment processors for global usability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our Bitcoin Wallet Development Services */}
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
              The Expertise Of Our Bitcoin Wallet Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our Bitcoin engineers have years of experience in custom crypto wallet software development. Key expertise areas include:
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

      {/* SECTION: Benefits Of Bitcoin Wallet Development */}
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
              Benefits Of Bitcoin Wallet Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can expand global customer reach and enable instant micro-transactions with Bitcoin wallet solutions. Six major advantages include:
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
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from wallet wireframing and seed encryption architecture to regtest simulation, security audit, and App Store release." />

      {/* SECTION: Our Story & Brands */}
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="bitcoin wallet" richTechCategories={techCategories} />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={bitcoinFaqs} />

      {/* SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <IWatchWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Bitcoin Wallet Development Challenge To Address ?"
        subtitle="Get access to top Bitcoin Wallet Development team to transform your ideas into a robust cryptocurrency application."
      />
    </div>
  );
};

export default BitcoinWalletDevelopmentService;
