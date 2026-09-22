import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import PhpCompanyVideoBanner from '../common/PhpCompanyVideoBanner';
import SectorsThrivingSection from './SectorsThrivingSection';
import HowWeDivideResponsibilitiesGrid from '../common/HowWeDivideResponsibilitiesGrid';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import ExpertiseOfPhpDevelopersGrid from '../common/ExpertiseOfPhpDevelopersGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import ProcessWeFollow from '../common/ProcessWeFollow';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SocialMediaSection from '../common/SocialMediaSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import BenefitsOfHiringDedicatedDevelopers from '../common/BenefitsOfHiringDedicatedDevelopers';
import {
  Clock,
  Calendar,
  ArrowLeft,
  Briefcase,
  PieChart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const HirePhpDevelopersService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // 6 Flexible Hiring Model Cards (Part-time, Full-time, Hourly, Monthly, Quarterly, Yearly)
  const hiringModelCards = [
    {
      id: 'parttime',
      title: 'Part-time Developer',
      subtitle: '4 hours a day, 5 days a week',
      price: '80 hours/month',
      IconComp: Briefcase,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'fulltime',
      title: 'Full-time Developer',
      subtitle: '8 hours a day, 5 days a week',
      price: '160 hours/month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
        '8 hours a day, 5 days a week',
        'Minimum: 2 months',
        'Hire Dedicated PHP Developers that exclusively work for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$ 21.00/Hour',
      IconComp: Clock,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Payment based on hours worked',
        'Flexible hours as needed',
        'Billing cycle: Weekly/Monthly'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: 'Starting From',
      price: '$ 2550.00/ Month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '8 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      subtitle: 'Starting From',
      price: '$ 7500.00/ Quarter',
      IconComp: PieChart,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Quarterly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '8 hours a day, 5 days a week',
        'Minimum: 3 months'
      ]
    },
    {
      id: 'yearly',
      title: 'Yearly',
      subtitle: 'Starting From',
      price: '$24000/ Year',
      IconComp: Calendar,
      isFeatured: true,
      saveText: 'Save Up TO 20%',
      badgeText: 'Best Deal',
      features: [
        'Billing cycle : Monthly/Yearly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '8 hours a day, 5 days a week',
        'Dedicated PHP Technical Lead included'
      ]
    }
  ];

  // Automatic 1-by-1 continuous card scrolling
  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setEnableTransition(true);
      setCardSlideIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(cardSlideIndex % hiringModelCards.length);
    }
  };

  const handlePrevCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev > 0 ? prev - 1 : hiringModelCards.length - 1));
  };

  const handleNextCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Dedicated PHP Developers | Top PHP Web Programmers Firevy.Co"
        description="Hire experienced PHP developers from Firevy.Co. Build secure, scalable web applications, custom APIs, and modern PHP backends at affordable hourly rates."
        canonical="/services/hire-php-developers"
      />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire PHP Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                We have a team of talented and skilled PHP developers who are well-versed in creating PHP applications. Hire PHP Developers for AI Integration to build intelligent, scalable, and secure solutions tailored to your business needs. Contact us to get your free quote!
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 pb-2">
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">200+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">20+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">2800+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">320+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box */}
              <div className="space-y-3 pt-3">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[16px] p-2 pl-3.5 pr-2 w-full max-w-[410px] shadow-lg shadow-[#0089a8]/25">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-4 h-4 text-[#0089a8] stroke-[2.5]" />
                    </div>
                    <span className="text-xl sm:text-[22px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-[700] px-6 py-2.5 rounded-[10px] text-[15px] transition-all shadow-sm flex items-center justify-center"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Image Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xl">
                <img
                  src="/images/php_hero_monitor_illustration.svg"
                  alt="Hire PHP Developers"
                  className="w-full h-auto object-contain max-h-[460px]"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2. BRAND LOGO MARQUEE */}
      <BrandLogoMarquee />

      {/* 3. SECTION 2: Hire Professional PHP Developers With Right Skills & Experience */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Illustration Image */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[550px]">
                <img
                  src="/images/php_developers_team_illustration.svg"
                  alt="Hire Professional PHP Developers With Right Skills & Experience"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Hire Professional PHP Developers With Right Skills & Experience
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Now, you can Hire AI PHP Developers on an hourly or weekly basis at a reasonable cost. We have a team of top PHP developers with a wide range of expertise, allowing them to work on everything from the most basic PHP apps to complicated websites. Businesses can also Hire Generative AI PHP Developers to build intelligent, AI-powered web applications and Hire AI Backend PHP Developers for secure and automation-ready backend solutions. By understanding programming languages and online solutions, our PHP developers can assist build a positive user experience for your application or website's customers. Depending on the client's, the project's, or the company's requirements, you may hire PHP programmers from us.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. SECTION 3: Flexible Hiring Models Carousel */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/70 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire PHP Developers from Firevy.Co Starts from,
            </p>
          </div>

          {/* Cards Carousel Container */}
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!enableTransition ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${cardSlideIndex * (100 / 3)}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {[...hiringModelCards, ...hiringModelCards, ...hiringModelCards].map((card, index) => {
                const IconComp = card.IconComp;
                return (
                  <div
                    key={`${card.id}-${index}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 py-4"
                  >
                    <div
                      className={`h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                        card.isFeatured
                          ? 'border-2 border-[#0083B0] shadow-xl ring-4 ring-[#0083B0]/10 scale-[1.02]'
                          : 'border border-slate-200/80 shadow-md hover:shadow-xl'
                      }`}
                    >
                      {/* Top Save text or badge */}
                      {card.saveText && (
                        <div className="text-center font-bold text-xs text-[#0083B0] tracking-wider uppercase mb-2">
                          {card.saveText}
                        </div>
                      )}

                      <div className="space-y-4">
                        {/* Header Icon Circle */}
                        <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0083B0] mx-auto shadow-xs">
                          <IconComp className="w-6 h-6 stroke-[2]" />
                        </div>

                        {/* Title & Badge */}
                        <div className="text-center space-y-1">
                          <div className="flex items-center justify-center space-x-2">
                            <h3 className="text-xl font-[800] text-slate-900">{card.title}</h3>
                            {card.badgeText && (
                              <span className="bg-cyan-100 text-[#0083B0] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                {card.badgeText}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">{card.subtitle}</div>
                          <div className="text-2xl font-[900] text-slate-900 pt-1">{card.price}</div>
                        </div>

                        {/* Feature Bullets */}
                        <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                          {card.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#0083B0] shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer Button */}
                      <div className="pt-6 mt-6 border-t border-slate-100 text-center space-y-2">
                        <a
                          href="#quote-form"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`w-full inline-flex items-center justify-center font-bold py-3 px-6 rounded-xl transition-all shadow-sm ${
                            card.isFeatured
                              ? 'bg-[#0083B0] hover:bg-[#006095] text-white shadow-md'
                              : 'bg-[#006095] hover:bg-[#0083B0] text-white'
                          }`}
                        >
                          Hire Now
                        </a>
                        <div className="text-[11px] text-slate-500 font-medium pt-1">
                          We sign NDA for all our projects.
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <button
              onClick={handlePrevCard}
              className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
              aria-label="Previous card"
            >
              <ArrowLeft className="w-7 h-7 stroke-[2.5] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNextCard}
              className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
              aria-label="Next card"
            >
              <ArrowRight className="w-7 h-7 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Container>
      </section>

      {/* 5. SECTION 4: Comparison Table */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-200/60 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire PHP Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005C8A] text-white font-bold text-sm sm:text-base">
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4">Range of Developers</th>
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4 text-center">Junior Developers</th>
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4 text-center">Mid-Level Developers</th>
                    <th className="py-4 px-6 w-1/4 text-center">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Approx Cost</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0] border-r border-slate-200">$17</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0] border-r border-slate-200">$21</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0]">$28</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Years of Experience</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">1-3 Years</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">3-5 Years</td>
                    <td className="py-4 px-6 text-center">5+ Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Project Manager</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Time Zone Flexibility</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Quality Guarantee</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Working Hours</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-4 px-6 text-center">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SECTION 5: Brief About Our PHP Development Services */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Brief About Our PHP Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Hire Our PHP Developers To Get Custom Web and API Development Services. Benefits of Hiring them include: Our developers will produce your PHP project in real-time and with 100 percent correctness. Our PHP developers have a history of completing all project deadlines on time and providing complete customer satisfaction.
                </p>
                <p>
                  Experience well-structured code and construct a next-generation backend solution with our safe, scalable, dependable, and high-quality software development services at an accessible price. Our PHP developers have extraordinary communication abilities, so working with us will be effortless.
                </p>
              </div>
            </div>

            {/* Right Column: Graphic Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xl">
                <img
                  src="/images/php_leverage_expertise_illustration.jpg"
                  alt="Brief About PHP Development Services"
                  className="w-full h-auto object-contain max-h-[440px] rounded-2xl shadow-xl border border-slate-200/80"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. SECTION 5.5: Clutch Top Rated Badges Horizontal Auto-Scroll Banner */}
      <ClutchTopRatedBanner title="World Wide Top Rated PHP Development Company on Clutch" />

      {/* 8. SECTION 5.6: Who Exactly Is A PHP Developer? */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100 text-left">
        <Container>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16 font-sans">
            Who Exactly Is A PHP Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Box with Quote & Bold Text */}
            <div className="lg:col-span-5 bg-[#EBF7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              {/* Background Wavy Subtle Pattern */}
              <svg className="absolute inset-0 w-full h-full text-cyan-200/20 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M 0 100 C 100 50, 200 150, 300 100 C 400 50, 500 150, 600 100" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 200 C 100 150, 200 250, 300 200 C 400 150, 500 250, 600 200" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 300 C 100 250, 200 350, 300 300 C 400 250, 500 350, 600 300" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="relative z-10 space-y-6">
                {/* Large Quote Icon */}
                <div className="text-[#005D89]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-[#005D89] leading-[1.25] tracking-tight">
                  Lightweight And<br />
                  Intuitive<br />
                  Applications
                </h3>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  A PHP code used for the logic of a server-side web application is something that a PHP developer is accountable for producing. You can also Hire PHP Developers for AI Integration to connect intelligent features, automation tools, and AI-driven functionalities with your PHP applications. Hire PHP Programmers to construct backend components, assist front-end developers, and connect web applications to web services provided by third parties. Additionally, the developer is responsible for managing data flow between the users and the servers. The good news is that you can Hire PHP Developer in India at a meager cost to work remotely for you.
                </p>
                <p>
                  Our team has worked on various projects involving building websites using PHP, including e-commerce platforms, SaaS applications, custom CMS solutions, and RESTful APIs. We provide several different recruiting choices, giving you the freedom to Hire Dedicated PHP Developers or teams by your organization's needs. Contact us as soon as possible if you are interested in hiring PHP developers for your project.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-[#005D89] hover:bg-[#004d73] text-white font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
                >
                  Let's Discuss Your Project
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 9. SECTION 6: Our PHP Development Services Grid */}
      <PremiumServicesGrid techName="PHP" />

      {/* 10. SECTION 7: Seasoned PHP Experts */}
      <SapphireSeasonedExpertsSection techName="PHP" />

      {/* 11. SECTION 9: Industries We Serve with PHP */}
      <IndustryFocusedInsightsSection techName="PHP" />

      {/* 12. SECTION 9.5: About Us Company Achievements Stats */}
      <AboutUsStats companyName="Sapphire" />

      {/* 12.5. SECTION 9.55: PHP Development Company Video Banner */}
      <PhpCompanyVideoBanner title="PHP Development Company" />

      {/* 13. SECTION 9.6: Sectors Thriving Through Firevy's Bespoke PHP App Development Services */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke PHP App Development Services" stroke="none" />

      {/* 14. 3 SEQUENTIAL COMPONENTS FROM SCREENSHOT BELOW SECTORS THRIVING */}
      {/* 14.1 Component 1: Employ the Advanced Proficiency */}
      <LeverageExpertiseGridSection brandName="Sapphire" title="Employ the Advanced Proficiency of Sapphire’s Dedicated Development Team" />

      {/* 14.2 Component 2: How We Divide Your Project Responsibilities */}
      <HowWeDivideResponsibilitiesGrid brandName="Sapphire" />

      {/* 14.3 Component 3: Success Stories */}
      <SuccessStoriesSection />

      {/* 16. SECTION 10: PHP Technical Proficiency / Tech Stack */}
      <TechStackProficientGrid techName="PHP" />

      {/* 16.1 Component from screenshot: The Expertise Of Our PHP Developers */}
      <ExpertiseOfPhpDevelopersGrid />



      {/* 16.2 Component 2 from screenshot: Proud To Have Picked These Up Along The Way */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* 16.3 Component 3 from screenshot: Benefits of Hiring Dedicated Developers */}
      <BenefitsOfHiringDedicatedDevelopers title="Benefits of Hiring Dedicated Developers" />

      {/* 17. SECTION 13: 4 Steps to Hire PHP Developers */}
      <HireDeveloper4Steps techName="PHP" />

      {/* 18. TESTIMONIALS & OTHER SECTIONS */}
      <VideoTestimonialsStory />
      <EngagementModelsSection />
      <SuccessMatrixGrid />
      <InnovativeSolutionVideo />
      <ProcessWeFollow />
      <ClientReviewsDarkSection />
      <DigitalTransformationCaseStudies />
      <SapphireFaqSection techName="PHP" />
      <SocialMediaSection />
      <RecentBlogsSection />
      <WhatSetsUsApartSection />
      <ConversionCalloutBanner />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HirePhpDevelopersService;
