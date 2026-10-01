import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ProcessWeFollow from '../common/ProcessWeFollow';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireFaqSection from '../common/SapphireFaqSection';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import { 
  ArrowRight, 
  Cpu, 
  BarChart3, 
  LineChart, 
  Network, 
  Sparkles, 
  Stethoscope, 
  GraduationCap, 
  Film, 
  Heart, 
  ShoppingBag, 
  Landmark, 
  ShieldCheck, 
  Leaf,
  Car,
  Lightbulb,
  Users,
  Bot
} from 'lucide-react';

export const EnterpriseAiDevelopmentService = () => {
  const [activeSuiteTab, setActiveSuiteTab] = useState(0);
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto Scroll every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const stats = [
    { value: '80+', label: 'Mobile App Developers' },
    { value: '15+', label: 'Fortunes 500 Companies' },
    { value: '800+', label: 'Project Completed in Mobile Technology' },
    { value: '250+', label: '5-Star Clutch Reviews' }
  ];

  const aiPageBrandLogos = [
    { name: 'HONDA', image: '/images/honda_logo.png', isActive: true },
    { name: 'LafargeHolcim', image: '/images/logo_lafargeHolcim.svg', isActive: true },
    { name: 'Cummins', image: '/images/ncummins.png', isActive: true },
    { name: "L'ORÉAL", image: '/images/logo_loreal.png', isActive: true },
    { name: 'TDSG', image: '/images/logo_tdsg.png', isActive: true },
    { name: 'ASTRAL PIPES', image: '/images/logo_astral.png', isActive: true },
    { name: 'CLP INDIA', image: '/images/logo_clp_india.svg', isActive: true },
    { name: 'adani', image: '/images/logo_adani.svg', isActive: true },
    { name: 'TOYOTA', image: '/images/toyota_logo.webp', isActive: true },
    { name: 'Almarai', image: '/images/almarai_corporate_logo.png', isActive: true },
    { name: 'ORIENT CEMENT', image: '/images/orient_logo.svg', isActive: true },
    { name: 'AMERICAN EXPRESS', image: '/images/logo_american_express.svg', isActive: true },
    { name: 'Alembic', image: '/images/alembic_logo.svg', isActive: true }
  ];

  const suiteTabs = [
    {
      id: 'bi',
      name: 'Business Intelligence (BI) Driven by Artificial Intelligence',
      cards: [
        { title: 'AI-Powered BI Insights Hub', icon: Cpu },
        { title: 'Predictive Analytics & Smart Reporting Suite', icon: LineChart },
        { title: 'AI-Driven Data Discovery Engine', icon: BarChart3 },
        { title: 'Automated AI Decision Support System', icon: Network }
      ],
      footerText: 'Our AI-driven BI services are centered on performance measurement systems, real-time business insights, and data visualization. These capabilities enable businesses to make informed decisions and capitalize on sophisticated analytics to drive growth.'
    },
    {
      id: 'custom',
      name: 'Custom AI Development',
      cards: [
        { title: 'Custom Machine Learning Models', icon: Cpu },
        { title: 'Proprietary Algorithm Engineering', icon: Sparkles },
        { title: 'Tailored Neural Network Architectures', icon: Network },
        { title: 'Bespoke Computer Vision Systems', icon: BarChart3 }
      ],
      footerText: 'Our custom AI development services build bespoke machine learning models, tailored neural networks, and scalable computer vision pipelines aligned with your unique business goals.'
    },
    {
      id: 'integration',
      name: 'Enterprise AI Integration',
      cards: [
        { title: 'Legacy ERP & CRM AI Middleware', icon: Network },
        { title: 'Secure REST & GraphQL API Gateways', icon: Cpu },
        { title: 'Real-Time Data Pipeline Streamer', icon: LineChart },
        { title: 'Multi-Cloud Microservices Orchestrator', icon: Sparkles }
      ],
      footerText: 'Seamlessly integrate enterprise AI engines into your existing ERP, CRM, and cloud infrastructure with zero operational downtime and robust SOC2/ISO security standards.'
    },
    {
      id: 'genai',
      name: 'Generative Artificial Intelligence Development',
      cards: [
        { title: 'Custom LLM Fine-Tuning & RAG', icon: Sparkles },
        { title: 'Generative Content & Media Engines', icon: Cpu },
        { title: 'Automated Code & Text Synthesis', icon: LineChart },
        { title: 'Enterprise Synthetic Data Generator', icon: BarChart3 }
      ],
      footerText: 'Empower your enterprise with custom generative AI solutions, RAG pipelines, LLM fine-tuning, and automated content generation that accelerate productivity across teams.'
    },
    {
      id: 'data',
      name: 'Data Analysis',
      cards: [
        { title: 'Automated Data Cleansing & ETL', icon: BarChart3 },
        { title: 'Real-Time Streaming Analytics', icon: LineChart },
        { title: 'Big Data Warehousing & Lakes', icon: Cpu },
        { title: 'Interactive BI Dashboards', icon: Network }
      ],
      footerText: 'Transform raw unstructured enterprise data into clean, structured streams and interactive visual dashboards that power data-driven strategic growth.'
    },
    {
      id: 'consulting',
      name: 'Enterprise Artificial Intelligence Consulting',
      cards: [
        { title: 'AI Architecture & Roadmap Strategy', icon: Network },
        { title: 'Feasibility & ROI Assessment', icon: LineChart },
        { title: 'Data Governance & Security Audit', icon: ShieldCheck },
        { title: 'AI Ethics & Compliance Framework', icon: Sparkles }
      ],
      footerText: 'Our enterprise AI consultants guide your leadership team through strategic roadmap planning, feasibility studies, data governance, and AI ROI maximization.'
    }
  ];

  // Exactly matching SECOND IMAGE
  const industrySolutions = [
    {
      bgColor: 'bg-[#F8CDE2]',
      iconBg: 'bg-[#E91E63]',
      Icon: Heart,
      title: 'AI-Based Matrimony Apps',
      desc: 'AI is revolutionizing the way people find their life partners through AI-Based Matrimony App Development, making matchmaking smarter, faster, and more personalized.'
    },
    {
      bgColor: 'bg-[#FBE3D5]',
      iconBg: 'bg-[#F97316]',
      Icon: Bot,
      title: 'AI Environmental Monitoring',
      desc: 'AI is playing a crucial role in safeguarding the environment by enabling real-time tracking and analysis of ecological changes.'
    },
    {
      bgColor: 'bg-[#E2F5D7]',
      iconBg: 'bg-[#10B981]',
      Icon: Car,
      title: 'AI-Powered Innovations',
      desc: 'The integration of AI and IoT is transforming urban mobility and infrastructure through IoT solutions for smart city development.'
    },
    {
      bgColor: 'bg-[#FEF3D6]',
      iconBg: 'bg-[#F59E0B]',
      Icon: Lightbulb,
      title: 'AI-Powered Solutions',
      desc: 'Artificial Intelligence is revolutionizing the way businesses operate, enhancing productivity, decision-making, and customer engagement.'
    },
    {
      bgColor: 'bg-[#D2F4F7]',
      iconBg: 'bg-[#06B6D4]',
      Icon: Users,
      title: 'AI Human Resources',
      desc: 'Artificial Intelligence is streamlining HR operations, automated talent matching, and recruitment decision-making.'
    },
    {
      bgColor: 'bg-[#E2D7F7]',
      iconBg: 'bg-[#9B51E0]',
      Icon: Film,
      title: 'AI in Media and Entertainment',
      desc: 'AI is revolutionizing the media and entertainment industry by enhancing content creation, recommendation, and personalization.'
    },
    {
      bgColor: 'bg-[#D0E4F7]',
      iconBg: 'bg-[#2B78D4]',
      Icon: Stethoscope,
      title: 'AI in Healthcare',
      desc: 'AI is transforming the healthcare industry by enhancing diagnostics, patient care, and administrative efficiency.'
    }
  ];

  // 18 AI Tech Stack Cluster Items 1:1 EXACTLY matching user First Image reference
  const aiTechStacks = [
    {
      name: 'Python',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 128 128">
          <path fill="#3776AB" d="M63.04 8c-26.68 0-25.04 11.58-25.04 11.58l.03 11.96h25.46v3.65H27.56S8 33.02 8 60.15c0 27.14 17.15 26.1 17.15 26.1h10.23v-14.4c0-16.2 13.9-15.68 13.9-15.68h25.18s13.38.2 13.38-12.92V23.47S90.4 8 63.04 8zm-13.8 15.65c2.58 0 4.67 2.1 4.67 4.68 0 2.59-2.09 4.69-4.67 4.69a4.68 4.68 0 1 1 0-9.37z"/>
          <path fill="#FFD43B" d="M64.96 120c26.68 0 25.04-11.58 25.04-11.58l-.03-11.96H64.51v-3.65h35.93S120 94.98 120 67.85c0-27.14-17.15-26.1-17.15-26.1H92.62v14.4c0 16.2-13.9 15.68-13.9 15.68H53.54s-13.38-.2-13.38 12.92v20.78S37.6 120 64.96 120zm13.8-15.65c-2.58 0-4.67-2.1-4.67-4.68 0-2.59 2.09-4.69 4.67-4.69a4.68 4.68 0 1 1 0 9.37z"/>
        </svg>
      )
    },
    {
      name: 'Big Data',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M24 12c11.046 0 20-3.134 20-7S35.046 2 24 2 4 5.134 4 9s8.954 7 20 7z" fill="#0072C6"/>
          <path d="M44 9v11c0 3.866-8.954 7-20 7S4 23.866 4 20V9c0 3.866 8.954 7 20 7s20-3.134 20-7z" fill="#005A9E"/>
          <path d="M44 20v11c0 3.866-8.954 7-20 7S4 34.866 4 31V20c0 3.866 8.954 7 20 7s20-3.134 20-7z" fill="#004578"/>
          <path d="M44 31v11c0 3.866-8.954 7-20 7S4 45.866 4 42V31c0 3.866 8.954 7 20 7s20-3.134 20-7z" fill="#002050"/>
        </svg>
      )
    },
    {
      name: 'Machine Learning',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="21" fill="#E6F2FE" stroke="#2563EB" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="10" stroke="#005F96" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="24" cy="14" r="3.5" fill="#2563EB" />
          <circle cx="15" cy="28" r="3.5" fill="#2563EB" />
          <circle cx="33" cy="28" r="3.5" fill="#2563EB" />
          <path d="M24 14l-9 14M24 14l9 14M15 28h18M24 14v10" stroke="#005F96" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: 'ETL',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M20 10c8 0 14-2 14-4.5S28 1 20 1 6 3 6 5.5 12 10 20 10z" fill="#0072C6"/>
          <path d="M34 5.5v8c0 2.5-6 4.5-14 4.5S6 16 6 13.5v-8c0 2.5 6 4.5 14 4.5s14-2 14-4.5z" fill="#005A9E"/>
          <path d="M34 13.5v8c0 2.5-6 4.5-14 4.5S6 24 6 21.5v-8c0 2.5 6 4.5 14 4.5s14-2 14-4.5z" fill="#004578"/>
          <circle cx="33" cy="33" r="11" fill="#FFF" stroke="#F59E0B" strokeWidth="3" />
          <path d="M33 26v4M33 36v4M26 33h4M36 33h4M28 28l3 3M35 35l3 3M28 38l3-3M35 31l3-3" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="33" cy="33" r="4" fill="#F59E0B" />
        </svg>
      )
    },
    {
      name: 'Databricks',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L4 14l20 10 20-10L24 4z" fill="#FF3621"/>
          <path d="M4 22.5l20 10 20-10" stroke="#FF3621" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 31l20 10 20-10" stroke="#FF3621" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 39.5l20 10 20-10" stroke="#FF3621" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'OpenCV',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="14" r="8" fill="none" stroke="#E53935" strokeWidth="5" />
          <circle cx="14" cy="31" r="8" fill="none" stroke="#43A047" strokeWidth="5" />
          <circle cx="34" cy="31" r="8" fill="none" stroke="#1E88E5" strokeWidth="5" />
        </svg>
      )
    },

    {
      name: 'Scikit-learn',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 60 40" fill="none">
          <ellipse cx="22" cy="20" rx="16" ry="12" fill="#38BDF8" />
          <ellipse cx="38" cy="20" rx="16" ry="12" fill="#F97316" fillOpacity="0.9" />
          <text x="30" y="24" fontSize="9" fontWeight="900" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif">learn</text>
        </svg>
      )
    },
    {
      name: 'Pandas',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="6" height="32" rx="3" fill="#150458"/>
          <rect x="21" y="14" width="6" height="20" rx="3" fill="#E11D48"/>
          <rect x="34" y="8" width="6" height="32" rx="3" fill="#150458"/>
          <circle cx="11" cy="6" r="2.5" fill="#E11D48" />
          <circle cx="37" cy="42" r="2.5" fill="#E11D48" />
        </svg>
      )
    },
    {
      name: 'Tableau',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <rect x="22" y="2" width="4" height="44" fill="#EB5757" />
          <rect x="2" y="22" width="44" height="4" fill="#EB5757" />
          <rect x="22" y="10" width="4" height="28" fill="#2F80ED" />
          <rect x="10" y="22" width="28" height="4" fill="#2F80ED" />
          <rect x="22" y="16" width="4" height="16" fill="#F2994A" />
          <rect x="16" y="22" width="16" height="4" fill="#F2994A" />
          <rect x="20" y="20" width="8" height="8" fill="#6FCF97" />
        </svg>
      )
    },
    {
      name: 'Tensorflow',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L8 13v22l16 9 16-9V13L24 4z" fill="#FF6F00" fillOpacity="0.15" />
          <path d="M24 4L8 13v22l16 9V22l8 4.5V13L24 4z" fill="#FF6F00" />
          <path d="M24 13l8 4.5v9L24 22v-9z" fill="#FFA000" />
          <path d="M24 22l8 4.5V35l-8-4.5V22z" fill="#FFC107" />
        </svg>
      )
    },
    {
      name: 'Grafana',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6zm0 30c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" fill="#F97316"/>
          <path d="M24 12c-6.627 0-12 5.373-12 12h6c0-3.314 2.686-6 6-6v-6z" fill="#EA580C"/>
          <circle cx="24" cy="24" r="4" fill="#F97316" />
        </svg>
      )
    },
    {
      name: 'Azure',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M6 38h23L13 10 6 38z" fill="#0078D4"/>
          <path d="M17 30L29 8h13l-17 30H17z" fill="#50E6FF"/>
        </svg>
      )
    },

    {
      name: 'AWS',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 60 40" fill="none">
          <text x="30" y="20" fontSize="18" fontWeight="900" textAnchor="middle" fill="#232F3E" fontFamily="sans-serif">aws</text>
          <path d="M12 28c12 6 24 6 36 0" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 25l4 3-4 3v-6z" fill="#FF9900" />
        </svg>
      )
    },
    {
      name: 'API',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 52 36" fill="none">
          <rect width="52" height="36" rx="8" fill="#1E293B"/>
          <text x="14" y="24" fontSize="15" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">API</text>
          <path d="M38 12l4-4m-4 0l4 4m-2 4l3 3" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'DevOps',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M14 32c-5.523 0-10-4.477-10-10s4.477-10 10-10c6.5 0 10 10 10 10s3.5-10 10-10c5.523 0 10 4.477 10 10s-4.477 10-10 10c-6.5 0-10-10-10-10s-3.5 10-10 10z" stroke="url(#devopsGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="devopsGrad" x1="4" y1="12" x2="44" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="0.5" stopColor="#EC4899" />
              <stop offset="1" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: 'Oracle',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 56 36" fill="none">
          <rect x="4" y="8" width="48" height="20" rx="10" stroke="#F80000" strokeWidth="6" fill="none" />
        </svg>
      )
    },
    {
      name: 'Jupyter',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="24" rx="18" ry="6" stroke="#64748B" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="24" cy="24" r="8" fill="#F97316" />
          <circle cx="24" cy="10" r="3" fill="#F97316" />
          <circle cx="24" cy="38" r="3" fill="#F97316" />
          <circle cx="36" cy="24" r="2" fill="#64748B" />
        </svg>
      )
    },
    {
      name: 'Kubernetes',
      svg: (
        <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
          <path d="M24 4l17.32 10v20L24 44 6.68 34V14L24 4z" fill="#326CE5" />
          <circle cx="24" cy="24" r="6" fill="#FFFFFF" />
          <path d="M24 10v8M24 30v8M12 17l7 4M29 27l7 4M12 31l7-4M29 21l7-4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: '1. Why invest in Enterprise AI development services?',
      a: 'Investing in Enterprise AI solutions empowers enterprises to automate routine tasks, analyze big data for predictive insights, reduce operational expenses, and deliver personalized user experiences that outperform competitors.'
    },
    {
      q: '2. How does your Enterprise AI software provider build custom AI solutions?',
      a: 'We evaluate your business objectives, prepare and clean datasets, select and fine-tune state-of-the-art neural architectures (like LLMs, NLP, Computer Vision, or RAG), and integrate scalable APIs into your existing enterprise infrastructure.'
    },
    {
      q: '3. What personalized marketing and fraud detection AI models do you offer?',
      a: 'We build recommendation systems, predictive churn models, automated fraud anomaly detection engines, and NLP-powered customer engagement assistants tailored for large enterprise workloads.'
    },
    {
      q: '4. Can you integrate Enterprise AI models with our legacy ERP and CRM platforms?',
      a: 'Yes, our Enterprise AI engineering squad specializes in custom middleware, secure REST/GraphQL API wrappers, and cloud container deployments ensuring zero disruption to existing legacy systems.'
    },
    {
      q: '5. How do you protect corporate proprietary data when training Enterprise AI models?',
      a: 'We implement zero-trust data architectures, on-premises or private VPC deployments, strict NDAs, data anonymization pipelines, and SOC2/ISO compliant data governance practices.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Enterprise AI Development Company | Top Enterprise AI Software Provider | Firevy.Co"
        description="Leading Enterprise AI Software Provider specializing in enterprise AI software development services for personalized marketing, fraud detection, and recommendation systems."
        canonical="/services/enterprise-ai-development"
      />

      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 bg-[#F0F8FC] text-slate-900 relative font-sans border-b border-sky-100/80 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Enterprise AI Development Company
              </h1>
              
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal font-sans max-w-xl">
                We are the Leading Enterprise AI Software Provider specializing in the development of Top enterprise AI software development services for personalized marketing, fraud detection, and recommendation systems. Transform data into insights and insights into autonomous intelligence through the integration of AI and data. Contact us now!
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-2 pb-2">
                {stats.map((st, idx) => (
                  <div key={idx} className="space-y-1 text-left">
                    <div className="text-2xl sm:text-3xl font-[900] text-[#005F96] tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-[11.5px] sm:text-[12.5px] font-[600] text-slate-600 leading-tight">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-[15px] transition-all shadow-sm hover:shadow-md cursor-pointer font-sans"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-xl flex items-center justify-center">
                <img
                  src="/images/enterprise_ai_hero_vector.png"
                  alt="Enterprise AI Development Company Illustration"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Brand Logo Marquee */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee data={{ logos: aiPageBrandLogos }} />
      </section>

      {/* 2.5 Feature Section: Get AI Development Services & Count On Us */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-20 sm:space-y-24">
            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <img
                  src="/images/enterprise_ai_industries_vector.png"
                  alt="Get AI Development Services For Different Industries"
                  className="w-full max-w-lg h-auto object-contain select-none pointer-events-none drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-6 space-y-4 text-left">
                <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] leading-[1.25] tracking-tight">
                  Get AI Development Services For Different Industries
                </h2>
                <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                  Our AI technology development solutions will enhance your operational efficiency by transforming constraints into success stories. As an Enterprise Generative AI Development Company, we are experts in the development of enterprise-level AI architectures that are designed to seamlessly integrate into your current structure. Our Affordable AI Consulting Services encompass the entire AI development lifecycle, from conceptualization to deployment and beyond. Our Custom Enterprise AI Development Services are customized to co-create effective and reliable AI solutions for your business requirements, whether you require custom enterprise AI chatbot solutions, AI recruitment platforms, or advanced AI platforms.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-4 text-left order-2 lg:order-1">
                <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] leading-[1.25] tracking-tight">
                  Count On Us For Result-Driven Enterprise AI Solutions
                </h2>
                <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.85] font-normal">
                  We guarantee that your AI project optimizes cost and development efficiency without sacrificing quality through prudent resource allocation. Enterprise AI platform development company encompass the development of professional enterprise AI chatbots for organizations with the objective of enhancing consumer experience and communication. We achieve quantifiable change in the areas of executive AI recruitment, healthcare AI, and the strategic AI architecture that your company requires. Firevy is a best enterprise AI development company that has a demonstrated history of successful AI implementations, which you can rely on to generate tangible results and stimulate business expansion.
                </p>
              </div>
              <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                <img
                  src="/images/enterprise_ai_solutions_vector.png"
                  alt="Count On Us For Result-Driven Enterprise AI Solutions"
                  className="w-full max-w-lg h-auto object-contain select-none pointer-events-none drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2.6 SECTION: Scale Smarter With Our Suite of AI Development Services */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-200/60">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-[1.2]">
              Scale Smarter With Our Suite of Ai Development Services
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal max-w-3xl mx-auto">
              Our suite of Enterprise AI Development Services includes evaluation features, including exams and quizzes, to gauge students' comprehension and memory of material. As an AI Development Company, we enhance enterprise knowledge by developing AI-powered tools that simplify information management and produce actionable insights.
            </p>
          </div>

          {/* Pill Tabs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-5xl mx-auto">
            {suiteTabs.map((tab, index) => {
              const isActive = activeSuiteTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSuiteTab(index)}
                  className={`px-4 sm:px-5 py-2.5 rounded-[6px] text-[13px] sm:text-[14px] font-[700] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#005F96] text-white shadow-md scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* 4 Cards Grid for Active Tab */}
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {suiteTabs[activeSuiteTab].cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[12px] p-6 sm:p-7 text-center space-y-4 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[170px]"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#EBF5FB] flex items-center justify-center text-[#005F96]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-[15px] sm:text-[16px] font-[800] text-[#0B0F19] leading-snug">
                      {card.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Bottom Footer Text Below Cards */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] text-center max-w-4xl mx-auto leading-[1.8] font-normal">
              {suiteTabs[activeSuiteTab].footerText}
            </p>
          </div>
        </Container>
      </section>

      {/* 2.7 SECTION: Leverage Our AI Solutions (CLEAN HEADER WITHOUT ARROWS, WIDER CARDS, 2.5s AUTO-SCROLL) */}
      <section className="py-16 sm:py-24 bg-[#F4F8FC] text-slate-900 font-sans border-b border-slate-200/60 overflow-hidden w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header Area */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
            <h2 className="text-[30px] sm:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-[1.2]">
              Leverage Our AI Solutions and Services for Business across Industries
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal max-w-3xl mx-auto">
              As a Leading Enterprise AI Software Provider, we keep your business prepared for AI because of our global expertise, which is combined with the most recent knowledge from technology partners and hyperscalers.
            </p>
          </div>

          {/* Edge-to-Edge Full Width Horizontal Slider Track with Wider Cards */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth pb-8 pt-2 snap-x snap-mandatory scrollbar-none w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industrySolutions.map((item, idx) => {
              const IconComp = item.Icon;
              return (
                <div
                  key={idx}
                  className={`snap-start w-[360px] sm:w-[460px] md:w-[500px] lg:w-[540px] shrink-0 ${item.bgColor} rounded-[22px] p-8 sm:p-10 text-left space-y-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between border border-black/5 min-h-[290px]`}
                >
                  <div className="space-y-4">
                    {/* Small Square Rounded Icon Box matching Image 2 */}
                    <div className={`w-12 h-12 rounded-[12px] ${item.iconBg} flex items-center justify-center text-white shadow-sm`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    {/* Card Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-[800] text-[#0B0F19] leading-snug">
                      {item.title}
                    </h3>
                    
                    {/* Card Description */}
                    <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.8 SECTION: AI Tech Stack Cluster We Use for Intelligent Model Development */}
      <section className="py-16 sm:py-24 bg-[#F0F8FC] text-slate-900 font-sans border-b border-slate-200/60">
        <Container>
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-[30px] sm:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-[1.2]">
              AI Tech Stack Cluster We Use for Intelligent Model Development
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal max-w-3xl mx-auto">
              As an Enterprise AI Development Company, we employ these AI stacks as a structural framework that consists of interdependent layers, each of which performs a critical function to guarantee the system's efficiency and effectiveness.
            </p>
          </div>

          {/* 18 White Cards Grid (6 columns x 3 rows) matching First Image 1:1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {aiTechStacks.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100/90 space-y-3 min-h-[140px] hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {tech.svg}
                </div>
                <span className="text-[14.5px] sm:text-[15.5px] font-[800] text-[#0B0F19] leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Process We Follow */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from Enterprise AI architecture, data pipelines, model training, security auditing, to cloud deployment."
      />

      {/* 4.5 Our Premium Services */}
      <PremiumServicesGrid companyName="Firevy.Co" />

      {/* 5. Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 6. Innovative Solutions Video Section */}
      <InnovativeSolutionsVideoSection />

      {/* 7. Frequently Asked Questions */}
      <SapphireFaqSection faqList={faqs} />
    </div>
  );
};

export default EnterpriseAiDevelopmentService;
