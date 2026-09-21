import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import OurMobileAppExpertiseServices from './OurMobileAppExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import MobileAppCompanyBenefits from './MobileAppCompanyBenefits';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';

const Windows11CuttingEdgeSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Artificial Intelligence Development Service',
      desc: 'We help businesses integrate AI and intelligent algorithms to personalize user experiences, automate complex workflows, and drive predictive operational intelligence.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="10" width="20" height="20" rx="4" />
          <path d="M15 20h10M20 15v10" strokeLinecap="round" />
          <path d="M16 10V6M24 10V6M16 30v4M24 30v4M10 16H6M10 24H6M30 16h4M30 24h4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Extended Reality Development Service',
      desc: 'Step into the future with Extended Reality Development Services and create immersive experiences that combine augmented reality (AR), virtual reality (VR), and mixed reality (MR) to engage users like never before.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="5" />
          <circle cx="20" cy="8" r="3" />
          <circle cx="20" cy="32" r="3" />
          <circle cx="8" cy="20" r="3" />
          <circle cx="32" cy="20" r="3" />
          <circle cx="11.5" cy="11.5" r="2.5" />
          <circle cx="28.5" cy="11.5" r="2.5" />
          <circle cx="11.5" cy="28.5" r="2.5" />
          <circle cx="28.5" cy="28.5" r="2.5" />
          <path d="M20 11v4M20 25v4M11 20h4M25 20h4" strokeLinecap="round" />
          <path d="M13.5 13.5l3.5 3.5M23 23l3.5 3.5M13.5 26.5l3.5-3.5M23 17l3.5-3.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cross Platform Development Service',
      desc: 'With a few simple changes in code, the cross-platform frameworks enable us to create an app with one time coding and execute it on all platforms, including Windows, iOS, and Android.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 27a13 13 0 1120 0" strokeLinecap="round" />
          <path d="M19 21l6-6M25 15h-4M25 15v4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="22" r="2.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Machine Learning Development Service',
      desc: 'From custom AI applications to enterprise-scale automation, our developers leverage the latest machine learning Development Service and deep learning technologies to solve complex business challenges.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 28c-2.8 0-5-2.2-5-5 0-1.7.9-3.2 2.2-4-.3-.6-.5-1.4-.5-2.1 0-3.1 2.5-5.6 5.6-5.6.5 0 1 .1 1.4.2C17.9 9.3 20 8 22.3 8c3.4 0 6.2 2.5 6.7 5.8 2 .6 3.5 2.5 3.5 4.7 0 1.3-.5 2.5-1.4 3.4.9.9 1.5 2.1 1.5 3.6 0 2.8-2.2 5-5 5" strokeLinecap="round" />
          <circle cx="16" cy="18" r="1.5" fill="#0084D1" />
          <circle cx="24" cy="16" r="1.5" fill="#0084D1" />
          <circle cx="21" cy="22" r="1.5" fill="#0084D1" />
          <path d="M16 18l5 4 3-6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Augmented Reality Development Service',
      desc: 'Engage your audience with interactive Augmented Reality solutions that overlay digital content onto the physical world, creating interactive experiences that boost customer engagement and loyalty.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="6" width="20" height="28" rx="4" />
          <path d="M17 30h6" strokeLinecap="round" />
          <path d="M20 12l4.5 2.6v5.2L20 22.4l-4.5-2.6v-5.2L20 12z" />
          <path d="M20 12v10.4M15.5 14.6l4.5 2.6 4.5-2.6" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Low-Code No-Code Development Service',
      desc: 'Accelerate app development with Low-Code No-Code Development Services, a platform that empowers businesses to create scalable, robust applications quickly without extensive coding.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="4" />
          <path d="M5 14h30M11 10.5h.01M15 10.5h.01M19 10.5h.01" />
          <path d="M16 20l-3 3 3 3M24 20l3 3-3 3M21 19l-2 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Super Apps Development Service',
      desc: 'Redefine digital experiences with Super Apps Development Services. Designed for seamless user experience, these super apps increase engagement, enhance convenience, and drive revenue growth.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="4" />
          <path d="M5 14h30M13 14v19M13 22h22" />
          <rect x="8" y="17" width="3" height="3" rx="0.5" fill="#0084D1" />
          <rect x="8" y="23" width="3" height="3" rx="0.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Progressive Web App Development Service',
      desc: 'Using HTML, CSS, and JavaScript code that runs in web browser engines and is hosted on web servers, we create Progressive Web Apps (PWAs).',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="13" y="6" width="22" height="28" rx="4" />
          <path d="M20 30h8M13 11h22M13 28h22" />
          <circle cx="10" cy="18" r="4" strokeDasharray="3 2" />
          <circle cx="10" cy="18" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 9,
      title: 'Blockchain Development Service',
      desc: 'We provide blockchain development services that will improve your company\'s security and transparency while giving you access to a variety of decentralized alternatives.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 7l11 6.5v13L20 33l-11-6.5v-13L20 7z" />
          <path d="M20 7v26M9 13.5l11 6.5 11-6.5" />
          <circle cx="20" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 10,
      title: 'IoT Integration Development Service',
      desc: 'Discover personalized IoT development services that enable intelligent data analysis and remote device administration tailored to your business needs.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
          <path d="M12 12a11 11 0 0116 0M8 8a17 17 0 0124 0M12 28a11 11 0 0016 0M8 32a17 17 0 0024 0" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 11,
      title: 'Cloud Application Development',
      desc: 'We are the trusted developers who build cutting-edge cloud-native architectures and next-generation apps for Windows enterprise environments.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 28h17a6 6 0 001-11.9 8.5 8.5 0 00-16.5-2.1A6 6 0 0012 28z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 21v6M16 24l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const maxIndex = Math.max(0, technologies.length - 3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden w-full border-b border-slate-100">
      {/* Centered Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies Sapphire Use For Windows 11 App<br className="hidden sm:inline" /> Development
        </h2>
      </div>

      {/* Full-Width Slider / Carousel Track with 2-second auto-scroll */}
      <div
        className="relative overflow-hidden w-full select-none py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex space-x-6 sm:space-x-8 px-4 sm:px-8 lg:px-12 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${carouselIndex * 540}px)`
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="w-[420px] sm:w-[480px] lg:w-[530px] shrink-0 rounded-[14px] bg-[#E1F3FD] p-5 sm:p-6 min-h-[165px] sm:min-h-[175px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
            >
              {/* Top Icon */}
              <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Tech Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-1.5 leading-snug tracking-tight">
                {tech.title}
              </h3>

              {/* Tech Description */}
              <p className="font-normal text-[#334155] text-[12.5px] sm:text-[13px] leading-[1.6]">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Center Navigation Controls */}
      <div className="flex items-center justify-center space-x-5 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          disabled={carouselIndex === 0}
          aria-label="Previous technologies"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={carouselIndex >= maxIndex}
          aria-label="Next technologies"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold"
        >
          →
        </button>
      </div>
    </section>
  );
};

