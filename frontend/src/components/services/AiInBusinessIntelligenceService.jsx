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
  BarChart3,
  Database,
  Search,
  PieChart
} from 'lucide-react';

export const AiInBusinessIntelligenceService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: '10x Faster Insights', label: 'Speed in generating complex SQL and executive dashboards from natural language.' },
    { value: '95% Accuracy', label: 'In predictive sales forecasting and churn detection algorithms.' },
    { value: 'Automated Reporting', label: 'Eliminate manual weekly reporting overhead with autonomous AI summary generation.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'Conversational BI & Natural Language Queries',
      icon: <Search className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Query enterprise data warehouses in plain English and receive instant interactive charts, SQL queries, and executive summaries.',
      bullets: [
        'Natural Language to SQL (NL2SQL)',
        'Voice & Chat Query Dashboards',
        'Multi-Database Unified Search',
        'Role-Based Data Permissions'
      ]
    },
    {
      id: 1,
      title: 'Predictive Analytics & Forecasting',
      icon: <TrendingUp className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Forecast revenue, customer churn, inventory demand, and market trends with advanced machine learning regression models.',
      bullets: [
        'Predictive Sales & Revenue Modeling',
        'Customer Lifetime Value & Churn Prediction',
        'Supply Chain & Demand Forecasting',
        'Financial Risk Assessment'
      ]
    },
    {
      id: 2,
      title: 'Automated Anomaly & Outlier Detection',
      icon: <BarChart3 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Continuously scan operational KPIs to alert management instantly about unusual spikes, drops, or process bottlenecks.',
      bullets: [
        'Real-Time KPI Drift Monitoring',
        'Automated Root-Cause Analysis',
        'Smart Slack/Email Alert Triggers',
        'Fraud & Anomaly Prevention'
      ]
    }
  ];

  const faqs = [
    {
      q: '1. What is AI in Business Intelligence?',
      a: 'AI in Business Intelligence infuses machine learning and natural language processing into data analytics pipelines to automate insights and forecasting.'
    },
    {
      q: '2. Can AI BI connect to Snowflake, BigQuery, or PostgreSQL?',
      a: 'Yes! Our custom AI BI platforms connect directly to Snowflake, Databricks, BigQuery, Redshift, and relational databases.'
    },
    {
      q: '3. How does NL2SQL benefit non-technical executives?',
      a: 'Executives can type questions like "What were our top 3 regions last quarter?" and instantly receive clean charts and numbers.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI in Business Intelligence Services | Smart Analytics Company"
        description="Transform corporate data into actionable decisions with AI-driven Business Intelligence, NL2SQL, and predictive analytics."
        canonical="/services/ai-in-business-intelligence"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-[#006B8F] text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Smart Enterprise Analytics</span>
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] leading-[1.15]">
                AI in Business Intelligence Services
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Supercharge your data analytics with AI. We integrate Natural Language Queries (NL2SQL), automated anomaly detection, and predictive forecasting to help your leadership team make data-backed decisions faster.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Build AI BI Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="AI in Business Intelligence"
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
              AI BI Capabilities & Solutions
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
              Turn Big Data into Instant Business Decisions with AI BI
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#005F96] rounded-lg font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Consult BI Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AiInBusinessIntelligenceService;
