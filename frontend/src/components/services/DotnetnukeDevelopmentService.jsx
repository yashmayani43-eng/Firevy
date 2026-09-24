import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  ArrowRight,
  Cloud,
  Globe,
  Cpu,
  ShieldCheck,
  Clock,
  Sliders,
  TrendingUp,
  Monitor,
  Server,
  Layers,
  Code,
  Phone,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const DotnetnukeDevelopmentService = () => {
  const rangeServices = [
    {
      title: 'Custom DNN Module Development',
      desc: 'We build tailored, high-performance DotNetNuke (DNN) modules and custom extensions using C# and ASP.NET to extend core CMS capabilities to fit complex workflows.',
      icon: Code,
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'DNN Theme & Skin Design',
      desc: 'Create responsive, pixel-perfect DNN skins and themes optimized for mobile devices, high conversion rates, accessibility compliance, and fast page performance.',
      icon: Globe,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'DNN Migration & Version Upgrades',
      desc: 'Upgrade legacy DNN installations (v7, v8, v9) to the latest DNN Evoq or Community Edition platforms safely with zero data loss and minimal downtime.',
      icon: Cpu,
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'E-commerce Integration for DNN',
      desc: 'Integrate robust e-commerce solutions like Hotcakes Commerce or custom DNN store modules connected with payment gateways, ERP, and CRM tools.',
      icon: Server,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'DNN Portal & Multi-site Setup',
      desc: 'Configure multi-tenant portal networks from a single DotNetNuke administration dashboard, reducing license fees and server overhead across enterprise units.',
      icon: Layers,
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      title: '24/7 DNN Maintenance & Support',
      desc: 'Proactive security patching, database optimization, vulnerability mitigation, Azure hosting management, and SLA-backed support for mission-critical portals.',
      icon: ShieldCheck,
      iconBg: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const benefits = [
    {
      title: 'Enterprise .NET Security',
      desc: 'Built on Microsoft .NET framework with granular role-based permissions, anti-forgery tokens, and encrypted data channels for enterprise compliance.',
      icon: ShieldCheck
    },
    {
      title: 'Extensible Architecture',
      desc: 'Modular design permits seamless integration of custom C# business logic, third-party REST APIs, and microservices without touching core code.',
      icon: Cpu
    },
    {
      title: 'Multi-Tenant Portal Management',
      desc: 'Host hundreds of unique domain portals from one DNN installation with distinct skinning, user access lists, and content repositories.',
      icon: Cloud
    },
    {
      title: 'High Scalability & Azure Readiness',
      desc: 'Deploy on Microsoft Azure Web Apps or SQL Database instances for high availability, load balancing, and rapid global content delivery.',
      icon: Clock
    },
    {
      title: 'SEO & Mobile Optimization',
      desc: 'Built-in human-friendly URL rewrite engines, XML sitemaps, open graph metadata controls, and responsive UI frameworks out-of-the-box.',
      icon: TrendingUp
    },
    {
      title: 'Granular Content Administration',
      desc: 'Role-based workflow approvals, revision history, and drag-and-drop page composing empower non-technical marketing teams.',
      icon: Sliders
    }
  ];

  const faqs = [
    {
      question: 'What is DotNetNuke (DNN) and why choose it for enterprise web apps?',
      answer: 'DotNetNuke (DNN) is a leading open-source CMS built on the Microsoft .NET framework. It offers enterprise-grade security, scalability, granular role permissions, and multi-tenant portal management out of the box.'
    },
    {
      question: 'Can you migrate our legacy DNN version to the latest DNN 9.x release?',
      answer: 'Yes, our DNN migration specialists can upgrade legacy installations (DNN 6, 7, or 8) to the latest DNN 9 Community or Evoq editions, resolving module compatibility issues and ensuring data integrity.'
    },
    {
      question: 'Do you build custom DNN modules and skins from scratch?',
      answer: 'Absolutely. We design pixel-perfect, responsive DNN skins and develop custom C# / ASP.NET DNN modules tailored to your specific enterprise business requirements.'
    },
    {
      question: 'How do you handle DNN security and performance tuning?',
      answer: 'We apply security patches, optimize SQL Server queries, enable caching, configure Web Application Firewalls (WAF), and host on high-performance Azure cloud servers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative">
      <SEO
        title="DotNetNuke (DNN) Development Services in USA | Sapphire / Firevy"
        description="Hire top DotNetNuke (DNN) developers to build scalable enterprise portals, custom DNN modules, responsive skins, and migration services on Microsoft .NET."
      />

      {/* Floating Action Edge Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-1">
        <a
          href="tel:+15551234567"
          className="w-11 h-11 bg-[#005F96] hover:bg-[#004875] text-white rounded-l-lg flex items-center justify-center shadow-lg transition-all transform hover:scale-105"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <Link
          to="/contact"
          className="w-11 h-11 bg-[#10B981] hover:bg-[#059669] text-white rounded-l-lg flex items-center justify-center shadow-lg transition-all transform hover:scale-105"
          title="Chat / Contact Us"
        >
          <MessageSquare className="w-5 h-5" />
        </Link>
      </div>

      {/* =========================================================================
          1. MAIN SECTION 1: DotNetNuke Development Services in USA (Hero Light Layout)
          ========================================================================= */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#0F172A] leading-[1.18] tracking-tight font-sans">
                DotNetNuke Development Services<br />in USA
              </h1>

              <p className="text-base text-[#475569] leading-relaxed font-normal max-w-[560px]">
                DotNetNuke (DNN) provides a robust platform to centralize enterprise portals and streamline content administration. As a leading <strong className="text-[#005F96] font-semibold">DotNetNuke development company</strong>, we specialize in building custom DNN modules, responsive skins, multi-tenant portal networks, and seamless third-party integrations tailored to your business goals.
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

            {/* Right Column: 1:1 Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-sky-100/50 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[390px]" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_dnn_hero" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Background Gear */}
                    <g transform="translate(140, 60)">
                      <circle cx="30" cy="30" r="22" fill="#E2E8F0" />
                      <circle cx="30" cy="30" r="10" fill="#F8FAFC" />
                      <circle cx="280" cy="150" r="18" fill="#CBD5E1" />
                    </g>

                    {/* Flower Pot */}
                    <g transform="translate(435, 270)">
                      <rect x="0" y="30" width="30" height="40" rx="4" fill="#64748B" />
                      <path d="M 5 30 L -5 -5 C -5 -5, 5 -15, 15 5 Z" fill="#0284C7" />
                      <path d="M 15 30 L 25 -10 C 25 -10, 35 0, 20 20 Z" fill="#005F96" />
                    </g>

                    {/* Central Monitor */}
                    <rect x="110" y="130" width="310" height="210" rx="12" fill="#1E293B" filter="url(#shadow_dnn_hero)" />
                    <rect x="120" y="142" width="290" height="186" rx="6" fill="#FFFFFF" />

                    {/* Header bar */}
                    <path d="M 120 146 C 120 143.7, 121.7 142, 124 142 L 406 142 C 408.3 142, 410 143.7, 410 146 L 410 162 L 120 162 Z" fill="#F1F5F9" />
                    <circle cx="132" cy="152" r="3.5" fill="#EF4444" />
                    <circle cx="143" cy="152" r="3.5" fill="#F59E0B" />
                    <circle cx="154" cy="152" r="3.5" fill="#10B981" />

                    {/* Code Card Widget */}
                    <g transform="translate(140, 175)">
                      <rect x="0" y="0" width="70" height="45" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="35" y="28" fill="#005F96" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DNN</text>
                    </g>

                    {/* Dashboard graphic */}
                    <g transform="translate(225, 185)">
                      <rect x="0" y="0" width="80" height="60" rx="6" fill="#005F96" opacity="0.85" />
                      <circle cx="40" cy="30" r="14" fill="#FFFFFF" opacity="0.4" />
                      <polygon points="35,22 48,30 35,38" fill="#FFFFFF" />
                    </g>

                    {/* Sliders Widget */}
                    <g transform="translate(320, 185)">
                      <rect x="0" y="0" width="55" height="75" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                      <line x1="18" y1="15" x2="18" y2="60" stroke="#94A3B8" strokeWidth="2" />
                      <circle cx="18" cy="30" r="4" fill="#005F96" />
                      <line x1="36" y1="15" x2="36" y2="60" stroke="#94A3B8" strokeWidth="2" />
                      <circle cx="36" cy="45" r="4" fill="#005F96" />
                    </g>

                    {/* Developer Sitting figure */}
                    <g transform="translate(60, 170)">
                      <circle cx="40" cy="20" r="11" fill="#FEDECF" />
                      <path d="M 28 18 C 28 8, 42 4, 50 10 Z" fill="#1E293B" />
                      <path d="M 28 32 L 52 32 L 48 90 L 24 90 Z" fill="#005F96" />
                      <path d="M 24 90 L 10 135 L 30 135 L 40 95 Z" fill="#1E293B" />
                      <path d="M 48 90 L 65 135 L 80 135 L 60 95 Z" fill="#1E293B" />
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

      {/* Brand Marquee Strip */}
      <BrandLogoMarquee />

      {/* =========================================================================
          2. MAIN SECTION 2: Leading DotNetNuke Provider
          ========================================================================= */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center p-2">
                <svg className="w-full h-auto max-h-[360px]" viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="360" height="240" rx="10" fill="#1E293B" />
                  <rect x="60" y="65" width="340" height="210" rx="4" fill="#FFFFFF" />
                  <path d="M 60 65 L 400 65 L 400 85 L 60 85 Z" fill="#E2E8F0" />
                  
                  {/* Code lines */}
                  <line x1="80" y1="110" x2="200" y2="110" stroke="#005F96" strokeWidth="4" strokeLinecap="round" />
                  <line x1="80" y1="130" x2="280" y2="130" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="80" y1="150" x2="240" y2="150" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="80" y1="170" x2="190" y2="170" stroke="#005F96" strokeWidth="3" strokeLinecap="round" />

                  {/* Seated Developer */}
                  <g transform="translate(320, 160)">
                    <circle cx="30" cy="20" r="12" fill="#FEDECF" />
                    <path d="M 15 35 L 45 35 L 40 100 L 10 100 Z" fill="#005F96" />
                    <path d="M 0 60 L 60 60 L 50 80 L 10 80 Z" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0F172A] leading-tight font-sans">
                Leading DotNetNuke Development Service Provider Globally
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                DotNetNuke empowers companies to manage multi-portal enterprise environments with supreme flexibility. As an established DNN solution provider, we craft custom modules, integrate enterprise CRMs and ERP systems, and deliver robust ASP.NET cloud infrastructure for clients worldwide.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#005F96] font-bold hover:underline"
                >
                  Learn how we transform enterprise web portals →
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. MAIN SECTION 3: Brief About DotNetNuke
          ========================================================================= */}
      <section className="py-20 bg-slate-50/70 text-slate-900 border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0F172A] leading-tight font-sans">
                Brief About DotNetNuke Development Services
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Not only do we guarantee that your DotNetNuke portal is intuitively structured for end users, but we also ensure seamless administration for content managers. Whether hosted on Azure Cloud, AWS, or IIS servers, our solutions maximize speed, reliability, and security.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                DNN is a comprehensive content platform trusted by government agencies, financial institutions, and Fortune 500 enterprises for its unmatched modularity and security features.
              </p>
            </div>

            {/* Right Graphic: Multi-Monitor Setup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center p-2">
                <svg className="w-full h-auto max-h-[360px]" viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Desktop Workstation */}
                  <rect x="180" y="60" width="160" height="110" rx="6" fill="#1E293B" />
                  <rect x="188" y="70" width="144" height="90" rx="3" fill="#FFFFFF" />
                  
                  <rect x="40" y="140" width="160" height="110" rx="6" fill="#1E293B" />
                  <rect x="48" y="150" width="144" height="90" rx="3" fill="#FFFFFF" />

                  <rect x="320" y="140" width="160" height="110" rx="6" fill="#1E293B" />
                  <rect x="328" y="150" width="144" height="90" rx="3" fill="#FFFFFF" />

                  {/* Desk */}
                  <rect x="30" y="270" width="460" height="16" rx="4" fill="#64748B" />
                  <rect x="100" y="286" width="20" height="80" fill="#475569" />
                  <rect x="400" y="286" width="20" height="80" fill="#475569" />
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Our End-to-End DotNetNuke Services
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From bespoke module engineering to enterprise cloud deployment, we cover all your DNN ecosystem needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rangeServices.map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${item.iconBg}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Why Choose DotNetNuke for Your Organization?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-sky-50 text-[#005F96] rounded-lg">
                  <b.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SapphireTechStackGrid />
      <ProcessWeFollow />
      <AndroidHiringModels />
      <InnovativeSolutionsVideoSection />
      <OurStoryTheirWordsSection />
      <FeaturedInBrandsSection />
      <SapphireFaqSection faqs={faqs} />
      <RecentBlogsSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default DotnetnukeDevelopmentService;
