import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SoftwareProductDiscoveryCuttingEdgeTechSection from './SoftwareProductDiscoveryCuttingEdgeTechSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import SoftwareProductDiscoveryExpertiseServices from './SoftwareProductDiscoveryExpertiseServices';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import { ArrowRight } from 'lucide-react';

export const SoftwareProductDiscoveryService = () => {
  // 6 Benefits Cards Grid (Exact 1:1 Match with Outline SVG Icons)
  const discoveryBenefits = [
    {
      title: 'Zero Engineering Waste & Scope Bloat',
      desc: 'Eliminate speculative features before a single sprint starts. We hone in strictly on core user pain points, preventing development bloat and saving up to 40% in project costs.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <path d="M16 24l6 6 12-12" />
        </svg>
      )
    },
    {
      title: 'Data-Backed Product-Market Fit Validation',
      desc: 'Verify demand through quantitative user surveys, competitor whitespace telemetry, and real user interviews rather than gut feelings and internal assumptions.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="10" />
          <circle cx="24" cy="24" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Architecturally De-risked Technology Stack',
      desc: 'Our architects execute technical spikes, benchmark third-party APIs, and simulate peak database concurrency to guarantee zero infrastructural surprises in production.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" />
          <line x1="24" y1="6" x2="24" y2="42" />
          <line x1="8" y1="15" x2="24" y2="24" />
          <line x1="40" y1="15" x2="24" y2="24" />
        </svg>
      )
    },
    {
      title: 'Crystal-Clear Cost & Delivery Predictability',
      desc: 'Receive detailed user stories, acceptance criteria, story-point estimates, and transparent sprint milestones that keep stakeholder budgets fully predictable.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="28" rx="3" />
          <line x1="8" y1="18" x2="40" y2="18" />
          <line x1="16" y1="6" x2="16" y2="12" />
          <line x1="32" y1="6" x2="32" y2="12" />
          <circle cx="20" cy="28" r="2" fill="#0084D1" />
          <circle cx="28" cy="28" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Accelerated Time-To-Seed-Funding & Market',
      desc: 'Equip founders and product owners with clickable high-fidelity Figma prototypes and executive pitch collateral to secure stakeholder buy-in and venture funding.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 36l12-24 12 24H12z" />
          <line x1="24" y1="20" x2="24" y2="28" />
          <circle cx="24" cy="32" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'User-Centric UX Workflows & High Adoption',
      desc: 'Prototype usability testing with prospective users reveals cognitive friction points early, ensuring day-one adoption, high retention, and low churn.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="8" />
          <path d="M10 38c0-7.7 6.3-14 14-14s14 6.3 14 14" />
        </svg>
      )
    }
  ];

  // 9 Comprehensive Product Discovery FAQs
  const discoveryFaqs = [
    {
      q: "What is software product discovery and why is it essential?",
      a: "Software product discovery is a structured, collaborative phase conducted prior to software development. It validates market demand, understands real customer friction, tests clickable prototypes with real users, models technical architecture, and defines a lean Minimum Viable Product (MVP). It prevents companies from spending months and significant capital building products nobody wants or will pay for."
    },
    {
      q: "How long does a typical software product discovery engagement take?",
      a: "A standard discovery sprint runs between 2 to 4 weeks depending on the complexity of your domain. During this time, our senior product strategists, UI/UX researchers, and cloud architects conduct stakeholder interviews, customer surveys, competitive analysis, clickable prototyping, and technical feasibility spikes."
    },
    {
      q: "What concrete deliverables do we receive at the conclusion of discovery?",
      a: "You receive an exhaustive Product Discovery Blueprint including: (1) Validated User Personas & Journey Maps, (2) Clickable High-Fidelity Figma Prototype, (3) Cloud Architecture Diagram & Third-Party API Feasibility Report, (4) Prioritized MVP Backlog with Acceptance Criteria, and (5) A detailed Sprint-by-Sprint Roadmap with budget and resource forecasting."
    },
    {
      q: "Can we run a product discovery phase for an existing legacy application?",
      a: "Absolutely. Many enterprise clients engage us for discovery when re-architecting, modernizing, or pivoting existing legacy platforms. We analyze current system bottlenecks, survey current enterprise users, map data migration dependencies, and blueprint a phased transition to a modern cloud-native architecture without interrupting day-to-day operations."
    },
    {
      q: "How does product discovery help prevent development budget overruns?",
      a: "Over 70% of software budget overruns stem from unclear requirements, scope creep, and unexpected technical hurdles uncovered mid-sprint. Product discovery irons out edge cases, validates user acceptance upfront, and performs architectural proof-of-concept spikes so your engineering team can code with 100% architectural certainty."
    },
    {
      q: "Who participates in the discovery workshops from our team?",
      a: "Typically, key business stakeholders, product managers, domain experts, and executive sponsors participate in collaborative discovery workshops (about 2-3 hours per week). We handle all the heavy lifting: user research, prototype design, technical benchmarking, and synthesis."
    },
    {
      q: "Do you build clickable interactive prototypes during the discovery phase?",
      a: "Yes. Our senior product designers build interactive clickable prototypes in Figma or ProtoPie. We simulate micro-interactions, responsive mobile/desktop layouts, and core user workflows, allowing you to test the interface with real prospective customers and investors before backend development begins."
    },
    {
      q: "How do you assess technical feasibility and architectural risk?",
      a: "Our Principal Cloud Architects evaluate third-party APIs, database read/write throughput requirements, latency constraints, compliance frameworks (SOC 2, GDPR, HIPAA), and cloud hosting operational costs (OpEx). If there are risky or uncertain integrations, we build isolated technical spikes to validate feasibility."
    },
    {
      q: "What happens after the product discovery phase concludes?",
      a: "Upon completion, you have a production-ready blueprint. You can immediately transition into full-scale Agile development with our dedicated engineering squads, or use the deliverables to pitch investors and internal leadership. Because our discovery team works alongside our core developers, onboarding is instantaneous with zero knowledge loss."
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      <SEO
        title="Software Product Discovery Services | De-Risk Your MVP | Firevy.Co"
        description="Transform concepts into market-validated software products. Firevy.Co delivers comprehensive product discovery sprints, interactive Figma prototypes, technical architecture spikes, and prioritized MVP roadmaps."
        keywords="software product discovery, product discovery workshop, MVP scoping, clickable prototyping, technical feasibility spike, product market fit, UX research, software architecture"
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER (Exact 1:1 Match with Reference Screenshot)                */}
      {/* ========================================================================= */}
      <section className="relative bg-white text-slate-800 pt-10 pb-14 lg:pt-14 lg:pb-18 overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#050B20] tracking-tight leading-[1.18] mb-5">
                Software Product Discovery Services
              </h1>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-[15.5px] leading-relaxed max-w-2xl mb-8 font-normal">
                A successful software product starts with a well-defined and validated idea. Our Software Product Discovery Services help businesses of any size find the right features, technologies, and go-to-market strategies before producing an actual product. We collaborate with stakeholders to understand goals, user needs, and market opportunities – and produce a validated product roadmap to save you time and budget. Interested in a validated idea to reduce risk? Contact us for a free quote to kick-start your product journey with confidence.
              </p>

              {/* 4 Stats in clean horizontal row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 pt-1">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0084D1] leading-none mb-1.5">
                    100+
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                    Software Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0084D1] leading-none mb-1.5">
                    20+
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                    Fortunes 500 Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0084D1] leading-none mb-1.5">
                    1000+
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                    Project Completed in Software
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0084D1] leading-none mb-1.5">
                    320+
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#004874] hover:bg-[#00385c] text-white font-semibold text-sm transition-colors shadow-sm gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Laptop Illustration Column */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[540px]">
                <img
                  src="/images/software_product_discovery_laptop.svg"
                  alt="Software Product Discovery Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. OVERVIEW 1: High-Impact Narrative with App Mockup                      */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/70">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Mockup Graphic */}
            <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
                <img
                  src="/images/prototype_about_illustration.jpg"
                  alt="Product Discovery Workshop and Wireframing"
                  className="w-full h-auto rounded-xl object-cover max-h-[380px]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/product_development_leading.jpg';
                  }}
                />
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-block text-[#0084D1] text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
                VALIDATE BEFORE YOU BUILD
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#050B20] tracking-tight leading-tight">
                Turn Speculative Ideas Into Validated, Scalable Software Products
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Building software without a rigorous discovery phase is one of the costliest gambles an enterprise can take. At Firevy.Co, we replace assumptions with hard data, empirical user feedback, and architectural spikes.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                {[
                  'Comprehensive Market & Competitor Whitespace Research',
                  'User Empathy Interviews & Behavioral Persona Validation',
                  'Interactive Clickable Figma Prototypes for User Testing',
                  'Architectural Blueprints & Production-Ready Sprint Backlogs'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-[#0084D1] flex items-center justify-center text-xs font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-bold text-[#0084D1] hover:text-[#006ba8] transition-colors"
                >
                  Schedule an Executive Discovery Consultation <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP RATED BANNER (Awards Ribbon)                                */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. NARRATIVE QUOTE CARD: Speech bubble style card (1:1 with Reference)    */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-100 shadow-md">
              <div className="text-4xl text-[#0084D1] font-serif leading-none mb-3">“</div>
              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
                Building the wrong product efficiently is still building the wrong product. Our software product discovery framework tests your assumptions against real market demand, eliminating costly rework and ensuring your engineering team builds what customers truly need and will pay for.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-blue-100/80 pt-4">
                <div>
                  <div className="text-sm font-bold text-[#050B20]">Product Innovation & Strategy Practice</div>
                  <div className="text-xs text-slate-500">Firevy.Co Enterprise Architecture & UX Research</div>
                </div>
                <div className="text-xs font-semibold text-[#0084D1] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  Zero Speculative Code
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING EDGE TECHNOLOGIES SECTION                                      */}
      {/* ========================================================================= */}
      <SoftwareProductDiscoveryCuttingEdgeTechSection companyName="Firevy.Co" />

      {/* ========================================================================= */}
      {/* 7. OUR PREMIUM SERVICES GRID                                              */}
      {/* ========================================================================= */}
      <PremiumServicesGrid />

      {/* ========================================================================= */}
      {/* 8. SUCCESS STORIES / PORTFOLIO                                            */}
      {/* ========================================================================= */}
      <SuccessStoriesSection />

      {/* ========================================================================= */}
      {/* 9. PROUD AWARDS BANNER                                                    */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF SOFTWARE PRODUCT DISCOVERY (6 Cards Grid with Outline SVG) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-[#0084D1] text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md mb-3">
              MAXIMIZE ROI & CERTAINTY
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#050B20] tracking-tight">
              Benefits of Software Product Discovery
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Why leading enterprises, scale-ups, and funded startups mandate our discovery sprints before committing engineering capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discoveryBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0084D1]/40 transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0084D1]/10 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#050B20] mb-3 group-hover:text-[#0084D1] transition-colors leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. EXPERTISE SERVICES CAROUSEL (SoftwareProductDiscoveryExpertiseServices) */}
      {/* ========================================================================= */}
      <SoftwareProductDiscoveryExpertiseServices />

      {/* ========================================================================= */}
      {/* 12. AGILE HIRING / ENGAGEMENT MODELS                                      */}
      {/* ========================================================================= */}
      <AndroidHiringModels
        title="Agile Engagement Models for Product Discovery"
        subtitle="Choose the optimal discovery model aligned with your product roadmap, governance, and budget."
      />

      {/* ========================================================================= */}
      {/* 13. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 14. PROCESS WE FOLLOW                                                     */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 15. OUR STORY, THEIR WORDS (Testimonials)                                 */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 16. TRUSTED BRANDS GRID                                                   */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 17. SUCCESS MATRIX                                                        */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 18. FEATURED IN BRANDS SECTION                                            */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION SLIDER                                         */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS (SapphireFaqSection 1:1 Match)              */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Clear answers on our discovery methodologies, prototype deliverables, timelines, and transition to development."
        faqs={discoveryFaqs}
        companyName="Firevy.Co"
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS                                                      */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 23. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <div id="contact">
        <IWatchChallengeCtaBanner
          heading="Ready to Validate and Launch Your Next Breakthrough Software Product?"
          text="Our senior product strategists, UX researchers, and technical architects are ready to de-risk your vision."
          buttonText="Book Product Discovery Workshop"
        />
      </div>
    </div>
  );
};

export default SoftwareProductDiscoveryService;
