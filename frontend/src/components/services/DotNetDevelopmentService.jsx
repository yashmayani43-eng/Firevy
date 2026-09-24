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
  Sparkles,
  Phone,
  MessageSquare,
  Zap
} from 'lucide-react';

export const DotNetDevelopmentService = () => {
  const capabilities = [
    {
      title: 'Enterprise Architecture & Security',
      description: 'High-throughput microservices, OWASP security hardening, IdentityServer integration, OAuth2/OpenID authentication, and role-based access control for global enterprise workflows.',
      icon: ShieldCheck
    },
    {
      title: 'High Performance & Scalability',
      description: '.NET 8/9 Kestrel web server optimization, asynchronous async/await pipelines, Redis caching, in-memory state management, and high-concurrency cloud scaling.',
      icon: Zap
    },
    {
      title: 'Continuous CI/CD & Integration',
      description: 'Automated Azure DevOps pipelines, GitHub Actions workflows, Docker containerization, Kubernetes cluster orchestration, and zero-downtime blue-green deployments.',
      icon: Cpu
    }
  ];

  const rangeServices = [
    {
      title: '.NET Web Application Development',
      desc: 'We build lightweight, high-performing web applications using ASP.NET Core, MVC, and C# to meet the unique needs of businesses of all types and sizes.',
      icon: Globe,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      title: '.NET Enterprise Application Development',
      desc: 'Our enterprise solutions leverage .NET 8/9 and SQL Server to create scalable, secure, and multi-tenant enterprise software with high data throughput.',
      icon: Server,
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: '.NET Microservices & Web API Development',
      desc: 'We architect RESTful Web APIs and microservices using gRPC and ASP.NET Core, enabling seamless integration between mobile apps, frontends, and cloud databases.',
      icon: Layers,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      title: '.NET Migration & Modernization Service',
      desc: 'Migrate legacy ASP.NET Web Forms, VB.NET, or .NET Framework 4.x applications to cross-platform .NET Core with zero downtime and improved server performance.',
      icon: Cpu,
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Cloud Native .NET & Azure Integration',
      desc: 'Deploy .NET Core applications into Microsoft Azure App Services, Docker containers, and Kubernetes clusters with automated CI/CD pipelines.',
      icon: Cloud,
      iconBg: 'bg-pink-100 text-pink-600'
    },
    {
      title: '.NET Security & Maintenance Services',
      desc: 'Our certified .NET architects provide ongoing 24/7 SLA maintenance, OWASP security hardening, IdentityServer integration, and performance tuning.',
      icon: ShieldCheck,
      iconBg: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const benefits = [
    {
      title: 'The Flexibility Of The Cloud',
      desc: 'NET Development makes it easier to build cross-platform web and smartphone apps. Frameworks can be written in various languages, including C#, F#, and VB.NET.',
      icon: Cloud
    },
    {
      title: 'Powerful And Robust',
      desc: 'With efficient computational processes and predictive analytics, .NET Development can manage the most complex IT projects that are multi-tiered, elastic, and scalable.',
      icon: Clock
    },
    {
      title: 'Gain Control Over Your Project',
      desc: 'Developers can run their projects in either Windows or Linux, depending on their preferences. Cross migration is also feasible, and codes do not need to be changed to ensure consistency.',
      icon: Sliders
    },
    {
      title: 'Mobile App Tools',
      desc: 'Microsoft offers turnkey .NET solutions that help to accelerate mobile app development projects and access features like push alerts, user authentication, and structured storage.',
      icon: FileText
    },
    {
      title: 'Be Data-Driven',
      desc: 'In .NET development projects, you can access peer-to-peer data by integrating the network with Active Directory and System Center without much effort and time.',
      icon: TrendingUp
    },
    {
      title: 'Personal Gateway',
      desc: 'With .NET development, you can subscribe to Personal Gateway to easily sync with Windows operating systems and integrate with cloud-hosted analytics.',
      icon: Monitor
    }
  ];

  const caseStudies = [
    {
      title: '.NET Core Ecommerce Portal Development',
      tag: 'Case Study',
      subtitle: 'High-Scale Online Shopping & Inventory Management App',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-cyan-500'
    },
    {
      title: 'Enterprise ERP & Microservices Platform',
      tag: 'Data Management',
      subtitle: '.NET Core Web API & Azure SQL Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-blue-500'
    },
    {
      title: 'Legacy VB6 / ASP.NET Migration',
      tag: '.NET Core',
      subtitle: 'Cloud Migration & Azure DevOps Automation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badgeBg: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen relative">
      <SEO
        title="ASP.Net App Development Services in USA | Firevy"
        description="Drive innovation and scale your business with enterprise-grade Net Application Development services from Firevy.Co. Designed for security, high-throughput scalability, and seamless integration into modern cloud environments."
        canonical="/dot-net-application-development-services"
      />

      {/* =========================================================================
          FLOATING ACTION BUTTONS (Pinned to right edge - matching Screenshot 1)
          ========================================================================= */}
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
          1. ASP.Net App Development Services in USA (Hero Section)
          ========================================================================= */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#0F172A] leading-[1.18] tracking-tight font-sans">
                ASP.Net App Development<br />Services in USA
              </h2>

              <p className="text-base text-[#475569] leading-relaxed font-normal max-w-[560px]">
                Our team designs, develops, and deploys cost-effective and reliable .NET solutions as per your business needs. Contact us to get DOT Net solutions developed by seasoned experts to outperform your competitors.
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

            {/* Right Column: 1:1 Vector Graphic matching Screenshot 2 Top Right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-sky-100/50 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[390px]" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_top_sc2" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.1" />
                      </filter>
                      <linearGradient id="grad_net_sc2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A4EF" />
                        <stop offset="100%" stopColor="#0078D4" />
                      </linearGradient>
                    </defs>

                    {/* Connecting dashed wireframe background lines */}
                    <g stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4">
                      <line x1="80" y1="80" x2="470" y2="80" />
                      <line x1="60" y1="220" x2="490" y2="220" />
                    </g>

                    {/* Yellow VB Badge floating top left */}
                    <g transform="translate(60, 50)">
                      <rect x="0" y="0" width="65" height="42" rx="6" fill="#ECC94B" filter="url(#shadow_top_sc2)" />
                      <text x="32" y="27" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">VB</text>
                    </g>

                    {/* Purple .NET Core Badge floating top right */}
                    <g transform="translate(425, 20)">
                      <rect x="0" y="0" width="75" height="42" rx="6" fill="#805AD5" filter="url(#shadow_top_sc2)" />
                      <text x="37" y="20" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">.NET</text>
                      <text x="37" y="33" fill="#FFFFFF" fontSize="10" fontWeight="normal" textAnchor="middle" fontFamily="sans-serif">Core</text>
                    </g>

                    {/* Pink SQL Server Badge floating top far right */}
                    <g transform="translate(470, 70)">
                      <rect x="0" y="0" width="65" height="38" rx="6" fill="#ED64A6" filter="url(#shadow_top_sc2)" />
                      <text x="32" y="24" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQLServer</text>
                    </g>

                    {/* Blue Azure Badge floating middle left */}
                    <g transform="translate(40, 185)">
                      <rect x="0" y="0" width="65" height="42" rx="6" fill="#0078D4" filter="url(#shadow_top_sc2)" />
                      <path d="M18 30L28 12L38 24L32 30H18Z" fill="#FFFFFF" opacity="0.6" />
                      <path d="M28 12L44 30H32L28 12Z" fill="#FFFFFF" />
                      <text x="32" y="39" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Azure</text>
                    </g>

                    {/* Green C# Badge floating bottom right */}
                    <g transform="translate(475, 205)">
                      <rect x="0" y="0" width="65" height="42" rx="6" fill="#38A169" filter="url(#shadow_top_sc2)" />
                      <text x="32" y="27" fill="#FFFFFF" fontSize="20" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">C#</text>
                    </g>

                    {/* Laptop Base */}
                    <path d="M 70 355 L 470 355 C 476 355, 482 360, 470 368 L 70 368 C 58 368, 64 360, 70 355 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
                    <rect x="230" y="355" width="80" height="5" rx="2.5" fill="#94A3B8" />

                    {/* Laptop Screen Frame */}
                    <rect x="105" y="95" width="330" height="260" rx="10" fill="#0A0E17" stroke="#1E293B" strokeWidth="3" filter="url(#shadow_top_sc2)" />

                    {/* Inner Screen Display */}
                    <rect x="115" y="105" width="310" height="240" rx="4" fill="#FFFFFF" />

                    {/* Screen Header Bar */}
                    <path d="M 115 109 C 115 106.7, 116.7 105, 119 105 L 421 105 C 423.3 105, 425 106.7, 425 109 L 425 125 L 115 125 Z" fill="#F1F5F9" />
                    <circle cx="128" cy="115" r="4" fill="#EF4444" />
                    <circle cx="140" cy="115" r="4" fill="#F59E0B" />
                    <circle cx="152" cy="115" r="4" fill="#10B981" />

                    {/* Screen Code Lines */}
                    <g fill="#93C5FD">
                      <rect x="135" y="140" width="130" height="6" rx="3" />
                      <rect x="135" y="152" width="100" height="6" rx="3" fill="#CBD5E1" />
                      <rect x="135" y="164" width="120" height="6" rx="3" />
                      <rect x="135" y="176" width="85" height="6" rx="3" fill="#CBD5E1" />
                      <rect x="135" y="188" width="140" height="6" rx="3" />
                      <rect x="135" y="200" width="75" height="6" rx="3" fill="#CBD5E1" />
                      <rect x="135" y="212" width="110" height="6" rx="3" />
                      <rect x="135" y="224" width="135" height="6" rx="3" fill="#CBD5E1" />
                      <rect x="135" y="236" width="95" height="6" rx="3" />
                      <rect x="135" y="248" width="125" height="6" rx="3" fill="#CBD5E1" />
                      <rect x="135" y="260" width="90" height="6" rx="3" />
                      <rect x="135" y="272" width="115" height="6" rx="3" fill="#CBD5E1" />
                    </g>

                    {/* Microsoft .NET Wave Logo Center Right Screen */}
                    <g transform="translate(300, 160)">
                      <path d="M 12 42 C 6 22, 28 8, 36 24 C 44 40, 62 26, 68 8 C 58 26, 42 38, 32 20 C 22 4, 14 18, 12 42 Z" fill="url(#grad_net_sc2)" />
                      <path d="M 28 42 C 34 22, 56 12, 64 28 C 54 28, 44 26, 36 14 C 28 28, 28 38, 28 42 Z" fill="#0078D4" opacity="0.8" />
                      <text x="70" y="22" fill="#1E293B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Microsoft®</text>
                      <text x="5" y="75" fill="#0F172A" fontSize="38" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">.NET</text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. CLIENT BRAND LOGOS STRIP (Screenshot 2 Brand Marquee)
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          5. #1 .NET APPLICATION DEVELOPMENT SERVICES (Screenshot 2 Middle)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Graphic Illustration matching Screenshot 2 Middle */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-sky-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[380px]" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_sc2_mid" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.08" />
                      </filter>
                    </defs>

                    {/* Soft Light Blue Background Blob */}
                    <path d="M 100 200 C 60 110, 150 40, 260 50 C 370 60, 470 100, 480 200 C 490 300, 390 380, 270 385 C 150 390, 110 300, 100 200 Z" fill="#E0F2FE" opacity="0.75" />

                    {/* Interlocking Gears */}
                    <g transform="translate(180, 260)">
                      <circle cx="50" cy="50" r="32" fill="#1E293B" />
                      <circle cx="50" cy="50" r="16" fill="#E0F2FE" />
                      <circle cx="100" cy="70" r="24" fill="#1E293B" />
                      <circle cx="100" cy="70" r="12" fill="#E0F2FE" />
                    </g>

                    {/* Central Vertical Smartphone Frame */}
                    <g transform="translate(225, 60)">
                      <rect x="0" y="0" width="130" height="260" rx="18" fill="#1E293B" filter="url(#shadow_sc2_mid)" />
                      <rect x="8" y="12" width="114" height="236" rx="10" fill="#009BD8" />
                      
                      {/* Screen Code Lines */}
                      <g fill="#FFFFFF" opacity="0.6">
                        <rect x="18" y="25" width="78" height="5" rx="2.5" />
                        <rect x="18" y="36" width="55" height="5" rx="2.5" />
                        <rect x="18" y="47" width="68" height="5" rx="2.5" />
                        <rect x="18" y="58" width="45" height="5" rx="2.5" />
                        <rect x="18" y="69" width="60" height="5" rx="2.5" />
                        <rect x="18" y="80" width="70" height="5" rx="2.5" />
                        <rect x="18" y="91" width="50" height="5" rx="2.5" />
                        <rect x="18" y="102" width="65" height="5" rx="2.5" />
                        <rect x="18" y="113" width="75" height="5" rx="2.5" />
                        <rect x="18" y="124" width="40" height="5" rx="2.5" />
                        <rect x="18" y="135" width="68" height="5" rx="2.5" />
                      </g>

                      {/* Magnifying Glass 🔍 */}
                      <g transform="translate(45, 75)">
                        <circle cx="20" cy="20" r="22" fill="#FFFFFF" opacity="0.25" stroke="#FFFFFF" strokeWidth="5" />
                        <line x1="36" y1="36" x2="52" y2="52" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                      </g>
                    </g>

                    {/* Top Left Badge ({}) */}
                    <g transform="translate(105, 70)">
                      <rect x="0" y="0" width="60" height="42" rx="10" fill="#38BDF8" filter="url(#shadow_sc2_mid)" />
                      <text x="30" y="27" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="monospace">{`{ }`}</text>
                    </g>

                    {/* Female Developer Seated */}
                    <g transform="translate(110, 160)">
                      <ellipse cx="40" cy="155" rx="22" ry="6" fill="#1E293B" />
                      <line x1="28" y1="155" x2="20" y2="185" stroke="#1E293B" strokeWidth="4" />
                      <line x1="52" y1="155" x2="60" y2="185" stroke="#1E293B" strokeWidth="4" />
                      <circle cx="45" cy="18" r="10" fill="#FEDECF" />
                      <path d="M 32 16 C 32 6, 44 2, 54 8 C 58 12, 56 26, 56 26 C 50 22, 40 22, 35 24 Z" fill="#1E293B" />
                      <path d="M 32 32 L 56 32 L 54 75 L 30 75 Z" fill="#1E293B" />
                      <path d="M 30 75 L 10 110 L 25 110 L 42 80 Z" fill="#00A4DF" />
                      <path d="M 54 75 L 75 110 L 88 110 L 64 80 Z" fill="#00A4DF" />
                      <ellipse cx="16" cy="112" rx="10" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                      <ellipse cx="82" cy="112" rx="10" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                      <path d="M 12 70 L 45 70 L 48 85 L 8 85 Z" fill="#1E293B" />
                      <rect x="20" y="55" width="28" height="18" rx="2" fill="#38BDF8" transform="rotate(-15)" />
                    </g>

                    {/* Male Developer Standing */}
                    <g transform="translate(365, 140)">
                      <circle cx="40" cy="18" r="10" fill="#FEDECF" />
                      <path d="M 30 16 C 30 6, 42 2, 50 8 C 54 12, 52 24, 52 24 C 46 20, 38 20, 34 22 Z" fill="#1E293B" />
                      <path d="M 28 32 L 52 32 L 56 80 L 24 80 Z" fill="#5A8EC9" />
                      <path d="M 52 38 L 75 55 L 70 65 L 48 45 Z" fill="#4B7EBA" />
                      <g transform="translate(70, 48)">
                        <rect x="0" y="0" width="30" height="24" rx="6" fill="#38BDF8" />
                        <circle cx="15" cy="12" r="4" fill="#FFFFFF" />
                      </g>
                      <path d="M 28 38 L -25 30 L -20 20 L 32 30 Z" fill="#5A8EC9" />
                      <circle cx="-24" cy="25" r="4" fill="#FEDECF" />
                      <path d="M 25 80 L 37 80 L 35 180 L 23 180 Z" fill="#1E293B" />
                      <path d="M 42 80 L 54 80 L 52 180 L 40 180 Z" fill="#1E293B" />
                      <ellipse cx="28" cy="182" rx="10" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                      <ellipse cx="45" cy="182" rx="10" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Text matching Screenshot 2 */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                #1 .NET Application<br />Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15.5px] text-[#475569] leading-relaxed font-normal">
                <p>
                  The creation of .NET applications provides businesses with quick, easy-to-use, feature-rich solutions that enhance business results and expedite operations. We provide a broad selection of tailored .NET development solutions as part of our AI-Powered .NET Application Development Services. We are Affordable .NET development services for startups with more than ten years of expertise developing IT solutions and collaborating with businesses from a range of industries. See more about our services for .NET applications here. Reach out to us for a quick quote now!
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. BRIEF ABOUT TOP .NET DEVELOPMENT SERVICES (Screenshot 2 Bottom)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/60 text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Paragraphs matching Screenshot 2 */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Brief About Top .NET<br />Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  ASP NET framework is based on object-oriented programming, which reduces extraneous codes and requires developers to do less coding. The .NET framework facilitates post-development deployment with capabilities like no-impact apps, private components, controlled code sharing, side-by-side versioning, and partially trusted code.
                </p>
                <p>
                  .NET has been used to create millions of apps since its initial release in 2002. It also performs quite well on Microsoft® Windows Server™ 2003 and Windows 2000 Server.
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

            {/* Right Column: Multi-Device Illustration matching Screenshot 2 */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-blue-100/60 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="200" r="160" fill="#F0F9FF" />
                    
                    {/* Background Laptop */}
                    <rect x="90" y="100" width="320" height="200" rx="14" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
                    <rect x="100" y="115" width="300" height="170" rx="8" fill="#F8FAFC" />
                    
                    <circle cx="115" cy="128" r="4" fill="#EF4444" />
                    <circle cx="128" cy="128" r="4" fill="#F59E0B" />
                    <circle cx="141" cy="128" r="4" fill="#10B981" />
                    
                    <rect x="115" y="145" width="130" height="75" rx="8" fill="#BAE6FD" />
                    <rect x="255" y="145" width="130" height="18" rx="4" fill="#E2E8F0" />
                    <rect x="255" y="172" width="100" height="14" rx="4" fill="#E2E8F0" />
                    <rect x="115" y="230" width="130" height="45" rx="6" fill="#FCA5A5" />
                    <rect x="255" y="230" width="130" height="45" rx="6" fill="#BAE6FD" />

                    {/* Left Phone */}
                    <rect x="50" y="170" width="80" height="165" rx="16" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                    <rect x="56" y="180" width="68" height="145" rx="10" fill="#FFFFFF" />
                    <rect x="64" y="192" width="52" height="45" rx="4" fill="#BAE6FD" />
                    <rect x="64" y="246" width="52" height="14" rx="3" fill="#FCA5A5" />
                    <rect x="64" y="268" width="52" height="14" rx="3" fill="#E2E8F0" />
                    <circle cx="78" cy="296" r="3" fill="#F59E0B" />
                    <circle cx="92" cy="296" r="3" fill="#F59E0B" />

                    {/* Right Tablet / Phone */}
                    <rect x="375" y="170" width="95" height="165" rx="16" fill="#0F172A" stroke="#334155" strokeWidth="3" />
                    <rect x="381" y="180" width="83" height="145" rx="10" fill="#FFFFFF" />
                    <rect x="390" y="192" width="65" height="55" rx="4" fill="#BAE6FD" />
                    <rect x="390" y="256" width="65" height="15" rx="3" fill="#E2E8F0" />
                    <rect x="390" y="278" width="65" height="15" rx="3" fill="#FCA5A5" />
                    <circle cx="410" cy="305" r="3.5" fill="#3B82F6" />
                    <circle cx="426" cy="305" r="3.5" fill="#3B82F6" />

                    {/* Floating </> Badge */}
                    <rect x="215" y="65" width="52" height="36" rx="10" fill="#FFFFFF" stroke="#F97316" strokeWidth="2.5" />
                    <text x="241" y="89" fill="#F97316" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>

                    {/* Floating Microsoft .NET Logo Badge */}
                    <circle cx="335" cy="75" r="24" fill="#FFFFFF" stroke="#0078D4" strokeWidth="2" />
                    <path d="M323 66L331 78H335L347 66H343L333 75.5L326.5 66H323Z" fill="#0078D4" />
                    <text x="335" y="91" fill="#1E293B" fontSize="9" fontWeight="bold" textAnchor="middle">.NET</text>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER (Screenshot 2 Banner)
          ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          8. WE DEVELOP SECURE AND FEATURE-RICH WEB SOLUTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Box: Textured Blue Callout Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/50 to-slate-50 border border-sky-100 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-[#005F96] text-white flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-[900] text-[#005F96] leading-snug tracking-tight">
                    Scalability, Security, Affordability, And Performance
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Paragraphs */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
                We Develop Secure And Feature-Rich Web Solutions
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  ASP.NET provides the framework you need to construct simple online applications as well as large and complicated applications. We have expertise working with clients from many industries as one of the best ASP.NET development companies. We are functioning on several different bandwidth initiatives. Being a <strong className="text-[#005F96] font-semibold">top software development company</strong>, We have the necessary knowledge, team, and resources to develop business-specific apps to help your company succeed.
                </p>
                <p>
                  Our skilled team has created a slew of ASP.NET applications that have significantly aided the company's growth. We are one of India's most dependable, experienced, and professional ASP.NET development companies. Despite this, we have extensive expertise working on worldwide projects with a variety of worldwide businesses. We assist businesses in expanding their international reach by developing web apps in ASP.NET.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. OUR PREMIUM SERVICES
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          10. SUCCESS STORIES & STATS BAR
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-sky-50/60 text-slate-900 text-left border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
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
              <span>View All Portfolio</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#E0D7FF] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-purple-900">23+</div>
              <div className="text-xs font-bold text-purple-800">Years Experience</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#CCF2F4] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-teal-900">320+</div>
              <div className="text-xs font-bold text-teal-800">5-Star Clutch Reviews</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFD4D4] text-slate-900 text-center space-y-1 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-3xl font-[900] text-rose-900">2800+</div>
              <div className="text-xs font-bold text-rose-800">Satisfied Clients</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#005F96] text-white text-center space-y-3 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-sm font-bold">Want to start Projects</div>
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-[#005F96] font-extrabold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-all"
              >
                Get Estimation
              </Link>
            </div>
          </div>

        </Container>
      </section>

      {/* =========================================================================
          11. OUR RANGE OF .NET DEVELOPMENT SERVICES INCLUDE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Our Range Of .NET Development Services Include
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Firevy.Co, we have excellence in delivering solutions for a wide variety of business types and sizes. Take a look at our most cutting-edge product offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {rangeServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="expertise-hover-card p-7 sm:p-8 flex flex-col justify-between text-left group"
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
          12. BENEFITS OF .NET DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Benefits Of .NET Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              .NET Development provides many advantages to developers, both as a PaaS and an IaaS. The platform is also well-suited for ordinary, mid-level IT projects for companies. Here are some of its key advantages.
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

      {/* =========================================================================
          13. BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          14. UNVEILING OUR INNOVATIVE SOLUTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          15. PROCESS WE FOLLOW
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          16. OUR STORY, THEIR WORDS
          ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          17. TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          18. SUCCESS MATRIX
          ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          19. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <SapphireTechStackGrid domainName="Microsoft" />

      {/* =========================================================================
          20. WE HAVE BEEN FEATURED IN
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          21. DIGITAL TRANSFORMATION CASE STUDIES
          ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          22. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        customFaqs={[
          {
            id: 1,
            question: "1. How does .NET development work?",
            answer: ".NET development uses C#, F#, or VB.NET along with the .NET runtime to compile code into IL (Intermediate Language) that executes on the high-performance CLR runtime across Windows, Linux, and Cloud environments."
          },
          {
            id: 2,
            question: "2. What does a .NET developer do?",
            answer: "A .NET developer builds, designs, tests, and deploys scalable web applications, enterprise ERPs, cloud microservices, and mobile backends using C#, ASP.NET Core, Entity Framework, and Azure."
          },
          {
            id: 3,
            question: "3. What services do top .NET development companies offer?",
            answer: "Top .NET development companies offer custom web development, enterprise app engineering, cloud migration to Azure, microservices architecture, API development, and legacy VB6 / ASP.NET modernization."
          },
          {
            id: 4,
            question: "4. Which .NET technologies do you work with?",
            answer: "We work with .NET 8/9, ASP.NET Core, C# 12, Entity Framework Core, Azure App Services, SQL Server, Blazor, SignalR, WPF, and MAUI."
          },
          {
            id: 5,
            question: "5. Can you migrate my legacy application to modern .NET Core?",
            answer: "Yes, our certified Microsoft architects specialize in migrating legacy ASP.NET Web Forms, VB6, or old .NET Framework apps to modern cross-platform .NET 8/9 with zero downtime."
          },
          {
            id: 6,
            question: "6. Why should I choose Firevy.co for .NET Development Services?",
            answer: "Firevy.co provides 23+ years of IT experience, 320+ 5-star Clutch reviews, certified .NET developers starting at $21/hr, strict NDA compliance, and 24/7 SLA technical support."
          }
        ]}
      />

      {/* =========================================================================
          23. OUR RECENT BLOGS
          ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          24. WHAT SETS US APART AS .NET DEVELOPMENT SERVICES COMPANY?
          ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As .NET Development Services Company?"
        description="Being unique is our quality! Firevy.co believes in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* =========================================================================
          25. HAVE .NET DEVELOPMENT CHALLENGE TO ADDRESS ?
          ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have .NET Development Challenge To Address ?",
          description: "Get access to top .NET developers to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          26. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
          ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default DotNetDevelopmentService;
