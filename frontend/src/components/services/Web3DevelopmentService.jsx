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
  ChevronRight,
  Code2,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  Layers,
  Lock,
  Leaf
} from 'lucide-react';

export const Web3DevelopmentService = () => {

  // Image 4: 3 Benefits of Web 3.0 Development Services
  const web3Benefits = [
    {
      title: "Web Development",
      desc: "Web 3.0 lets applications and platforms share data and communicate online. Open standards and protocols enable data and service sharing, giving developers and consumers more alternatives in web3 developers.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#005F96] flex items-center justify-center">
          <Globe className="w-6 h-6" />
        </div>
      )
    },
    {
      title: "Blockchain Development",
      desc: "Blockchain is more secure and tamper-resistant than centralized systems. Spreading data between nodes and employing encryption reduces data breaches, hackers, and censorship. You can hire a web 3.0 development Agency to boost internet buyers' confidence",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-[#F0F5FF] text-[#3B82F6] flex items-center justify-center">
          <Lock className="w-6 h-6" />
        </div>
      )
    },
    {
      title: "Resilience and Sustainability",
      desc: "As a top web 3.0 development company, we can increase digital innovation by reducing internet infrastructure energy usage and carbon emissions. Web 3.0 app development improves data ownership and privacy, interoperability, trust and security, innovation and empowerment, digital resilience, and sustainability. As these technologies advance, they can affect internet usage and digital society.",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
          <Leaf className="w-6 h-6" />
        </div>
      )
    }
  ];

  // 6 Web3 Expertise Cards
  const web3Services = [
    {
      title: "Smart Contract Development & Auditing",
      desc: "Architect secure, gas-optimized Solidity and Rust smart contracts with rigorous automated security audits and formal verification."
    },
    {
      title: "Decentralized Finance (DeFi) Protocols",
      desc: "Engineer automated market makers (AMMs), staking platforms, yield aggregators, lending protocols, and liquidity pools."
    },
    {
      title: "NFT Marketplace & Tokenization Platforms",
      desc: "Build custom ERC-721 / ERC-1155 NFT minting portals, IPFS decentralized storage, multi-chain marketplaces, and royal distribution."
    },
    {
      title: "Decentralized Autonomous Organizations (DAOs)",
      desc: "Deploy governance token contracts, snapshot voting mechanisms, treasury management, and decentralized proposal execution."
    },
    {
      title: "Crypto Wallet Integration & Web3 Auth",
      desc: "Seamlessly connect MetaMask, Coinbase Wallet, WalletConnect, Web3Auth, and social logins with EIP-4367 account abstraction."
    },
    {
      title: "Cross-Chain Interoperability & Layer 2 Scaling",
      desc: "Bridge dApps across Ethereum, Polygon, Arbitrum, Optimism, Solana, and Binance Smart Chain with low latency and minimal gas fees."
    }
  ];

  // 8 FAQs
  const web3Faqs = [
    {
      q: "What is Web3 development and how does it differ from Web2?",
      a: "Web3 leverages decentralized blockchain networks, smart contracts, and cryptographic tokens to give users direct ownership of data and assets, eliminating reliance on centralized servers."
    },
    {
      q: "Which blockchains do your Web3 developers support?",
      a: "We support major EVM networks (Ethereum, Polygon, Arbitrum, Optimism, BNB Chain, Avalanche) as well as non-EVM chains like Solana, Near, and Aptos."
    },
    {
      q: "How do you ensure the security of smart contracts?",
      a: "All smart contracts undergo static analysis, unit testing with Hardhat/Foundry, manual line-by-line peer reviews, and third-party security audits prior to mainnet deployment."
    },
    {
      q: "Can Web3 functionality be integrated into our existing Web2 application?",
      a: "Yes! We can add Web3 authentication (Connect Wallet), token-gated features, and smart contract payment gateways to your existing web or mobile app."
    },
    {
      q: "What is Account Abstraction and why is it important for Web3 onboarding?",
      a: "Account Abstraction (ERC-4337) allows users to interact with dApps via familiar email/social logins and pay gas fees in ERC-20 tokens, drastically lowering entry barriers for non-crypto users."
    },
    {
      q: "Do you offer end-to-end tokenomics and DAO governance design?",
      a: "Yes. Our team assists with token model architecture, staking rewards design, governance contract deployment, and DAO voting infrastructure."
    },
    {
      q: "What engagement models do you offer for hiring Web3 developers?",
      a: "We offer flexible engagement models including Dedicated Web3 Engineers, Fixed-Price dApp Execution, and Hourly Blockchain Augmentation."
    },
    {
      q: "How quickly can Firevy start on our Web3 project?",
      a: "Following technical scoping and requirements alignment, dedicated Web3 and smart contract developers can onboard within 48 to 72 hours."
    }
  ];

  // Bar Chart Market Data
  const chartData = [
    { year: '2020', val: 50 },
    { year: '2021', val: 55.5 },
    { year: '2022', val: 60 },
    { year: '2023', val: 65 },
    { year: '2024', val: 70 },
    { year: '2025', val: 76 },
    { year: '2026', val: 82 },
    { year: '2027', val: 89 },
    { year: '2028', val: 96 },
    { year: '2029', val: 104 },
    { year: '2030', val: 112 },
    { year: '2031', val: 120 }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Top Web3 Development Company | ${BRAND.name}`}
        description="Technology is evolving toward a more decentralized, secure, and user-centric online with online 3.0. Hire top Web3 Development Company Firevy.Co for blockchain, smart contracts, and dApps."
      />

      {/* =========================================================================
          IMAGE 1: HERO SECTION
         ========================================================================= */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 border-b border-slate-100 overflow-hidden">
        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services/frontend-development" className="hover:text-[#005F96] transition-colors">Front End Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Web3 Development</span>
          </nav>

          {/* Centered Hero Heading (Matching Image 1) */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-tight">
              Top Web3 Development Company
            </h1>
          </div>

          {/* Large Hero Banner Illustration (Matching Image 1: Hands with glowing WEB digital tablet) */}
          <div className="w-full max-w-4xl mx-auto mb-10 overflow-hidden rounded-3xl border border-sky-100 shadow-lg relative bg-gradient-to-br from-sky-900 via-slate-900 to-blue-950 p-6 sm:p-10 text-white">
            <div className="relative aspect-[16/8] w-full flex items-center justify-center">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                <defs>
                  <linearGradient id="w3GridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0369A1" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Circuit Grid Lines Background */}
                <path d="M 50 100 L 250 100 L 300 150 L 550 150 L 600 100 L 750 100" stroke="#38BDF8" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
                <path d="M 50 300 L 200 300 L 250 250 L 600 250 L 650 300 L 750 300" stroke="#38BDF8" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />

                {/* Tablet Frame */}
                <rect x="220" y="160" width="360" height="200" rx="16" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" transform="rotate(-10 400 260)" />
                <rect x="230" y="170" width="340" height="180" rx="10" fill="#0284C7" opacity="0.2" transform="rotate(-10 400 260)" />

                {/* Glowing WEB 3D Text Graphic (Matching Image 1) */}
                <text x="400" y="130" fill="#38BDF8" fontSize="85" fontWeight="900" textAnchor="middle" letterSpacing="4" fontFamily="sans-serif" filter="drop-shadow(0px 0px 12px #38BDF8)">
                  WEB 3.0
                </text>

                {/* Hands Vector Touch Points */}
                <circle cx="280" cy="240" r="16" fill="#38BDF8" opacity="0.5" />
                <circle cx="280" cy="240" r="8" fill="#FFFFFF" />
                <circle cx="520" cy="220" r="16" fill="#38BDF8" opacity="0.5" />
                <circle cx="520" cy="220" r="8" fill="#FFFFFF" />
              </svg>
            </div>
          </div>

          {/* Intro Content Paragraph (Matching Image 1 & 2 1:1) */}
          <div className="max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-left">
            <p>
              Technology is evolving toward a more decentralized, secure, and user-centric online with online 3.0. Understanding why affordable web3 development services are required requires understanding the Internet's limits and problems, as well as its potential advantages. You can hire a Web3 Development Company to use Web 3.0 technologies and custom web3 application development services to improve data sharing and communication by using open standards and protocols. Smart contract and web3 integration experts grow from interoperability, innovation, and cooperation. Web 3.0's blockchain technology improves online trust and security. Web3 development solutions may reduce these risks by spreading data over a network of nodes and using cryptography, creating a more secure architecture. Web3 Development Services are required to improve the Internet and maximize its potential. Its decentralized technologies, data ownership and privacy, interoperability and trust, innovation and empowerment, resilience, and sustainability may create a more inclusive, secure, and egalitarian digital future.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 2: WHY HIRE FIREVY FOR WEB3 SOLUTION?
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Why Hire Firevy for Web3 Solution?
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                As a Top Web3 developer, Firevy Software Solutions is certainly familiar with decentralized technologies like blockchain, DeFi, DIDs, and smart contracts. You can hire web3 developers who understand decentralization, data ownership, privacy, and security well enough to create and build solutions that follow these principles. As the best Web3 Development Company, we can create innovative decentralized solutions. Hire dedicated web3 developers that designs blockchain use cases, interoperable platforms, and Apps to help enterprises stay ahead of digital innovation. As a web3 Development Agency, we interact in the Web 3.0 community, collaborate with professionals, contribute to open-source projects, and remain current on advancements and trends. They are committed to developing the discipline and promoting ecosystem cooperation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 2 & 3: WEB DEVELOPMENT MARKET STATS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-t border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Bar Chart Card (Matching Image 2 & 3) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs text-left">
              <div className="text-xs font-bold text-slate-400 mb-4 tracking-wider uppercase">
                Global web development market size from 2020 to 2031
              </div>

              {/* SVG Bar Chart Graphic */}
              <div className="w-full aspect-[16/10] relative">
                <svg viewBox="0 0 480 260" className="w-full h-full">
                  {/* Y Axis Grid Lines */}
                  <line x1="40" y1="40" x2="460" y2="40" stroke="#F1F5F9" strokeWidth="1" />
                  <text x="30" y="44" fill="#94A3B8" fontSize="9" textAnchor="end">160</text>
                  
                  <line x1="40" y1="90" x2="460" y2="90" stroke="#F1F5F9" strokeWidth="1" />
                  <text x="30" y="94" fill="#94A3B8" fontSize="9" textAnchor="end">75</text>
                  
                  <line x1="40" y1="140" x2="460" y2="140" stroke="#F1F5F9" strokeWidth="1" />
                  <text x="30" y="144" fill="#94A3B8" fontSize="9" textAnchor="end">25</text>
                  
                  <line x1="40" y1="190" x2="460" y2="190" stroke="#F1F5F9" strokeWidth="1" />
                  <text x="30" y="194" fill="#94A3B8" fontSize="9" textAnchor="end">0</text>
                  <line x1="40" y1="190" x2="460" y2="190" stroke="#CBD5E1" strokeWidth="1.5" />

                  {/* Bars */}
                  {chartData.map((d, i) => {
                    const x = 50 + i * 34;
                    const height = (d.val / 160) * 150;
                    const y = 190 - height;
                    return (
                      <g key={i}>
                        <rect x={x} y={y} width="20" height={height} rx="2" fill="#005F96" />
                        <text x={x + 10} y="206" fill="#64748B" fontSize="8" textAnchor="middle">{d.year}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right Text Content (Matching Image 3 1:1) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Web Development Market Stats
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004a77] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Connect With An Expert
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 3: CLUTCH TOP RATED BANNER
         ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated Web Development Company on Clutch" />

      {/* =========================================================================
          IMAGE 4: BENEFITS OF WEB 3.0 DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              Benefits of Web 3.0 Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              The decentralized, secure, and user-centric Web 3.0 offers several benefits. The main advantages of hiring a web 3.0 development company:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {web3Benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left space-y-4"
              >
                <div className="space-y-4">
                  {b.icon}
                  <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR PREMIUM SERVICES GRID
         ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* =========================================================================
          THE EXPERTISE OF OUR WEB3 DEVELOPERS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-y border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              The Expertise Of Our Web3 Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Our Web3 Developers Have Years Of Expertise In Developing Decentralized Solutions For You. Our Expertise Includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {web3Services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#005F96] flex items-center justify-center font-bold text-lg group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005F96] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          PROUD AWARDS BANNER
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          HIRING MODELS
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          INNOVATIVE SOLUTIONS VIDEO SECTION
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          PROCESS WE FOLLOW
         ========================================================================= */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile Web3 engineering lifecycle ensures strict smart contract auditing, automated security testing, and zero-downtime blockchain deployment." />

      {/* =========================================================================
          OUR STORY THEIR WORDS
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          TRUSTED BRANDS GRID
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SUCCESS MATRIX GRID
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          FEATURED IN BRANDS
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          CASE STUDIES
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SAPPHIRE FAQ SECTION
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Explore answers to common questions about our Web3 development services."
        faqs={web3Faqs}
      />

      {/* =========================================================================
          RECENT BLOGS
         ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          WHAT SETS US APART
         ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* =========================================================================
          HAVE WEB3 DEVELOPMENT CHALLENGE TO ADDRESS ?
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have Web3 Development Challenge To Address ?",
          description: "Get Access To Top Web3 Developers To Transform Your Ideas Into A Robust Decentralized Application",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          SUBSCRIBE NEWSLETTER
         ========================================================================= */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default Web3DevelopmentService;
