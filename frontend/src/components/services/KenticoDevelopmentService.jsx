import React from 'react';
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
  Sparkles,
  Phone,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const KenticoDevelopmentService = () => {
  const rangeServices = [
    {
      title: 'Kentico CMS Development',
      desc: 'We build enterprise-grade content management systems using Kentico Xperience, empowering non-technical teams to manage multi-lingual, multi-site content seamlessly.',
      icon: Globe,
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Kentico Xperience 13 Migration',
      desc: 'Upgrade legacy Kentico versions (v10, v11, v12) to Kentico Xperience 13 or Xperience by Kentico (.NET 8/9) with zero data loss and enhanced ASP.NET Core performance.',
      icon: Cpu,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Kentico E-commerce Development',
      desc: 'Build secure, scalable online stores integrated with payment gateways, ERPs, CRM systems, and real-time inventory management powered by Kentico e-commerce engine.',
      icon: Server,
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Kentico Headless & Kontent Integration',
      desc: 'Deploy headless CMS solutions using Kentico Kontent APIs to deliver omnichannel content across mobile applications, web portals, IoT devices, and smart displays.',
      icon: Layers,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Custom Kentico Web Part Development',
      desc: 'Develop bespoke Kentico web parts, widgets, page builders, and custom modules tailored to your specific workflow and enterprise integration needs.',
      icon: Code,
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Kentico Maintenance & 24/7 SLA Support',
      desc: 'Ongoing security patching, performance optimization, database tuning, Azure cloud scaling, and 24/7 technical support for mission-critical Kentico applications.',
      icon: ShieldCheck,
      iconBg: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const benefits = [
    {
      title: 'Unified Digital Experience',
      desc: 'Kentico combines content management, digital marketing, and e-commerce into a single ASP.NET framework, reducing operational complexity.',
      icon: Cloud
    },
    {
      title: 'Enterprise Security & Compliance',
      desc: 'Built-in OWASP security, role-based permissions, GDPR compliance tools, and encryption protect your sensitive business and customer data.',
      icon: ShieldCheck
    },
    {
      title: 'High Scalability & Performance',
      desc: 'Leverage ASP.NET Core architecture and Azure Cloud integration to handle millions of visitors with ultra-fast page load speeds.',
      icon: Clock
    },
    {
      title: 'Multilingual & Multi-site Support',
      desc: 'Manage global brand websites and localized content in dozens of languages from one single administrative backend dashboard.',
      icon: Sliders
    },
    {
      title: 'Personalization & Marketing Automation',
      desc: 'Target visitors with dynamic content, automated email campaigns, lead scoring, and A/B testing out-of-the-box.',
      icon: TrendingUp
    },
    {
      title: 'Seamless Third-Party API Integration',
      desc: 'Integrate Kentico easily with Salesforce, Hubspot, Dynamics 365, SAP, Marketo, and custom RESTful APIs.',
      icon: Monitor
    }
  ];

  const caseStudies = [
    {
      title: 'Global Healthcare Portal on Kentico Xperience',
      tag: 'CMS Migration',
      subtitle: 'Multi-lingual Patient Portal & HIPAA Compliant Data Flow',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-blue-500'
    },
    {
      title: 'B2B Industrial E-commerce Platform',
      tag: 'Kentico Commerce',
      subtitle: 'ASP.NET Core & ERP Inventory Automation',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-purple-500'
    },
    {
      title: 'Financial Services Portal Modernization',
      tag: '.NET 8 / Kentico',
      subtitle: 'Headless Content Delivery & Azure Cloud Scaling',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-emerald-500'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen relative">
      <SEO
        title="Kentico Development Services in USA | Firevy"
        description="Through a unified user interface allows you to centralize and simplify the management of different content channels. As the best software development company, we specialize in Kentico web development."
        canonical="/services/kentico-development-services"
      />

      {/* Floating Action Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 pr-1 sm:pr-2 pointer-events-auto">
        <Link
          to="/contact"
          aria-label="Call Us"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-l-xl bg-[#005F96] hover:bg-[#004875] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 group"
          title="Schedule a Call"
        >
          <Phone className="w-5 h-5 group-hover:animate-bounce" />
        </Link>
        <Link
          to="/contact"
          aria-label="Chat With Us"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-l-xl bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 group"
          title="Live Chat"
        >
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </Link>
      </div>

      {/* =========================================================================
          1. HERO SECTION (Exact matching Reference Image 1 Top Header)
          ========================================================================= */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#0F172A] leading-[1.18] tracking-tight font-sans">
                Kentico Development Services<br />in USA
              </h1>

              <p className="text-base text-[#475569] leading-relaxed font-normal max-w-[560px]">
                Through a unified user interface allows you to centralize and simplify the management of different content channels. As the <strong className="text-[#005F96] font-semibold">best software development company</strong>, we specialize in crafting solutions tailored to meet your unique needs with a focus on innovation, quality, and client satisfaction, Kentico website development company experts delivers cutting-edge software that empowers businesses experience excellence with us today.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#005F96] hover:bg-[#004875] text-white font-[700] text-sm px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 1:1 Vector Illustration matching Reference Image 1 */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-sky-100/50 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[390px]" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_kentico_hero" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Gear background */}
                    <g transform="translate(140, 60)">
                      <circle cx="30" cy="30" r="22" fill="#E2E8F0" />
                      <circle cx="30" cy="30" r="10" fill="#F8FAFC" />
                      <circle cx="280" cy="150" r="18" fill="#CBD5E1" />
                    </g>

                    {/* Flower Pot right side */}
                    <g transform="translate(435, 270)">
                      <rect x="0" y="30" width="30" height="40" rx="4" fill="#64748B" />
                      <path d="M 5 30 L -5 -5 C -5 -5, 5 -15, 15 5 Z" fill="#38BDF8" />
                      <path d="M 15 30 L 25 -10 C 25 -10, 35 0, 20 20 Z" fill="#0284C7" />
                    </g>

                    {/* Central Laptop Screen Frame */}
                    <rect x="110" y="130" width="310" height="210" rx="12" fill="#1E293B" filter="url(#shadow_kentico_hero)" />
                    <rect x="120" y="142" width="290" height="186" rx="6" fill="#FFFFFF" />

                    {/* Laptop Screen Top Header */}
                    <path d="M 120 146 C 120 143.7, 121.7 142, 124 142 L 406 142 C 408.3 142, 410 143.7, 410 146 L 410 162 L 120 162 Z" fill="#F1F5F9" />
                    <circle cx="132" cy="152" r="3.5" fill="#EF4444" />
                    <circle cx="143" cy="152" r="3.5" fill="#F59E0B" />
                    <circle cx="154" cy="152" r="3.5" fill="#10B981" />

                    {/* Code Card Widget inside Screen (< />) */}
                    <g transform="translate(140, 175)">
                      <rect x="0" y="0" width="70" height="45" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="35" y="28" fill="#38BDF8" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">{`</>`}</text>
                    </g>

                    {/* Image Placeholder Card inside Screen */}
                    <g transform="translate(225, 185)">
                      <rect x="0" y="0" width="80" height="60" rx="6" fill="#3B82F6" opacity="0.85" />
                      <circle cx="40" cy="30" r="14" fill="#FFFFFF" opacity="0.4" />
                      <polygon points="35,22 48,30 35,38" fill="#FFFFFF" />
                    </g>

                    {/* Equalizer Sliders Card inside Screen */}
                    <g transform="translate(320, 185)">
                      <rect x="0" y="0" width="55" height="75" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <line x1="18" y1="15" x2="18" y2="60" stroke="#94A3B8" strokeWidth="2" />
                      <circle cx="18" cy="30" r="4" fill="#0078D4" />
                      <line x1="36" y1="15" x2="36" y2="60" stroke="#94A3B8" strokeWidth="2" />
                      <circle cx="36" cy="45" r="4" fill="#0078D4" />
                    </g>

                    {/* Floating Kentico Blue Badge Top Right */}
                    <g transform="translate(405, 90)">
                      <rect x="0" y="0" width="52" height="52" rx="12" fill="#0078D4" filter="url(#shadow_kentico_hero)" />
                      {/* Kentico K Flower Emblem */}
                      <circle cx="26" cy="26" r="14" fill="#FFFFFF" opacity="0.2" />
                      <path d="M 26 14 L 32 26 L 26 38 L 20 26 Z" fill="#FFFFFF" />
                      <path d="M 14 26 L 26 32 L 38 26 L 26 20 Z" fill="#FFFFFF" />
                    </g>

                    {/* Seated Developer Figure Left */}
                    <g transform="translate(295, 75)">
                      <circle cx="30" cy="20" r="12" fill="#FEDECF" />
                      <path d="M 18 18 C 18 8, 32 4, 42 10 C 46 14, 44 28, 44 28 C 38 24, 26 24, 22 26 Z" fill="#1E293B" />
                      <path d="M 20 34 L 50 34 L 45 70 L 15 70 Z" fill="#F59E0B" />
                      {/* Arm reaching for screen */}
                      <path d="M 15 40 L -25 75 L -15 85 L 22 50 Z" fill="#F59E0B" />
                    </g>

                    {/* Developer Sitting at Laptop Base */}
                    <g transform="translate(60, 170)">
                      <circle cx="40" cy="20" r="11" fill="#FEDECF" />
                      <path d="M 28 18 C 28 8, 42 4, 50 10 Z" fill="#1E293B" />
                      <path d="M 28 32 L 52 32 L 48 90 L 24 90 Z" fill="#0284C7" />
                      {/* Legs */}
                      <path d="M 24 90 L 10 135 L 30 135 L 40 95 Z" fill="#1E293B" />
                      <path d="M 48 90 L 65 135 L 80 135 L 60 95 Z" fill="#1E293B" />
                      {/* Laptop on lap */}
                      <path d="M 25 80 L 65 80 L 55 95 L 15 95 Z" fill="#38BDF8" />
                    </g>

                    {/* Laptop Stand */}
                    <path d="M 80 340 L 450 340 C 455 340, 460 345, 450 352 L 80 352 C 70 352, 75 345, 80 340 Z" fill="#CBD5E1" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BRAND LOGOS STRIP (Exact matching Reference Image 1 Strip)
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. LEADING KENTICO DEVELOPMENT SERVICE PROVIDER GLOBALLY (Reference Image 1)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Illustration matching Reference Image 1 Section 2 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-sky-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[380px]" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_kentico_sec2" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.08" />
                      </filter>
                    </defs>

                    {/* Background laptop wireframe */}
                    <rect x="90" y="80" width="330" height="230" rx="10" fill="#1E293B" filter="url(#shadow_kentico_sec2)" />
                    <rect x="100" y="92" width="310" height="206" rx="6" fill="#F8FAFC" />

                    {/* Top Screen Code Card */}
                    <g transform="translate(180, 115)">
                      <rect x="0" y="0" width="160" height="85" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <line x1="15" y1="20" x2="145" y2="20" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                      <line x1="15" y1="35" x2="110" y2="35" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
                      <line x1="15" y1="50" x2="130" y2="50" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
                      <line x1="15" y1="65" x2="85" y2="65" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* Side Browser Card */}
                    <g transform="translate(290, 210)">
                      <rect x="0" y="0" width="105" height="70" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <rect x="10" y="12" width="85" height="15" rx="3" fill="#BAE6FD" />
                      <rect x="10" y="34" width="85" height="10" rx="2" fill="#E2E8F0" />
                      <rect x="10" y="48" width="55" height="10" rx="2" fill="#E2E8F0" />
                    </g>

                    {/* Kentico Logo Badge floating top left */}
                    <g transform="translate(55, 60)">
                      <rect x="0" y="0" width="55" height="55" rx="14" fill="#0078D4" filter="url(#shadow_kentico_sec2)" />
                      <circle cx="27.5" cy="27.5" r="14" fill="#FFFFFF" opacity="0.25" />
                      <path d="M 27.5 15 L 34 27.5 L 27.5 40 L 21 27.5 Z" fill="#FFFFFF" />
                      <path d="M 15 27.5 L 27.5 34 L 40 27.5 L 27.5 21 Z" fill="#FFFFFF" />
                    </g>

                    {/* Developer Figure Standing in Front of Screen */}
                    <g transform="translate(230, 260)">
                      <circle cx="35" cy="18" r="11" fill="#FEDECF" />
                      <path d="M 24 16 C 24 6, 38 2, 46 8 C 50 12, 48 24, 48 24 Z" fill="#1E293B" />
                      <path d="M 22 30 L 48 30 L 52 90 L 18 90 Z" fill="#009BD8" />
                      <path d="M 20 90 L 32 90 L 30 140 L 18 140 Z" fill="#1E293B" />
                      <path d="M 38 90 L 50 90 L 48 140 L 36 140 Z" fill="#1E293B" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Text matching Reference Image 1 Section 2 */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Leading Kentico Development<br />Service Provider Globally
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15.5px] text-[#475569] leading-relaxed font-normal">
                <p>
                  The experience is suitable, and you can get all streams from a central location thanks to this feature. It eliminates the possibility of losing out on a critical channel update. With the help of our first-rate Kentico Xperience development services, you can create attractive CMS and e-commerce websites. We can help you design, build, optimize, and maintain customer-centric CMS with our Kentico CMS development services. As a Kentico CMS development company, we develop interactive, secure, and scalable <strong className="text-[#005F96] font-semibold">DOT Net Development Company</strong> for startups, businesses, and entrepreneurs. Hire the top supplier of Kentico development services to assist you in constructing a solid basis for your digital strategy.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          3.5 BRIEF ABOUT KENTICO DEVELOPMENT SERVICES (Exact matching Reference Image 2)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/60 text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Paragraphs matching Image 2 */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Brief About Kentico<br />Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  Not only do we guarantee that the solution is user-friendly for the end user, but we also make sure that it is user-friendly for web admins. Whether it be Google Cloud, AWS, Azure, or Rackspace, we are proficient in working with these cloud-based systems.
                </p>
                <p>
                  Kentico is an all-in-one integrated platform that covers 360 degrees, and our company is well-known for the enormous, inventive, and excellent websites that it creates.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Desk Developer Vector Graphic matching Image 2 */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-blue-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="200" r="160" fill="#F0F9FF" />
                    
                    {/* Desk Table */}
                    <rect x="180" y="270" width="220" height="12" rx="4" fill="#1E293B" />
                    <rect x="200" y="282" width="16" height="70" fill="#1E293B" />
                    <rect x="360" y="282" width="16" height="70" fill="#1E293B" />
                    
                    {/* Floating Monitors Wireframe background */}
                    <g transform="translate(200, 100)">
                      <rect x="0" y="0" width="80" height="50" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <line x1="10" y1="12" x2="70" y2="12" stroke="#38BDF8" strokeWidth="2" />
                      <line x1="10" y1="22" x2="55" y2="22" stroke="#E2E8F0" strokeWidth="2" />
                      <line x1="10" y1="32" x2="65" y2="32" stroke="#E2E8F0" strokeWidth="2" />
                    </g>
                    <g transform="translate(290, 80)">
                      <rect x="0" y="0" width="90" height="60" rx="4" fill="#FFFFFF" stroke="#0078D4" strokeWidth="2" />
                      {/* Kentico Emblem on Monitor */}
                      <circle cx="45" cy="30" r="14" fill="#0078D4" opacity="0.15" />
                      <path d="M 45 20 L 51 30 L 45 40 L 39 30 Z" fill="#0078D4" />
                      <path d="M 35 30 L 45 35 L 55 30 L 45 25 Z" fill="#0078D4" />
                    </g>
                    <g transform="translate(390, 100)">
                      <rect x="0" y="0" width="80" height="50" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <line x1="10" y1="12" x2="70" y2="12" stroke="#38BDF8" strokeWidth="2" />
                      <line x1="10" y1="22" x2="50" y2="22" stroke="#E2E8F0" strokeWidth="2" />
                    </g>

                    {/* Main Dual Monitors on Desk */}
                    <g transform="translate(190, 180)">
                      <rect x="0" y="0" width="115" height="85" rx="6" fill="#1E293B" />
                      <rect x="6" y="6" width="103" height="73" rx="3" fill="#0284C7" />
                      <line x1="15" y1="18" x2="90" y2="18" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
                      <line x1="15" y1="30" x2="70" y2="30" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
                      <line x1="15" y1="42" x2="80" y2="42" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
                    </g>
                    <g transform="translate(315, 180)">
                      <rect x="0" y="0" width="115" height="85" rx="6" fill="#1E293B" />
                      <rect x="6" y="6" width="103" height="73" rx="3" fill="#FFFFFF" />
                      <line x1="15" y1="18" x2="90" y2="18" stroke="#38BDF8" strokeWidth="3" />
                      <line x1="15" y1="30" x2="65" y2="30" stroke="#E2E8F0" strokeWidth="3" />
                      <line x1="15" y1="42" x2="85" y2="42" stroke="#E2E8F0" strokeWidth="3" />
                    </g>

                    {/* Sitting Developer Figure at Chair */}
                    <g transform="translate(250, 240)">
                      {/* Chair Back */}
                      <rect x="-40" y="10" width="35" height="80" rx="8" fill="#3B82F6" />
                      <circle cx="20" cy="-20" r="12" fill="#FEDECF" />
                      <path d="M 8 -22 C 8 -32, 22 -36, 30 -30 Z" fill="#1E293B" />
                      {/* Shirt */}
                      <path d="M 8 -5 L 32 -5 L 30 50 L 5 50 Z" fill="#00A4DF" />
                      {/* Pants */}
                      <path d="M 5 50 L -25 90 L 15 90 L 30 55 Z" fill="#1E293B" />
                    </g>

                    {/* Plant in pot */}
                    <g transform="translate(195, 260)">
                      <path d="M 0 10 L 15 10 L 12 25 L 3 25 Z" fill="#0078D4" />
                      <path d="M 7 10 C -5 -10, 0 -20, 7 -20 Z" fill="#38BDF8" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER
          ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          5. OUR RANGE OF KENTICO DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Our Range Of Kentico Development Services Include
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Firevy.Co, we deliver robust Kentico solutions tailored for enterprise content, e-commerce portals, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {rangeServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-8 py-3.5 rounded-md shadow-md transition-all"
            >
              <span>Get A Free Quote For Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </Container>
      </section>

      {/* =========================================================================
          6. BENEFITS OF KENTICO DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Benefits Of Kentico CMS Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Kentico provides enterprise content management, headless flexibility, and high-performance ASP.NET Core scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-[#F8FAFC] rounded-2xl border border-slate-200/70 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Additional sections */}
      <AndroidHiringModels />
      <InnovativeSolutionsVideoSection />
      <ProcessWeFollow />
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrixGrid />
      <SapphireTechStackGrid domainName="Microsoft" />
      <FeaturedInBrandsSection />
      <DigitalTransformationCaseStudies />

      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about Kentico CMS and Xperience development services."
        customFaqs={[
          {
            id: 1,
            question: "1. What is Kentico CMS / Kentico Xperience?",
            answer: "Kentico Xperience is an all-in-one digital experience platform built on ASP.NET Core that combines content management, digital marketing, and e-commerce capabilities into a single unified platform."
          },
          {
            id: 2,
            question: "2. Can you upgrade our legacy Kentico site to Kentico Xperience 13 / .NET 8?",
            answer: "Yes, our certified Microsoft and Kentico architects specialize in upgrading older Kentico versions to Kentico Xperience 13 or Xperience by Kentico with full data and URL preservation."
          },
          {
            id: 3,
            question: "3. Does Kentico support Headless CMS architecture?",
            answer: "Yes, Kentico Kontent (Kentico Cloud) provides REST and GraphQL APIs to deliver omnichannel content across mobile apps, single page applications (React, Angular, Vue), and IoT devices."
          },
          {
            id: 4,
            question: "4. Why choose Firevy.Co for Kentico Development Services?",
            answer: "Firevy.Co provides certified Kentico developers with 23+ years of enterprise IT experience, 320+ 5-star Clutch reviews, strict NDA compliance, and 24/7 SLA maintenance support."
          }
        ]}
      />

      <RecentBlogsSection />
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Kentico Development Company?"
        description="We combine deep Microsoft ASP.NET expertise with Kentico certified developers to deliver high-converting, secure digital experience platforms for enterprises worldwide."
      />

      <ConversionCalloutBanner
        data={{
          title: "Have a Kentico CMS Challenge to Address?",
          description: "Get access to certified Kentico developers to transform your enterprise digital presence.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      <SubscribeNewsletterSection />

    </div>
  );
};

export default KenticoDevelopmentService;
