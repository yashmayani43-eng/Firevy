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
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: '4x Higher CTR', label: 'Improvement in ad click-through rates via personalized Generative AI content.' },
    { value: '50% ROAS Increase', label: 'Return on ad spend optimization using predictive audience targeting.' },
    { value: 'Automated Content', label: 'Generate thousands of brand-compliant blog, social, and email copies in seconds.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'Generative AI Content & Creative Production',
      icon: <PenTool className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Automate high-converting marketing copywriting, ad copy generation, SEO blog posts, and multi-modal visual assets aligned with brand guidelines.',
      bullets: [
        'Brand Voice Fine-Tuned Copywriting',
        'Automated SEO Content Generation',
        'Multi-Variant Ad Copy Creation',
        'Image & Graphic Generation Pipelines'
      ]
    },
    {
      id: 1,
      title: 'Predictive Audience Segmentation & Targeting',
      icon: <Target className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Use machine learning clustering to identify high-intent buyer personas and predict customer lifetime value (LTV) for hyper-targeted campaigns.',
      bullets: [
        'Lookalike Audience Modeling',
        'Churn & LTV Prediction',
        'Dynamic Personalization Engines',
        'Behavioral Campaign Triggers'
      ]
    },
    {
      id: 2,
      title: 'AI Marketing Automation & Attribution',
      icon: <Megaphone className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Optimize ad spend across channels in real-time with multi-touch attribution and automated bid adjustments driven by AI analytics.',
      bullets: [
        'Multi-Touch Attribution Modeling',
        'Real-Time Bidding Optimization',
        'Automated Email & SMS Sequences',
        'Competitor Ad Intelligence Scrapers'
      ]
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

      <section className="py-14 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200">
                <div className="text-[32px] font-[900] text-[#006B8F] mb-1">{s.value}</div>
                <p className="text-[13.5px] text-[#475569] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F8FA] border-y border-slate-200/80 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950">
              AI Marketing Solutions & Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-4 space-y-3">
              {tailoredSolutions.map((sol, idx) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold text-sm flex items-center justify-between border cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#006B8F] text-white border-[#006B8F]'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className={activeTab === idx ? 'text-white' : 'text-[#006B8F]'}>{sol.icon}</span>
                    <span>{sol.title}</span>
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{tailoredSolutions[activeTab].title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{tailoredSolutions[activeTab].shortDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {tailoredSolutions[activeTab].bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006B8F]" />
                    <span className="text-xs text-slate-700 font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#006B8F] text-white text-sm font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <PremiumServicesGrid />
      <OurRecentProjectsGrid />
      <VideoTestimonialsStory />
      <SapphireFaqSection faqList={faqs} />
      <FeaturedInLogosGrid />

      <section className="py-14 bg-[#005F96] text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Transform Your Marketing Campaigns with AI Today
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#005F96] rounded-lg font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Talk to Marketing AI Consultants</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AiInMarketingService;
