import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';
import IWatchWhatSetsUsApartSection from './IWatchWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';

export const SymfonyDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // 6 Expertise Items for Symfony Development
  const expertiseItems = [
    {
      title: 'Custom Symfony Web Development',
      desc: 'Brands can optimize their return on investment and improve performance with bespoke Symfony application development. We tailor web applications to your exact enterprise specifications with clean MVC architecture.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Symfony Support And Maintenance',
      desc: 'We not only develop high-quality programs for Symfony, but we also provide support on a technical level. Our customer service and maintenance departments are accessible at any time of day or night.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M15 11a3 3 0 0 0-6 0" />
        </svg>
      )
    },
    {
      title: 'API & Microservices Architecture',
      desc: 'Our primary goal is to provide Symfony applications with RESTful and GraphQL API Platform endpoints. Our scalable microservices keep enterprise platforms robust and interconnected.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <circle cx="12" cy="12" r="4" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
        </svg>
      )
    },
    {
      title: 'Security & Enterprise Compliance',
      desc: 'We go to great lengths to guarantee that any possible intruders are prevented from accessing private data. Authentication, Doctrine ORM encryption, and back-end network connections are all safeguarded.',
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10 11V9a2 2 0 1 1 4 0v2" />
        </svg>
      )
    },
    {
      title: 'Symfony Version Upgrades (v6/v7)',
      desc: 'App upgrades offer greatness for your company. Our team of highly skilled Symfony developers will upgrade legacy v2/v3/v4/v5 projects to modern LTS releases safely.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Optimization & Issue Resolution',
      desc: 'We do exhaustive testing to ensure your Symfony backend is of the highest possible quality. Eliminating technical bottlenecks and optimizing query performance ensures uninterrupted speed.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Symfony Development
  const benefitsItems = [
    {
      title: 'High Modular Flexibility',
      desc: 'Symfony standalone reusable components allow rapid development of custom modules without bloating the core backend code.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Better Customer Experience',
      desc: 'Blazing fast API responses and seamless frontend integration deliver smooth user journeys across web and mobile touchpoints.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: 'Robust Security Standards',
      desc: 'Built-in protection against CSRF, SQL injection, XSS, and granular role-based access control (RBAC) safeguard corporate data.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <path d="M10 10h4M12 8v4" />
        </svg>
      )
    },
    {
      title: 'Long-Term Support & Stability',
      desc: 'Symfony 3-year LTS releases ensure long-term stability and security patches without breaking existing API integrations.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    },
    {
      title: 'New Revenue Streams',
      desc: 'Monetize backend services through robust API subscriptions, e-commerce integrations, and high-volume transaction processing.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Competitive Market Advantage',
      desc: 'Leverage modern PHP 8.3 features, JIT compilation, and Doctrine ORM for superior backend throughput over competitors.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models (COPY TO COPY EXACT COPY FROM IWATCH)
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#8b5cf6] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 12 C16 7, 24 6, 31 12" />
          <path d="M17 14 H31" strokeWidth="2" />
          <path d="M18 16 H30" />
          <path d="M18 16 C11 21, 9 34, 15 40 C18 43, 30 43, 33 40 C39 34, 37 21, 30 16 Z" />
          <line x1="24" y1="22" x2="24" y2="35" strokeWidth="1.8" />
          <path d="M27 25 C27 23, 21 23, 21 28 C21 33, 27 32, 27 35 C27 38, 21 38, 21 35" strokeWidth="1.8" />
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#22c55e] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 5 H28" strokeWidth="2" />
          <line x1="24" y1="5" x2="24" y2="9" strokeWidth="1.8" />
          <circle cx="27" cy="27" r="14" />
          <circle cx="27" cy="27" r="1" fill="currentColor" />
          <line x1="27" y1="27" x2="21" y2="21" strokeWidth="1.8" />
          <line x1="27" y1="27" x2="32" y2="22" strokeWidth="1.8" />
          <line x1="5" y1="18" x2="10" y2="18" strokeWidth="1.6" />
          <line x1="3" y1="24" x2="9" y2="24" strokeWidth="1.6" />
          <line x1="5" y1="30" x2="10" y2="30" strokeWidth="1.6" />
          <circle cx="8" cy="35" r="0.8" fill="currentColor" />
        </svg>
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#f97316] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Front Person */}
          <circle cx="17" cy="15" r="5.5" />
          <path d="M15 23 C15 25, 19 25, 19 23" />
          <path d="M9 32 C9 24, 25 24, 25 32" />
          <line x1="9" y1="32" x2="25" y2="32" />
          <line x1="9" y1="32" x2="9" y2="35" />
          <line x1="13" y1="32" x2="13" y2="35" />

          {/* Middle Person */}
          <circle cx="27" cy="17" r="4.8" />
          <path d="M22 32 C22 27, 35 27, 35 32" />

          {/* Back Person */}
          <circle cx="35" cy="19" r="4" />
          <path d="M31 32 C31 29, 41 29, 41 32" />
        </svg>
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#0284c7] mx-auto transition-transform duration-300 group-hover:scale-110" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Curved Arrow */}
          <path d="M13 22 C15 12, 27 7, 35 7" />
          <polyline points="31 9 35 7 34 3" strokeWidth="1.8" />

          {/* Main Big Gear */}
          <circle cx="18" cy="30" r="7" />
          <circle cx="18" cy="30" r="2.5" />
          <line x1="18" y1="21" x2="18" y2="23" />
          <line x1="18" y1="37" x2="18" y2="39" />
          <line x1="9" y1="30" x2="11" y2="30" />
          <line x1="25" y1="30" x2="27" y2="30" />
          <line x1="11.6" y1="23.6" x2="13" y2="25" />
          <line x1="23" y1="35" x2="24.4" y2="36.4" />
          <line x1="11.6" y1="36.4" x2="13" y2="35" />
          <line x1="23" y1="25" x2="24.4" y2="23.6" />

          {/* Medium Gear */}
          <circle cx="32" cy="18" r="4.5" />
          <circle cx="32" cy="18" r="1.8" />
          <line x1="32" y1="12" x2="32" y2="13.5" />
          <line x1="32" y1="22.5" x2="32" y2="24" />
          <line x1="26" y1="18" x2="27.5" y2="18" />
          <line x1="36.5" y1="18" x2="38" y2="18" />

          {/* Small Gear */}
          <circle cx="37" cy="10" r="2.8" />
          <line x1="37" y1="6" x2="37" y2="7.2" />
          <line x1="37" y1="12.8" x2="37" y2="14" />
          <line x1="33" y1="10" x2="34.2" y2="10" />
          <line x1="39.8" y1="10" x2="41" y2="10" />
        </svg>
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: 'Symfony 7 & PHP 8.3', desc: 'Modern PHP 8.3 framework delivering high-performance backend architecture.' },
      { name: 'Doctrine ORM', desc: 'Powerful object-relational mapping for secure, scalable database management.' },
      { name: 'API Platform', desc: 'REST and GraphQL hypermedia API framework built on top of Symfony components.' }
    ],
    frontend: [
      { name: 'Twig & Webpack Encore', desc: 'Flexible templating engine and modern asset compilation integration.' },
      { name: 'React & Vue Integration', desc: 'Seamless headless frontend integration via decoupled Symfony REST endpoints.' }
    ],
    database: [
      { name: 'PostgreSQL & MySQL', desc: 'Enterprise relational database design optimized with Doctrine migrations.' }
    ],
    devops: [
      { name: 'Docker & AWS Cloud', desc: 'High-availability containerized deployment pipeline with automated CI/CD.' }
    ],
    testing: [
      { name: 'PHPUnit & Behat', desc: 'Comprehensive unit, integration, and BDD testing suites for zero-downtime releases.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent sprint planning with dedicated senior Symfony backend engineers.' }
    ]
  };

  // Official Symfony FAQs
  const symfonyFaqs = [
    {
      q: '1. What is Symfony development?',
      a: 'Symfony development involves building enterprise-grade PHP web applications, RESTful APIs, and microservices using the modular Symfony framework and Doctrine ORM for maximum security and scalability.'
    },
    {
      q: '2. Can Symfony be integrated with React or Vue frontends?',
      a: 'Yes! Symfony provides native API Platform support to build decoupled GraphQL or RESTful backends that connect seamlessly with React, Vue, Angular, or mobile frontends.'
    },
    {
      q: '3. How do you optimize battery and server performance in Symfony applications?',
      a: 'We strictly optimize backend performance by utilizing HTTP caching, Redis session stores, Doctrine query optimization, and Varnish HTTP accelerator.'
    },
    {
      q: '4. Do you assist with legacy Symfony version upgrades?',
      a: 'Yes! We handle full code audits and upgrade paths from legacy Symfony 2.x/3.x/4.x/5.x releases up to the latest Symfony 6.x and 7.x LTS versions.'
    },
    {
      q: '5. Do you assist with cloud deployment and DevOps?',
      a: 'Yes! We manage complete Docker containerization, AWS/GCP cloud setup, CI/CD pipeline automation, and zero-downtime deployments.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict non-disclosure agreements before initial discovery calls to ensure 100% confidentiality and full source code IP ownership.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen overflow-x-hidden">
      <SEO
        title="Symfony Development Company USA | Custom Symfony Solutions | Firevy.Co"
        description="Top Symfony Development Company. Build custom enterprise web applications, RESTful APIs, microservices, and high-performance PHP solutions with Firevy.Co."
        canonical="/services/symfony-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Symfony Development Services in USA"
        subtitle="As a Best Symfony development company, we can design robust, secure, and enterprise-level apps with the aid of Symfony, the most outstanding PHP web development framework available."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        heroImage="/images/symfony_hero_illustration.svg"
        serviceCategory="symfony"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* SECTION 2: Get Customized And Affordable Symfony Development Services */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/symfony_section2_illustration.svg"
                  alt="Get Customized And Affordable Symfony Development Services"
                  className="w-full h-auto max-w-[460px] object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Get Customized And Affordable Symfony Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                It is a free and open-source framework that utilizes the Model-View-Controller architectural pattern as its foundation. Our Affordable Symfony web app development company provides Best Symfony development services offering individualized and flexible services to its clients. Our objective is to bring the development of online and Custom Symfony web application development into the present era by supplying code of PHP components and performing maintenance on web applications. Enterprise Symfony development agency is an excellent option for developing any online application. It comprises various efficient tools that make it easier to record the project and address faults.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: Brief About Symfony Development */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Symfony Development
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Symfony offers developers a great deal of simplicity thanks to its many valuable features. Hire Symfony Developers for Web Application to use the combination of these qualities resulting in increased productivity, leading to quicker and more error-free software development. All versions of the Symfony framework provide applications written using the framework with rock-solid stability and long-term sustainability
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our Top Symfony Development Services Provider are interoperable with various database management systems. With an efficient approach, Enterprise Symfony development agency in USA makes it possible to simplify tasks and accelerate your digital transformation journey.
              </p>
            </div>

            {/* Right Column: Brief Solutions Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/symfony_section3_illustration.svg"
                  alt="Brief About Symfony Development"
                  className="w-full h-auto max-w-[460px] object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: World Wide Top Rated IT Company on Clutch */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                {/* Track 2 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Get 100% Customizable Symfony Web-Based Apps */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Get 100% Customizable Symfony Web-Based Apps
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Quote Card Box */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-2xl bg-[#EFF7FC] border border-blue-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[300px]">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path d="M0 100 C100 50, 200 150, 400 100 M0 200 C150 150, 250 250, 400 200 M0 300 C100 250, 300 350, 400 300" stroke="#005F96" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                <div className="relative z-10 text-[#005F96] mb-4">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-[800] text-[#005F96] leading-tight">
                    Scalable And Robust Symfony Apps
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As a Symfony development company, Hire expert Symfony Web Developers who are always one step ahead of the learning curve when adopting new technology. Our software engineers are well-versed in the Symfony framework suite of tools and APIs, enabling them to create completely functional enterprise applications tailored exclusively for your business.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We know that applications designed for Symfony must feature a user-friendly and engaging interface. In addition to our <strong className="text-[#005F96] font-bold">custom web application development services</strong>, we also provide value-added services to design, create a framework for, assess, and launch potential expansions for Symfony applications.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our Symfony Development Services (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              The Expertise Of Our Symfony Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our Symfony developers have years of experience in custom web development. Other expertise are:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 sm:mb-12"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="expertise-hover-card p-7 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-[12px] ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-[15px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* SECTION: Benefits Of Symfony Development (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Benefits Of Symfony Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can improve user experience and market reach by developing applications with Symfony framework. Six significant advantages are:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Business Friendly Hiring Models (1:1 COPY TO COPY Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          {/* 4 White Hiring Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[20px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-[400] leading-relaxed font-sans text-center">
                    {item.desc}
                  </p>

                  {/* Bullet Points List with Blue Checkmarks */}
                  <ul className="space-y-2 pt-2 text-left font-sans text-xs sm:text-[13px] text-slate-700 font-[600]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0284c7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Hire Now' Dark Blue Button */}
                <a
                  href="#quote-form"
                  className="w-full py-3 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-sm transition-all shadow-md hover:shadow-lg font-sans inline-block mt-4"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SECTION: Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from Symfony architecture wireframes to backend SDK development, UAT, and cloud deployment." />

      {/* SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="symfony app" richTechCategories={techCategories} />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* SECTION 5: Frequently Asked Questions */}
      <SapphireFaqSection faqList={symfonyFaqs} />

      {/* SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <IWatchWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Symfony Development Challenge To Address ?"
        subtitle="Get access to top Symfony Development team to transform your ideas into a robust web application."
      />
    </div>
  );
};

export default SymfonyDevelopmentService;
