import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import CustomItServicesSection from './CustomItServicesSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronRight,
  ArrowLeft,
  Layers,
  Sparkles,
  Code2,
  Cloud,
  Lock,
  Cpu,
  RefreshCw,
  BarChart3,
  Globe,
  Database,
  Server,
  Settings,
  Briefcase,
  TrendingUp,
  FileCheck,
  CheckSquare
} from 'lucide-react';

export const ProductDevelopmentService = () => {

  const productDevelopersTechStack = [
    {
      category: "Frontend",
      pills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "Tailwind CSS",
        "TypeScript"
      ]
    },
    {
      category: "Full-stack Frameworks",
      pills: [
        "Next.js",
        "NestJS",
        "Nuxt.js",
        "Remix",
        "MeteorJS"
      ]
    },
    {
      category: "Backend Frameworks",
      pills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "FastAPI",
        "Go (Golang)",
        "Java Spring Boot",
        "PHP / Laravel"
      ]
    },
    {
      category: "Monitoring and Logging Tools",
      pills: [
        "Prometheus",
        "Grafana",
        "Elasticsearch",
        "Datadog",
        "Sentry",
        "New Relic"
      ]
    },
    {
      category: "Code Management & CI/CD",
      pills: [
        "GitHub Actions",
        "GitLab CI",
        "Bitbucket",
        "Docker",
        "Kubernetes",
        "Terraform",
        "SonarQube"
      ]
    },
    {
      category: "Database",
      pills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "DynamoDB",
        "Supabase",
        "Firebase"
      ]
    },
    {
      category: "Cloud",
      pills: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Cloudflare"
      ]
    }
  ];

  // Benefits of Product Development Services (6 cards in 3x2 grid matching theme)
  const productBenefitsData = [
    {
      title: 'Accelerated Time-to-Market',
      desc: 'We leverage agile 2-week sprint cadences and modular microservices to deploy production-ready digital MVPs in as little as 6 to 10 weeks, enabling rapid customer feedback and early revenue generation.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: 'De-Risked Product-Market Fit',
      desc: 'Our rigorous discovery phase validates user demand, tests interactive Figma prototypes with real personas, and iterates features before writing code—minimizing technical and capital waste.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: 'Cloud-Native Elastic Scalability',
      desc: 'Architected with containerized microservices, serverless APIs, and distributed databases that scale effortlessly from thousands to millions of concurrent active users without downtime or latency spikes.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      title: 'Human-Centered UI/UX Excellence',
      desc: 'Craft intuitive, friction-free customer journeys. Our product designers blend behavioral psychology with modern design systems to maximize retention, onboarding speed, and daily engagement.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: 'Automated CI/CD & Rigorous QA',
      desc: 'Automate build pipelines with unit tests, regression suites, and vulnerability scanning. Continuous delivery ensures high-velocity releases with zero deployment rollbacks.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    },
    {
      title: 'Complete IP & Code Ownership',
      desc: 'Retain 100% intellectual property, clean documented source code, and complete architectural documentation from day one. No vendor lock-in or proprietary licensing hurdles.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    }
  ];

  // FAQ List tailored specifically for Product Development Services
  const productDevelopmentFaqList = [
    {
      question: 'What is digital product development and how does it differ from custom software development?',
      answer: 'While custom software development focuses on engineering a technical specification, digital product development is a holistic, user-centric lifecycle. It encompasses strategic market discovery, customer persona validation, UI/UX prototyping, agile MVP development, scalable cloud architecture, product analytics, and continuous feature growth.'
    },
    {
      question: 'How long does it take to build and launch an MVP (Minimum Viable Product)?',
      answer: 'A typical MVP takes between 6 to 12 weeks depending on feature complexity and integration scope. We follow an agile sprint framework that focuses strictly on core high-value features, enabling you to test with real users and achieve market validation rapidly.'
    },
    {
      question: 'How do you help us validate our product idea before writing code?',
      answer: 'During our Product Discovery phase, we run interactive design thinking workshops, conduct competitor benchmarking, map out user personas, and build clickable high-fidelity Figma prototypes. This allows us to validate hypotheses and user flows before committing development capital.'
    },
    {
      question: 'Do we retain complete intellectual property (IP) and source code ownership?',
      answer: 'Yes, absolutely. You retain 100% ownership of all source code, repositories, design assets, and intellectual property developed during the engagement. We provide clean, fully documented repositories upon milestone completions.'
    },
    {
      question: 'Can you scale an existing prototype into an enterprise-grade SaaS platform?',
      answer: 'Yes. We specialize in refactoring early prototypes into production-grade architectures. We optimize database queries, implement containerized microservices (Docker/Kubernetes), set up automated CI/CD pipelines, and ensure bank-grade security protocols.'
    },
    {
      question: 'What engagement and hiring models do you provide for product development?',
      answer: 'We offer flexible engagement models tailored to your product stage: dedicated cross-functional product squads (Product Manager, UX Designer, Frontend/Backend Engineers, QA), time-and-materials agile teams, or milestone-based fixed-scope projects.'
    },
    {
      question: 'How do you handle product security, data privacy, and compliance?',
      answer: 'Security is embedded into every layer of our development lifecycle (DevSecOps). We adhere to OWASP top 10 guidelines, role-based access control (RBAC), end-to-end data encryption (TLS 1.3 / AES-256), and regulatory standards such as GDPR, HIPAA, and SOC 2.'
    },
    {
      question: 'Do you offer ongoing post-launch maintenance and product scaling support?',
      answer: 'Yes, we provide flexible Level 2 and Level 3 managed product support retainers, including performance monitoring, proactive bug resolution, cloud infrastructure optimization, feature enhancements, and 24/7 site reliability engineering (SRE).'
    },
    {
      question: 'How do you ensure clear communication throughout the product lifecycle?',
      answer: 'We provide total transparency. You collaborate directly with your dedicated squad via Slack, Microsoft Teams, and Jira, participate in bi-weekly sprint demos and sprint planning, and receive comprehensive progress reports and milestone burn-down charts.'
    }
  ];

  // 6 Advanced Technologies for Product Development
  const advancedProductTechnologies = [
    {
      id: 'nodejs',
      title: 'Node.js & Microservices',
      icon: '/images/cuttingedge/nodejsdevelopment.svg',
      description: "For developing lightning-fast, high-concurrency backend services, we leverage Node.js and distributed microservices. Its event-driven, non-blocking I/O model handles high traffic volumes smoothly across multi-tenant SaaS products."
    },
    {
      id: 'mern',
      title: 'MERN Stack Engineering',
      icon: '/images/cuttingedge/mernstackappdevelopment.svg',
      description: 'Harness the battle-tested power of the MERN stack (MongoDB, Express, React, Node.js). We build end-to-end reactive applications that combine fluid user interfaces with secure, scalable document databases.'
    },
    {
      id: 'fastapi',
      title: 'Python & FastAPI for AI',
      icon: '/images/cuttingedge/fastapidevelopment.svg',
      description: 'Integrate intelligent AI models and high-throughput APIs using FastAPI and Python. Utilizing asynchronous concurrency and strict Pydantic typing, we ensure your intelligent product runs with optimal performance.'
    },
    {
      id: 'mean',
      title: 'React & Next.js Frameworks',
      icon: '/images/cuttingedge/meanstackappdevelopment.svg',
      description: 'Deliver unmatched user experience with server-side rendering (SSR), static site generation, and instant page transitions using modern React and Next.js, elevating both conversion and search engine discoverability.'
    },
    {
      id: 'django',
      title: 'Enterprise Django & Cloud',
      icon: '/images/cuttingedge/djangoappdevelopment.svg',
      description: 'When building secure enterprise SaaS platforms, Django offers built-in security protections against CSRF, SQL injection, and clickjacking, speeding up time-to-market without compromising enterprise security.'
    },
    {
      id: 'laravel',
      title: 'Full-Stack Modern Laravel',
      icon: '/images/cuttingedge/laraveldevelopment.svg',
      description: 'Build robust, highly maintainable web applications using modern Laravel ecosystems, leveraging Queue workers, automated cache managers, and RESTful API structures for mission-critical web applications.'
    }
  ];

  // Comprehensive Product Development Services (6 cards in carousel slider)
  const comprehensiveProductServices = [
    {
      id: 1,
      title: "Product Discovery & Strategy",
      desc: "De-risk your digital investment with market research, user persona definition, technical architecture feasibility assessments, and clickable UX prototypes."
    },
    {
      id: 2,
      title: "Rapid MVP Development",
      desc: "Turn concepts into functional, revenue-generating Minimum Viable Products in weeks using battle-tested frameworks, agile sprints, and automated QA testing."
    },
    {
      id: 3,
      title: "SaaS & Cloud Engineering",
      desc: "Architect multi-tenant cloud-native SaaS platforms with automated billing, user roles, microservices, and elastic cloud scaling on AWS, Azure, or GCP."
    },
    {
      id: 4,
      title: "UI/UX Design & Prototyping",
      desc: "Craft intuitive, conversion-focused user interfaces and design systems that delight customers, elevate usability scores, and minimize user churn."
    },
    {
      id: 5,
      title: "Legacy Software Modernization",
      desc: "Re-platform monolithic legacy applications into agile, high-performance microservices and cloud-native systems with zero disruption to active business."
    },
    {
      id: 6,
      title: "Continuous Growth & SRE Support",
      desc: "Maintain peak uptime and product velocity with continuous integration, performance tuning, proactive security monitoring, and post-launch feature releases."
    }
  ];

  const techSliderRef = useRef(null);
  const comprehensiveSliderRef = useRef(null);

  const scrollTechSlider = (direction) => {
    if (techSliderRef.current) {
      const scrollAmount = 380;
      techSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollComprehensiveSlider = (direction) => {
    if (comprehensiveSliderRef.current) {
      const scrollAmount = 400;
      comprehensiveSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Digital Product Development Services | Strategy, MVP & SaaS Engineering | Firevy.Co"
        description="Accelerate your product launch with Firevy's end-to-end digital product development services. From rapid MVP discovery and UX prototyping to scalable cloud-native SaaS engineering."
        keywords="product development services, digital product development, custom product engineering, mvp development company, saas product development, agile product development"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-12 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]"
              >
                Real-Time Velocity & Control with Digital Product Development Services
              </h1>

              <p
                className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal"
              >
                Transform your enterprise with tailored digital product development services, designed for groups of every size. We supply scalable, affordable, and industry-specific solutions that enhance method performance, reduce operational fees, and power sustainable growth. Hire product development specialist teams that offer complete cease-to-quit software services, from discovery and prototyping to MVP engineering and ongoing support. Whether you're constructing a brand-new SaaS platform or modernizing an existing one, we make certain seamless deployment aligned with your business desires. Contact us today to start your digital transformation with a free session and quote. Reliable Product Development Engineers for Innovation, Strategy, And Performance.
              </p>

              {/* 4 Stats Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-1">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Software Developers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Fortunes 500 Companies</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Project Completed in Software</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">5-Star Clutch Reviews</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-md hover:shadow-lg transform active:scale-95 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Hero Meeting Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/product_development_hero.jpg"
                  alt="Real-Time Velocity & Control with Digital Product Development Services"
                  className="w-full h-auto object-cover max-h-[420px] group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO) */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 border-b border-slate-200/80">
        <Container>
          <BrandLogoMarquee />
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 2. LEADING PRODUCT DEVELOPMENT COMPANY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/product_development_leading.jpg"
                  alt="Leading Product Development & Engineering Company"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading Product Development <br />
                & Engineering <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our certified digital product development specialists combine deep domain knowledge, agile engineering prowess, and behavioral user research to help enterprises build market-defining software. From strategic blueprint architecture to post-launch scaling, we partner with your team to eliminate product bottlenecks, accelerate sprint cycles, and elevate customer satisfaction.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                To provide Enterprise Product Development Services with a primary emphasis on scalable software architecture and intuitive user engagement, we conduct in-depth assessments of your market dynamics, tech stack feasibility, and security compliance before writing a single line of code.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE PRODUCT DEVELOPMENT EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Product Development & Engineering Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              {/* Subtle Topographic Background Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              {/* Quote Icon */}
              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Ideate, Build, And Scale High-Impact Digital Products
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Building or upgrading a digital software product is one of the most critical digital investments an enterprise or high-growth startup will make. Without seasoned technical leadership and domain-specific advisory, companies risk prolonged time-to-market, over-engineering, and user churn. Our <strong className="text-[#005F96] font-semibold">Product Development Services</strong> provide comprehensive guidance to validate ideas early, architect clean microservices, and secure total alignment with industry best practices.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize our specialized product development capabilities for modern React/Next.js web applications, scalable Node/Python backends, and cloud-native serverless pipelines to automate manual operations, streamline customer onboarding, and elevate satisfaction. Whether you are launching an early MVP or scaling a multi-tenant SaaS product, partnering with our specialists ensures maximum return on your engineering investment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5B. ADVANCED TECHNOLOGIES FOR TOP-TIER PRODUCT DEVELOPMENT SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Advanced Technologies Firevy Uses for Top-Tier Product Development Solutions
            </h2>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={techSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {advancedProductTechnologies.map((tech) => (
                <div
                  key={tech.id}
                  className="w-[280px] sm:w-[330px] lg:w-[360px] flex-shrink-0 bg-[#E5F3FC] rounded-xl p-6 sm:p-7 flex flex-col justify-start text-left transition-all duration-200 hover:shadow-md border border-sky-100/60"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-start">
                    <img
                      src={tech.icon}
                      alt={tech.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-2 tracking-tight">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Centered Below) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => scrollTechSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous technologies"
              >
                <ArrowLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={() => scrollTechSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next technologies"
              >
                <ArrowRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 7. MEET EXCEPTIONAL TEAM OF SEASONED EXPERTS */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* SUCCESS STORIES + 4 STAT BOXES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#DDF1FB] text-center font-sans border-t border-cyan-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-700 leading-relaxed font-sans">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: Document Quality Analyzer Website Development */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#E0F2FE] text-[#0284C7] text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/success_stories/redetect.svg"
                  alt="Document Quality Analyzer Website Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Document Quality Analyzer Website Development
              </h3>
            </div>

            {/* Card 2: File Sharing App Development */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/file_sharing_application.svg"
                  alt="File Sharing App Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                File Sharing App Development
              </h3>
            </div>

            {/* Card 3: Data Analytics Website Development */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/data_analytics.svg"
                  alt="Data Analytics Website Development"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Data Analytics Website Development
              </h3>
            </div>
          </div>

          {/* Centered "View All Portfolio" Button */}
          <div className="mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-9 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Colorful Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Purple (23+ Years Experience) */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green (320+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                320+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral (2800+ Satisfied Clients) */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue (Want to start Projects -> Get Estimation) */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <a
                href="#consultation-form"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTORS THRIVING FIREVY'S TOP PRODUCT DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <SectorsThrivingSection
        title="Sectors Thriving Firevy’s Top Product Development Services"
      />

      {/* ========================================================================= */}
      {/* 8. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Digital Product Development" />

      {/* ========================================================================= */}
      {/* 9. ABOUT US STATS */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 10. IMPACT OF CUSTOM PRODUCT DEVELOPMENT FOR BUSINESS SUCCESS */}
      {/* ========================================================================= */}
      <TransformativeImpactSection
        title="Impact Of Custom Product Development for Business Success"
      />

      {/* ========================================================================= */}
      {/* 11. FIREVY CUSTOM SOFTWARE DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <CustomItServicesSection
        title="Firevy Custom Product Development Services"
        subtitle="Firevy product engineers thrive at developing compelling, market-defining applications by utilizing our knowledge of the latest software development frameworks. Firevy provides full-service product development customized to meet your exact market requirements."
      />


      {/* ========================================================================= */}
      {/* 14. TECHNOLOGY STACK THAT FIREVY SOFTWARE DEVELOPERS USE PROFICIENTLY */}
      {/* ========================================================================= */}
      <TechStackProficientGrid
        title="Technology Stack That Firevy Software Developers Use Proficiently"
        rows={productDevelopersTechStack}
      />

      {/* ========================================================================= */}
      {/* 15. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 16. BENEFITS OF PRODUCT DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Product Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Product Development Services streamline engineering lifecycles, eliminate technical debt, and empower rapid, scalable market success:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {productBenefitsData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start text-left border border-slate-100"
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[#0B0F19] text-[18px] sm:text-[19px] leading-[1.3] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.7] font-[400]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 17. COMPREHENSIVE PRODUCT DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title & Subtitle */}
          <div className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive Product Development Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              We have a complete catalog of digital product development services meant to accelerate your growth and market leadership
            </p>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={comprehensiveSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {comprehensiveProductServices.map((service) => (
                <div
                  key={service.id}
                  className="w-[290px] sm:w-[340px] lg:w-[370px] flex-shrink-0 bg-[#E5F3FC] rounded-2xl p-7 sm:p-8 flex flex-col justify-start text-left transition-all duration-200 hover:shadow-md border border-sky-100/60"
                >
                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-[1.7] font-normal">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Centered Below) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => scrollComprehensiveSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous services"
              >
                <ArrowLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={() => scrollComprehensiveSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next services"
              >
                <ArrowRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 18. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 19. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 20. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow
        title="Product Development Process We Follow"
        subtitle="Our agile 6-phase product engineering lifecycle from discovery research and UI/UX prototyping to sprint-based development, automated testing, cloud deployment, and growth optimization."
      />

      {/* ========================================================================= */}
      {/* 21. OUR STORY, THEIR WORDS (VIDEO TESTIMONIALS) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 22. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 23. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 24. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="product development" />

      {/* ========================================================================= */}
      {/* 25. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 26. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 27. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={productDevelopmentFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
      />

      {/* ========================================================================= */}
      {/* 28. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 29. WHAT SETS US APART AS PRODUCT DEVELOPMENT? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Product Development Services?"
        subtitle="Being unique is our quality! Firevy Solutions believes in the engineering principles that give startups and enterprises an edge over competitors. We are a renowned product development organization serving customers with end-to-end support. Our ideation, prototyping, and rapid agile execution stand us one level above the competition."
      />

      {/* ========================================================================= */}
      {/* 30. GET ACCESS TO TOP PRODUCT DEVELOPMENT (CTA BANNER) */}
      {/* ========================================================================= */}
      <section className="relative w-full max-w-full py-9 sm:py-11 bg-[#005D95] text-white text-center font-sans overflow-hidden border-b border-slate-200">
        {/* Background Floating Geometric Circle & Square Overlay Graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[16px] border-white/10 opacity-70" />
          <div className="absolute top-8 left-16 w-12 h-12 rounded-full bg-white/10 opacity-40" />
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-3xl border-[20px] border-white/10 opacity-50 transform rotate-12" />
          <div className="absolute bottom-6 right-20 w-16 h-16 rounded-2xl bg-white/10 opacity-30" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg lg:text-[20px] font-[600] text-white leading-relaxed">
            Get access to top product development specialists to streamline and transform your enterprise software.
          </p>
          <div>
            <a
              href="#consultation-form"
              className="inline-block bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base px-9 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 31. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />

      {/* ========================================================================= */}
      {/* ANCHOR */}
      {/* ========================================================================= */}
      <div id="consultation-form" />
    </div>
  );
};

export default ProductDevelopmentService;
