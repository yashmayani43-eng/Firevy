import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import OurRecentProjectsGrid from './OurRecentProjectsGrid';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import CuttingEdgeTechAiSection from './CuttingEdgeTechAiSection';
import AiSuccessStoriesSection from './AiSuccessStoriesSection';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import WeHaveBeenFeaturedInGrid from '../home/WeHaveBeenFeaturedInGrid';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import RecentPodcastsSection from '../home/RecentPodcastsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Megaphone,
  Target,
  PenTool,
  Users
} from 'lucide-react';

export const AiInMarketingService = () => {
  const [marketingServicesSlide, setMarketingServicesSlide] = useState(0);

  const marketingOfferings = [
    {
      title: 'Chatbot & Virtual Assistant Integration',
      desc: 'Drive user experience and lead generation using AI-powered chatbots providing instant, smart responses across devices.'
    },
    {
      title: 'Sentiment & Trend Analysis',
      desc: 'Track customer sentiment and social media feedback using AI technology to gauge sentiment, new trends, and customer needs.'
    },
    {
      title: 'AI-Driven Content Generation',
      desc: 'Generate personalized and context-specific marketing content automatically with NLP and generative AI models based on your brand tone.'
    },
    {
      title: 'Customer Segmentation & Targeting',
      desc: 'Segment audiences using AI-driven analytics for hyper-targeted marketing initiatives.'
    }
  ];



  const faqs = [
    {
      q: '1. What is AI in Marketing Development?',
      a: 'AI in Marketing Development provides automated content creation, hyper-personalized recommendation engines, predictive audience targeting, and campaign attribution tools.'
    },
    {
      q: '2. How does Generative AI help marketing teams?',
      a: 'It produces personalized ad copy, email campaigns, blog posts, and visual media in seconds while maintaining strict corporate brand guidelines.'
    },
    {
      q: '3. Can AI Marketing software integrate with HubSpot and Salesforce?',
      a: 'Yes! Our custom marketing AI applications integrate with HubSpot, Salesforce Marketing Cloud, Meta Ads API, Google Ads API, and Klaviyo.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI in Marketing Services | AI Marketing Software Company"
        description="Accelerate marketing ROI with custom Generative AI content production, predictive audience targeting, and automated attribution."
        canonical="/services/ai-in-marketing"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-[#006B8F] text-xs font-bold uppercase tracking-wider">
                <Megaphone className="w-3.5 h-3.5" />
                <span>Next-Gen Marketing Technology</span>
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] leading-[1.15]">
                AI in Marketing Services
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Revolutionize your marketing strategy with Artificial Intelligence. We build custom marketing automation platforms, Generative AI content generators, and predictive audience targeting solutions that drive revenue growth.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Build Marketing AI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="AI in Marketing"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BrandLogoMarquee />

      {/* =========================================================================
          1. LEADING AI-DRIVEN DIGITAL MARKETING SERVICES (Matching User Image)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Digital Marketing Illustration Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-md border border-slate-100">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="Leading AI-Driven Digital Marketing Services"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            {/* Right Column: Heading & Paragraph */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Leading AI-Driven Digital Marketing Services
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Being an established AI in marketing automation and personalization services for Small Business, we leverage a robust combination of technology, strategy, and creativity in every association. Our staff is excellent at crafting AI Based Marketing Services that interact harmoniously with your business systems, providing safe, easy-to-use, and robust marketing solutions. We engage with startups, small businesses, and large firms to provide measurable results. Our strategy is based on profound industry knowledge, innovation, and a tested history of delivering AI in Social Media Marketing Automation that creates lasting value.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. WORLD WIDE TOP RATED IT COMPANY ON CLUTCH BANNER (Matching User Image)
          ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          3. TRANSFORMING AI BASED MARKETING SERVICES WITH BEST OUTCOME (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Transforming AI Based Marketing Services with Best Outcome
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 bg-[#ECF4F8] rounded-[24px] p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-center min-h-[260px]">
              <div className="text-[#0082C8] text-6xl font-serif font-black leading-none mb-2">“</div>
              <h3 className="text-[24px] sm:text-[28px] font-[800] text-[#006B8F] leading-tight">
                Secure, Scalable & Future-Ready Apps
              </h3>
            </div>

            {/* Right Paragraphs */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Our development team has provided AI in Marketing solutions for numerous global clients across various businesses, enabling firms to leverage machine learning and predictive analytics to make better, quicker, and more targeted marketing decisions. With a clear emphasis on security, scalability, and performance, we guarantee every project provides high-impact results.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We have expertise in developing business-specific AI Marketing for Small Business and enterprise-level applications that automate campaign management, audience segmentation, content creation, and customer engagement. Whether you want to optimize your email campaigns, personalize customer journeys, or improve digital ads, our expert team develops strategies that convert.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. CUTTING EDGE TECHNOLOGY SAPPHIRE USE FOR ARTIFICIAL INTELLIGENCE DEVELOPMENT (Matching User Image)
          ========================================================================= */}
      <CuttingEdgeTechAiSection title="Cutting Edge Technology Sapphire Use For Artificial Intelligence Development" />

      <PremiumServicesGrid />

      {/* SUCCESS STORIES SECTION */}
      <AiSuccessStoriesSection />

      {/* =========================================================================
          1. PROUD TO HAVE PICKED THESE UP ALONG THE WAY BANNER (Matching User Image)
          ========================================================================= */}
      <TrustRecognitionBanner />

      {/* =========================================================================
          2. BENEFITS OF AI IN MARKETING SERVICES (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight leading-tight">
              Benefits of AI in Marketing Services
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed font-normal max-w-3xl mx-auto">
              Collaborate with us on AI-driven marketing software and know that your operations are efficient, flexible, and data-driven. Here's how we make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="18" r="7" fill="#BAE6FD" />
                  <path d="M10 38c0-7 6-12 14-12s14 5 14 12" strokeWidth="2.2" />
                  <circle cx="36" cy="14" r="2.5" fill="#0082C8" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Increased Customer Personalization</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Provide hyper-personalized experiences and content that enhance engagement and loyalty.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="16" />
                  <circle cx="24" cy="24" r="8" fill="#BAE6FD" />
                  <circle cx="24" cy="24" r="3" fill="#0082C8" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Accelerated Decision-Making</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Use real-time analysis of data for smarter, faster marketing optimizations and strategies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 38l12-14 8 8 14-16" strokeWidth="2.5" />
                  <path d="M34 16h8v8" strokeWidth="2.5" fill="#BAE6FD" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Improved Campaign ROI</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Maximize ad spend and returns with intelligent targeting and campaign tracking.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="14" fill="#BAE6FD" stroke="#0082C8" />
                  <path d="M24 14v10l6 4" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">24/7 Campaign Management</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Operate always-on marketing campaigns with automated never-sleeping systems.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 28a10 10 0 0 1 18-6 8 8 0 1 1 6 12H12z" fill="#BAE6FD" stroke="#0082C8" />
                  <path d="M24 20v12m-4-4l4 4 4-4" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Scalable Across Business Sizes</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Our AI Marketing for Small Business and large enterprises guarantees customized scalability and flexibility for each brand.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[16px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0082C8] mb-1">
                <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="10" width="32" height="22" rx="3" fill="#BAE6FD" />
                  <line x1="16" y1="38" x2="32" y2="38" strokeWidth="2.5" />
                  <line x1="24" y1="32" x2="24" y2="38" strokeWidth="2.5" />
                  <path d="M18 20l4 4 8-8" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="text-[17px] font-[800] text-slate-900 tracking-tight">Data-Driven Insights</h3>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-normal">
                Obtain reliable insights and projections that facilitate strategic planning and future growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. OUR AI IN MARKETING SERVICES INCLUDE (Matching User Image)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2.5">
            <h2 className="text-[26px] sm:text-[34px] font-[800] text-slate-950 tracking-tight leading-tight">
              Our AI in Marketing Services Include
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed font-normal max-w-3xl mx-auto">
              Our full-service AI in marketing solutions aim to boost operational flexibility, and workforce efficiency. Learn about our fundamental service offerings below
            </p>
          </div>

          {/* Light Blue Cards Slider Container */}
          <div className="relative overflow-hidden max-w-6xl mx-auto px-1 py-2">
            <div
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{ transform: `translateX(-${marketingServicesSlide * 315}px)` }}
            >
              {marketingOfferings.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#DDF4FF] rounded-[18px] p-6 sm:p-7 border border-sky-100/70 shadow-xs flex flex-col justify-between text-left shrink-0 w-[290px] sm:w-[320px] min-h-[220px] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="text-[17px] font-[800] text-slate-900 mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] text-[#334155] leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Slider Navigation Arrows */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={() => setMarketingServicesSlide(prev => Math.max(0, prev - 1))}
              disabled={marketingServicesSlide === 0}
              className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${
                marketingServicesSlide === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              ←
            </button>
            <button
              onClick={() => setMarketingServicesSlide(prev => Math.min(marketingOfferings.length - 3, prev + 1))}
              disabled={marketingServicesSlide >= marketingOfferings.length - 3}
              className={`w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center transition-colors shadow-xs font-bold text-lg ${
                marketingServicesSlide >= marketingOfferings.length - 3 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              →
            </button>
          </div>
        </Container>
      </section>

      {/* 1. Business Friendly Hiring Models : Building Greater Futures Through Innovation */}
      <AndroidHiringModels />

      {/* 2. Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 3. Process We Follow */}
      <ProcessWeFollow />

      {/* 4. Our Story, Their Words */}
      <VideoTestimonialsStory />

      {/* 5. Trusted By The World’s Leading Brands */}
      <TrustedBrandsGrid />

      {/* 6. Success Matrix */}
      <SuccessMatrixGrid />

      {/* 7. We Have Been Featured In */}
      <WeHaveBeenFeaturedInGrid />

      {/* 8. Digital Transformation Case Studies */}
      <DigitalTransformationCaseStudies />

      {/* 9. Frequently Asked Questions */}
      <SapphireFaqSection faqList={faqs} />

      {/* 10. Our Recent Podcasts */}
      <RecentPodcastsSection />

      {/* 11. What Sets Us Apart As Ethical AI Development Company? */}
      <WhatSetsUsApartSection title="What Sets Us Apart As Ethical AI Development Company?" />

      {/* 12. LAST CTA BANNER & SUBSCRIBE NEWSLETTER SECTION (Matching User Image) */}
      <ConversionCalloutBanner
        data={{
          title: "Have AI in Marketing Challenge To Address ?",
          description: "Get access to top AI in Marketing to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "/contact",
          hideSideImages: true
        }}
      />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default AiInMarketingService;
