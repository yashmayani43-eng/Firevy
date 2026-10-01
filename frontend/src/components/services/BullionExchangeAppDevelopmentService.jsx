import React, { useState } from 'react';
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
  Coins,
  Lock,
  Smartphone,
  Globe,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Quote,
  Layers,
  Sparkles,
  Award,
  Users,
  Building2,
  Clock,
  Wallet,
  ShoppingBag,
  LayoutDashboard,
  Shield,
  Activity,
  BarChart2,
  Sliders,
  Check
} from 'lucide-react';

export const BullionExchangeAppDevelopmentService = () => {

  // 6 Benefits of Bullion Exchange App Development (Matching Screenshots 1 & 2 1:1)
  const bullionBenefits = [
    {
      title: "Instantaneous Trading Capabilities",
      desc: "Allow for instantaneous trade execution and provide live updates on the prices for gold and silver, making for informed investment decisions.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M6 12l4-4 4 4 4-5" />
        </svg>
      )
    },
    {
      title: "Safe and Compliance-First Trading Platform",
      desc: "Created with a SSL, AES encryption, and a compliance-first architecture to ensure all transactions and user data are kept safe.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Greater Customer Confidence",
      desc: "Because prices are transparently displayed, notifications are sent, and payments flow freely, customers trust what you are doing and have a deeper connection to your business.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    },
    {
      title: "Better Operational Efficiency",
      desc: "Automate your inventory management, invoicing, and customer support so that you can save hours of manual work every day of the week.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 17l4-4 3 3 5-6" />
          <polygon points="12,7 12,12 17,12" />
        </svg>
      )
    },
    {
      title: "Advanced Reporting, and Analytics",
      desc: "Real-time access to sales information, demand trends, and more at a user behavior level through intuitive admin dashboards.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="18" cy="10" r="1.5" />
          <circle cx="6" cy="14" r="1.5" />
        </svg>
      )
    },
    {
      title: "Scalable for Growth",
      desc: "Start small, and grow as needed, with cloud hosting, modular features, and a globally ready deployment.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    }
  ];

  // 6 Exact Core Features matching reference screenshot 1:1
  const bullionFeatures = [
    {
      title: "Live Bullion Rate Integration",
      desc: "Easily fetch and show live prices of gold, silver, and platinum from verified data businesses along with live refresh and market indicators.",
      badgeBg: "bg-[#F3E8FF]",
      iconColor: "text-[#7C3AED]",
      icon: TrendingUp
    },
    {
      title: "User Wallet & Transactions",
      desc: "Create secure and user-friendly wallets that can help your customers manage their buy/sell transactions, balances, invoices, and the digital gold units.",
      badgeBg: "bg-[#DCFCE7]",
      iconColor: "text-[#16A34A]",
      icon: Wallet
    },
    {
      title: "Order Management System (OMS)",
      desc: "Allow customers to order, track and cancel orders through dynamic pricing and configuration of tax/GST.",
      badgeBg: "bg-[#FFEDD5]",
      iconColor: "text-[#EA580C]",
      icon: ShoppingBag
    },
    {
      title: "Admin Dashboard & CRM",
      desc: "Give your business admin dashboard that allows for user management, inventory management, notifications, and other insights.",
      badgeBg: "bg-[#FEF9C3]",
      iconColor: "text-[#CA8A04]",
      icon: LayoutDashboard
    },
    {
      title: "KYC & Compliance Integration",
      desc: "Ensure KYC, AML, and local trading law compliance with document verification workflows by integrating KYC and compliance processes and utilizing out-of-the-box document verification software.",
      badgeBg: "bg-[#FCE7F3]",
      iconColor: "text-[#DB2777]",
      icon: ShieldCheck
    },
    {
      title: "Multi-Platform Deployment",
      desc: "Deploy across Android, iOS, and Web, with responsive design for a seamless user experience .",
      badgeBg: "bg-[#E0F2FE]",
      iconColor: "text-[#0284C7]",
      icon: Smartphone
    }
  ];

  // 8 Exact Bullion Exchange App Development FAQs matching Screenshot 1 1:1
  const bullionFaqs = [
    {
      id: 1,
      question: "1. What is the time frame for building a Bullion Trading App?",
      answer: "The timeframe for building a Bullion Trading App typically ranges from 8 to 16 weeks depending on feature complexity, API integrations (live rate feeds, payment gateways), and platform selection (Android, iOS, or Cross-Platform)."
    },
    {
      id: 2,
      question: "2. Can we have real-time gold/silver prices displayed on the App?",
      answer: "Yes! We integrate real-time spot price APIs (like MCX, LBMA, BullionVault, or custom rate servers) to provide live streaming updates for gold, silver, and platinum prices with zero latency."
    },
    {
      id: 3,
      question: "3. Is the app secure to process Financial Transactions?",
      answer: "Absolutely. Our solutions use bank-grade AES-256 encryption, SSL/TLS certificates, secure payment gateway integrations, 2FA authentication, and OWASP compliance to ensure every financial transaction is 100% secure."
    },
    {
      id: 4,
      question: "4. Is the app going to be able to support GST and Taxes Configuration?",
      answer: "Yes, our custom admin module allows configurable tax rules, GST calculation, TDS compliance, and automated digital invoicing for transparent precious metal trading."
    },
    {
      id: 5,
      question: "5. Will you have Multi-Language and Multi-Currency Support?",
      answer: "Yes, we support multi-currency (USD, EUR, INR, AED, etc.) and multi-language localization to enable seamless trading for global customers and regional bullion dealers."
    },
    {
      id: 6,
      question: "6. My company already has a CRM or ERP, can the app connect to our Current Tools?",
      answer: "Yes, we build custom RESTful APIs and middleware to seamlessly sync inventory, orders, customer KYC data, and accounting ledgers directly with your existing ERP or CRM software."
    },
    {
      id: 7,
      question: "7. Why should businesses choose Sapphire Software Solutions for AI-integrated Bullion Marketplace Development Services?",
      answer: "We bring 23+ years of fintech engineering experience, 320+ 5-star Clutch ratings, AI price prediction models, real-time rate engines, and robust security architecture trusted by precious metal traders worldwide."
    },
    {
      id: 8,
      question: "8. Does Sapphire Software Solutions build both Android and iOS bullion exchange apps?",
      answer: "Yes, we design, develop, and deploy native Android, native iOS, and cross-platform (Flutter/React Native) bullion exchange mobile apps along with responsive web applications."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Bullion Exchange App Development Services | ${BRAND.name}`}
        description="We customize web and mobile app development to fit dealers of bullion, precious metals and investment platforms. Automate live pricing, trading, and inventory management with Firevy."
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Image 1 matching reference 1:1)
         ========================================================================= */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 border-b border-slate-100 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-blue-100/40 via-cyan-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services/blockchain-development" className="hover:text-[#005F96] transition-colors">Blockchain Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Bullion Exchange App Development</span>
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
                Bullion Exchange App<br className="hidden sm:inline" /> Development Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Are you ready to change how your clients trade in gold, silver and precious metals? We customize web and mobile app development to fit dealers of bullion, precious metals and investment platforms. Whether you are a startup or a large exchange, we provide affordable, scalable and secured Custom Bullion App Development solutions to automate live pricing, trading and inventory management. Get your free quote and power up your bullion exchange platform with industry ready technology.
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

            {/* Right Hero Visual Illustration (Matching Image 1 Reference Screenshot 1:1) */}
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
                      <linearGradient id="cloudBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EBF5FF" />
                        <stop offset="100%" stopColor="#E0F2FE" />
                      </linearGradient>
                      <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0284C7" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Soft Blue Cloud Backdrop */}
                    <path
                      d="M 90,170 C 40,150 40,90 90,60 C 130,30 210,20 270,40 C 320,10 400,20 430,70 C 470,100 480,170 440,210 C 470,260 400,310 330,300 C 270,320 190,320 140,290 C 80,300 40,230 90,170 Z"
                      fill="url(#cloudBgGrad)"
                    />

                    {/* Stack of Cash Notes Behind Left Phone */}
                    <g filter="url(#softShadow)" transform="translate(185, 145) rotate(-12)">
                      <rect x="0" y="0" width="46" height="68" rx="6" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
                      <rect x="4" y="4" width="38" height="60" rx="4" fill="#22C55E" />
                      <circle cx="23" cy="34" r="11" fill="#4ADE80" />
                      <text x="23" y="38" textAnchor="middle" fill="#15803D" fontSize="12" fontWeight="900">$</text>
                    </g>

                    {/* Floating Gold Coins Top */}
                    <g filter="url(#softShadow)">
                      <circle cx="170" cy="45" r="13" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
                      <circle cx="170" cy="45" r="9" fill="#FCD34D" />
                      <text x="170" y="49" textAnchor="middle" fill="#B45309" fontSize="10" fontWeight="bold">$</text>

                      <circle cx="330" cy="40" r="10" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
                      <circle cx="330" cy="40" r="7" fill="#FCD34D" />

                      <circle cx="250" cy="30" r="11" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
                      <circle cx="250" cy="30" r="8" fill="#FCD34D" />
                    </g>

                    {/* LEFT SMARTPHONE MOCKUP */}
                    <g filter="url(#softShadow)" transform="translate(105, 75)">
                      <rect x="0" y="0" width="95" height="195" rx="18" fill="white" stroke="#0284C7" strokeWidth="3" />
                      <rect x="6" y="8" width="83" height="179" rx="12" fill="#F0F9FF" />
                      {/* Speaker Notch */}
                      <rect x="35" y="14" width="25" height="4" rx="2" fill="#94A3B8" />

                      {/* User Profile Circle */}
                      <circle cx="47" cy="42" r="14" fill="#CBD5E1" />
                      <path d="M 36,54 A 12,12 0 0 1 58,54 Z" fill="#94A3B8" />

                      {/* List items */}
                      <rect x="14" y="68" width="67" height="12" rx="4" fill="#E2E8F0" />
                      <rect x="14" y="88" width="67" height="12" rx="4" fill="#0284C7" />
                      <rect x="14" y="108" width="67" height="12" rx="4" fill="#E2E8F0" />

                      {/* Nav buttons */}
                      <circle cx="25" cy="164" r="5" fill="#94A3B8" />
                      <circle cx="47" cy="164" r="5" fill="#0284C7" />
                      <circle cx="69" cy="164" r="5" fill="#94A3B8" />
                    </g>

                    {/* CURVED EXCHANGE ARROWS BETWEEN PHONES */}
                    <path
                      d="M 195,95 Q 250,50 305,95"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                    />
                    <polygon points="305,98 313,90 300,88" fill="#0284C7" />

                    <path
                      d="M 305,125 Q 250,170 195,125"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                    />
                    <polygon points="195,122 187,130 200,132" fill="#0284C7" />

                    {/* RIGHT SMARTPHONE MOCKUP */}
                    <g filter="url(#softShadow)" transform="translate(300, 75)">
                      <rect x="0" y="0" width="95" height="195" rx="18" fill="white" stroke="#0284C7" strokeWidth="3" />
                      <rect x="6" y="8" width="83" height="179" rx="12" fill="#F0F9FF" />
                      {/* Speaker Notch */}
                      <rect x="35" y="14" width="25" height="4" rx="2" fill="#94A3B8" />

                      {/* Big Blue Downward Arrow Circle */}
                      <circle cx="47" cy="65" r="22" fill="#0284C7" />
                      <path d="M 47,52 L 47,74 M 37,64 L 47,74 L 57,64" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                      {/* Bottom Card Element */}
                      <rect x="14" y="110" width="67" height="48" rx="8" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.5" />
                    </g>

                    {/* MALE CHARACTER ON LEFT */}
                    <g transform="translate(65, 135)">
                      <path d="M 22,18 C 18,5 30,5 34,18 Z" fill="#1E293B" />
                      <circle cx="28" cy="22" r="10" fill="#FDBA74" />
                      <path d="M 12,34 C 12,30 20,28 28,28 C 36,28 44,30 44,34 L 40,72 L 16,72 Z" fill="#0284C7" />
                      <path d="M 16,38 L 4,55 L 14,58" stroke="#FDBA74" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <rect x="0" y="50" width="10" height="18" rx="2" fill="#E2E8F0" stroke="#0284C7" strokeWidth="1" />
                      <rect x="2" y="52" width="6" height="14" rx="1" fill="#38BDF8" />
                      <rect x="18" y="72" width="9" height="52" rx="3" fill="#0F172A" />
                      <rect x="29" y="72" width="9" height="52" rx="3" fill="#0F172A" />
                      <ellipse cx="20" cy="124" rx="7" ry="3" fill="#1E293B" />
                      <ellipse cx="35" cy="124" rx="7" ry="3" fill="#1E293B" />
                    </g>

                    {/* FEMALE CHARACTER ON RIGHT */}
                    <g transform="translate(395, 135)">
                      <path d="M 16,12 C 10,25 10,40 14,48 C 22,50 32,50 38,45 C 42,35 40,20 36,12 Z" fill="#1E293B" />
                      <circle cx="26" cy="22" r="10" fill="#FDBA74" />
                      <path d="M 14,34 C 14,30 20,28 26,28 C 32,28 38,30 38,34 L 35,70 L 17,70 Z" fill="#0F2942" />
                      <path d="M 20,38 L 10,50 L 16,55" stroke="#FDBA74" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <circle cx="10" cy="54" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <text x="10" y="57" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="bold">$</text>
                      <rect x="18" y="70" width="8" height="54" rx="3" fill="#0284C7" />
                      <rect x="27" y="70" width="8" height="54" rx="3" fill="#0284C7" />
                      <ellipse cx="20" cy="124" rx="6" ry="3" fill="#0F172A" />
                      <ellipse cx="32" cy="124" rx="6" ry="3" fill="#0F172A" />
                    </g>

                    {/* GOLD COINS AT BOTTOM OF PHONES */}
                    <g filter="url(#softShadow)">
                      <ellipse cx="310" cy="245" rx="28" ry="12" fill="#F59E0B" />
                      <ellipse cx="310" cy="240" rx="28" ry="12" fill="#FBBF24" />
                      <ellipse cx="310" cy="235" rx="28" ry="12" fill="#FDE047" />

                      <ellipse cx="310" cy="227" rx="22" ry="9" fill="#F59E0B" />
                      <ellipse cx="310" cy="223" rx="22" ry="9" fill="#FBBF24" />
                      <ellipse cx="310" cy="219" rx="22" ry="9" fill="#FDE047" />
                      <text x="310" y="222" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="900">$</text>
                    </g>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* Home Page Trust Marquee (Auto-scrolling infinite brand marquee) */}
        <div className="mt-8">
          <TrustMarquee />
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUSTED BULLION GOLD TRADING APP DEVELOPMENT (Image 2)
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column Illustration (Safe Box, Coins, Smartphone, Character) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] bg-gradient-to-br from-sky-50 via-blue-50 to-amber-50 rounded-3xl p-6 border border-sky-100 shadow-lg relative overflow-hidden text-center">
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-4">
                  {/* Gold Vault Safe Graphic */}
                  <div className="relative w-48 h-48 bg-sky-100/70 rounded-full flex items-center justify-center p-3 border border-sky-200">
                    {/* Vault Mockup */}
                    <div className="w-36 h-36 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl shadow-xl p-3 border-2 border-white flex flex-col justify-between relative">
                      <div className="flex justify-between items-center text-white">
                        <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-extrabold text-xs">
                          $
                        </div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      {/* Vault Lock Wheel */}
                      <div className="w-14 h-14 bg-white/20 rounded-full border-4 border-white mx-auto flex items-center justify-center text-white font-black">
                        <div className="w-6 h-6 rounded-full bg-white text-blue-700 flex items-center justify-center text-xs">
                          🔒
                        </div>
                      </div>

                      <div className="bg-emerald-500 text-white rounded-md py-0.5 text-[9px] font-bold text-center">
                        Secure Vault Active
                      </div>
                    </div>

                    {/* Stacks of Gold Coins */}
                    <div className="absolute -left-2 bottom-2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-black text-xs px-3 py-1 rounded-lg shadow-lg border border-amber-300">
                      💰 999.9 Gold
                    </div>
                  </div>

                  {/* Character Avatar Tag */}
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-sky-200 shadow-sm text-xs font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Real-Time Gold & Silver Price Engine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Trusted Bullion Gold Trading<br className="hidden sm:inline" /> App Development
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                As a trusted Best Bullion Exchange App Development Company technology partner in high-value industries, we are experts at creating secure trading systems, real time pricing engines, and personalized bullion exchanges. Deeply experienced in fintech, e-commerce and commodities, we are able to help businesses, dealers and traders with high-performing apps created specifically to cope with volatility, AI-driven Gold & Silver Trading App Development, compliance and user demand. Innovative development processes, secure APIs, payment gateway integrations and good old-fashioned experience - all contributed to our top recommendation for bullion organizations.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">99.99%</div>
                  <div className="text-xs font-medium text-slate-500">Uptime SLA</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">&lt; 100ms</div>
                  <div className="text-xs font-medium text-slate-500">Spot Price Feed</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-extrabold text-[#005F96]">Bank-Grade</div>
                  <div className="text-xs font-medium text-slate-500">AES-256 Security</div>
                </div>
              </div>
            </div>

          </div>
        </Container>

        {/* Ratings / Trust Badges Banner (Image 2 Bottom Banner) */}
        <div className="mt-14">
          <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROFESSIONAL CUSTOM BULLION EXCHANGE APP DEVELOPMENT SERVICES (Image 3)
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Professional Custom bullion exchange app development services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Quote Card (Matching Image 1 Reference Screenshot 1:1) */}
            <div className="lg:col-span-5 flex relative">
              <div className="w-full bg-[#EBF5FC] rounded-2xl p-8 sm:p-10 flex flex-col justify-center shadow-xs relative text-left border border-sky-100/60">
                {/* Speech Bubble Arrow Pointer on Right */}
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EBF5FC] z-20" />

                {/* Solid Double Quote Icon */}
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#005F96] fill-[#005F96]" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <h3 className="text-2xl sm:text-[28px] font-[800] text-[#005F96] tracking-tight leading-snug font-sans">
                  Expertly Crafted for Precision and Efficiency
                </h3>
              </div>
            </div>

            {/* Right Text Content Column (Matching Image 1 Reference Screenshot 1:1) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left py-2 font-sans">
              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.7] font-[400]">
                We build solutions to enable real-time pricing, secure trading, and inventory syncing across the web and mobile. We have considerable experience working globally with bullion retailers, banks, and commodity brokers. Our experience ranges from spot pricing updates to tracking transactions. Our Bullion marketplace app development services are built with robust, scalable architecture using well-defined standards, and technologies including Node.js, React, Flutter, and Firebase, giving your users a lightning-fast experience.
              </p>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.7] font-[400]">
                We don't build apps only, we build customized bullion trading experiences with features including live charts and dashboards, historical and reference data, order book, buy/sell screens, and CRM modules. It could be a new gold investment app or digitizing an existing bullion outlet's business, we build solutions that to efficiently comply with regulations, easy to use, and grow the business. In addition to your specifications, Bullion App Development Company will ensure your data is encrypted, the UI/UX works seamlessly, and the workflows in the backend work efficiently to help your achieve your ROI.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: OUR PREMIUM SERVICES (Image 3 Bottom)
         ========================================================================= */}
      <PremiumServicesGrid companyName={BRAND.name} />

      {/* =========================================================================
          SECTION 5: OUR CORE BULLION EXCHANGE APP DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#EBF5FC]/60 border-t border-slate-100">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Our Core Bullion Exchange App Development Services
            </h2>
          </div>

          {/* 6 Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bullionFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Soft Rounded Icon Box */}
                    <div className={`w-12 h-12 rounded-xl ${feat.badgeBg} ${feat.iconColor} flex items-center justify-center font-bold`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 tracking-tight leading-snug font-sans group-hover:text-[#005F96] transition-colors">
                      {feat.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-[400] font-sans">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Button */}
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
          SECTION 6: PROUD AWARDS BANNER (New Screenshot 1 Top)
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          SECTION 7: BENEFITS OF BULLION EXCHANGE APP DEVELOPMENT (New Screenshots 1 & 2)
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-t border-slate-100 font-sans">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Benefits of Bullion Exchange App Development
            </h2>
          </div>

          {/* 6 Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bullionBenefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Line Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    {b.icon}
                  </div>

                  {/* Benefit Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-900 tracking-tight leading-snug group-hover:text-[#005F96] transition-colors">
                    {b.title}
                  </h3>

                  {/* Benefit Description */}
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
          SECTION 8: BUSINESS FRIENDLY HIRING MODELS (New Screenshots 3 & 4)
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          SECTION 9: UNVEILING OUR INNOVATIVE SOLUTION (New Screenshot 4 Bottom)
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          SECTION 10: PROCESS WE FOLLOW (New Screenshot 5)
         ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          SECTION 11: OUR STORY, THEIR WORDS (Image 1)
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          SECTION 12: TRUSTED BY THE WORLD'S LEADING BRANDS (Image 2)
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 13: SUCCESS MATRIX (Image 3)
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 14: WE HAVE BEEN FEATURED IN (Image 4)
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          SECTION 15: DIGITAL TRANSFORMATION CASE STUDIES (Image 5)
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SECTION 16: FREQUENTLY ASKED QUESTIONS (New Screenshot 1)
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={bullionFaqs}
      />

      {/* =========================================================================
          SECTION 17: OUR RECENT BLOGS (New Screenshot 2)
         ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          SECTION 18: WHAT SETS US APART AS BULLION EXCHANGE APP DEVELOPMENT COMPANY? (New Screenshot 3)
         ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Bullion Exchange App Development Company?"
        description="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* =========================================================================
          SECTION 19: HAVE BULLION EXCHANGE APP DEVELOPMENT COMPANY CHALLENGE TO ADDRESS ? (New Screenshot 4)
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have Bullion Exchange App Development Company Challenge To Address ?",
          description: "Get access to top Bullion Exchange App Development Company to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          SECTION 20: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS (New Screenshot 4 Bottom)
         ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default BullionExchangeAppDevelopmentService;
