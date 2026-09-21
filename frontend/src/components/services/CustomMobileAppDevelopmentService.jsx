import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import {
  Code,
  Smartphone,
  ShieldCheck,
  Cpu,
  Zap,
  Layers,
  Award,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Check,
  Sparkles,
  Globe,
  Settings,
  RefreshCw,
  Bug,
  Layout,
  Lock,
  Boxes
} from 'lucide-react';

// Technology Stack Vector Outline Icons
const TechBackendIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 24 6 L 31 10 L 24 14 L 17 10 Z" />
    <path d="M 17 10 V 17 L 24 21 V 14" />
    <path d="M 31 10 V 17 L 24 21" />
    <path d="M 16 20 L 23 24 L 16 28 L 9 24 Z" />
    <path d="M 9 24 V 31 L 16 35 V 28" />
    <path d="M 23 24 V 31 L 16 35" />
    <path d="M 32 20 L 39 24 L 32 28 L 25 24 Z" />
    <path d="M 25 24 V 31 L 32 35 V 28" />
    <path d="M 39 24 V 31 L 32 35" />
  </svg>
);

const TechFrontendIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="28" rx="4" />
    <line x1="6" y1="16" x2="42" y2="16" />
    <circle cx="11" cy="12" r="1.2" fill="currentColor" />
    <circle cx="15" cy="12" r="1.2" fill="currentColor" />
    <circle cx="19" cy="12" r="1.2" fill="currentColor" />
    <rect x="11" y="21" width="10" height="10" rx="2" />
    <line x1="25" y1="22" x2="37" y2="22" />
    <line x1="25" y1="26" x2="37" y2="26" />
    <line x1="25" y1="30" x2="33" y2="30" />
  </svg>
);

const TechDatabaseIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="24" cy="12" rx="15" ry="6" />
    <path d="M 9 12 V 22 C 9 25.3 15.7 28 24 28 C 32.3 28 39 25.3 39 22 V 12" />
    <path d="M 9 22 V 32 C 9 35.3 15.7 38 24 38 C 32.3 38 39 35.3 39 32 V 22" />
  </svg>
);

const TechDevopsIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 12 18 L 24 12 L 36 18 L 24 24 Z" />
    <path d="M 12 18 V 34 L 24 40 V 24" />
    <path d="M 36 18 V 34 L 24 40" />
    <path d="M 12 18 L 6 12 L 18 6 L 24 12" />
    <path d="M 36 18 L 42 12 L 30 6 L 24 12" />
  </svg>
);

const TechTestingIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="18" r="11" />
    <path d="M 18 18 L 22 22 L 30 14" strokeWidth="2.5" />
    <path d="M 17 28 L 14 42 L 24 37 L 34 42 L 31 28" />
  </svg>
);

const TechProjectManagementIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="7" />
    <path d="M 24 6 V 11 M 24 37 V 42 M 6 24 H 11 M 37 24 H 42 M 11.3 11.3 L 14.8 14.8 M 33.2 33.2 L 36.7 36.7 M 11.3 36.7 L 14.8 33.2 M 33.2 14.8 L 36.7 11.3" strokeWidth="2.5" />
  </svg>
);