const Windows11DigitalTransformationSection = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const caseStudies = [
    {
      id: 'beecar',
      company: 'Bee Car Care',
      bgColor: '#FAF3DA', // Light golden cream matching screenshot
      logo: (
        <div className="mb-4 flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center shrink-0 shadow-xs">
            <span className="text-amber-400 font-black text-sm">🐝</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-[900] text-amber-500 font-sans">Bee </span>
            <span className="text-xl sm:text-2xl font-[900] text-slate-900 font-sans">Car Care</span>
          </div>
        </div>
      ),
      desc: 'If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Sapphire Software Solutions has built a car wash application that allows people to book our wash services in few clicks.',
      bullets: [
        '55% customer retention rate',
        '62% increase in service bookings',
        'Over 1,10,000 satisfied users',
        'Operating in 10+ locations',
        'User-friendly & Efficient interface for easy booking'
      ],
      mainImg: '/images/case_study_images/Images/new/beecar.webp'
    },
    {
      id: 'lt',
      company: 'Larsen & Toubro',
      bgColor: '#E2F1F8', // Soft Light Blue matching screenshot
      logo: (
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#005F96] flex items-center justify-center font-black text-[#005F96] text-xs bg-white">
              L&T
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-[950] text-[#005F96] font-sans tracking-wide leading-none">
                LARSEN & TOUBRO
              </div>
            </div>
          </div>
        </div>
      ),
      desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing, and retains leadership in all of its primary lines of business, almost 80 years of a strong, customer-focused strategy and a never-ending search for world-class quality...",
      bullets: [
        'Automated safety audits and inspections',
        '24/7 access to safety training resources',
        'Customizable dashboards and reporting tools',
        'Real-time incident reporting and tracking',
        '99% compliance with health and safety regulations'
      ],
      mainImg: '/images/case_study_images/Images/new/l&t.webp'
    },
    {
      id: 'mg',
      company: 'Morris Garages',
      bgColor: '#FDE8E8', // Soft Red/Pink matching screenshot
      logo: (
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#C0392B] flex items-center justify-center font-black text-[#C0392B] text-xs bg-white">
              MG
            </div>
            <div>
              <div className="text-lg sm:text-xl font-[950] text-[#C0392B] font-sans tracking-widest uppercase leading-none">
                MORRIS GARAGES
              </div>
            </div>
          </div>
        </div>
      ),
      desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.",
      bullets: [
        'Real-time health data analytics',
        'HIPAA-compliant data security',
        '24/7 access to health resources and support',
        'Personalized health recommendations',
        '98% improvement in employee health monitoring'
      ],
      mainImg: '/images/case_study_images/Images/new/mg.webp'
    },
    {
      id: 'loreal',
      company: "L'ORÉAL",
      bgColor: '#F3EFE6', // Soft Cream/Beige
      logo: (
        <div className="mb-4">
          <div className="text-2xl sm:text-3xl font-[950] text-slate-900 font-sans tracking-wider leading-none">
            L'ORÉAL
          </div>
          <div className="flex items-center space-x-1.5 mt-1">
            <div className="w-4 h-4 bg-amber-600 rounded-xs flex items-center justify-center">
              <span className="text-white text-[7px] font-black">S</span>
            </div>
            <div className="text-[9px] text-slate-700 font-bold leading-tight uppercase">
              SAFE@WORK SAFE@HOME <span className="block text-[7px] text-slate-400 font-medium">spread the culture</span>
            </div>
          </div>
        </div>
      ),
      desc: 'This safety improvement application collects the observations from the organizational Staff and non-staff, and the respective department head will take care of the closure observation, and some observation categories will be verified by the top management.',
      bullets: [
        '97% reduction in safety incidents',
        'Scalable solution for large enterprises',
        'Recognized for excellence in safety innovation',
        'Automated safety reminders and alerts',
        'Real-time hazard identification and reporting'
      ],
      mainImg: '/images/case_study_images/Images/new/loreal.webp'
    },
    {
      id: 'adani',
      company: 'Adani EmCare',
      bgColor: '#E6E4F7', // Soft Light Purple/Lavender
      logo: (
        <div className="mb-4">
          <span className="text-3xl sm:text-4xl font-[950] font-sans tracking-tight" style={{
            background: 'linear-gradient(90deg, #1565C0 0%, #00897B 50%, #F57C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>adani</span>
        </div>
      ),
      desc: "Adani EmCare is a Web + Mobile App used by Adani Group's medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide the preventive healthcare to the employees.",
      bullets: [
        '98% Employee satisfaction ratio',
        '91% reduction in appointment scheduling time',
        '24/7 real-time health monitoring',
        'Serving over 60,000 healthcare professionals',
        'Generating over USD 30 billion in revenue'
      ],
      mainImg: '/images/case_study_images/Images/new/adani.webp'
    },
    {
      id: 'waymark',
      company: 'Waymark Maps',
      bgColor: '#F4E4F7', // Soft Lilac
      logo: (
        <div className="mb-4">
          <div className="text-2xl sm:text-3xl font-[950] text-[#6B21A8] font-sans tracking-tight leading-none">
            Waymark Maps
          </div>
        </div>
      ),
      desc: 'A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, featured locations, metro routes, tourist attractions, and much more, Waymark offers an interactive map of the Ivory Coast.',
      bullets: [
        'Turn-by-turn voice navigation',
        'Points of interest (POI) recommendations',
        'Real-time traffic updates and route optimization',
        'Offline map access for remote areas',
        'Augmented reality (AR) navigation features'
      ],
      mainImg: '/images/case_study_images/Images/new/waymark_map_app.webp'
    }
  ];

  const maxIndex = Math.max(0, caseStudies.length - 1);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setSliderIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setSliderIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900 relative font-sans w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto px-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] tracking-tight text-slate-900 mb-2 font-sans">
          Digital Transformation Through Innovation and Collective Knowledge
        </h2>
        <p className="text-xs sm:text-sm lg:text-base font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
          At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
        </p>
      </div>

      {/* Full Width Multi-Card Carousel Track */}
      <div
        className="relative overflow-hidden w-full select-none py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex space-x-6 sm:space-x-8 px-4 sm:px-8 lg:px-12 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${sliderIndex * 840}px)`
          }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="w-[88vw] sm:w-[780px] lg:w-[820px] shrink-0 rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-md flex flex-col justify-between select-none"
              style={{
                backgroundColor: cs.bgColor,
                minHeight: '440px'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
                {/* Left Column: Logo, Description, Points & Buttons */}
                <div className="lg:col-span-6 flex flex-col justify-between text-left h-full">
                  <div>
                    {cs.logo}
                    <p className="text-xs sm:text-[13px] font-[400] text-slate-700 leading-relaxed font-sans mb-4 line-clamp-4 sm:line-clamp-none">
                      {cs.desc}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {cs.bullets.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-900 font-bold font-sans">
                          <span className="text-slate-950 font-[950] shrink-0 mt-0.5 text-sm">»</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to="/portfolio"
                      className="px-6 py-2.5 bg-[#111827] hover:bg-slate-800 text-white font-[800] text-xs sm:text-sm rounded-full transition-all shadow-md font-sans"
                    >
                      View Case Study
                    </Link>
                    <Link
                      to="/portfolio"
                      className="px-6 py-2.5 bg-white/90 border border-slate-400 hover:bg-white text-slate-900 font-[800] text-xs sm:text-sm rounded-full transition-all shadow-xs font-sans"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>

                {/* Right Column: Case Study Graphic/Mockup */}
                <div className="lg:col-span-6 flex items-center justify-center min-h-[280px]">
                  <img
                    src={cs.mainImg}
                    alt={cs.company}
                    className="w-full h-auto max-h-[360px] object-contain rounded-2xl drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Center Navigation Controls */}
      <div className="flex items-center justify-center space-x-5 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold border border-slate-300 shadow-xs"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold border border-slate-300 shadow-xs"
        >
          →
        </button>
      </div>
    </section>
  );
};

export const Windows11AppDevelopmentService = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased text-left selection:bg-sky-500 selection:text-white">
      <SEO
        title="Windows 11 App Development Company | Custom Windows 11 Apps"
        description="We excel at providing cutting-edge Windows 11 App that improve productivity, optimize operations, and offer intuitive user experiences."
      />

      {/* =========================================================================
          HERO SECTION (1:1 Reference Match to Screenshot)
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-white text-slate-900 text-left font-sans relative overflow-hidden">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading, Subtitle, Stats & Discuss Your Project Button */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Main Title */}
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.18] font-sans"
                style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
              >
                <span className="block">Windows 11 App Development</span>
                <span className="block">Company</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                We excel at providing cutting-edge Windows 11 App that improve productivity, optimize operations, and offer intuitive user experiences. As a reliable Windows 11 App Development Company, we create effective solutions for both small and large businesses, from startups to corporations, with affordability and customization at each step. Whether you require a Windows 11 Desktop App, a Windows 11 Remote Desktop App, or enterprise-level integrations, our skilled developers turn your ideas into reality. Contact us today for a complimentary consultation and quote specific to your requirements.
              </p>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Software<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    Project Completed in<br />Software
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Discuss Your Project Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13.5px] sm:text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="text-base font-bold">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration Matching 1:1 */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] mx-auto flex items-center justify-center">
                <img
                  src="/images/windows_11_hero_illustration.svg"
                  alt="Windows 11 App Development Company"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 ease-out hover:scale-102"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Line */}
      <BrandLogoMarquee />

      {/* =========================================================================
          SECTION 1: Leading Experts In Windows 11 Desktop App Development
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[420px] mx-auto">
                <img
                  src="/images/windows_11_hero_illustration.svg"
                  alt="Leading Experts In Windows 11 Desktop App Development"
                  className="w-full h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Title & Description */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2
                className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25] font-sans"
              >
                Leading Experts In Windows 11<br />Desktop App Development
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Being a well-reputed leader in Windows 11 application development services, we provide solid, secure, and industry-specific solutions that meet current business requirements. Our specialty is crafting bespoke Windows 11 desktop app development services that enable organizations to grow effectively while embracing digital processes. With extensive expertise in developing Windows 11 system apps, we bring security, usability, and the latest technology together to empower entrepreneurs, businesses, and startups to leverage the potential of Windows 11. With our out-of-the-box thinking and established record, we are the ideal partner for companies that want to develop customized apps that excel in a market saturated with options.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: World Wide Top Rated IT Company on Clutch (Blue Awards Banner)
          ========================================================================= */}
      <section className="w-full bg-[#005F96] text-white py-6 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            
            {/* Left Block: Heading + FIXED TROPHY BADGE */}
            <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-[800] tracking-tight text-white leading-[1.2] max-w-xs sm:max-w-sm text-left">
                World Wide Top Rated IT<br />Company on Clutch
              </h3>

              {/* FIXED TROPHY BADGE */}
              <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
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
            </div>

            {/* Right Block: CONTINUOUS INFINITE AUTO-SCROLLING MARQUEE FOR BADGES */}
            <div className="w-full lg:flex-1 overflow-hidden relative">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Manifest Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Web Review Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_app_goodfirm.svg" alt="GoodFirms" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_clutchn.svg" alt="Clutch Top Rated" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                  <img src="/images/awards/most_review_softwarecompany_manifest.svg" alt="Manifest Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/awards/most_web_review_manifest.svg" alt="Web Review Award" className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_app_goodfirm.svg" alt="GoodFirms" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                  <img src="/images/top_mobile_clutchn.svg" alt="Clutch Top Rated" className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow-md" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Business-Specific Windows 11 System App Development
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Business-Specific Windows 11 System App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F0F8FF] border border-sky-100 rounded-2xl p-8 sm:p-10 text-left relative overflow-hidden shadow-sm">
                <span className="text-5xl sm:text-6xl text-[#005F96] font-serif font-black leading-none block mb-4">“</span>
                <h3 className="text-2xl sm:text-[26px] font-[800] text-[#005F96] leading-[1.3] tracking-tight">
                  Secure, Scalable &amp;<br />Future-Ready<br />Apps
                </h3>
              </div>
            </div>

            {/* Right Detailed Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                We realize the significance of high performance, security, and scalability for today's software development. Our Windows 11 App Development Services are driven by developing solutions that seamlessly integrate with current business infrastructure coupled with superior speed and reliability. From application rollouts to meet exceptional requirements for smooth user experiences on desktops, tablets, and hybrid workstations.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Our international experience in various sectors makes us the go-to partner for companies seeking bespoke applications. Be it creating responsive UWP desktop Apps to streamline business flows or designing cutting-edge Windows 11 Remote Desktop Apps for remote work models, our expert team makes your solutions future-proof as well as business-goal-oriented. With agile development and a user-centric strategy, we ensure apps that boost productivity and ROI.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: Cutting Edge Technologies Sapphire Use For Windows 11 App Development
          ========================================================================= */}
      <Windows11CuttingEdgeSection />

      {/* =========================================================================
          SECTION 5: Our Premium Services Grid
          ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* SECTION: Success Stories Portfolio & Metrics */}
      <SuccessStoriesSection />

      {/* SECTION: Proud Awards & Recognition Banner */}
      <ProudAwardsBanner />

      {/* SECTION: Benefits of the Best Mobile App Development Company */}
      <MobileAppCompanyBenefits />

      {/* SECTION: Our Expertise in Mobile App Development Services */}
      <OurMobileAppExpertiseServices />

      {/* SECTION: Business Friendly Hiring Models */}
      <AndroidHiringModels />

      {/* SECTION: Innovative Solutions Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile Windows 11 app development life cycle from initial concept wireframes to Microsoft Store and enterprise deployment." />

      {/* SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* SECTION: Trusted Brands */}
      <TrustedBrandsGrid />

      {/* SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* SECTION: What Our Clients Say Clutch Reviews Carousel */}
      <WhatOurClientsSaySection />

      {/* SECTION: We Have Been Featured In */}
      <FeaturedInBrandsSection />

      {/* SECTION: Digital Transformation Case Studies Full-Width Slider */}
      <Windows11DigitalTransformationSection />

      {/* SECTION: Frequently Asked Questions */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        initialOpenIndex={null}
      />

      {/* SECTION: Our Recent Blogs */}
      <MobileAppRecentBlogsSection />

      {/* SECTION: What Sets Us Apart */}
      <MobileAppWhatSetsUsApartSection />

      {/* SECTION: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title="Have Windows 11 App Development Challenge To Address ?"
        subtitle="Get access to top Windows 11 App Developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />
    </div>
  );
};

export default Windows11AppDevelopmentService;
