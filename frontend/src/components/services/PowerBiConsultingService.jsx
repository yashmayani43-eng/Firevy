import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import ProcessWeFollow from '../common/ProcessWeFollow';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  ArrowRight,
  BarChart3,
  PieChart,
  TrendingUp,
  Database,
  Cpu,
  ShieldCheck,
  Clock,
  Sliders,
  Monitor,
  Server,
  Layers,
  Code,
  Phone,
  MessageSquare
} from 'lucide-react';

export const PowerBiConsultingService = () => {
  const rangeServices = [
    {
      title: 'Power BI Dashboard & Report Development',
      desc: 'We design custom, visually stunning interactive dashboards and executive report suites tailored to key business KPIs using Power BI Desktop and Service.',
      icon: BarChart3,
      iconBg: 'bg-yellow-100 text-yellow-700'
    },
    {
      title: 'Data Warehousing & ETL Integration',
      desc: 'Connect heterogeneous data sources (SQL Server, Azure Data Lake, Snowflake, Salesforce, Excel) with robust Power Query ETL pipelines and Dataverse.',
      icon: Database,
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Power BI Embedded Solutions',
      desc: 'Embed analytics, charts, and real-time report dashboards directly into your SaaS applications, custom web portals, and mobile apps via Power BI REST APIs.',
      icon: Code,
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'DAX Optimization & Modeling',
      desc: 'Optimize complex Data Analysis Expressions (DAX) calculations, tabluar models, and row-level security (RLS) policies for rapid query response times.',
      icon: Cpu,
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Paginated Reports & Enterprise BI',
      desc: 'Create operational paginated reports formatted for pixel-perfect printing and automated PDF/Excel distribution using Power BI Report Builder.',
      icon: Sliders,
      iconBg: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Power BI Governance & Migration',
      desc: 'Migrate legacy Tableau, Qlik, or SSRS reports to Power BI while establishing data governance, tenant administration, and row-level data protection.',
      icon: ShieldCheck,
      iconBg: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const benefits = [
    {
      title: 'Real-Time Insights',
      desc: 'Access live streaming data feeds and interactive visualizations on desktop, web, and mobile devices instantly.',
      icon: TrendingUp
    },
    {
      title: 'Native Microsoft 365 Security',
      desc: 'Enforce Microsoft Entra ID (Azure AD), sensitivity labels, and row-level security across all executive reports.',
      icon: ShieldCheck
    },
    {
      title: 'Seamless Ecosystem Integration',
      desc: 'Native connectivity with Excel, Teams, Azure Synapse, Dynamics 365, Power Apps, and Power Automate workflows.',
      icon: Layers
    },
    {
      title: 'AI-Powered Analytics',
      desc: 'Leverage quick insights, natural language Q&A, Copilot features, and automated anomaly detection out of the box.',
      icon: Cpu
    },
    {
      title: 'Cost Efficiency',
      desc: 'Maximize ROI by utilizing existing Microsoft 365 licensing with transparent Power BI Pro and Premium capacity options.',
      icon: Clock
    },
    {
      title: 'Custom Visuals & Branding',
      desc: 'Build custom D3.js or custom certified Power BI visuals styled with your company branding guidelines.',
      icon: Monitor
    }
  ];

  const faqs = [
    {
      question: 'What are Microsoft Power BI Consulting Services?',
      answer: 'Power BI consulting helps organizations extract actionable intelligence from raw data. Our consultants design custom interactive dashboards, build robust data models, configure ETL pipelines, and ensure security compliance.'
    },
    {
      question: 'Can you integrate Power BI into our existing SaaS product or web portal?',
      answer: 'Yes! Using Power BI Embedded API, we seamlessly integrate interactive charts and executive analytics into your customer-facing SaaS applications or internal portals.'
    },
    {
      question: 'How do you handle data migration from legacy tools like Tableau or Qlik to Power BI?',
      answer: 'We audit your existing report catalog, recreate data models and DAX measures, establish automated data refresh schedules, and train your staff for a smooth migration.'
    },
    {
      question: 'Do you offer ongoing Power BI support and performance optimization?',
      answer: 'Yes, we provide ongoing support, DAX query tuning, report refresh monitoring, and Microsoft Fabric / Power BI Premium capacity management.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative">
      <SEO
        title="Power BI Consulting Services in USA | Sapphire / Firevy"
        description="Hire top Power BI consultants and developers for custom dashboard design, DAX data modeling, Power BI Embedded, and enterprise business intelligence solutions."
      />

      {/* Floating Action Edge Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-1">
        <a
          href="tel:+15551234567"
          className="w-11 h-11 bg-[#005F96] hover:bg-[#004875] text-white rounded-l-lg flex items-center justify-center shadow-lg transition-all transform hover:scale-105"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <Link
          to="/contact"
          className="w-11 h-11 bg-[#10B981] hover:bg-[#059669] text-white rounded-l-lg flex items-center justify-center shadow-lg transition-all transform hover:scale-105"
          title="Chat / Contact Us"
        >
          <MessageSquare className="w-5 h-5" />
        </Link>
      </div>

      {/* =========================================================================
          1. MAIN SECTION 1: Power BI Consulting Services in USA
          ========================================================================= */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-slate-50/70 text-slate-900 text-left border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#0F172A] leading-[1.18] tracking-tight font-sans">
                Power BI Consulting Services<br />in USA
              </h1>

              <p className="text-base text-[#475569] leading-relaxed font-normal max-w-[560px]">
                Transform complex enterprise data into clear, actionable business intelligence with Microsoft Power BI. As a trusted <strong className="text-[#005F96] font-semibold">Power BI consulting company</strong>, we craft interactive dashboards, optimize DAX data models, integrate Power BI Embedded, and empower decision-makers across your organization.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#005F96] hover:bg-[#004875] text-white font-[700] text-sm px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 1:1 Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px] aspect-[5/4] flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-yellow-100/50 rounded-full blur-3xl transform scale-90 pointer-events-none" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-auto max-h-[390px]" viewBox="0 0 550 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow_powerbi_hero" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* Central Monitor */}
                    <rect x="110" y="130" width="310" height="210" rx="12" fill="#1E293B" filter="url(#shadow_powerbi_hero)" />
                    <rect x="120" y="142" width="290" height="186" rx="6" fill="#FFFFFF" />

                    {/* Header bar */}
                    <path d="M 120 146 C 120 143.7, 121.7 142, 124 142 L 406 142 C 408.3 142, 410 143.7, 410 146 L 410 162 L 120 162 Z" fill="#F8FAFC" />
                    <circle cx="132" cy="152" r="3.5" fill="#EF4444" />
                    <circle cx="143" cy="152" r="3.5" fill="#F59E0B" />
                    <circle cx="154" cy="152" r="3.5" fill="#10B981" />

                    {/* Bar Chart Graphics on Screen */}
                    <g transform="translate(140, 180)">
                      <rect x="0" y="50" width="20" height="60" rx="3" fill="#F59E0B" />
                      <rect x="30" y="30" width="20" height="80" rx="3" fill="#005F96" />
                      <rect x="60" y="10" width="20" height="100" rx="3" fill="#10B981" />
                      <rect x="90" y="40" width="20" height="70" rx="3" fill="#3B82F6" />
                    </g>

                    {/* Pie Chart Card Widget */}
                    <g transform="translate(280, 180)">
                      <rect x="0" y="0" width="105" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                      <circle cx="52" cy="55" r="35" fill="#F59E0B" />
                      <path d="M 52 55 L 52 20 A 35 35 0 0 1 87 55 Z" fill="#005F96" />
                      <path d="M 52 55 L 87 55 A 35 35 0 0 1 52 90 Z" fill="#10B981" />
                    </g>

                    {/* Floating Power BI Yellow Badge */}
                    <g transform="translate(410, 85)">
                      <rect x="0" y="0" width="55" height="55" rx="12" fill="#F59E0B" filter="url(#shadow_powerbi_hero)" />
                      <path d="M 16 38 V 26 M 27 38 V 16 M 38 38 V 20" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                    </g>

                    {/* Seated Analyst */}
                    <g transform="translate(55, 170)">
                      <circle cx="40" cy="20" r="11" fill="#FEDECF" />
                      <path d="M 28 18 C 28 8, 42 4, 50 10 Z" fill="#1E293B" />
                      <path d="M 28 32 L 52 32 L 48 90 L 24 90 Z" fill="#D97706" />
                      <path d="M 24 90 L 10 135 L 30 135 L 40 95 Z" fill="#1E293B" />
                      <path d="M 48 90 L 65 135 L 80 135 L 60 95 Z" fill="#1E293B" />
                      <path d="M 25 80 L 65 80 L 55 95 L 15 95 Z" fill="#005F96" />
                    </g>

                    {/* Stand */}
                    <path d="M 80 340 L 450 340 C 455 340, 460 345, 450 352 L 80 352 C 70 352, 75 345, 80 340 Z" fill="#CBD5E1" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Marquee Strip */}
      <BrandLogoMarquee />

      {/* =========================================================================
          2. MAIN SECTION 2: Leading Power BI Provider
          ========================================================================= */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center p-2">
                <svg className="w-full h-auto max-h-[360px]" viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="360" height="240" rx="10" fill="#1E293B" />
                  <rect x="60" y="65" width="340" height="210" rx="4" fill="#FFFFFF" />
                  
                  {/* Dashboard Cards */}
                  <rect x="80" y="90" width="90" height="60" rx="6" fill="#FEF3C7" stroke="#F59E0B" />
                  <rect x="185" y="90" width="90" height="60" rx="6" fill="#E0F2FE" stroke="#0284C7" />
                  <rect x="290" y="90" width="90" height="60" rx="6" fill="#DCFCE7" stroke="#16A34A" />

                  <line x1="80" y1="180" x2="380" y2="180" stroke="#E2E8F0" strokeWidth="2" />
                  <path d="M 80 240 L 150 200 L 220 220 L 300 170 L 380 190" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0F172A] leading-tight font-sans">
                Leading Power BI Consulting Service Provider Globally
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                We empower enterprise leaders to make confident, data-driven decisions. By modeling your data efficiently with Microsoft Fabric and Power BI Desktop, we deliver automated visual reports, key performance indicators (KPIs), and predictive analytics tailored to your industry.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#005F96] font-bold hover:underline"
                >
                  Explore our Power BI analytics solutions →
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. MAIN SECTION 3: Brief About Power BI
          ========================================================================= */}
      <section className="py-20 bg-slate-50/70 text-slate-900 border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0F172A] leading-tight font-sans">
                Brief About Power BI Consulting Services
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Not only do we guarantee that your Power BI report suites are intuitive and responsive for executive leadership, but we also ensure seamless data security for IT administrators. Whether connected to Azure Synapse, SQL Server, Snowflake, or Salesforce, we optimize data pipelines for peak performance.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                Power BI is Microsoft’s market-leading analytics platform, trusted globally to convert disparate data feeds into clear, interactive charts and automated operational reports.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center p-2">
                <svg className="w-full h-auto max-h-[360px]" viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="180" y="60" width="160" height="110" rx="6" fill="#1E293B" />
                  <rect x="188" y="70" width="144" height="90" rx="3" fill="#FFFFFF" />
                  
                  <rect x="40" y="140" width="160" height="110" rx="6" fill="#1E293B" />
                  <rect x="48" y="150" width="144" height="90" rx="3" fill="#FFFFFF" />

                  <rect x="320" y="140" width="160" height="110" rx="6" fill="#1E293B" />
                  <rect x="328" y="150" width="144" height="90" rx="3" fill="#FFFFFF" />

                  <rect x="30" y="270" width="460" height="16" rx="4" fill="#64748B" />
                  <rect x="100" y="286" width="20" height="80" fill="#475569" />
                  <rect x="400" y="286" width="20" height="80" fill="#475569" />
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Our Comprehensive Power BI Services
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From ETL data pipeline construction to custom DAX measures and embedded SaaS analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rangeServices.map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${item.iconBg}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Why Choose Power BI for Business Analytics?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-yellow-50 text-[#D97706] rounded-lg">
                  <b.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SapphireTechStackGrid />
      <ProcessWeFollow />
      <AndroidHiringModels />
      <InnovativeSolutionsVideoSection />
      <OurStoryTheirWordsSection />
      <FeaturedInBrandsSection />
      <SapphireFaqSection faqs={faqs} />
      <RecentBlogsSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default PowerBiConsultingService;
