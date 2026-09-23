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
  Terminal,
  Cpu,
  Brain,
  Zap,
  Code2
} from 'lucide-react';

export const AiPromptEngineeringService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: '70% Token Reduction', label: 'Average decrease in API token usage via optimized prompt architectures.' },
    { value: '99.5% Output Fidelity', label: 'Consistency in structured JSON/XML responses from Generative AI LLMs.' },
    { value: '5x Latency Improvement', label: 'Faster model evaluation using fewest-shot and chain-of-thought optimization.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'Prompt Architecture & Optimization',
      icon: <Terminal className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Design system-level prompt templates with structured output constraints, context compression, and token cost reduction.',
      bullets: [
        'System Prompt Engineering',
        'Few-Shot & Zero-Shot Tuning',
        'Structured Output Enforcers (JSON, Pydantic)',
        'Token & Latency Cost Optimization'
      ]
    },
    {
      id: 1,
      title: 'Chain-of-Thought & Reasoning Pipelines',
      icon: <Brain className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Construct advanced reasoning prompt chains (CoT, ReAct, Tree-of-Thought) for solving complex multi-step logical problems.',
      bullets: [
        'Chain-of-Thought Prompting',
        'ReAct Agent Prompt Design',
        'Self-Consistency & Reflection Loops',
        'Multi-Agent System Orchestration'
      ]
    },
    {
      id: 2,
      title: 'Prompt Security & Injection Defense',
      icon: <Zap className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Harden your LLM prompts against prompt injection, jailbreaking, data extraction, and hallucination exploits.',
      bullets: [
        'Prompt Injection Defense',
        'Adversarial Jailbreak Testing',
        'Output Hallucination Filters',
        'Safety Guardrails & Content Moderation'
      ]
    }
  ];

  const faqs = [
    {
      q: '1. What is AI Prompt Engineering?',
      a: 'AI Prompt Engineering is the practice of designing, tuning, and structuring instructions for Large Language Models (LLMs) to maximize accuracy, lower token costs, and guarantee deterministic outputs.'
    },
    {
      q: '2. How does prompt optimization reduce LLM API costs?',
      a: 'By compressing context, eliminating redundant instructions, and using precise few-shot samples, we cut token consumption by up to 70% per query.'
    },
    {
      q: '3. Can you prevent prompt injection and security exploits?',
      a: 'Yes! We implement strict input sanitization, dual-LLM verification, and defensive prompt framing to block jailbreaks and data leaks.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="AI Prompt Engineering Services | LLM Optimization Company"
        description="Maximize LLM performance, reduce token costs, and prevent prompt injection with our enterprise AI prompt engineering services."
        canonical="/services/ai-prompt-engineering"
      />

      {/* HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-[#006B8F] text-xs font-bold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>LLM Performance Optimization</span>
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] leading-[1.15]">
                AI Prompt Engineering Services
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Unlock the full potential of GPT-4, Claude 3, Llama 3, and custom LLMs. Our prompt engineers craft robust, secure, and cost-efficient prompt architectures for enterprise production applications.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Optimize Your Prompts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="AI Prompt Engineering"
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
              Enterprise Prompt Engineering Solutions
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
              Ready to Reduce Token Costs & Improve AI Accuracy?
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#005F96] rounded-lg font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>Consult Prompt Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AiPromptEngineeringService;
