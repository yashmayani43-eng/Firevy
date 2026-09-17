import React, { useState } from 'react';
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
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import IWatchRecentBlogsSection from './IWatchRecentBlogsSection';

export const IBeaconAppDevelopmentService = () => {
  // 6 Benefits of iBeacon App Development Services (Matching Screenshot 1:1)
  const benefitsItems = [
    {
      title: 'Nearby Interactions',
      desc: 'Mobile applications can provide location-based information, alerts, and experiences by detecting nearby iBeacons. The proximity-based interaction improves user engagement and sends real-time messaging, promotions, and services.',
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
      title: 'Customer Engagement',
      desc: 'IBeacon technology lets retailers give consumers tailored offers, suggestions, and savings as they shop. Museums, stadiums, and other venues may employ iBeacons to provide interactive tours, exhibit information, and event updates to improve visitor pleasure.',
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
      title: 'Better Navigation',
      desc: 'iBeacon app development may improve navigation. Using iBeacons, interior maps, and location-based services, mobile apps may help users navigate complex areas like retail malls and airports. The user experience improves due to convenience and less frustration.',
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
      title: 'Tracking Managing',
      desc: 'With iBeacons, businesses can monitor cargo, equipment, and vehicles live. Mobile apps that monitor assets manage inventory, and prevent theft using iBeacon improve operational efficiency and cost savings.',
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
      title: 'Data Analysis',
      desc: 'Businesses can analyze iBeacon signals and user interactions to understand foot traffic, dwell periods, popular routes, and conversion rates. Optimizing shop layouts, marketing techniques, and consumer experiences using this data improves decision-making.',
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
      title: 'Smooth Integration',
      desc: 'App stores make iBeacon-enabled applications easy to launch and update, assuring user acceptance. Platform-agnostic iBeacon technology works with iOS and Android smartphones, giving companies a flexible option for engaging mobile customers across platforms.',
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


  // 6 The Expertise Of Our Beacon App Developers Cards (With Hover Fill & Animated Borders)
  const beaconDeveloperExpertiseCards = [
    {
      id: 1,
      title: 'Resources Tracking Apps',
      desc: 'We provide applications monitoring location-based resources that may be utilized in various industries, including hospitality, retail, banking, and transportation. Our iBeacon applications may monitor multiple things, including the location of workers and children at school or home and table availability in the cafeteria.',
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
      title: 'Way-Finding Apps',
      desc: 'Mobile applications that provide interior navigation and location allow workers to find empty conference rooms inside large buildings and campuses. These apps may assist those who are blind or have other physical disabilities in navigating various sections using the app.',
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
      title: 'Tour With Interactions',
      desc: 'We create an app with the iBeacon technology that may be utilized by guests visiting art galleries, museums, or zoos. They get alerts that provide information specific to what they are looking at when they are close to a particular destination. Text, graphics, or even videos may be used as the medium for conveying notifications.',
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
      title: 'Educational Apps',
      desc: 'Through proximity detection, beacon applications loaded on Tablets or iPads can show and exchange data pertinent to the current time and location. Students may be encouraged to engage with their environment and develop an awareness of real-world circumstances.',
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
      title: 'Automation Apps',
      desc: 'Apps that are equipped with beacons have the potential to provide various types of automation, including residential, commercial, and industrial. With Bluetooth low-energy technology, you can lock and unlock doors, turn on lights as you enter the front, and even open the garage door while at the entry. All of these things are feasible.',
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
      title: 'Push-Driven Marketing',
      desc: 'Retailers can send real-time push notifications about products and services at the appropriate time and location with the assistance of apps driven by push marketing technology. These individualized greetings have the potential to assist increase in-store sales as well as strengthen client loyalty.',
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
      question: 'What is iBeacon technology and how does it work in mobile apps?',
      answer: 'iBeacon is Apple\'s Bluetooth Low Energy (BLE) protocol that broadcasts unique identifiers (UUID, Major, Minor). Mobile apps scan for these signals in the background or foreground to determine micro-location, trigger contextual alerts, and enable precise indoor navigation.'
    },
    {
      question: 'Can iBeacon apps work on both iOS and Android devices?',
      answer: 'Yes! While iBeacon is an Apple standard, Android devices with Bluetooth 4.0+ can easily scan and process iBeacon and Eddystone advertising packets using custom BLE libraries.'
    },
    {
      question: 'How do you optimize battery consumption for continuous beacon scanning?',
      answer: 'We utilize intelligent BLE scanning windows, duty cycles, region monitoring, and hardware batching to ensure continuous proximity detection with less than 2-3% daily battery impact.'
    },
    {
      question: 'Which industries benefit most from iBeacon application development?',
      answer: 'Retail stores (proximity marketing), airports & transit hubs (indoor wayfinding), museums & art galleries (automated audio guides), warehouses (real-time asset tracking), and smart offices (automated check-ins).'
    },
    {
      question: 'Do iBeacon applications require continuous internet connectivity?',
      answer: 'Basic beacon detection and pre-cached indoor navigation can function completely offline. However, fetching real-time offers or syncing analytics back to the cloud requires an internet connection.'
    },
    {
      question: 'Do you provide beacon fleet management and hardware consulting?',
      answer: 'Yes, we assist with hardware selection (Estimote, Kontakt.io, Minew), physical beacon deployment site surveys, cloud beacon management platforms, and battery health monitoring.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      <SEO
        title="iBeacon App Development Services | Custom BLE & Proximity Solutions"
        description="Premier iBeacon App Development Company. Build high-precision indoor navigation, proximity marketing, and BLE sensor tracking mobile applications."
        keywords="ibeacon app development, ble mobile app development, proximity marketing app, indoor navigation app, bluetooth beacon solutions"
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
                iBeacon Application<br />Development Company
              </h1>

              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[22px] font-normal max-w-2xl font-sans">
                We excel in creating iBeacon Applications that deliver high-precision indoor positioning, contextual proximity marketing, and smart asset tracking. Starting from custom BLE integration to enterprise-grade beacon fleet management, our solutions are engineered for low battery consumption and seamless user engagement. Get in touch with us today to hire iBeacon application developers and avail free consultation for your project.
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
              <div className="relative w-full max-w-xl overflow-hidden flex items-center justify-center lg:justify-end rounded-2xl">
                <img
                  src="/images/iot_hero_illustration.jpg"
                  alt="iBeacon Application Development Company Illustration"
                  className="w-full max-w-[520px] h-auto object-contain rounded-2xl drop-shadow-sm select-none"
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

      {/* Section 5: Delivering Excellent & Brief About iBeacon App Development Services */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          {/* Subsection 1: Delivering Excellent IBeacon Applications For Your Business */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
            {/* Left 3D Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100 bg-white p-2">
                <img
                  src="/images/ibeacon_delivering_services_3d.jpg"
                  alt="Delivering Excellent IBeacon Applications For Your Business"
                  className="w-full h-auto object-contain rounded-xl select-none"
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
                Delivering Excellent IBeacon<br />Applications For Your Business
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal font-sans">
                In its most basic form, the best iBeacon app development company enables the beacon hardware to ascertain the closeness of adjacent devices and their locations and create a link between the natural and digital worlds. Our Custom iBeacon app development services are a perfect option for businesses, as they enable them to promote their goods or services to specific individuals while also targeting clients individually.
              </p>
            </div>
          </div>

          {/* Subsection 2: Brief About Ibeacon App Development Services */}
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
                Brief About Ibeacon App<br />Development Services
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal font-sans">
                Easy-to-use location-based beacons apps Top iBeacon app development agency enables hotels to improve their concierge services while also automating the check-in process by providing the hotels with the guests' specific whereabouts at check-in time. One of the most notable benefits of this technology is improved in-store shopping for retailers, which is accomplished via transmitting essential messages to consumers through iBeacon applications.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal font-sans">
                Hire iBeacon Developers to create superior, scalable, functional, and bespoke solutions. The app's purpose is to monitor the attendance at various events, engage the attendees in conversation, and forge connections with them.
              </p>
            </div>

            {/* Right 3D Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100 bg-white p-2">
                <img
                  src="/images/ibeacon_brief_services_3d.jpg"
                  alt="Brief About Ibeacon App Development Services"
                  className="w-full h-auto object-contain rounded-xl select-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Get 100% Customizable Beacon App Development Services By Experts */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
              Get 100% Customizable Beacon App Development Services By Experts.
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
                  Scalable And Secure IBeacon Applications
                </h3>

                {/* Speech Bubble Arrow Pointer (Visible on Desktop) */}
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F0F9FF] border-t border-r border-[#E0F2FE] rotate-45"></div>
              </div>
            </div>

            {/* Right Description Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-left font-sans">
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal">
                Regardless of the dimensions of their operations, companies may benefit from the enterprise-grade iBeacon app development services we provide. Offer a tailored in-store shopping experience with appropriate contextual advertisements broadcasted through our iBeacon Application Development Services, leading to increased foot traffic and sales revenue. Our developers' deep familiarity with BLE-powered technology allows us to construct scalable and unique iBeacon development solutions that can be made accessible at the lowest possible cost.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[26px] font-normal">
                You will enjoy increased user engagement and involvement, connectionless communication, real-time tracking, and customized proximity checking If you use our service to develop bespoke iBeacon applications. Most importantly, our ibeacon services are compatible across several platforms and will eliminate the need to rely on specific mobile platforms powered by the operating system by default.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 7: Premium Services Grid */}
      <div id="services-grid">
        <PremiumServicesGrid />
      </div>

      {/* Section 8: The Expertise Of Our Beacon App Developers */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              The Expertise Of Our Beacon App Developers
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-normal font-sans">
              We have a pool of iBeacon app development experts in our team. Take a look at the expertise of our iBeacon app developers:
            </p>
          </div>

          {/* 6 Interactive Cards Grid (3 Columns x 2 Rows with Hover Fill & Animated Borders) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1280px] mx-auto items-stretch">
            {beaconDeveloperExpertiseCards.map((item) => (
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

      {/* Section 10: Benefits of IBeacon App Development Services */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Benefits of IBeacon App Development Services
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal font-sans">
              Creating iBeacon-powered apps benefits companies and consumers. Six significant advantages of iBeacon app development services:
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

      {/* Section 19: DigitalTransformationSlider */}
      <DigitalTransformationSlider />

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
            Have iBeacon Application Development Company<br />Challenge To Address ?
          </h2>

          <p className="text-xs sm:text-sm md:text-[14.5px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top iBeacon Application Development Company to transform your ideas into a robust application.
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

export default IBeaconAppDevelopmentService;