export const CustomMobileAppDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Custom Squad',
    appType: 'Custom Mobile App Development',
    budget: '$20,000 - $50,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Expertise In Our Custom App Development Services (6 cards with copy-to-copy icons & hover fill animation)
  const customAppExpertiseCards = [
    {
      title: 'Android And IOS Apps',
      desc: 'Hire custom app developers to produce native applications to engage your mobile consumers. Our mobile app developers can create high-quality native applications for the entire Android and iOS product catalogs.',
      iconSrc: '/images/icons/custom_expertise/icon1_android_ios.png'
    },
    {
      title: 'Cross-Platform And Hybrid App Development',
      desc: 'Do you need Custom Mobile App Development Services in Canada? Our mobile app developers can create cross-platform and hybrid applications so that you don’t have to rewrite the code every time you use the app.',
      iconSrc: '/images/icons/custom_expertise/icon2_cross_platform.png'
    },
    {
      title: 'Enterprise Mobility Services',
      desc: 'Our Custom Mobile App Development Services in the UAE are targeted to your company’s entire business strategy, so you can be confident that the plan we create will meet your firm’s specific requirements.',
      iconSrc: '/images/icons/custom_expertise/icon3_enterprise.png'
    },
    {
      title: 'Legacy Platform Updating',
      desc: 'User needs, app stores, and technology surrounding the mobile world are constantly evolving. Our custom app builders have extensive expertise in upgrading all mobile applications. We may rebuild the interface or enhance the UX as a whole to satisfy customer requirements.',
      iconSrc: '/images/icons/custom_expertise/icon4_legacy.png'
    },
    {
      title: 'Wearable Apps',
      desc: 'We provide Custom Mobile App Development Services in Australia that are suitable for every platform regardless of its intended audience or whether the end user prefers iOS or Android. Our wearable apps are easy to use, interactive and very user-friendly.',
      iconSrc: '/images/icons/custom_expertise/icon5_wearable.png'
    },
    {
      title: 'UX Design',
      desc: 'We may accept that our attention must be on the whole experience of the end-user, who values not just the functioning of a product but also the experience. You can rely on our app developers to help you build your user experience and provide your mobile customers with the highest level of happiness.',
      iconSrc: '/images/icons/custom_expertise/icon6_ux_design.png'
    }
  ];

  // Technology Stack Cards matching reference screenshot 1:1
  const techStackCards = [
    {
      title: 'Backend',
      icon: TechBackendIcon,
      col1: ['.NET', 'Java', 'PHP'],
      col2: ['Node', 'Ruby on Rails']
    },
    {
      title: 'Front End',
      icon: TechFrontendIcon,
      col1: ['Java', 'RxJava', 'Coroutines Kotlin'],
      col2: ['Kotlin', 'RxKotlin']
    },
    {
      title: 'Database',
      icon: TechDatabaseIcon,
      col1: ['SQLite', 'CoreData'],
      col2: ['Realm', 'Firebase']
    },
    {
      title: 'DevOps',
      icon: TechDevopsIcon,
      col1: ['CI/CD'],
      col2: ['GitHub Actions']
    },
    {
      title: 'Testing',
      icon: TechTestingIcon,
      col1: ['Appium', 'BrowserStack', 'Katalon Test Studio'],
      col2: []
    },
    {
      title: 'Project Management Tools',
      icon: TechProjectManagementIcon,
      col1: ['Jira', 'Slack'],
      col2: ['Microsoft Teams', 'Trello']
    }
  ];

  // Benefits of Custom Mobile App Development
  const benefitsItems = [
    {
      title: 'Tailored To Your Business Workflows',
      desc: 'Custom mobile apps are purpose-built around your unique business operations, customer journeys, and backend architectures, completely eliminating the limitations of off-the-shelf software.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="13" height="11" rx="2" />
          <rect x="9" y="8" width="13" height="13" rx="2" />
          <path d="M13 15l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Complete IP & Code Ownership',
      desc: 'You maintain 100% intellectual property ownership of your entire codebase, database designs, and custom proprietary algorithms with zero vendor lock-in or licensing fees.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'High Scalability & Performance',
      desc: 'Engineered from ground up to handle exponential traffic surges, massive concurrent user loads, and seamless feature expansions without performance degradation.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      title: 'Seamless Third-Party API Integration',
      desc: 'Seamlessly interface with enterprise ERPs, CRMs, legacy databases, payment gateways, and custom microservices to create a fully unified mobile ecosystem.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Implement customized zero-trust security postures, end-to-end data encryption, multi-factor biometric authentication, and strict compliance with HIPAA, GDPR, and PCI-DSS.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Competitive Market Advantage',
      desc: 'Introduce pioneering proprietary features and fluid user experiences that set your brand distinctly apart from competitors using generic cookie-cutter applications.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <img src="/images/ic_fixed_price.svg" alt="Fixed Price" className="w-12 h-12 object-contain" />
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
        <img src="/images/ic_time_material.svg" alt="Time Material" className="w-12 h-12 object-contain" />
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
        <img src="/images/ic_full_time.svg" alt="Dedicated Team" className="w-12 h-12 object-contain" />
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
        <img src="/images/bucketapproch.svg" alt="Buckets Approach" className="w-12 h-12 object-contain" />
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // Custom Mobile App Expertise Cards
  const customExpertiseCards = [
    {
      id: 1,
      title: 'Bespoke iOS & Android Engineering',
      desc: 'We craft customized mobile applications that adhere specifically to platform capabilities, utilizing modern Swift, SwiftUI, Kotlin, and Jetpack Compose for peak execution.'
    },
    {
      id: 2,
      title: 'Custom Cross-Platform & Hybrid Apps',
      desc: 'Deploy high-velocity custom applications engineered in Flutter and React Native with unified single-codebase architectures tailored for multi-platform reach.'
    },
    {
      id: 3,
      title: 'Enterprise Mobility Integration',
      desc: 'Integrate your bespoke mobile apps with enterprise microservices, Oracle ERP, Salesforce, AWS Cloud, and on-premise relational data engines with zero friction.'
    },
    {
      id: 4,
      title: 'Custom UI/UX & Interaction Design',
      desc: 'Our specialized design lab constructs user-centered wireframes and dynamic design systems that foster maximum user retention and engagement.'
    },
    {
      id: 5,
      title: 'AI & Machine Learning Capabilities',
      desc: 'Embed on-device ML models, computer vision, smart recommendation engines, and natural language processing into your mobile applications.'
    },
    {
      id: 6,
      title: 'Custom IoT & Hardware Connectivity',
      desc: 'Direct communication with custom Bluetooth Low Energy (BLE) beacons, sensors, wearables, smart meters, and connected smart home devices.'
    },
    {
      id: 7,
      title: 'Continuous DevOps & SLA Support',
      desc: 'Complete post-launch maintenance, automated testing pipelines, performance benchmarking, crash analytics, and guaranteed response SLAs.'
    }
  ];

  // Custom Mobile App FAQs
  const customFaqs = [
    {
      q: '1. What is custom mobile app development?',
      a: 'Custom mobile app development is the process of designing and building mobile applications tailored specifically to meet your organization’s distinct business requirements, workflows, and target audience needs rather than using ready-made off-the-shelf software.'
    },
    {
      q: '2. What are the key benefits of building a custom mobile app?',
      a: 'Custom mobile applications give you complete ownership of your intellectual property, superior security and compliance, personalized user experiences, limitless scalability, and seamless integration with existing enterprise tools and databases.'
    },
    {
      q: '3. Which platforms do you build custom mobile apps for?',
      a: 'We build custom applications for Apple iOS (iPhones & iPads), Android smartphones and tablets, watchOS wearables, and cross-platform mobile environments using Swift, Kotlin, Flutter, and React Native.'
    },
    {
      q: '4. How do you protect our proprietary project ideas and data?',
      a: 'We sign strict Non-Disclosure Agreements (NDAs) before discussing any project details. All source code, designs, and intellectual assets remain 100% your property upon project completion.'
    },
    {
      q: '5. Do you handle app store approvals and deployments?',
      a: 'Yes! We manage the complete submission process on the Apple App Store and Google Play Store, ensuring strict adherence to developer guidelines, privacy regulations, and store optimization.'
    },
    {
      q: '6. Can custom mobile apps integrate with our existing backend or ERP?',
      a: 'Yes. Our senior architects specialize in designing robust RESTful and GraphQL APIs, WebSockets, and secure connectors for platforms like Oracle, SAP, Salesforce, Microsoft 365, and custom backend databases.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Custom Mobile App Development Company in USA | Firevy.co"
        description="Leading Custom Mobile App Development Company in USA. We have a team of skilled custom app developers who are well-versed in creating custom applications. Connect with us today!"
        canonical="/services/custom-mobile-app-development"
      />

      {/* 1. HERO SECTION (1:1 Reference Match to Sapphire Screenshot) */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#EEF5FB] text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-200/60">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[800] text-slate-900 tracking-tight leading-[1.18] max-w-xl font-sans">
                Custom Mobile App Development Company in USA
              </h1>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-lg font-sans">
                We have a team of skilled custom app developers who are well-versed in creating custom applications. Connect with us today to get your free quote!
              </p>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#005573] text-white font-[700] text-sm sm:text-base transition-all shadow-md hover:shadow-lg group font-sans gap-2"
                >
                  <span>Discuss Your Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Graphic (1:1 Reference Match) */}
            <div className="lg:col-span-6 flex justify-center relative py-4">
              <div className="relative w-full max-w-[540px] flex items-center justify-center">
                <img
                  src="/images/custom_mobile_hero.png"
                  alt="Custom Mobile App Development Company in USA"
                  className="w-full max-w-[500px] h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* 3. SECTION: Affordable Custom Mobile Application Development Services (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Phone Illustration with 2 Developers */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/native_hero_illustration.png"
                  alt="Affordable Custom Mobile Application Development Services"
                  className="w-full h-auto max-w-[460px] object-contain"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Affordable Custom Mobile Application Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                It would help if you had a team of mobile app developers that would immerse themselves in your company environment and market. After all, this is the essence of custom mobile app development. Custom iOS and Android app development company in USA with UX/UI designers and engineers adapt custom app development services to customer's specific needs and objectives, including Oracle, Printique, and Takeda, for over a decade, delivering award-winning apps for millions of mobile users. And now, you can use this knowledge to expedite your mobile app development. Whether you want Android or iOS app development services or augmented reality integration, our experts can help you bring your mobile concept to life.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Brief About Custom App Development Services (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white text-left border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Custom App Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                USA-based Mobile App Development Agency provide enterprise-specific mobile apps with robust connectivity to optimize your operations. You can transform record-keeping systems into engagement systems and create user interactions that are more complex, intuitive, and simple.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                With our intelligent applications, you can create next-generation user experiences that fit today's digital requirements. As an Affordable Custom Mobile App Development Company in USA, we deliver high-quality solutions tailored to your business needs.
              </p>
            </div>

            {/* Right Column: Brief Solutions Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/custom_mobile_brief.png"
                  alt="Brief About Custom App Development Services"
                  className="w-full h-auto max-w-[460px] object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. SECTION: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
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
                  {/* Badge 1: Golden Trophy with Laurel Wreath */}
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

                  {/* Badge 2: The Manifest */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 3: The Manifest */}
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 4: GoodFirms */}
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 5: The Manifest */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 6: Clutch */}
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

      {/* 6. SECTION: Get 100% Customizable Custom App Development Services (1:1 Reference Match) */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Custom App Development Services
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
                Sophisticated And Easily-Adapted Solutions
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Since mobile devices have taken the globe by storm, demand for custom mobile app development services has skyrocketed. Each Best custom Mobile App Developers in USA, from startups to large corporations, felt compelled to develop an innovative app for its customers. It became apparent that it might promote consumer involvement, aid in promoting goods and services, improve customer service, and much more. However, Hire Mobile App Developers in USA to get all of these advantages, it became clear that you could not rely on Enterprise Mobile App Development in USA.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Get Custom Mobile App Development Services in USA from us that are compatible with the Android and iOS stores. You can avail our Custom Mobile App Development Services to develop solutions for smartphones and tablets and more. We are well known among people for developing customized applications that are intuitive, reliable and scalable. As the Best Custom Mobile App Development Company in USA, we bring the same level of expertise and quality to our global clients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 8. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* 8.5 SECTION: Expertise In Our Custom App Development Services */}
      <section className="py-16 sm:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Expertise In Our Custom App Development Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto leading-relaxed">
              Our custom app developers have years of experience and technical knowledge. Some of our expertise includes:
            </p>
          </div>

          {/* 6 Interactive Cards Grid (3 Columns x 2 Rows with Hover Fill & Animated Borders) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1280px] mx-auto items-stretch mb-12">
            {customAppExpertiseCards.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-[14px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,95,150,0.14)] transition-all duration-500 ease-out overflow-hidden group cursor-pointer flex flex-col justify-start hover:-translate-y-1.5 select-none text-left"
              >
                {/* Smooth Hover Gradient Fill Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E2F4FD] via-[#D2F0FD] to-[#BCE9FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                {/* Top Animated Gradient Accent Border (Deep Blue -> Cyan) */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#004A75] via-[#0070B3] to-[#38BDF8] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out" />

                {/* Bottom Animated Gradient Accent Border (Cyan -> Deep Blue) */}
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0070B3] to-[#004A75] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-right transition-all duration-500 ease-out" />

                {/* Card Content (Relative z-10 to stay crisp above hover layer) */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.iconSrc}
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-xs"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[17px] sm:text-[18.5px] font-[800] text-[#0B0F19] transition-colors duration-300 mb-2.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[13px] sm:text-[14px] text-[#475569] group-hover:text-slate-700 leading-[1.65] font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Button (Get A Free Quote For Your Project) */}
          <div className="text-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[15px] transition-all shadow-sm hover:shadow-md"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* 10. SECTION: Proud Awards */}
      <ProudAwardsBanner />

      {/* 11. SECTION: Benefits of Custom Mobile App Development */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Benefits of Custom Mobile App Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              Custom Mobile App Development Services provide tailored architectures that power sustainable business growth. Benefits of Custom Mobile App Development:
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#EBF6FC] text-[#0084D1] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
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



      {/* 12. SECTION: Business Friendly Hiring Models */}
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
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
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
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#quote-form"
                  className="w-full py-2.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm transition-all shadow-xs hover:shadow-md font-sans inline-block mt-4 text-center cursor-pointer"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 13. SECTION: Innovative Solutions */}
      <InnovativeSolutionsVideoSection />

      {/* 14. SECTION: Process We Follow */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from custom UX wireframes to agile sprint compilation, QA testing, and App Store deployment."
      />

      {/* 15. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 16. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 17. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* 18. SECTION: Technology Stack */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100 overflow-hidden">
        <Container>
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
              Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
              We use the latest Smart contracts development technology and process to make sure we deliver the best. Have a look at our technology stack:
            </p>
          </div>

          {/* 6 Soft Blue Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techStackCards.map((card, idx) => {
              const IconComp = card.icon;

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#EFF7FE] border border-blue-100/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start h-full space-y-5"
                >
                  {/* Header: Icon + Title */}
                  <div className="flex items-center space-x-3.5">
                    <div className="shrink-0">
                      <IconComp />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* 2-Column Bullet List */}
                  <div className="grid grid-cols-2 gap-x-4 text-sm sm:text-[14.5px] text-[#475569] font-normal leading-relaxed font-sans">
                    <div className="space-y-2">
                      {card.col1.map((item, i) => (
                        <div key={i} className="flex items-baseline space-x-1.5">
                          <span className="text-[#0073B5] font-semibold">-</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {card.col2.map((item, i) => (
                        <div key={i} className="flex items-baseline space-x-1.5">
                          <span className="text-[#0073B5] font-semibold">-</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 19. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 20. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 21. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={customFaqs} />

      {/* 22. SECTION: Our Recent Blogs */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Our Recent Blogs
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Read our latest engineering insights, custom mobile architecture breakdowns, and enterprise app best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_1.png"
                  alt="Custom vs Off-The-Shelf Mobile Apps: The 2024 Guide"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Custom vs Off-The-Shelf Mobile Apps: The 2024 Guide
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Understand the long-term ROI, security, and scalability advantages of building tailor-made mobile applications.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_2.png"
                  alt="Architecting Enterprise APIs for Custom Mobile Ecosystems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Architecting Enterprise APIs for Custom Mobile Ecosystems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Best practices for high-speed data synchronization, GraphQL endpoints, and resilient offline caching.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_3.png"
                  alt="Custom Mobile App Security: OWASP Compliance Standards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Custom Mobile App Security: OWASP Compliance Standards
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Hardening your bespoke mobile applications with hardware encryption, certificate pinning, and biometrics.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 24. SECTION: Have Custom Mobile App Development Challenge To Address ?? */}
      <section className="relative w-full max-w-full py-10 sm:py-12 lg:py-14 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
          <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />
          <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
          <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3.5">
          <h2 className="text-white tracking-tight font-[800] text-2xl sm:text-3xl lg:text-[34px] leading-tight">
            Have Custom Mobile App Development Challenge To Address ??
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Custom Mobile App development specialists to transform your unique vision into a market-leading application.
          </p>

          <div className="pt-3">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-bold text-xs sm:text-sm px-8 py-2.5 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomMobileAppDevelopmentService;
