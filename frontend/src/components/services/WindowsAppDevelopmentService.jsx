import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';

const WindowsAppDigitalTransformationSection = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const caseStudies = [
    {
      id: 'beecar',
      company: 'Bee Car Care',
      bgColor: '#FAF3DA', // Light golden cream matching reference
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
      bgColor: '#E2F1F8', // Soft Light Blue matching reference
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
      bgColor: '#FDE8E8', // Soft Red/Pink matching reference
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

export const WindowsAppDevelopmentService = () => {
  // 6 Benefits of Windows App Development Services (Matching iBeacon Reference 1:1)
  const benefitsItems = [
    {
      title: 'Native Performance & Fluent UI',
      desc: 'Windows applications provide blazing-fast performance and seamless Fluent Design interfaces, utilizing direct hardware acceleration and GPU rendering for demanding desktop workloads.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="9" height="7" rx="1.5" />
          <line x1="4" y1="5.5" x2="8" y2="5.5" />
          <line x1="4" y1="7.5" x2="6.5" y2="7.5" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="18" cy="13" r="1.5" />
          <path d="M11 6.5h3 M13 12h3" />
          <path d="M11 10.5l-1 2.5-2.5.5 2 2 .5 2.5 2-1.5" />
          <path d="M9.5 13.5l4 4" />
        </svg>
      )
    },
    {
      title: 'Deep OS & Peripheral Integration',
      desc: 'Leverage Windows Win32 and WinRT APIs to interact directly with hardware, USB peripherals, POS barcode scanners, thermal printers, and biometric Windows Hello security devices.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="2.5" />
          <circle cx="6" cy="9" r="2" />
          <circle cx="18" cy="9" r="2" />
          <path d="M9 18v-1.5a3 3 0 0 1 6 0V18" />
          <path d="M3 18v-1a2.5 2.5 0 0 1 4-2" />
          <path d="M21 18v-1a2.5 2.5 0 0 0-4-2" />
          <path d="M10 15l2 1.5 2-1.5" />
        </svg>
      )
    },
    {
      title: 'Enterprise Security & Compliance',
      desc: 'Built with enterprise-grade security protocols, sandboxing, code signing certificates, Windows Defender integration, and Active Directory / Azure AD single sign-on (SSO).',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
          <circle cx="15" cy="11" r="2.5" />
          <path d="M15 8.5v5" />
        </svg>
      )
    },
    {
      title: 'Offline Power & Local Reliability',
      desc: 'Ensure mission-critical business continuity with rich offline data caching, embedded SQLite/SQL Server databases, and automatic background synchronization when internet connectivity resumes.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="12" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
          <circle cx="16" cy="15" r="2" />
          <path d="M16 17v2" />
        </svg>
      )
    },
    {
      title: 'Data Analysis & Real-Time Telemetry',
      desc: 'Businesses can analyze high-throughput data streams, run local machine learning models via ONNX Runtime, and visualize real-time charts with sub-millisecond desktop responsiveness.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <line x1="7" y1="12" x2="7" y2="9" />
          <line x1="10" y1="12" x2="10" y2="7" />
          <line x1="13" y1="12" x2="13" y2="10" />
          <circle cx="16" cy="17" r="3" />
          <line x1="18" y1="19" x2="21" y2="22" />
        </svg>
      )
    },
    {
      title: 'Smooth Deployment & Store Distribution',
      desc: 'Deploy effortlessly via MSIX packages, private enterprise MDM intune channels, or the public Microsoft Store with automated background updates and zero registry corruption.',
      icon: (
        <svg className="w-8 h-8 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="6" height="6" rx="1.5" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" />
          <rect x="14" y="14" width="6" height="6" rx="1.5" />
          <line x1="7" y1="10" x2="7" y2="14" />
          <line x1="17" y1="10" x2="17" y2="14" />
          <line x1="10" y1="7" x2="14" y2="7" />
          <line x1="10" y1="17" x2="14" y2="17" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  // 6 The Expertise Of Our Windows App Developers Cards (With Hover Fill & Animated Borders)
  const windowsDeveloperExpertiseCards = [
    {
      id: 1,
      title: 'WPF & WinUI 3 Desktop Apps',
      desc: 'We engineer high-fidelity desktop applications using WPF (Windows Presentation Foundation) and modern WinUI 3, providing rich vector graphics, flexible XAML architecture, and fluid touch and pen support.',
      iconBg: 'bg-purple-100/80 text-purple-600',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'UWP & Cross-Device Solutions',
      desc: 'Create Universal Windows Platform (UWP) applications engineered to operate smoothly across Windows 10, Windows 11, Surface Pro tablets, HoloLens, and Xbox consoles with adaptive layout systems.',
      iconBg: 'bg-green-100/80 text-green-600',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="3" />
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
          <path d="M9 10a3 3 0 0 1 3-3" />
        </svg>
      )
    },
    {
      id: 3,
      title: '.NET & C# Enterprise Systems',
      desc: 'Our seasoned C# and .NET 8/9 developers build scalable enterprise ERPs, accounting suites, and heavy computational tools backed by asynchronous architecture and rock-solid memory management.',
      iconBg: 'bg-orange-100/80 text-orange-500',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Azure Cloud & Hybrid Windows Services',
      desc: 'Connect your desktop applications with Microsoft Azure Cloud, implementing real-time messaging with Azure Service Bus, identity via Microsoft Entra, and scalable microservice APIs.',
      iconBg: 'bg-amber-100/80 text-amber-600',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Legacy Modernization & Migration',
      desc: 'Modernize legacy WinForms, VB6, and older desktop software into modern, cloud-connected .NET applications with modernized UI, automated testing suites, and improved security postures.',
      iconBg: 'bg-pink-100/80 text-pink-600',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'POS & Industrial Windows Automation',
      desc: 'Build dedicated industrial control interfaces, retail point-of-sale systems, and warehouse kiosk apps with multi-screen setups, peripheral drivers, and 24/7 continuous run uptime.',
      iconBg: 'bg-cyan-100/80 text-cyan-600',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Reference Match)
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

  // 6 FAQ Items
  const faqItems = [
    {
      question: 'Which frameworks do you use for Windows application development?',
      answer: 'We specialize in modern Windows development technologies including WinUI 3, WPF (Windows Presentation Foundation), .NET 8/9, C#, C++, UWP, and cross-platform desktop frameworks like .NET MAUI and Electron.'
    },
    {
      question: 'Can you migrate legacy WinForms or VB6 apps to modern Windows 11 applications?',
      answer: 'Yes! We have extensive expertise refactoring legacy desktop applications into modern WinUI 3 and .NET architectures, preserving core business logic while upgrading UI, security, and cloud integrations.'
    },
    {
      question: 'How do you handle distribution and installation for Windows applications?',
      answer: 'We provide packaging in modern MSIX containers, traditional MSI/EXE installers, private enterprise Intune deployments, and direct publishing to the public Microsoft Store with automated updates.'
    },
    {
      question: 'Can Windows desktop applications integrate with Azure Cloud and external APIs?',
      answer: 'Absolutely. We seamlessly connect Windows desktop software with cloud databases, Azure Active Directory / Microsoft Entra SSO, RESTful APIs, WebSockets, and third-party SaaS platforms.'
    },
    {
      question: 'Can Windows applications work offline and sync data later?',
      answer: 'Yes, offline-first architecture is one of the biggest strengths of desktop software. We implement local relational stores (SQLite, LocalDB) with robust background conflict-resolution syncing.'
    },
    {
      question: 'Do you provide hardware and external peripheral integration for Windows apps?',
      answer: 'Yes! We develop direct driver and COM-port integrations for barcode scanners, receipt printers, industrial sensors, smart cards, and specialized USB testing equipment.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      <SEO
        title="Windows Application Development Services | Custom Desktop & .NET Solutions"
        description="Premier Windows Application Development Company. Build robust, high-performance Windows desktop applications, WinUI 3, WPF, and enterprise .NET software."
        keywords="windows application development, desktop app development, wpf development, winui 3 development, c# dotnet desktop software"
      />

      {/* Section 1: Hero Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#f8fafc] overflow-hidden border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1
                className="text-slate-900 font-black tracking-tight"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  lineHeight: '1.2'
                }}
              >
                Windows Application<br />Development Company
              </h1>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[22px] font-normal max-w-2xl font-sans">
                We excel in creating Windows Applications that deliver high-precision performance, rich Fluent Design user experiences, and seamless hardware integration. Starting from custom .NET solutions to enterprise-grade desktop suites, our solutions are engineered for high throughput, robust security, and intuitive workflows. Get in touch with us today to hire Windows application developers and avail free consultation for your project.
              </p>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-3 pb-2">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">100+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Software<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    Project Completed in<br />Software
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[11px] sm:text-[12px] text-slate-700 font-medium leading-snug mt-0.5">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#005F96] hover:bg-[#004a75] text-white font-bold text-xs sm:text-sm rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-xl flex items-center justify-center lg:justify-end">
                <img
                  src="/images/services/windows_app_hero.png"
                  alt="Windows Application Development Company Illustration"
                  className="w-full max-w-[520px] h-auto object-contain select-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Marquee */}
      <BrandLogoMarquee />

      {/* Section 4: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
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

                {/* Track 2 Badges (Duplicate for Seamless Loop) */}
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

      {/* Section 5: Delivering Excellent & Brief About Windows App Development Services */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          {/* Subsection 1: Delivering Excellent Windows Applications For Your Business */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
            {/* Left 3D Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-lg flex items-center justify-center">
                <img
                  src="/images/services/windows_app_delivering_3d.png"
                  alt="Delivering Excellent Windows Applications For Your Business"
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-4 text-left flex flex-col justify-center">
              <h2
                className="text-[#0B0F19] font-[900] tracking-tight font-sans"
                style={{
                  fontSize: '32px',
                  lineHeight: '40px'
                }}
              >
                Delivering Excellent Windows<br />Applications For Your Business
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal font-sans">
                In its most robust form, our Windows application development services enable businesses to unleash raw computational performance, streamline enterprise workflows, and create direct links between desktop systems and cloud databases. Our custom Windows software development solutions are a perfect choice for organizations requiring high-performance tools, low latency, and deep operating system integration.
              </p>
            </div>
          </div>

          {/* Subsection 2: Brief About Windows App Development Services */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-6">
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-4 text-left flex flex-col justify-center order-2 lg:order-1">
              <h2
                className="text-[#0B0F19] font-[900] tracking-tight font-sans"
                style={{
                  fontSize: '32px',
                  lineHeight: '40px'
                }}
              >
                Brief About Windows App<br />Development Services
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal font-sans">
                Our Windows app development agency builds versatile desktop systems that automate operational tasks, handle complex multi-threaded calculations, and provide seamless user experiences. From accounting suites and CAD software to industrial management portals, desktop applications offer unmatched stability and security.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal font-sans">
                Hire Windows Developers to create scalable, modern, and bespoke software solutions tailored to your operational specifications, ensuring 24/7 reliability and optimal productivity across all enterprise workstations.
              </p>
            </div>

            {/* Right 3D Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg flex items-center justify-center">
                <img
                  src="/images/services/windows_app_brief_3d.png"
                  alt="Brief About Windows App Development Services"
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Get 100% Customizable Windows App Development Services By Experts */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
              Get 100% Customizable Windows App Development Services By Experts.
            </h2>
          </div>

          {/* 2 Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#F0F9FF] border border-[#E0F2FE] rounded-2xl p-8 sm:p-10 shadow-sm overflow-hidden text-left">
                {/* Subtle Topographic / Contour Background Pattern */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50 150 C50 50 150 250 250 150 C350 50 450 250 550 150" stroke="#0284C7" strokeWidth="1.5" fill="none" />
                    <path d="M-50 200 C50 100 150 300 250 200 C350 100 450 300 550 200" stroke="#0284C7" strokeWidth="1.5" fill="none" />
                    <path d="M-50 100 C50 0 150 200 250 100 C350 0 450 200 550 100" stroke="#0284C7" strokeWidth="1.5" fill="none" />
                    <path d="M-50 250 C50 150 150 350 250 250 C350 150 450 350 550 250" stroke="#0284C7" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>

                {/* Quote Icon */}
                <div className="mb-4 relative z-10">
                  <svg className="w-12 h-12 text-[#0084D1]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Heading */}
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-[900] text-[#005F96] leading-[1.3] tracking-tight relative z-10 font-sans">
                  Scalable And Secure Windows Applications
                </h3>

                {/* Speech Bubble Arrow Pointer (Visible on Desktop) */}
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F0F9FF] border-t border-r border-[#E0F2FE] rotate-45"></div>
              </div>
            </div>

            {/* Right Description Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-left font-sans">
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal">
                Regardless of the dimensions of your business operations, companies benefit significantly from the enterprise-grade Windows app development services we deliver. We create desktop solutions that leverage the full power of modern PC hardware, offering instantaneous processing, offline capabilities, and high-performance native user interfaces.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal">
                You will enjoy enhanced productivity, multi-screen workspace support, real-time telemetry, and streamlined enterprise database connectivity when you partner with us for bespoke Windows development. Most importantly, our solutions are built on contemporary Microsoft .NET stacks, ensuring painless backward compatibility, rapid scalability, and seamless operating system upgrades.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 7: Premium Services Grid */}
      <div id="services-grid">
        <PremiumServicesGrid />
      </div>

      {/* Section 8: The Expertise Of Our Windows App Developers */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              The Expertise Of Our Windows App Developers
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-normal font-sans">
              We have a pool of experienced Windows app development experts in our team. Take a look at the expertise of our Windows app developers:
            </p>
          </div>

          {/* 6 Interactive Cards Grid (3 Columns x 2 Rows with Hover Fill & Animated Borders) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1280px] mx-auto items-stretch">
            {windowsDeveloperExpertiseCards.map((item) => (
              <div
                key={item.id}
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
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-2xs`}>
                    {item.icon}
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

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a
              href="/company/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#005F96] hover:bg-[#004a75] text-white font-bold text-sm rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* Section 9: Proud Awards Banner */}
      <ProudAwardsBanner />

      {/* Section 10: Benefits of Windows App Development Services */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits of Windows App Development Services
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal font-sans">
              Creating Windows-powered desktop software benefits organizations, administrators, and power users. Six significant advantages of Windows app development services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsItems.map((benefit, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,132,209,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug tracking-tight font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-[24px] font-normal font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 12: Business Friendly Hiring Models (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
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
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  {/* Clean Vector Icon */}
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  {/* Bullet Points List with Blue Checkmarks */}
                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Hire Now' Blue Button */}
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

      {/* Section 13: InnovativeSolutionsVideoSection */}
      <InnovativeSolutionsVideoSection />

      {/* Section 14: ProcessWeFollow */}
      <ProcessWeFollow />

      {/* Section 15: OurStoryTheirWordsSection */}
      <OurStoryTheirWordsSection />

      {/* Section 16: TrustedBrandsGrid */}
      <TrustedBrandsGrid />

      {/* Section 17: SuccessMatrix */}
      <SuccessMatrix />

      {/* Section 18: FeaturedInBrandsSection */}
      <FeaturedInBrandsSection />

      {/* Section 19: Full-Width Digital Transformation Carousel */}
      <WindowsAppDigitalTransformationSection />

      {/* Section 20: SapphireFaqSection */}
      <SapphireFaqSection customFaqs={faqItems} />

      {/* Section 21: Our Recent Blogs */}
      <IWatchRecentBlogsSection />

      {/* Section 22: Bottom Blue CTA Banner (1:1 Reference Match) */}
      <section className="relative w-full max-w-full py-9 sm:py-11 lg:py-12 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        {/* Background Floating Geometric Rounded Squares / Rectangles Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
          <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />
          <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
          <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3">
          <h2
            className="text-white tracking-tight leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '32px',
              color: '#FFFFFF'
            }}
          >
            Have Windows Application Development Company<br />Challenge To Address ?
          </h2>

          <p className="text-xs sm:text-sm md:text-[14.5px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Windows Application Development Company to transform your ideas into a robust application.
          </p>

          <div className="pt-2">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-[800] text-xs sm:text-sm px-8 py-2.5 rounded-[5px] shadow-md hover:shadow-lg transition-all duration-200 tracking-wide cursor-pointer"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowsAppDevelopmentService;
