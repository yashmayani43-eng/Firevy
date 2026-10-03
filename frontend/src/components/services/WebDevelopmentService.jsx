import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
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
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import MobileAppWhatSetsUsApartSection from './MobileAppWhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';

const WebCuttingEdgeSection = ({ serviceTitle = "Web Development" }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Laravel Development',
      desc: 'With Laravel development expertise dating back to 2011, we use Composer and Blade, among other technologies, to build scalable, effective, and powerful online apps. Together, we can use our Laravel knowledge to turn your concept into a high-performing product.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 8h4M7 12h8" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Node Js Development',
      desc: 'For the purpose of developing scalable and quick online apps, we provide Node.js development services. We can handle complicated jobs and heavy traffic quickly by using JavaScript\'s event-driven nature for efficient real-time applications and a single JavaScript codebase for both the server and client sides.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'MERN Stack App Development',
      desc: 'Select our first-rate development services using the MERN Stack (Node.js, MongoDB, Express, and React). Our expertise is in developing intuitive web apps that meet user demands while delivering exceptional performance.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h12M6 12h8M6 16h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'MEAN Stack App Development',
      desc: 'When it comes to MEAN stack development, Firevy is a reliable partner. Our developers use Angular/AngularJS and Node.js to create robust, feature-rich web applications that can scale smoothly as your business grows.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Python Development',
      desc: 'We offer comprehensive Python development services for building enterprise web applications, data processing scripts, and machine learning models with Django, Flask, and FastAPI.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'React Native App Development',
      desc: 'Build high-performing, cross-platform mobile apps for iOS and Android using React Native, delivering a native look and feel with a single codebase.',
      icon: (
        <svg className="w-5 h-5 text-[#005F96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    }
  ];

  const maxIndex = Math.max(0, technologies.length - 3);

  // Auto-scroll every 2.5 seconds (2500ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left overflow-hidden border-b border-slate-100 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight font-sans">
            Cutting-Edge Technologies Firevy Use for<br />{serviceTitle}
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${carouselIndex * (100 / 3 + 0.8)}%)`
            }}
          >
            {technologies.map((item) => (
              <div
                key={item.id}
                className="w-[88%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 rounded-xl bg-[#EAF5FF] p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[#BAE6FD]/50 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-[800] text-[16.5px] sm:text-[17.5px] text-[#0B0F19] mb-2 leading-snug tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.6] font-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous Technologies"
            className="text-slate-800 hover:text-[#005F96] transition-colors cursor-pointer select-none text-2xl font-bold p-1"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Technologies"
            className="text-slate-800 hover:text-[#005F96] transition-colors cursor-pointer select-none text-2xl font-bold p-1"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

const WebDigitalTransformationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: 'Web Portal Global',
      bgColor: '#EBF4F6',
      logo: (
        <div className="text-2xl sm:text-3xl font-[900] tracking-wider text-slate-900 mb-3 font-sans">
          WEB<span className="text-[#0084D1]">DEVELOPMENT</span>
        </div>
      ),
      desc: 'Web Development Global is an enterprise web application platform delivering real-time analytics, user management dashboards, and cloud integrations across international regions.',
      bullets: [
        'Streamlined enterprise web management and user role workflows',
        'SOC2 Level 2 certified secure web application architecture'
      ],
      mainImg: '/images/case-study-car.png'
    },
    {
      id: 2,
      company: 'L&T Technology Services',
      bgColor: '#F5EFEB',
      logo: (
        <div className="mb-4">
          <span className="inline-block bg-[#0B2545] text-white font-serif font-black text-xl px-2 py-0.5 tracking-tighter">
            L&amp;T
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-800 uppercase block mt-1 font-sans">
            Technology Services
          </span>
        </div>
      ),
      desc: 'L&T enabled corporate enterprises with end-to-end web development solutions, self-service portals, and real-time business integration models.',
      bullets: [
        'Enhanced web application user engagement by 48%',
        'Automated real-time data synchronization and enterprise reporting'
      ],
      mainImg: '/images/case-study-construction.png'
    },
    {
      id: 3,
      company: 'Adani Web Platform',
      bgColor: '#EAF3F8',
      logo: (
        <div className="text-xl sm:text-2xl font-black text-slate-800 mb-3 tracking-tight font-sans">
          adani <span className="font-light text-slate-600">Web Development</span>
        </div>
      ),
      desc: 'Adani Foundation deployed our automated web development suite, enabling real-time enterprise management and operational workflow analytics.',
      bullets: [
        'Automated web application reporting with zero downtime',
        'Real-time user management and automated business workflow analytics'
      ],
      mainImg: '/images/case-study-smart-utility.png'
    }
  ];

  const maxIndex = Math.max(0, caseStudies.length - 2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFA] text-slate-900 font-sans text-left overflow-hidden w-full border-b border-slate-200/60">
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
          Digital Transformation Case Studies
        </h2>
      </div>

      <div className="w-full relative px-4 sm:px-6 lg:px-8">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / 2 + 1.5)}%)`
          }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="w-full lg:w-[calc(50%-12px)] shrink-0 rounded-2xl p-6 sm:p-8 lg:p-10 transition-shadow shadow-xs border border-slate-200/70"
              style={{
                backgroundColor: cs.bgColor,
                minHeight: '440px'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
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

export const WebDevelopmentService = ({
  canonical = "/services/web-development",
  serviceTitle = "Web Development Services",
  serviceName = "Web Development",
  companyTitle = "Web Development Company",
  challengeTitle = "Have A Web Development Challenge To Address ?",
  heroImage = "/images/web_development_hero_vector.jpg",
  expertsImage = "/images/web_development_experts_vector.jpg"
}) => {
  const [isCineStreamVideoOpen, setIsCineStreamVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased text-left selection:bg-sky-500 selection:text-white">
      <SEO
        title={`${serviceTitle} Company | Custom Enterprise Solutions`}
        description={`Empower your organization with enterprise ${serviceTitle}. High-performing, accessible, and secure applications.`}
        canonical={canonical}
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-white text-slate-900 text-left font-sans relative overflow-hidden">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.18] font-sans"
                style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
              >
                <span className="block">{serviceTitle}</span>
                <span className="block">Provider in USA</span>
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.7] max-w-2xl font-sans">
                Looking for a trusted {serviceTitle} Provider in USA? We deliver expert corporate application development and advanced digital solutions to help organizations showcase impact, engage stakeholders, and drive business growth with digital-first strategies. Every company has goals in place for how much it wants to expand.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">80+</div>
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
                    Project Completed in<br />Software Technology
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[28px] font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-[12px] sm:text-[12.5px] text-[#2B2B2B] font-semibold leading-tight mt-1">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

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

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] mx-auto flex items-center justify-center">
                <img
                  src={heroImage}
                  alt={`${serviceTitle} Provider in USA`}
                  className="w-full h-auto object-contain select-none transition-transform duration-500 ease-out hover:scale-102 rounded-2xl shadow-sm"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = heroImage;
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BrandLogoMarquee />

      {/* SECTION 1: Leading Experts In Web Development Services */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto">
                <img
                  src={expertsImage}
                  alt={`Leading Experts In ${serviceTitle}`}
                  className="w-full h-auto object-contain select-none filter drop-shadow-sm transition-transform duration-500 hover:scale-102 rounded-2xl"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = expertsImage;
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25] font-sans">
                Leading Experts In {serviceTitle}
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Being a well-reputed leader in enterprise {serviceName.toLowerCase()} and corporate platforms, we provide robust, SOC2-compliant, and industry-specific web solutions that meet modern organization requirements. Our specialty is crafting bespoke {serviceName.toLowerCase()} engineering services that enable organizations to scale effectively while embracing real-time performance tracking, user engagement, and automated reporting. With extensive expertise in developing cloud platforms, we bring bank-grade security, interactive dashboards, and scalable architectures together to empower organizations to leverage the full potential of their goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Blue Awards Banner */}
      <section className="w-full bg-[#005F96] text-white py-6 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-[800] tracking-tight text-white leading-[1.2] max-w-xs sm:max-w-sm text-left">
                World Wide Top Rated IT<br />Company on Clutch
              </h3>
              <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  <g fill="#F59E0B">
                    <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                    <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                  </g>
                  <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                  <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                  <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                  <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                </svg>
              </div>
            </div>

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

      {/* SECTION 3: Business-Specific Web Development System */}
      <section className="py-14 sm:py-20 bg-white text-left font-sans border-b border-slate-100">
        <Container className="max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Business-Specific {serviceTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="bg-[#F0F8FF] border border-sky-100 rounded-2xl p-8 sm:p-10 text-left relative overflow-hidden shadow-sm">
                <span className="text-5xl sm:text-6xl text-[#005F96] font-serif font-black leading-none block mb-4">“</span>
                <h3 className="text-2xl sm:text-[26px] font-[800] text-[#005F96] leading-[1.3] tracking-tight">
                  Secure, Scalable &amp;<br />Future-Ready<br />{serviceTitle}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                We realize the critical significance of enterprise security, regulatory compliance, and ultra-low latency for modern corporate infrastructure. Our {serviceTitle} are driven by crafting architectures that seamlessly interface with core databases, cloud storage lakes, and third-party APIs. From real-time tracking to executive reporting, we build solutions that exceed client expectations for performance, clarity, and precision.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
                Our engineering experience across diverse sectors makes us the ideal partner for startups, mid-market companies, and Fortune 500 enterprises. Whether you are developing custom applications, migrating to modern cloud frameworks, or implementing enterprise management tools, our skilled team guarantees future-proof, compliant, and conversion-optimized products.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: Cutting Edge Technologies */}
      <WebCuttingEdgeSection serviceTitle={serviceTitle} />

      {/* SECTION 5: Our Premium Services */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* SECTION 6: Success Stories */}
      <SuccessStoriesSection />

      {/* SECTION 7: Proud Awards */}
      <ProudAwardsBanner />

      {/* BEST WEB DEVELOPMENT COMPANY - VIDEO SHOWCASE */}
      <section className="py-16 lg:py-24 bg-white font-sans text-center relative overflow-hidden border-b border-slate-100 select-none">
        <Container>
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight mb-10 sm:mb-14 font-sans">
            Best {companyTitle}
          </h2>

          {/* Video Showcase Card Container with Decorative Background Accent Circles */}
          <div className="relative max-w-4xl mx-auto flex items-center justify-center py-2 sm:py-4">
            {/* Left Soft Sky Blue Background Accent Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 sm:-left-20 w-56 sm:w-72 h-56 sm:h-72 bg-[#D8F0FA] rounded-full filter blur-[1px] opacity-80 -z-0 pointer-events-none" />

            {/* Right Soft Pink Background Accent Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-20 w-56 sm:w-72 h-56 sm:h-72 bg-[#FDE2E4] rounded-full filter blur-[1px] opacity-80 -z-0 pointer-events-none" />

            {/* CineStream Interactive Video Card */}
            <div
              onClick={() => setIsCineStreamVideoOpen(true)}
              className="relative z-10 w-full rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden cursor-pointer group border border-slate-800/80 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-pink-500/10 bg-[#06080E]"
            >
              {/* Card Graphic Image */}
              <img
                src="/images/cinestream_video_card.png"
                alt={`CineStream - Best ${companyTitle} Showcase`}
                className="w-full h-auto object-cover block"
              />

              {/* Firevy.co Brand Logo Overlay in Top-Right Corner */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-7 lg:top-7 lg:right-9 z-20 flex items-center">
                <img
                  src="/firevy_logo_white.png"
                  alt="Firevy.co"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain drop-shadow-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Subtle Animated Glow on Play Button Area */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-transparent group-hover:bg-white/10 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CineStream Video Lightbox Modal */}
      {isCineStreamVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 flex items-center justify-between border-b border-slate-800">
              <h3 className="font-bold text-white text-sm sm:text-base">
                CineStream - Best {companyTitle} Showcase
              </h3>
              <button
                onClick={() => setIsCineStreamVideoOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                title="CineStream Web Application Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* SECTION 8: Benefits */}
      <MobileAppCompanyBenefits />

      {/* SECTION 9: Our Expertise */}
      <OurMobileAppExpertiseServices />

      {/* SECTION 10: Hiring Models */}
      <AndroidHiringModels />

      {/* SECTION 11: Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* SECTION 12: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile web engineering life cycle from discovery and UI/UX architecture to real-time web deployment and security auditing." />

      {/* SECTION 13: Our Story Their Words */}
      <OurStoryTheirWordsSection />

      {/* SECTION 14: Trusted Brands */}
      <TrustedBrandsGrid />

      {/* SECTION 15: Success Matrix */}
      <SuccessMatrix />

      {/* SECTION 16: Featured In Brands */}
      <FeaturedInBrandsSection />

      {/* SECTION 17: Case Studies Slider */}
      <WebDigitalTransformationSection />

      {/* SECTION 18: FAQ */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to your queries and provide solutions that captivate users. Feel free to contact us in case of any query which is not mentioned below."
        initialOpenIndex={null}
      />

      {/* SECTION 19: Recent Blogs */}
      <MobileAppRecentBlogsSection />

      {/* SECTION 20: What Sets Us Apart */}
      <MobileAppWhatSetsUsApartSection />

      {/* SECTION 21: Challenge CTA Banner */}
      <IWatchChallengeCtaBanner
        title={challengeTitle}
        subtitle={`Get access to top ${serviceName} Specialists to transform your vision into an impactful web platform.`}
        buttonText="Hire Now"
      />
    </div>
  );
};

export default WebDevelopmentService;
