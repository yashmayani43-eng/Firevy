import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { SapphireSeasonedExpertsSection } from './SapphireSeasonedExpertsSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { TransformativeImpactSection } from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import { SectorsThrivingSection } from './SectorsThrivingSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cloud,
  RefreshCw,
  GitBranch,
  Database,
  Lock,
  Workflow,
  Server,
  BarChart3,
  Bot,
  Code2,
  Terminal,
  Activity,
  Globe2,
  Users2,
  Clock,
  TrendingUp,
  FileCode
} from 'lucide-react';

export const OffshoreSoftwareDevelopmentService = () => {
  // Auto-scroll Carousel State for Cutting-Edge Technologies (Section 8)
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const techScrollContainerRef = useRef(null);
  const cuttingEdgeTechList = [
    {
      title: 'Artificial Intelligence',
      desc: 'Our services, which range from intelligent automation to deep learning algorithms, enable you to automate manual tasks, enhance decision-making, and build self-learning enterprise software.',
      icon: '/images/software_development_company_in_usa/cuttingedge/aiml.svg'
    },
    {
      title: 'Data Science',
      desc: 'Our services, which range from big data solutions to predictive analytics, enable you to find hidden trends, streamline processes, and make data-driven choices that advance your company.',
      icon: '/images/software_development_company_in_usa/cuttingedge/datascience.svg'
    },
    {
      title: 'Cloud Computing',
      desc: 'With the help of our cloud software solutions, your company may run more adaptable and resiliently, thanks to their smooth migration, strong infrastructure, and affordable administration.',
      icon: '/images/software_development_company_in_usa/cuttingedge/cloudcomputing.svg'
    },
    {
      title: 'AR/VR',
      desc: 'We create software that provides a feeling of realism that spans the actual and digital worlds, whether it is used for interactive marketing, immersive training, or other purposes.',
      icon: '/images/software_development_company_in_usa/cuttingedge/arvr.svg'
    },
    {
      title: 'Computer Vision',
      desc: 'We can provide software that has features to identify patterns, track processes, evaluate information, and job efficiency with image recognition.',
      icon: '/images/software_development_company_in_usa/cuttingedge/computervision.svg'
    },
    {
      title: 'Internet of Things (IoT)',
      desc: 'Our software for Internet of Things solutions is designed to provide customers with intelligent automation, smooth integration, and real-time monitoring, resulting in dramatic results for your company.',
      icon: '/images/software_development_company_in_usa/cuttingedge/iot.svg'
    }
  ];

  // Auto-scroll loop for Cutting Edge Tech Carousel
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      if (techScrollContainerRef.current) {
        const container = techScrollContainerRef.current;
        const cardWidth = 320;
        const gap = 20;
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 30) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  // Section: The Expertise Of Our Offshore Software Development Services (Matching Screenshot)
  const offshoreExpertiseCards = [
    {
      id: 1,
      title: 'Offshore Web Development',
      desc: 'We provide you with the best offshore web development services, building agile, scalable, and responsive web platforms that work flawlessly on all modern browsers, search engines, and enterprise ecosystems.'
    },
    {
      id: 2,
      title: 'Offshore Cloud-Based SaaS Development',
      desc: 'This is the optimal moment to use the Cloud Computing service fully. Using the SaaS method of software execution, you may leverage the power of the Cloud to provide your app or software to all its users globally.'
    },
    {
      id: 3,
      title: 'Support And Maintenance Offshore',
      desc: 'You can choose from various packages to get excellent support and maintenance. We provide frequent updates and fixes as necessary. Proper setting and consistent support for fluctuating client needs are also available.'
    },
    {
      id: 4,
      title: 'Offshore Testing',
      desc: 'Hire the best offshore developers readily available for any existing project or the one you choose to assign to us in the future. We continually monitor the interaction and behavior of the generated software on all target devices.'
    },
    {
      id: 5,
      title: 'Offshore Mobile App Development',
      desc: 'Hire top offshore mobile app developers to expand your business reach across mobile platforms. We develop a sizable portfolio of mobile applications with the most recent technologies tailored to your target audience.'
    },
    {
      id: 6,
      title: 'Custom Offshore Software Development',
      desc: 'Get custom offshore software development tailored to your exact specifications, integrating cutting-edge tools to automate business operations and drive maximum digital transformation.'
    }
  ];

  // Section: Technology Stack That Sapphire Software Developers Use Proficiently (Matching Screenshot)
  const offshoreTechStack = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'React', 'Vue.js', 'Bootstrap', 'Typescript', 'Backbone.js']
    },
    {
      category: 'Full-stack Frameworks',
      items: ['NestJS', 'Koa.js', 'Nuxt.js', 'Meteor.JS', 'Next.js']
    },
    {
      category: 'Backend Frameworks',
      items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python', 'Django', 'Flask', 'FastAPI']
    },
    {
      category: 'Monitoring and Logging Tools',
      items: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana']
    },
    {
      category: 'Code Management',
      items: ['Bitbucket', 'GitHub', 'GitLab', 'SonarQube', 'maven', 'Gradle']
    },
    {
      category: 'Database',
      items: ['Firebase', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'SQLite']
    },
    {
      category: 'Cloud',
      items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)']
    }
  ];

  // Global Offshore Software Development Solutions (Matching Image)
  const globalOffshoreSolutions = [
    {
      title: 'Offshore Software Development in India',
      desc: 'India is a global hub for offshore software development services, offering skilled developers and flexible engagement models to accelerate digital transformation. Agile teams ensure faster delivery without compromising quality.',
      bg: 'bg-[#F3E8FF]',
      icon: (
        <svg className="w-7 h-7 text-[#9333EA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <path d="M16 19h2a2 2 0 0 0 2-2v-1" />
          <path d="M4 16v1a2 2 0 0 0 2 2h2" />
          <circle cx="16" cy="13" r="2" />
        </svg>
      )
    },
    {
      title: 'Offshore Software Development in UK',
      desc: 'The UK market benefits from offshore development that merges local business insight with global technical expertise. Whether it’s custom offshore software development in UK or complex enterprise apps, our team delivers strong communication.',
      bg: 'bg-[#DCFCE7]',
      icon: (
        <svg className="w-7 h-7 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <polyline points="7 10 9 12 7 14" />
          <polyline points="13 10 11 12 13 14" />
          <circle cx="17" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Offshore Software Development in Canada',
      desc: 'Looking to expand digitally for Offshore Software Development in Canada can leverage offshore software development teams to build innovative solutions faster. With expertise in cloud and data-driven platforms, development teams act as true partners in growth.',
      bg: 'bg-[#FFEDD5]',
      icon: (
        <svg className="w-7 h-7 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M6 8l6-5 6 5M4 14l4-6 4 6a4 4 0 0 1-8 0zM16 14l4-6 4 6a4 4 0 0 1-8 0z" />
        </svg>
      )
    },
    {
      title: 'Offshore Software Development in Australia',
      desc: 'In Australia, offshore teams act as extended partners focused on delivering high-performance apps and systems. From responsive web development to integrated enterprise solutions, these services help businesses stay competitive.',
      bg: 'bg-[#E0F2FE]',
      icon: (
        <svg className="w-7 h-7 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <rect x="7" y="7" width="10" height="6" rx="1" />
          <path d="M10 7v-1a2 2 0 0 1 4 0v1" />
        </svg>
      )
    },
    {
      title: 'Offshore Software Development in Germany',
      desc: 'Trust Offshore Software Development in Germany for precision-engineered software that adheres to strict compliance and expectations. Offshore teams bring deep technical knowledge in emerging technologies, ensuring solutions for manufacturing and tech sectors.',
      bg: 'bg-[#FEF9C3]',
      icon: (
        <svg className="w-7 h-7 text-[#CA8A04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <polyline points="8 10 6 12 8 14" />
          <polyline points="12 10 14 12 12 14" />
          <line x1="11" y1="10" x2="9" y2="14" />
        </svg>
      )
    },
    {
      title: 'Offshore Software Development in UAE',
      desc: 'With a focus on quality and secure delivery, companies can scale rapidly with confidence for Offshore Software Development in UAE.',
      bg: 'bg-[#FCE7F3]',
      icon: (
        <svg className="w-7 h-7 text-[#DB2777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <rect x="8" y="9" width="8" height="6" rx="1" />
          <line x1="11" y1="12" x2="13" y2="12" />
        </svg>
      )
    }
  ];

  // Benefits Of Offshore Software Development (Using Exact SVGs)
  const offshoreBenefitsList = [
    {
      title: 'Cost-Effectiveness & Reduced Overheads',
      desc: 'Save up to 60% on software development costs by eliminating local hiring overheads, office infrastructure, benefits, and administrative expenses without sacrificing software excellence.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/offshoresoftware/cost.svg"
          alt="Cost-Effectiveness"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Access To Global Talent Pool',
      desc: 'Gain immediate access to top 1% certified software developers, senior architects, AI engineers, and UI/UX designers specialized in cutting-edge tech stacks.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/offshoresoftware/globaltalentpool.svg"
          alt="Global Talent Pool"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Rapid Scalability & Flexibility',
      desc: 'Easily scale your engineering team up or down based on evolving product milestones, sprint priorities, and market requirements with zero hiring delays.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/offshoresoftware/scalability.svg"
          alt="Rapid Scalability"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Focus On Core Business Priorities',
      desc: 'Free your leadership and internal teams from technical hiring and operational management to focus on market expansion, customer relationships, and strategic sales.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/offshoresoftware/prioritize.svg"
          alt="Focus on Core Priorities"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Faster Time To Market & 24/7 Velocity',
      desc: 'Leverage time-zone differences for continuous 24/7 development and testing cycles, accelerating product feature releases and sprint completion rates.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/offshoresoftware/rapidmarket.svg"
          alt="Faster Time to Market"
          className="w-12 h-12 object-contain"
        />
      )
    },
    {
      title: 'Reduced Business & Operational Risk',
      desc: 'Mitigate project risks through transparent Agile sprint delivery, strict non-disclosure agreements (NDAs), complete IP ownership transfer, and proven QA methodologies.',
      icon: (
        <img
          src="/images/servicenewflowbenefitsimage/offshoresoftware/reducingrisk.svg"
          alt="Reduced Business Risk"
          className="w-12 h-12 object-contain"
        />
      )
    }
  ];

  // Section 29: Offshore Software Development FAQs
  const offshoreFaqs = [
    {
      question: 'What is offshore software development and why do businesses choose it?',
      answer: 'Offshore software development is the practice of delegating software engineering tasks to a specialized third-party technology partner located in another country. Businesses choose offshore development to significantly reduce development costs (up to 60%), overcome local developer shortages, access top global engineering talent, and accelerate their product time-to-market.'
    },
    {
      question: 'How does Firevy ensure the security of our intellectual property and source code?',
      answer: 'At Firevy, IP security is paramount. We sign comprehensive Non-Disclosure Agreements (NDAs) before discovery discussions. All proprietary code, database schemas, and intellectual property remain 100% your legal property. Furthermore, our development centers maintain biometric access, encrypted hardware, secure VPN tunnels, and strict compliance with ISO 27001, SOC 2, and GDPR standards.'
    },
    {
      question: 'How do we manage and communicate with our offshore development team?',
      answer: 'Our offshore engineers are fluent in English and adapt their schedules to provide substantial working-hour overlap with your local time zone (EST, CST, PST, GMT, etc.). We integrate directly into your workflow using Slack, Microsoft Teams, Jira, Asana, and GitHub/GitLab, accompanied by daily standups and transparent bi-weekly sprint demos.'
    },
    {
      question: 'What engagement and hiring models do you offer for offshore development?',
      answer: 'We offer flexible engagement models tailored to your requirements: 1. Dedicated Offshore Teams (monthly dedicated engineers aligned with your roadmap), 2. Time & Material (pay per hour based on agile sprint needs), and 3. Fixed Price (clearly scoped projects with guaranteed milestone delivery and fixed budgets).'
    },
    {
      question: 'Can Firevy take over an existing in-progress software project?',
      answer: 'Yes. Our senior architects specialize in rapid codebase audits, architecture refactoring, and seamless project takeovers. We conduct a thorough technical evaluation of your current repository, outline tech debt, and smoothly transition development without stalling existing business operations.'
    },
    {
      question: 'What technologies and frameworks does your offshore team specialize in?',
      answer: 'Our engineers specialize in modern full-stack development (React, Next.js, Angular, Vue, Node.js, Python, Java, .NET Core, Go), mobile frameworks (Flutter, React Native, Swift, Kotlin), cloud and DevOps (AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform), and AI/ML data engineering.'
    },
    {
      question: 'How quickly can our offshore development team start working?',
      answer: 'Depending on your required tech stack and team size, we can onboard pre-vetted senior software engineers within 3 to 7 business days, allowing you to kick off development immediately without lengthy recruitment cycles.'
    },
    {
      question: 'How do we get started with Firevy for offshore software development?',
      answer: 'You can begin by requesting a free consultation. Our technical leadership will analyze your project scope, evaluate technical architecture, and propose a tailored offshore team structure with transparent cost breakdowns and milestone roadmaps.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta Information */}
      <SEO
        title="Top Offshore Software Development Company in USA | Firevy.co"
        description="Accelerate your product delivery with premier offshore software development services from Firevy. Dedicated software developers, custom enterprise engineering, cloud modernization, and 24/7 velocity."
        canonical="https://firevy.co/services/offshore-software-development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#EFF6FC] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-[1.2] font-sans">
                Top Offshore Software Development<br className="hidden sm:inline" /> Company in USA
              </h1>

              <p className="text-[15px] sm:text-[15.5px] text-[#4B5563] leading-[1.65] max-w-2xl font-normal">
                Every time you work with us, we assure you that you will be able to efficiently reduce the resources you spend while increasing the pace at which your company grows. Let Firevy’s dedicated offshore developers engineer scalable, secure, and market-ready software solutions.
              </p>

              {/* 4 Stats (unboxed, bold blue text + label) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Software<br />Developers</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">40+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Fortune 500<br />Companies</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">1200+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">Projects Completed<br />in Software</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-[36px] font-extrabold text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#1F2430] mt-1.5 leading-[1.3]">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[5px] bg-[#005F96] hover:bg-[#004d7c] text-white text-[15px] font-semibold transition-all duration-200 shadow-none space-x-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[540px] flex justify-center">
                <img
                  src="/images/offshore_software_development_company/images/offshore_software_banner.svg"
                  alt="Top Offshore Software Development Company in USA"
                  className="w-full h-auto object-contain max-h-[420px]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 3. OVERVIEW 1: Best Offshore Software Development Services                */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[480px] flex justify-center">
                <img
                  src="/images/offshore_software_development_company/images/offshore_software_section_1.svg"
                  alt="Best Offshore Software Development Services"
                  className="w-full h-auto object-contain max-h-[380px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Best Offshore Software Development Services
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                The development of offshore software has advanced significantly over the last several years. Businesses across North America and Europe often employ offshore teams to augment their in-house engineering capacity, decrease delivery cycles, and access top-tier software architects without administrative overhead bottlenecks.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                As a leading <Link to="/services/application-services" className="text-[#005F96] hover:underline font-semibold">custom application development company</Link>, Firevy helps enterprises build dedicated offshore centers. From full-scale cloud platforms to mission-critical backend systems and AI automation, our developers integrate effortlessly into your existing sprint pipelines with 100% IP security and transparent delivery metrics.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. OVERVIEW 2: Brief About Offshore Software Development                  */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-snug">
                Brief About Offshore Software Development
              </h2>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                Offshore software development empowers modern businesses to build high-performance software at substantial cost savings while maintaining rigorous engineering standards. Our offshore development hubs provide elastic scalability, time-zone synchronized communication, and immediate access to certified full-stack developers, mobile engineers, and DevOps specialists.
              </p>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                With Firevy's offshore delivery framework, you gain dedicated engineering pods led by veteran technical project managers, daily standups, zero-friction Git/Jira reporting, and institutional knowledge preservation across the entire software lifecycle.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[480px] flex justify-center">
                <img
                  src="/images/offshore_software_development_company/images/offshore_software_about.svg"
                  alt="Brief About Offshore Software Development"
                  className="w-full h-auto object-contain max-h-[380px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLUTCH & GOODFIRMS TOP RATED RIBBON                                    */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 6. GET 100% CUSTOMIZABLE OFFSHORE SOFTWARE DEVELOPMENT BY EXPERTS         */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Offshore Software Development<br className="hidden sm:inline" /> By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card with Shape Pattern & Speech Bubble */}
            <div className="lg:col-span-4 relative bg-[#F0F8FF] p-7 sm:p-9 flex flex-col justify-start min-h-[290px] overflow-visible select-none rounded-xl">
              <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden rounded-xl">
                <img
                  src="/images/shape_pattern.webp"
                  alt="Pattern background"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              <div className="hidden lg:block absolute -right-[13px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FF] z-20 pointer-events-none" />

              <div className="mb-4 relative z-10">
                <img
                  src="/images/quotation_mark.svg"
                  alt="Quotation mark"
                  className="w-[52px] h-[49px]"
                />
              </div>

              <h3 className="text-[25px] sm:text-[27px] lg:text-[29px] font-bold text-[#005d89] tracking-tight leading-[1.28] relative z-10 text-left">
                Agile Engineering,<br />
                Global Talent,<br />
                Accelerated Growth
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                You can engage seasoned offshore software engineers with deep proficiency across modern web frameworks, enterprise cloud infrastructure, high-concurrency microservices, and mobile ecosystems. Our mission is to build robust, fault-tolerant enterprise software that accelerates operational efficiency and fuels sustainable revenue growth.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-normal">
                Our custom offshore software development roadmaps are tailored precisely to your organization's workflow demands—integrating legacy ERP systems with modern cloud APIs, designing intuitive customer portals, and embedding real-time intelligence into mission-critical business workflows.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* ========================================================================= */}
      {/* CUTTING EDGE TECHNOLOGIES SAPPHIRE USE FOR SOFTWARE DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden w-full">
        <Container>
          {/* Centered Heading Matching Reference Image 1 */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
              Cutting Edge Technologies Sapphire Use For Software Development Services
            </h2>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="relative overflow-hidden w-full select-none py-1">
            <div
              ref={techScrollContainerRef}
              onMouseEnter={() => setIsTechHovered(true)}
              onMouseLeave={() => setIsTechHovered(false)}
              className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-1 py-2"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cuttingEdgeTechList.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[340px] lg:w-[375px] shrink-0 rounded-[16px] bg-[#DDF2FC] p-7 sm:p-8 min-h-[290px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md border border-[#CCE8FA]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="mb-5">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl sm:text-[21px] font-[800] text-[#0B0F19] mb-3 leading-snug font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.75] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Horizontal Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
            <button
              onClick={() => {
                if (techScrollContainerRef.current) {
                  techScrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
                }
              }}
              aria-label="Previous slide"
              className="p-2 text-slate-800 hover:text-[#0088CC] transition-colors cursor-pointer select-none text-2xl flex items-center justify-center"
            >
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (techScrollContainerRef.current) {
                  techScrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
                }
              }}
              aria-label="Next slide"
              className="p-2 text-slate-800 hover:text-[#0088CC] transition-colors cursor-pointer select-none text-2xl flex items-center justify-center"
            >
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* GLOBAL OFFSHORE SOFTWARE DEVELOPMENT SOLUTIONS                            */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle Matching Image */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Global Offshore Software Development Solutions
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Drive digital transformation with top-notch offshore development delivering apps and software tailored to your business needs.
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid with Exact Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-10">
            {globalOffshoreSolutions.map((card, idx) => (
              <div
                key={idx}
                className="prototype-expertise-card p-7 sm:p-8 flex flex-col justify-start text-left group"
              >
                <div className="relative z-10">
                  <div className={`w-[54px] h-[54px] rounded-[10px] ${card.bg} flex items-center justify-center mb-5`}>
                    {card.icon}
                  </div>
                  <h3 className="font-[800] text-[#0B0F19] group-hover:text-[#005D89] text-[18px] sm:text-[19px] leading-[1.3] mb-3 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#555555] text-[13.5px] sm:text-[14px] leading-[1.75] font-[400]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Get A Free Quote Button Matching Image */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* OUR PREMIUM SERVICES GRID                                                 */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 14. SECTORS THRIVING (SECOND IMAGE: BELOW ABOUT US)                       */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke Software Development Services" />

      {/* ========================================================================= */}
      {/* 15. SUCCESS STORIES SECTION (SECOND IMAGE: BELOW ABOUT US)                */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 16. COMPREHENSIVE SUITE OF OFFSHORE SOFTWARE SERVICES (BLUE SECTION)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans text-left overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Firevy’s Comprehensive Suite of Offshore Software Development Services
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Firevy developers thrive at developing compelling enterprise applications by utilizing deep technical knowledge of the latest software frameworks. Firevy provides full-service offshore software development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Offshore Web Development',
                desc: 'By considering modern user behavior and cutting-edge web frameworks, we engineer responsive, high-speed web applications with interactive frontends and reliable backends.'
              },
              {
                title: 'Offshore Mobile App Development',
                desc: 'From iOS Swift and Android Kotlin to Flutter and React Native cross-platform apps, our offshore mobile engineers build apps that drive high user engagement and retention.'
              },
              {
                title: 'Custom Enterprise Software',
                desc: 'Whether you are developing bespoke ERPs, CRM automation, or business process systems, we help realize your vision with robust architecture that scales effortlessly.'
              },
              {
                title: 'Offshore MVP Development',
                desc: 'Our agile MVP engineering allows startups and fast-moving enterprises to validate software concepts in record time with real users before scaling to full production.'
              },
              {
                title: 'Cloud & DevOps Engineering',
                desc: 'Automate infrastructure provisioning, containerized deployments, and continuous delivery pipelines across AWS, Azure, and Google Cloud with our certified DevOps talent.'
              },
              {
                title: 'Offshore Software Modernization',
                desc: 'Safely refactor outdated legacy architectures into lightweight cloud microservices, eliminating performance bottlenecks and modernizing code maintainability.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-start text-left shadow-md hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 16.5 USA's PREMIER REWARD & RECOGNITION SOFTWARE DEVELOPMENT COMPANY     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-center relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Main Section Heading Matching Screenshot */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-8 sm:mb-12 font-sans max-w-4xl mx-auto px-4">
            USA's Premier Reward & Recognition Software Development Company
          </h2>

          {/* Video Container with Soft Accent Circles Matching Screenshot */}
          <div className="relative max-w-3xl mx-auto flex items-center justify-center py-4 px-2">
            {/* Top-Left Soft Sky Blue Background Circle */}
            <div className="absolute -top-6 sm:top-0 -left-4 sm:left-2 w-36 sm:w-52 h-36 sm:h-52 bg-[#D8F0FA] rounded-full filter blur-[1px] opacity-80 -z-0" />

            {/* Bottom-Right Soft Pink Background Circle */}
            <div className="absolute -bottom-6 sm:bottom-0 -right-4 sm:right-2 w-32 sm:w-44 h-32 sm:h-44 bg-[#FDE2E4] rounded-full filter blur-[1px] opacity-80 -z-0" />

            {/* Video Banner Card */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 w-full max-w-2xl bg-slate-950 rounded-[22px] sm:rounded-[26px] shadow-2xl overflow-hidden cursor-pointer group border border-slate-800/20 transform transition-all duration-300 hover:scale-[1.015]"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src="/images/reward_recognition_video_thumbnail.jpg"
                  alt="USA's Premier Reward & Recognition Software Development Company"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Top-Right Brand Logo Overlay: firevy.co instead of Sapphire */}
                <div className="absolute top-3.5 right-4 sm:top-5 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/45 backdrop-blur-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/20 select-none">
                  <img
                    src="/firevy_logo_white.png"
                    alt="firevy.co"
                    className="h-4 sm:h-5 w-auto object-contain"
                  />
                  <span className="text-white font-[800] text-xs sm:text-sm tracking-tight font-sans">
                    firevy.co
                  </span>
                </div>

                {/* Centered Glowing Blue Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#005F96]/85 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#0077BA] transition-all duration-300 ring-4 ring-white/30 backdrop-blur-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" stroke="none">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Banner Title on Video Matching Screenshot */}
                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 text-center z-20">
                  <p className="text-[#FFEB80] font-[800] text-sm sm:text-lg lg:text-xl drop-shadow-md tracking-tight font-sans">
                    USA's Premier Reward & Recognition Software Development Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Video Lightbox Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full p-2 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Responsive Video Embed */}
              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="USA's Premier Reward & Recognition Software Development Company Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      <MobileAppProficientTechStackSection
        title="Technology Stack That Sapphire Software Developers Use Proficiently"
        data={offshoreTechStack}
      />

      {/* ========================================================================= */}
      {/* 18. THE EXPERTISE OF OUR OFFSHORE SOFTWARE DEVELOPMENT SERVICES           */}
      {/* ========================================================================= */}
      <HybridAppExpertiseServices
        title="The Expertise Of Our Offshore Software Development Services"
        subtitle="Sapphire is a leading offshore software development company specializing in software engineering and digital product development. Some of our expertise include"
        cards={offshoreExpertiseCards}
      />

      {/* ========================================================================= */}
      {/* 19. PROUD TO HAVE PICKED THESE UP ALONG THE WAY (AWARDS BANNER)          */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* ========================================================================= */}
      {/* 17.2 BENEFITS OF OFFSHORE SOFTWARE DEVELOPMENT (WITH EXACT SVGS)          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#F8FBFE] text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight">
              Benefits of Offshore Software Development Company
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with an offshore software engineering leader offers measurable commercial, operational, and technical advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {offshoreBenefitsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start text-left space-y-3.5 group"
              >
                <div className="w-14 h-14 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#0F172A] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ========================================================================= */}
      {/* 19. HIRING MODELS (BUSINESS FRIENDLY HIRING MODELS)                       */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 20. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 22. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 23. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS)                           */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 24. TRUSTED BY THE WORLD'S LEADING BRANDS                                 */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 25. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 26. WHAT OUR CLIENTS SAY                                                  */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 27. WE HAVE BEEN FEATURED IN                                              */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 28. APPLICATION CASE STUDIES SLIDER                                       */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 29. FREQUENTLY ASKED QUESTIONS (8 FAQS)                                   */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Queries And Provide Solutions That Empower Modern Enterprises. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below."
        faqs={offshoreFaqs}
        companyName="Firevy.co"
      />

      {/* ========================================================================= */}
      {/* 30. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 31. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Offshore Software Development Services"
        subtitle="Being unique is our quality! Firevy Solutions delivers tailored, high-performance offshore software development with automated workflows, transparent sprint reporting, rigorous IP protection, and frictionless design-to-code execution. We are a renowned custom software organization serving clients with end-to-end support."
      />

      {/* ========================================================================= */}
      {/* 32. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          title="Have Offshore Software Development Services Challenge To Address ?"
          subtitle="Get access to top Offshore Software Architects and Senior Developers to engineer, scale, and maintain your business applications."
          buttonText="Hire Experts Now"
        />
      </div>
    </div>
  );
};

export default OffshoreSoftwareDevelopmentService;
