import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TrustMarquee from '../home/TrustMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import BRAND from '../../constants/brand';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Smartphone,
  Globe,
  ChevronRight,
  Quote,
  Code,
  Lock,
  Layers,
  Cpu,
  Coins,
  Wallet,
  Activity,
  CheckCircle2,
  Users
} from 'lucide-react';

export const EthereumAppDevelopmentService = () => {

  // 6 Benefits of Ethereum App Development
  const ethereumBenefits = [
    {
      title: "Trustless & Decentralized Security",
      desc: "Eliminate central points of failure with Ethereum's decentralized consensus mechanism, protecting transaction history and user data from tampering.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Immutable Ledger & Transparency",
      desc: "Every transaction, smart contract state change, and token transfer is publicly verifiable on the Ethereum blockchain ledger.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 17l4-4 3 3 5-6" />
        </svg>
      )
    },
    {
      title: "Global Liquidity & Composability",
      desc: "Tap into Ethereum's vast Web3 ecosystem, seamlessly integrating with Uniswap, Aave, Chainlink oracles, and ERC token standards.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
        </svg>
      )
    },
    {
      title: "Automated Smart Contract Execution",
      desc: "Self-executing Solidity smart contracts automate escrow, token payouts, governance voting, and royalty distribution with zero intermediaries.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    },
    {
      title: "Gas Fee Optimization & L2 Scaling",
      desc: "Engineer efficient dApps utilizing Layer-2 rollups (Arbitrum, Optimism, Polygon) to achieve near-instant speeds with micro gas fees.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "Interoperable Web3 Wallet Ecosystem",
      desc: "Provide effortless Web3 login experiences by connecting MetaMask, Coinbase Wallet, WalletConnect, and social login abstraction.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-7L10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" />
        </svg>
      )
    }
  ];

  // 6 Core Ethereum App Development Services
  const ethereumFeatures = [
    {
      title: "Custom Ethereum dApp Development",
      desc: "Architect enterprise-grade decentralized web and mobile applications using React, Next.js, Ethers.js, and Web3.js connected to Ethereum EVM.",
      badgeBg: "bg-[#F3E8FF]",
      iconColor: "text-[#7C3AED]",
      icon: Globe
    },
    {
      title: "Solidity Smart Contract Engineering",
      desc: "Develop, test, and formally verify secure Solidity smart contracts. Hardhat & Foundry test suites with comprehensive security audits.",
      badgeBg: "bg-[#DCFCE7]",
      iconColor: "text-[#16A34A]",
      icon: Code
    },
    {
      title: "ERC-20, ERC-721 & ERC-1155 Tokens",
      desc: "Custom fungible utility tokens, NFT collections, marketplace contracts, and multi-token standards with automated vesting schedules.",
      badgeBg: "bg-[#FFEDD5]",
      iconColor: "text-[#EA580C]",
      icon: Coins
    },
    {
      title: "DeFi Protocols & DEX Exchanges",
      desc: "Build yield farming protocols, automated market makers (AMM), staking pools, lending/borrowing dApps, and liquidity vaults.",
      badgeBg: "bg-[#FEF9C3]",
      iconColor: "text-[#CA8A04]",
      icon: TrendingUp
    },
    {
      title: "Layer-2 Rollups & EVM Scaling",
      desc: "Deploy dApps on Arbitrum, Optimism, Base, and Polygon to provide users with 100x higher throughput and minimal transaction costs.",
      badgeBg: "bg-[#FCE7F3]",
      iconColor: "text-[#DB2777]",
      icon: Layers
    },
    {
      title: "Web3 Wallet & Account Abstraction",
      desc: "Integrate ERC-4337 account abstraction, gasless transactions, social recovery logins, and multi-sig Gnosis Safe wallet management.",
      badgeBg: "bg-[#E0F2FE]",
      iconColor: "text-[#0284C7]",
      icon: Wallet
    }
  ];

  // 8 Exact Ethereum App Development FAQs
  const ethereumFaqs = [
    {
      id: 1,
      question: "1. What is Ethereum App Development and how does an Ethereum dApp work?",
      answer: "Ethereum App Development involves building decentralized applications (dApps) that run on the Ethereum Virtual Machine (EVM). The frontend connects via Web3 providers (like Ethers.js) to Solidity smart contracts deployed on the blockchain."
    },
    {
      id: 2,
      question: "2. Which smart contract programming language and tools do you use?",
      answer: "We develop smart contracts using Solidity and Vyper, utilizing industry-standard development frameworks like Hardhat, Foundry, Remix, and OpenZeppelin contract libraries."
    },
    {
      id: 3,
      question: "3. How do you ensure Ethereum smart contracts are secure against hacks?",
      answer: "We enforce rigorous security standards including static analysis (Slither, Mythril), unit testing with Foundry/Hardhat, reentrancy guards, formal verification, and third-party security audits."
    },
    {
      id: 4,
      question: "4. Can you reduce high Ethereum gas fees for my users?",
      answer: "Yes! We optimize Solidity code for low gas consumption and implement Layer-2 scaling solutions like Arbitrum, Optimism, Base, and Polygon, along with ERC-4337 gasless meta-transactions."
    },
    {
      id: 5,
      question: "5. Can you integrate Ethereum dApps with Web2 infrastructure or existing APIs?",
      answer: "Yes, we integrate Chainlink decentralized oracles, Subgraph indexing (The Graph), and custom Node.js middleware to bridge Web2 databases with on-chain Ethereum contracts."
    },
    {
      id: 6,
      question: "6. How long does it take to build a custom Ethereum dApp?",
      answer: "Development timelines range from 6 to 14 weeks depending on dApp scope, smart contract complexity, Web3 frontend design, and security audit iterations."
    },
    {
      id: 7,
      question: "7. Why choose Firevy.Co for Ethereum App Development Services?",
      answer: "Firevy.Co brings 23+ years of IT engineering excellence, 320+ 5-star Clutch reviews, certified blockchain developers, battle-tested smart contracts, and complete NDA protection."
    },
    {
      id: 8,
      question: "8. Do you build custom Web3 wallets and NFT marketplaces on Ethereum?",
      answer: "Yes, we design and build complete NFT minting platforms, secondary marketplaces (ERC-721/1155), non-custodial Web3 wallets, and DeFi staking portals."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Ethereum App Development Services | ${BRAND.name}`}
        description="Build secure decentralized dApps, Solidity smart contracts, ERC-20/NFT tokens, and DeFi protocols on Ethereum and EVM Layer-2 networks with Firevy."
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION
         ========================================================================= */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-sky-100/40 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services/blockchain-development" className="hover:text-[#005F96] transition-colors">Blockchain Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Ethereum App Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-[1.15]"
              >
                Ethereum App<br className="hidden sm:inline" /> Development Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Empower your business with decentralized technology on the world's leading smart contract blockchain. We build custom Ethereum dApps, audited Solidity smart contracts, ERC-20 utility tokens, NFT platforms, and high-throughput DeFi protocols. Harness EVM compatibility, Layer-2 rollups (Arbitrum, Polygon, Optimism), and account abstraction to deliver seamless Web3 user experiences. Get a free quote today!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004a77] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Visual Illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[500px] relative"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <svg viewBox="0 0 500 350" className="w-full h-full drop-shadow-md">
                    <defs>
                      <linearGradient id="ethBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EEF2FF" />
                        <stop offset="100%" stopColor="#E0E7FF" />
                      </linearGradient>
                      <linearGradient id="ethDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="50%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#3730A3" />
                      </linearGradient>
                      <filter id="softShadowEth" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#4338CA" floodOpacity="0.15" />
                      </filter>
                    </defs>

                    {/* Backdrop Blob */}
                    <path
                      d="M 90,170 C 40,150 40,90 90,60 C 130,30 210,20 270,40 C 320,10 400,20 430,70 C 470,100 480,170 440,210 C 470,260 400,310 330,300 C 270,320 190,320 140,290 C 80,300 40,230 90,170 Z"
                      fill="url(#ethBgGrad)"
                    />

                    {/* Blockchain Node Network Connections */}
                    <g opacity="0.3" stroke="#4F46E5" strokeWidth="1.5" fill="none">
                      <line x1="120" y1="100" x2="250" y2="60" />
                      <line x1="250" y1="60" x2="380" y2="100" />
                      <line x1="120" y1="100" x2="150" y2="250" />
                      <line x1="380" y1="100" x2="350" y2="250" />
                      <line x1="150" y1="250" x2="250" y2="290" />
                      <line x1="350" y1="250" x2="250" y2="290" />
                      <circle cx="120" cy="100" r="6" fill="#818CF8" />
                      <circle cx="380" cy="100" r="6" fill="#818CF8" />
                      <circle cx="150" cy="250" r="6" fill="#818CF8" />
                      <circle cx="350" cy="250" r="6" fill="#818CF8" />
                    </g>

                    {/* Central Ethereum Diamond Logo */}
                    <g transform="translate(250, 160)" filter="url(#softShadowEth)">
                      {/* Top Pyramid Left */}
                      <polygon points="0,-90 -45,0 0,-15" fill="#818CF8" />
                      {/* Top Pyramid Right */}
                      <polygon points="0,-90 45,0 0,-15" fill="#6366F1" />
                      {/* Bottom Pyramid Left */}
                      <polygon points="0,-15 -45,0 0,65" fill="#4F46E5" />
                      {/* Bottom Pyramid Right */}
                      <polygon points="0,-15 45,0 0,65" fill="#3730A3" />
                    </g>

                    {/* Floating Code Snippet Card */}
                    <g filter="url(#softShadowEth)" transform="translate(60, 160)">
                      <rect x="0" y="0" width="120" height="75" rx="10" fill="#1E1B4B" stroke="#4338CA" strokeWidth="1.5" />
                      <rect x="10" y="12" width="55" height="6" rx="3" fill="#818CF8" />
                      <rect x="10" y="24" width="85" height="5" rx="2.5" fill="#A5B4FC" opacity="0.7" />
                      <rect x="10" y="34" width="70" height="5" rx="2.5" fill="#34D399" />
                      <rect x="10" y="44" width="95" height="5" rx="2.5" fill="#F472B6" />
                      <rect x="10" y="54" width="45" height="5" rx="2.5" fill="#818CF8" />
                    </g>

                    {/* Floating Web3 Wallet Card */}
                    <g filter="url(#softShadowEth)" transform="translate(320, 160)">
                      <rect x="0" y="0" width="115" height="75" rx="10" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
                      <circle cx="25" cy="25" r="10" fill="#4F46E5" />
                      <rect x="42" y="20" width="55" height="6" rx="3" fill="#1E1B4B" />
                      <rect x="42" y="30" width="35" height="5" rx="2.5" fill="#94A3B8" />
                      <rect x="12" y="48" width="91" height="16" rx="4" fill="#EEF2FF" />
                      <text x="57" y="59" textAnchor="middle" fill="#4338CA" fontSize="9" fontWeight="bold">Connected Web3</text>
                    </g>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        <div className="mt-8">
          <TrustMarquee />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUSTED ETHEREUM APP DEVELOPMENT
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] bg-gradient-to-br from-indigo-50 via-purple-50 to-sky-50 rounded-3xl p-6 border border-indigo-100 shadow-lg relative overflow-hidden text-center">
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-4">
                  <div className="relative w-48 h-48 bg-indigo-100/70 rounded-full flex items-center justify-center p-3 border border-indigo-200">
                    <div className="w-36 h-36 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-2xl shadow-xl p-4 border-2 border-white flex flex-col justify-between relative text-white">
                      <div className="flex justify-between items-center">
                        <Lock className="w-6 h-6 text-amber-300" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="text-center font-black text-sm">
                        EVM Verified
                      </div>
                      <div className="bg-emerald-500 text-white rounded-md py-0.5 text-[9px] font-bold text-center">
                        Formal Security Audited
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-200 shadow-sm text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Zero-Knowledge & L2 Rollup Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Trusted Ethereum dApp & Smart Contract<br className="hidden sm:inline" /> Development Company
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                As a premier Ethereum App Development Company, we architect high-performance decentralized software for startups, enterprises, and Web3 innovators. Our blockchain engineers specialize in writing secure Solidity smart contracts, building responsive React/Ethers.js dApp interfaces, launching ERC-20 utility tokens, and integrating Layer-2 scaling networks (Arbitrum, Optimism, Polygon) for maximum speed and cost efficiency.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">100% Audited</div>
                  <div className="text-xs font-medium text-slate-500">Smart Contracts</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">EVM Layer 2</div>
                  <div className="text-xs font-medium text-slate-500">Gas Optimization</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">Bank-Grade</div>
                  <div className="text-xs font-medium text-slate-500">Web3 Security</div>
                </div>
              </div>
            </div>

          </div>
        </Container>

        <div className="mt-14">
          <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROFESSIONAL CUSTOM ETHEREUM APP DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Professional Custom ethereum app development services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 flex relative">
              <div className="w-full bg-[#EBF5FC] rounded-2xl p-8 sm:p-10 flex flex-col justify-center shadow-xs relative text-left border border-sky-100/60">
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EBF5FC] z-20" />

                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#005F96] fill-[#005F96]" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <h3 className="text-2xl sm:text-[28px] font-[800] text-[#005F96] tracking-tight leading-snug font-sans">
                  Crafted for Immutable Security, High Throughput, and Web3 Excellence
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left py-2 font-sans">
              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.7] font-[400]">
                We construct end-to-end Ethereum solutions that seamlessly connect frontend user interfaces with decentralized smart contract backends. Our experience ranges from ERC-20 utility token issuance and NFT marketplace creation to decentralized exchanges (DEX), staking protocols, and DAO governance portals. Built using robust standards including Solidity, Hardhat, Foundry, React, and Ethers.js, our solutions deliver ultra-reliable Web3 performance.
              </p>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.7] font-[400]">
                Whether launching a new DeFi protocol or integrating blockchain verification into an existing enterprise platform, our Ethereum Development Company ensures every smart contract is formally audited, gas-optimized, and fully protected against security vulnerabilities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: OUR PREMIUM SERVICES
         ========================================================================= */}
      <PremiumServicesGrid companyName={BRAND.name} />

      {/* =========================================================================
          SECTION 5: OUR CORE ETHEREUM APP DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#EBF5FC]/60 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Our Core Ethereum App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ethereumFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${feat.badgeBg} ${feat.iconColor} flex items-center justify-center font-bold`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 tracking-tight leading-snug font-sans group-hover:text-[#005F96] transition-colors">
                      {feat.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-[400] font-sans">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004a77] text-white font-[800] text-base shadow-md hover:shadow-lg transition-all font-sans"
            >
              Get A Free Quote For Your Project
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: PROUD AWARDS BANNER
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          SECTION 7: BENEFITS OF ETHEREUM APP DEVELOPMENT
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-t border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Benefits of Ethereum App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethereumBenefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    {b.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 tracking-tight leading-snug group-hover:text-[#005F96] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-[400]">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: BUSINESS FRIENDLY HIRING MODELS
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          SECTION 9: UNVEILING OUR INNOVATIVE SOLUTION
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          SECTION 10: PROCESS WE FOLLOW
         ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          SECTION 11: OUR STORY, THEIR WORDS
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          SECTION 12: TRUSTED BY THE WORLD'S LEADING BRANDS
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 13: SUCCESS MATRIX
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 14: WE HAVE BEEN FEATURED IN
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          SECTION 15: DIGITAL TRANSFORMATION CASE STUDIES
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SECTION 16: FREQUENTLY ASKED QUESTIONS
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={ethereumFaqs}
      />

      {/* =========================================================================
          SECTION 17: OUR RECENT BLOGS
         ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          SECTION 18: WHAT SETS US APART AS ETHEREUM APP DEVELOPMENT COMPANY?
         ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Ethereum App Development Company?"
        description="Being unique is our quality! Firevy.Co believes in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* =========================================================================
          SECTION 19: HAVE ETHEREUM APP DEVELOPMENT CHALLENGE TO ADDRESS ?
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have Ethereum App Development Challenge To Address ?",
          description: "Get access to top Ethereum App Development developers to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          SECTION 20: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
         ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default EthereumAppDevelopmentService;
