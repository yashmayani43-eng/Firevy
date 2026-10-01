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

export const SmartContractsDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // 6 Expertise Items for Smart Contracts Development
  const expertiseItems = [
    {
      title: 'Custom Smart Contract Architecture',
      desc: 'We design and write self-executing smart contracts in Solidity, Vyper, and Rust (Anchor) tailored to your exact business logic with clean, modular object patterns.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      )
    },
    {
      title: 'Smart Contract Security Audits',
      desc: 'We perform static code analysis, formal verification, Slither vulnerability scans, and manual line-by-line audits to eliminate reentrancy hacks and flash-loan vectors.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Tokenization & NFT Standards',
      desc: 'Deploy battle-tested ERC-20, ERC-721, ERC-1155, and Solana Metaplex contracts with automated royalty distribution, batch minting, and burn mechanisms.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v12M8.5 9.5h7M8.5 14.5h7" />
        </svg>
      )
    },
    {
      title: 'DeFi & Staking Protocols',
      desc: 'Engineer decentralized finance smart contracts including automated market makers (AMMs), liquidity pools, yield farming, lending protocols, and ERC-4626 vault standards.',
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Oracle & Cross-Chain Integration',
      desc: 'Seamlessly link your smart contracts with real-world price feeds and off-chain data via Chainlink Oracles, CCIP, Pyth Network, and LayerZero messaging.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      )
    },
    {
      title: 'Upgradeability & DAO Governance',
      desc: 'Implement OpenZeppelin transparent proxy contracts (UUPS), multi-signature Gnosis Safe controls, and decentralized voting mechanisms for long-term protocol evolution.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Smart Contracts Development
  const benefitsItems = [
    {
      title: '100% Immutable Trust & Transparency',
      desc: 'Once deployed on the blockchain, smart contracts run autonomously without any central point of failure, ensuring tamper-proof execution.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Up to 70% Gas Fee Optimization',
      desc: 'Our Web3 engineers optimize storage slots, assembly loops, and batch transaction calls to minimize gas consumption for your users.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Automated Multi-Sig Escrow & Royalties',
      desc: 'Eliminate intermediaries with self-executing escrow rules and automated revenue sharing programmed directly into the protocol.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Multi-Chain Interoperability',
      desc: 'Deploy uniform smart contract suites across Ethereum, Polygon, Solana, BNB Chain, Avalanche, and Layer-2 rollups like Arbitrum.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="8" height="8" rx="2" />
          <rect x="14" y="2" width="8" height="8" rx="2" />
          <rect x="14" y="14" width="8" height="8" rx="2" />
          <rect x="2" y="14" width="8" height="8" rx="2" />
        </svg>
      )
    },
    {
      title: 'Formal Verification & OWASP Compliance',
      desc: 'Every smart contract line undergoes rigorous unit testing with Hardhat/Foundry and fuzz testing to protect high-value TVL assets.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: 'Competitive Decentralized Advantage',
      desc: 'Empower your Web3 application with sub-second execution, liquidity incentives, and automated governance to outpace legacy competitors.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
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
      { name: 'Solidity & Vyper', desc: 'EVM-compatible smart contract programming with Yul assembly optimizations.' },
      { name: 'Rust & Anchor Framework', desc: 'High-speed Solana program architecture with memory-safe execution.' },
      { name: 'OpenZeppelin Contracts', desc: 'Audited standard library for tokens, proxies, and access control.' }
    ],
    frontend: [
      { name: 'Ethers.js & Viem', desc: 'Type-safe Ethereum JavaScript SDK for seamless wallet and RPC connections.' },
      { name: 'Wagmi & Web3Modal', desc: 'Modern React hooks for MetaMask, WalletConnect, and Coinbase Wallet.' }
    ],
    database: [
      { name: 'IPFS & Arweave', desc: 'Decentralized immutable storage for NFT metadata and smart contract state backups.' },
      { name: 'The Graph Protocol', desc: 'Custom GraphQL subgraphs for instant indexing of on-chain events.' }
    ],
    devops: [
      { name: 'Hardhat & Foundry', desc: 'Blazing-fast local development environments, unit tests, and gas reporting.' },
      { name: 'Chainlink Oracles', desc: 'Decentralized price feeds, VRF randomness, and automation keepers.' }
    ],
    testing: [
      { name: 'Slither & Mythril', desc: 'Automated static analysis and symbolic execution to detect vulnerabilities.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent Web3 sprint planning with certified senior smart contract auditors.' }
    ]
  };

  // Official Smart Contracts FAQs
  const smartContractFaqs = [
    {
      q: '1. What is Smart Contract Development?',
      a: 'Smart contract development is the process of creating self-executing programs on a blockchain (such as Ethereum, Solana, or Polygon) that automatically run when predetermined business conditions are met.'
    },
    {
      q: '2. Which blockchain platforms do you write Smart Contracts for?',
      a: 'We develop smart contracts for Ethereum (EVM), Polygon, Solana (SVM), BNB Chain, Avalanche, Arbitrum, Optimism, Base, and Aptos.'
    },
    {
      q: '3. How do you audit smart contracts to prevent hacks?',
      a: 'We employ a multi-layered security protocol: static analysis with Slither/Mythril, unit & integration testing in Foundry, fuzzing, formal verification, and manual line-by-line review by Web3 security architects.'
    },
    {
      q: '4. What is Gas Optimization and why is it important?',
      a: 'Gas optimization reduces transaction fees for users interacting with your contract. We optimize Yul assembly, struct packing, storage layout, and loop execution to lower gas costs by up to 70%.'
    },
    {
      q: '5. Can Smart Contracts be upgraded after mainnet deployment?',
      a: 'Yes! We implement proxy patterns (such as UUPS or Transparent Upgradeable Proxies by OpenZeppelin) controlled by multi-signature wallets or DAO governance.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict non-disclosure agreements before initial code audits or project discovery to ensure 100% confidentiality and complete IP code ownership.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen overflow-x-hidden">
      <SEO
        title="Smart Contracts Development Services | Solidity & Rust Web3 Company | Firevy.Co"
        description="Top Smart Contracts Development Company. Build custom ERC-20/721/1155 smart contracts, DeFi protocols, and audited Web3 solutions with Firevy.Co."
        canonical="/services/smart-contracts-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Smart Contract Development Company in USA"
        subtitle="Our extensive knowledge in smart contracts development has distinguished us as one of the most influential Smart contract development firms."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        heroImage="/images/smart_contracts_hero.png"
        serviceCategory="smart-contracts"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* SECTION 2: Get Customized And Affordable Smart Contracts Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: PNG Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/smart_contracts_sec2_illustration.png"
                  alt="Get Customized And Affordable Smart Contracts Development Services"
                  className="w-full max-w-[480px] h-auto object-contain select-none pointer-events-none drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Get Customized And Affordable Smart Contracts Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Smart contracts form the backbone of modern Web3 applications, enabling self-executing agreements with zero friction and 100% transparency. Our Smart Contracts development company delivers custom, gas-optimized Solidity and Rust smart contracts tailored to your exact tokenomics, DeFi mechanics, or NFT ecosystem requirements.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                From initial architecture and unit testing to third-party audits and mainnet deployment, our Web3 engineers enforce bank-grade security protocols so your protocols remain exploit-free under heavy TVL transaction loads.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Brief About Smart Contracts Development */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Smart Contracts Development
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Smart contract engineering combines rigorous software architecture with cryptoeconomic security. By deploying self-executing programs directly onto public or private blockchain networks, businesses eliminate costly administrative overhead, accelerate settlement speeds to seconds, and establish unalterable provenance.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Firevy.Co brings 23+ years of IT engineering excellence and over a decade of dedicated Web3 experience. We assist startups and Fortune 500 enterprises alike in launching secure token contracts, NFT minting engines, DAO governance systems, and cross-chain liquidity bridges.
              </p>
            </div>

            {/* Right Column: Brief Solutions PNG Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/smart_contracts_sec3_illustration.png"
                  alt="Brief About Smart Contracts Development"
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

      {/* SECTION: Get 100% Customizable Smart Contracts */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Get 100% Customizable Smart Contracts Solutions
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
                    Scalable, Audited & High-Security Smart Contracts
                  </h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As a top Smart Contracts development company, our Web3 developers stay ahead of blockchain innovation. We leverage modern Solidity 0.8+, Yul assembly optimizations, and Foundry testing frameworks to engineer completely customized Web3 protocols.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                In addition to writing core contract code, we provide complete integration support for DApps, Ethers.js/Viem SDKs, subgraphs, wallet connectors, and automated security audit reports to guarantee smooth production releases.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our Smart Contracts Development Services */}
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
              The Expertise Of Our Smart Contracts Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our Web3 engineers have years of experience in custom smart contract development. Key expertise areas include:
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

      {/* SECTION: Benefits Of Smart Contracts Development */}
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
              Benefits Of Smart Contracts Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can automate trust, minimize transaction overhead, and expand market reach with smart contract protocols. Six major advantages include:
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
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from smart contract specifications to local testnet fuzzing, third-party audit, and mainnet deployment." />

      {/* SECTION: Our Story & Brands */}
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="smart contract" richTechCategories={techCategories} />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={smartContractFaqs} />

      {/* SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <IWatchWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Smart Contracts Development Challenge To Address ?"
        subtitle="Get access to top Smart Contracts Development team to transform your ideas into robust decentralized protocols."
      />
    </div>
  );
};

export default SmartContractsDevelopmentService;
