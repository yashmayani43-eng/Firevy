import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  ArrowRight,
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  Cpu,
  ShieldCheck,
  Quote,
  Clock,
  Sliders,
  FileText,
  TrendingUp,
  Monitor,
  Server,
  Layers,
  Code,
  Coins,
  Lock,
  Boxes,
  Zap,
  Sparkles
} from 'lucide-react';

export const NftMarketplaceDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const rangeServices = [
    {
      title: 'Custom NFT Marketplace Development',
      desc: 'We architect white-label and custom peer-to-peer NFT marketplaces for art, gaming, real estate, music, and digital collectibles tailored to your business model.',
      icon: Globe,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Smart Contract & Minting Engines',
      desc: 'We develop audited, gas-optimized ERC-721, ERC-1155, and Solana Metaplex smart contracts with automated royalty enforcement and batch minting.',
      icon: Code,
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Multi-Chain & Cross-Chain Bridges',
      desc: 'Deploy interoperable NFT platforms across Ethereum, Polygon, Solana, BNB Chain, Avalanche, and Layer-2 networks for maximum liquidity.',
      icon: Layers,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Crypto & Fiat Payment Gateways',
      desc: 'Seamlessly integrate Web3 crypto wallets like MetaMask, WalletConnect, and Coinbase Pay alongside Stripe and credit card fiat on-ramps.',
      icon: Coins,
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Decentralized Auction & Bidding Systems',
      desc: 'Enable fixed-price sales, timed auctions, Dutch auctions, and zero-gas lazy minting where gas fees are paid only upon primary sale completion.',
      icon: Cpu,
      iconBg: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'NFT Security Audits & Node Maintenance',
      desc: 'Our Web3 security specialists provide thorough smart contract vulnerability audits, IPFS/Arweave decentralized storage setup, and 24/7 node monitoring.',
      icon: ShieldCheck,
      iconBg: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const benefits = [
    {
      title: 'Zero-Gas & Lazy Minting Architecture',
      desc: 'Reduce upfront minting friction for creators by enabling off-chain signature minting that settles on-chain automatically during buyer purchase.',
      icon: Zap
    },
    {
      title: 'Immutable Smart Contract Security',
      desc: 'Every contract undergoes battle-tested reentrancy checks, formal verification, and OWASP Web3 auditing to safeguard user funds and assets.',
      icon: Lock
    },
    {
      title: 'Multi-Currency Wallet & Fiat On-Ramp',
      desc: 'Lower entry barriers for Web2 users with smooth credit card checkout and multi-wallet connectivity across browser extensions and mobile apps.',
      icon: Coins
    },
    {
      title: 'Decentralized High-Throughput Storage',
      desc: 'Store digital asset metadata permanently using IPFS and Arweave pinsets, eliminating single points of failure or data loss.',
      icon: Cloud
    },
    {
      title: 'Automated Creator Royalty Distribution',
      desc: 'Embed programmable multi-signature royalty payouts directly into smart contracts for ongoing secondary market revenue sharing.',
      icon: Sliders
    },
    {
      title: 'Cross-Chain Asset Portability',
      desc: 'Allow collectors to bridge and trade NFTs across multiple blockchain ecosystems with unified user balance indexing.',
      icon: Boxes
    }
  ];

  const caseStudies = [
    {
      title: 'Web3 Digital Art Marketplace',
      tag: 'NFT Marketplace',
      subtitle: 'High-Volume ERC-721A Trading Platform with Zero-Gas Minting',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-cyan-500'
    },
    {
      title: 'Gaming Collectibles & Metaverse Hub',
      tag: 'Blockchain Game',
      subtitle: 'Multi-Chain Asset Exchange on Polygon & Solana',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-blue-500'
    },
    {
      title: 'Music & Rights NFT Platform',
      tag: 'Web3 Media',
      subtitle: 'Decentralized Music Rights & Royalty Distribution dApp',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-purple-500'
    }
  ];

  const nftFaqs = [
    {
      q: '1. What is an NFT Marketplace and how does it generate revenue?',
      a: 'An NFT marketplace is a Web3 platform where creators and collectors buy, sell, mint, and trade non-fungible tokens. Revenue is generated through platform transaction fees (typically 1.5% to 2.5%), minting fees, featured listing promotions, and secondary market royalty percentages.'
    },
    {
      q: '2. Which blockchain networks do you support for NFT Marketplace Development?',
      a: 'We build marketplaces on Ethereum, Polygon, Solana, BNB Chain, Avalanche, Arbitrum, Optimism, and Flow depending on your target audience, throughput needs, and gas cost preferences.'
    },
    {
      q: '3. What is Lazy Minting and why is it beneficial?',
      a: 'Lazy minting allows creators to list NFTs on your platform without paying gas fees upfront. The NFT metadata is stored off-chain on IPFS until a buyer purchases it, triggering on-chain minting and transfer in a single transaction paid by the buyer.'
    },
    {
      q: '4. How do you ensure the security of smart contracts on the NFT platform?',
      a: 'Our Web3 security architects perform static code analysis, formal verification, unit testing, and third-party security audits (CertiK, OpenZeppelin standards) to prevent reentrancy attacks, integer overflows, and unauthorized minting.'
    },
    {
      q: '5. Can non-crypto users purchase NFTs with traditional credit cards on the marketplace?',
      a: 'Yes, we integrate fiat payment gateways such as MoonPay, Ramp, Stripe, and Wert so users can buy NFTs directly using Visa, Mastercard, Apple Pay, or Google Pay without needing prior crypto wallet setup.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="NFT Marketplace Development Services | Top Web3 Blockchain Company"
        description="Firevy provides end-to-end NFT marketplace development services. Build custom white-label NFT platforms on Ethereum, Polygon, and Solana with audited smart contracts, lazy minting, and fiat on-ramps."
        canonical="/services/nft-marketplace-development"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Match with Screenshot 2)
          ========================================================================= */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-[#F4F9FD] text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title, Subtitle & CTAs (1:1 with Screenshot 2) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                NFT Marketplace Development<br />Company in USA
              </h1>

              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.7] font-normal max-w-[580px]">
                Even though non-fungible tokens (NFTs) have been present since 2014, their popularity seems to increase since the end of 2021
              </p>

              {/* Primary CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#005F96] hover:bg-[#004875] text-white font-[700] text-sm px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: NFT Marketplace Vector Graphic PNG Image (1:1 Match with 2SS) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px] flex items-center justify-center p-2">
                <img
                  src="/images/nft_marketplace_hero_2ss.png?v=2"
                  alt="NFT Marketplace Development Company in USA"
                  className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. CLIENT LOGOS MARQUEE (Matching Homepage / Service Template)
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. #1 NFT MARKETPLACE DEVELOPMENT SERVICES SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Multi-Chain Marketplace Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-indigo-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Hex Mesh */}
                    <g fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="1.5">
                      <polygon points="150,80 220,40 290,80 290,160 220,200 150,160" />
                      <polygon points="310,80 380,40 450,80 450,160 380,200 310,160" />
                      <polygon points="230,210 300,170 370,210 370,290 300,330 230,290" />
                    </g>

                    {/* Central Phone Mockup displaying NFT Auction */}
                    <rect x="210" y="60" width="180" height="320" rx="24" fill="#0F172A" stroke="#312E81" strokeWidth="4" />
                    <rect x="222" y="76" width="156" height="288" rx="14" fill="#1E1B4B" />

                    {/* NFT Art Display on Phone */}
                    <rect x="236" y="96" width="128" height="120" rx="10" fill="url(#nft_detail_grad)" />
                    <circle cx="300" cy="156" r="32" fill="#F472B6" />
                    <polygon points="300,130 325,175 275,175" fill="#FBBF24" />

                    {/* Bidding Controls */}
                    <rect x="236" y="230" width="128" height="14" rx="4" fill="#312E81" />
                    <rect x="236" y="252" width="80" height="10" rx="3" fill="#4338CA" />
                    <rect x="236" y="275" width="128" height="35" rx="8" fill="#6366F1" />
                    <text x="300" y="297" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Place Bid (2.5 ETH)</text>

                    {/* Left Web3 Engineer Kneeling */}
                    <g transform="translate(90, 240)">
                      <circle cx="45" cy="15" r="10" fill="#FDE047" />
                      <path d="M 35 12 C 35 4, 45 2, 53 6 C 57 9, 55 18, 55 18 C 51 16, 43 17, 40 20 Z" fill="#1E1B4B" />
                      <path d="M 32 26 L 58 26 L 62 55 L 28 55 Z" fill="#6366F1" />
                      <path d="M 28 55 L 42 55 L 38 90 L 10 90 L 10 80 L 26 78 Z" fill="#1E1B4B" />
                      <ellipse cx="10" cy="88" rx="8" ry="4" fill="#0F172A" />
                    </g>

                    {/* Right Web3 Architect Standing with Code Window */}
                    <g transform="translate(420, 180)">
                      <circle cx="40" cy="15" r="10" fill="#FDE047" />
                      <path d="M 30 12 C 30 4, 40 2, 48 6 C 52 9, 50 18, 50 18 C 46 16, 38 17, 35 20 Z" fill="#1E1B4B" />
                      <path d="M 22 26 L 52 26 L 56 65 L 18 65 Z" fill="#4338CA" />
                      <path d="M 20 65 L 32 65 L 30 145 L 18 145 Z" fill="#1E1B4B" />
                      <path d="M 38 65 L 50 65 L 48 145 L 36 145 Z" fill="#1E1B4B" />
                      <ellipse cx="18" cy="143" rx="8" ry="4" fill="#0F172A" />
                      <ellipse cx="36" cy="143" rx="8" ry="4" fill="#0F172A" />
                    </g>

                    <defs>
                      <linearGradient id="nft_detail_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4338CA" />
                        <stop offset="100%" stopColor="#C084FC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Detailed Description */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                #1 NFT Marketplace<br />Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15.5px] text-[#475569] leading-relaxed font-normal">
                <p>
                  Building a successful NFT marketplace requires robust blockchain architecture, gas-optimized smart contracts, and effortless Web3 user experiences. We provide end-to-end NFT marketplace development services, enabling creators, enterprises, and collectors to mint, list, auction, and trade digital assets seamlessly.
                </p>
                <p>
                  As an industry-leading Web3 development agency with over a decade of blockchain expertise, Firevy delivers scalable NFT platforms equipped with multi-wallet connectivity, decentralized storage (IPFS/Arweave), automated creator royalty enforcement, and fiat credit card checkout options.
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <ShieldCheck className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Audited Smart Contracts & Security</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Globe className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Multi-Chain & Layer-2 Support</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Zap className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Zero-Gas & Lazy Minting Engines</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <Clock className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>24/7 SLA Node Maintenance</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Request Quick Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BRIEF ABOUT TOP NFT MARKETPLACE DEVELOPMENT SERVICES SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/60 text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Paragraphs */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Brief About Top NFT<br />Marketplace Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  Non-Fungible Tokens (NFTs) have revolutionized digital ownership across art, gaming, domain names, real estate, and intellectual property. Leveraging smart contract standards like ERC-721 and ERC-1155, our marketplaces guarantee immutability, proven provenance, and transparent transaction histories.
                </p>
                <p>
                  Our Web3 engineers optimize smart contracts with ERC-721A techniques to reduce gas costs during multi-token minting by up to 70%. We also integrate decentralized indexing systems (The Graph) and Web3 storage solutions to ensure high platform responsiveness and instant search filtering.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-Device Responsive Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-purple-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="200" r="160" fill="#F5F3FF" />
                    
                    {/* Background Laptop Mockup */}
                    <rect x="90" y="100" width="320" height="200" rx="14" fill="#1E1B4B" stroke="#312E81" strokeWidth="4" />
                    <rect x="100" y="115" width="300" height="170" rx="8" fill="#0F172A" />
                    
                    <circle cx="115" cy="128" r="4" fill="#EF4444" />
                    <circle cx="128" cy="128" r="4" fill="#F59E0B" />
                    <circle cx="141" cy="128" r="4" fill="#10B981" />
                    
                    {/* NFT Card Layout on Screen */}
                    <rect x="115" y="145" width="130" height="75" rx="8" fill="#312E81" />
                    <rect x="255" y="145" width="130" height="18" rx="4" fill="#4338CA" />
                    <rect x="255" y="172" width="100" height="14" rx="4" fill="#4338CA" />
                    <rect x="115" y="230" width="130" height="45" rx="6" fill="#6366F1" />
                    <rect x="255" y="230" width="130" height="45" rx="6" fill="#818CF8" />

                    {/* Left Mobile Phone */}
                    <rect x="50" y="170" width="80" height="165" rx="16" fill="#0F172A" stroke="#312E81" strokeWidth="3" />
                    <rect x="56" y="180" width="68" height="145" rx="10" fill="#1E1B4B" />
                    <rect x="64" y="192" width="52" height="45" rx="4" fill="#4338CA" />
                    <rect x="64" y="246" width="52" height="14" rx="3" fill="#6366F1" />
                    <rect x="64" y="268" width="52" height="14" rx="3" fill="#818CF8" />

                    {/* Floating Web3 Badge */}
                    <rect x="215" y="65" width="70" height="36" rx="10" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.5" />
                    <text x="250" y="88" fill="#6366F1" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">WEB3</text>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. WORLD WIDE TOP RATED CLUTCH BANNER
          ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated Blockchain IT Company on Clutch" />

      {/* =========================================================================
          6. WE DEVELOP SECURE AND FEATURE-RICH NFT MARKETPLACE SOLUTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Box: Textured Callout Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50/50 to-slate-50 border border-indigo-100 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-[#005F96] text-white flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-[900] text-[#005F96] leading-snug tracking-tight">
                    Scalability, Security, Decentralization, And High Liquidity
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Paragraphs */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
                We Develop Secure And Feature-Rich NFT Marketplace Solutions
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  Firevy engineers enterprise-grade NFT marketplaces equipped with liquidity features, real-time analytics, bidding engines, and automated smart contract distribution. As a <strong className="text-[#005F96] font-semibold">top software development company</strong>, we ensure your NFT ecosystem is secure against vulnerabilities, highly scalable, and optimized for global trading.
                </p>
                <p>
                  Whether launching a niche art gallery, a Play-to-Earn (P2E) gaming asset hub, or a tokenized real-world asset (RWA) marketplace, our blockchain team provides complete customization from UI/UX design to smart contract deployment and mainnet launch.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          6.5 OUR PREMIUM SERVICES
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. SUCCESS STORIES & STATS BAR
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-sky-50/60 text-slate-900 text-left border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Web3 Success Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Explore how Firevy brings cutting-edge Web3 and NFT marketplace concepts to life with enterprise reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 right-3 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow ${item.badgeBg}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3 rounded-md shadow transition-all"
            >
              <span>View All Web3 Case Studies</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#E0D7FF] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-purple-900">200+</div>
              <div className="text-xs font-bold text-purple-800">Blockchain Engineers</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#CCF2F4] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-cyan-900">150+</div>
              <div className="text-xs font-bold text-cyan-800">Smart Contracts Audited</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFE5E5] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-rose-900">50+</div>
              <div className="text-xs font-bold text-rose-800">NFT Marketplaces Built</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#DFF0D8] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-emerald-900">100%</div>
              <div className="text-xs font-bold text-emerald-800">IP & Code Ownership</div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. OUR RANGE OF NFT MARKETPLACE SERVICES GRID
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Our Range of NFT Marketplace Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Empowering Web3 enterprises and creators with end-to-end decentralized marketplace architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rangeServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. BENEFITS OF NFT MARKETPLACE DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Key Benefits of Building Your NFT Marketplace With Firevy
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Designed for ultra-low latency, maximum security, and frictionless Web3 onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#005F96]/10 text-[#005F96] flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. HIRING MODELS FOR BLOCKCHAIN & NFT DEVELOPERS
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          11. INNOVATIVE SOLUTIONS VIDEO SECTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          12. OUR STORY & FEATURED BRANDS
          ========================================================================= */}
      <OurStoryTheirWordsSection />
      <FeaturedInBrandsSection />

      {/* =========================================================================
          13. PROCESS WE FOLLOW
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          14. CASE STUDIES & BLOGS
          ========================================================================= */}
      <DigitalTransformationCaseStudies />
      <RecentBlogsSection />

      {/* =========================================================================
          15. FAQS SECTION FOR NFT MARKETPLACE DEVELOPMENT (Matching 2nd SS)
          ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={nftFaqs}
      />

      {/* =========================================================================
          16. CALLOUT BANNER & NEWSLETTER
          ========================================================================= */}
      <ConversionCalloutBanner />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default NftMarketplaceDevelopmentService;
