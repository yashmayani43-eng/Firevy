import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TrustMarquee from '../home/TrustMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import BRAND from '../../constants/brand';
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Zap,
  Globe,
  Layers,
  Cpu,
  RefreshCw
} from 'lucide-react';

export const NextJsDevelopmentService = () => {

  // 6 Core Next.js Expertise Cards
  const nextServices = [
    {
      title: "Custom Next.js Full-Stack App Development",
      desc: "Architect scalable, SEO-friendly full-stack web applications utilizing Next.js App Router, React Server Components, and Server Actions."
    },
    {
      title: "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      desc: "Optimize load speeds and search engine rankings using Hybrid Rendering, Incremental Static Regeneration (ISR), and dynamic edge caching."
    },
    {
      title: "Next.js Headless CMS Integration",
      desc: "Connect Next.js with headless content management systems like Sanity, Strapi, Contentful, WordPress GraphQL, and Storyblok."
    },
    {
      title: "E-Commerce Next.js & Headless Storefronts",
      desc: "Build ultra-fast e-commerce platforms integrated with Shopify Storefront API, Stripe, WooCommerce, and BigCommerce APIs."
    },
    {
      title: "Legacy React to Next.js Migration & SEO Upgrade",
      desc: "Refactor client-side Single Page Applications (SPAs) into SSR Next.js applications for 100/100 Google Lighthouse Core Web Vitals."
    },
    {
      title: "Edge Microservices & Vercel/AWS Cloud Infrastructure",
      desc: "Deploy serverless edge functions, API routes, and global CDN caching across Vercel, AWS CloudFront, Docker, and Kubernetes."
    }
  ];

  // 8 FAQs
  const nextjsFaqs = [
    {
      q: "What are the key benefits of Next.js over standard React apps?",
      a: "Next.js provides out-of-the-box Server-Side Rendering (SSR), Static Site Generation (SSG), file-system routing, automatic image optimization, and built-in SEO advantages compared to client-side rendered React SPAs."
    },
    {
      q: "How does Next.js improve SEO and Google Core Web Vitals?",
      a: "By pre-rendering pages on the server and serving fully hydrated HTML to search crawlers, Next.js dramatically improves First Contentful Paint (FCP), Largest Contentful Paint (LCP), and search indexing."
    },
    {
      q: "Can we migrate an existing React or WordPress site to Next.js?",
      a: "Yes! We specialize in migrating legacy React single page apps and traditional CMS sites to Next.js headless architectures without data loss or SEO disruption."
    },
    {
      q: "What rendering strategy (SSR vs SSG vs ISR) should our project use?",
      a: "SSG is ideal for marketing pages and documentation; SSR is suited for dynamic user dashboards and real-time feeds; ISR combines both by updating static pages incrementally in the background."
    },
    {
      q: "Is Next.js suitable for high-traffic enterprise e-commerce platforms?",
      a: "Absolutely. Top brands use Next.js for headless e-commerce due to lightning-fast page transitions, instant search filtering, and seamless payment gateway integrations."
    },
    {
      q: "Where can Next.js applications be deployed?",
      a: "Next.js can be deployed globally on Vercel, AWS Amplify, Docker containers on AWS ECS/GCP, or traditional Node.js Linux servers."
    },
    {
      q: "What engagement models do you offer for hiring Next.js developers?",
      a: "We offer flexible engagement models including Dedicated Next.js Engineers, Fixed-Price Sprint Delivery, and Hourly Staff Augmentation."
    },
    {
      q: "How quickly can Firevy start on our Next.js project?",
      a: "Following our initial technical alignment and requirements scoping, dedicated Next.js developers can onboard and begin coding within 48 to 72 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`Next Js Development Company in USA | ${BRAND.name}`}
        description="Next.js Is A Framework That Is Effective At Generating High-Performance Server-Rendered And Static React Applications. Contact Firevy today."
      />

      {/* =========================================================================
          IMAGE 1: HERO SECTION
         ========================================================================= */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/40 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-slate-200/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services/frontend-development" className="hover:text-[#005F96] transition-colors">Front End Development</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Next Js Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-[1.15]"
              >
                Next Js Development<br className="hidden sm:inline" /> Company in USA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-slate-600 font-[400] leading-relaxed max-w-2xl"
              >
                Next.JS Is A Framework That Is Effective At Generating High-Performance Server-Rendered And Static React Applications
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004a77] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Visual Illustration (Next.js Development Illustration) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[500px] relative flex items-center justify-center p-2"
              >
                <img
                  src="/images/nextjs_hero_illustration_transparent.png"
                  alt="Next.js Development Services"
                  className="w-full h-auto max-w-[480px] object-contain drop-shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </Container>

        {/* IMAGE 1: Brand Logo Strip */}
        <div className="mt-8">
          <TrustMarquee />
        </div>
      </section>

      {/* =========================================================================
          IMAGE 1 & 2: GET NEXT JS APPLICATION DEVELOPMENT SERVICES
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[460px] relative flex justify-center">
                <img
                  src="/images/angular_section2_illustration.jpg"
                  alt="Get Next.js Application Development Services"
                  className="w-full h-auto max-w-[440px] object-contain drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-5 text-left font-sans">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Get Next Js Application<br className="hidden sm:inline" /> Development Services
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  It uses React throughout the frontend and hybrid server protocols. Engage with us for advanced Next.js Application Development that will positively impact your company. These applications will be inventive, SEO-optimized, and highly influential.
                </p>
                <p>
                  Because we are a Next JS Web Development Company of the highest caliber, we can effortlessly satisfy our customers' expectations and carry out their activities as they have chosen. You can Hire Next Developers to swiftly construct Next apps using server components and hybrid rendering pipelines.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 2: BRIEF ABOUT OUR NEXT JS DEVELOPMENT
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-5 text-left font-sans">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Next Js<br className="hidden sm:inline" /> Development
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Because Next.js is accessible for both server-side and static site rendering of React applications using dynamic edge functions, it has the advantage of delivering pre-rendered HTML to browsers instantaneously. Another incredible benefit of Next.js web development is how simple it is to optimize search engine ranking and user conversion rates.
                </p>
                <p>
                  Next.js has access to Vercel and AWS Cloud platforms, enabling developers to build enterprise-level headless storefronts, web portals, and microservices with high stability and security.
                </p>
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] relative flex justify-center">
                <img
                  src="/images/pwa_brief_services_illustration.jpg"
                  alt="Brief About Our Next.js Development"
                  className="w-full h-auto max-w-[440px] object-contain drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 3: CLUTCH TOP RATED BANNER
         ========================================================================= */}
      <ClutchTopRatedCompanyBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* =========================================================================
          IMAGE 3: GET A 100% CUSTOMIZABLE NEXT JS DEVELOPMENT BY EXPERTS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Get A 100% Customizable Next Js Development By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Quote Card */}
            <div className="lg:col-span-5 flex relative">
              <div className="w-full bg-[#EBF5FC] rounded-2xl p-8 sm:p-10 flex flex-col justify-center shadow-xs relative text-left border border-sky-100/60">
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EBF5FC] z-20" />

                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#005F96] fill-[#005F96]" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <h3 className="text-2xl sm:text-[28px] font-[800] text-[#005F96] tracking-tight leading-snug font-sans">
                  Lightning-Fast, SEO-Optimized, And Scalable Apps
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left font-sans">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our developers design integrated strategies using the performance and SSR capabilities of Next.js. Hire Next JS Developers to create seamless websites, enterprise portals, and headless storefronts through which you communicate with your consumers.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                When you choose to outsource the development of your Next.js application to our Next Js Development Company, you may anticipate receiving services of exceptional quality, specialized resources, sophisticated project management, and cost reductions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          IMAGE 4: OUR PREMIUM SERVICES GRID
         ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* =========================================================================
          IMAGE 4: THE EXPERTISE OF OUR NEXT JS DEVELOPERS
         ========================================================================= */}
      <section className="py-14 sm:py-16 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3 font-sans">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
              The Expertise Of Our Next Js Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Our Next Developers Have Years Of Expertise In Developing High-Performance Web Solutions For You. Our Expertise Includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {nextServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#005F96] flex items-center justify-center font-bold text-lg group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005F96] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9: PROUD AWARDS BANNER
         ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          SECTION 10: HIRING MODELS
         ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          SECTION 11: INNOVATIVE SOLUTIONS VIDEO SECTION
         ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          SECTION 12: PROCESS WE FOLLOW
         ========================================================================= */}
      <ProcessWeFollow title="Process We Follow" subtitle="Our agile Next.js engineering lifecycle ensures maximum lighthouse performance, SEO indexing, and zero-downtime Vercel/AWS deployment." />

      {/* =========================================================================
          SECTION 13: OUR STORY THEIR WORDS
         ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          SECTION 14: TRUSTED BRANDS GRID
         ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SECTION 15: SUCCESS MATRIX GRID
         ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 16: FEATURED IN BRANDS
         ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          SECTION 17: CASE STUDIES
         ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          SECTION 18: SAPPHIRE FAQ SECTION
         ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Explore answers to common questions about our Next.js development services."
        faqs={nextjsFaqs}
      />

      {/* =========================================================================
          SECTION 19: RECENT BLOGS
         ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* =========================================================================
          SECTION 20: WHAT SETS US APART
         ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* =========================================================================
          SECTION 21: HAVE NEXT JS DEVELOPMENT CHALLENGE TO ADDRESS ?
         ========================================================================= */}
      <ConversionCalloutBanner
        data={{
          title: "Have Next JS Development Challenge To Address ?",
          description: "Get Access To Top Next JS Development To Transform Your Ideas Into A Robust Application",
          buttonText: "Hire Now",
          buttonLink: "/contact"
        }}
        hideSideImages={true}
      />

      {/* =========================================================================
          SECTION 22: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS
         ========================================================================= */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default NextJsDevelopmentService;
