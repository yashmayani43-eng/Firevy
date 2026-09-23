import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
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
  Cpu,
  Brain,
  Zap,
  ShieldCheck,
  Code2,
  Bot,
  Terminal,
  Database,
  Workflow
} from 'lucide-react';

export const AiCopilotDevelopmentService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: '45% Faster', label: 'Speed boost achieved by developers using custom AI Copilots in daily workflows.' },
    { value: '99.9%', label: 'Accuracy in domain-specific code and workflow suggestions with custom LLM tuning.' },
    { value: '60% Reduction', label: 'Decrease in repetitive task completion time across enterprise teams.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'Custom Enterprise Copilots',
      icon: <Bot className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Build domain-specific AI copilots trained on your internal codebases, documentation, and enterprise knowledge bases for instant automated assistance.',
      bullets: [
        'Internal Knowledge Ingestion',
        'Role-Based Context Awareness',
        'Custom IDE & Workplace Plugins',
        'Zero Data Leakage Governance'
      ]
    },
    {
      id: 1,
      title: 'Workflow Automation Assistants',
      icon: <Workflow className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Empower your teams with intelligent virtual co-pilots that trigger complex multi-step backend workflows and generate automated reports.',
      bullets: [
        'Automated Action Execution',
        'API & Database Orchestration',
        'Smart Query Translation',
        'Proactive Process Recommendations'
      ]
    },
    {
      id: 2,
      title: 'Code & Technical Copilots',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Assist developers with instant inline code generation, bug fixing, refactoring, and unit test creation tailored to proprietary standards.',
      bullets: [
        'Proprietary Code Autocomplete',
        'Automated Bug Diagnosis',
        'Architecture Standard Enforcement',
        'Security Vulnerability Scanning'
      ]
    }
  ];

  const faqs = [
    {
      q: '1. What is an AI Copilot Development service?',
      a: 'AI Copilot Development involves building custom AI assistants tailored to your company proprietary data, workflows, and tools to assist employees in completing complex tasks faster.'
    },
    {
      q: '2. How does an AI Copilot ensure data security?',
      a: 'We deploy private Copilot models within your secure VPC or on-premises servers ensuring zero data sharing with public LLM providers.'
    },
    {
      q: '3. Can custom Copilots integrate with our existing tools?',
      a: 'Yes! We create custom extensions for VS Code, Slack, Microsoft Teams, Salesforce, JIRA, and custom internal portals.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI Copilot Development Services | Custom AI Assistants"
        description="Build custom AI Copilot solutions tailored for enterprise workflows, software development, customer support, and internal knowledge automation."
        canonical="/services/ai-copilot-development"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-[#006B8F] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Enterprise AI</span>
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] leading-[1.15]">
                AI Copilot Development Services
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Transform your workforce productivity with custom AI Copilots. We design, fine-tune, and integrate domain-specific AI virtual assistants that seamlessly integrate into your everyday tools and enterprise software.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Build Your AI Copilot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="AI Copilot Development"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BRAND MARQUEE */}
      <BrandLogoMarquee />

      {/* STATS SECTION */}
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

      {/* TAILORED SOLUTIONS */}
      <section className="py-16 bg-[#F4F8FA] border-y border-slate-200/80 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950">
              Custom AI Copilot Solutions
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

      {/* PREMIUM SERVICES */}
      <PremiumServicesGrid />

      {/* OUR RECENT PROJECTS */}
      <OurRecentProjectsGrid />

      {/* VIDEO TESTIMONIALS */}
      <VideoTestimonialsStory />

      {/* FAQS */}
      <SapphireFaqSection faqList={faqs} />

      {/* FEATURED IN LOGOS */}
      <FeaturedInLogosGrid />

      {/* CTA BANNER */}
      <section className="py-14 bg-[#005F96] text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Supercharge Productivity with Custom AI Copilots?
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#005F96] rounded-lg font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Contact AI Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AiCopilotDevelopmentService;
