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
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';

export const IotDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Chatbot Squad',
    appType: 'Custom Chatbot Application Development',
    budget: '$15,000 - $40,000',
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

  // 6 Benefits of IoT App Development Services
  const benefitsItems = [
    {
      title: 'Links and Integration',
      desc: 'Companies can use IoT App Development Services to link and integrate a variety of devices, sensors, and systems to create a real-time data network. Automate processes, improve resource use and simplify operations via IoT connection.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="10" width="16" height="16" rx="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="18" y1="2" x2="18" y2="10" />
          <line x1="18" y1="26" x2="18" y2="34" />
          <line x1="2" y1="18" x2="10" y2="18" />
          <line x1="26" y1="18" x2="34" y2="18" />
          <circle cx="18" cy="4" r="1.5" fill="currentColor" />
          <circle cx="18" cy="32" r="1.5" fill="currentColor" />
          <circle cx="4" cy="18" r="1.5" fill="currentColor" />
          <circle cx="32" cy="18" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Data Analysis',
      desc: 'Companies can use powerful analytics tools and machine learning algorithms to gather, store, and analyze data from connected devices utilizing IoT App Development Services to make data-driven choices and find optimization and innovation possibilities.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="22" height="18" rx="2" />
          <line x1="8" y1="18" x2="8" y2="15" strokeWidth="2.5" />
          <line x1="13" y1="18" x2="13" y2="11" strokeWidth="2.5" />
          <line x1="18" y1="18" x2="18" y2="13" strokeWidth="2.5" />
          <circle cx="23" cy="23" r="6" />
          <line x1="27.5" y1="27.5" x2="33" y2="33" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Manage Remotely',
      desc: 'Remotely monitor and control their assets, equipment, and facilities using IoT App Development Services. Real-time data and insights from connected devices help organizations spot faults, reduce downtime, and optimize performance.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="20" height="14" rx="2" />
          <line x1="4" y1="28" x2="32" y2="28" strokeWidth="2.5" />
          <path d="M14 6a6 6 0 0 1 8 0" />
          <path d="M16 8.5a3 3 0 0 1 4 0" />
          <circle cx="18" cy="17" r="2.5" />
        </svg>
      )
    },
    {
      title: 'Better Customer Service',
      desc: 'IoT helps companies to customize and immerse customers with linked goods and services. To improve customer happiness and loyalty, organizations can use IoT devices to collect real-time data, make targeted suggestions, and give proactive assistance.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="14" r="5" />
          <path d="M10 28c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          <path d="M8 15a10 10 0 0 1 20 0v3a2 2 0 0 1-2 2h-2" />
          <circle cx="22" cy="20" r="1.5" fill="currentColor" />
          <path d="M4 6h8M4 10h5" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Predictive Maintenance',
      desc: 'IoT App Development Services provide predictive maintenance tactics to improve asset performance and reduce downtime. Organizations may increase dependability and save costs by analyzing IoT sensor and device data to detect equipment failures.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="6" width="26" height="18" rx="2" />
          <line x1="12" y1="28" x2="24" y2="28" strokeWidth="2" />
          <line x1="18" y1="24" x2="18" y2="28" strokeWidth="2" />
          <path d="M12 15l3 3 6-6" strokeWidth="2" />
          <path d="M21 12l2-2a2 2 0 0 1 3 3l-2 2" />
        </svg>
      )
    },
    {
      title: 'Innovative',
      desc: 'Innovative and differentiated commercial possibilities arise from IoT technology. Businesses can stand out, seize new market possibilities, and flourish in today\'s fast-changing digital world by using IoT App Development Services to build apps and business models.',
      icon: (
        <svg className="w-10 h-10 text-[#0084D1] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="5" />
          <path d="M18 7v3M18 26v3M7 18h3M26 18h3" />
          <path d="M10.2 10.2l2.1 2.1M23.7 23.7l2.1 2.1M10.2 25.8l2.1-2.1M23.7 12.3l2.1-2.1" />
          <path d="M25 4l7 7-3 3-7-7z" fill="#E0F2FE" />
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
      desc: "If you represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
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

  // Official Chatbot FAQs
  const chatbotFaqs = [
    {
      q: '1. What makes Chatbot development ideal for customer support and lead generation?',
      a: 'AI Chatbots deliver instant 24/7 responses, resolve common customer queries automatically, capture qualified leads, and reduce support operation costs significantly.'
    },
    {
      q: '2. Can Chatbots handle multi-language user interactions simultaneously?',
      a: 'Yes! Our AI chatbots leverage advanced NLP engines and translation models (e.g. OpenAI GPT, Dialogflow) to communicate in 50+ languages automatically.'
    },
    {
      q: '3. Do you handle integration with existing CRMs, ERPs, and databases?',
      a: 'Absolutely! We build custom webhook connections and REST APIs to sync chatbot interactions directly into Salesforce, HubSpot, Zendesk, and internal SQL/NoSQL databases.'
    },
    {
      q: '4. How do you secure user conversation data and privacy?',
      a: 'We implement end-to-end data encryption, OAuth2/JWT authentication, PII masking, and full compliance with GDPR, HIPAA, and SOC-2 privacy standards.'
    },
    {
      q: '5. Do you assist with cloud deployment and omnichannel integration?',
      a: 'Yes! We configure complete cloud serverless deployments, Docker containers, and multi-channel connectors for Web, iOS, Android, WhatsApp, and social channels.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign comprehensive NDAs prior to any technical discovery or project kickoff, ensuring complete confidentiality and 100% IP ownership.'
    }
  ];

  // 6 Cards Expertise for IoT App Developers
  const iotDeveloperExpertise = [
    {
      id: 1,
      title: 'IoT Solution Consulting',
      desc: 'We will help you in developing futuristic and secure IoT apps with ease. With the support of our consulting services as the most acceptable alternative, you can effortlessly harness our knowledge and develop exceptional IoT applications.',
      badgeBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'PoC & Prototype Development',
      desc: 'As an IoT development firm, we provide your business with intuitive PoC and prototype development services to design, visualize and use IoT networks on a small scale. Consequently, it saves you much money and produces a fail-safe solution.',
      badgeBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Industrial IoT Solutions',
      desc: 'We will assist you in establishing the IoT network and developing apps that make dealing with this technology more manageable. Go ahead and automate several jobs in your industrial area with our assistance, and experience everlasting advantages.',
      badgeBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'IoT Firmware Development & Integration',
      desc: 'Using our IoT firmware creation and integration services, you may connect your current IoT networks to modern applications. We will expedite your use of IoT networks by developing robust integrations that operate continuously without interruptions.',
      badgeBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'IoT Mobile & Web Apps',
      desc: 'As a leading IoT app development firm, we focus on creating cutting-edge IoT apps that provide effortless IoT setup management. In addition, we use the most recent mobile and web application development technologies to maintain the accessibility of your IoT network.',
      badgeBg: 'bg-[#FCE7F3]',
      iconColor: 'text-[#DB2777]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'IP Product Development & Integration',
      desc: 'We develop unique devices that meet your specifications and improve the functionality of your IoT networks. If you have a specific product demand for your IoT network, we can translate it into a strategy for making income.',
      badgeBg: 'bg-[#E0F2FE]',
      iconColor: 'text-[#0284C7]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 8 8 12 12 16 16 12 12 8" />
        </svg>
      )
    }
  ];

  // Exact Stats for Chatbot Development
  const chatbotStats = [
    { value: '77+', label: 'Chatbot Engineers' },
    { value: '19+', label: 'Fortune 500 Companies' },
    { value: '583+', label: 'AI Bot Projects Completed' },
    { value: '311+', label: '5-Star Clutch Reviews' }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="IoT App Development Company in USA | Internet of Things Services | Firevy.Co"
        description="The Internet of Things (often abbreviated as IoT) is the name of this vastly linked network of electrical gadgets. Connect with best IoT Development Company to transform your ideas into smart, connected systems."
        canonical="/services/iot-app-development"
      />

      {/* 1. Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="IoT App Development Company in USA"
        subtitle="The Internet of Things (often abbreviated as IoT) is the name of this vastly linked network of electrical gadgets. Connect with best IoT Development Company to transform your ideas into smart, connected systems."
        ctaText="Discuss Your Project →"
        ctaLink="#quote-form"
        serviceCategory="hybrid"
        stats={null}
        heroImage="/images/iot_app_hero_vector.png"
      />

      {/* 2. Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

<<<<<<< HEAD
            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/iot_hero_illustration.jpg"
                  alt="IoT Application Development Company in USA"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. TRUSTED BRAND LOGOS STRIP (Full Width Infinite Auto-Scroll Marquee)
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. BEST IOT APPLICATION DEVELOPMENT COMPANY (Section 2)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
=======
      {/* 3. SECTION: Delivering Affordable IoT Mobile App Development Services (Left Illustration, Right Text) */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
>>>>>>> de1da228f73d1628d167ecd7b54ba719e41f0def
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Smart connected person Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/iot_affordable_solutions_vector.png"
                  alt="Delivering Affordable IoT Mobile App Development Services"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Title & Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Delivering Affordable IoT Mobile App Development Services
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                IoT application development services display a bright future for company possibilities and investment opportunities in Internet of Things Solutions that ease with Custom IoT solutions provider and Smart device app development services which they can be accessed and the endless number of use cases they can support. You can integrate IoT consulting services and elements into your company's operations to expand your user base by providing tailored IoT app development services work with us. We are a Best IoT app development company that design IoT app and are durable and highly functional in IoT Development Services, they have a forward-looking posture that ensures easy user interaction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Brief About IoT App Development (Left Text, Right Illustration) */}
      <section className="py-12 sm:py-16 bg-white font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Title & Text */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-[800] text-[#0B0F19] tracking-tight">
                Brief About IoT App Development
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Bluetooth facilitates direct connections between devices and eliminates the need for a central connection point for all devices. We use Bluetooth Low Energy and intelligent links to connect devices with a range greater than 60 meters (200 feet). This technique allows you to connect offline devices at greater distances. Additionally, it emits fewer Bluetooth signals, which is a bonus.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Zigbee is a communication technology that allows you to establish a low-cost personal area network. We use it to configure devices that need long battery life and must operate in harsh conditions.
              </p>
            </div>

            {/* Right Column: Standing smart home person Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md overflow-hidden">
                <img
                  src="/images/iot_brief_vector.png"
                  alt="Brief About IoT App Development Illustration"
                  className="w-full h-auto object-contain max-h-[380px] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SECTION: World Wide Top Rated IT Company on Clutch */}
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

      {/* 8. SECTION: Get 100% Customizable IoT App Development By Experts */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable IoT App Development By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Intelligent, Compact, and Easy-To-Use Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We provide individualized IoT product development for industrial Internet of Things Solutions that can be included in your company's infrastructure. In this way, you will be able to manage massive amounts of data and enhance your operations to ensure consistent expansion. In addition, IoT cloud integration services, mobility, device, and IoT ecosystem solutions, IoT app development team work together to automate operations and encourage a high degree of user experience (UX).
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                As an Internet of Things Application Development Company, you can set yourself apart from the competition by using our one-of-a-kind solutions, which are data-driven, real-time, and adaptable. You will provide you with agility in the performance of your organization. We will iodized your ideas so that they become genuine business values that have the potential to produce income for you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. SECTION: Cutting Edge Technologies Firevy Use For IoT App Development */}
      <HybridAppCuttingEdgeTechnologiesSection
        title={"Cutting Edge Technologies Firevy Use For\nIoT App Development"}
      />

      {/* 10. SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 17. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* SECTION: The Expertise Of Our IoT App Developers */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] text-slate-900 font-sans text-left border-y border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              The Expertise Of Our IoT App Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
              With The Support Of Our Developers And Product Specialists, We Can Assist You In Creating Future- Proof IoT Apps. Our Expertise Includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {iotDeveloperExpertise.map((item) => (
              <div
                key={item.id}
                className="group rounded-[14px] p-6 sm:p-7 text-left flex flex-col justify-start transition-all duration-300 ease-in-out cursor-pointer bg-white border-t-[3px] border-b-[3px] border-x border-t-transparent border-b-transparent border-x-slate-200/80 hover:bg-gradient-to-b hover:from-[#E6F6FF] hover:via-[#E1F3FD] hover:to-[#D5EEFA] hover:border-t-[#00A8E8] hover:border-b-[#005F96] hover:border-x-[#BAE6FD] hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon Badge */}
                <div className={`w-11 h-11 rounded-[10px] ${item.badgeBg} ${item.iconColor} flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2.5 leading-snug tracking-tight font-sans">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.68] font-normal font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Center Action Button */}
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm sm:text-[15px] transition-all shadow-sm hover:shadow-md cursor-pointer font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* 19. SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* 20. SECTION: Benefits of IoT App Development Services */}
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
              Benefits of IoT App Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
              Through Internet of Things Development Services, organizations can use linked devices and data to innovate and improve efficiency. Investing in IoT App Development have following benefits:
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
                  <div className="mb-2 shrink-0 transition-transform duration-300 group-hover:scale-105">
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

      {/* 22. SECTION: Business Friendly Hiring Models */}
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

      {/* 23. SECTION: Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 24. SECTION: Process We Follow */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from dialogue wireframes to NLP intent architecture, QA testing, and AWS/GCP cloud deployment."
      />

      {/* 25. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 26. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 27. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* Technology Stack Section */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] text-slate-900 font-sans text-left border-y border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
              We use the latest Chatbot development technology and process to make sure we deliver the best. Have a look at our technology stack:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {/* Box 1: Backend & NLP */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="18,3 26,7 18,11 10,7" />
                  <polyline points="10,7 10,14 18,18 18,11" />
                  <polyline points="26,7 26,14 18,18" />
                  <polygon points="10,16 18,20 10,24 2,20" />
                  <polyline points="2,20 2,27 10,31 10,24" />
                  <polyline points="18,20 18,27 10,31" />
                  <polygon points="26,16 34,20 26,24 18,20" />
                  <polyline points="18,20 18,27 26,31 26,24" />
                  <polyline points="34,20 34,27 26,31" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Backend & NLP</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Python</div>
                <div>- Dialogflow</div>
                <div>- OpenAI API</div>
                <div>- Rasa Engine</div>
                <div>- Node.js</div>
              </div>
            </div>

            {/* Box 2: Front End & Widgets */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="30" height="26" rx="3" ry="3" />
                  <line x1="3" y1="12" x2="33" y2="12" />
                  <circle cx="7" cy="8.5" r="1" fill="currentColor" />
                  <circle cx="11" cy="8.5" r="1" fill="currentColor" />
                  <circle cx="15" cy="8.5" r="1" fill="currentColor" />
                  <line x1="13" y1="12" x2="13" y2="31" />
                  <line x1="6" y1="17" x2="10" y2="17" />
                  <line x1="6" y1="21" x2="10" y2="21" />
                  <line x1="6" y1="25" x2="10" y2="25" />
                  <rect x="17" y="16" width="12" height="11" rx="1.5" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Front End & UI</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- React Widget</div>
                <div>- WebSockets</div>
                <div>- Vue.js</div>
                <div>- Flutter SDK</div>
                <div className="col-span-2">- TypeScript</div>
              </div>
            </div>

            {/* Box 3: Database & Vector Search */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="18" cy="8" rx="14" ry="4.5" />
                  <path d="M4 8v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5V8" />
                  <path d="M4 15v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-7" />
                  <path d="M4 22v7c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-7" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Database & Vector</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- PostgreSQL</div>
                <div>- MongoDB</div>
                <div>- Pinecone</div>
                <div>- Redis</div>
              </div>
            </div>

            {/* Box 4: DevOps & Cloud */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 16L18 22L31 16V26L18 32L5 26V16Z" />
                  <line x1="18" y1="22" x2="18" y2="32" />
                  <path d="M5 16L11 8L24 14L18 22Z" />
                  <path d="M31 16L25 8L12 14L18 22Z" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">DevOps & Cloud</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Docker</div>
                <div>- AWS Lambda</div>
                <div>- GCP Cloud Run</div>
                <div>- GitHub Actions</div>
              </div>
            </div>

            {/* Box 5: Testing & Analytics */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="13" r="9" />
                  <path d="M13.5 13l3 3 6-6" strokeWidth="2.2" />
                  <path d="M13 21.5L9 32l5-2.5 4 2.5v-10.5" />
                  <path d="M23 21.5L27 32l-5-2.5-4 2.5v-10.5" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Testing & Analytics</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Botium</div>
                <div className="col-span-2">- Chatbase Analytics</div>
                <div className="col-span-2">- PyTest</div>
              </div>
            </div>

            {/* Box 6: Project Management Tools */}
            <div className="bg-[#EFF6FC]/70 rounded-[14px] p-6 sm:p-7 border border-[#DCEBF6] shadow-xs text-left">
              <div className="flex items-center space-x-3 mb-5">
                <svg className="w-9 h-9 text-[#0078D7] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="5" />
                  <path d="M18 2v4M18 30v4M2 18h4M30 18h4M6.7 6.7l2.8 2.8M26.5 26.5l2.8 2.8M6.7 29.3l2.8-2.8M26.5 9.5l2.8-2.8" />
                  <circle cx="18" cy="18" r="11" />
                </svg>
                <h3 className="font-[800] text-[18px] text-[#0B0F19]">Project Management</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-[13.5px] text-[#475569] font-normal">
                <div>- Jira</div>
                <div>- Microsoft Teams</div>
                <div>- Slack</div>
                <div>- Trello</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 28. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 29. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 30. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={chatbotFaqs} />

      {/* 31. SECTION: Our Recent Blogs */}
      <IWatchRecentBlogsSection />
    </div>
  );
};

export default IotDevelopmentService;
