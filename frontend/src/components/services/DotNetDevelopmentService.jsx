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
  Layers
} from 'lucide-react';

export const DotNetDevelopmentService = () => {
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
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Best .NET Application Development Services in USA | Firevy"
        description="We offer .NET development services to help businesses drive innovation through modern applications and modernizing legacy applications. Certified .NET and Azure developers."
        canonical="/services/net-application-development"
      />

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Title, Subtitle, Stats, CTAs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Best .NET Web<br className="hidden sm:inline" /> Development Services in USA
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.7] font-normal max-w-[620px]">
                We offer .NET development services to help businesses drive innovation through the development of modern applications and modernizing legacy applications. Get in touch with us for developing .NET based web and mobile applications.
              </p>

              {/* Primary CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-[700] text-sm px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 4 Statistics Counter Blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 max-w-[600px] border-t border-slate-100">
                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    80+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Web<br />Developers
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    20+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Fortune 500<br />Companies
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    600+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Projects Completed in<br />.NET Tech
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    320+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Graphic / Laptop Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-slate-50 rounded-2xl p-6 border border-slate-200/60 shadow-xl flex items-center justify-center overflow-hidden group">
                
                {/* Background Decorative Rings */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

                {/* Laptop Mockup Illustration */}
                <div className="relative w-full max-w-[360px] bg-slate-900 rounded-lg p-3 shadow-2xl border border-slate-800">
                  <div className="flex items-center space-x-1.5 pb-2 mb-2 border-b border-slate-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400 font-mono pl-2">dotnet-app.csproj</span>
                  </div>

                  <div className="font-mono text-[11px] space-y-1.5 text-slate-300 leading-relaxed py-2 pl-1">
                    <div className="text-purple-400">using Microsoft.AspNetCore.Mvc;</div>
                    <div className="text-blue-400">namespace <span className="text-amber-300">Firevy.Services</span></div>
                    <div>&#123;</div>
                    <div className="pl-4 text-sky-300">[ApiController]</div>
                    <div className="pl-4 text-emerald-400">public class <span className="text-amber-200">DotNetDevService</span></div>
                    <div className="pl-4">&#123;</div>
                    <div className="pl-8 text-slate-400">// Enterprise Scalability</div>
                    <div className="pl-8 text-blue-300">public async Task&lt;IActionResult&gt; Build()</div>
                    <div className="pl-8">&#123; <span className="text-purple-300">return Ok("Success");</span> &#125;</div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md animate-bounce [animation-duration:3s]">
                  .NET Core
                </div>

                <div className="absolute top-4 right-4 bg-amber-500 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                  C#
                </div>

                <div className="absolute bottom-6 left-4 bg-[#005F96] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                  Azure
                </div>

                <div className="absolute bottom-6 right-4 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                  SQL Server
                </div>

                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                  .NET 8
                </div>

                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-[#005F96] font-mono font-bold text-lg bg-white px-2 py-0.5 rounded shadow">
                  &lt;/&gt;
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. CLIENT LOGO MARQUEE
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. QUALITY .NET DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-sky-100/70 rounded-full blur-2xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="150" fill="#E0F2FE" opacity="0.8" />
                    <rect x="90" y="110" width="220" height="180" rx="12" fill="#FFFFFF" stroke="#0284C7" strokeWidth="4" />
                    <rect x="90" y="110" width="220" height="30" rx="12" fill="#0284C7" />
                    <circle cx="110" cy="125" r="4" fill="#FFFFFF" />
                    <circle cx="125" cy="125" r="4" fill="#FFFFFF" />
                    <circle cx="140" cy="125" r="4" fill="#FFFFFF" />
                    
                    <rect x="110" y="160" width="80" height="8" rx="4" fill="#38BDF8" />
                    <rect x="110" y="176" width="130" height="8" rx="4" fill="#E2E8F0" />
                    <rect x="110" y="192" width="100" height="8" rx="4" fill="#E2E8F0" />
                    <rect x="110" y="208" width="150" height="8" rx="4" fill="#0284C7" />
                    <rect x="110" y="224" width="70" height="8" rx="4" fill="#E2E8F0" />
                    <rect x="110" y="240" width="120" height="8" rx="4" fill="#38BDF8" />

                    <rect x="65" y="210" width="75" height="90" rx="8" fill="#0284C7" />
                    <path d="M 65 225 L 140 225 L 120 210 L 65 210 Z" fill="#0369A1" />
                    
                    <circle cx="310" cy="270" r="25" fill="#38BDF8" opacity="0.9" />
                    <circle cx="310" cy="270" r="10" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Paragraph */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Quality .NET<br />Development Services
              </h2>
              
              <div className="space-y-3 text-sm sm:text-[15px] text-[#475569] leading-relaxed font-normal">
                <p>
                  Our team transforms the functions of manufacturing, supply chain, finance, customer relations, and human resources, among other areas, for clients in a variety of industries by enabling creative, high-performance business solutions. We offer continuing support, strategy, implementation, and consulting for the whole range of Custom .NET application development services.
                </p>
                <p>
                  With top .NET technology solutions provider, knowledge, and Center of Excellence, our team is committed to providing solutions with the most cutting-edge .NET product offerings for a variety of issues and complexity. Contact us now for a quick quote!
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#005F96] hover:bg-[#004875] text-white font-bold text-sm px-6 py-3 rounded-md shadow transition-all"
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
          4. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER
          ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          5. TURN YOUR IDEAS INTO SOLUTIONS
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
                  
                  <h3 className="text-2xl sm:text-3xl font-[900] text-[#005F96] leading-tight tracking-tight">
                    Affordable .NET Application Development Company
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Paragraphs */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight">
                Turn Your Ideas Into Solutions With Our .NET Development Services
              </h2>

              <div className="space-y-3 text-sm sm:text-[14.5px] text-[#475569] leading-relaxed font-normal">
                <p>
                  We have a dependable .NET web development team that is well-versed in enterprise data management, infrastructure optimization, portals and collaboration, business process automation, custom application creation, <strong className="text-slate-900 font-semibold">business intelligence</strong>, and systems integration. Our .NET web development team uses cutting-edge tools, methodologies, and practices to develop applications that suit your business needs and standards.
                </p>
                <p>
                  Our .NET web development team has extensive experience delivering software and products that use .NET Core, Azure IoT, Payment Gateway Solution, Microsoft Azure, Azure SQL, Content Management System, Microservices, and REST APIs. Hire .NET developer team of Microsoft experts who have hands-on experience in ASP.NET, VB.NET, C# 12, Entity Framework Core, Web API, WCF, MVC, WPF, and Blazor.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR PREMIUM SERVICES
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. SUCCESS STORIES & STATS BAR
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
          8. OUR RANGE OF .NET DEVELOPMENT SERVICES INCLUDE
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
          9. BENEFITS OF .NET DEVELOPMENT
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
          10. BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          11. UNVEILING OUR INNOVATIVE SOLUTION
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          12. PROCESS WE FOLLOW
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          13. OUR STORY, THEIR WORDS
          ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          14. TRUSTED BY THE WORLD'S LEADING BRANDS
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          15. SUCCESS MATRIX
          ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          16. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <SapphireTechStackGrid domainName="Microsoft" />

      {/* =========================================================================
          17. WE HAVE BEEN FEATURED IN
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          18. DIGITAL TRANSFORMATION CASE STUDIES
          ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          19. FREQUENTLY ASKED QUESTIONS
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
          20. OUR RECENT BLOGS
          ========================================================================= */}
      <RecentBlogsSection />

      {/* =========================================================================
          21. WHAT SETS US APART AS .NET DEVELOPMENT SERVICES COMPANY?
          ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As .NET Development Services Company?"
        description="Being unique is our quality! Firevy.co believes in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* =========================================================================
          22. HAVE .NET DEVELOPMENT CHALLENGE TO ADDRESS ?
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
          23. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
          ========================================================================= */}
      <SubscribeNewsletterSection />

    </div>
  );
};

export default DotNetDevelopmentService;
